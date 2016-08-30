$(document).ready(function(){
	$( "#categorySelectorCategoryTemplate" ).tmpl(categories).appendTo( ".categoriesSelector .categories" );
	$('.categoriesSelector .category').bind(eventToUse, selectCategory);

	$($('.categoriesSelector .category')[0]).trigger(eventToUse);
})

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