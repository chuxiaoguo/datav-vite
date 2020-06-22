<template>
    <div :style="[pStyle]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'DataVCell',
    props: {
        partStyle: {
            type: Object,
            default() {
                return {
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0,
                    zIndex: 0,
                };
            }
        },
    },
    computed: {
        pStyle() {
            return {
                width: `${this.partStyle.width}px`,
                height: `${this.partStyle.height}px`,
                position: 'absolute',
                left: `${this.partStyle.left}px`,
                top: `${this.partStyle.top}px`,
                zIndex: this.partStyle.zIndex,
            };
        }
    }
};
</script>
