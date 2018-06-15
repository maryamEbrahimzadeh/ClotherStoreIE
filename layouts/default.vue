<template>
  <div>
    <main-navbar />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
export default {
  components: {
    Footer,
    MainNavbar,
  },
  
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  direction: rtl;
  word-spacing: 1px;
}
</style>
