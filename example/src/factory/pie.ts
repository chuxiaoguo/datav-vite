const dataPie = [

    {
        value: 410,
        name: '离线'
    },
    {
        value: 380,
        name: '电量充足'
    },
    {
        value: 501,
        name: '低电量'
    },
];
const colorPie = ['#173852', '#0b2036', '#002e49'];
const colorWrap = ['#3087d6', '#afe1ff', '#4be1ff'];
const baseDataPie = [];
const baseDataWrap = [];

const legendExclude = ['离线', '电量充足', '低电量'];

for (let i = 0; i < dataPie.length; i++) {
    baseDataPie.push({
        value: dataPie[i].value,
        name: dataPie[i].name,
        itemStyle: {
            normal: {
                borderColor: colorPie[i],

            }
        }
    });
    baseDataWrap.push({
        value: dataPie[i].value,
        name: dataPie[i].name,
        itemStyle: {
            normal: {
                color: colorWrap[i],
            }
        }
    });
}

export default {
    title: {
        text: '总共在线',
        subtext: '573',
        textStyle: {
            align: 'center',
            color: '#ffffff',
            fontSize: 12,

        },
        subtextStyle: {
            align: 'center',
            fontSize: 18,
            color: ['#ffffff'],
            fontWeight: 800
        },
        x: 'center',
        y: 'center',
    },
    legend: {
        show: true,
        // type: 'scroll',
        // animation: true,
        // pageTextStyle: {
        //     color: '#fff',
        // },
        icon: 'circle',
        data: legendExclude,
        bottom: 20,
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{a}：{b} <br/>占比：{d}%'
    },
    grid: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    series: [
        {

            name: '设备类别',
            type: 'pie',
            startAngle: 210,
            clockWise: true, // 顺时加载
            color: colorPie,
            center: ['50%', '50%'],
            radius: ['40%', '53%'],
            selectedMode: 'single',
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    formatter: [
                        '{b|{b}}',
                        '{c|{c}}'
                    ].join('\n'),
                    rich: {
                        b: {
                            width: 50,
                            color: '#fff',
                            lineHeight: 20,
                            align: 'center',
                        },
                        c: {
                            width: 50,
                            fontSize: 16,
                            lineHeight: 20,
                            color: '#fff',
                            align: 'center',
                            fontFamily: 'PingFangSC-Medium',
                        },
                    },
                    position: 'outside',
                    rotate: 0,
                    color: '#fff',
                }
            },
            labelLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            data: baseDataPie
        },
        {
            name: '设备类型',
            type: 'pie',
            startAngle: 260,
            clockWise: true, // 顺时加载
            hoverAnimation: false, // 鼠标移入变大
            radius: ['30%', '32%'],
            center: ['50%', '50%'],
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    formatter: [
                        '{b|{b}}',
                        '{c|{c}}'
                    ].join('\n'),
                    rich: {
                        b: {
                            width: 50,
                            color: '#001331',
                            lineHeight: 20,
                            align: 'center',
                        },
                        c: {
                            width: 50,
                            fontSize: 16,
                            lineHeight: 20,
                            color: '#001331',
                            align: 'center',
                            fontFamily: 'PingFangSC-Medium',
                        },
                    },
                    show: false,
                    position: 'inside',
                    color: '#fff',
                }
            },
            data: baseDataWrap
        },

    ]
};
