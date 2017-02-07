$(document).ready(function(){
	hideAllScreens();
	showScreen('disclaimer');
})

function hideAllScreens(){
	$('.screen').hide();
}

function showScreen(screenId){
	hideAllScreens();
	$('#'+screenId).show();
}