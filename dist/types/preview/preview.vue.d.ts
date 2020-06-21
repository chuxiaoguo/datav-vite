declare const enum ScaleMode {
    EQUAL = 1,
    HSCALE = 2,
    WSCALE = 3
}
declare const _default: {
    name: string;
    components: {
        ResizeObserver: any;
    };
    props: {
        screenW: {
            type: NumberConstructor;
            default: number;
        };
        screenH: {
            type: NumberConstructor;
            default: number;
        };
        scaleMode: {
            type: NumberConstructor;
            default: ScaleMode;
        };
        palette: {
            type: ObjectConstructor;
            default: () => {
                backgroundColor: string;
                backgroundImage: string;
            };
        };
    };
    data(): {
        screenDomWidth: number;
        screenDomHeight: number;
        backgroundImage: string;
        backgroundColor: string;
        transform: string;
        marginLeft: string;
        backgroundPosition: string;
        backgroundSize: string;
        overflow: string;
        margin: string;
        loadingDom: boolean;
    };
    computed: {
        currentBgColor(): string;
        currentBgImage(): string;
        dashBoard(): any;
        preImg(): any;
        marginBlock(): any;
        scene(): any;
        onPolling(): boolean;
    };
    methods: {
        initScreenDom(): void;
        calLayoutProps(): void;
        /**
         * 监听整个页面的缩放调整
         */
        handleResize: () => void;
    };
    mounted(): void;
};
export default _default;
