<template>
    <div id="case">
      <div class="banner">
        <div class="banner-title2">经过验证的 &nbsp;&nbsp;才值得信赖</div>
        <div class="tag-msg">全国多地独家运营&nbsp;|&nbsp;10000+停车位建设&nbsp;|&nbsp;100000000次停车操作</div>
      </div>
      <div class="container">
        <!--=======================================方案案例=========================================-->
        <div class="case-one" v-if="myCase1 === 1">
          <div class="case-title">单品牌电子围栏</div>
          <div class="case-handle">
            <div class="handle-left pull-left" @click="change1(1)" :class="{active:myCase1 ===1}">方案介绍</div>
            <div class="handle-right pull-left" @click="change1(2)" :class="{active:myCase1 ===2}">成功案例</div>
          </div>
          <div class="case-content">
            <div class="case-fangan">
              <div class="case-img clearfix">
                  <div class="img">
                    <img   src="../../../static/imgs/cp01.png" alt="">
                    <div class="case-hover" ></div>
                    <div @mouseenter="enter($event,'智能道钉')" @mouseleave="leave" class="case-hover2">智能道钉</div>
                  </div>
                  <div class="jia"><img src="../../../static/imgs/icon_jia.png" alt=""></div>
                  <div class="img">
                    <img src="../../../static/imgs/cp02.png" alt="">
                    <div class="case-hover" ></div>
                    <div @mouseenter="enter($event,'智能道钉')" @mouseleave="leave" class="case-hover2">智能锁</div>
                  </div>
                  <div class="jia"><img src="../../../static/imgs/icon_or.png" alt=""></div>
                  <div class="img">
                    <img src="../../../static/imgs/cp03.png" alt="">
                    <div class="case-hover" ></div>
                    <div @mouseenter="enter($event,'智能道钉')" @mouseleave="leave" class="case-hover2">SDK</div>
                  </div>
                </div>
              <div class="case-intro">单品牌电子围栏是通过智能道钉发射特定的蓝牙信号，并通过手机对4.0锁扫描，以此判断是否在停车位</div>
              <div class="case-intro1"><span>适用场景&nbsp;:&nbsp;</span>适用于单一品牌共享单车的管理，快速实现电子围栏功能，有序停放，降低运营成本</div>
            </div>
          </div>
        </div>
        <!--=======================================方案案例=========================================-->



        <!--=======================================成功案例=========================================-->
        <div class="case-two" v-if="myCase1 === 2">
          <div class="case-title">单品牌电子围栏</div>
          <div class="case-handle">
            <div class="handle-left pull-left" @click="change1(1)" :class="{active:myCase1 ===1}">方案介绍</div>
            <div class="handle-right pull-left" @click="change1(2)" :class="{active:myCase1 ===2}">成功案例</div>
          </div>
          <div class="case-content">
            <div class="case-fangan">
              <div class="case-img clearfix">
                <div class="img">
                  <div class="case-hover" @mouseleave="leave"></div>
                  <img src="../../../static/imgs/pic01.png"  alt="">
                  <div class="case-detail">
                    <div class="detail-title">湖南省株洲市</div>
                    <div class="detail-text">株洲市电子围栏停车位总规划2600个，一期已在密集市政路上密集铺设2600个停车位，后期将会将停车位建设到村镇，公寓等需求点，在规范停放的基础上，极大地便捷市民用车</div>
                  </div>
                </div>
                <div class="jia"></div>
                <div class="img">
                  <img src="../../../static/imgs/pic02.png" alt="">
                  <div class="case-detail">
                    <div class="detail-title">福建省龙海市</div>
                    <div class="detail-text">龙海市电子围栏管控面积为9平方公里，已建设178个停车位，成为电子围栏样板城市</div>
                  </div>
                </div>
                <div class="jia"></div>
                <div class="img">
                  <img src="../../../static/imgs/pic03.png" alt="">
                  <div class="case-detail">
                    <div class="detail-title">广州市增城区+荔城镇</div>
                    <div class="detail-text">增城区+荔城镇电子围栏管控面积为19平方公里，共建设有226个停车位，是最早使用电子围栏实现规范停放的区域之一</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--=======================================成功案例=========================================-->



        <!--=======================================方案案例=========================================-->
        <div class="case-one" v-if="myCase2 === 1">
          <div class="case-title">多品牌电子围栏</div>
          <div class="case-handle">
            <div class="handle-left pull-left" @click="change2(1)" :class="{active:myCase2 ===1}">方案介绍</div>
            <div class="handle-right pull-left" @click="change2(2)" :class="{active:myCase2 ===2}">成功案例</div>
          </div>
          <div class="case-content">
            <div class="case-fangan">
              <div class="case-img clearfix">
                <div class="img">
                  <img src="../../../static/imgs/cp04.png" alt="">
                  <div class="case-hover" ></div>
                  <div @mouseenter="enter($event,'智能道钉')" @mouseleave="leave" class="case-hover2">网关</div>
                </div>
                <div class="jia"><img src="../../../static/imgs/icon_jia.png" alt=""></div>
                <div class="img">
                  <img src="../../../static/imgs/cp05.png" alt="">
                  <div class="case-hover" ></div>
                  <div @mouseenter="enter($event,'智能道钉')" @mouseleave="leave" class="case-hover2">智能道钉</div>
                </div>
                <div class="jia"><img src="../../../static/imgs/icon_jia.png" alt=""></div>
                <div class="img">
                  <img src="../../../static/imgs/cp06.png" alt="">
                  <div class="case-hover" ></div>
                  <div @mouseenter="enter($event,'智能道钉')" @mouseleave="leave" class="case-hover2">电子标签</div>
                </div>
              </div>
              <div class="case-intro">多品牌电子围栏由网关、智能道钉、电子标签三个设备组成。具有介入方便、兼容性强、无修改App的特点。可快速准确地实现共享单车的有序停放和总量控制</div>
              <div class="case-intro1"><span>适用场景&nbsp;:&nbsp;</span>多品牌电子围栏主要适用于已有多家共享单车企业进驻，需进行总量、有序停放、违停管理</div>
            </div>
          </div>
        </div>
        <!--=======================================方案案例=========================================-->



        <!--=======================================成功案例=========================================-->
        <div class="case-two MB" v-if="myCase2 === 2">
          <div class="case-title">多品牌电子围栏</div>
          <div class="case-handle">
            <div class="handle-left pull-left" @click="change2(1)" :class="{active:myCase2 ===1}">方案介绍</div>
            <div class="handle-right pull-left" @click="change2(2)" :class="{active:myCase2 ===2}">成功案例</div>
          </div>
          <div class="case-content">
            <div class="case-fangan">
              <div class="case-img clearfix">
                <div class="img">
                  <div class="hhhh1">
                    <img class="img-img"  src="../../../static/imgs/icon_jz.png" alt="">
                    <div class="img-text">试点建设中</div>
                  </div>


                  <!--<div class="case-detail">-->
                    <!--<div class="detail-title">湖南省株洲市</div>-->
                    <!--<div class="detail-text">株洲市电子围栏停车位总规划2600个，一期已在密集市政路上密集铺设2600个停车位，后期将会将停车位建设到村镇，公寓等需求点，在规范停放的基础上，极大地便捷市民用车</div>-->
                  <!--</div>-->
                </div>
                <div class="jia"></div>
                <div class="img">
                  <div class="hhhh1">
                    <img class="img-img"  src="../../../static/imgs/icon_jz.png" alt="">
                    <div class="img-text">试点建设中</div>
                  </div>
                  <!--<img src="../../../static/imgs/pic02.png" alt="">-->
                  <!--<div class="case-detail">-->
                    <!--<div class="detail-title">福建省龙海市</div>-->
                    <!--<div class="detail-text">龙海市电子围栏管控面积为9平方公里，已建设178个停车位，成为电子围栏样板城市</div>-->
                  <!--</div>-->
                </div>
                <div class="jia"></div>
                <div class="img">
                  <div class="hhhh1">
                    <img class="img-img"  src="../../../static/imgs/icon_jz.png" alt="">
                    <div class="img-text">试点建设中</div>
                  </div>
                  <!--<img src="../../../static/imgs/pic03.png" alt="">-->
                  <!--<div class="case-detail">-->
                    <!--<div class="detail-title">广州市增城区+荔城镇</div>-->
                    <!--<div class="detail-text">增城区+荔城镇电子围栏管控面积为19平方公里，共建设有226个停车位，是最早使用电子围栏实现规范停放的区域之一</div>-->
                  <!--</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--=======================================成功案例=========================================-->
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Velocity from 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'

  export default {
    data () {
      return {
        msg: 'case',
        myCase1: 1,
        myCase2: 1
      }
    },
    created () {
      this.myCase1 = parseInt(sessionStorage.getItem('myCase1')) || 1
      this.myCase2 = parseInt(sessionStorage.getItem('myCase2')) || 1
    },
    methods: {
      enter ($event, text) {
        // console.log($event, text)
        Velocity($event.target.previousElementSibling, {width: 282, height: 282}, {duration: 100, Easing: 'ease-in-out'})
        Velocity($event.target, {opacity: 1}, {duration: 100, Easing: 'ease-in-out'})
        // $event.target.previousElementSibling.innerText = text
      },
      leave ($event) {
        Velocity($event.target, 'stop')
        Velocity($event.target, {opacity: 0}, {duration: 100, Easing: 'ease-in-out'})
        Velocity($event.target.previousElementSibling, {width: 0, height: 0}, {duration: 200, Easing: 'ease-in-out'})
      },
      change1 (val) {
        sessionStorage.setItem('myCase1', val)
        this.myCase1 = parseInt(sessionStorage.getItem('myCase1'))
      },
      change2 (val) {
        sessionStorage.setItem('myCase2', val)
        this.myCase2 = parseInt(sessionStorage.getItem('myCase2'))
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

  .active{
    color: #22c0f4;
    border: 1px solid #22c0f4 !important;
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
  .container {
    .case-one {
      padding: 74px 0;
      border-bottom: 1px solid #d2d2d2;
      .case-title {
        text-align: center;
        font-size: 24px;
        color: #333;
        margin-bottom: 40px;
      }
      .case-handle {
        width: 320px;
        height: 40px;
        color: #999999;
        font-size: 14px;
        /*background-color: #eee;*/
        margin: 0 auto 40px;
        line-height: 40px;
        div {
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
        }
        .handle-left {
          width: 144px;
          height: 40px;
          border: 1px solid #d2d2d2;
          border-radius: 20px;
        }
        .handle-right {
          width: 144px;
          height: 40px;
          margin-left: 32px;
          border: 1px solid #d2d2d2;
          border-radius: 20px;
        }
      }
      .case-content {
        .case-fangan {
          text-align: center;
          .case-img {
            .img {
              width: 282px;
              height: 282px;
              float: left;
              position: relative;
              .case-hover{
                box-sizing: border-box;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 0;
                height: 0;
                z-index: 999;
                text-align: center;
                font-size: 36px;
                color: #fff;
                padding-top: 42%;
                background-color: rgba(0,0,0,.3);
              }
              .case-hover2{
                box-sizing: border-box;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 282px;
                height: 282px;
                z-index: 1000;
                text-align: center;
                font-size: 36px;
                color: #fff;
                line-height: 282px;
                opacity: 0;
              }
              img{
                position: absolute;
                top: 0;
                left: 0;
                z-index: 998;
                margin-bottom: 40px;
              }
            }
            .jia {
              box-sizing: border-box;
              /*padding-left: 37px;*/
              padding-top: 114px;
              width: 127px;
              float: left;
            }
          }
          .case-intro{
            height: 94px;
            line-height: 94px;
            font-size: 14px;
            color: #999999;
          }
          .case-intro1{
            font-size: 14px;
            height: 32px;
            line-height: 32px;
            color: #191919;
            background-image: url('../../../static/imgs/jbs.png');
            span{
              font-weight: bold;
            }
          }
        }
      }
    }
    .case-two {
      padding: 74px 0;
      border-bottom: 1px solid #d2d2d2;
      .case-title {
        text-align: center;
        font-size: 24px;
        color: #333;
        margin-bottom: 40px;
      }
      .case-handle {
        width: 320px;
        height: 40px;
        color: #999999;
        font-size: 14px;
        /*background-color: #eee;*/
        margin: 0 auto 40px;
        line-height: 40px;
        div {
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
        }
        .handle-left {
          width: 144px;
          height: 40px;
          border: 1px solid #d2d2d2;
          border-radius: 20px;
        }
        .handle-right {
          width: 144px;
          height: 40px;
          margin-left: 32px;
          border: 1px solid #d2d2d2;
          border-radius: 20px;
        }
      }
      .case-content {
        .case-fangan {
          .case-img {
            >div {
              width: 282px;
              float: left;
            }
            .jia {
              box-sizing: border-box;
              /*padding-left: 37px;*/
              text-align: center;
              padding-top: 114px;
              width: 127px;
            }
            .img{
              >img{
                margin-bottom: 40px;
              }
              .case-detail{
                .detail-title{
                  font-size: 16px;
                  color: #666;
                  padding-bottom: 20px;
                }
                .detail-text{
                  font-size: 14px;
                  color: #999;
                }
              }
            }
          }
        }
      }
    }
    .MB{
      padding-bottom: 142px;
    }
    .hhhh1{
      width: 282px;
      height: 282px;
      line-height: 282px;
      text-align: center;
      background-color: rgba(0,0,0,.3);
      position: relative;
      img{

      }
      .img-text{
        width: 282px;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        font-size: 24px;
        line-height: 400px;
      }
    }
  }
</style>
