'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails); //click handler

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var projectURL = "/project/" + idNumber;
	$.get(projectURL, projectHandler);
	console.log("Getting " + projectURL);
	var fullID = "project" + idNumber;
	console.log(fullID);
	console.log($("#" + fullID + " .details").html());
	console.log("User clicked on project " + idNumber);
}


function projectHandler(result) {
	var fullID = "project" + result.id;
	var htmlToAdd = '<p>' + result.date + '<p> <img class="detailsImage" src="' + result.image + '">' + result.summary;
	$("#" + fullID + " .details").html(htmlToAdd);
	console.log(result);

}