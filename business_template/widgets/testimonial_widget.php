<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="testimonial-area testimonial-padding" data-background="business_template/assets/img/gallery/section_bg04.jpg">
        <div class="container ">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-10 col-lg-10 col-md-9">
                    <div class="h1-testimonial-active">
                        <!-- Single Testimonial -->
                        <div class="single-testimonial text-center">
                            <!-- Testimonial Content -->
                            <div class="testimonial-caption ">
                                <div class="testimonial-top-cap">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="67px" height="49px">
                                    <path fill-rule="evenodd"  fill="rgb(240, 78, 60)"
                                    d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"/>
                                    </svg>
                                    <p id="testimonialText"><?php echo ($widgetContent->testimonial != null) ? $widgetContent->testimonial : 'Testimonial Text'; ?></p>
                                </div>
                                <!-- founder -->
                                <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                    <div class="founder-img">
                                        <img src="business_template/assets/img/gallery/Homepage_testi.png" alt="">
                                    </div>
                                    <div class="founder-text">
                                        <span id="testimonialName"><?php echo ($widgetContent->name != null) ? $widgetContent->name : 'Name'; ?></span>
                                        <p id="testimonialPosition"><?php echo ($widgetContent->position != null) ? $widgetContent->position : 'Position'; ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>