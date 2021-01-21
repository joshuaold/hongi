<?php

function getPageData() {

	$pageData = file_get_contents("db.json");
	return json_decode($pageData);
}

?>