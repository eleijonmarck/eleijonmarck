<template>
  <div id='app'>
  <!-- header -->
  <navbar></navbar>
  <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/">Homepage</router-link>
      <router-link to="/blog">Blogs</router-link>
  </p>

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
  import Navbar from './components/Navbar'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style scoped>

</style>

