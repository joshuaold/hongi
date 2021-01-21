$(document).ready( () => {
	initOptionalSections()
})

function initOptionalSections() {
	$(".optional-section").on("click", function() {
		$('#myModal').modal('show');
	})
}