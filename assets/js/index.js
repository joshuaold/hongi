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

		var widgetIndex = userWidgets.findIndex(x => x.section == sectionID)
		if(widgetIndex != undefined)
			userWidgets.splice(widgetIndex, 1)
	})
}

function initializeAddWidgetBtn() {
	$(".btn-add-widget").on("click", function() {
		var sectionID = $(this).parent().attr('id')
		var idNo = sectionID.replace( /^\D+/g, '')
		$(`.widgetListModal`).load("widgets/components/available-widget.php", function() {
			initializeAddOSMWidget(sectionID)
		})
	})
}

function initializeAddOSMWidget(sectionID) {
	$(".add-osm-widget").on("click", function() {
		// var sectionID = $(this).parent().attr('id')
		var idNo = sectionID.replace( /^\D+/g, '')
		$(`.widgetListModal`).empty()
		$(`#section${idNo}`).empty().load("widgets/osm-widget.php", function() {
			initializeRemoveWidgetBtn()
		})

		defaultData = `{
			"type": "osm-widget",
			"fileLocation": "widgets/osm-widget.php",
			"section": "section${idNo}",
			"content": [
				{
					"h4": "Default OSM Widget",
					"p": "Default map text"
				}
			]
		}`

		userWidgets.push(JSON.parse(defaultData))
	})
}

function save() {

	edit()

	$.ajax({ url: 'dal2.php',
	         data: {action: 'save', templateData: templateData},
	         type: 'post',
	         success: () => {
	         	console.log("success")
	         }
	})
}

function edit() {
	templateData.widgets = userWidgets
}

function initializeEditWidgetBtn() {
	
}