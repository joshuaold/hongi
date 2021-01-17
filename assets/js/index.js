$(document).ready(function() {
	initializeRemoveWidgetBtn()
	initializeAddWidgetBtn()
	initializeEditWidgetBtn()
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
			initializeEditWidgetBtn()
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

	templateData.widgets = userWidgets

	$.ajax({ url: 'dal2.php',
	         data: {action: 'save', templateData: templateData},
	         type: 'post',
	         success: () => {
	         	console.log("success")
	         }
	})
}

function initializeEditWidgetBtn() {
	$(".btn-edit-widget").on("click", function() {
		var sectionID = $(this).parent().attr('id')
		$(`.editWidgetModal`).load("widgets/components/edit-widget.php", function() {			
			var widgetIndex = userWidgets.findIndex(x => x.section == sectionID)
			currentWidget = userWidgets[widgetIndex]
			$(`#h4`).attr('placeholder', currentWidget.content[0].h4)
			$(`#p`).attr('placeholder', currentWidget.content[0].p)			
		})
	})
}

function acceptChanges() {
	var h4 = $(`#h4`).val()
	var p = $(`#p`).val()
	var sectionID = currentWidget.section

	var widgetIndex = userWidgets.findIndex(x => x.section == sectionID)
	if(widgetIndex != undefined)
		userWidgets.splice(widgetIndex, 1)

	currentWidget.content[0].h4 = h4
	currentWidget.content[0].p = p

	userWidgets.push(currentWidget)
	save()

	$(`#${sectionID}`).find('h4').text(h4)
	$(`#${sectionID}`).find('p').text(p)
	$(`.editWidgetModal`).empty()
}