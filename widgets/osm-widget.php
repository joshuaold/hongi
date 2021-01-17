<?php 

	include 'components/controls-widget.php';
	$widgetContent = $sectionWidget->content[0];
?>

<div>
	<h4>
		<?php 
			if(!is_null($widgetContent)) {
				echo $widgetContent->h4; 	
			} else {
				echo 'Default OSM Widget';
			}
		?>
	</h4>
	<p>
		<?php 
			if(!is_null($widgetContent)) {
				echo $widgetContent->p; 	
			} else {
				echo 'Default map text';
			}
		?>			
	</p>
</div>