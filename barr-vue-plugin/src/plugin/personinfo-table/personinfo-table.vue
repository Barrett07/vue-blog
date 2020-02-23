<!-- 基本信息表格 -->
<template>
  <div>
    <div class="table-title"><span></span>{{tableTitle}}</div>
    <div class="container-box">
      <!-- 行 -->
      <div v-for="(item, key) in table" class="row-item" :key="key"  >
        <!-- 列 -->
        <div  v-for="(ele, index) in item" :key="index" :style="{width: itemWidth}">
          <div  class="title">
            {{ele.title}}
          </div>
          <div class="value dtl-value">
            <div  >
              {{!!ele.formatCd?codeFormatter(ele.value, ele.formatCd):ele.value}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {

  name: 'person-info-table',

  data () {
    return {
    }
  },

  props: {
    tableTitle: {
      type: String,
      default: '表格',
    },
    tableColumn: {
      required: true,
      type: Number,
      default: 3,
    },
    table: {
      required: true,
      type: Array,
      default: ()=>{[]},
    }
  }, 

  computed : {
    itemWidth(){
      return 100/this.tableColumn + '%';
    }
  },

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
.container-box {
  background: #fff;
  margin: 10px auto;
  // width: 80%;
  min-width: 1200px;
  border: 1px solid #E4E4E4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap; 
  & > .row-item {
    border-bottom: 1px solid #E4E4E4;
    width: 100%;
    position: relative;
    display: flex;

    & > div {
      display: flex;
      font-size: 14px;
      border-right: 1px solid #E4E4E4;
      .title {
        width: 150px;
        background-color: #F9FAFC;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 8px;
        border-right: 1px solid #E4E4E4;
      }
      .value {
        flex: 1;
        min-height: 26px;
        padding: 8px;
        max-height: 150px;
        overflow-y: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      } 
    }
  }
}
.dtl-value::-webkit-scrollbar {
  width: 4px;
}
  .dtl-value::-webkit-scrollbar-track { 
}
.dtl-value::-webkit-scrollbar-thumb {
  background-color: #eaeaea;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
.table-title {
  padding-left: 20px;
  margin-top: 20px;
  position: relative;
  & > span {
    width: 10px;
    height: 20px;
    background-color: #888e98;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style> 