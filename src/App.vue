<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
  font-family: 'Ubuntu', 'Segoe UI', sans-serif;
  color: #818181;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h5 {
  font-family: 'Muli', 'Segoe UI', sans-serif;
  color: black;
}

body {
  background: #fff4f5;
  padding: 0;
  margin: 0;

}

</style>
