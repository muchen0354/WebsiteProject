<template>
    <div id="daoding">
        <div class="banner">
          <div class="banner-img"><img src="../../../static/imgs/banner_zndd_img.png" alt=""></div>
          <div class="banner-title">智能道钉</div>
        </div>
      <div class="container">
        <int :message="int1">
          <div class="in-int clearfix">
            <div class="in-int-box ">
              <div class="box-title">信号接收功能</div>

            </div>
            <div class="in-int-box">
              <div class="box-title">广播功能</div>
            </div>
            <div class="in-int-box">
              <div class="box-title">识别品牌功能</div>
            </div>
            <div class="in-int-box">
              <div class="box-title">精准定位功能</div>
            </div>
          </div>
        </int>
        <int :message="int2"></int>
        <int :message="int3"></int>
        <int :message="int4"></int>
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
        int1: {
          title: '功能介绍',
          img: '../../../static/imgs/zndd_img01.png'
        },
        int2: {
          title: '太阳能充电  智能环保',
          int1: '采集器带有太阳能电池板，可实现电池电量自给自足，另携带2节CR2477后备电池，工作时长2年以上',
          int2: '只在电量>50%，晚上19：00-23：00才亮，每2s闪一次',
          int3: '单词采集时长10s，采集频率可调最高每分钟1次',
          img: '../../../static/imgs/zndd_img02.png'
        },
        int3: {
          title: '造型小巧  安装方便',
          int1: '采集器造型小巧，能满足共享单车便利性的需求',
          int2: '采用地钉的形式可快速安装电子围栏停车位',
          img: '../../../static/imgs/zndd_img03.png'
        },
        int4: {
          title: '极端环境  适应无阻',
          int1: '气候适应性，采集器在-20°C~60°C都能正常工作',
          img: '../../../static/imgs/zndd_img04.png'
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
            value: '105*100*27mm'
          },
          {
            num: 3,
            name: '防水性',
            value: '防水可用于户外'
          },
          {
            num: 4,
            name: '广播功率',
            value: '默认500dbm'
          },
          {
            num: 5,
            name: '广播周期',
            value: '最低100ms,最高1000ms'
          },
          {
            num: 6,
            name: '电池容量',
            value: '1000mAh'
          },
          {
            num: 7,
            name: '工作温度',
            value: '-20°C~60°C'
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
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  #daoding{
    .banner{
      height: 538px;
      padding-top: 140px;
      box-sizing: border-box;
      position: relative;
      background-image: url('../../../static/imgs/banner_zndd.png');
      .banner-img{
        width: 315px;
        margin: 0 auto ;
      }
      .banner-title{
        top: 50%;
        left: 50%;
        transform: translate(100%);
        position: absolute;
      }
    }
  }

  .in-int{
    width: 100%;
    margin-top: 50px;
    .in-int-box{
      width: 25%;
      float: left;
      text-align: center;
      box-sizing: border-box;
      .box-title{
        font-size: 18px;
        color:#666;
      }
    }
    >div:nth-child(1){
      padding-left: 45px;
    }
    >div:nth-child(2){
      padding-left: 15px;
    }
    >div:nth-child(3){
      padding-right: 15px;
    }
    >div:nth-child(4){
      padding-right: 45px;
    }
  }
</style>
