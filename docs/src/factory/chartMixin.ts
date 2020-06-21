const echarts = require('echarts');

export default {
    data() {
        return {
            chartInstance: null,
            rectHeight: this.partStyle.height,
            rectWidth: this.partStyle.width,
        };
    },
    computed: {
        chartStyle() {
            return {
                height: `${this.rectHeight}px`,
                width: `${this.rectWidth}px`
            };
        }
    },
    mounted() {
        // this.resetChartRefSize();
        this.initChart();
    },
    beforeDestroy() {
        this.destroyChart();
    },
    methods: {
        // resetChartRefSize() {
        //     const rect = this.$refs.chartWrapper.getBoundingClientRect();
        //     if (_.isObject(rect)) {
        //         this.rectHeight = rect.height;
        //         this.rectWidth = rect.width;
        //     }
        // },
        resizeChart() {
            const boxSize = {
                height: this.rectHeight,
                width: this.rectWidth
            };
            this.chartInstance.resize(boxSize);
        },
        initChart() {
            const boxSize = {
                height: this.rectHeight,
                width: this.rectWidth
            };
            this.chartInstance = echarts.init(this.$refs.chart, null, boxSize);
        },
        destroyChart() {
            this.chartInstance.clear();
        },
        /**
         * @override 该方法需要被子类重写
         */
        updateChart() { },
    }
} as any;
