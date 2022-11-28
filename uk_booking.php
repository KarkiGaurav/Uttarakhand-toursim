<?php

   $connection = mysqli_connect('localhost','root','', 'uk_book');

   if(isset($_POST['done'])){
      $name = $_POST['name'];
      $email = $_POST['email'];
      $phone = $_POST['phone'];
      $address = $_POST['address'];
      $location = $_POST['visit'];
      $guests = $_POST['guests'];
      $arrivals = $_POST['commingdate'];
      $leaving = $_POST['goingdate'];

      $request = " insert into  uk_book_form (name, email, phone, address, place, guests, arrivals, leaving)
       values('$name','$email','$phone','$address','$location','$guests','$arrivals','$leaving') ";
                  
      mysqli_query($connection, $request);

      header('location:book.html'); 

     
      
   
   }else{
      echo 'something went wrong please try again!';
   }

?>