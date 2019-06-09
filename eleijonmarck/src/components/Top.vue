<template>
  <header class="site-header">
    <div>
      <h2 class="">
        <router-link to="/">
          <img src="../../static/icons/unicorn.gif" alt="" class="avatar">
        </router-link>

        <h3 class='title'>#TODO: A*.find(information)</h3>
        <br>
        data ・ ml ・ philosophy
        </br>
        <nav class="site-nav">
          <ul style="float:left">
            <li>
              <a href="https://github.com/eleijonmarck" title="Follow on GitHub">
                <i class="fa fa-fw fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/eleijonmarck" title="Follow on Twitter">
                <i class="fa fa-fw fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://eleijonmarck.com/#contact" title="eleijonmarck.com">
                <i class="fa fa-fw fa-envelope-o"></i>
              </a>
            </li>
          </ul>
        </nav>
      </h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Top'
  }
</script>

<style scoped>
  .site-header {
    background: #fff;
    padding-left: 20%;
  }

  .site-header {
    font-weight: normal;
    font-size: 0.85em;
    line-height: 0.5;
    color: #999;
  }

  .title {
    color:coral;
    line-height: 5.5;
  }

  .site-header .site-nav ul {
    list-style: none;
  }
</style>