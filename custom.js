$(document).ready( () => {
	initOptionalSections()
	initAddSection()
	initRemoveSection()
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
	// return `

	// 	<div id="section_${uuidv4()}" class="optionalSectionWrapper">
	//         <div class="categories-area section-padding30 emptySectionArea">
	//             <div class="container">
	//                 <div class="row">
	//                     <div class="col-lg-4 col-md-6 col-sm-6">
	//                     </div>
	//                     <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
	//                         <div class="single-cat text-center mb-50">
	//                             <div class="cat-icon">
	//                                 <span class="flaticon-result"></span>
	//                             </div>
	//                             <div class="cat-cap">
	//                                 <h5><a href="services.html">Add Widget</a></h5>
	//                             </div>
	//                         </div>
	//                     </div>
	//                     <div class="col-lg-4 col-md-6 col-sm-6">
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>

	// `

	return `
		<div id="section_${sectionID}" class="optionalSectionWrapper">
	        <div class="categories-area section-padding30 testimonial-area emptySectionArea">
	            <div class="container">
	                <div class="row h1-testimonial-active" id="${sectionID}">
	                    <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Slider</a></h5>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Categories</a></h5>
	                            </div>
	                        </div>
	                    </div>  
	                    <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Services</a></h5>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">About</a></h5>
	                            </div>
	                        </div>
	                    </div>  
	                    <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
	                        <div class="single-cat text-center mb-50">
	                            <div class="cat-icon">
	                                <span class="flaticon-result"></span>
	                            </div>
	                            <div class="cat-cap">
	                                <h5><a href="services.html">Testimonials</a></h5>
	                            </div>
	                        </div>
	                    </div>  
	                    <div class="col-lg-4 col-md-6 col-sm-6 removeWidgetIcon">
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
	}) 
}

function initRemoveSection() {
	$(`.removeSectionIcon`).on("click", (e) => {
		let sectionID = $(".removeSectionIcon").closest("div[id]").attr("id")
		$(`#${sectionID}`).remove()
	})	
}