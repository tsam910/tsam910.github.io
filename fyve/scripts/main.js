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

	document.documentElement.requestFullscreen();

	$.tmpl( $('#patientTemplate').html(), patient).appendTo( "#mainContainer .patientsList.urgent" )
	$.tmpl( $('#patientTemplate').html(), patient).appendTo( "#mainContainer .patientsList.ward1" )
	$.tmpl( $('#patientTemplate').html(), patient).appendTo( "#mainContainer .patientsList.ward2" )
})