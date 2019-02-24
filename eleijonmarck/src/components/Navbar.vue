<template>
  <header class="site-header">
    <div class="branding">
      <h2 class="site-title">
      <a href="http://blog.eleijonmarck.com/">
        <img src="../../static/icons/unicorn.gif" alt="" class="avatar">
      </a>
        <a href="http://eleijonmarck.com/">#TODO: A*.find(GoldenNugget)</a>
        <br>
        data ・ ml ・ philosophy
        </br>
    <nav class="site-nav">
      <ul style="float:left">
        <li>
          <a href="/archive.html" title="Archive">
          <i class="fa fa-fw fa-archive"></i>
          </a>
        </li>
        <li>
          <a href="http://eleijonmarck.com/#contact" title="eleijonmarck.com">
            <i class="fa fa-fw fa-envelope-o"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/eleijonmarck" title="Follow on Facebook">
            <i class="fa fa-fw fa-facebook"></i>
          </a>
        </li>
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
      </ul>
    </nav>
      </h2>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
.site-header {
    background: #fff;
    padding-left: 20%;
}
.site-header .site-title {
    font-weight: normal;
    font-size: 1.25em;
    line-height: 1.5;
    color: #999;
}
.site-header .site-nav ul {
    list-style: none;
    line-height: 1.5;
}
</style>