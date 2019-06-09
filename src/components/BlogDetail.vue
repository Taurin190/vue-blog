<template>
  <article>
    <div class="container">
      <div class="row">
        <div v-if="this.blogDetail" class="main-contents col-lg-8 col-md-10 mx-auto">
          <h1>{{ this.blogDetail.title }}</h1>
          <span class="published_date">
            <i class="far fa-calendar-alt"></i>
            {{ this.blogDetail.published_date }}
          </span>
          <div class="blog_body" v-html="this.blogDetail.blog_body"></div>
        </div>
      </div>
    </div>
  </article>
</template>
<style>
div.blog_body {
  margin-top: 60px;
}
</style>

<script>
import {firebaseDB} from '../main'

export default {
    name: "BlogDetail",
    data() {
      return {
        blog: Object
      }
    },
    head: {
      title() {
        return {
          inner: this.blogDetail.title + " - Lighting up a Corner"
        }
      }
    },
    computed: {
      blogDetail() {
        return this.$store.getters.getBlogByTitle(this.$route.params.english_title);
      },
      // blogTitle() {
      //   return this.blogDetail.title;
      // }
    },
    mounted: function() {
        if (this.loadBlogDetail()) {
          this.$emit('update-blog-title', this.blogTitle);
        }
    },
    methods: {
        loadBlogDetail() {
          var vm = this;
          var english_title = vm.$route.params.english_title;
          if (this.blogDetail != null) {
            return true;
          }
          const blogs = firebaseDB.collection('blogs').where('english_title', '==', english_title);
          vm.blogList = [];
          blogs.get().then( (snap) => {
          if (snap.size == 0) {
              console.log(snap.size);
              return false;
          }
          snap.docs.forEach(function(doc) {
              vm.blog = doc.data();
              console.log(vm.blog);
              vm.blogList.push(doc.data());
          });
          vm.$store.commit('updateBlogList', vm.blogList);
          return true;
        });
      }
    }
}
</script>

