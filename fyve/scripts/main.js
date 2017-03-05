var patient = [{
	name : 'Haripad Bhatia',
	sex : 'Male',
	age : 32,
	bed : 1,
	hr : 102,
	rr : 48,
	spo : 99,
	temp : '98/102',
	nibp : '112/88',
	alarm : {
		active : false,
		message : 'Last alarm 10 min ago'
	}
},{
	name : 'Haripad Bhatia',
	sex : 'Male',
	age : 32,
	bed : 1,
	hr : 102,
	rr : 48,
	spo : 99,
	temp : '98/102',
	nibp : '112/88',
	alarm : {
		active : true,
		message : 'Alarm Active',
		parameter : 'hr'
	}
},{
	name : 'Haripad Bhatia',
	sex : 'Male',
	age : 32,
	bed : 1,
	hr : 102,
	rr : 48,
	spo : 99,
	temp : '98/102',
	nibp : '112/88',
	alarm : {
		active : false,
		message : 'No recent alarms'
	}
},{
	name : 'Haripad Bhatia',
	sex : 'Male',
	age : 32,
	bed : 1,
	hr : 102,
	rr : 48,
	spo : 99,
	temp : '98/102',
	nibp : '112/88',
	alarm : {
		active : false,
		message : 'Last alarm 10 min ago'
	}
},{
	name : 'Haripad Bhatia',
	sex : 'Male',
	age : 32,
	bed : 1,
	hr : 102,
	rr : 48,
	spo : 99,
	temp : '98/102',
	nibp : '112/88',
	alarm : {
		active : false,
		message : 'Last alarm 10 min ago'
	}
}]

$(document).ready(function(){
	$.tmpl( $('#patientTemplate').html(), patient).prependTo( "#mainContainer .patientsList.urgent" )
	$.tmpl( $('#patientTemplate').html(), patient).prependTo( "#mainContainer .patientsList.ward1" )
	$.tmpl( $('#patientTemplate').html(), patient).prependTo( "#mainContainer .patientsList.ward2" )

	$('.historyOptions .option').bind('click', function(){
		$('.historyOptions .option').removeClass('active');
		$(this).addClass('active');
	})

	$('.historyOptions .option.alarmHistory').bind('click', function(){
		$('.historyOptionDetails').removeClass('active');
		$('.historyOptionDetails.alarmHistory').addClass('active');
	})

	$('.historyOptions .option.dataTable').bind('click', function(){
		$('.historyOptionDetails').removeClass('active');	
		$('.historyOptionDetails.dataTable').addClass('active');
	})

	$('.historyOptions .option.trendGraphs').bind('click', function(){
		$('.historyOptionDetails').removeClass('active');
		$('.historyOptionDetails.trendGraphs').addClass('active');
	})

	$('.patientContainer').bind('click', function(){
		$('#mainContainer').addClass('showingDetails');
	})
})