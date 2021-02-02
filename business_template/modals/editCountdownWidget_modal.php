<div class="modal fade" id="editWidgetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Countdown Widget</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div class="modal-body">
                <input hidden id="modalSectionID">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 1 Number:</label>
                        <input type="text" class="form-control" id="txtNum1">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 1 Text:</label>
                        <input type="text" class="form-control" id="txtText1">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 2 Number:</label>
                        <input type="text" class="form-control" id="txtNum2">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 2 Text:</label>
                        <input type="text" class="form-control" id="txtText2">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 3 Number:</label>
                        <input type="text" class="form-control" id="txtNum3">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 3 Text:</label>
                        <input type="text" class="form-control" id="txtText3">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 4 Number:</label>
                        <input type="text" class="form-control" id="txtNum4">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Box 4 Text:</label>
                        <input type="text" class="form-control" id="txtText4">
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="btnSaveWidgetEdits" class="btn btn-primary">Save</button>
            </div>

        </div>
    </div>
</div>