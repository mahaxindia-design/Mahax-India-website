<?php
// webhook.php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

// Verify Token (Used by Meta to verify webhook)
if ($method === 'GET') {
    $mode = $_GET['hub_mode'] ?? '';
    $token = $_GET['hub_verify_token'] ?? '';
    $challenge = $_GET['hub_challenge'] ?? '';

    if ($mode === 'subscribe' && $token === $WHATSAPP_VERIFY_TOKEN) {
        http_response_code(200);
        echo $challenge;
        exit;
    }
    http_response_code(403);
    echo 'Forbidden';
    exit;
}

// Receive Messages (Webhook from Meta)
if ($method === 'POST') {
    $input = file_get_contents('php://input');
    $body = json_decode($input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo 'Invalid JSON';
        exit;
    }

    // WhatsApp Cloud API sends messages inside 'entry' -> 'changes' -> 'value' -> 'messages'
    if (
        isset($body['object']) && $body['object'] === 'whatsapp_business_account' &&
        isset($body['entry'][0]['changes'][0]['value']['messages'][0])
    ) {
        $message = $body['entry'][0]['changes'][0]['value']['messages'][0];
        $senderPhone = $message['from']; // Sender's WhatsApp number

        // Only reply if the environment variables are set
        if (!empty($WHATSAPP_ACCESS_TOKEN) && !empty($WHATSAPP_PHONE_NUMBER_ID) && $WHATSAPP_ACCESS_TOKEN !== 'YOUR_ACCESS_TOKEN_HERE') {
            sendAcknowledgement($WHATSAPP_PHONE_NUMBER_ID, $WHATSAPP_ACCESS_TOKEN, $senderPhone);
        }
    }

    http_response_code(200);
    echo 'EVENT_RECEIVED';
    exit;
}

http_response_code(405);
echo 'Method Not Allowed';
exit;

// Function to send a text message using WhatsApp Cloud API
function sendAcknowledgement($phoneId, $accessToken, $to) {
    $text = "Hi 👋 Welcome to MAHAX.\n\nThanks for reaching out to us. We've received your message and our team will get back to you shortly.\n\nSmarter Car Care. Cleaner Cities. Better Livelihoods.";
    
    $payload = [
        'messaging_product' => 'whatsapp',
        'to' => $to,
        'text' => [ 'body' => $text ]
    ];

    $url = "https://graph.facebook.com/v19.0/{$phoneId}/messages";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer {$accessToken}",
        "Content-Type: application/json"
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode >= 400) {
        error_log("Failed to send WhatsApp message: " . $response);
    }
}
?>
