<?php
// Отримуємо вміст файлу products.json
$jsonData = file_get_contents('data/products.json');

// Парсимо JSON-дані
$data = json_decode($jsonData, true);

// Відправляємо дані як відповідь JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
