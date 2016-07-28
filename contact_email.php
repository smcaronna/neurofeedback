<?php

  $admin_email = "smcaronna@gmail.com";
  $name = $_REQUEST["name"];
  $contact = $_REQUEST["contact_info"];
  $issue = $_REQUEST["issue"];
  $body = "Name " . $name . "
  Phone/email: " . $contact . "
  Seeking treatment for: " . $issue . "";

  //send email
  echo mail($admin_email, $name, $body);
  header("Location: thank_you.html");
  echo $name
  echo $contacting
  echo $issue
  echo $body 
?>
