<?php
    // first import the statement to this index.php
    require("connect.php");
    require("functions.php");

    //filter the incoming basic request and call the appropiate function

    if (isset($_GET["id"])) {
        $id = $_GET["id"];
        
        $result = getOneProf($pdo, $id);
    } else {
        $result = getAllProfs($pdo);
    }

    echo json_encode($result);