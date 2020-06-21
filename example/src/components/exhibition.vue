<template>
    <div class="box">
        <dv-border-box-10 style="position: absolute;" :style="{height: partStyle.height + 'px'}"></dv-border-box-10>
        <div class="title">
            <dv-decoration-7 style="width:150px;height:30px;"><label>展示厅</label></dv-decoration-7>
        </div>
        <div class="panel">
            <ul class="icon-list">
                <li class="icon-item">
                    <div class="icon-wrapper">
                        <DeviceIcon></DeviceIcon>
                    </div>
                    <label class="label-style">设备</label>
                    <span class="value-style">{{ 42 }}</span>
                </li>
                <li class="icon-item">
                    <div class="icon-wrapper">
                        <OffLineIcon></OffLineIcon>
                    </div>
                    <label class="label-style">离线</label>
                    <span class="value-style">{{ 12 }}</span>
                </li>
                <li class="icon-item">
                    <div class="icon-wrapper">
                        <LowPowerIcon></LowPowerIcon>
                    </div>
                    <label class="label-style">低电量</label>
                    <span class="value-style">{{ 3 }}</span>
                </li>
                <li class="icon-item">
                    <div class="icon-wrapper">
                        <SmokeIcon></SmokeIcon>
                    </div>
                    <label class="label-style">烟雾</label>
                    <span class="value-style">{{ 2000 }}</span>
                    <span class="unit-style">ppm</span>
                </li>
                <li class="icon-item">
                    <div class="icon-wrapper">
                        <IsPersonIcon></IsPersonIcon>
                    </div>
                    <div class="label-icon label-style">
                        <IsPersonIcon></IsPersonIcon>
                    </div>
                    <span class="value-style"
                        style="font-size: 14px">有人</span>
                </li>
            </ul>
            <div class="exhibition-bg"
                :style="exhibitionStyle">

            </div>
        </div>
    </div>
    </div>
</template>
<script >
import Vue from 'vue';
import DeviceIcon from '../iconCmpt/device.vue';
import OffLineIcon from '../iconCmpt/offLine.vue';
import LowPowerIcon from '../iconCmpt/lowPower.vue';
import SmokeIcon from '../iconCmpt/smoke.vue';
import IsPersonIcon from '../iconCmpt/isPerson.vue';
import ExhibitionBg from '../assets/exhibitionBg.jpg';

export default Vue.extend({
    name: 'PreScreen',
    components: {
        DeviceIcon,
        OffLineIcon,
        LowPowerIcon,
        SmokeIcon,
        IsPersonIcon
    },
    props: ['partStyle'],
    computed: {
        exhibitionStyle() {
            return {
                backgroundSize: '100% 100%',
                backgroundPosition: 'left top',
                backgroundImage: `url(${ExhibitionBg})`,
                width: '600px',
                height: '363px',
                top: '50px',
                left: '350px',
            };
        },
    }
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
    }
    .panel {
        position: absolute;
        left: 0;
        top: 0;
        .icon-list {
            position: absolute;
            width: 177px;
            top: 80px;
            left: 39px;
        }
        .exhibition-bg {
            position: absolute;
        }
        ul {
            list-style-type: none;
            li {
                width: 200px;
                height: 50px;
                display: flex;
                align-items: center;
                border: 0.5px solid #1a9cad;
                border-radius: 4px;
                border-radius: 4px;
                margin-bottom: 10px;
            }
            .icon-wrapper {
                height: 48px;
                width: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: linear-gradient(
                    76deg,
                    rgba(26, 156, 173, 0.12) 0%,
                    rgba(26, 156, 173, 0.3) 100%
                );
                border: 0 solid #1a9cad;
                border-radius: 4px;
                border-radius: 4px;
            }
            .label-style {
                color: #ffffff;
                padding-left: 10px;
                width: 60px;
            }
            .label-icon {
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            .value-style {
                font-size: 24px;
                color: #ffffff;
                letter-spacing: 0;
            }
            .unit-style {
                align-self: flex-end;
                font-size: 10px;
                color: #ffffff;
                letter-spacing: 0;
                line-height: 28px;
            }
        }
    }
}
</style>
