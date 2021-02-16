<?php
    $pageData = json_decode(file_get_contents("business_template/data.json"));
    $navbarHeader = $pageData->navbar_header;
    $pageSections = $pageData->page_sections;
?>

<!doctype html>
<html class="no-js" lang="zxx">
<head>
	<?php include "business_template/tags/headTags.php"; ?>    
    <script>
        var pageData = JSON.parse(<?php echo json_encode(file_get_contents("business_template/data.json")); ?>)
        var navbarHeader = pageData.navbar_header
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
                <div class="header-area">
                    <div id="section_header_2" class="main-header optionalSectionWrapper">
                        <!-- <?php include "business_template/widgets/sociallinks_widget.php"; ?> -->
                        <?php include "business_template/editNavbarHeaderOverlay.php"; ?>
                        <?php include "business_template/widgets/navbar_widget.php"; ?>
                    </div>
                </div>
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
                        case "countdown_widget":
                            $widgetToLoad = "business_template/widgets/countdown_widget.php";
                        case "teammembers_widget":
                            $widgetToLoad = "business_template/widgets/teammembers_widget.php";
                        case "blog_widget":
                            $widgetToLoad = "business_template/widgets/blog_widget.php";
                        case "portfolio_widget":
                            $widgetToLoad = "business_template/widgets/portfolio_widget.php";
                        case "categories_widget":
                            $widgetToLoad = "business_template/widgets/categories_widget.php";
                        case "slider_widget":
                            $widgetToLoad = "business_template/widgets/slider_widget.php";
                        default:
                            break;
                    }

                ?>

                <div id="<?php echo $sectionID; ?>" class="optionalSectionWrapper">
                    <?php include "business_template/editSectionOverlay.php"; ?>
                    <div id="<?php echo $widgetID; ?>">
                        <?php include $widgetToLoad; ?>
                    </div>
                    <!-- <?php include "business_template/sectionMenuOverlay.php"; ?> -->                    
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