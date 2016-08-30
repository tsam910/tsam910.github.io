$(document).ready(function(){
	$( "#categorySelectorCategoryTemplate" ).tmpl(categories).appendTo( ".categoriesSelector .categories" );
	$('.categoriesSelector .category').bind(eventToUse, selectCategory);

	$($('.categoriesSelector .category')[0]).trigger(eventToUse);

	workContainerOffset = $('.workContainer').offset().top;

	$('.mainContainer').bind('scroll', checkMainContainerScroll);
	$('.work').bind('scroll', checkWorkContainerScroll);
})

var checkMainContainerScroll = function(){

	if(showingIntro && $('.mainContainer').scrollTop() > 0){

		$('.mainContainer').unbind('scroll');
		$('.work').unbind('scroll');

		$('.mainContainer').animate({scrollTop: workContainerOffset}, 500);
		$('.work').animate({scrollTop: 0}, 500);

		setTimeout(function(){
			showingIntro = false;
			$('.mainContainer').bind('scroll', checkMainContainerScroll);
			$('.work').bind('scroll', checkWorkContainerScroll);
		}, 500);
		console.log('scrolling to bottom')
	}
}

var checkWorkContainerScroll = function(){

	// console.log('work scroll -> '+ $('.work').scrollTop()+' at showing = '+showingIntro)

	if(showingIntro && $('.work').scrollTop() > 0){
		$('.mainContainer').unbind('scroll');
		$('.work').unbind('scroll');

		$('.mainContainer').animate({scrollTop: workContainerOffset}, 500);
		$('.work').animate({scrollTop: 0}, 500);

		setTimeout(function(){
			showingIntro = false;
			$('.mainContainer').bind('scroll', checkMainContainerScroll);
			$('.work').bind('scroll', checkWorkContainerScroll);
		}, 1000);

		console.log('scrolling to bottom 1')
	}

	if(!showingIntro && $('.work').scrollTop() == 0){

		$('.mainContainer').unbind('scroll');
		$('.work').unbind('scroll');

		$('.mainContainer').animate({scrollTop: 0}, 500);

		setTimeout(function(){
			showingIntro = true;
			$('.mainContainer').bind('scroll', checkMainContainerScroll);
			$('.work').bind('scroll', checkWorkContainerScroll);
		}, 1000);
		
		console.log('scrolling to top')
	}
}

var showingIntro = true;
var workContainerOffset = 0;

	// var themeData = $.tmplItem(event.target).data;
	// $( "#workItemTemplate" ).tmpl({height:40, name:'Tarun'}).appendTo( ".websiteThemes .themesList" );
	
var eventToUse = 'click';

var selectedCategory = 'all';

var selectCategory = function(){

	var category = $.tmplItem(this).data;

	selectedCategory = category.id;
	$('.categoriesSelector .selectedIndicator').removeClass().addClass('selectedIndicator pos'+$(this).index());

	var filteredItems = getFilteredItems(selectedCategory);

	populateWorkItems(filteredItems);
}

var getFilteredItems = function(category){

	var filtered = [];

	for(project in projects){
		if(category == 'all')
			filtered.push(projects[project]);
		else if(projects[project].skills.indexOf(category) != -1)
			filtered.push(projects[project]);
	}

	return filtered;
}

var populateWorkItems = function(items){

	$('.workItems').addClass('hidden');
	setTimeout(function(){
		$('.workItems').children().remove();
		$( "#workItemTemplate" ).tmpl(items).appendTo($('.workItems'));
		$('.workItems').removeClass('hidden');
	}, 350)
}
