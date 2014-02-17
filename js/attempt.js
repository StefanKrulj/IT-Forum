$(document).ready(function(){
// Grab a select field
var el = $('#select-choice-0');

// Select the relevant option, de-select any others
el.val('company').attr('selected', true).siblings('user').removeAttr('selected');

// Initialize the selectmenu
el.selectmenu();

// jQM refresh
el.selectmenu("refresh", true);
});