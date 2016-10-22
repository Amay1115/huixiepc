// JavaScript Document

/*人事报表——人员统计报表*/
$(function () {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    '维森金融',
					'维森地产',
                    '维森医药',
                    '维森商贸',
                    '维森制造',          
                    
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: '个/人'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} 个/人</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '维森分部',
                data: [1200, 1100, 1058, 1142, 2123]
    
            }]
        });
    });
    
/*人事报表—年龄报表*/