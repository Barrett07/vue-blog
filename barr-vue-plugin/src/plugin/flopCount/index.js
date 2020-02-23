import flopCnt from './flop-count.vue'
let flop={};
flop.install = (Vue, Option) => {
  Vue.component(flopCnt.name, flopCnt)
}
export default flop;