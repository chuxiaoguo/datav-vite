// Import vue comp
import DataVTemplate from './preview';
import DataVCell from './cell';

// Declare install function executed by Vue.use()
function install(Vue) {
    if ((install as any).installed) return;
    (install as any).installed = true;
    Vue.component(DataVTemplate.name, DataVTemplate);
    Vue.component(DataVCell.name, DataVCell);
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = (global as any).Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default {
    install,
    DataVTemplate,
    DataVCell
};