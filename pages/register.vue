<template>
  <form @submit.prevent="register" class="max-w-md mx-auto bg-white shadow-sm rounded p-6 border border-gray-300 my-24">
    <h3 class="mb-1 text-center font-extrabold">ایجاد حساب کاربری</h3>
    <hr class="mb-6 bg-indigo-500">
    <div class="mb-4">

      <div class="mb-3">
        <label for="name" class="block mb-1 text-gray-700 ">نام کاربری</label>
        <input type="name" name="name" id="name" v-model="form.name" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div class="mb-3">
        <label for="email" class="block mb-1 text-gray-700 ">ایمیل</label>
        <input type="email" name="email" id="email" v-model="form.email" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div class="mb-3">
        <label for="password" class="block mb-1 text-gray-700 ">رمز عبور</label>
        <input type="password" name="password" id="password" v-model="form.password" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div class="mb-2">
        <label for="password_confirmation" class="block mb-1 text-gray-700 ">تکرار رمز عبور</label>
        <input type="password" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>
    </div>
    <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">ثبت نام</button>
  </form>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{
                form:{
                    name:'',
                    email:'',
                    password:'',
                    password_confirmation:'',
                }
            }
        },
        methods:{
           async register(){
               try {
                   await this.$axios.get('sanctum/csrf-cookie')
                   await this.$axios.post('register', this.form)
                   await this.$auth.loginWith('laravelSanctum',{
                       data:{
                           email:this.form.email,
                           password:this.form.password
                       }
                   })
               }catch (e) {
                   console.log(e)
               }

           }
        }
    }
</script>

<style scoped>

</style>
