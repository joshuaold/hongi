<?php
    $pageData = json_decode(file_get_contents("business_template/data.json"));
    $pageSections = $pageData->page_sections;
?>

<!doctype html>
<html class="no-js" lang="zxx">
<head>
	<?php include "business_template/tags/headTags.php"; ?>    
    <script>
        var pageData = JSON.parse(<?php echo json_encode(file_get_contents("business_template/data.json")); ?>)
        var pageSections = pageData.page_sections
    </script>
</head>

<body class="body-bg">

        <div id="section_init">
            <?php include "business_template/preloader.php"; ?>            
        </div>

        <div id="section_modal">            
        </div>

        <div id="section_header">
            <header>
            <!-- Header Start -->
            
            <!-- Header End -->
            </header>
        </div>    

        <div id="section_main">
            <main>
                <?php foreach($pageSections as $section) { 

                    $sectionID = $section->section_id;
                    $widgetID = $section->section_widget_list[0]->widget_id;
                    $widgetType = $section->section_widget_list[0]->widget_type;
                    $widgetContent = $section->section_widget_list[0]->widget_content;
                    $widgetToLoad = "";

                    switch($widgetType) {
                        case "services_widget":
                            $widgetToLoad = "business_template/widgets/services_widget.php";
                            break;
                        case "testimonial_widget":
                            $widgetToLoad = "business_template/widgets/testimonial_widget.php";
                        case "cta_widget":
                            $widgetToLoad = "business_template/widgets/cta_widget.php";
                            break;
                        default:
                            break;
                    }

                ?>

                <div id="<?php echo $sectionID; ?>" class="optionalSectionWrapper">
                    <div id="<?php echo $widgetID; ?>">
                        <?php include $widgetToLoad; ?>
                    </div>
                    <?php include "business_template/sectionMenuOverlay.php"; ?>
                </div>

                <?php } ?>

                <div id="section_main_addSection">
                    <?php include "business_template/widgets/addSection_widget.php"; ?>
                </div>                                                
            </main>
        </div>
        
        <!-- to be removed -->
        <button type="button" class="btn btn-default" onclick="showJSONObject()">Show JSON Object</button>

        <!-- foottags -->
        <?php include "business_template/tags/footTags.php"; ?>        
    </body>
</html>