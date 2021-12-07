<template>
  <div class="container  mx-auto px-6 mt-10 font-irs" dir="rtl">
    <Navbar/>
    <Nuxt/>
  </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import {mapMutations} from 'vuex'

    export default {
        name: "default",
        components: {Navbar},
    }
</script>

<style scoped>

</style>
