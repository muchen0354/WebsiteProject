<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Myheader from '@/base/header/header'
  import MyFooter from '@/base/footer/footer'
export default {
    name: 'app',
    components: {
      Myheader,
      MyFooter
    }
}
</script>

<style>
html,body{
  width: 100%;
}
</style>
