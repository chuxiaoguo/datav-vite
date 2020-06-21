<template>
    <div class="group-list">
        <DataVCell :partStyle="titleLabel.partStyle">
            <ScreenTitle></ScreenTitle>
        </DataVCell>
        <DataVCell :partStyle="totalDev.partStyle">
            <DeviceTotal :partStyle="totalDev.partStyle"
                :data="totalDevData"></DeviceTotal>
        </DataVCell>
        <DataVCell :partStyle="intelligentLinkage.partStyle">
            <IntelligentLinkage :partStyle="intelligentLinkage.partStyle"
                :data="iftttTotalData"></IntelligentLinkage>
        </DataVCell>
        <DataVCell :partStyle="exhibition.partStyle">
            <Exhibition :partStyle="exhibition.partStyle"
                :data="exhibitionData"></Exhibition>
        </DataVCell>
        <DataVCell :partStyle="linkageLog.partStyle">
            <LinkageLog :partStyle="linkageLog.partStyle"
                :data="iftttLogData"
                :patchData="iftttLogPatchData"></LinkageLog>
        </DataVCell>
        <DataVCell :partStyle="alarmLog.partStyle">
            <AlarmRule :partStyle="alarmLog.partStyle"
                :data="alarmLogData"
                :alarmData="iftttTotalData"></AlarmRule>
        </DataVCell>
        <DataVCell :partStyle="devEnvironment.partStyle">
            <DeviceEnvironment :partStyle="devEnvironment.partStyle"></DeviceEnvironment>
        </DataVCell>
        <!-- <DataVCell :partStyle="sevenEnvironment.partStyle">
            <FloorEnvironment :partStyle="sevenEnvironment.partStyle"
                floor="7"
                :data="sevenEnvData"></FloorEnvironment>
        </DataVCell>
        <DataVCell :partStyle="eightEnvironment.partStyle">
            <FloorEnvironment :partStyle="eightEnvironment.partStyle"
                floor="8"
                :data="eightEnvData"></FloorEnvironment>
        </DataVCell> -->
    </div>
</template>

<script>
import Vue from 'vue';
import DeviceTotal from '../components/deviceTotal.vue';
import ScreenTitle from '../components/screenTitle.vue';
import IntelligentLinkage from '../components/intelligentLinkage.vue';
import Exhibition from '../components/exhibition.vue';
import LinkageLog from '../components/linkageLog.vue';
import AlarmRule from '../components/alarmRule.vue';
import DeviceEnvironment from '../components/deviceEnvironment/index.vue';
// import MeetingRoom from '../components/meetingRoom.vue';
// import FloorEnvironment from '../components/floorEnvironment.vue';
export default Vue.extend({
    name: 'CellGroup',
    components: {
        DeviceTotal,
        ScreenTitle,
        IntelligentLinkage,
        Exhibition,
        LinkageLog,
        AlarmRule,
        DeviceEnvironment,

        // MeetingRoom,
        // FloorEnvironment,
    },
    data() {
        return {
            partMap: new Map([
                [
                    'title',
                    {
                        partId: 1,
                        description: 'XX智能办公楼',
                        partStyle: {
                            width: 300,
                            height: 54,
                            left: 810,
                            top: 10,
                            zIndex: 1,
                        },
                    }
                ],
                [
                    'totalDev',
                    {
                        partId: 1,
                        description: '设备总数',
                        partStyle: {
                            width: 383,
                            height: 446,
                            left: 27,
                            top: 100,
                            zIndex: 2,
                        },
                    }
                ],
                [
                    'intelligentLinkage',
                    {
                        partId: 1,
                        description: '智能联动',
                        partStyle: {
                            width: 364,
                            height: 446,
                            left: 420,
                            top: 100,
                            zIndex: 3,
                        },
                    }
                ],
                [
                    'exhibition',
                    {
                        partId: 1,
                        description: '8楼展示厅',
                        partStyle: {
                            width: 1080,
                            height: 446,
                            left: 804,
                            top: 100,
                            zIndex: 4,
                        },
                    }
                ],
                [
                    'linkageLog',
                    {
                        partId: 1,
                        description: '自动化执行日志',
                        partStyle: {
                            width: 757,
                            height: 243,
                            left: 27,
                            top: 580,
                            zIndex: 5,
                        },
                    }
                ],
                [
                    'alarmLog',
                    {
                        partId: 1,
                        description: '告警日志',
                        partStyle: {
                            width: 758,
                            height: 223,
                            left: 27,
                            top: 833,
                            zIndex: 6,
                        },
                    }
                ],
                [
                    'devEnvironment',
                    {
                        partId: 1,
                        description: '设备环境温度',
                        partStyle: {
                            width: 1078,
                            height: 478,
                            left: 805,
                            top: 580,
                            zIndex: 7,
                        },
                    }
                ],
                [
                    'meetingRoom',
                    {
                        partId: 1,
                        description: '8楼会议室',
                        partStyle: {
                            width: 1078,
                            height: 274,
                            left: 805,
                            top: 782,
                            zIndex: 7,
                        },
                    }
                ],
                [
                    'sevenEnvironment',
                    {
                        partId: 1,
                        description: '7楼环境',
                        partStyle: {
                            width: 377,
                            height: 272,
                            left: 1904,
                            top: 782,
                            zIndex: 7,
                        },
                    }
                ],
                [
                    'eightEnvironment',
                    {
                        partId: 1,
                        description: '8楼环境',
                        partStyle: {
                            width: 377,
                            height: 272,
                            left: 2291,
                            top: 782,
                            zIndex: 8,
                        },
                    }
                ],

            ]),
            totalDevData: {},
            iftttTotalData: {},
            alarmLogData: [],
            iftttLogData: [],
            iftttLogPatchData: {},
            meetingRoomData: [],
            environmentLineData: {},
            exhibitionData: {},
            floorEnvironmentData: [],

            openWs: true,
        };
    },
    computed: {
        totalDev() {
            return this.partMap.get('totalDev');
        },
        titleLabel() {
            return this.partMap.get('title');
        },
        intelligentLinkage() {
            return this.partMap.get('intelligentLinkage');
        },
        exhibition() {
            return this.partMap.get('exhibition');
        },
        devEnvironment() {
            return this.partMap.get('devEnvironment');
        },
        linkageLog() {
            return this.partMap.get('linkageLog');
        },
        alarmLog() {
            return this.partMap.get('alarmLog');
        },
        meetingRoom() {
            return this.partMap.get('meetingRoom');
        },
        sevenEnvironment() {
            return this.partMap.get('sevenEnvironment');
        },
        eightEnvironment() {
            return this.partMap.get('eightEnvironment');
        },
        sevenEnvData() {
            return this.floorEnvironmentData[0];
        },
        eightEnvData() {
            return this.floorEnvironmentData[1];
        },
    },
});
</script>

<style lang="scss" scoped>
  .group-list {
      position: relative;
      z-index: 1;
  }
</style>
