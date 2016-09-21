$(document).ready(function($) {
	//$('#events').load('http://www.okolo.ru/timetable/ #timetable', function() {
		//$('.rasp_filter.cf.s-schedule-filter').remove();
		//$('.btn_rasp').removeClass('btn_rasp').addClass('btn_rasp_static');

	$.ajaxSetup({
	    scriptCharset: "utf-8", //or "ISO-8859-1"
	    contentType: "application/json; charset=utf-8"
	});

	$.getJSON('http://whateverorigin.org/get?url=' + 
	    encodeURIComponent('http://www.okolo.ru/timetable/') + '&callback=?',
	    function (data) {
	        console.log("> ", data);

	        //If the expected response is text/plain
	        //var timetable = data.contents;
	        var $timetable = $("#events").html(data.contents).find('#timetable');
					var $footer = $("#events").html(data.contents).find('#timetable tr:last-child');
	        $("#events").html($timetable);
	        $("#footer_inner").html($footer);
	        //If the expected response is JSON
	        //var response = $.parseJSON(data.contents);
	});

});