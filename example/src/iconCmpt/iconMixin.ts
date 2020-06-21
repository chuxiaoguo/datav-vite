export default {
    props: {
        isActive: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        iconColor() {
            let color = '#ffffff';
            if (this.isActive) {
                color = '#25B8D0';
            }
            return color;
        },
    }
} as any;
