<template>
    <div class="box">
        <h1 class="box-title">XX智能办公楼</h1>
        <dv-decoration-5 :color="['rgba(24,54,127)', 'rgba(24,54,127)']" style="position: absolute;width:300px;height:60px;top: 10px;"></dv-decoration-5>
        <!-- <h1 class="box-title">XX智能办公楼</h1> -->
        <!-- <dv-decoration-5 :color="['rgba(24,54,127)', '#ffffff']" style="width:300px;height:20px;" /> -->
    </div>
</template>
<script >
import Vue from 'vue';

export default Vue.extend({
    name: 'PreScreen',
    props: ['data'],
});
</script>
<style lang="scss">
.box {
    position: relative;
    .box-title {
        color: #fff;
        letter-spacing: 3px;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
    }
}
</style>
