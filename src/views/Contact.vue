<template>
<!-- Main Content -->
<send-message />
</template>
<script>
import SendMessage from '@/components/SendMessage.vue'

export default {
  name: 'contact',
  components: {
    SendMessage
  },
  head: {
    title: {
      inner: 'Contact',
      separator: '-',
      complement: 'Lighting up a Corner'
    }
  }
}
</script>

