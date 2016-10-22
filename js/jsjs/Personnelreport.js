// JavaScript Document

/*人事报表——学历报表*/
gvChartInit();
$(document).ready(function(){
	$('.myTable5').gvChart({
		chartType: 'PieChart',
		gvSettings: {
			vAxis: {title: 'No of players'},
			hAxis: {title: 'Month'},
			width: 600,
			height: 350
		}
	});
});
gvChartInit();
$(document).ready(function(){
		$('.myTable1').gvChart({
			chartType: 'PieChart',
			gvSettings: {
			vAxis: {title: 'No of players'},
			hAxis: {title: 'Month'},
			width: 600,
			height: 350
		}
	});
});
/*人事报表——学历报表*/