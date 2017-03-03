<template lang="html">
  <div class="app">
    <div class="section panel">
      <p class="panel-heading"></p>
      <ul>
      <song-item v-for="item in tracks" v-bind:track="item"></song-item>
      </ul>
    </div>
  </div>
</template>

<script>
import SongItem from './song-item.vue';
export default {
  components: { SongItem, },

  created() {
    fetch('https://api.spotify.com/v1/search?query=katy&type=track&offset=0&limit=20')
  .then(r => r.json())
  .then((data) => {
    this.track = data;
  });
  },

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
