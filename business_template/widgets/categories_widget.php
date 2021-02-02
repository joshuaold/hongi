<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="categories-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Section Tittle -->
                    <div class="section-tittle mb-70">
                        <span id="categoriesHeadline">
                            <?php echo ($widgetContent->headline != null) ? $widgetContent->headline : 'Headline'; ?>
                        </span>
                        <h2 id="categoriesTitle">
                            <?php echo ($widgetContent->title != null) ? $widgetContent->title : 'Title'; ?>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-development"></span>
                        </div>
                        <div class="cat-cap">
                            <h5 id="categoriesTileTitle1">
                                <?php echo ($widgetContent->tileTitleOne != null) ? $widgetContent->tileTitleOne : 'Tile Title 1'; ?>
                            </h5>
                            <p id="categoriesTileDesc1">
                                <?php echo ($widgetContent->tileDescOne != null) ? $widgetContent->tileDescOne : 'Tile Desc 1'; ?>                                
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-result"></span>
                        </div>
                        <div class="cat-cap">
                            <h5 id="categoriesTileTitle2">
                                <?php echo ($widgetContent->tileTitleTwo != null) ? $widgetContent->tileTitleTwo : 'Tile Title 2'; ?>
                            </h5>
                            <p id="categoriesTileDesc2">
                                <p id="categoriesTileDesc1">
                                <?php echo ($widgetContent->tileDescTwo != null) ? $widgetContent->tileDescTwo : 'Tile Desc 2'; ?>                                
                            </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-team"></span>
                        </div>
                        <div class="cat-cap">
                            <h5 id="categoriesTileTitle3">
                                <?php echo ($widgetContent->tileTitleThree != null) ? $widgetContent->tileTitleThree : 'Tile Title 3'; ?>
                            </h5>
                            <p id="categoriesTileDesc3">
                                <?php echo ($widgetContent->tileDescThree != null) ? $widgetContent->tileDescThree : 'Tile Desc 3'; ?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>