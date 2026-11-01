<?php
require_once 'config.php';

header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Read the incoming message
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Bad Request: message is required']);
    exit;
}

$userMessage = $data['message'];
$history = $data['history'] ?? [];

if (empty($GEMINI_API_KEY) || $GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
    http_response_code(500);
    echo json_encode(['error' => 'Gemini API Key is not configured on the server.']);
    exit;
}

// Prepare the payload for Gemini API
// Using Gemini 1.5 Flash for fast, conversational responses
$geminiEndpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . $GEMINI_API_KEY;

// Define the system instructions so Gemini acts as MAHAX
$systemInstruction = "You are the official AI Customer Support Assistant for MAHAX. 
MAHAX is an AI-First Urban Car Care Platform in India, focused on Zero Fuel Use, 100% Eco-Friendly operations, and smarter car care. 
Products available (Premium Kits): 
- MAHAX ProCare™ (Premium Microfiber System, ₹1099)
- MAHAX ClearView™ (Advanced Glass Care System, ₹1099)
- MAHAX ProReach™ (Extended Duster System, ₹1099). 
Services: Doorstep car care services including waterless wash, ceramic coating, and interior detailing.
Tone: Premium, helpful, polite, and concise. 
If a customer asks a complex question or wants to book/buy, tell them to use the WhatsApp button or Contact links on the website.";

$contents = [];

// Convert the frontend history into Gemini format
foreach ($history as $msg) {
    $contents[] = [
        "role" => $msg['role'] === 'user' ? 'user' : 'model',
        "parts" => [["text" => $msg['content']]]
    ];
}

// Add the latest user message
$contents[] = [
    "role" => "user",
    "parts" => [["text" => $userMessage]]
];

$payload = [
    "system_instruction" => [
        "parts" => [
            ["text" => $systemInstruction]
        ]
    ],
    "contents" => $contents,
    "generationConfig" => [
        "temperature" => 0.7,
        "maxOutputTokens" => 256
    ]
];

$ch = curl_init($geminiEndpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 400) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to connect to AI provider.', 'details' => json_decode($response)]);
    exit;
}

$responseData = json_decode($response, true);
$aiText = $responseData['candidates'][0]['content']['parts'][0]['text'] ?? "Sorry, I couldn't understand that.";

echo json_encode(['reply' => $aiText]);
?>
