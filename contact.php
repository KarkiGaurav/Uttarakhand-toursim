 <?php
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'ukcon';


$con = mysqli_connect($server, $username, $password, $db );

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $comments = $_POST["comments"];

$q =  "INSERT INTO `ukcon`.`ukcon` (`name`, `phone number`, `email`, `comments`) VALUES ('$name', '$phone', '$email', '$comments')";

$query = mysqli_query($con, $q);
header("location:contact.html");
} else{
    echo " something went wrong please try again letter";
}

                                                                    
?>