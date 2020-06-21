const echarts = require('echarts');

const seriesData = [667, 800, 550, 900, 1000, 1100,870];

export default {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(88,207,255,0.10) '
                    }, {
                        offset: 0.5,
                        color: '#58CFFF',
                    }, {
                        offset: 1,
                        color: 'rgba(88,207,255,0.10) '
                    }],
                    global: false
                }
            },
        },
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#58CFFF ',
            }
        },
        axisLabel: {
            color: '#fff',
            interval: 1,
            formatter: (params) => params && params.split(' ')[0],
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        name: 'TVOC/ppb',
        nameTextStyle: {
            color: '#fff',
            fontSize: '14',
            padding: [0, 0, 0, 60],
        },
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#58CFFF ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12,
            }
        },
        axisTick: {
            show: false
        }

    },
    series: [
        {
            name: 'TVOC',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            label: {
                show: true,
                offset: [20, 0],
                position: 'top',
                textStyle: {
                    color: '#fff',
                    padding: [0, 5]
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(88,207,255,0.50)',
                    lineStyle: {
                        color: '#58CFFF',
                        width: 1
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(88,207,255,0.10)  '
                        }, {
                            offset: 1,
                            color: '#58CFFF'
                        }]),
                    }
                },
            },
            data: seriesData
        },
    ]
};
