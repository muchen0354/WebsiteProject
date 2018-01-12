<template>
    <div id="int">
      <div class="home-title">
        <span>{{message.title}}</span>
        <span>{{message.int1}}</span>
        <span>{{message.int2}}</span>
      </div>
      <div class="img clearfix">
        <div class="img-init">
          <img :src="img" alt="">
        </div>
        <slot></slot>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: [
        'message'
      ],
      data () {
        return {
          img: this.message.img
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
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
      font-size: 14px;
      color: #999;
      display: block;
    }
    span:nth-last-child(1){
      margin-bottom: 54px;
      font-size: 14px;
      color: #999;
      display: block;
    }
  }
  .img{
    width: 100%;
    position: relative;
    padding-bottom: 54px;
    border-bottom: 1px solid #d2d2d2;
    img{
      display: block;
      margin: 0 auto;
    }

  }
</style>
