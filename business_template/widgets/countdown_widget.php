<?php 
    $widgetContent = json_decode($widgetContent);
?>

<div class="optionalSectionContent">
    <div class="count-down-area pb-120">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <!-- Counter Up -->
                    <div class="single-counter text-center">
                        <span class="counter" id="box1Num">
                            <?php echo ($widgetContent->numberOne != null) ? $widgetContent->numberOne : '1'; ?>
                        </span>
                        <p id="box1Text">
                            <?php echo ($widgetContent->textOne != null) ? $widgetContent->textOne : 'Text 1'; ?>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <!-- Counter Up -->
                    <div class="single-counter active text-center">
                        <span class="counter" id="box2Num">
                            <?php echo ($widgetContent->numberTwo != null) ? $widgetContent->numberTwo : '2'; ?>
                        </span>
                        <p id="box2Text">
                            <?php echo ($widgetContent->textTwo != null) ? $widgetContent->textTwo : 'Text 2'; ?>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <!-- Counter Up -->
                    <div class="single-counter text-center">
                        <span class="counter" id="box3Num">
                            <?php echo ($widgetContent->numberThree != null) ? $widgetContent->numberThree : '3'; ?>
                        </span>
                        <p id="box3Text">
                            <?php echo ($widgetContent->textThree != null) ? $widgetContent->textThree : 'Text 3'; ?>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <!-- Counter Up -->
                    <div class="single-counter text-center">
                        <span class="counter" id="box4Num">
                            <?php echo ($widgetContent->numberFour != null) ? $widgetContent->numberFour : '4'; ?>
                        </span>
                        <p id="box4Text">
                            <?php echo ($widgetContent->textFour != null) ? $widgetContent->textFour : 'Text 4'; ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>