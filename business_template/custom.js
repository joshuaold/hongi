const basePath = "business_template"

const sectionMenuOverlay = "sectionMenuOverlay.php"

const widgetsPath = "widgets"
const widgetListWidget = "widgetList_widget.php"
const servicesWidget = "services_widget.php"
const testimonialWidget = "testimonial_widget.php"
const ctaWidget = "cta_widget.php"

const modalsPath = "modals"
const editServicesWidgetModal = "editServicesWidget_modal.php"
const editTestimonialWidgetModal = "editTestimonialWidget_modal.php"
const editCtaWidgetModal = "editCtaWidget_modal.php"

$(document).ready( () => {    
    loadAddSection("btnAddSection_main", "section_main_addSection")
    loadOverlayFunctions()
})

function loadAddSection(btnID, sectionID) {
    $(`#${btnID}`).on("click", (e) => {

        let uuidSecSlide = generateUUID()
        let newSectionID = `section_${uuidSecSlide}`        
        let newSliderID = `slider_${uuidSecSlide}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let obj = new Object()
        obj.section_id = newSectionID
        obj.section_widget_list = []

        let sectionObj = JSON.stringify(obj)        

        // let sectionObj = `
        //         {
        //             "section_id": "${newSectionID}",
        //             "section_widget_list": []
        //         }
        //     `        

        $(`#${sectionID}`).before(`<div id="${newSectionID}" class="optionalSectionWrapper"></div>`)
        $(`#${newSectionID}`).append(`<div id="${newWidgetID}"></div>`)

        pageSections.push(JSON.parse(sectionObj))
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

function loadAvailableWidgets() {
    loadAddServicesWidget()
    loadAddTestimonialWidget()
    loadAddCtaWidget()
}

function loadOverlayFunctions() {
    loadSectionMenuOverlay()
    loadRemoveSection()
    loadRemoveWidget()
    loadEditWidget()
}

function loadAddCtaWidget() {

    $(`.ctaWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.callLineOne = "Line 1"
        contentObj.callLineTwo = "Line 2"
        contentObj.button = "Button"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "cta_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        // let widgetObj = `
        //         {
        //             "widget_id": "${newWidgetID}",
        //             "widget_type": "services_widget",
        //             "widget_content": {
        //                 "headline": "Headline",
        //                 "title": "Title",
        //                 "emphasis": "Emphasis",
        //                 "content": "Content"
        //             }
        //         }
        //     `

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${ctaWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
                $(`#${newWidgetID}`).after(response)
                loadOverlayFunctions()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
}

function loadAddServicesWidget() {

    $(`.servicesWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.headline = "Headline"
        contentObj.title = "Title"
        contentObj.emphasis = "Emphasis"
        contentObj.content = "Content"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "services_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        // let widgetObj = `
        //         {
        //             "widget_id": "${newWidgetID}",
        //             "widget_type": "services_widget",
        //             "widget_content": {
        //                 "headline": "Headline",
        //                 "title": "Title",
        //                 "emphasis": "Emphasis",
        //                 "content": "Content"
        //             }
        //         }
        //     `

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${servicesWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
                $(`#${newWidgetID}`).after(response)
                loadOverlayFunctions()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
}

function loadAddTestimonialWidget() {

    $(`.testimonialWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.name = "Name"
        contentObj.position = "Position"
        contentObj.testimonial = "Testimonial"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "testimonial_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        // let widgetObj = `
        //         {
        //             "widget_id": "${newWidgetID}",
        //             "widget_type": "services_widget",
        //             "widget_content": {
        //                 "headline": "Headline",
        //                 "title": "Title",
        //                 "emphasis": "Emphasis",
        //                 "content": "Content"
        //             }
        //         }
        //     `

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${testimonialWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
                $(`#${newWidgetID}`).after(response)
                loadOverlayFunctions()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
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
        console.log(sectionID)
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

function getEditWidgetModal(widgetType) {
    switch(widgetType){
        case "services_widget":
            return editServicesWidgetModal
        case "testimonial_widget":
            return editTestimonialWidgetModal
        case "cta_widget":
            return editCtaWidgetModal
        default:
            return null
    }
}

function loadSaveWidgetUpdates(widgetType) {
    $(`#btnSaveWidgetEdits`).off().on("click", function() {
        let sectionID = $('#modalSectionID').val()                
        let updatedContent = getUpdatedWidgetContent(widgetType)

        // console.log(pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content)
        pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content = updatedContent
        // console.log(pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content)
        pageData.page_sections = pageSections

        $('#editWidgetModal').modal('hide');
        updateWidgetDisplay(widgetType, sectionID, updatedContent)

        // let newTitle = $(`.services-title`).val()

        // let newWidgetContent = `{
        //     "title": "${newTitle}"
        // }`

        // currentWidget.widget_content = JSON.parse(newWidgetContent)
        // console.log(JSON.stringify(currentWidget))

        // $('#myModal').modal('hide');
        // $(`#${sectionID}`).find('#services-title').text(newTitle)
    }) 
}

function getUpdatedWidgetContent(widgetType) {
    switch(widgetType){
        case "services_widget":
            return getServicesWidgetUpdates()
        case "testimonial_widget":
            return getTestimonialWidgetUpdates() 
        case "cta_widget":
            return getCtaWidgetUpdates()    
        default:
            return null
    }
}

function getServicesWidgetUpdates() {

    let headline = $(`#txtHeadline`).val()
    let title = $(`#txtTitle`).val()
    let emphasis = $(`#txtaEmphasis`).val()
    let content = $(`#txtaContent`).val()

    let obj = new Object()
    obj.headline = headline
    obj.title = title
    obj.emphasis = emphasis
    obj.content = content

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getTestimonialWidgetUpdates() {

    let name = $(`#txtName`).val()
    let position = $(`#txtPosition`).val()
    let testimonial = $(`#txtaTestimonial`).val()

    let obj = new Object()
    obj.name = name
    obj.position = position
    obj.testimonial = testimonial    

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getCtaWidgetUpdates() {

    let lineOne = $(`#txtLine1`).val()
    let lineTwo = $(`#txtLine2`).val()
    let button = $(`#txtButton`).val()

    let obj = new Object()
    obj.callLineOne = lineOne
    obj.callLineTwo = lineTwo
    obj.button = button    

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function updateWidgetDisplay(widgetType, sectionID, updatedContent) {
    switch(widgetType){
        case "services_widget":
            return updateServicesWidgetDisplay(sectionID, updatedContent)
        case "testimonial_widget":
            return updateTestimonialWidgetDisplay(sectionID, updatedContent) 
        case "cta_widget":
            return updateCtaWidgetDisplay(sectionID, updatedContent) 
        default:
            return null
    }
}

function updateServicesWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#servicesHeadline').text(parsedContent.headline)
    $(`#${sectionID}`).find('#servicesTitle').text(parsedContent.title)
    $(`#${sectionID}`).find('#servicesEmphasis').text(parsedContent.emphasis)
    $(`#${sectionID}`).find('#servicesContent').text(parsedContent.content)
}

function updateTestimonialWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)    
    $(`#${sectionID}`).find('#testimonialName').text(parsedContent.name)
    $(`#${sectionID}`).find('#testimonialPosition').text(parsedContent.position)
    $(`#${sectionID}`).find('#testimonialText').text(parsedContent.testimonial)
}

function updateCtaWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)    
    $(`#${sectionID}`).find('#ctaCallLineOne').text(parsedContent.callLineOne)
    $(`#${sectionID}`).find('#ctaCallLineTwo').text(parsedContent.callLineTwo)
    $(`#${sectionID}`).find('#ctaButton').text(parsedContent.button)
}

function generateUUID() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function loadWidgetListSlider(sliderID) {
    $(`#${sliderID}`).slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:false,
        loop:true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrow:false
                  }
            },
            {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                  }    
            },
            {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                  }
            }
        ]
    })
}

function showJSONObject() {
    // alert(JSON.stringify(pageData))
    console.log(JSON.stringify(pageSections))
}