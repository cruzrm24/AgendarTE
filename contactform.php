<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["contact_name"];
    $email = $_POST["contact_email"];
    $subject = $_POST["contact_subject"];
    $message = $_POST["contact_message"];

    // Set up email parameters
    $to = "cruzrm24@gmail.com"; // Change this to your email address
    $headers = "From: $name <$email>";
    $body = "Subject: $subject\n\n$message";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo json_encode(array("success" => true));
    } else {
        // Email sending failed
        echo json_encode(array("success" => false));
    }
} else {
    // Redirect if accessed directly
    header("Location: /");
    exit;
}
