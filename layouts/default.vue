<template>
    <div class="container max-w-3xl mx-auto px-6 mt-10">
      <AppNav/>
      <Nuxt/>
    </div>
</template>

<script>
    import AppNav from "../components/AppNav";
    export default {
        name: "default",
        components: {AppNav}
    }
</script>

<style scoped>

</style>
