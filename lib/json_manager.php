<?php

function getSectionData($pageSections, $sectionID) {

	foreach($pageSections as $section) {
		if($section->section_id == $sectionID)
			return $section;
	}

	return null;
}

function getWidgetData($sectionWidgets, $widgetType) {

	foreach($sectionWidgets as $widget) {
		if($widget->widget_type == $widgetType)
			// echo '<script>console.log("'.$widget->widget_type.'")</script';
			return $widget;
	}

	return null;
}
	
?>