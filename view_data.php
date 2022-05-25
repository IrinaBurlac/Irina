<?php

require '../mysql_connect.php';
global $mysqli;

$id = null;
$fname = '';
$lname = '';
$email = '';
$phNumber = '';
$address = '';
$proffession = '';
$url = '';
$edName = '';
$edDate = '';
$edType = '';
$jName = '';
$jStartDate = '';
$jEndDate = '';
$cityName = '';
$companyName = '';


if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $result = $mysqli->query("SELECT * from tw5.angajati_data where id = $id");
    if ($result) {
        $object = $result->fetch_assoc();
        $fname = $object['fName'];
        $lname = $object['lname'];
        $email = $object['email'];
        $phNumber = $object['phNumber'];
        $address = $object['address'];
        $proffession = $object['prof'];
        $url = $object['url'];
        $edName = $object['edName'];
        $edDate = $object['edDate'];
        $edType = $object['edType'];
        $jName = $object['jName'];
        $jStartDate = $object['jStartDate'];
        $jEndDate = $object['jEndDate'];
        $cityName = $object['cityName'];
        $companyName = $object['companyName'];
    } else {
     $id = null;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Angajati:</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="data.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container" >

    <table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Last Name</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>Adress</th>
                <th>Proffession</th>
				<th>Link</th>
				<th>Education Name</th>
				<th>Graduation Date</th>
				<th>Job Name</th>
                <th>Job start Name</th>
				<th>Job End Date</th>
				<th>City Name</th>
				<th>Comapany Name</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><?php echo $fname ?></td>
                <br />
				<td><?php echo $lname ?></td>
                <br />
				<td><?php echo $email ?></td>
                <br />
				<td><?php echo $phNumber ?></td>
                <br />
				<td><?php echo $address ?></td>
                <br />
                <td><?php echo $proffession ?></td>
                <br />
				<td><?php echo $edName ?></td>
                <br />
				<td><?php echo $url ?></td>
                <br />
				<td><?php echo $edDate ?></td>
                <br />
				<td><?php echo $edType ?></td>
                <br />
                <td><?php echo $jName ?></td>
                <br />
				<td><?php echo $jStartDate ?></td>
                <br />
				<td><?php echo $jEndDate ?></td>
                <br />
				<td><?php echo $cityName ?></td>
                <br />
				<td><?php echo $companyName ?></td>
                <br />
			</tr>
			<tr>
				
			
		</tbody>
	</table>
</div>

   
<div id="back_button"><a href="view_table.php"><button type="button" class="btn btn-success view">Back</button></a></div>
</body>
</html>
