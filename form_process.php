<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="images/favicon.ico"  type="image/icon type">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Melissa Isaacson">
        <meta name="description" content="Melissa Isaacson's online resume.">
        <meta name="keywords" content="web developer, web design, web development, Melissa Isaacson, resume">
        <meta name="robots" content="noindex, nofollow">
        <title>Melissa Isaacson's Resume</title>
        <!-- CSS -->
        <link href="./css/normalize.css" rel="stylesheet">
        <link href="./css/main.css" rel="stylesheet">
        <!-- JavaScript -->
        <script href="./js/jquery-3.5.1.min.js"></script>
    </head>
    <body>
        <div id="email-response">
            <?php

                $name = strip_tags(trim($_POST['name']));
                $return_email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
                $concerning = strip_tags(trim($_POST['concerning']));
                $msg = trim($_POST['message']);

                $to = "melissaisaacson@gmail.com";
                $subject = $concerning;
                
                $header = "From: $return_email \r\n";
                $header .= "MIME-Version: 1.0\r\n";
                $header .= "Content-type: text/html; charset=iso-8859-1\r\n";

                $message = "From: " . $name . "\r\n";
                $message .= "Email: " . $email . "\r\n";
                $message .= "Concerning: " . $concerning . "\r\n";
                $message .= $msg;
                
                $retval = mail($to,$subject,$msg,$header);
                
                if( $retval == true ) {
                    echo "Message sent successfully...";
                }else {
                    echo "Message could not be sent...";
                }
            ?>
        </div>
    </body>
</html>