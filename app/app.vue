<!-- Create a app.vue module -->
<!-- Use template snippet -->

<!-- In the template of app.vue make a mockup of the application using Bulma classes and raw text content (you shouldn't need any custom CSS) -->

<template lang="html">
  <div class="app">
    <div class="section panel">
      <p class="panel-heading">Hello</p>
      <ul class="results">
        <!-- Loop through data for tracks using v-for -->
        <!-- Use the song-item component and add a v-for attribute to create a new song-item for each item in tracks -->
         <!-- Update template for song-item to use vue template (curly braces and/or v-bind:) -->
      <song-item v-for="item in tracks" v-bind:track="item">
      </song-item>
      </ul>
    </div>
  </div>
</template>

<script>
// Import the song-item component into app component
import SongItem from './song-item.vue';
// Add to the components available to use in your app component
export default {
  components: {
    SongItem,
  },

// Fetch Spotify data
// Make a created function
  created() {
    // Fetch data from https://api.spotify.com/v1/search?query=katy&type=track&offset=0&limit=20
    fetch('https://api.spotify.com/v1/search?query=katy&type=track&offset=0&limit=20')
  .then(r => r.json())
  .then((data) => {
// Set resulting data from this fetch request to tracks on the current component (you may need to look in the returned data for the actual array)
    this.tracks = data.tracks.items;
  });
  },

  data() {
    return {
      tracks: []
    };
  },

  methods: {

  },
};
</script>
