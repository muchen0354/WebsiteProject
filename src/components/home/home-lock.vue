<template>
    <div id="lock">
      <div class="banner">
        <div class="banner-content clearfix">
          <div class="banner-left pull-right">
            <h1>智能锁</h1>
            <span>蓝牙通信|语音提醒|GPS精准智能定位</span>
          </div>
          <div class="banner-right pull-left">
            <img src="/static/imgs/banner_zns_img.png" alt="">
          </div>
        </div>
      </div>
      <div class="container">
        <int :message="int1">
          <div class="in-int clearfix">
            <div class="in-int-box ">
              <div class="box-title">定位终止计费</div>
              <div class="box-content ">
                <span>当手机和蓝牙信号中断时，车锁会自动启用定位</span>
                <span>和通信功能，投过移动通信网络终止计费</span>
              </div>
            </div>
            <div class="in-int-box">
              <div class="box-title">防盗机制</div>
              <div class="box-content ">
                <span>当车辆上锁后被非法移动、超过72小时没又被</span>
                <span>使用，发送定位给运营人员寻找车辆</span>
              </div>
            </div>
            <div class="in-int-box">
              <div class="box-title">规范停车</div>
              <div class="box-content ">
                <span>当用户停车在非正常位置时会发出90分贝的提</span>
                <span>示音，减少用户违规停车行为</span>
              </div>
            </div>
          </div>
        </int>
        <int :message="int2"></int>
        <int :message="int3"></int>
        <int :message="int4"></int>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Int from '@/base/int/int'
  export default {
    components: {
      Int
    },
    data () {
      return {
        msg: '新的一页',
        int1: {
          title: 'GPS精准智能定位',
          int1: '通信功能平时处于休眠状态，遇到特殊场景时自动唤醒',
          img: '../../../static/imgs/zns_img_1.png'
        },
        int2: {
          title: '采用蓝牙通信技术，节省用电',
          int1: '车锁大部分情况通过蓝牙信号与手机相连，数据通过手机与服务器连接',
          int2: '大幅度降低电力消耗，无需充电的情况下可以使用2~3年',
          img: '../../../static/imgs/zns_img_2.png'
        },
        int3: {
          title: '语音提醒功能',
          int1: '车锁配备语音提醒功能，在用户开锁、关锁、违规骑行、寻找停车点',
          int2: '等情况下，会发出语音提醒用户注意',
          img: '../../../static/imgs/zns_img_3.png'
        },
        int4: {
          title: '极端环境，适应自如',
          int1: '气候适应性强，车锁在零下30°C至70°C都能正常工作，待机时间长达5年以上',
          img: '/static/imgs/zns_img_4.png'
        }

      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .banner{
    width: 100%;
    height: 420px;
    padding-top: 124px;
    background-size: 100% 548px;
    background-image: url('/static/imgs/banner_zns.png');
    .banner-content{
      width: 800px;
      height: 285px;
      /*border: 1px solid #fff;*/
      margin:0 auto ;
      .banner-left{
        margin-top: 30px;
        color:#fff;
        text-align: center;
        h1{
          font-size: 48px;
          width: 218px;
          height: 80px;
          line-height: 80px;
          font-weight: bold;
          border: 2px solid #fff;
          margin-bottom: 50px;
          /*margin-left: 80px;*/
        }
        span{
          font-size: 34px;
          display: block;
        }
      }
      .banner-right{

      }
    }
  }
  .in-int{
    width: 100%;
    margin-top: 50px;
    .in-int-box{
      width: 33.3%;
      float: left;
      text-align: center;
      .box-title{
        font-size: 18px;
        color:#333;
      }
      .box-content{
        margin-top: 24px;
        font-size: 14px;
        color: #999999;
        line-height: 20px;
        span{
          display: block;
        }
      }
    }
  }

</style>
