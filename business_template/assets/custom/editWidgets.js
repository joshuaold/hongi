function getEditWidgetModal(widgetType) {
    switch(widgetType){
        case "services_widget":
            return editServicesWidgetModal
        case "testimonial_widget":
            return editTestimonialWidgetModal
        case "cta_widget":
            return editCtaWidgetModal
        case "countdown_widget":
            return editCountdownWidgetModal
        case "teammembers_widget":
            return editTeamMembersWidgetModal
        case "blog_widget":
            return editBlogWidgetModal
        case "portfolio_widget":
            return editPortfolioWidgetModal
        case "categories_widget":
            return editCategoriesWidgetModal
        case "slider_widget":
            return editSliderWidgetModal
        default:
            return null
    }
}

function loadSaveWidgetUpdates(widgetType) {
    $(`#btnSaveWidgetEdits`).off().on("click", function() {
        let sectionID = $('#modalSectionID').val()                
        let updatedContent = getUpdatedWidgetContent(widgetType)

        pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list[0].widget_content = updatedContent
        pageData.page_sections = pageSections

        $('#editWidgetModal').modal('hide');
        updateWidgetDisplay(widgetType, sectionID, updatedContent)
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
        case "countdown_widget":
            return getCountdownWidgetUpdates()
        case "teammembers_widget":
            return getTeamMembersWidgetUpdates()
        case "blog_widget":
            return getBlogWidgetUpdates()
        case "portfolio_widget":
            return getPortfolioWidgetUpdates()
        case "categories_widget":
            return getCategoriesWidgetUpdates()
        case "slider_widget":
            return getSliderWidgetUpdates()
        default:
            return null
    }
}

function getSliderWidgetUpdates() {

    let headline = $(`#txtSliderHeadline`).val()
    let title = $(`#txtSliderTitle`).val()
    let button = $(`#txtSliderButton`).val()    
    let content = $(`#txtaSliderContent`).val()    

    let obj = new Object()
    obj.headline = headline
    obj.title = title
    obj.content = content
    obj.button = button

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getCategoriesWidgetUpdates() {

    let headline = $(`#txtCatHeadline`).val()
    let title = $(`#txtCatTitle`).val()
    let tileTitleOne = $(`#txtCatTileTitle1`).val()
    let tileDescOne = $(`#txtCatTileDesc1`).val()
    let tileTitleTwo = $(`#txtCatTileTitle2`).val()
    let tileDescTwo = $(`#txtCatTileDesc2`).val()    
    let tileTitleThree = $(`#txtCatTileTitle3`).val()
    let tileDescThree = $(`#txtCatTileDesc3`).val()    

    let obj = new Object()
    obj.headline = headline
    obj.title = title
    obj.tileTitleOne = tileTitleOne
    obj.tileDescOne = tileDescOne
    obj.tileTitleTwo = tileTitleTwo
    obj.tileDescTwo = tileDescTwo
    obj.tileTitleThree = tileTitleThree
    obj.tileDescThree = tileDescThree    

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getPortfolioWidgetUpdates() {

    let headline = $(`#txtPortfolioHeadline`).val()
    let title = $(`#txtPortfolioTitle`).val()
    let bannerHeadOne = $(`#txtPortfolioBanHead1`).val()
    let bannerTitleOne = $(`#txtPortfolioBanTitle1`).val()
    let bannerHeadTwo = $(`#txtPortfolioBanHead2`).val()
    let bannerTitleTwo = $(`#txtPortfolioBanTitle2`).val()    

    let obj = new Object()
    obj.headline = headline
    obj.title = title
    obj.bannerHeadOne = bannerHeadOne
    obj.bannerTitleOne = bannerTitleOne
    obj.bannerHeadTwo = bannerHeadTwo
    obj.bannerTitleTwo = bannerTitleTwo

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getBlogWidgetUpdates() {

    let headline = $(`#txtBlogHeadline`).val()
    let title = $(`#txtBlogTitle`).val()
    let authorOne = $(`#txtBlogAuthor1`).val()
    let titleOne = $(`#txtBlogTitle1`).val()
    let contentOne = $(`#txtBlogContent1`).val()
    let authorTwo = $(`#txtBlogAuthor2`).val()
    let titleTwo = $(`#txtBlogTitle2`).val()
    let contentTwo = $(`#txtBlogContent2`).val()

    let obj = new Object()
    obj.headline = headline
    obj.title = title
    obj.authorOne = authorOne
    obj.titleOne = titleOne
    obj.contentOne = contentOne
    obj.authorTwo = authorTwo
    obj.titleTwo = titleTwo
    obj.contentTwo = contentTwo

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getTeamMembersWidgetUpdates() {

    let headline = $(`#txtHeadline`).val()
    let title = $(`#txtTitle`).val()
    let name = $(`#txtName`).val()
    let role = $(`#txtRole`).val()

    let obj = new Object()
    obj.headline = headline
    obj.title = title
    obj.memberOne = name
    obj.roleOne = role

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
}

function getCountdownWidgetUpdates() {

    let num1 = $(`#txtNum1`).val()
    let text1 = $(`#txtText1`).val()
    let num2 = $(`#txtNum2`).val()
    let text2 = $(`#txtText2`).val()
    let num3 = $(`#txtNum3`).val()
    let text3 = $(`#txtText3`).val()
    let num4 = $(`#txtNum4`).val()
    let text4 = $(`#txtText4`).val()

    let obj = new Object()
    obj.numberOne = num1
    obj.textOne = text1
    obj.numberTwo = num2
    obj.textTwo = text2
    obj.numberThree = num3
    obj.textThree = text3
    obj.numberFour = num4
    obj.textFour = text4

    let updatedContent = JSON.stringify(obj)    
    return updatedContent
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
        case "countdown_widget":
            return updateCountdownWidgetDisplay(sectionID, updatedContent)
        case "teammembers_widget":
            return updateTeamMembersWidgetDisplay(sectionID, updatedContent)
        case "blog_widget":
            return updateBlogWidgetDisplay(sectionID, updatedContent)
        case "portfolio_widget":
            return updatePortfolioWidgetDisplay(sectionID, updatedContent)
        case "categories_widget":
            return updateCategoriesWidgetDisplay(sectionID, updatedContent)
        case "slider_widget":
            return updateSliderWidgetDisplay(sectionID, updatedContent)
        default:
            return null
    }
}

function updateSliderWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#sliderHeadline').text(parsedContent.headline)
    $(`#${sectionID}`).find('#sliderTitle').text(parsedContent.title)
    $(`#${sectionID}`).find('#sliderContent').text(parsedContent.content)
    $(`#${sectionID}`).find('#sliderButton').text(parsedContent.button) 
}

function updateCategoriesWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#categoriesHeadline').text(parsedContent.headline)
    $(`#${sectionID}`).find('#categoriesTitle').text(parsedContent.title)
    $(`#${sectionID}`).find('#categoriesTileTitle1').text(parsedContent.tileTitleOne)
    $(`#${sectionID}`).find('#categoriesTileDesc1').text(parsedContent.tileDescOne)
    $(`#${sectionID}`).find('#categoriesTileTitle2').text(parsedContent.tileTitleTwo)
    $(`#${sectionID}`).find('#categoriesTileDesc2').text(parsedContent.tileDescTwo)    
    $(`#${sectionID}`).find('#categoriesTileTitle3').text(parsedContent.tileTitleThree)
    $(`#${sectionID}`).find('#categoriesTileDesc3').text(parsedContent.tileDescThree)
}

function updatePortfolioWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#portfolioHeadline').text(parsedContent.headline)
    $(`#${sectionID}`).find('#portfolioTitle').text(parsedContent.title)
    $(`#${sectionID}`).find('#portfolioBanHead1').text(parsedContent.bannerHeadOne)
    $(`#${sectionID}`).find('#portfolioBanTitle1').text(parsedContent.bannerTitleOne)
    $(`#${sectionID}`).find('#portfolioBanHead2').text(parsedContent.bannerHeadTwo)
    $(`#${sectionID}`).find('#portfolioBanTitle2').text(parsedContent.bannerTitleTwo)    
}

function updateBlogWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#blogHeadline').text(parsedContent.headline)
    $(`#${sectionID}`).find('#blogTitle').text(parsedContent.title)
    $(`#${sectionID}`).find('#blogAuthor1').text(parsedContent.authorOne)
    $(`#${sectionID}`).find('#blogTitle1').text(parsedContent.titleOne)
    $(`#${sectionID}`).find('#blogContent1').text(parsedContent.contentOne)
    $(`#${sectionID}`).find('#blogAuthor2').text(parsedContent.authorTwo)
    $(`#${sectionID}`).find('#blogTitle2').text(parsedContent.titleTwo)
    $(`#${sectionID}`).find('#blogContent2').text(parsedContent.contentTwo)
}

function updateTeamMembersWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#teamHeadline').text(parsedContent.headline)
    $(`#${sectionID}`).find('#teamTitle').text(parsedContent.title)
    $(`#${sectionID}`).find('#teamMember1Name').text(parsedContent.memberOne)
    $(`#${sectionID}`).find('#teamMember1Role').text(parsedContent.roleOne)
}

function updateCountdownWidgetDisplay(sectionID, updatedContent) {
    let parsedContent = JSON.parse(updatedContent)
    $(`#${sectionID}`).find('#box1Num').text(parsedContent.numberOne)
    $(`#${sectionID}`).find('#box1Text').text(parsedContent.textOne)
    $(`#${sectionID}`).find('#box2Num').text(parsedContent.numberTwo)
    $(`#${sectionID}`).find('#box2Text').text(parsedContent.textTwo)
    $(`#${sectionID}`).find('#box3Num').text(parsedContent.numberThree)
    $(`#${sectionID}`).find('#box3Text').text(parsedContent.textThree)
    $(`#${sectionID}`).find('#box4Num').text(parsedContent.numberFour)
    $(`#${sectionID}`).find('#box4Text').text(parsedContent.textFour)
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