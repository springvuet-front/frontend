<template>
    <div class="post">
      <h2>{{ post.author }}</h2>
      <p>{{ post.content }}</p>
    </div>
    <div class="scrolling-component" ref="scrollComponent">
    <post-component v-for="post in posts" :post="post" />
  </div>
  </template>
  <script>
  import PostComponent from './PostComponent.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import getPosts from '../scripts/post-loader'
  const posts = ref(getPosts(10))

    export default {
     props: {
      post: Object
     }
    }
  </script>
  <style scoped>
    .post {
     background: #fff;
     padding: 1.5em;
    }
  
    .post:not(:last-child) {
     border-bottom: 1px solid #ddd;
    }
  
    .post h2 {
     font-size: 1.3em;
     padding-bottom: 0.25rem;
    }
  
    .post p {
     color: #888;
    }
  </style>
  