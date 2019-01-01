<template>
  <div class="container">
  <header class="site-header">
    <div class="branding">

      <a href="http://blog.eleijonmarck.com/">
        <img class="avatar" src="../img/unicorn.gif" alt="" width="100px">
      </a>

      <h1 class="site-title">
        <a href="http://eleijonmarck.com/">餌吏九 莉女无丸九玖</a>
        <br>
        data ・ ml ・ philosophy
      </h1>
    </div>

    <nav class="site-nav">
      <ul>
        <li>
          <a class="page-link" href="/archive.html">
            archive　
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
      <div class="row">
        <div class="col-sm-12">
          <div class="jumbotron">
            <div class="container">
              <span class="display-5 h2"> #TODO: A*.find(GoldenNugget)</span>
              <p class="lead">Simple example how to connect to the server, paginate results, create single page app...</p>
            </div>
          </div>
        </div>
  </div>
  </header>

  <router-view></router-view>



  <footer class="col-sm-12">
    <hr>
    <p class="text-center"><a href="http://www.eleijonmarck.com" target="_blank">Eric Leijonmarck</a>&copy; 2018
    </p>
  </footer>
  </div>

</template>

<script>
</script>

<style>
  .container {
    max-width: 700px;
  }

  h1:first-letter,
  h2:first-letter {
    text-transform: uppercase;
  }
</style>

