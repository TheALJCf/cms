<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php"; // Now uses PDO

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["username"]) && isset($data["password"])) {
    $username = $data["username"];
    $password = $data["password"];

    $stmt = $conn->prepare("SELECT id, 'password' FROM users WHERE username = :username");
    $stmt->bindParam(":username", $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        if (password_verify($password, $user["password"])) {
            echo json_encode(["success" => true, "message" => "Login successful"]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid password"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Username not found"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Username and password required"]);
}
?>
