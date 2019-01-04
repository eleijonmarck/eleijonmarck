<template>
<div class="posts">
  <div class="post-teaser">
  </div>
  <div class="post-teaser">
  <div class="container-4">
    <input type="search" id="search" v-model="search" placeholder="Search..."/>
    <button class="icon"><i class="fa fa-search"></i></button>
  </div>
        <paginate
          name="blogs"
          :list="posts"
          :per="10"
          tag="div"
        >
        
        <section v-for="blog in posts">
        <header>
        <h1>
          <a class="post-link" v-bind:href="'' + blog.link">
            {{ blog.meta.title }}
          </a>
        </h1>
        <p class="meta">
        2018-03-11
        </p>
        </header>
          <router-link :to="'/post/' + blog.id" class="btn btn-primary">Continue reading</router-link>
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

<script src='./blogs.js'/>
<style scoped src='./blog.css'/>