<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["name"]) && isset($data["username"]) && isset($data["password"])) {
    $name = $data["name"];
    $username = $data["username"];
    $password = $data["password"];
    $email = $data["email"];

    // Since frontend hashes password with SHA-256, we need to hash it again with bcrypt before storing
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $hashedPassword, $name, $email);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "User registered successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error registering user"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Username and password required"]);
}
?>
