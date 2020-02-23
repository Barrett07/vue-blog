<template>
  <div>
    <flop-count :count="count"></flop-count>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {

  name: '',

  data () {
    return {
      count: 554643,
    }
  },

  props: {}, 

  created () {
    setInterval(()=>{
      this.randomVal();
    }, 5000)
  },

  mounted () {

  },

  methods: {

    randomVal () {
      let val = Math.floor(Math.random() * 100000)
      this.count = val;
    }
  },

  components: { },

  watch: {}

  }
</script>

<style lang='scss' scope >

</style>