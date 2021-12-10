<template>
  <form @submit.prevent="login" class="max-w-md mx-auto bg-white shadow-sm rounded p-6 border border-gray-300 my-24">
    <div class="mb-4">
      <h3 class="mb-1 text-center font-extrabold">ورود به سایت</h3>
      <hr class="mb-6 bg-indigo-500">
      <div class="mb-2">
        <label for="email" class="block mb-2 text-gray-700 ">ایمیل</label>
        <input type="email" name="email" id="email" v-model="form.email" class="w-full border-2 border-gray-300 rounded px-3 py-2 " dir="ltr">
      </div>
      <div class="mb-2">
        <label for="password" class="block mb-2 text-gray-700 m">پسورد</label>
        <input type="password" name="password" id="password" v-model="form.password" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>
    </div>
    <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">ورود</button>
  </form>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
              form:{
                  email:'',
                  password:'',
              }
          }
        },
        methods:{
            login(){
                this.$auth.loginWith('laravelSanctum', {
                    data: this.form
                })
            }
        }
    }
</script>

<style scoped>

</style>
