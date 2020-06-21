<template>
    <svg width="383px"
        height="446px"
        viewBox="0 0 383 446"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
        <title>矩形</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <path d="M10.9776036,0 L238.027732,0 L238.027732,0 L280.195568,0 L373,0 C378.522847,-1.01453063e-15 383,4.4771525 383,10 L383,436 C383,441.522847 378.522847,446 373,446 L10.0224467,446 C4.49959916,446 0.0224466609,441.522847 0.0224466609,436 C0.0224466609,435.992526 0.0224550396,435.985052 0.022471797,435.977579 L0.977628748,9.97757853 C0.989992155,4.463499 5.46351022,-1.85270027e-14 10.9776036,0 Z"
                id="path-1"></path>
            <filter x="-2.6%"
                y="-2.2%"
                width="105.2%"
                height="104.5%"
                filterUnits="objectBoundingBox"
                id="filter-2">
                <feGaussianBlur stdDeviation="10"
                    in="SourceAlpha"
                    result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0"
                    dy="0"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.330841796   0 0 0 0 0.661419208   0 0 0 0 0.834578804  0 0 0 1 0"
                    type="matrix"
                    in="shadowInnerInner1"></feColorMatrix>
            </filter>
        </defs>
        <g id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd">
            <g id="方案2"
                transform="translate(-27.000000, -124.000000)">
                <g id="编组-19"
                    transform="translate(27.000000, 124.000000)">
                    <g id="矩形">
                        <use fill="#001331"
                            fill-rule="evenodd"
                            xlink:href="#path-1"></use>
                        <use fill="black"
                            fill-opacity="1"
                            filter="url(#filter-2)"
                            xlink:href="#path-1"></use>
                        <path stroke="#007B67"
                            stroke-width="1"
                            d="M373,0.5 L10.9776036,0.5 C8.35840925,0.5 5.98635153,1.56008101 4.26762424,3.27495897 C2.54889696,4.98983693 1.48350011,7.35951183 1.47762749,9.97869961 L0.522445404,436.001121 C0.522446661,438.623353 1.58577038,440.998353 3.30493224,442.717514 C5.0240941,444.436676 7.3990941,445.5 10.0224467,445.5 L373,445.5 C375.623353,445.5 377.998353,444.436676 379.717514,442.717514 C381.436676,440.998353 382.5,438.623353 382.5,436 L382.5,10 C382.5,7.37664744 381.436676,5.00164744 379.717514,3.28248558 C377.998353,1.56332372 375.623353,0.5 373,0.5 Z"
                            stroke-linejoin="square"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
</template>

<script >
import Vue from 'vue';

export default Vue.extend({
    props: {
        opts: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    computed: {
        width() {
            return `${this.opts.width}px`;
        },
        height() {
            return `${this.opts.height}px`;
        }
    }
});
</script>
