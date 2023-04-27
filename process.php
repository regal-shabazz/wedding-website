<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $first_name = $_POST["first-name"];
  $last_name = $_POST["last-name"];
  $side_of_family = $_POST["sideOfFamily"];
  
  // Make sure all required fields are filled
  if ($first_name && $last_name && $side_of_family) {
    $to = "officialbabatundeoshin@gmail.com";
    $subject = "New Wedding Access Pass Request";
    $message = "Name: $first_name $last_name<br>Side of Family: $side_of_family";
    $headers = "From: orsheenxi@gmail.com" . "\r\n" .
               "Reply-To: officialbabatundeoshin@gmail.com" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email and check if it was successful
    if (mail($to, $subject, $message, $headers)) {
      echo "Thank you! Your access pass request has been submitted.";
    } else {
      echo "There was an error submitting your access pass request. Please try again later.";
    }
  } else {
    echo "Please fill out all required fields.";
  }
}
?>
