<?php

require '../mysql_connect.php';
global $mysqli;


function createCV(array $data)
{
    global $mysqli;
    $name = str_replace(["'", '"'], ['\\\'', '\\\''], $data['name'] ?? '');
    $lastName = str_replace(["'", '"'], ['\\\'', '\\\''], $data['lastName'] ?? '');
    $email = str_replace(["'", '"'], ['\\\'', '\\\''], $data['email'] ?? '');
    $Edtype = str_replace(["'", '"'], ['\\\'', '\\\''], $data['dur'] ?? '');
    $Job = str_replace(["'", '"'], ['\\\'', '\\\''], $data['dl'] ?? '');
    $City = str_replace(["'", '"'], ['\\\'', '\\\''], $data['dor'] ?? '');
    $Company =str_replace(["'", '"'], ['\\\'', '\\\''], $data['dc'] ?? '');

    // if (!$delivery) {
    //     $delivery = '';
    // }

    $query = "
INSERT INTO tw5.getdata (name, price, description, producer, delivered_by)
    VALUES ('$name', '$lastName', '$email', '$Edtype', '$Job', '$City', '$Company');";

    $result = $mysqli->query($query);
    $_SESSION['create_result'] = !!$result;
}

createCV($_POST);
header('Location: /homework');