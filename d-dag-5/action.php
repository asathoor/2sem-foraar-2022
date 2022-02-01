<h1>Din email er sendt</h1>
<p>Vi svarer snarest muligt.</p>

<!--  Emails sendes via server-side sprog fx PHP
      Dette er IKKE MDU-pensum -->
<?php
// the message
$msg = "Email fra " . $_GET['Name'] . " Email: " . $_GET['Name'];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("someone@example.com","My subject",$msg);
?>
