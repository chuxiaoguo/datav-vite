import DataVTemplate from './preview.vue';
import { VueConstructor } from 'vue';

/* istanbul ignore next */
(DataVTemplate as VueConstructor).install = function(Vue) {
  Vue.component(DataVTemplate.name, DataVTemplate);
};

export default DataVTemplate;