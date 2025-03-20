<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "db.php";

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    $users = [];
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }

    echo json_encode($users);
} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $conn->real_escape_string($data['name']);
    $user = $conn->real_escape_string($data['name']);
    $pass = $conn->real_escape_string($data['name']);

    $sql = "INSERT INTO users (name, username, password) VALUES ('$name','$user','$pass')";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "User added successfully"]);
    } else {
        echo json_encode(["error" => "Failed to add user"]);
    }
}

$conn->close();
?>
