<!DOCTYPE html>
<html>
    <head>
	    <meta charset ="utf-8">
		<title>Html_Php</title>
	</head>
	<body>
	<?php
		$messageRR=$nn=" ";
		
        if($_SERVER['REQUEST_METHOD']=="POST")
		{	
			if(empty($_REQUEST['Fname']))
			{
			$messageRR="error";
			}
			else $nn= $_REQUEST['Fname'];
		} 
	   ?>
	    <form method= "post" action="<?php $_SERVER['PHP_SELF'] ?>"> 
	        First Name:<input type ="text" name= "Fname">
			<span class="error">* <?php echo $messageRR;?> </span><br>
			<p><input type= "submit" value= "Submit">
			<input type= "reset" value= "Clear"></p>
	    </form>
		<?php
		echo $nn;
		?>
	</body>
</html>