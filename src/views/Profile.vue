<template>
  <div class="container">
      <ProfileOverview />
      <SocialActivity />
  </div>
</template>
<script>
import ProfileOverview from '@/components/ProfileOverview.vue'
import SocialActivity from '@/components/SocialActivity.vue'

export default {
  name: 'profile',
  components: {
    ProfileOverview,
    SocialActivity
  },
  head: {
    title: {
      inner: 'Profile of Koichi Taura',
      separator: '-',
      complement: 'Lighting up a Corner'
    }
  }
}
</script>
      