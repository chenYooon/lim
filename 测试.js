import * as echarts from 'echarts';

var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get(ROOT_PATH + '/data/asset/data/flare.json', function (data) {
  myChart.hideLoading();
  myChart.setOption(
    (option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree', //控制整体图的形状
          data: [data],
          top: '18%', //图到顶部的距离
          bottom: '14%', //图到底部的距离
          layout: 'radial',
          symbol: 'emptyCircle', //控制结点的形状
          symbolSize: 7, //控制线条的扭曲程度
          initialTreeDepth: 3, //控制树的层数
          animationDurationUpdate: 750,
          emphasis: {
            focus: 'descendant'
          }
        }
      ]
    })
  );
});

option && myChart.setOption(option);