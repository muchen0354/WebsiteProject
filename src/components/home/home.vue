<template>
    <div id="home">
      <div class="view1" >
        <div class="banner-title1">全球领先的电子围栏技术</div>
        <div class="banner-introduce"><span>平衡&nbsp;</span>规范停放与用户体验,<span>&nbsp;自研&nbsp;</span>技术, 拥有 <span>&nbsp;10多&nbsp;</span>项专利</div>
        <div class="banner-achievement clearfix">
          <div class="achievement-one"><img src="/static/imgs/banner_icon.png" alt=""><span>多个城市独家运营</span></div>
          <div class="achievement-two"><img src="/static/imgs/banner_icon.png" alt=""><span>建设停车位&nbsp; 10000+</span></div>
          <div class="achievement-three"><img src="/static/imgs/banner_icon.png" alt=""><span>累计实现单车停放 &nbsp;1亿次</span></div>
        </div>
      </div>
        <div class="container">

          <div class="white"></div>
          <div class="home-title">
            <span>中融为您提供</span>
            <span>全方位的共享单车综合解决方案</span>
          </div>
          <div class="carousel">
            <div class="carousel-content" ref="myCarousel">
              <ul class="clearfix" >
                <li v-for="(item,index) in carousel" v-bind:key="index" >
                  <div class="item-title">{{item.title}}</div>
                  <div class="item-introduce">
                    <span>{{item.introduce1}}</span>
                    <span>{{item.introduce2}}</span>
                    <span>{{item.introduce3}}</span>
                    <span>{{item.introduce4}}</span>
                  </div>
                </li>
              </ul>
            </div>
            <!--<div class="carousel-handle">-->
              <!--<div class="carousel-left pull-left" @click="moveRight" v-show="isShow == 'right'"> < </div>-->
              <!--<div class="carousel-right pull-right" @click="moveLeft" v-show="isShow == 'left'"> > </div>-->
            <!--</div>-->
          </div>
          <div class="home-tag">
            <div class="more-product" @click="goNextPage('/introduce')">
              + 更多产品
            </div>
            <ul class="clearfix">
              <li class="pull-left"
                  v-for="(item,index) in homeTag"
                  v-bind:key="index"
                  @click="goNextPage(item.path)"
                  ref="hover"
                  @mouseenter="enter"
                  @mouseleave="leave">
                <div class="tag-title">{{item.title}}</div>
                <ul>
                  <li>{{item.introduce1}}</li>
                  <li>{{item.introduce2}}</li>
                  <li>{{item.introduce3}}</li>
                </ul>
                <a href="javascript:;" >去了解</a>
              </li>
              <!--<li class="pull-left" @click="goNextPage('/introduce')" @mouseenter="enter" @mouseleave="leave">-->
                <!--<a href="javascript:;">更多产品</a>-->
              <!--</li>-->
            </ul>
          </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  // import Velocity from '../../../node_modules/velocity-animate/velocity'
  import Velocity from 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'

  export default {
    data () {
      return {
        msg: '新的一页',
        carousel: [
          {
            title: '电子围栏技术',
            introduce1: '自研技术，全球领先',
            introduce2: '快速介入，全面掌控',
            introduce3: '无需修改APP，无需更换车锁'
          },
          {
            title: '软硬件配套',
            introduce1: '从生产到施工',
            introduce2: '从运营到维修',
            introduce3: '多种软硬件配套，满足不同需求'
          },
          {
            title: '云端管理平台',
            introduce1: '远程管理硬件设备，可OTA升级',
            introduce2: '实时数据云端同步，追踪单车/设备',
            introduce3: '情况；提供大数据能力，为企业管',
            introduce4: '理、城市规划提供助力'
          },
          {
            title: '大数据系统',
            introduce1: '可为客户提供大数据系统',
            introduce2: '追踪共享单车、电子围栏数据',
            introduce3: '为企业运营、城市规划提供助力'
          }
        ],
        homeTag: [
          {
            title: '智能网关',
            introduce1: '电子围栏“大总管”',
            introduce2: '统一管理电子围栏所有硬件',
            introduce3: '实时上报停车位硬件状态',
            path: '/home/gateway'
          },
          {
            title: '智能道钉',
            introduce1: '采集蓝牙信号，监控目标车辆',
            introduce2: '超长续航，太阳能+备用电池双重保障',
            introduce3: '抗水抗压，能承受5吨重压',
            path: '/home/daoding'
          },
          {
            title: '电子标签',
            introduce1: '蓝牙标签，超长续航',
            introduce2: '一次性安装，便捷管理不同品牌单车',
            path: '/home/tag'
          },
          {
            title: '智能锁',
            introduce1: '蓝牙通信，语音提醒',
            introduce2: 'GPS精准智能定位',
            path: '/home/lock'
          }
        ],
        isShow: 'left'
      }
    },
    mounted () {
      this.imgPreLoad()
    },
    methods: {
      // moveLeft () {
      //   this.isShow = 'right'
      //   Velocity(this.$refs.myCarousel, {marginLeft: -375}, {duration: 500})
      // },
      // moveRight () {
      //   this.isShow = 'left'
      //   Velocity(this.$refs.myCarousel, {marginLeft: 0}, {duration: 500})
      // },
      imgPreLoad () {
        var images = []
        function preload () {
          for (let i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
          }
        }
        preload(
          '/static/imgs/banner01_1.png',
          '/static/imgs/banner_zns.png',
          '/static/imgs/banner_zndd.png',
          '/static/imgs/banner_dzbq.png',
          '/static/imgs/banner03.png',
          '/static/imgs/dzbq_img02.png',
          '/static/imgs/banner_wg.png',
          '/static/imgs/banner_01.png'
        )
      },
      goNextPage (path) {
        this.$router.push(path)
      },
      enter ($event) {
        console.log($event.target)
        $event.target.style.boxShadow = '0px 0px 20px 2px #666'
        Velocity($event.target, {zIndex: 1000, backgroundSize: '345px,500px'}, {duration: 0})
        Velocity($event.target, {width: 345, height: 500, translateX: -35, translateY: -40}, {duration: 200, Easing: 'ease-in-out'})
      },
      leave ($event) {
        Velocity($event.target, 'stop')
        $event.target.style.boxShadow = '0 0 0 #fff'
        Velocity($event.target, {width: 275, height: '100%', backgroundSize: '275px,458px', translateX: 0, translateY: 0, zIndex: 1}, {duration: 100})
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
    #home{
      width: 100%;
    }
    .view1{
      width: 100%;
      height: 548px;
      background-image: url('/static/imgs/banner_01.png');
    .banner-title1{
      color: #fff;
      font-size: 60px;
      font-weight: bold;
      padding-top: 140px;
      text-align: center;
    }
    .banner-introduce{
      color: #fff;
      font-size: 24px;
      text-align: center;
      margin-top: 32px;
      span{
        font-size: 32px;
      }
    }
    .banner-achievement{
      color: #ccc;
      font-size: 20px;
      display: flex;
      justify-content:center;
      margin-top: 86px;
      >div:nth-last-child(1){
        margin: 0;

      }
      >div{
        display: flex;
        vertical-align: middle;
        justify-content: center;
        float: left;
        margin-right: 70px;
        img{
          width: 40px;
          height: 36px;
          margin-right: 10px;
        }
      }
    }
  }
    .container{
      position: relative;
      .white{
        width: 300px;
        height: 500px;
        position: absolute;
        top: 130px;
        left: -300px;
        z-index: 100;
        background-color: #fff;
      }
      .home-title{
        margin-top: 67px;
        text-align: center;
        span:nth-child(1){
          font-size: 24px;
          color: #333;
          display: block;
          margin-bottom: 26px;
        }
        span:nth-child(2){
          margin-bottom: 72px;
          font-size: 14px;
          color: #999;
          display: block;
        }
      }
      .carousel{
        height: 370px;
        width: 100%;
        margin-bottom: 114px;
        position: relative;
        .carousel-content{
          overflow: hidden;
          ul{
            width: 200%;
            li{
              float: left;
              width: 275px;
              height: 370px;
              text-align: center;
              padding-top: 30px;
              border: 1px solid #e4f2f3;
              box-sizing: border-box;
              background-repeat: no-repeat;
              background-position: 60px 85px;
              border-right: none;
              .item-title{
                font-size: 24px;
                color: #000;
                margin-bottom: 194px;
              }
              .item-introduce{
                margin-top: 24px;
                span{
                  display: block;
                  font-size: 12px;
                  color: #444;
                  line-height: 1.8;
                }
              }
            }
            li:nth-child(1){
              background-image: url('../../../static/imgs/home_img_01.png');
            }
            li:nth-child(2){
              background-image: url('../../../static/imgs/home_img_02.png');
            }
            li:nth-child(3){
              background-image: url('../../../static/imgs/home_img_03.png');
            }
            li:nth-child(4){
              border-right: 1px solid #e4f2f3;
              background-image: url('../../../static/imgs/home_img_04.png');
            }
          }
        }
        .carousel-handle{
          /*width: 100%;*/
          height: 100px;
          line-height: 100px;
          text-align: center;
          position: absolute;
          top: 50%;
          left: -40px;
          right: -40px;
          z-index: 999;
          transform:translate(0,-50%);
          font-size:30px;
          color: #fff;
          .carousel-left{
            width: 30px;
            height: 100px;
            cursor: pointer;
            background-color:#d2d2d2;
          }
          .carousel-right{
            width: 30px;
            height: 100px;
            cursor: pointer;
            background-color:#d2d2d2;
          }
        }
      }
      .home-tag{
        width: 100%;
        height: 458px;
        padding-top: 36px;
        border-top: 1px solid #d2d2d2;
        box-sizing: border-box;
        margin-bottom: 230px;
        .more-product{
          font-size: 14px;
          color: #333333;
          margin-left: 1000px;
          width: 100px;
          height: 30px;
          margin-bottom: 10px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          border: 1px solid #f0f1f2;
        }
        >ul{
          width: 100%;
          height: 100%;
          position: relative;
          >li{
            width: 275px;
            height: 100%;
            box-sizing: border-box;
            border-right: 1px solid #fff;
            padding-top: 30px;
            padding-left: 30px;
            position: absolute;
            cursor: pointer;
            background-size:275px 100%;
            .tag-title{
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 36px;
            }
            ul{
              margin-bottom: 40px;
              li{
                font-size: 12px;
                color: #333;
                padding-bottom: 12px;
              }
            }
            a{
              position: absolute;
              top: 200px;
              display: block;
              width: 110px;
              height: 26px;
              border: 1px solid #000;
              font-size: 14px;
              line-height: 26px;
              text-align: center;
            }
          }
          >li:nth-child(1){
            left: 0;
            background-image: url('/static/imgs/img_01.png');
            .tag-title{
              color: #a46f24;
            }
          }
          >li:nth-child(2){
            left: 276px;
            background-image: url('/static/imgs/img_02.png');
            .tag-title{
              color: #3880c8;
            }
          }
          >li:nth-child(3){
            left: 551px;
            background-image: url('/static/imgs/img_03.png');
            .tag-title{
              color: #6062a7;
            }
          }
          >li:nth-child(4){
            left: 826px;
            background-image: url('../../../static/imgs/img_05.png');
            .tag-title{
              color: #6062a7;
            }
          }
          /*>li:nth-child(4){*/
            /*left: 826px;*/
            /*background-image: url('../../../static/imgs/img_05.png');*/
            /*a{*/
              /*top: 0;*/
              /*left: 0;*/
              /*width: 100%;*/
              /*height: 100%;*/
              /*font-size: 18px;*/
              /*color: #000;*/
              /*border: none;*/
              /*line-height: 430px;*/
              /*text-align: center;*/
              /*//transform:translate(-15px,-15px);*/
            /*}*/

          /*}*/
        }
      }
    }
</style>
