<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tw5";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$fname = $_POST['firstName'];
$lname = $_POST['lastName'];
$email = $_POST['email'];
$phone_number = $_POST['phonenumb'];
$address = $_POST['address'];
$profession = $_POST['profesia'];
$url = $_POST['link'];
$edName = $_POST['edname'];
$edDate = $_POST['graduation'];
$edType = $_POST['edType'];
$jName = $_POST['dl'];
$jStartDate = $_POST['startJob'];
$jEndDate = $_POST['finishJob'];
$cityName = $_POST['dor'];
$companyName = $_POST['dc'];


$sql = "INSERT INTO angajati_data (fName, lname	, email, phNumber, address, prof, url, edName, edDate, edType, jName, jStartDate, jEndDate, cityName, companyName)
VALUES ('$fname', '$lname', '$email','$phone_number','$address','$profession','$url','$edName','$edDate','$edType','$jName','$jStartDate','$jEndDate','$cityName','$companyName')";

if ($conn->query($sql) === TRUE) {
    header ("Location: view_table.php");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 