<template>
    <div id="table">
      <div class="title">产品参数</div>
      <div class="table">
        <div class="table-header">
          <ul>
            <li>序号</li>
            <li>指标名称</li>
            <li>指标值</li>
          </ul>
        </div>
        <div class="table-content">
          <ul>
            <li class="clearfix" v-for="(item,index) in message" v-bind:key="index">
              <div class="content-num">{{item.num}}</div>
              <div class="content-name">{{item.name}}</div>
              <div class="content-value">{{item.value}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: [
        'tableMessage'
      ],
      data () {
        return {
          message: this.tableMessage
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  div{
    width:inherit;
  }
  #table{
    width: 100%;
    margin-bottom: 140px;
    /*height: 500px;*/
    /*background-color: #eee;*/
    padding-top: 62px;
    .title{
      margin-bottom: 40px;
      text-align: center;
      font-size: 24px;
      color: #333;
    }
    .table{
      width: 100%;
      border: 1px solid #333;
      box-sizing: border-box;
      .table-header{
        width: 100%;
        ul{
          width: 100%;
          height: 62px;
          box-sizing: border-box;
          li{
            float: left;
            box-sizing: border-box;
            text-align: center;
            line-height: 62px;
            font-size: 24px;
            color: #626262;
            border-right: 1px solid #333;
            border-bottom: 1px solid #333;
          }
          li:nth-child(1){
            width: 120px;
          }
          li:nth-child(2){
            width: 210px;
          }
          li:nth-child(3){
            width: 768px;
            border-right: none;
          }
        }
      }
      .table-content{
        ul{
          li{
            height: 62px;
            line-height: 62px;
            border-bottom: 1px solid #333;
            >div{
              float: left;
              box-sizing: border-box;
              text-align: center;
              font-size: 18px;
              color: #626262;
              border-right: 1px solid #333;
            }
            >div:nth-child(1){
              width: 120px;
            }
            >div:nth-child(2){
              width: 210px;
            }
            >div:nth-child(3){
              width: 768px;
              border-right: none;
              padding-left: 20px;
              text-align: left;
            }
          }
          li:nth-last-child(1){
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
