<template>
    <div class="box">
        <dv-border-box-10 style="position: absolute;" :style="{height: partStyle.height + 'px'}"></dv-border-box-10>
        <div class="title">
            <dv-decoration-7 style="width:150px;height:30px;"><label>智能联动</label></dv-decoration-7>
        </div>
        <div class="panel">
            <div class="circle" style="left: 22px;top: 80px;height: 195px;width: 195px;">
                <div class="outer-circle">
                    <div class="inner-circle">
                        <p class="display-label">场景</p>
                        <h1 class="display-num">{{ 234 }}</h1>
                    </div>
                </div>
            </div>
            <div class="circle" style="left: 173px;top: 237px;height: 172px;width: 172px;">
                <div class="outer-circle">
                    <div class="inner-circle" style="height: 106px;width: 106px;">
                        <p class="display-label">自动化</p>
                        <h1 class="display-num">{{ 483 }}</h1>
                    </div>
                </div>
            </div>
            <div class="small-circle circle">
                <div class="outer-small outer-circle">
                    <div class="inner-small inner-circle">
                        <p class="small-label">今日告警</p>
                        <h1 class="small-num">{{ 243 }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import Vue from 'vue';
export default Vue.extend({
    props: ['partStyle'],
});
</script>
<style lang="scss" scoped>
.box {
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
        .circle {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 0.9px solid #0ee1fc;
            .inner-circle {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                height: 131px;
                width: 131px;
                color: #001331;
                border-radius: 50%;
                background-image: linear-gradient(152deg, #4ceaad 0%, #25b8d0 56%);
                // box-shadow: 0 0 3px 0 #25b8d0;
            }
            .outer-circle {
                border: 10px solid rgba(37, 184, 208, 0.2);
                border-radius: 50%;
            }
        }
        .small-circle {
            left: 45px;
            top: 309px;
            height: 104px;
            width: 104px;
            border: 0.9px solid #f33855;
            .inner-small {
                background-image: linear-gradient(154deg, #f83453 0%, #f13955 100%);
                height: 70px;
                width: 70px;
            }
            .outer-small {
                border: 10px solid rgba(248, 52, 83, 0.2);
            }
        }
        .display-label {
            font-size: 20px;
            letter-spacing: 0;
            margin: 0px;
        }
        .display-num {
            font-size: 20px;
            letter-spacing: 0;
            line-height: 20px;
            margin: 5px 0px;
        }
        .small-label {
            font-size: 14px;
            letter-spacing: 0;
            margin: 0px;
        }
        .small-num {
            font-size: 24px;
            letter-spacing: 0;
            line-height: 24px;
            margin: 5px 0px;
        }
    }
}
</style>
