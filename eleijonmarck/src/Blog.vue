<template>
<div class="posts">
  <div class="post-teaser">
  <div class="box">
<div class="box">
  <div class="container-4">
    <input type="search" id="search" v-model="search" placeholder="Search..."/>
    <button class="icon"><i class="fa fa-search"></i></button>
  </div>
</div>
  </div>
        <paginate
          name="blogs"
          :list="posts"
          :per="10"
          tag="div"
        >
        
        <section v-for="blog in filteredBlogs">
          <h2>{{ blog.title }}</h2>
          <router-link :to="'/post/' + blog.id" class="btn btn-primary">read more</router-link>
          <hr>
        </section>
        
        </paginate>
        
        <paginate-links
          for="blogs"
          :async="true"
          :show-step-links="true"
          :step-links="{
            next: 'Next',
            prev: 'Previous'
          }"
          :classes="{
            'ul': 'pagination',
            'ul > li': 'page-item',
            'ul > li > a': 'page-link',
          }"
        >
        </paginate-links>
        </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      paginate: ['blogs'],
      search: ""
    }
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(json => this.posts = json, error => console.log(error));
  },
  computed: {
    filteredBlogs: function(){
      return this.paginated('blogs').filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  }
}
</script>

<style>
.container-4{
  overflow: hidden;
  width: 300px;
  margin: auto;
}
.container-4 input#search{
  width: 300px;
  height: 50px;
  background: #2b303b;
  border: none;
  font-size: 10pt;
  float: left;
  color: #fff;
  padding-left: 15px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.container-4 button.icon{
  -webkit-border-top-right-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-radius-topright: 5px;
  -moz-border-radius-bottomright: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
 
  border: none;
  background: #232833;
  height: 50px;
  width: 50px;
  color: #4f5b66;
  opacity: 0;
  font-size: 10pt;
 
  -webkit-transition: all .55s ease;
  -moz-transition: all .55s ease;
  -ms-transition: all .55s ease;
  -o-transition: all .55s ease;
  transition: all .55s ease;
}
</style>