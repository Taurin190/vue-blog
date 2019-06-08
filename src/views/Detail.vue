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
  methods: {
    updateTitle: function(blogTitle) {
      this.blogTitle = blogTitle;
    }
  }
}
</script>