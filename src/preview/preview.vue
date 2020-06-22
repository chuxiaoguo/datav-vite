<template>
    <div class="pre-container">
        <!-- 显示画布 -->
        <div class="dashboard"
            :style="dashBoard">
            <!-- margin背景图片 -->
            <div class="pre-image"
                :style="preImg"></div>
            <div class="pos-margin"
                :style="marginBlock">
                <div class="part-layout"
                    style="position: relative;">
                    <div class="scene"
                        :style="scene">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

const enum ScaleMode {
    EQUAL = 1,
    HSCALE,
    WSCALE,
}

export default {
    name: 'DataVTemplate',
    props: {
        screenW: {
            type: Number,
            default: 1920,
        },
        screenH: {
            type: Number,
            default: 1080,
        },
        scaleMode: {
            type: Number,
            default: ScaleMode.WSCALE,
        },
        disabledBackgroundFill: {
            type: Boolean,
            default: false,
        },
        palette: {
            type: Object,
            default: () => {
                return {
                    backgroundColor: '#000',
                    backgroundImage: '',
                };
            }
        },
    },
    data() {
        return {
            screenDomWidth: 0,
            screenDomHeight: 0,
            backgroundImage: 'none',
            backgroundColor: '',
            transform: 'scale(1)',
            marginLeft: '',
            backgroundPosition: '',
            backgroundSize: '100% 100%',
            overflow: 'hidden',
            margin: '0px',
            loadingDom: false,
        };
    },
    computed: {
        currentBgColor(): string {
            return this.palette.backgroundColor || '#000';
        },
        currentBgImage(): string {
            return this.palette.backgroundImage || '';
        },
        dashBoard(): any {
            return {
                backgroundColor: this.backgroundColor,
                overflow: this.overflow,
            };
        },
        preImg(): any {
            const bgImage = this.currentBgImage || 'none';
            return {
                backgroundImage: this.disabledBackgroundFill ? 'none' : `url(${bgImage})`,
                backgroundColor: `${this.currentBgColor}`,
                backgroundSize: this.backgroundSize,
                backgroundPosition: this.backgroundPosition,
            };
        },
        marginBlock(): any {
            return {
                margin: this.margin,
            };
        },
        scene(): any {
            const bgImage = this.currentBgImage || 'none';
            const tf = this.transform;
            return {
                width: `${this.screenW}px`,
                height: `${this.screenH}px`,
                backgroundImage: `url(${bgImage})`,
                backgroundColor: `${this.currentBgColor}`,
                transform: tf,
                backgroundSize: '100% 100%',
                backgroundPosition: 'left top',
            };
        },
        onPolling(): boolean {
            return (this.projectObj && this.projectObj.onPolling) || false;
        },
    },
    mounted() {
        this.initScreenDom();
        this.calLayoutProps();
    },
    methods: {
        initScreenDom() {
            const domClient = document.documentElement;
            this.screenDomHeight = domClient.clientHeight;
            this.screenDomWidth = domClient.clientWidth;
        },
        calLayoutProps() {
            // 宽高等比缩放
            if (this.scaleMode === ScaleMode.EQUAL) {
                const scaleW = this.screenDomWidth / this.screenW;
                const scaleH = this.screenDomHeight / this.screenH;
                this.transform = `scale(${scaleW}, ${scaleH})`;
                this.overflow = 'hidden';
            }
            // 宽度铺满，高度缩放
            if (this.scaleMode === ScaleMode.HSCALE) {
                // 计算出宽度的固定比例
                const scaleW = this.screenDomWidth / this.screenW;
                this.transform = `scale(${scaleW})`;

                // 相对比例下，width的真正宽度
                const realHeigth = this.screenH * scaleW;
                // 垂直间距
                const marginHor = (this.screenDomHeight - realHeigth) / 2;
                if (marginHor > 0) {
                    this.margin = `${marginHor}px 0px`;
                    this.overflow = 'hidden';
                } else {
                    this.overflow = 'hidden auto';
                }
                // 背景图片移动计算
                const bgSizeW = (realHeigth / this.screenDomHeight) * 100;
                this.backgroundPosition = `left ${marginHor}px`;
                this.backgroundSize = `100% ${bgSizeW}%`;
            }
            // 高度铺满，宽度缩放
            if (this.scaleMode === ScaleMode.WSCALE) {
                // 计算出高度的固定比例
                const scaleH = this.screenDomHeight / this.screenH;
                this.transform = `scale(${scaleH})`;
                // 相对比例下，width的真正宽度
                const realWidth = this.screenW * scaleH;
                // 水平间距
                const marginVer = (this.screenDomWidth - realWidth) / 2;
                if (marginVer > 0) {
                    this.margin = `0px ${marginVer}px`;
                    this.overflow = 'hidden';
                } else {
                    this.overflow = 'auto hidden';
                }

                // 背景图片移动计算
                const bgSizeW = (realWidth / this.screenDomWidth) * 100;
                this.marginLeft = `${marginVer}px`;
                this.backgroundPosition = `${marginVer}px top`;
                this.backgroundSize = `${bgSizeW}% 100%`;
            }
        },
        /**
         * 监听整个页面的缩放调整
         */
        handleResize: () => {
            this.$nextTick(() => {
                this.initScreenDom();
                this.calLayoutProps();
            });
        },
    }
};
</script>
<style lang="less">
@defaulBg: '#fff';
body {
    overflow: hidden;
}
.pre-container {
    width: 100%;
    height: 100%;
    .dashboard {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .pre-image {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .scene {
            position: relative;
            background-color: @defaulBg;
            user-select: none;
            width: 100%;
            height: 100%;
            transform-origin: 0 0;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            transition: all 0.3s linear;
            overflow: hidden;
        }
    }
}
</style>
