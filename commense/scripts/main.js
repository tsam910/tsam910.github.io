$(document).ready(function(){
	hideAllScreens();
	showScreen('otp');
})

function hideAllScreens(){
	$('.screen').hide();
}

function showScreen(screenId){
	$('#'+screenId).show();
}