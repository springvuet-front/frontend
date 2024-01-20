<template>
    <div>
      <!-- 게시글 목록을 나타낼 부분 -->
      <div v-for="post in posts" :key="post.id" class="post">
        {{ post.title }}
      </div>
  
      <!-- 무한 스크롤을 감지할 영역 -->
      <infinite-loading :identifier="infiniteId" @infinite="loadMore" />
    </div>
  </template>
  
  <script>
  import InfiniteLoading from 'vue-infinite-loading';
  
  export default {
    data() {
      return {
        posts: [],      // 게시글 목록을 담을 배열
        currentPage: 1, // 현재 페이지 번호
        infiniteId: +new Date(), // 무한 스크롤을 위한 식별자
      };
    },
    methods: {
      // 더 많은 데이터를 로드하는 메서드
      loadMore() {
        // 실제로는 여기서 서버에서 새로운 데이터를 가져오는 로직을 작성해야 합니다.
        // 이 예제에서는 간단히 가상의 데이터를 생성합니다.
        const newData = Array.from({ length: 10 }, (_, index) => ({
          id: this.posts.length + index + 1,
          title: `새로운 게시글 ${this.posts.length + index + 1}`,
        }));
  
        // 가져온 데이터를 기존 데이터에 추가
        this.posts = [...this.posts, ...newData];
  
        // 페이지 번호 증가
        this.currentPage++;
  
        // 무한 스크롤 로딩 완료 알림
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      },
    },
    components: {
      InfiniteLoading,
    },
  };
  </script>
  
  <style>
  /* 게시글 스타일을 추가하세요 */
  .post {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  </style>
  