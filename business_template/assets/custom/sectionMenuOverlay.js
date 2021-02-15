function loadOverlayFunctions() {
    loadCancelEditSection()
    loadSectionMenuOverlay()
    loadRemoveSection()
    loadRemoveWidget()
    loadEditWidget()
}

function loadCancelEditSection() {
    $(`.cancelEditSectionBtn`).off().on("click", function() {
        let sectionID = $(this).closest("div[id]").attr("id")        
        let widgetID = $(`#${sectionID}`).find("div[id]").attr("id")         
        $(`#${widgetID}`).next("div").remove()
    })    
}

function loadSectionMenuOverlay() {    
    $(".optionalSectionWrapper").hover( function() {
        let sectionID = $(this).attr("id")
        $(`#${sectionID}`).find('.optionalSectionOverlay').removeClass("overlayBackgroundHide")
        $(`#${sectionID}`).find('.optionalSectionContent').addClass("optionalSectionShow")
    }, function() {
        let sectionID = $(this).attr("id")
        $(`#${sectionID}`).find('.optionalSectionOverlay').addClass("overlayBackgroundHide")
        $(`#${sectionID}`).find('.optionalSectionContent').removeClass("optionalSectionShow")
    })
}

function loadRemoveSection() {
    $(`.removeSectionIcon`).off().on("click", function() {
        let sectionID = $(this).closest("div[id]").attr("id")        
        $(`#${sectionID}`).remove()
        pageSections = pageSections.filter(pageSections => pageSections.section_id != sectionID)
        pageData.page_sections = pageSections
    })    
}

function loadRemoveWidget() {
    $(`.removeWidgetIcon`).off().on("click", function() {        

        let sectionID = $(this).closest("div[id]").attr("id")
        let uuidWidg = generateUUID() 
        let newWidgetID = `widget_${uuidWidg}`
        let newSliderID = `slider_${sectionID.replace("section_", "")}`        

        $(`#${sectionID}`).empty()
        $(`#${sectionID}`).append(`<div id="${newWidgetID}"></div>`)        

        pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list.length = 0
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${widgetListWidget}`, function(response) {
                        
            response = response.replace("replaceWithSliderID", newSliderID)
            $(`#${newWidgetID}`).append(response)
            
            loadWidgetListSlider(newSliderID)
            loadAvailableWidgets()            
        })        
    })    
}

function loadEditWidget() {
    $(`.editWidgetIcon`).off().on("click", function() {        
        let sectionID = $(this).closest("div[id]").attr("id")

        let widgetData = pageSections.filter(pageSections => pageSections.section_id == `${sectionID}`)[0].section_widget_list[0]
        let widgetType = widgetData.widget_type
        let editWidgetModal = getEditWidgetModal(widgetType)
        let sectionModalID = "section_modal"        

        //dom manipulation
        $.get(`${basePath}/${modalsPath}/${editWidgetModal}`, function(response) {
                        
            $(`#${sectionModalID}`).empty().append(response)
            $('#editWidgetModal').modal('show');

            $(`#modalSectionID`).val(sectionID)        
            loadSaveWidgetUpdates(widgetType)
        })  
        
    })    
}