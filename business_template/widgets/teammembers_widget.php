<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="team-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="cl-xl-7 col-lg-8 col-md-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle mb-70">
                        <span id="teamHeadline">
                            <?php echo ($widgetContent->headline != null) ? $widgetContent->headline : 'Headline'; ?>
                        </span>
                        <h2 id="teamTitle">
                            <?php echo ($widgetContent->title != null) ? $widgetContent->title : 'Title'; ?>
                        </h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <!-- single Tem -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">                    
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="business_template/assets/img/gallery/team3.png" alt="">
                        </div>
                        <div class="team-caption">
                            <h3 id="teamMember1Name">
                                <?php echo ($widgetContent->memberOne != null) ? $widgetContent->memberOne : 'Name'; ?>
                            </h3>
                            <span id="teamMember1Role">
                                <?php echo ($widgetContent->roleOne != null) ? $widgetContent->roleOne : 'Role'; ?>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">                    
                </div>
            </div>
        </div>
    </div>
</div>