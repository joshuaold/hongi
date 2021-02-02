<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="services-area section-padding3">
        <div class="container">
            <div class="row">
                <div class="cl-xl-7 col-lg-8 col-md-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle mb-70">
                        <span id="portfolioHeadline">
                            <?php echo ($widgetContent->headline != null) ? $widgetContent->headline : 'Headline'; ?>
                        </span>
                        <h2 id="portfolioTitle">
                            <?php echo ($widgetContent->title != null) ? $widgetContent->title : 'Title'; ?>
                        </h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-10">
                    <div class="single-services mb-100">
                        <div class="services-img">
                            <img src="business_template/assets/img/gallery/services1.png" alt="">
                            </div>
                            <div class="services-caption">
                            <span id="portfolioBanHead1">
                                <?php echo ($widgetContent->bannerHeadOne != null) ? $widgetContent->bannerHeadOne : 'Banner Head 1'; ?>
                            </span>
                            <p id="portfolioBanTitle1">
                                <?php echo ($widgetContent->bannerTitleOne != null) ? $widgetContent->bannerTitleOne : 'Banner Title 1'; ?>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-10">
                    <div class="single-services mb-100">
                        <div class="services-img">
                            <img src="business_template/assets/img/gallery/services2.png" alt="">
                            </div>
                            <div class="services-caption">
                            <span id="portfolioBanHead2">
                                <?php echo ($widgetContent->bannerHeadTwo != null) ? $widgetContent->bannerHeadTwo : 'Banner Head 2'; ?>
                            </span>
                            <p id="portfolioBanTitle2">
                                <?php echo ($widgetContent->bannerTitleTwo != null) ? $widgetContent->bannerTitleTwo : 'Banner Title 2'; ?>
                            </p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</div>