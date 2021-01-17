<?php

function getTemplateData() {

	$templateData = file_get_contents("data.json");

	// $templateData = '{

	// 	"template": "index.php",
	// 	"widgets": [
	// 		{
	// 			"type": "osm-widget",
	// 			"fileLocation": "widgets/osm-widget.php",
	// 			"section": "section1",
	// 			"content": [
	// 				{
	// 					"h4": "User OSM Widget 1",
	// 					"p": "I need to put a map here"
	// 				}
	// 			]
	// 		},
	// 		{
	// 			"type": "osm-widget",
	// 			"fileLocation": "widgets/osm-widget.php",
	// 			"section": "section2",
	// 			"content": [
	// 				{
	// 					"h4": "User OSM Widget 2",
	// 					"p": "I need to put a second map here"
	// 				}
	// 			]
	// 		}
	// 	]

	// }';

	return json_decode($templateData);
}

function getWidget($widgetList, $sectionID) {

	foreach($widgetList as $widget) {
		// echo '<script>console.log('.$sectionID.')</script>';
		if($sectionID == $widget->section)	
			return $widget;
	}

	return null;
}

?>