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
  },
  head: {
    title: {
      inner: 'Work List',
      separator: '-',
      complement: 'Lighting up a Corner'
    }
  }
}
</script>