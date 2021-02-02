<div class="modal fade" id="editWidgetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Blog Widget</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div class="modal-body">
                <input hidden id="modalSectionID">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Headline:</label>
                        <input type="text" class="form-control" id="txtBlogHeadline">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Title:</label>
                        <input type="text" class="form-control" id="txtBlogTitle">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Author 1:</label>
                        <input type="text" class="form-control" id="txtBlogAuthor1">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Title 1:</label>
                        <input type="text" class="form-control" id="txtBlogTitle1">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Content 1:</label>
                        <input type="text" class="form-control" id="txtBlogContent1">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Author 2:</label>
                        <input type="text" class="form-control" id="txtBlogAuthor2">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Title 2:</label>
                        <input type="text" class="form-control" id="txtBlogTitle2">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Content 2:</label>
                        <input type="text" class="form-control" id="txtBlogContent2">
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