<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="slider-area">
        <div class="slider-active" id="replaceWithSliderID">
            <!-- Single Slider -->
            <div class="single-slider slider-height d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7 col-md-8">
                            <div class="hero__caption">
                                <span data-animation="fadeInLeft" data-delay=".1s" id="sliderHeadline">
                                    <?php echo ($widgetContent->headline != null) ? $widgetContent->headline : 'Headline'; ?>
                                </span>
                                <h1 data-animation="fadeInLeft" data-delay=".5s" id="sliderTitle">
                                    <?php echo ($widgetContent->title != null) ? $widgetContent->title : 'Title'; ?>
                                </h1>
                                <p data-animation="fadeInLeft" data-delay=".9s" id="sliderContent">
                                    <?php echo ($widgetContent->content != null) ? $widgetContent->content : 'Content'; ?>
                                </p>
                                <!-- Hero-btn -->
                                <div class="hero__btn" data-animation="fadeInLeft" data-delay="1.1s">
                                    <a href="industries.html" class="btn hero-btn" id="sliderButton">
                                        <?php echo ($widgetContent->button != null) ? $widgetContent->button : 'Button Text'; ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </div>
</div>