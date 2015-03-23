<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

$startpage = 1;
if(isset($_GET['p']) && $_GET['p']){
	$startpage = $_GET['p'];
}

$pages = array();

$dir = new DirectoryIterator('pages');
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
		if($fileinfo->getExtension() == 'html'){
			$pages[] = file_get_contents($fileinfo->getPath().'/'.$fileinfo->getFilename());
		}
    }
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Information Visualization Project</title>
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css" type="text/css" media="screen" title="no title" charset="utf-8">
	
    <link href="lib/bootstrap-material-design/dist/css/roboto.min.css" rel="stylesheet">
    <link href="lib/bootstrap-material-design/dist/css/material.min.css" rel="stylesheet">
    <link href="lib/bootstrap-material-design/dist/css/ripples.min.css" rel="stylesheet">
	
    <link rel="stylesheet" href="css/animate.css" type="text/css" media="screen" title="no title" charset="utf-8">
	
	<link rel="stylesheet" href="lib/nvd3/build/nv.d3.min.css" rel="stylesheet">
	<link rel="stylesheet" href="lib/c3/c3.min.css" rel="stylesheet">
	
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
	<link rel="stylesheet" href="css/chart.css" type="text/css" media="screen" title="no title" charset="utf-8">
	

<!--	<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>-->
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>

	<script type="text/javascript" src="lib/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="lib/bootstrap-material-design/dist/js/material.min.js"></script>
    <script type="text/javascript" src="lib/bootstrap-material-design/dist/js/ripples.min.js"></script>
	
	<script type="text/javascript" src="lib/d3/d3.min.js"></script>
	<script type="text/javascript" src="lib/nvd3/build/nv.d3.min.js"></script>
	
	<script type="text/javascript" src="lib/c3/c3.min.js"></script>
	

	<script type="text/javascript" src="js/main.js"></script>
</head>

<body>
	<div class="navbar navbar-default">
		<div class="navbar-header">
			<a class="navbar-brand" href="javascript:void(0)">Amsterdam: Companies in Motion</a>
		</div>
		<ul class="nav navbar-nav">
			<li><a href="javascript:void(0)">Project</a></li>
			<li><a href="javascript:void(0)">Team</a></li>
			<li><a href="javascript:void(0)">University of Amsterdam</a></li>
		</ul>
	</div>
	
	<div class="container">
		<div class="pages">
		
			<?php
			$i = 0;
			foreach($pages as $page){
				$i++;
				$classes = [];
				if($i == $startpage){
					$classes[] = 'active';
				} elseif($i == $startpage + 1 || $i == $startpage - 1){
					$classes[] = 'first';
				}
				if($i < $startpage){
					$classes[] = 'before';
				} elseif ($i > $startpage){
					$classes[] = 'after';
				}
				if($i != 1){
					$classes[] = 'well';
				}
				?>
				
				<div class="page <?=implode(' ', $classes)?>" id="page-<?=$i?>">
				<?=$page?>
				</div>
				<?php
			}
			?>
		
			<div id="next-button">
				<button onclick="nextSlide();" class="btn btn-fab btn-raised btn-material-blue next-button"><i class="mdi-navigation-arrow-forward"></i></button>
			</div>
		</div>
	
		<ul class="pager">
			<?php
			$i = 0;
			foreach($pages as $page){
				$i++;
				?>
				<li><a href="javascript:showSlide(<?=$i?>);"><?=$i?></a></li>				
				<?
			}
			?>
		</ul>
	</div>
</body>

</html>