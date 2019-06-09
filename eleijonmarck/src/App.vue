<template>
  <div id='app'>
  <!-- top -->
  <top></top>
  <!-- navbar -->
  <navbar></navbar>

  <!-- main view -->
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>

  <footer>
    <hr>
    <p class="text-center"><a href="http://www.eleijonmarck.com" target="_blank">Eric Leijonmarck</a>&copy; 2018
    </p>
  </footer>
  </div>
</div>
</template>

<script>
  import Top from './components/Top.vue'
  import Navbar from './components/Navbar'

  export default {
    name: 'App',
    components: {
      Top,
      Navbar
    }
  }
</script>

<style scoped>
</style>

