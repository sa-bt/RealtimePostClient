<template>
    <div class="container  mx-auto px-6 mt-10">
      <Navbar/>
      <Nuxt/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    export default {
        name: "default",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
