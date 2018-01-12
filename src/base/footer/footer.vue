<template>
    <div id="footer">
        <div class="footer-text">
          <ul>
            <li>Copyright&copy;2016-2017 &nbsp;zriot.net</li>
            <li>广州中融物联网信息科技有限责任公司</li>
            <li>备案号:粤IPC备17128473号-1</li>
          </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          msg: '新的一页'
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  #footer{
    width: 100%;
    height: 96px;
    background-color: #191919;
    color: #666;
    font-size: 14px;
    .footer-text{
      width: 100%;
      ul{
        width: 881px;
        height: 100%;
        margin: 0 auto;
        padding-top: 40px;
        box-sizing: border-box;
        /*background-color: #333;*/
        li{
          float: left;
          height: 12px;
          padding: 0 38px;
        }
        li:nth-child(2){
          border-left:1px solid #666 ;
          border-right:1px solid #666 ;
        }
      }
    }
  }
</style>
