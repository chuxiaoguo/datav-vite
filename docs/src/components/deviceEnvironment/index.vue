<template>
    <div class="box">
        <dv-border-box-10 style="position: absolute;" :style="{height: partStyle.height + 'px'}"></dv-border-box-10>
         <div class="title">
            <dv-decoration-7 style="width:150px;height:30px;"><label>设备环境</label></dv-decoration-7>
        </div>
        <div class="panel relative-panel">
            <ChartTemperature :partStyle="rect"></ChartTemperature>
            <ChartHumidity :partStyle="rect"></ChartHumidity>
            <!-- <ChartIlluminance :partStyle="rect"></ChartIlluminance> -->
        </div>
        <div class="panel-bar">
            <ChartExtreme :partStyle="barRect"></ChartExtreme>
        </div>
    </div>
</template>
<script >
import Vue from 'vue';
import ChartHumidity from './chartHumidity.vue';
import ChartTemperature from './chartTemperature.vue';
import ChartExtreme from './chartExtreme.vue';


export default Vue.extend({
    components: {
        ChartHumidity,
        ChartTemperature,
        ChartExtreme
    },
    props: ['data', 'partStyle'],
    data() {
        return {
            rect: {
                width: 724,
                height: 200,
            },
            barRect: {
                width: 400,
                height: 400,
            }
        };
    },
    computed: {
        // temperatureStyle() {
        //     return {
        //         width: `${this.width.width}px`,
        //         height: `${this.width.height}px`,
        //     };
        // }
    },
});
</script>
<style lang="scss">
.box {
    position: relative;
    height: 100%;
    .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 30px;
        position: relative;
        label {
            color: #fff;
            // font-size: 26px;
            margin:0 5px;
        }
        .device-num {
            font-size: 16px;
            font-weight: bold;
        }
    }
    .panel {
        position: absolute;
        left: 0;
        top: 0;
    }
    .panel-bar {
        position: absolute;
        left: 700px;
        top: 50px;
    }
    .relative-panel {
        position: relative;
        left: 20px;
        width: 724px;
        height: 647px;
    }
}
</style>
