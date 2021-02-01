<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <section class="wantToWork-area w-padding2 section-bg" data-background="business_template/assets/img/gallery/section_bg03.jpg">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-7 col-lg-9 col-md-8">
                    <div class="wantToWork-caption wantToWork-caption2">
                        <h2 id="ctaCallLineOne">
                            <?php echo ($widgetContent->callLineOne != null) ? $widgetContent->callLineOne : 'Call Line One'; ?>
                        </h2>
                        <br>
                        <h2 id="ctaCallLineTwo">
                            <?php echo ($widgetContent->callLineTwo != null) ? $widgetContent->callLineTwo : 'Call Line Two'; ?>
                        </h2>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4">
                    <a id="ctaButton" href="" class="btn btn-black f-right">
                        <?php echo ($widgetContent->button != null) ? $widgetContent->button : 'Button'; ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>