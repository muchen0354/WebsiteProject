<template>
  <div id="qicaiapp">
    <div class="downloadbtn">
      <a class="download-app" download="OperationForYSL.ipa" href="http://www.zriot.net/Public/ios/OperationForYSL.ipa">Click to download App</a>
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
        color: blue;
        text-decoration: underline;
        /*border: 1px solid #000;*/
      }
    }
  }
</style>
