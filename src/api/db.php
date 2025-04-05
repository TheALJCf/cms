<?php
$host = "153.92.15.49"; // for Hostinger
// $host = "http://lightyellow-crab-322087.hostingersite.com"; // for Localhost
$user = "u432480574_aljcfAdmin";
$password = "Aljcf_2233#";
$database = "u432480574_aljcfcms";

$conn = new mysqli($host, $user, $password, $database);

$secret_key = "aljcf2025"; // Must match React SECRET_KEY

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>