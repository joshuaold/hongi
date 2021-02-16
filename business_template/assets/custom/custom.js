// const basePath = "business_template"

// const sectionMenuOverlay = "sectionMenuOverlay.php"

// const widgetsPath = "widgets"
// const widgetListWidget = "widgetList_widget.php"
// const servicesWidget = "services_widget.php"
// const testimonialWidget = "testimonial_widget.php"
// const ctaWidget = "cta_widget.php"
// const countdownWidget = "countdown_widget.php"
// const teamMembersWidget = "teammembers_widget.php"
// const blogWidget = "blog_widget.php"
// const portfolioWidget = "portfolio_widget.php"
// const categoriesWidget = "categories_widget.php"
// const sliderWidget = "slider_widget.php"

// const modalsPath = "modals"
// const editServicesWidgetModal = "editServicesWidget_modal.php"
// const editTestimonialWidgetModal = "editTestimonialWidget_modal.php"
// const editCtaWidgetModal = "editCtaWidget_modal.php"
// const editCountdownWidgetModal = "editCountdownWidget_modal.php"
// const editTeamMembersWidgetModal = "editTeamMembersWidget_modal.php"
// const editBlogWidgetModal = "editBlogWidget_modal.php"
// const editPortfolioWidgetModal = "editPortfolioWidget_modal.php"
// const editCategoriesWidgetModal = "editCategoriesWidget_modal.php"
// const editSliderWidgetModal = "editSliderWidget_modal.php"

$(document).ready( () => {
    loadEditNavbar()
    loadAddSection("btnAddSection_main", "section_main_addSection")
    loadEditSection()
    loadOverlayFunctions()
})

// function loadAvailableWidgets() {
//     loadAddServicesWidget()
//     loadAddTestimonialWidget()
//     loadAddCtaWidget()
//     loadAddCountdownWidget()
//     loadAddTeamMembersWidget()
//     loadAddBlogWidget()
//     loadAddPortfolioWidget()
//     loadAddCategoriesWidget()
//     loadAddSliderWidget()
// }

// function loadOverlayFunctions() {
//     loadSectionMenuOverlay()
//     loadRemoveSection()
//     loadRemoveWidget()
//     loadEditWidget()
// }

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

// function loadAddSliderWidget() {

//     $(`.sliderWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`
//         let newSliderID = `slider_${currentSectionID.replace("section_", "")}`

//         let contentObj = new Object()
//         contentObj.headline = "Headline"
//         contentObj.title = "Title"
//         contentObj.content = "Content"
//         contentObj.button = "Button"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "slider_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${sliderWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)

//             response = response.replace("replaceWithSliderID", newSliderID)
//             $(`#${newWidgetID}`).append(response)
            
//             loadSliderSlider(newSliderID)            

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                               

//         })            
                                     
//     })    
// }

// function loadAddCategoriesWidget() {

//     $(`.categoriesWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.headline = "Headline"
//         contentObj.title = "Title"
//         contentObj.tileTitleOne = "Tile Title 1"
//         contentObj.tileDescOne = "Tile Description 1"
//         contentObj.tileTitleTwo = "Tile Title 2"
//         contentObj.tileDescTwo = "Tile Description 2"
//         contentObj.tileTitleThree = "Tile Title 3"
//         contentObj.tileDescThree = "Tile Description 3"        

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "categories_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${categoriesWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddPortfolioWidget() {

//     $(`.portfolioWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.headline = "Headline"
//         contentObj.title = "Title"
//         contentObj.bannerHeadOne = "Banner Headline 1"
//         contentObj.bannerTitleOne = "Banner Title 1"
//         contentObj.bannerHeadTwo = "Banner Headline 2"
//         contentObj.bannerTitleTwo = "Banner Title 2"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "portfolio_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${portfolioWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddBlogWidget() {

//     $(`.blogWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.headline = "Headline"
//         contentObj.title = "Title"
//         contentObj.authorOne = "Author"
//         contentObj.titleOne = "Title"
//         contentObj.contentOne = "Content"
//         contentObj.authorTwo = "Author"
//         contentObj.titleTwo = "Title"
//         contentObj.contentTwo = "Content"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "blog_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${blogWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddTeamMembersWidget() {

//     $(`.teamMembersWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.headline = "Headline"
//         contentObj.title = "Title"
//         contentObj.memberOne = "Name"
//         contentObj.roleOne = "Role"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "teammembers_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${teamMembersWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddCountdownWidget() {

//     $(`.countdownWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.numberOne = "1"
//         contentObj.textOne = "Text 1"
//         contentObj.numberTwo = "2"
//         contentObj.textTwo = "Text 2"
//         contentObj.numberThree = "3"
//         contentObj.textThree = "Text 3"
//         contentObj.numberFour = "4"
//         contentObj.textFour = "Text 4"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "countdown_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${countdownWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddCtaWidget() {

//     $(`.ctaWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.callLineOne = "Line 1"
//         contentObj.callLineTwo = "Line 2"
//         contentObj.button = "Button"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "cta_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${ctaWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddServicesWidget() {

//     $(`.servicesWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.headline = "Headline"
//         contentObj.title = "Title"
//         contentObj.emphasis = "Emphasis"
//         contentObj.content = "Content"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "services_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${servicesWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadAddTestimonialWidget() {

//     $(`.testimonialWidgetIcon`).off().on("click", function() {        

//         let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
//         let currentSectionID = `section_${id}`
//         let uuidWidg = generateUUID()
//         let newWidgetID = `widget_${uuidWidg}`

//         let contentObj = new Object()
//         contentObj.name = "Name"
//         contentObj.position = "Position"
//         contentObj.testimonial = "Testimonial"

//         let obj = new Object()
//         obj.widget_id = newWidgetID
//         obj.widget_type = "testimonial_widget"
//         obj.widget_content = JSON.stringify(contentObj)

//         let widgetObj = JSON.stringify(obj)

//         // let widgetObj = `
//         //         {
//         //             "widget_id": "${newWidgetID}",
//         //             "widget_type": "services_widget",
//         //             "widget_content": {
//         //                 "headline": "Headline",
//         //                 "title": "Title",
//         //                 "emphasis": "Emphasis",
//         //                 "content": "Content"
//         //             }
//         //         }
//         //     `

//         pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${testimonialWidget}`, function(response) {
            
//             $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
//             $(`#${newWidgetID}`).append(response)

//             $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
//                 $(`#${newWidgetID}`).after(response)
//                 loadOverlayFunctions()
//             })

//             $("[data-background]").each(function () {
//                 $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//             })                        

//         })            
                                     
//     })    
// }

// function loadSectionMenuOverlay() {    
//     $(".optionalSectionWrapper").hover( function() {
//         let sectionID = $(this).attr("id")
//         $(`#${sectionID}`).find('.optionalSectionOverlay').removeClass("overlayBackgroundHide")
//         $(`#${sectionID}`).find('.optionalSectionContent').addClass("optionalSectionShow")
//     }, function() {
//         let sectionID = $(this).attr("id")
//         $(`#${sectionID}`).find('.optionalSectionOverlay').addClass("overlayBackgroundHide")
//         $(`#${sectionID}`).find('.optionalSectionContent').removeClass("optionalSectionShow")
//     })
// }

// function loadRemoveSection() {
//     $(`.removeSectionIcon`).off().on("click", function() {
//         let sectionID = $(this).closest("div[id]").attr("id")
//         console.log(sectionID)
//         $(`#${sectionID}`).remove()
//         pageSections = pageSections.filter(pageSections => pageSections.section_id != sectionID)
//         pageData.page_sections = pageSections
//     })    
// }

// function loadRemoveWidget() {
//     $(`.removeWidgetIcon`).off().on("click", function() {        

//         let sectionID = $(this).closest("div[id]").attr("id")
//         let uuidWidg = generateUUID() 
//         let newWidgetID = `widget_${uuidWidg}`
//         let newSliderID = `slider_${sectionID.replace("section_", "")}`        

//         $(`#${sectionID}`).empty()
//         $(`#${sectionID}`).append(`<div id="${newWidgetID}"></div>`)        

//         pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list.length = 0
//         pageData.page_sections = pageSections

//         //dom manipulation
//         $.get(`${basePath}/${widgetsPath}/${widgetListWidget}`, function(response) {
                        
//             response = response.replace("replaceWithSliderID", newSliderID)
//             $(`#${newWidgetID}`).append(response)
            
//             loadWidgetListSlider(newSliderID)
//             loadAvailableWidgets()            
//         })        
//     })    
// }

// function loadEditWidget() {
//     $(`.editWidgetIcon`).off().on("click", function() {        
//         let sectionID = $(this).closest("div[id]").attr("id")

//         let widgetData = pageSections.filter(pageSections => pageSections.section_id == `${sectionID}`)[0].section_widget_list[0]
//         let widgetType = widgetData.widget_type
//         let editWidgetModal = getEditWidgetModal(widgetType)
//         let sectionModalID = "section_modal"        

//         //dom manipulation
//         $.get(`${basePath}/${modalsPath}/${editWidgetModal}`, function(response) {
                        
//             $(`#${sectionModalID}`).empty().append(response)
//             $('#editWidgetModal').modal('show');

//             $(`#modalSectionID`).val(sectionID)        
//             loadSaveWidgetUpdates(widgetType)
//         })  
        
//     })    
// }

// function getEditWidgetModal(widgetType) {
//     switch(widgetType){
//         case "services_widget":
//             return editServicesWidgetModal
//         case "testimonial_widget":
//             return editTestimonialWidgetModal
//         case "cta_widget":
//             return editCtaWidgetModal
//         case "countdown_widget":
//             return editCountdownWidgetModal
//         case "teammembers_widget":
//             return editTeamMembersWidgetModal
//         case "blog_widget":
//             return editBlogWidgetModal
//         case "portfolio_widget":
//             return editPortfolioWidgetModal
//         case "categories_widget":
//             return editCategoriesWidgetModal
//         case "slider_widget":
//             return editSliderWidgetModal
//         default:
//             return null
//     }
// }

// function loadSaveWidgetUpdates(widgetType) {
//     $(`#btnSaveWidgetEdits`).off().on("click", function() {
//         let sectionID = $('#modalSectionID').val()                
//         let updatedContent = getUpdatedWidgetContent(widgetType)

//         // console.log(pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content)
//         pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content = updatedContent
//         // console.log(pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content)
//         pageData.page_sections = pageSections

//         $('#editWidgetModal').modal('hide');
//         updateWidgetDisplay(widgetType, sectionID, updatedContent)

//         // let newTitle = $(`.services-title`).val()

//         // let newWidgetContent = `{
//         //     "title": "${newTitle}"
//         // }`

//         // currentWidget.widget_content = JSON.parse(newWidgetContent)
//         // console.log(JSON.stringify(currentWidget))

//         // $('#myModal').modal('hide');
//         // $(`#${sectionID}`).find('#services-title').text(newTitle)
//     }) 
// }

// function getUpdatedWidgetContent(widgetType) {
//     switch(widgetType){
//         case "services_widget":
//             return getServicesWidgetUpdates()
//         case "testimonial_widget":
//             return getTestimonialWidgetUpdates() 
//         case "cta_widget":
//             return getCtaWidgetUpdates()    
//         case "countdown_widget":
//             return getCountdownWidgetUpdates()
//         case "teammembers_widget":
//             return getTeamMembersWidgetUpdates()
//         case "blog_widget":
//             return getBlogWidgetUpdates()
//         case "portfolio_widget":
//             return getPortfolioWidgetUpdates()
//         case "categories_widget":
//             return getCategoriesWidgetUpdates()
//         case "slider_widget":
//             return getSliderWidgetUpdates()
//         default:
//             return null
//     }
// }

// function getSliderWidgetUpdates() {

//     let headline = $(`#txtSliderHeadline`).val()
//     let title = $(`#txtSliderTitle`).val()
//     let button = $(`#txtSliderButton`).val()    
//     let content = $(`#txtaSliderContent`).val()    

//     let obj = new Object()
//     obj.headline = headline
//     obj.title = title
//     obj.content = content
//     obj.button = button

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getCategoriesWidgetUpdates() {

//     let headline = $(`#txtCatHeadline`).val()
//     let title = $(`#txtCatTitle`).val()
//     let tileTitleOne = $(`#txtCatTileTitle1`).val()
//     let tileDescOne = $(`#txtCatTileDesc1`).val()
//     let tileTitleTwo = $(`#txtCatTileTitle2`).val()
//     let tileDescTwo = $(`#txtCatTileDesc2`).val()    
//     let tileTitleThree = $(`#txtCatTileTitle3`).val()
//     let tileDescThree = $(`#txtCatTileDesc3`).val()    

//     let obj = new Object()
//     obj.headline = headline
//     obj.title = title
//     obj.tileTitleOne = tileTitleOne
//     obj.tileDescOne = tileDescOne
//     obj.tileTitleTwo = tileTitleTwo
//     obj.tileDescTwo = tileDescTwo
//     obj.tileTitleThree = tileTitleThree
//     obj.tileDescThree = tileDescThree    

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getPortfolioWidgetUpdates() {

//     let headline = $(`#txtPortfolioHeadline`).val()
//     let title = $(`#txtPortfolioTitle`).val()
//     let bannerHeadOne = $(`#txtPortfolioBanHead1`).val()
//     let bannerTitleOne = $(`#txtPortfolioBanTitle1`).val()
//     let bannerHeadTwo = $(`#txtPortfolioBanHead2`).val()
//     let bannerTitleTwo = $(`#txtPortfolioBanTitle2`).val()    

//     let obj = new Object()
//     obj.headline = headline
//     obj.title = title
//     obj.bannerHeadOne = bannerHeadOne
//     obj.bannerTitleOne = bannerTitleOne
//     obj.bannerHeadTwo = bannerHeadTwo
//     obj.bannerTitleTwo = bannerTitleTwo

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getBlogWidgetUpdates() {

//     let headline = $(`#txtBlogHeadline`).val()
//     let title = $(`#txtBlogTitle`).val()
//     let authorOne = $(`#txtBlogAuthor1`).val()
//     let titleOne = $(`#txtBlogTitle1`).val()
//     let contentOne = $(`#txtBlogContent1`).val()
//     let authorTwo = $(`#txtBlogAuthor2`).val()
//     let titleTwo = $(`#txtBlogTitle2`).val()
//     let contentTwo = $(`#txtBlogContent2`).val()

//     let obj = new Object()
//     obj.headline = headline
//     obj.title = title
//     obj.authorOne = authorOne
//     obj.titleOne = titleOne
//     obj.contentOne = contentOne
//     obj.authorTwo = authorTwo
//     obj.titleTwo = titleTwo
//     obj.contentTwo = contentTwo

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getTeamMembersWidgetUpdates() {

//     let headline = $(`#txtHeadline`).val()
//     let title = $(`#txtTitle`).val()
//     let name = $(`#txtName`).val()
//     let role = $(`#txtRole`).val()

//     let obj = new Object()
//     obj.headline = headline
//     obj.title = title
//     obj.memberOne = name
//     obj.roleOne = role

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getCountdownWidgetUpdates() {

//     let num1 = $(`#txtNum1`).val()
//     let text1 = $(`#txtText1`).val()
//     let num2 = $(`#txtNum2`).val()
//     let text2 = $(`#txtText2`).val()
//     let num3 = $(`#txtNum3`).val()
//     let text3 = $(`#txtText3`).val()
//     let num4 = $(`#txtNum4`).val()
//     let text4 = $(`#txtText4`).val()

//     let obj = new Object()
//     obj.numberOne = num1
//     obj.textOne = text1
//     obj.numberTwo = num2
//     obj.textTwo = text2
//     obj.numberThree = num3
//     obj.textThree = text3
//     obj.numberFour = num4
//     obj.textFour = text4

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getServicesWidgetUpdates() {

//     let headline = $(`#txtHeadline`).val()
//     let title = $(`#txtTitle`).val()
//     let emphasis = $(`#txtaEmphasis`).val()
//     let content = $(`#txtaContent`).val()

//     let obj = new Object()
//     obj.headline = headline
//     obj.title = title
//     obj.emphasis = emphasis
//     obj.content = content

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getTestimonialWidgetUpdates() {

//     let name = $(`#txtName`).val()
//     let position = $(`#txtPosition`).val()
//     let testimonial = $(`#txtaTestimonial`).val()

//     let obj = new Object()
//     obj.name = name
//     obj.position = position
//     obj.testimonial = testimonial    

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function getCtaWidgetUpdates() {

//     let lineOne = $(`#txtLine1`).val()
//     let lineTwo = $(`#txtLine2`).val()
//     let button = $(`#txtButton`).val()

//     let obj = new Object()
//     obj.callLineOne = lineOne
//     obj.callLineTwo = lineTwo
//     obj.button = button    

//     let updatedContent = JSON.stringify(obj)    
//     return updatedContent
// }

// function updateWidgetDisplay(widgetType, sectionID, updatedContent) {
//     switch(widgetType){
//         case "services_widget":
//             return updateServicesWidgetDisplay(sectionID, updatedContent)
//         case "testimonial_widget":
//             return updateTestimonialWidgetDisplay(sectionID, updatedContent)
//         case "cta_widget":
//             return updateCtaWidgetDisplay(sectionID, updatedContent)
//         case "countdown_widget":
//             return updateCountdownWidgetDisplay(sectionID, updatedContent)
//         case "teammembers_widget":
//             return updateTeamMembersWidgetDisplay(sectionID, updatedContent)
//         case "blog_widget":
//             return updateBlogWidgetDisplay(sectionID, updatedContent)
//         case "portfolio_widget":
//             return updatePortfolioWidgetDisplay(sectionID, updatedContent)
//         case "categories_widget":
//             return updateCategoriesWidgetDisplay(sectionID, updatedContent)
//         case "slider_widget":
//             return updateSliderWidgetDisplay(sectionID, updatedContent)
//         default:
//             return null
//     }
// }

// function updateSliderWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#sliderHeadline').text(parsedContent.headline)
//     $(`#${sectionID}`).find('#sliderTitle').text(parsedContent.title)
//     $(`#${sectionID}`).find('#sliderContent').text(parsedContent.content)
//     $(`#${sectionID}`).find('#sliderButton').text(parsedContent.button) 
// }

// function updateCategoriesWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#categoriesHeadline').text(parsedContent.headline)
//     $(`#${sectionID}`).find('#categoriesTitle').text(parsedContent.title)
//     $(`#${sectionID}`).find('#categoriesTileTitle1').text(parsedContent.tileTitleOne)
//     $(`#${sectionID}`).find('#categoriesTileDesc1').text(parsedContent.tileDescOne)
//     $(`#${sectionID}`).find('#categoriesTileTitle2').text(parsedContent.tileTitleTwo)
//     $(`#${sectionID}`).find('#categoriesTileDesc2').text(parsedContent.tileDescTwo)    
//     $(`#${sectionID}`).find('#categoriesTileTitle3').text(parsedContent.tileTitleThree)
//     $(`#${sectionID}`).find('#categoriesTileDesc3').text(parsedContent.tileDescThree)
// }

// function updatePortfolioWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#portfolioHeadline').text(parsedContent.headline)
//     $(`#${sectionID}`).find('#portfolioTitle').text(parsedContent.title)
//     $(`#${sectionID}`).find('#portfolioBanHead1').text(parsedContent.bannerHeadOne)
//     $(`#${sectionID}`).find('#portfolioBanTitle1').text(parsedContent.bannerTitleOne)
//     $(`#${sectionID}`).find('#portfolioBanHead2').text(parsedContent.bannerHeadTwo)
//     $(`#${sectionID}`).find('#portfolioBanTitle2').text(parsedContent.bannerTitleTwo)    
// }

// function updateBlogWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#blogHeadline').text(parsedContent.headline)
//     $(`#${sectionID}`).find('#blogTitle').text(parsedContent.title)
//     $(`#${sectionID}`).find('#blogAuthor1').text(parsedContent.authorOne)
//     $(`#${sectionID}`).find('#blogTitle1').text(parsedContent.titleOne)
//     $(`#${sectionID}`).find('#blogContent1').text(parsedContent.contentOne)
//     $(`#${sectionID}`).find('#blogAuthor2').text(parsedContent.authorTwo)
//     $(`#${sectionID}`).find('#blogTitle2').text(parsedContent.titleTwo)
//     $(`#${sectionID}`).find('#blogContent2').text(parsedContent.contentTwo)
// }

// function updateTeamMembersWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#teamHeadline').text(parsedContent.headline)
//     $(`#${sectionID}`).find('#teamTitle').text(parsedContent.title)
//     $(`#${sectionID}`).find('#teamMember1Name').text(parsedContent.memberOne)
//     $(`#${sectionID}`).find('#teamMember1Role').text(parsedContent.roleOne)
// }

// function updateCountdownWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#box1Num').text(parsedContent.numberOne)
//     $(`#${sectionID}`).find('#box1Text').text(parsedContent.textOne)
//     $(`#${sectionID}`).find('#box2Num').text(parsedContent.numberTwo)
//     $(`#${sectionID}`).find('#box2Text').text(parsedContent.textTwo)
//     $(`#${sectionID}`).find('#box3Num').text(parsedContent.numberThree)
//     $(`#${sectionID}`).find('#box3Text').text(parsedContent.textThree)
//     $(`#${sectionID}`).find('#box4Num').text(parsedContent.numberFour)
//     $(`#${sectionID}`).find('#box4Text').text(parsedContent.textFour)
// }

// function updateServicesWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)
//     $(`#${sectionID}`).find('#servicesHeadline').text(parsedContent.headline)
//     $(`#${sectionID}`).find('#servicesTitle').text(parsedContent.title)
//     $(`#${sectionID}`).find('#servicesEmphasis').text(parsedContent.emphasis)
//     $(`#${sectionID}`).find('#servicesContent').text(parsedContent.content)
// }

// function updateTestimonialWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)    
//     $(`#${sectionID}`).find('#testimonialName').text(parsedContent.name)
//     $(`#${sectionID}`).find('#testimonialPosition').text(parsedContent.position)
//     $(`#${sectionID}`).find('#testimonialText').text(parsedContent.testimonial)
// }

// function updateCtaWidgetDisplay(sectionID, updatedContent) {
//     let parsedContent = JSON.parse(updatedContent)    
//     $(`#${sectionID}`).find('#ctaCallLineOne').text(parsedContent.callLineOne)
//     $(`#${sectionID}`).find('#ctaCallLineTwo').text(parsedContent.callLineTwo)
//     $(`#${sectionID}`).find('#ctaButton').text(parsedContent.button)
// }

// function generateUUID() {
//   return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }

// function loadWidgetListSlider(sliderID) {
//     $(`#${sliderID}`).slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         autoplay:false,
//         loop:true,
//         arrows: true,
//         prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
//         nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: false,
//                     arrow:false
//                   }
//             },
//             {
//                   breakpoint: 600,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows:false
//                   }    
//             },
//             {
//                   breakpoint: 480,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows:false,
//                   }
//             }
//         ]
//     })
// }

// function loadSliderSlider(sliderID) {    

//     $(`#${sliderID}`).on('init', function (e, slick) {
//         var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
//         doAnimations($firstAnimatingElements);
//     });

//     $(`#${sliderID}`).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
//         var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
//         doAnimations($animatingElements);
//     });

//     $(`#${sliderID}`).slick({
//         autoplay: false,
//         autoplaySpeed: 10000,
//         dots: false,
//         fade: true,
//         arrows: true,
//         prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-left"></i></button>',
//         nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-right"></i></button>',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false
//                 }
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false
//                 }
//             }
//         ]
//     });

//     function doAnimations(elements) {
//         var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         elements.each(function () {

//             var $this = $(this);
//             var $animationDelay = $this.data('delay');
//             var $animationType = 'animated ' + $this.data('animation');

//             $this.css({
//                 'animation-delay': $animationDelay,
//                 '-webkit-animation-delay': $animationDelay
//             });

//             $this.addClass($animationType).one(animationEndEvents, function () {
//                 $this.removeClass($animationType);
//             });

//         });
//     }

//     // mainSlider()
// }
    

function showJSONObject() {
    // alert(JSON.stringify(pageData))
    console.log(JSON.stringify(pageSections))
}