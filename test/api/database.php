<?php
session_start();

$user = $_SESSION['user'];

if($user == 'admin'){
    echo '{
        "secret": "Secret for admin",
        "success": true
        
    }';
}else{
    echo '{
        "secret": "Not an admin",
        "success": false
        
    }';
}


?>