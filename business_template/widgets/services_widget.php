<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="support-company-area pt-100 pb-100 section-bg fix" data-background="business_template/assets/img/gallery/section_bg02.jpg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="support-location-img">
                        <img src="business_template/assets/img/gallery/about.png" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="right-caption">
                        <div class="section-tittle section-tittle2 mb-50">
                            <span id="servicesHeadline">
                                <?php echo ($widgetContent->headline != null) ? $widgetContent->headline : 'Headline'; ?>
                            </span>
                            <h2 id="servicesTitle">
                                <?php echo ($widgetContent->title != null) ? $widgetContent->title : 'Title'; ?>
                            </h2>
                        </div>
                        <div class="support-caption">
                            <p id="servicesEmphasis" class="pera-top">
                                <?php echo ($widgetContent->emphasis != null) ? $widgetContent->emphasis : 'Emphasis'; ?>
                            </p>
                            <p id="servicesContent" class="mb-65">
                                <?php echo ($widgetContent->content != null) ? $widgetContent->content : 'Content'; ?>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>