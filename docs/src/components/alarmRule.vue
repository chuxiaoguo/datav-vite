<template>
    <div class="box">
        <dv-border-box-10 style="position: absolute;" :style="{height: partStyle.height + 'px'}"></dv-border-box-10>
        <div class="title">
            <dv-decoration-7 style="width:150px;height:30px;"><label>告警行日志</label></dv-decoration-7>
        </div>
        <div class="absolute-panel"
            :style="tableWrapper">
            <dv-scroll-board :config="config" />
        </div>
    </div>
</template>
<script >
import Vue from 'vue';

export default Vue.extend({
    props: ['partStyle'],
    data() {
        return {
            config: {
                header: ['告警规则', '告警类型', '等级', '时间'],
                data: [
                    ['开灯', '系统默认', '<span style="color: #FD2F58">紧急</span>', '行1列3'],
                    ['开灯', '系统默认', '<span style="color: #B646C8 ">重要</span>', '行2列3'],
                    ['关灯', '系统默认', '<span style="color: #4CEAAD">提示</span>', '行3列3'],
                    ['关空调', '系统默认', '<span style="color: #FD2F58">紧急</span>', '行4列3'],
                    ['开空调', '系统默认', '<span style="color: #FD2F58">紧急</span>', '行5列3'],
                    ['行6列1', '自定义', '<span style="color: #FD2F58">紧急</span>', '行6列3'],
                    ['行7列1', '系统默认', '<span style="color: #FD2F58">紧急</span>', '行7列3'],
                    ['行8列1', '自定义', '<span style="color: #FD2F58">紧急</span>', '行8列3'],
                    ['行9列1', '系统默认', '<span style="color: #FD2F58">紧急</span>', '行9列3'],
                    ['行10列1', '自定义', '<span style="color: #FD2F58">紧急</span>', '行10列3']
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
        padding: 20px 30px;
        position: relative;
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
