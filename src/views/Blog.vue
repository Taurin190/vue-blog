<template>
<div class="container">
    <BlogList />
</div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList.vue'

export default {
  name: 'blog',
  components: {
    BlogList
  }
}
</script>