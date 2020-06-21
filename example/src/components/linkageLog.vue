<template>
    <div class="box">
        <dv-border-box-10 style="position: absolute;" :style="{height: partStyle.height + 'px'}"></dv-border-box-10>
        <div class="title">
            <dv-decoration-7 style="width:200px;height:30px;"><label>自动化执行日志</label></dv-decoration-7>
        </div>
        <div class="absolute-panel"
            :style="tableWrapper">
            <dv-scroll-board :config="config" />
        </div>
    </div>
</template>
<script >
import Vue from 'vue';
import failIcon from '../iconCmpt/fail';
import success from '../iconCmpt/success';

export default Vue.extend({
    props: ['partStyle'],
    data() {
        return {
            config: {
                header: ['执行状态', '执行结果', '时间'],
                data: [
                    ['开灯', failIcon, '行1列3'],
                    ['开灯', failIcon, '行2列3'],
                    ['关灯', success, '行3列3'],
                    ['关空调', success, '行4列3'],
                    ['开空调', success, '行5列3'],
                    ['行6列1', failIcon, '行6列3'],
                    ['行7列1', success, '行7列3'],
                    ['行8列1', failIcon, '行8列3'],
                    ['行9列1', success, '行9列3'],
                    ['行10列1', failIcon, '行10列3']
                ],
                headerBGC: 'rgba(24,54,127,0.20)',
                oddRowBGC: 'rgba(24,54,127,0.20)',
                evenRowBGC: '#001331',
                rowNum: 3,
                headerHeight: 40,
            }
        };
    },
    computed: {
        tableWrapper() {
            return {
                width: `${this.partStyle.width - 60}px`,
            };
        }
    }
});
</script>
<style lang="scss" scoped>
.box {
    position: relative;
    height: 100%;
    .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 20px;
        position: relative;
        z-index: 2;
        label {
            color: #fff;
            // font-size: 26px;
            margin:0 5px;
        }
    }
    .absolute-panel {
        position: absolute;
        left: 30px;
        top: 63px;
        height: 160px;
    }
}
</style>
