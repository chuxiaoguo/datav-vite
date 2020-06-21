<template>
    <div class="box">
        <div class="title">
            <span class="num-style">{{ floor }}</span>
            <span class="label-style">楼</span>
        </div>
        <div class="environment">
            <div class="up-bar">
                <strong class="label-bathroom">卫生间</strong>
                <div class="item-wrapper">
                    <div class="icon-wrapper">
                        <MenToiletIcon :isActive="menStatus"
                            :opacity="opacityNum"></MenToiletIcon>
                        <span v-if="menStatus"
                            style="color: #25B8D0">满员</span>
                        <span v-else>可用</span>
                    </div>
                    <div class="line-wrapper">
                        <div class="line"></div>
                    </div>
                    <div class="icon-wrapper">
                        <LadiesToiletIcon :isActive="ladiesStatus"
                            :opacity="opacityNum"></LadiesToiletIcon>
                        <span v-if="ladiesStatus"
                            style="color: #25B8D0">满员</span>
                        <span v-else>可用</span>
                    </div>
                </div>
            </div>
            <div class="down-bar">
                <div class="item-3-wrapper">
                    <IlluminanceIcon></IlluminanceIcon>
                    <span class="description">照度</span>
                    <div class="result">
                        <strong class="result-value">{{ data.illuminance }}</strong>
                        <span class="result-unit">Lux</span>
                    </div>
                </div>
                <div class="item-3-wrapper">
                    <TemperatureIcon></TemperatureIcon>
                    <span class="description">温度</span>
                    <div class="result">
                        <strong class="result-value">{{ parseTemp }}</strong>
                        <span class="result-unit">℃</span>
                    </div>
                </div>
                <div class="item-3-wrapper">
                    <TVOC></TVOC>
                    <span class="description">TVOC</span>
                    <div class="result">
                        <strong class="result-value">{{ data.tvoc }}</strong>
                        <span class="result-unit">mg/m3</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import Vue from 'vue';
import IsPersonIcon from '../iconCmpt/isPerson.vue';
import MenToiletIcon from '../iconCmpt/menToilet.vue';
import LadiesToiletIcon from '../iconCmpt/ladiesToilet.vue';
import TemperatureIcon from '../iconCmpt/temperature.vue';
import IlluminanceIcon from '../iconCmpt/illuminance.vue';
import TVOC from '../iconCmpt/TVOC.vue';

export default Vue.extend({
    name: 'PreScreen',
    components: {
        MenToiletIcon,
        LadiesToiletIcon,
        TemperatureIcon,
        IlluminanceIcon,
        TVOC
    },
    props: {
        data: {
            type: Object,
            default: () => ({
                spaceId: 'sp.xx1',
                spaceName: '7楼',
                temperature: '',
                humidity: '',
                illuminance: '',
                tvoc: '',
                men: 0,
                ladies: 0,
            })
        },
        floor: {
            type: String,
            default: '7',
        }
    },
    computed: {
        menStatus() {
            let status = false;
            if (this.data.men) {
                status = true;
            }
            return status;
        },
        ladiesStatus() {
            let status = false;
            if (this.data.ladies) {
                status = true;
            }
            return status;
        },
        parseTemp() {
            const { temperature } = this.data;
            return _.isNumber(temperature) ? _.floor(temperature / 100, 2) : '';
        },
        opacityNum() {
            return 0.2;
        }
    }
});
</script>
<style lang="scss" scoped>
.box {
    position: relative;
    display: flex;
    flex-flow: row;
    .title {
        color: #fff;
        height: 100%;
        width: 86px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        .num-style {
            font-family: DINAlternate-Bold;
            font-size: 38px;
            color: #ffffff;
            letter-spacing: 0;
        }
        .label-style {
            font-family: FZLTXIHJW--GB1-0;
            font-size: 30px;
            color: #ffffff;
            letter-spacing: 0;
            padding-left: 5px;
        }
    }
    .environment {
        color: #fff;
        font-size: 12px;
        flex: 1;
        .up-bar {
            padding: 0 20px;
            height: 55%;
            position: relative;
            .label-bathroom {
                display: flex;
                align-items: center;
                height: 30%;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #ffffff;
                letter-spacing: 0;
            }
            .item-wrapper {
                height: 70%;
                display: flex;
                justify-content: flex-start;
                .icon-wrapper {
                    width: 50%;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;
                    span {
                        padding: 10px 0;
                    }
                }
                .line-wrapper {
                    display: flex;
                    align-items: center;
                    .line {
                        width: 0;
                        height: 36px;
                        border: 0.5px solid #272e4a;
                    }
                }
            }
        }
        .down-bar {
            height: 45%;
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            justify-items: center;
            .item-3-wrapper {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                width: calc(100% / 3);
                .description {
                    padding: 5px 0;
                    font-size: 10px;
                }
                .result-value {
                    font-family: FZLTZHJW--GB1-0;
                }
                .result {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
