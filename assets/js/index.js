$(document).ready(function() {
	initializeRemoveWidgetBtn()
	initializeAddWidgetBtn()
})

function initializeRemoveWidgetBtn() {
	$(".btn-remove-widget").on("click", function() {
		var sectionID = $(this).parent().attr('id')
		$(`#${sectionID}`).empty()
		$(`#${sectionID}`).load("widgets/empty-widget.php", function() {
			initializeAddWidgetBtn()
		})		
	})
}

function initializeAddWidgetBtn() {
	$(".btn-add-widget").on("click", function() {
		var sectionID = $(this).parent().attr('id')
		console.log(sectionID)
		var idNo = sectionID.replace( /^\D+/g, '')
		$(`.modal`).load("widgets/components/available-widget.php", function() {
			initializeAddOSMWidget(sectionID)
		})
	})
}

function initializeAddOSMWidget(sectionID) {
	$(".add-osm-widget").on("click", function() {
		// var sectionID = $(this).parent().attr('id')
		var idNo = sectionID.replace( /^\D+/g, '')
		console.log(idNo)
		$(`.modal`).empty()
		$(`#section${idNo}`).empty().load("widgets/osm-widget.php", function() {
			initializeRemoveWidgetBtn()
		})
	})
}