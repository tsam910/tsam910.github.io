$(document).ready(function(){

	var triggerEvent = 'click';

	$('#landing .links .left').bind(triggerEvent, function(){
		console.log('left')
		showScreen('skills')
	})

	$('#landing .links .right').bind(triggerEvent, function(){
		console.log('right')
		showScreen('work')
	})

	$('.container .detailItem').bind(triggerEvent, function(){
		$(this).closest('.container').addClass('detailView');
	})

	var showScreen = function(screenId){
		switch(screenId){
			case 'work': $('#innerMainContainer').removeClass('showingLeft').addClass('showingRight'); break;
			case 'skills': $('#innerMainContainer').removeClass('showingRight').addClass('showingLeft'); break;
			default: $('#innerMainContainer').removeClass('showingLeft').removeClass('showingRight');
		}
	}


})