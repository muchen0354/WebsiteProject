<template>
    <div id="about">
      <div class="banner">
        <div class="banner-title2">关于我们</div>
        <div class="tag-msg">ABOUT US</div>
      </div>
      <div class="container">
        <div class="about-zriot">
          <div class="zriot-title">关于中融</div>
          <!--<div class="zriot-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广州中融物联网科技有限责任公司是一家集物联网电子围栏相关技术研发与生产销售于于一体的高科技公司，公司拥有独立的电子围栏硬件方案研发能力，并获得多项专利，公司主要业务是为共享单车提供电子围栏技术软硬件整体解决方案</div>-->
          <div class="zriot-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广州中融物联网科技有限公司是一家致力于为共享单车提供电子围栏软硬件解决方案的科技公司。公司拥有行业领先的电子围栏技术，其独立研发的电子围栏软硬件技术已获得多项专利，并在全国多个城市独家运营。</div>
          <div class="zriot-content">
            <div class="zc-one clearfix">
              <div class="zc-one-one">我们的景愿</div>
              <div>成为智慧交通出行系统建设的推动者和创新者</div>
            </div>
            <div class="zc-one clearfix">
              <div class="zc-one-one">我们的目标</div>
              <div>客户为先 勇于创新 积极进取</div>
            </div>
            <div class="zc-one clearfix">
              <div class="zc-one-one">我们的价值观</div>
              <div>为智能交通建设提供整套解决方案，助力低碳环保出行</div>
            </div>
          </div>
        </div>
        <div class="contact-us">
          <div class="zriot-title">联系我们</div>
          <div class="zriot-text">一切关于共享单车行业解决方案的问题，欢迎联系我们</div>
          <div class="zriot-content clearfix">
            <div class="zc-left">
              <div class="zc-left-title">
                <div class="icon"><img src="../../../static/imgs/icon_dh.png" alt=""></div>
                市场与商务合作：
              </div>
              020-37887477
            </div>
            <div class="zc-right">
              <div class="zc-left-title">
                <div class="icon"><img src="../../../static/imgs/icon_yx.png" alt=""></div>
                合作邮箱：bd@zriot.net
              </div>
              <div class="zc-left-title">
                <div class="icon"><img src="../../../static/imgs/icon_zb.png" alt=""></div>
                地址：广州市体育西路57号红盾大厦501自编A08
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          msg: 'about'
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .banner{
    width: 100%;
    height: 548px;
    padding-top: 163px;
    box-sizing: border-box;
    background-image: url('../../../static/imgs/banner03.png');
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
    .about-zriot{
      padding: 68px 0 ;
      border-bottom: 1px solid #d2d2d2;
      .zriot-title{
        text-align: center;
        font-size: 34px;
        color: #333333;
        margin-bottom: 40px;
      }
      .zriot-text{
        font-size: 18px;
        color: #999;
        margin-bottom: 68px;
      }
      .zriot-content{

        .zc-one{
          line-height: 44px;
          font-size: 18px;
          color: #333;
          margin-bottom: 20px;
          .zc-one-one{
            height: 44px;
            text-align: center;
            width: 148px;
            float:left;
            border: 1px solid #000;
            margin-right: 20px;
          }

        }
      }
    }
    .contact-us{
      padding: 68px 0 76px;
      border-bottom: 1px solid #d2d2d2;

      .zriot-title{
        text-align: center;
        font-size: 34px;
        color: #333333;
        margin-bottom: 40px;
      }
      .zriot-text{
        text-align: center;
        font-size: 18px;
        color: #999;
        margin-bottom: 80px;
      }
      .zriot-content{
        .zc-left{
          float:left;
          width: 50%;
          height: 65px;
          font-size: 36px;
          color: #999999;
          font-weight: bold;
          text-align: right;
          padding-right: 82px;
          box-sizing: border-box;
          .zc-left-title{
            padding-right: 134px;
            box-sizing: border-box;
            font-size: 14px;
            color: #999;
            margin-bottom: 17px;
            .icon{
              margin-right: 20px;
              width: 20px;
              text-align: center;
              display: inline-block;
              img{
                vertical-align: middle;
                margin-right: 20px;
              }
            }

          }
        }
        .zc-right{
          float:left;
          width: 50%;
          height: 65px;
          font-size: 36px;
          color: #999999;
          font-weight: bold;
          padding-left: 82px;
          box-sizing: border-box;
          .zc-left-title{
            font-size: 14px;
            color: #999;
            margin-bottom: 33px;
            .icon{
              width: 20px;
              margin-right: 20px;
              text-align: center;
              display: inline-block;
              img{
                vertical-align: middle;
                margin-right: 20px;
              }
            }

          }
        }

      }
    }
  }
</style>
