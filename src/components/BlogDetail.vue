<template>
  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
        <div class="main-contents col-lg-8 col-md-10 mx-auto">
          <h1>{{ this.blog.title }}</h1>
          <span class="published_date">{{ this.blog.published_date }}</span>
          <div v-html="this.blog.blog_body"></div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import {firebaseDB} from '../main'

export default {
    name: "BlogDetail",
    data() {
      return {
        blog: Object
      }
    },
    computed: {
      blogDetail() {
        return this.$store.getters.getBlogByTitle(vm.$route.params.english_title);
      }
    },
    mounted: function() {
        this.loadBlogDetail();
    },
    methods: {
        loadBlogDetail() {
          var vm = this;
          var title = vm.$route.params.english_title;
          const blogs = firebaseDB.collection('blogs').where('english_title', '==', title);

          blogs.get().then( (snap) => {
          if (snap.size == 0) {
              console.log(snap.size);
              return 0;
          }
          snap.docs.forEach(function(doc) {
              vm.blog = doc.data();
              console.log(vm.blog);
              return;
          });
        });
      }
    }
}
</script>

