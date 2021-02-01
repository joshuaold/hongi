<div class="modal fade" id="editWidgetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Testimonial Widget</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div class="modal-body">
                <input hidden id="modalSectionID">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="txtName">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Position:</label>
                        <input type="text" class="form-control" id="txtPosition">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Testimonial:</label>
                        <textarea class="form-control" id="txtaTestimonial"></textarea>
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