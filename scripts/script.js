$(document).ready(function(){
	$( "#categorySelectorCategoryTemplate" ).tmpl(categories).appendTo( ".categoriesSelector .categories" );
	$('.categoriesSelector .category').bind(eventToUse, selectCategory);

	$($('.categoriesSelector .category')[0]).trigger(eventToUse);

	workContainerOffset = $('.workContainer').offset().top;

	// the scrollbars are hidden on the page
	// when a user scrolls the first time, it would be a good experience to just scroll to the category selector part
	// that's why the scrolljacking. but it's buggy
	$('.mainContainer').bind('scroll', checkMainContainerScroll);
	$('.work').bind('scroll', checkWorkContainerScroll);

	// the work details modal should close on escape
	$(document).keyup(function(e) {
	     if (e.keyCode == 27) {
	     	if(selectedItem)
	     		closeItemDetails();
	    }
	});

	console.log('Hey! Great to see you here. If you\'re checking out my code, you can head to https://github.com/tsam910/tsam910.github.io.')
	console.log('Also, I\'m still working on this, so there are some bugs. pls to ignore :)')

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
	}
}

var checkWorkContainerScroll = function(){

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
		
	}
}

var showingIntro = true;
var workContainerOffset = 0;
var eventToUse = 'click'; // will detect and change it to tap for mobile, when I make the mobile version.
var selectedCategory = 'all';
var selectedItem = false;

var selectCategory = function(){

	var category = $.tmplItem(this).data;

	selectedCategory = category.id;
	$('.categoriesSelector .selectedIndicator').removeClass().addClass('selectedIndicator pos'+$(this).index());

	var filteredItems = getFilteredItems(selectedCategory);

	populateWorkItems(filteredItems);

	ga('send', {
	  hitType: 'event',
	  eventCategory: 'Category',
	  eventAction: 'select',
	  eventLabel: category.id
	});
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
		$('.item').bind(eventToUse, showItemDetails)
		$('.workItems').removeClass('hidden');
	}, 350)
}


var showItemDetails = function(e){
	var divDimensions = this.getBoundingClientRect();
	selectedItem = this;
	var selectedItemData = $.tmplItem(this).data;
	$(selectedItem).css('opacity', 0);
	$('.itemDetailsContainer').show();
	$('.animate').removeClass('transition');

	ga('send', {
	  hitType: 'event',
	  eventCategory: 'showWork Item',
	  eventAction: 'select',
	  eventLabel: selectedItemData.name
	});

	setTimeout(function(){
		$('.backdrop').addClass('show');
		$('.animate').css({
			height: divDimensions.height,
			width: divDimensions.width,
			top: divDimensions.top,
			left: divDimensions.left
		}, 10);	

		setTimeout(function(){
			$('.animate').addClass('transition');
			$('.animate').addClass('show');

			setTimeout(function(){
				$('.animate').css({
					height: ($('.itemDetailsContainer').height() - 40)+ 'px',
					width : ($('.itemDetailsContainer').width() - 40) + 'px',
					top: '20px',
					left: '20px'
				});

				setTimeout(function(){
					$.get(selectedItemData.details,{ "_": $.now() })
					 .success(function(data) {
					     $('.itemDetails').html(data);
					     $('.itemDetails').addClass('show');
					     $('.itemDetailsContainer .backdrop, .itemDetailsContainer .buttonClose').unbind().bind(eventToUse, closeItemDetails);
					 });


					}, 400)

			}, 300)

		}, 10)
	}, 10)
}

var closeItemDetails = function(e){
	var divDimensions = selectedItem.getBoundingClientRect();

	$('.itemDetails').removeClass('show');

	ga('send', {
	  hitType: 'event',
	  eventCategory: 'Work Item',
	  eventAction: 'close',
	  eventLabel: $.tmplItem(selectedItem).data.name
	});

	setTimeout(function(){
		$('.animate').css({
				height: divDimensions.height,
				width : divDimensions.width,
				top: divDimensions.top,
				left: divDimensions.left
			});

			$('.backdrop').removeClass('show');

			setTimeout(function(){
				$('.animate').removeClass('show');
				$(selectedItem).css('opacity', 1);
				$('.itemDetails').scrollTop(0);

				setTimeout(function(){
					$('.itemDetailsContainer').hide();
					selectedItem = false;
				}, 350)

			}, 400)
	}, 350);

}