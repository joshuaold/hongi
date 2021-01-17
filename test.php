<?php 

	if(isset($_POST['action']) && !empty($_POST['action'])) {
	    $action = $_POST['action'];
	    switch($action) {
	        case 'test' :
	        	$templateData = file_get_contents("data.json");
	        	echo $templateData;
	        	return $templateData;
	        	break;
	    }
	}

?>