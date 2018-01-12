<template>
    <div id="introduce">
      <div class="banner">
        <div class="banner-title2">技术为共享而生</div>
        <div class="tag-msg">电子围栏&nbsp;|&nbsp;精确定位&nbsp;|&nbsp;超长续航&nbsp;|&nbsp;自研技术</div>
        <!--<div class="img"><img src="../../../static/imgs/banner_dzbq_img.png" alt=""></div>-->
      </div>
      <div class="container">
          <ul class="clearfix">
            <li v-for="(item,index) in list" v-bind:key="index" class="pull-left">
              <div class="introduce-img"><img :src="item.img" alt=""></div>
              <div class="introduce-text">
                <div class="introduce-title">{{item.title}}</div>
                <div class="introduce-explain">
                  <span>{{item.explain1}}</span>
                  <span>{{item.explain2}}</span>
                </div>
                <div class="introduce-init">
                  <span>{{item.size}}</span>
                  <span>{{item.weight}}</span>
                  <span>{{item.duration}}</span>
                  <span>{{item.battery}}</span>
                  <span>{{item.signal}}</span>
                  <span>{{item.broadcast}}</span>
                  <span>{{item.temperature}}</span>
                  <span>{{item.light}}</span>
                  <span>{{item.frequency}}</span>
                  <span>{{item.dzwl}}</span>
                  <span>{{item.voice}}</span>
                  <span>{{item.openMethod}}</span>
                  <span>{{item.platform}}</span>
                  <span>{{item.positionMethod}}</span>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          msg: 'introduce',
          list: [
            {
              img: '../../../static/imgs/cp_01.png',
              title: '电子围栏立杆V1.0',
              explain: '',
              size: '尺寸: 2.5m 高30*50cm',
              weight: '',
              duration: '',
              battery: '',
              signal: '',
              broadcast: '',
              temperature: ''
            },
            {
              img: '../../../static/imgs/cp_02.png',
              title: '信标（beacon）',
              explain1: '配合立杆使用 i1方形已停产',
              size: '尺寸: 45*28*11mm',
              weight: '重量: 31g',
              duration: '工作时长: 18个月',
              battery: '',
              signal: '',
              broadcast: '',
              temperature: ''
            },
            {
              img: '../../../static/imgs/cp_03.png',
              title: '信标（beacon）',
              explain1: '配合立杆使用 i7 V5圆形',
              size: '尺寸: 35*35*10mm',
              weight: '重量: 12g',
              duration: '工作时长: 18个月',
              battery: '',
              signal: '',
              broadcast: '',
              temperature: ''
            },
            {
              img: '../../../static/imgs/cp_04.png',
              title: '电子桩',
              explain1: '配合立杆使用 悬挂式V1.0 黑色',
              size: '尺寸: 88*46*16.3mm',
              weight: '重量: 54g',
              duration: '工作时长: 2年',
              battery: '电池: 1000mAh',
              signal: '信号强度: 0dbm',
              broadcast: '广播频率: 默认500ms',
              temperature: '工作温度: -20°C~60°C'
            },
            {
              img: '../../../static/imgs/cp_05.png',
              title: '第一代智能道钉',
              explain1: '必须安装在有阳光的地方 V1.0已停产',
              size: '尺寸: 110*104*30mm',
              weight: '重量: 244g',
              duration: '工作时长: 默认参数18个月',
              battery: '内置电池: CR2477*1',
              signal: '信号强度: 0dbm',
              broadcast: '广播频率: 默认500ms',
              temperature: '工作温度: -20°C~60°C',
              light: '灯光常亮'
            },
            {
              img: '../../../static/imgs/cp_06.png',
              title: '第二代智能道钉',
              explain1: '必须安装在有阳光的地方 V2.0纯发射信号',
              size: '尺寸: 105*100*27mm',
              weight: '重量: 206g',
              duration: '工作时长: 2年以上',
              battery: '内置电池: CR2477*2',
              signal: '信号强度: 0dbm',
              broadcast: '广播频率: 默认500ms',
              temperature: '工作温度: -20°C~60°C',
              light: '只在电量>50%，晚上19：00~23：00才亮 每2s闪一次'
            },
            {
              img: '../../../static/imgs/cp_07.png',
              title: '电子标签',
              explain1: '安装在后轮 V1.0',
              explain2: '不同运营商可定制不同颜色',
              size: '尺寸: 88*46*16.3mm',
              weight: '重量: 24g',
              duration: '工作时长: 2年以上',
              battery: '内置电池: CR2477*2',
              signal: '信号强度: 0dbm',
              broadcast: '广播频率: 默认500ms',
              temperature: '工作温度: -20°C~60°C'
            },
            {
              img: '../../../static/imgs/cp_08.png',
              title: '采集器',
              explain1: '必须安装在有阳光的地方 V1.0兼容道钉',
              size: '尺寸: 105*100*27',
              weight: '重量: 210g',
              duration: '工作时长: 2年以上',
              battery: '内置电池: CR2477*2',
              signal: '信号强度: 0dbm',
              broadcast: '广播频率: 默认500ms',
              temperature: '工作温度: -20°C~60°C',
              light: '只在电量>50%，晚上19：00~23：00才亮 每2s闪一次',
              frequency: '采集频率: 可调，最高每分钟一次'
            },
            {
              img: '../../../static/imgs/cp_09.png',
              title: '智能网关',
              explain1: '必须安装在有阳光的地方 V1.0',
              size: '尺寸: 158.6*152.6*25.5mm',
              duration: '工作时长: 2年以上',
              battery: '电池: 18000mAh',
              frequency: '每5分钟发送采集数据一次'
            },
            {
              img: '../../../static/imgs/cp_10.png',
              title: '智能锁-3代锁',
              explain1: 'V3.7',
              size: '尺寸: 200*136.5*62.2mm',
              weight: '重量: 0.9kg',
              duration: '工作时长: 2年，5次开关锁/天',
              communication: '通信方式: BLE',
              battery: '电池: 8000mAh',
              dzwl: '电子围栏: 智能停车指引',
              voice: '语音功能: 智能语音提醒',
              openMethod: '解锁方式: Bluetooth近距离解锁',
              platform: '软件平台: T1'
            },
            {
              img: '../../../static/imgs/cp_11.png',
              title: '智能锁-4代锁',
              explain1: '2G版',
              size: '尺寸: 212.5*139*67mm',
              weight: '重量: 1.1kg',
              duration: '工作时长: 2年，5次开关锁/天',
              communication: '通信方式: BLE+2G',
              battery: '电池: 8000mAh',
              dzwl: '电子围栏: 智能停车指引',
              voice: '语音功能: 智能语音提醒',
              openMethod: '解锁方式: Bluetooth近距离解锁',
              platform: '软件平台: NORDIC',
              positionMethod: '定位方式: BD定位、GPS定位'
            }
          ]
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  div{
    box-sizing: border-box;
  }
  .banner{
    width: 100%;
    height: 548px;
    padding-top: 163px;
    box-sizing: border-box;
    background-image: url('../../../static/imgs/banner01_1.png');
    .banner-title{
      margin: 0 auto;
      margin-bottom: 46px;
    }
    .tag-msg{
      font-size: 34px;
      color: #fff;
      text-align: center;
      margin-bottom: 40px;
    }
    .img{
      width: 100%;
      img{
        width: 757px;
        height: 163px;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .container{
    ul{
      margin: 68px 0;
      li{
        box-sizing: border-box;
        /*padding-right: 20px;*/
        margin-bottom: 68px;
        width: 500px;
        height: 282px;
        border: 1px solid #d2d2d2;
        position: relative;
        .introduce-img{
          width: 225px;
          height: 100%;
          /*background-color: #999;*/
          position: absolute;
          left: 0;
          img{
            position: absolute;
            left: 50%;
            top: 50%;
            transform:translate(-50%,-50%);
          }
        }
        .introduce-text{
          width: 260px;
          position: absolute;
          left: 226px;
          top: 50%;
          transform: translateY(-50%);
          .introduce-title{
            font-size: 26px;
            color: #333;
            margin-bottom: 12px;
          }
          .introduce-explain{
            font-size: 14px;
            color: #626262;
            font-weight: lighter;
            margin-bottom: 12px;
            span{
              display: block;
            }
          }
          .introduce-init{
            span{
              font-size: 12px;
              color: #999;
              font-weight: lighter;
              display: block;
              margin-bottom: 2px;
            }
          }
        }
      }
      li:nth-child(2n){
        margin-left: 100px;
      }
    }
  }
</style>
