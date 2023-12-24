<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];

    // Формируем сообщение
    $message = "Имя: $name\nE-mail: $email\nТелефон: $tel";

    // Отправляем письмо
    $to = "serzguk31@gmail.com";
    $subject = "Новая заявка с формы на вашем сайте";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Данные успешно отправлены на почту.";
    } else {
        echo "Ошибка при отправке данных на почту.";
    }
} else {
    echo "Ошибка: Недопустимый метод запроса.";
}
?>
