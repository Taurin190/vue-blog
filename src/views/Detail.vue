<template>
  <div class="home">
      <BlogDetail @update-blog-title="updateTitle" />
  </div>
</template>
<script>
import BlogDetail from '@/components/BlogDetail.vue'

export default {
  name: 'detail',
  components: {
    BlogDetail
  },
  data() {
    return {
      blogTitle: ''
    }
  },
  head: {
    title: function() {
      return {
        inner: this.blogTitle,
        separator: '-',
        complement: 'Lighting up a Corner'
      }
    }
  },
  methods: {
    updateTitle: function(blogTitle) {
      console.log(blogTitle);
      this.blogTitle = blogTitle;
    }
  }
}
</script>