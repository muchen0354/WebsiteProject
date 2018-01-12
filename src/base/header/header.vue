<template>
    <div id="header">
      <div class="header  ">
        <div class="header-content container clearfix">
          <div class="zriot-logo pull-left"></div>
          <div class="menu pull-left">
            <div  v-for="(item,index) in list" v-bind:key="index" :class="{active:isActive == index}" @click="change(index, item.path)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="space"></div>
      <!--<banner></banner>-->
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'nav'
      ])
    },
    data () {
      return {
        msg: '头部',
        isActive: 0,
        list: [
          {name: '首页', path: '/'},
          {name: '产品介绍', path: '/introduce'},
          {name: '方案与案例', path: '/case'},
          {name: '关于我们', path: '/about'}
        ]
      }
    },
    created () {
      this.isActive = sessionStorage.getItem('nav')
    },
    methods: {
      change (index, path) {
        this.setNav(index)
        sessionStorage.setItem('nav', index)
        this.isActive = sessionStorage.getItem('nav')
        this.$router.push(path)
      },
      ...mapMutations({
        setNav: 'SET_NAV'
      })
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

  .active{
    color: #22c0f4;
  }
  .menu>div:hover{
      color:#22c0f4;
  }

  /*.space{*/
    /*width: 100%;*/
    /*height: 60px;*/
  /*}*/

  .header{
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9999;*/
    background-color:#191919;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size:16px;
    .header-content{
      padding-left: 5%;
      box-sizing: border-box;
      .zriot-logo{
        height: 60px;
        width: 156px;
        background-image: url('../../../static/imgs/logo.png');
        background-repeat: no-repeat;
        background-position: 0 12px ;
        margin-right: 163px;
      }
      .menu{
        >div{
          cursor:pointer;
          float: left;
          padding: 0 29px;

        }

      }
    }

  }
</style>
