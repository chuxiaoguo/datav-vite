import DataVCell from './cell.vue';

/* istanbul ignore next */
(DataVCell as any).install = function(Vue) {
  Vue.component(DataVCell.name, DataVCell);
};

export default DataVCell;