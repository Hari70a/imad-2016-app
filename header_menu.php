<?php
$username = isset($_SESSION['username'])?$_SESSION['username']:'';
?>
<!-- Header -->
<header id="header">
	<h1><a href="#">Fascinating Blogs</a></h1>
	<nav class="links">
		<ul>
			<li><a href="index.php">Home</a></li>
			<?php
			if($username==''){
			?>
			<li><a href="signin.php">Sign In</a></li>
			<li><a href="signup.php">Sign Up</a></li>
			<?php } ?>
			<?php
			$username = isset($_SESSION['username'])?$_SESSION['username']:'';
			if($username!=''){
			?>
			<li style="float: right;margin-top: 19px;border-left: none;margin-right: 20px;">
			<a href="logout.php">Logout</a>
			</li>
			<li style="float: right;margin-top: 19px;border-left: none;margin-right: 20px;">
			<a><?php echo "Welcome ".$username; ?>,</a>
			</li>
			<?php } ?>
		</ul>
	</nav>
	<nav class="main">
		<ul>
			<li class="search">
				<a class="fa-search" href="#search">Search</a>
				<form id="search" method="get" action="#">
					<input type="text" name="query" placeholder="Search" />
				</form>
			</li>
			<li class="menu">
				<a class="fa-bars" href="#menu">Menu</a>
			</li>
		</ul>
	</nav>
</header>
<!-- Menu -->
<section id="menu">
	<!-- Search -->
		<section>
			<form class="search" method="get" action="#">
				<input type="text" name="query" placeholder="Search" />
			</form>
		</section>

	<!-- Links -->
		<section>
			<ul class="links">
				<li>
					<a href="index.php">
						<h3>Home</h3>
						<p>Home content comes here</p>
					</a>
				</li>
				<?php
				if($username==''){
				?>
				<li>
					<a href="signin.php">
						<h3>Sign In</h3>
						<p>Sign In content comes here</p>
					</a>
				</li>
				<li>
					<a href="signup.php">
						<h3>Sign Up</h3>
						<p>Sign Up content comes here</p>
					</a>
				</li>
				<?php } ?>
			</ul>
		</section>
	<!-- Actions -->
		<?php
		if($username!=''){
		?>
		<section>
			<ul class="actions vertical">
				<li><a href="logout.php" class="button big fit">Logout</a></li>
			</ul>
		</section>
		<?php } ?>
</section>