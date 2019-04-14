<template>
<div class="main container">
    <BlogList class="main-contents" />
</div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList.vue'

export default {
  name: 'blog',
  components: {
    BlogList
  },
  head: {
    title: function() {
      return {
        inner: 'Blog List',
        separator: '-',
        complement: 'Lighting up a Corner'
      }
    }
  }
}
</script>