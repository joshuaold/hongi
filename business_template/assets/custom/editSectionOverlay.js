function loadEditSection() {
    $(`.editSectionBtn`).off().on("click", function() {
        let sectionID = $(this).closest("div[id]").attr("id")
        let widgetID = $(`#${sectionID}`).find("div[id]").attr("id")
        
        // dom manipulation
        $.get(`${basePath}/sectionMenuOverlay`, function(response) {                        
            $(`#${widgetID}`).after(response)
            loadOverlayFunctions()
        })       
    })    
}