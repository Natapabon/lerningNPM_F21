<?php
    // first import the statement to this index.php
    require("connect.php");
    require("functions.php");

    //filter the incoming basic request and call the appropiate function
    //(these live in functions.php)
//    if (isset($_GET["id"])) {
//        //This is the id that the user is passing to the script (1,2,3 etc) => ?id=1
//        //it referes to the row of data that we want to retrive from the DB
//        $id = $_GET["id"];
//
//        //create a variable to hold the result of the DB request
//        $result = getOneProf($pdo, $id);
//    } else {
//        $result = getAllProfs($pdo);
//    }

    // this is called ternary statement and it is the same if/else (above) but shorter in php
    $id = isset($_GET["id"]) ? $_GET["id"] : null;
    $result = getProfData($pdo, $id);

    //send the DB result (our data) back to the javascript file
    echo json_encode($result);