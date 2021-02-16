function loadAvailableWidgets() {
    loadAddServicesWidget()
    loadAddTestimonialWidget()
    loadAddCtaWidget()
    loadAddCountdownWidget()
    loadAddTeamMembersWidget()
    loadAddBlogWidget()
    loadAddPortfolioWidget()
    loadAddCategoriesWidget()
    loadAddSliderWidget()
}

function loadAddSliderWidget() {

    $(`.sliderWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`
        let newSliderID = `slider_${currentSectionID.replace("section_", "")}`

        let contentObj = new Object()
        contentObj.headline = "Headline"
        contentObj.title = "Title"
        contentObj.content = "Content"
        contentObj.button = "Button"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "slider_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${sliderWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)

            response = response.replace("replaceWithSliderID", newSliderID)
            $(`#${newWidgetID}`).append(response)
            
            loadSliderSlider(newSliderID)            

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })


            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                               

        })            
                                     
    })    
}

function loadAddCategoriesWidget() {

    $(`.categoriesWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.headline = "Headline"
        contentObj.title = "Title"
        contentObj.tileTitleOne = "Tile Title 1"
        contentObj.tileDescOne = "Tile Description 1"
        contentObj.tileTitleTwo = "Tile Title 2"
        contentObj.tileDescTwo = "Tile Description 2"
        contentObj.tileTitleThree = "Tile Title 3"
        contentObj.tileDescThree = "Tile Description 3"        

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "categories_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${categoriesWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
}

function loadAddPortfolioWidget() {

    $(`.portfolioWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.headline = "Headline"
        contentObj.title = "Title"
        contentObj.bannerHeadOne = "Banner Headline 1"
        contentObj.bannerTitleOne = "Banner Title 1"
        contentObj.bannerHeadTwo = "Banner Headline 2"
        contentObj.bannerTitleTwo = "Banner Title 2"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "portfolio_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${portfolioWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
}

function loadAddBlogWidget() {

    $(`.blogWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.headline = "Headline"
        contentObj.title = "Title"
        contentObj.authorOne = "Author"
        contentObj.titleOne = "Title"
        contentObj.contentOne = "Content"
        contentObj.authorTwo = "Author"
        contentObj.titleTwo = "Title"
        contentObj.contentTwo = "Content"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "blog_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${blogWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
}

function loadAddTeamMembersWidget() {

    $(`.teamMembersWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.headline = "Headline"
        contentObj.title = "Title"
        contentObj.memberOne = "Name"
        contentObj.roleOne = "Role"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "teammembers_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${teamMembersWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
}

function loadAddCountdownWidget() {

    $(`.countdownWidgetIcon`).off().on("click", function() {        

        let id = $(this).closest("div[id]").attr("id").replace("slider_", "")
        let currentSectionID = `section_${id}`
        let uuidWidg = generateUUID()
        let newWidgetID = `widget_${uuidWidg}`

        let contentObj = new Object()
        contentObj.numberOne = "1"
        contentObj.textOne = "Text 1"
        contentObj.numberTwo = "2"
        contentObj.textTwo = "Text 2"
        contentObj.numberThree = "3"
        contentObj.textThree = "Text 3"
        contentObj.numberFour = "4"
        contentObj.textFour = "Text 4"

        let obj = new Object()
        obj.widget_id = newWidgetID
        obj.widget_type = "countdown_widget"
        obj.widget_content = JSON.stringify(contentObj)

        let widgetObj = JSON.stringify(obj)

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${countdownWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
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

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${ctaWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
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

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${servicesWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
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

        pageSections.filter(pageSections => pageSections.section_id == `${currentSectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
        pageData.page_sections = pageSections

        //dom manipulation
        $.get(`${basePath}/${widgetsPath}/${testimonialWidget}`, function(response) {
            
            $(`#${currentSectionID}`).empty().append(`<div id="${newWidgetID}"></div>`)
            $(`#${newWidgetID}`).append(response)

            // $.get(`${basePath}/${sectionMenuOverlay}`, function(response) {
            //     $(`#${newWidgetID}`).after(response)
            //     loadOverlayFunctions()
            // })

            $.get(`${basePath}/${editSectionOverlay}`, function(response) {
                $(`#${newWidgetID}`).before(response)
                loadSectionMenuOverlay()
                loadEditSection()
            })

            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })                        

        })            
                                     
    })    
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

function loadSliderSlider(sliderID) {    

    $(`#${sliderID}`).on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });

    $(`#${sliderID}`).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    $(`#${sliderID}`).slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {

            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');

            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });

            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });

        });
    }

    // mainSlider()
}