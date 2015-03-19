<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

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
	
    <link rel="stylesheet" href="animate.css">
	
	<link rel="stylesheet" href="lib/nvd3/build/nv.d3.min.css" rel="stylesheet">
	
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
	
	
	<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>

	<script type="text/javascript" src="lib/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="lib/bootstrap-material-design/dist/js/material.min.js"></script>
    <script type="text/javascript" src="lib/bootstrap-material-design/dist/js/ripples.min.js"></script>
	
	<script type="text/javascript" src="lib/d3/d3.min.js"></script>
	<script type="text/javascript" src="lib/nvd3/build/nv.d3.min.js"></script>
	

	<script type="text/javascript" src="data/companies_per_year.json"></script>
	<script type="text/javascript" src="data/categories.json"></script>
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
				echo $page;
			}
			?>
		
			<div id="next-button">
				<button onclick="nextSlide();" class="btn btn-fab btn-raised btn-material-blue next-button"><i class="mdi-navigation-arrow-forward"></i></button>
			</div>
		</div>
	
		<ul class="pager">
			<li><a href="javascript:showSlide(1);">1</a></li>
			<li><a href="javascript:showSlide(2);">2</a></li>
			<li><a href="javascript:showSlide(3);">3</a></li>
		</ul>
	</div>
</body>

<script type="text/javascript" src="js/main.js"         ></script>
<script type="text/javascript" src="js/company-types.js"         ></script>
<script type="text/javascript" src="js/company-year-chart.js"         ></script>

</html>