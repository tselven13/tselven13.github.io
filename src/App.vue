<template>
  <div id="app">
    <Header /> <!-- Use the header component here -->
    <main class="main-page-wrapper">
      
          <router-view />
      
    </main>
    
  </div>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Add any global styles for the app here */
</style>