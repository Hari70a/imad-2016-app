<?php 
include('db.php');
$email = '';
$password = '';
if(isset($_POST['btn_submit'])){
	$email = $_POST['email'];
	$password = $_POST['password'];
	$query = mysql_query("select * from users where email='$email' and password='$password'");
	if(mysql_num_rows($query)>0){
		$result = mysql_fetch_object($query);
		$username = $result->username;
		$email = $result->email;
		$_SESSION['username'] = $username;
		$_SESSION['email'] = $email;
		header('location:index.php');
	}else{
		$message = "Please check your credentials";
	}
}
if(isset($_GET['status'])){
	$message =  "User Registered Successfully";
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
									<?php 
									if(isset($message)){
										echo $message;
									}
									?>
									<h1 title="login">Sign In</h1>
									<div class="login-form">
										<form name="signinform" id="signinform" method="post" action="signin.php">
										  <input type="text" name="email" placeholder="Email" value="<?php echo $email; ?>" />
										  <br /><br />
										  <input type="password"  name="password" placeholder="Passowrd"  value="<?php echo $password; ?>" />
										  <br /><br />
										  <input title="login" name="btn_submit" type="submit" value="Sign In" />
										</form>
									</div>
								</div>
							</article>
					</div>
			</div>
	</body>
</html>