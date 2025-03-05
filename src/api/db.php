<?php
$host = "153.92.15.49"; // Check your Hostinger MySQL host
$user = "aljcfAdmin";
$password = "M@sterk3y#";
$database = "u432480574_aljcfcms";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>
