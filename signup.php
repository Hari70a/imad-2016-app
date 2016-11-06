<?php 
include('db.php');
$username = '';
$email = '';
$password = '';
$confirm_password = '';
if(isset($_POST['btn_submit'])){
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$confirm_password = $_POST['confirm_password'];
	$status = 1;
	$query = mysql_query("insert into users(username,email, password,status)values('$username','$email','$password',$status)");
	if($query){
		header("location:signin.php?status=success");
	}
}
?>
<!DOCTYPE HTML>
<html>
	<head>
		<?php include('header.php'); ?>
	</head>
	<body>
		<!-- Wrapper -->
			<div id="wrapper">
				<?php include('header_menu.php'); ?>
				<!-- Main -->
					<div id="main">
						<!-- Post -->
							<article class="post">
								<div class="login-header">
									<h1 title="login">Sign Up</h1>
									<div class="login-form">
										<form name="signupform" id="signupform" method="post" action="signup.php">
										  <input type="text" name="username" placeholder="Username" value="<?php echo $username; ?>" />
										  <br /><br />
										  <input type="text" name="email" placeholder="Email" value="<?php echo $email; ?>" />
										  <br /><br />
										  <input type="password" name="password" placeholder="Passowrd" value="<?php echo $password; ?>" />
										  <br /><br />
										  <input type="password" name="confirm_password" placeholder="Confirm Passowrd" value="<?php echo $confirm_password; ?>" />
										  <br /><br />
										  <input title="login" type="submit" name="btn_submit" value="Sign Up" />
										</form>
									</div>
								</div>
							</article>
					</div>
			</div>
	</body>
</html>