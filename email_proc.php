<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Melissa Isaacson's Online Portfolio.">
        <meta name="author" content="Melissa Isaacson">
        <title>Melissa Isaacson</title>
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
                $msg = trim($_POST['message']);

                $to = "melissaisaacson@gmail.com";
                $subject = "I'm $name from your resume";
                
                $header = "From: $return_email \r\n";
                $header .= "MIME-Version: 1.0\r\n";
                $header .= "Content-type: text/html; charset=iso-8859-1\r\n";
                
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