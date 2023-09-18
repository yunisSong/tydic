const option = {
  title: {
    text: '统计'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '数据汇总',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Twitter' },
        { value: 735, name: '微博' },
        { value: 580, name: '微信' },
        { value: 484, name: 'YouTube' },
        { value: 300, name: 'Bilibili' }
      ]
    }
  ]
}
const showPie = (dom, echarts) => {
  var myChart = echarts.init(dom.value)
  option && myChart.setOption(option)
}

export default showPie
