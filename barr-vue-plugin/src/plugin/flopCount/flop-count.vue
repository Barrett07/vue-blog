<!--  数字翻牌效果 -->
<template>
  <div>
    <div class="fc-container">
      <div class="item" v-for="(item, index) in String(value)" :key="index">
        <div class="li" :title="item" :style="{'margin-top':computedStyle(item)}">
          <div class="num">0</div>
          <div class="num">1</div>
          <div class="num">2</div>
          <div class="num">3</div>
          <div class="num">4</div>
          <div class="num">5</div>
          <div class="num">6</div>
          <div class="num">7</div>
          <div class="num">8</div>
          <div class="num">9</div>
        </div>
        <div class="comma">,</div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {

  name: 'flop-count',

  data () {
    return {
      value: 65536,
    }
  },

  computed: {
    
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
    computedStyle(item){
      let val = 32*Number(item);
      return `-${val}px`;
    },
    randomVal () {
      let val = Math.floor(Math.random() * 100000)
      this.value = val;
    }
  },

  components: { },

  watch: {}

  }
</script>

<style lang='scss' scope >
.item {
  height: 32px;
  overflow: hidden;
  line-height: 32px;
  display: inline-block;
  .li {
    transition: all linear .6s;
  }
}
</style>