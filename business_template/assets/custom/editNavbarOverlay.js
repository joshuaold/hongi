function loadEditNavbar() {
    $(`.editNavbarHeaderBtn`).off().on("click", function() {
        let sectionID = $(this).closest("div[id]").attr("id")
        let sectionModalID = "section_modal"
        
        //dom manipulation
        $.get(`${basePath}/${modalsPath}/${editNavbarWidgetModal}`, function(response) {
                        
            $(`#${sectionModalID}`).empty().append(response)
            $('#editWidgetModal').modal('show');
            $(`#modalSectionID`).val(sectionID)

            pageSections.forEach( (item) => {
                $(`#drpSectionList1`).append(`<option>${item.section_id}</option>`)
            })

            loadSaveNavbarUpdates()     
        })
    })    
}

function loadSaveNavbarUpdates() {
    $(`#btnSaveNavbarEdits`).off().on("click", function() {

        let navLinkOne = $(`#txtNavLink1`).val()
        let navLinkSecOne = $(`#drpSectionList1`).find(":selected").text()

        let objArray = []
        let obj = new Object()
        obj.navLink = navLinkOne
        obj.navLinkSec = navLinkSecOne        
        let updatedContent = JSON.stringify(obj)
        objArray.push(obj)

        navbarHeader = objArray
        pageData.navbar_header = navbarHeader      

        objArray.forEach( (item) => {
            $(`#navigation`).append(`<li><a id="navigation_${item.navLinkSec}" class="navCursor">${item.navLink}</a></li>`)
            
            $(`#navigation_${item.navLinkSec}`).off().on("click", function() {
                // alert(item.navLinkSec)
                window.scrollTo({top: $(`#${item.navLinkSec}`).offset().top-50, behavior: 'smooth'});
            })
            //need mobile nav refresh>
        })        
    }) 
}