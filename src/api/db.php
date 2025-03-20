<?php
// $host = "153.92.15.49"; // for Hostinger
$host = "152.32.100.170"; // for Localhost
$user = "u432480574_aljcfAdmin";
$password = "Aljcf_2233#";
$database = "u432480574_aljcfcms";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>
