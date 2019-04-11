<template>
  <div class="home">
      <BlogDetail />
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
    title: {
      inner: '',
      separator: '-',
      complement: 'Lighting up a Corner'
    }
  }
}
</script>