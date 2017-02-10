$(document).ready(function(){
	hideAllScreens();
	showScreen('barcode');
})

function hideAllScreens(){
	$('.screen').hide();
}

function showScreen(screenId){
	hideAllScreens();
	$('#'+screenId).show();
}