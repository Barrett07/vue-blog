import personinfoTable from './personinfo-table.vue';

let ltPlugin = {}

ltPlugin.install = (Vue, options) => {
  Vue.component(personinfoTable.name, personinfoTable)
}

export default ltPlugin;