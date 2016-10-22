// JavaScript Document


/*工资报表*/
$(function () {
	
	$('.container_container_lf').highcharts({
		title: {//走势图标题
			text: '工资报表(周)',
			x: 20 ,
			//style:{display:"none"}可隐藏
		},
		subtitle: {//走势图来源
			text: 'Source: www.xwcms.net',
			x: 20,
			style:{display:"none"}//可隐藏
		},
		xAxis: {//X轴分类
			categories: ['2013-11-06', '2013-11-07', '2013-11-08', '2013-11-09', '2013-11-10']
		},
		yAxis: {//Y轴会根据series的data数值自动分格并划分上下限
			title: {
				text: '(元/天)',//Y轴表示的文本
				//style:{display:"none"}可隐藏
			}
		},
		tooltip: {
			valueSuffix: '(元/天)'//数据的后辍
		},
		legend:{//线条所表示的品种分类
			enabled:0,//0为隐藏1为显示
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		credits:{//制作人；可作为本站水印
			text:"xwcms.com",
			href:"http://www.xwcms.net",
			position:{x:-250,y:-180},
			style:{"z-index":"999"}
		},
		series: [{//可以为多个品种
			name: '技术',
			data: [420, 430, 440, 435, 455]
		},{
			name: '服务',
			data: [410, 440, 460, 415, 425]
		}]
	});
	  
});

/*工资报表*/             