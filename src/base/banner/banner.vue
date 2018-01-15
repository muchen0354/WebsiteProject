<template>
    <div id="banner">
        <div class="view1" >
            <div class="banner-title">全球领先的电子围栏技术</div>
            <div class="banner-introduce"><span>平衡&nbsp;</span>规范停放与用户体验,<span>&nbsp;自研&nbsp;</span>技术,拥有 <span>&nbsp;10多&nbsp;</span>项专利</div>
            <div class="banner-achievement clearfix">
              <div class="achievement-one"><img src="./imgs/banner_icon.png" alt=""><span>多个城市度假运营</span></div>
              <div class="achievement-two"><img src="./imgs/banner_icon.png" alt=""><span>多个城市度假运营</span></div>
              <div class="achievement-three"><img src="./imgs/banner_icon.png" alt=""><span>多个城市度假运营</span></div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          msg: '新的一页',
          isShow: 0
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  #banner{
    >div{
      width: 100%;
      height: 548px;
    }
    .view1{
      background-image: url('/static/imgs/banner_01.png');
      .banner-title{
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
    .view2{
      background-image: url('/static/imgs/banner_wg.png');
    }
    .view3{
      background-image: url('/static/imgs/banner_dzbq.png');
    }
    .view4{
      background-image: url('/static/imgs/banner_zndd.png');
    }
  }


</style>
