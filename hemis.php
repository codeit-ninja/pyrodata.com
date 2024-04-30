<?


?>
<?php
// define variables and set to empty values
$nameErr = $emailErr = $nameErr2 = $emailErr2 = "";
$name = $email = $name2 = $email2 = $website = "";
$overlap = $overlapErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	    if (isset($_POST['submit'])) {	
	   if (empty($_POST["name"])) {
		 $nameErr = "Diameter is required";
	   } else {
		 $name = test_input($_POST["name"]);
		 // check if name only contains letters and whitespace
		 if (!is_numeric($name)) {
		   $nameErr = "Only numbers allowed";
		   $name = 0;
		 }
		 else if ($name <= 0) {
			 $nameErr = "Invalid diameter";
			 $name = 0;
		 }
		 
	   }
		   if (empty($_POST["email"])) {
		 $emailErr = "Number of leaves is required";
	   } else {
		 $email = test_input($_POST["email"]);
		 // check if e-mail address is well-formed
		 if (!is_numeric($email)) {
		   $emailErr = "Only numbers allowed";
		   $email = 0;
		 }
		 else if ($email < 2 || $email > 30) {
			 $emailErr = "Invalid number of leaves (at least 2)";
			 $email = 0;
		 }
	   }
   
		if ($nameErr == "" && $emailErr == "") {
			$loc = "Location:hem.php?diam=" . $name . "&leaves=" . $email;
			header($loc);
		} 
	}
	if (isset($_POST['submit2'])) {	
   
   if (empty($_POST["name2"])) {
     $nameErr2 = "Diameter is required";
   } else {
     $name2 = test_input($_POST["name2"]);
     // check if name only contains letters and whitespace
     if (!is_numeric($name2)) {
       $nameErr2 = "Only numbers allowed";
	   $name2 = 0;
     }
	 else if ($name2 <= 0) {
		 $nameErr2 = "Invalid diameter";
		 $name2 = 0;
	 }
	 
   }
   if (empty($_POST["email2"])) {
     $emailErr2 = "Number of leaves is required";
   } else {
     $email2 = test_input($_POST["email2"]);
     // check if e-mail address is well-formed
     if (!is_numeric($email2)) {
       $emailErr2 = "Only numbers allowed";
	   $email2 = 0;
     }
	 else if ($email2 < 2 || $email2 >50) {
		 $emailErr2 = "Invalid number of leaves (at least 2)";
		 $email2 = 0;
	 }
   }
   if (empty($_POST["overlap"])) {
     //$overlapErr = "Leave 0 if no overlap";
	 $overlap = 0;
   } else {
     $overlap = test_input($_POST["overlap"]);
     // check if e-mail address is well-formed
     if (!is_numeric($overlap)) {
       $overlapErr = "Only numbers allowed";
	   $overlap = 0;
     }
	 else if ($overlap < 0) {
		 $overlapErr = "Invalid overlap";
		 $overlap = 0;
	 }
   }
   if ($nameErr2 == "" && $emailErr2 == "" && $overlapErr == "") {
			$loc = "Location:hem2.php?diam=" . $name2 . "&leaves=" . $email2 . "&overlap=". $overlap;
			header($loc);
		} 
   
	}
   
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>
<div class="first" style="float:left;">
<h2>Hemis style 1</h2>
<p><span class="error">* required field.</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
   Diameter (mm): <input type="text" name="name" value="<?php echo $name;?>">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   Number of leaves: <input type="text" name="email" value="<?php echo $email;?>">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   <input type="submit" name="submit" value="Generate">
   <br><br>
   <img src="style1.png" alt="Style1" style="width:300px;height:300px;">
</form>
</div>
<div class="second" style="float:left; padding-left:5%;">
	<h2>Hemis style 2</h2>
<p><span class="error">* required field.</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
   Diameter (mm): <input type="text" name="name2" value="<?php echo $name2;?>">
   <span class="error">* <?php echo $nameErr2;?></span>
   <br><br>
   Number of leaves: <input type="text" name="email2" value="<?php echo $email2;?>">
   <span class="error">* <?php echo $emailErr2;?></span>
   <br><br>
   Overlap (mm) : <input type="text" name="overlap" value="<?php echo $overlap;?>">
   <span class="error"> <?php echo $overlapErr;?></span>
   <br><br>
   <input type="submit" name="submit2" value="Generate">
   <br><br>
   <img src="style2.jpg" alt="Style2" style="width:300px;height:300px;">
</form>
</div>

</div>

