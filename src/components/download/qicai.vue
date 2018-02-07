<template>
  <div id="qicaiapp">
    <div class="downloadbtn">
      <a class="download-app" href="http://www.zriot.net/seven_color/ios">点击下载电子围栏App iOS版</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: '新的一页'
      }
    },
    methods: {
      download () {
        alert('hahha ')
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  #qicaiapp{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .downloadbtn{
      width: 100%;
      height: 700px;
      border: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      .download-app{
        cursor: pointer;
        width: 300px;
        height: 50px;
        /*border: 1px solid #000;*/
      }
    }
  }
</style>
