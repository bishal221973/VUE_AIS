import { createApp } from 'vue'; // Import only the necessary function from Vue
import App from './App.vue';
import router from './routes.js';
import axios from 'axios';
import swal from 'sweetalert2';

// Set the default base URL for Axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
// Make the 'swal' instance available globally
window.Swal = swal;

// Create the Vue app and mount it to the DOM
createApp(App)
  .use(router) // Use the Vue Router instance
  .mount('#app'); // Mount the app to the '#app' element in your HTML
