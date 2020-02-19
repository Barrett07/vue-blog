<template>
  <div>
    <person-info-table
      :table="table"
      :tableColumn="3"
    ></person-info-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {

  name: '',

  data () {
    return {
      table: [
        [
          {title: '姓名', value: '', prop: 'name'},
          {title: '姓名', value: '', prop: 'name'},
          {title: '姓名', value: '', prop: 'name'},
        ],
        [
          {title: '姓名', value: '', prop: 'name'},
          {title: '姓名', value: '', prop: 'name'},
          {},
        ],
      ],
    }
  },

  props: {}, 

  created () {

  },

  mounted () {

  },

  methods: {

  },

  components: { },

  watch: {}

  }
</script>

<style lang='scss' scope >

</style>