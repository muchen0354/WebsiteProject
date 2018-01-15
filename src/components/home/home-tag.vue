<template>
    <div id="tag">
      <div class="tag-banner">
        <div class="banner-title">电子标签</div>
        <div class="tag-msg">造型简约&nbsp;|&nbsp;蓝牙通信技术&nbsp;|&nbsp;智能化运营管理&nbsp;|&nbsp;实现有序停放共享单车</div>
        <div class="img"><img src="../../../static/imgs/banner_dzbq_img.png" alt=""></div>
      </div>
      <div class="container">
        <int :message="int1"></int>
        <int :message="int2"></int>
        <int :message="int3"></int>
        <int :message="int4"></int>
        <int :message="int5"></int>
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
          msg: '新的一页',
          int1: {
            title: '功能介绍',
            img: '../../../static/imgs/dzbq_img01.png'
          },
          int2: {
            title: '产品外观',
            int1: '造型简约，成本低廉，自由定制，安装方便，多品牌兼容',
            img: '../../../static/imgs/dzbq_img02.png'
          },
          int3: {
            title: '内置电池  无需外电',
            int1: '电子标签内部自带两节CR2450，1000mAh电量电池，500ms广播，无需外部供电',
            int2: '正常情况下可供电4年，符合共享单车自身更换周期',
            img: '../../../static/imgs/dzbq_img03.png'
          },
          int4: {
            title: '极端环境  适应无阻',
            int1: '气候适应性强，电子标签在-20°C~60°C都能正常工作',
            img: '../../../static/imgs/dzbq_img04.png'
          },
          int5: {
            title: '智能化运维管理',
            img: '../../../static/imgs/dzbq_img05.png'
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
              value: '88.46*16.3mm'
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
  .tag-banner{
    width: 100%;
    height: 420px;
    padding-top: 88px;
    background-image: url('/static/imgs/banner_dzbq.png');
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
</style>
