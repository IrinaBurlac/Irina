<?php
require '../mysql_connect.php';
global $mysqli;

$result = $mysqli->query('SELECT * from tw5.getdata where 1;');
$products = $result->fetch_all(MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lista participantilor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="global.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
</nav>

<div class="container">

    <?php
    function toast($message, $variant = 'success')
    {
        return "<div class=\"alert alert-$variant\" role=\"alert\">$message</div>";
    }

    if (isset($_SESSION['create_result'])) {
        $variant = $_SESSION['create_result'] ? 'success' : 'danger';
        $message = $_SESSION['create_result'] ? 'Profile created and stored!' : 'Profile is not created  ';
        unset($_SESSION['create_result']);

        echo toast($message, $variant);
    }

    if (isset($_SESSION['edit_result'])) {
        $variant = $_SESSION['edit_result'] ? 'success' : 'danger';
        $message = $_SESSION['edit_message'];
        unset($_SESSION['edit_result']);
        unset($_SESSION['edit_message']);
        echo toast($message, $variant);
    }
    ?>

    <h1 class="mt-3">
        List Candidatilor
    </h1>
    <table class="table contrast-table">
        <thead class="thead-light">
        <tr>
            <th scope="col">Id#</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Education Type</th> 
             <th scope="col">Job Name</th>
            <th scope="col">City name</th>
            <th scope="col">Company name</th>

        </tr>
        </thead>
        <tbody>
        <?php

        foreach ($products as $product) {
            echo "
    <tr>
        <th scope=\"row\">${product['id']}</th>
        <td>${product['name']}</td>
        <td>${product['lastName']}</td>
        <td>${product['email']}</td>
        <td>${product['Job']}</td>
        <td>${product['Education Type']}</td>
        <td>${product['City']}</td>
        <td>${product['Company']}</td>
        
        <td>
            <a href=\"create_CV.php?id=${product['id']}\" target=\"_self\"><i class=\"fa fa-pencil link-info cursor-pointer\"></i></a>
            <a href=\"view.php?id=${product['id']}\" target=\"_self\"><i class=\"fa fa-eye link-primary cursor-pointer\"></i></a>
        </td>
    </tr>
        ";
        }
        ?>

        </tbody>
    </table>
</div>

</body>
</html>