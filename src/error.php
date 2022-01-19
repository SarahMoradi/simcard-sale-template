<?php
$mysqli = new mysqli("localhost", "databaseWeb", "1234", "world");

if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if (!$mysqli->query("SET a=1")) {
    printf("Error message: %s\n", $mysqli->error);
}

$mysqli->close();
?>