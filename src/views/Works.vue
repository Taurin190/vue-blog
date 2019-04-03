<template>
  <div class="home">
      <ProfileOverview />
  </div>
</template>
<script>
import ProfileOverview from '@/components/ProfileOverview.vue'
import BlogList from '@/components/BlogList.vue'

export default {
  name: 'work',
  components: {
    ProfileOverview,
    BlogList
  }
}
</script>