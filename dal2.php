<?php

	if(isset($_POST['action']) && !empty($_POST['action'])) {
	    $action = $_POST['action'];
	    switch($action) {
	        case 'save':
	        	$templateData = json_encode($_POST['templateData']);
	        	file_put_contents("data.json", $templateData);
	        	break;	        
	    }
	}

 ?>