$(document).ready(function(){
	hideAllScreens();
	showScreen('submitQuery');
})

function hideAllScreens(){
	$('.screen').hide();
}

function showScreen(screenId){
	hideAllScreens();
	$('#'+screenId).show();
}