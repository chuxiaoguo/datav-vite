<template>
    <div class="box">
        <dv-border-box-10 style="position: absolute;"></dv-border-box-10>
        <div class="title">
            <!-- <Triangle></Triangle> -->
            <dv-decoration-7 style="width:150px;height:30px;"><label>设备总数</label></dv-decoration-7>
            <label class="device-num">{{ deviceTotal }}</label>
        </div>
        <div class="panel">
            <div ref="chart"
                :style="chartStyle">
            </div>
        </div>
    </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ChartMixin from '../factory/chartMixin';
import chartConfig from '../factory/pie';

export default Vue.extend({
    name: 'DeviceTotal',
    mixins: [ChartMixin],
    props: ['partStyle'],
    data() {
        return {
            data: {
                onlineSize: 573,
                offonlineSize: 242,
                sufficientPowerSize: 467,
                lowPower: 106,
                onlineDeivce: [
                    {
                        name: '网关',
                        size: 132
                    },
                    {
                        name: '传感器',
                        size: 132
                    },
                    {
                        name: '插座',
                        size: 132
                    }
                ]
            }
        };
    },
    computed: {
        deviceTotal() {
            const { onlineSize, offonlineSize } = this.data;
            return onlineSize + offonlineSize;
        }
    },
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
<style lang="scss" scoped>
.box {
    position: relative;
    height: 100%;
    .title {
        display: flex;
        align-items: center;
        padding: 30px 20px;
        position: relative;
        z-index: 2;
        label {
            color: #fff;
            font-size: 16px;
            margin: 0 5px;
        }
        .device-num {
            font-family: DINAlternate-Bold;
            font-size: 28px;
            font-weight: bold;
        }
    }
    .panel {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
