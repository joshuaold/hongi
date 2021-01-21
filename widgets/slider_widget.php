<?php
    $sliderWidgData = getWidgetData($mainWidgets, "slider_widget");
    $sliderWidgContent = $sliderWidgData->widget_content;
?>

<div class="slider-area">
    <div class="slider-active">

        <?php 
            foreach($sliderWidgContent as $widgContent) {
        ?>

        <!-- Single Slider -->
        <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7 col-md-8">
                        <div class="hero__caption">
                            <span data-animation="fadeInLeft" data-delay=".1s"><?php echo $widgContent->line_1; ?></span>
                            <h1 data-animation="fadeInLeft" data-delay=".5s" ><?php echo $widgContent->line_2; ?></h1>
                            <p data-animation="fadeInLeft" data-delay=".9s"><?php echo $widgContent->line_3; ?></p>
                            <!-- Hero-btn -->
                            <div class="hero__btn" data-animation="fadeInLeft" data-delay="1.1s">
                                <a href="industries.html" class="btn hero-btn"><?php echo $widgContent->btn_text; ?></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>

        <?php }
        ?>

    </div>
</div>