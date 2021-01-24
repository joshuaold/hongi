$(document).ready( () => {
	initOptionalSections()
	initAddSection()
	initRemoveSection()
	initAddServicesWidget()
	initRemoveWidget()
})

function loadSlickSlider(sliderID) {
	var testimonial = $(`#${sliderID}`);
  	testimonial.slick({
    	dots: false,
      	infinite: true,
      	speed: 1000,
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
    });
}

function uuidv4() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateEmptySection(sectionID) {	
	return `
		<div id="section_${sectionID}" class="optionalSectionWrapper">
	        <div class="categories-area section-padding30 testimonial-area emptySectionArea">
	            <div class="container">
	                <div class="row h1-testimonial-active" id="${sectionID}">
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Slider</a></h5>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Categories</a></h5>
	                            </div>
	                        </div>
	                    </div>  
	                    <div class="col-lg-4 col-md-6 col-sm-6 servicesWidgetIcon">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Services</a></h5>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">About</a></h5>
	                            </div>
	                        </div>
	                    </div>  
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Testimonials</a></h5>
	                            </div>
	                        </div>
	                    </div>  
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">CTA</a></h5>
	                            </div>
	                        </div>
	                    </div>                     
	                </div>
	            </div>
	        </div>
	    </div>
	`
}

function generateEmptySectionSlider(sectionID) {	
	return `
        <div class="categories-area section-padding30 testimonial-area emptySectionArea">
            <div class="container">
                <div class="row h1-testimonial-active" id="${sectionID}">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-result"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Slider</a></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-result"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Categories</a></h5>
                            </div>
                        </div>
                    </div>  
                    <div class="col-lg-4 col-md-6 col-sm-6 servicesWidgetIcon">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-result"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Services</a></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-result"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">About</a></h5>
                            </div>
                        </div>
                    </div>  
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-result"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Testimonials</a></h5>
                            </div>
                        </div>
                    </div>  
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-result"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">CTA</a></h5>
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
	`
}

function generateServicesWidget() {

	return `
		<div class="optionalSectionContent">
            <div class="support-company-area pt-100 pb-100 section-bg fix" data-background="assets/img/gallery/section_bg02.jpg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-6">
                            <div class="support-location-img">
                                <img src="assets/img/gallery/about.png" alt="">
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="right-caption">
                                <div class="section-tittle section-tittle2 mb-50">
                                    <span>Our Top Services</span>
                                    <h2>Our Best Services</h2>
                                </div>
                                <div class="support-caption">
                                    <p class="pera-top">Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
                                    <p class="mb-65">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="optionalSectionOverlay overlayBackgroundHide">            
            <div class="categories-area overlayBackground section-padding30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 editWidgetIcon">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-development"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Edit Widget</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-result"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Remove Widget</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 removeSectionIcon">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-team"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Remove Section</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`
}

function initOptionalSections() {	
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

function initAddSection() {
	$(`.addSectionIcon`).on("click", (e) => {
		// $(`.addSectionArea`).before(response).prev("div").attr("id", sectionID)
		let id = uuidv4()
		$(`.addSectionArea`).before(generateEmptySection(id))
		loadSlickSlider(id)
		initAllWidgets()

        let sectionObj = `
            {
                "section_id": "section_${id}",
                "section_widget_list": []
            }
        `
        pageSections.push(JSON.parse(sectionObj))
	}) 
}

function initRemoveSection() {
	$(`.removeSectionIcon`).on("click", function() {
		let sectionID = $(this).closest("div[id]").attr("id")
		$(`#${sectionID}`).remove()

        pageSections = pageSections.filter(pageSections => pageSections.section_id != sectionID)
	})	
}

function initAllWidgets() {
	initAddServicesWidget()
}

function initAddServicesWidget() {

	$(`.servicesWidgetIcon`).off().on("click", function() {		
		let sectionID = $(this).closest("div[id]").attr("id")
		$(`#section_${sectionID}`).empty().append(generateServicesWidget())

		$("[data-background]").each(function () {
	    	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	    });

	    initOptionalSections()
	    initRemoveSection()
	    initRemoveWidget()
        initEditWidget()

        let widgetObj = `
            {
                "widget_id": "section_${sectionID}",
                "widget_type": "services_widget",
                "widget_content": {}
            }
        `

        pageSections.filter(pageSections => pageSections.section_id == `section_${sectionID}`)[0].section_widget_list.push(JSON.parse(widgetObj))
	})	
}

function initRemoveWidget() {
	$(`.removeWidgetIcon`).off().on("click", function() {		
		let sectionID = $(this).closest("div[id]").attr("id")
		let sliderID = sectionID.replace("section_", "")
		$(`#${sectionID}`).empty().append(generateEmptySectionSlider(sliderID))
		loadSlickSlider(sliderID)
		initAllWidgets()

        pageSections.filter(pageSections => pageSections.section_id == sectionID)[0].section_widget_list.length = 0
	})	
}

function initEditWidget() {
    $(`.editWidgetIcon`).on("click", function() {        
        // $('#myModal').modal('show');
    })    
}

function showJSONObject() {
    alert(JSON.stringify(pageData))
}