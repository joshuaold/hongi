<?php

	$defaultWidget = 'widgets/empty-widget.php';

	include 'dal.php';
	$templateData = getTemplateData();
	$userWidgets = $templateData->widgets;

	$templateDataJS = 'var templateData = '. json_encode($templateData) .'';
	$userWidgetsJS = 'var userWidgets = '. json_encode($userWidgets) .'';
	echo '<script>'. $userWidgetsJS .'</script>';
	echo '<script>'. $templateDataJS .'</script>';

	echo '<script>var currentWidget;</script>';	
?>

<!doctype html>
<html>
<head>
	<title>Template 1</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
	<link href="assets/css/index.css" rel="stylesheet">
	<script src="assets/js/index.js"></script>
</head>
<body>
	<div class="widgetListModal">
	</div>

	<div class="editWidgetModal">
	</div>

	<!-- section 1 -->
	<div id="section1" class="section">
		<?php 
			$widgetToLoad = $defaultWidget;

			$sectionWidget = getWidget($userWidgets, "section1");						

			if(!is_null($sectionWidget)) {
				$widgetToLoad = $sectionWidget->fileLocation;
			}

			include $widgetToLoad;
		?>		
	</div>

	<!-- section 2 -->
	<div id="section2" class="section">
		<?php 
			$widgetToLoad = $defaultWidget;

			$sectionWidget = getWidget($userWidgets, "section2");						

			if(!is_null($sectionWidget)) {
				$widgetToLoad = $sectionWidget->fileLocation;
			}

			include $widgetToLoad;
		?>
	</div>

	<!-- section 3 -->
	<div id="section3" class="section">
		<?php 
			$widgetToLoad = $defaultWidget;

			$sectionWidget = getWidget($userWidgets, "section3");						

			if(!is_null($sectionWidget)) {
				$widgetToLoad = $sectionWidget->fileLocation;
			}

			include $widgetToLoad;
		?>	
	</div>


	<button onclick="save()">Save</button>

</body>
</html>