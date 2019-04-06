<template>
<div class="row">
      <div id="profile" class="col-lg-8 col-md-10 mx-auto rounded profile-area ">
        <h2 class="contents-title">Profile</h2>
        <div class="float-left col-lg-8 col-md-7 profile-detail">
          <h3>{{ profileData.name }}</h3>
          {{ profileData.self_introduction }}
        </div>
        <div class="float-right col-lg-4 col-md-5 mx-auto">
          <img class="img-profile img-fluid img-thumbnail" :src="profileData.image">
        </div>
      </div>
    </div>
</template>
<script>
import {firebaseDB} from '../main'

export default {
  name: 'ProfileOverview',
  mounted: function() {
    this.loadProfile();
  },
  data() {
    return {
      profileData: Object
    }
  },
  methods: {
    loadProfile () {
      var vm = this;
      const user = firebaseDB.collection('users').doc('1');
      user.get().then(function(doc) {
        console.log(doc.size);
        if (doc.exists) {
          console.log("Document data:", doc.data());
          vm.profileData = doc.data();
        } else {
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
  }
}
</script>
<style>

</style>

