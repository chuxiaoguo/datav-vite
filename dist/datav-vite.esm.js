var this$1 = undefined;
var script = {
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
            default: 3 /* WSCALE */,
        },
        disabledBackgroundFill: {
            type: Boolean,
            default: false,
        },
        palette: {
            type: Object,
            default: function () {
                return {
                    backgroundColor: '#000',
                    backgroundImage: '',
                };
            }
        },
    },
    data: function data() {
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
        currentBgColor: function currentBgColor() {
            return this.palette.backgroundColor || '#000';
        },
        currentBgImage: function currentBgImage() {
            return this.palette.backgroundImage || '';
        },
        dashBoard: function dashBoard() {
            return {
                backgroundColor: this.backgroundColor,
                overflow: this.overflow,
            };
        },
        preImg: function preImg() {
            var bgImage = this.currentBgImage || 'none';
            return {
                backgroundImage: this.disabledBackgroundFill ? 'none' : ("url(" + bgImage + ")"),
                backgroundColor: ("" + (this.currentBgColor)),
                backgroundSize: this.backgroundSize,
                backgroundPosition: this.backgroundPosition,
            };
        },
        marginBlock: function marginBlock() {
            return {
                margin: this.margin,
            };
        },
        scene: function scene() {
            var bgImage = this.currentBgImage || 'none';
            var tf = this.transform;
            return {
                width: ((this.screenW) + "px"),
                height: ((this.screenH) + "px"),
                backgroundImage: ("url(" + bgImage + ")"),
                backgroundColor: ("" + (this.currentBgColor)),
                transform: tf,
                backgroundSize: '100% 100%',
                backgroundPosition: 'left top',
            };
        },
        onPolling: function onPolling() {
            return (this.projectObj && this.projectObj.onPolling) || false;
        },
    },
    mounted: function mounted() {
        this.initScreenDom();
        this.calLayoutProps();
    },
    methods: {
        initScreenDom: function initScreenDom() {
            var domClient = document.documentElement;
            this.screenDomHeight = domClient.clientHeight;
            this.screenDomWidth = domClient.clientWidth;
        },
        calLayoutProps: function calLayoutProps() {
            // 宽高等比缩放
            if (this.scaleMode === 1 /* EQUAL */) {
                var scaleW = this.screenDomWidth / this.screenW;
                var scaleH = this.screenDomHeight / this.screenH;
                this.transform = "scale(" + scaleW + ", " + scaleH + ")";
                this.overflow = 'hidden';
            }
            // 宽度铺满，高度缩放
            if (this.scaleMode === 2 /* HSCALE */) {
                // 计算出宽度的固定比例
                var scaleW$1 = this.screenDomWidth / this.screenW;
                this.transform = "scale(" + scaleW$1 + ")";
                // 相对比例下，width的真正宽度
                var realHeigth = this.screenH * scaleW$1;
                // 垂直间距
                var marginHor = (this.screenDomHeight - realHeigth) / 2;
                if (marginHor > 0) {
                    this.margin = marginHor + "px 0px";
                    this.overflow = 'hidden';
                }
                else {
                    this.overflow = 'hidden auto';
                }
                // 背景图片移动计算
                var bgSizeW = (realHeigth / this.screenDomHeight) * 100;
                this.backgroundPosition = "left " + marginHor + "px";
                this.backgroundSize = "100% " + bgSizeW + "%";
            }
            // 高度铺满，宽度缩放
            if (this.scaleMode === 3 /* WSCALE */) {
                // 计算出高度的固定比例
                var scaleH$1 = this.screenDomHeight / this.screenH;
                this.transform = "scale(" + scaleH$1 + ")";
                // 相对比例下，width的真正宽度
                var realWidth = this.screenW * scaleH$1;
                // 水平间距
                var marginVer = (this.screenDomWidth - realWidth) / 2;
                if (marginVer > 0) {
                    this.margin = "0px " + marginVer + "px";
                    this.overflow = 'hidden';
                }
                else {
                    this.overflow = 'auto hidden';
                }
                // 背景图片移动计算
                var bgSizeW$1 = (realWidth / this.screenDomWidth) * 100;
                this.marginLeft = marginVer + "px";
                this.backgroundPosition = marginVer + "px top";
                this.backgroundSize = bgSizeW$1 + "% 100%";
            }
        },
        /**
         * 监听整个页面的缩放调整
         */
        handleResize: function () {
            this$1.$nextTick(function () {
                this$1.initScreenDom();
                this$1.calLayoutProps();
            });
        },
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD;
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pre-container"},[_c('div',{staticClass:"dashboard",style:(_vm.dashBoard)},[_c('div',{staticClass:"pre-image",style:(_vm.preImg)}),_vm._v(" "),_c('div',{staticClass:"pos-margin",style:(_vm.marginBlock)},[_c('div',{staticClass:"part-layout",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"scene",style:(_vm.scene)},[_vm._t("default")],2)])])])])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-6ba527ef_0", { source: "body{overflow:hidden}.pre-container{width:100%;height:100%}.pre-container .dashboard{position:absolute;top:0;left:0;right:0;bottom:0}.pre-container .dashboard .pre-image{width:100%;height:100%;position:absolute}.pre-container .dashboard .scene{position:relative;background-color:'#fff';user-select:none;width:100%;height:100%;transform-origin:0 0;box-shadow:0 0 10px 0 rgba(0,0,0,.5);transition:all .3s linear;overflow:hidden}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

/* istanbul ignore next */
__vue_component__.install = function (Vue) {
    Vue.component(__vue_component__.name, __vue_component__);
};

//
//
//
//
//
//

var script$1 = {
    name: 'DataVCell',
    props: {
        partStyle: {
            type: Object,
            default: function default$1() {
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
        pStyle: function pStyle() {
            return {
                width: ((this.partStyle.width) + "px"),
                height: ((this.partStyle.height) + "px"),
                position: 'absolute',
                left: ((this.partStyle.left) + "px"),
                top: ((this.partStyle.top) + "px"),
                zIndex: this.partStyle.zIndex,
            };
        }
    }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:([_vm.pStyle])},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

/* istanbul ignore next */
__vue_component__$1.install = function (Vue) {
    Vue.component(__vue_component__$1.name, __vue_component__$1);
};

// Import vue comp
// Declare install function executed by Vue.use()
function install(Vue) {
    // if ((install as any).installed) return;
    // (install as any).installed = true;
    Vue.component(__vue_component__.name, __vue_component__);
    Vue.component(__vue_component__$1.name, __vue_component__$1);
}
// Create module definition for Vue.use()
var plugin = {
    install: install,
};
// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
}
else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}
// To allow use as module (npm/webpack/etc.) export component
var index = {
    install: install,
    DataVTemplate: __vue_component__,
    DataVCell: __vue_component__$1
};

export default index;
