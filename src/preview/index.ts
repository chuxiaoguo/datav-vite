import DataVTemplate from './preview.vue';
import { PluginObject } from 'vue';

/* istanbul ignore next */
(DataVTemplate as unknown as PluginObject<any>).install = function(Vue) {
  Vue.component(DataVTemplate.name, DataVTemplate);
};

export default DataVTemplate;