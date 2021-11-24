<?php
    //store each row of data in an empty array ( gets processed in the while loop below)
    $result = array();

    function getOneProf($conn, $prof) {

        $query = "SELECT * FROM profs WHERE id = '".$prof."'";

        //this is the data base result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    }

    function getAllProfs($conn) {
        $query = "SELECT * FROM profs";

        //this is the data base result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    }
