<template>
  <nav class="flex item-center justify-between mb-6 -mx-3">
    <nuxt-link :to="{name:'index'}" class="text-indigo-500 "> داشبورد</nuxt-link>
    <nuxt-link :to="{name:'tasks'}" class="text-indigo-500 "> پروفایل</nuxt-link>
    <nuxt-link :to="{name:'products'}" class="text-indigo-500 "> سبد خرید</nuxt-link>
    <ul class="flex item-center">
      <template v-if="!$auth.loggedIn">
        <li>
          <nuxt-link :to="{name:'login'}" class="text-indigo-500 mx-3">ورود</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'register'}" class="text-indigo-500 mx-3">ثبت نام</nuxt-link>
        </li>
        <CartNavbar/>
      </template>

      <template v-if="$auth.loggedIn">
        <li><a href="" @click.prevent="logout" class="text-indigo-500 mx-3">خروج</a></li>
      </template>

    </ul>
  </nav>
</template>

<script>
    import CartNavbar from "./CartNavbar";
    export default {
        name: "Navbar",
        components: {CartNavbar},
        methods: {
            async logout() {
                await this.$auth.logout()
                this.$router.replace({name: 'index'})
            }
        }
    }
</script>

<style scoped>

</style>
