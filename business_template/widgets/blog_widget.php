<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="home-blog-area section-padding30">
        <div class="container">
            <!-- Section Tittle -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle mb-100">
                        <span id="blogHeadline">
                            <?php echo ($widgetContent->headline != null) ? $widgetContent->headline : 'Headline'; ?>
                        </span>
                        <h2 id="blogTitle">
                            <?php echo ($widgetContent->title != null) ? $widgetContent->title : 'Title'; ?>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="business_template/assets/img/gallery/home_blog1.png" alt="">
                                <ul>
                                    <li id="blogAuthor1">
                                        <?php echo ($widgetContent->authorOne != null) ? $widgetContent->authorOne : 'Author 1'; ?>
                                    </li>
                                </ul>
                            </div>
                            <div class="blog-cap">
                                <h3 id="blogTitle1">
                                    <?php echo ($widgetContent->titleOne != null) ? $widgetContent->titleOne : 'Title 1'; ?>
                                </h3>
                                <p id="blogContent1">
                                    <?php echo ($widgetContent->contentOne != null) ? $widgetContent->contentOne : 'Content 1'; ?>
                                </p>
                                <a href="blog_details.html" class="more-btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="business_template/assets/img/gallery/home_blog2.png" alt="">
                                <ul>
                                    <li id="blogAuthor2">
                                        <?php echo ($widgetContent->authorTwo != null) ? $widgetContent->authorTwo : 'Author 2'; ?>
                                    </li>
                                </ul>
                            </div>
                            <div class="blog-cap">
                                <h3 id="blogTitle2">
                                    <?php echo ($widgetContent->titleTwo != null) ? $widgetContent->titleTwo : 'Title 2'; ?>
                                </h3>
                                <p id="blogContent2">
                                    <?php echo ($widgetContent->contentTwo != null) ? $widgetContent->contentTwo : 'Content 2'; ?>
                                </p>
                                <a href="blog_details.html" class="more-btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>