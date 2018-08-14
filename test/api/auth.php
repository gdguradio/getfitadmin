<?php
include_once('../../src/assets/admin/controllers/Login.php');
include_once('');

session_start();
$_POST = json_decode(file_get_contents('php://input'),true);
$login = new Login();


if(isset($_POST)&&!empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $thislogin = $login->authentication($username,$password);
    if($thislogin){?>
        {
            "success":true,
            "secret":"This is the secret no one knows but the admin"

        }
    <?php
    }else{
    ?>
        {
            "success":false,
            "secret":"Invalid credentials"
        }  
    <?php
    }    
}
?>