$(document).ready( () => {
	initOptionalSections()
})

function initOptionalSections() {
	// $(".optional-section").on("click", function() {
	// 	$('#myModal').modal('show');
	// })
	$(".optional-section").hover( () => {
		$('.custom-section-hover').show()
	}, () => {
		$('.custom-section-hover').hide()
	})
}