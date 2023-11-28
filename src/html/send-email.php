<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subjectLetter = $_POST["subject"];
    $message = $_POST["message"];

    // Налаштування параметрів листа
    $to = "anvizahid@gmail.com";
    $subject = "Нове повідомлення від форми";
    $headers = "From: " . $email;

    // Складання тексту листа
    $email_body = "Ім'я: $name\n";
    $email_body .= "Прізвище: $surname\n";
    $email_body .= "Електронна пошта: $email\n";
    $email_body .= "Номер телефону: $phone\n";
    $email_body .= "Тема: $subjectLetter\n";
    $email_body .= "Повідомлення: $message\n";

    // Відправлення листа
    mail($to, $subject, $email_body, $headers);

    // Відповідь на клієнта
    echo json_encode(array("success" => true, "message" => "Лист успішно відправлено"));
} else {
    // Відповідь на невірний метод запиту
    echo json_encode(array("success" => false, "message" => "Неправильний метод запиту"));
}
?>
