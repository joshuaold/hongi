<?php
    $slWidgData = getWidgetData($headerWidgets, "social_links_widget");
    $slWidgContent = $slWidgData->widget_content;
?>

<div class="header-top d-none d-lg-block">
    <div class="container">
        <div class="col-xl-12">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="header-info-left">
                    <ul>     
                        <li><i class="far fa-clock"></i><?php echo $slWidgContent->opening_hours; ?></li>
                        <li><?php echo $slWidgContent->closing_hours; ?></li>
                    </ul>
                </div>
                <div class="header-info-right">
                    <ul class="header-social"> 
                        <?php
                            foreach($slWidgContent->social_links as $link) {
                        ?>
                            <li><a href="#"><i class="<?php echo $link; ?>"></i></a></li>
                        <?php
                            }
                        ?>                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
