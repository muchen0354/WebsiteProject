<template>
    <div id="home-gateway">
      <div class="gateway-banner">
          <div class="banner-content clearfix">
            <div class="banner-left pull-left">
              <h1>网关</h1>
              <span>电子围栏停车位的</span>
              <span>智能终端</span>
            </div>
            <div class="banner-right pull-right">
              <img src="/static/imgs/banner_wg_img.png" alt="">
            </div>
          </div>
        </div>
      <div class="container">
        <int :message="int1"></int>
        <int :message="int2"></int>
        <int :message="int3"></int>
        <my-table :tableMessage="table"></my-table>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Int from '@/base/int/int'
  import MyTable from '@/base/table/table'
  export default {
    components: {
      Int,
      MyTable
    },
    data () {
      return {
        msg: '网关',
        int1: {
          title: '智能终端',
          int1: '通过物联网技术，实现停车位的在线管理功能',
          img: '../../../static/imgs/wg_img01.png'
        },
        int2: {
          title: '太阳能充电  智能环保',
          int1: '自身携带太阳能供电系统，可实现电量自给自足',
          int2: '另携带一节34615和一节1550电容后备电池，能维持工作两年以上，以备不时之需',
          img: '../../../static/imgs/wg_img02.png'
        },
        int3: {
          title: '造型简约 成本低廉',
          img: '../../../static/imgs/wg_img03.png'
        },
        table: [
          {
            num: 1,
            name: '支持系统',
            value: 'iOS系统支持iOS7以上，Andriod系统支持4.0以上，并且蓝牙版本4.0以上'
          },
          {
            num: 2,
            name: '产品尺寸',
            value: '158.6*152.6*25.5mm'
          },
          {
            num: 3,
            name: '防水性',
            value: '防水可用于户外'
          },
          {
            num: 4,
            name: '广播功率',
            value: '最低-30dbm,最高4dbm'
          },
          {
            num: 5,
            name: '广播周期',
            value: '最低100ms,最高1000ms'
          },
          {
            num: 6,
            name: '电池容量',
            value: '18000mAh'
          },
          {
            num: 7,
            name: '工作温度',
            value: '-20°C~80°C'
          },
          {
            num: 8,
            name: '硬件版本',
            value: 'V3.0'
          },
          {
            num: 9,
            name: '固件版本',
            value: 'V2.0'
          },
          {
            num: 10,
            name: '通信方式',
            value: '2G、3G'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  #home-gateway{
    .gateway-banner{
      width: 100%;
      height: 420px;
      padding-top: 128px;
      background-image: url('/static/imgs/banner_wg.png');
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
            margin-bottom: 28px;
            margin-left: 80px;
          }
          span{
            font-size: 48px;
            display: block;
          }
        }
        .banner-right{

        }
      }
    }
    .container{

    }

  }
</style>
