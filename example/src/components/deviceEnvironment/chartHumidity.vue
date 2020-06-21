<template>
    <div ref="chart"
        :style="chartStyle">
    </div>
</template>
<script >
import Vue from 'vue';
import ChartMixin from '../../factory/chartMixin';
import chartConfig from '../../factory/lineHumidity';

export default Vue.extend({
    name: 'PreScreen',
    mixins: [ChartMixin],
    props: ['partStyle'],
    mounted() {
        this.updateChart();
    },
    methods: {
        updateChart() {
            this.chartInstance.setOption(chartConfig);
        },
    },
});
</script>
<style lang="scss">
</style>
