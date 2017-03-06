import 'whatwg-fetch';
// Import the App Component in index.js
import Vue from 'vue';
import App from './app.vue';


// start the app component with Vue
// Create a new Vue instance of the App component
new Vue({
  ...App,
  el: '.app',
});
