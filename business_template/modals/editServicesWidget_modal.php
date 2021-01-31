<!-- <div id="editWidgetModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">
        
        <div class="modal-content">
                <div class="modal-header">        
                <h4 class="modal-title">Edit Widget</h4>
            </div>
            <div class="modal-body">
                <input hidden id="modalSectionID">
                <input type="text" class="services-title" placeholder="Our Best Services">
                <input type="text" class="services-title" placeholder="Our Best Services">
                <textarea class="services-title" placeholder="Our Best Services"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" id="btnSaveWidgetEdits" class="btn btn-default">Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
  </div>
</div> -->

<div class="modal fade" id="editWidgetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Services Widget</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div class="modal-body">
                <input hidden id="modalSectionID">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Headline:</label>
                        <input type="text" class="form-control" id="txtHeadline">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Title:</label>
                        <input type="text" class="form-control" id="txtTitle">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Emphasis Text:</label>
                        <textarea class="form-control" id="txtaEmphasis"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Content Text:</label>
                        <textarea class="form-control" id="txtaContent"></textarea>
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