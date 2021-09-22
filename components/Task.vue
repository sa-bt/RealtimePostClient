<template>
  <div class="" v-if="task.completed == 1">
    <div
      class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-green-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer"
      style="width: 450px; height: 350px">
      <div class="h-20 bg-green-500 flex items-center ">
        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">{{task.id}}</h1>
        <p class=" text-white text-base ml-4 uppercase">
          {{task.title}}
        </p>
      </div>
      <p class="py-6 px-6 text-lg tracking-wide text-center">{{task.description}}</p>
      <!-- <hr > -->
      <div class="flex justify-center px-5 mb-2 text-sm ">
        <button type="button" @click="doneTask(task)"
                class="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
          Details
        </button>
      </div>
    </div>
  </div>
  <div class="" v-else>
    <div
      class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-red-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer"
      style="width: 450px; height: 350px">
      <div class="h-20 bg-red-500 flex items-center ">
        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full"> {{task.id}}</h1>
        <p class=" text-white text-base ml-4 uppercase">
          {{task.title}}
        </p>
      </div>
      <p class="py-6  px-6 text-lg tracking-wide text-center">{{task.description}}</p>
      <!-- <hr > -->
      <div class="flex justify-center px-5 mb-2 text-sm ">
        <button type="button" @click="doneTask(task)"
                class="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">
          Done
        </button>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Task",
        props: {
            task: {
                required: true,
                type: Object
            }
        },
        methods: {
            ...mapActions({
                done: 'tasks/doneTask'
            }),
             doneTask(task){
                 this.done(task)
            }
        },
        mounted() {

        },

    }
</script>

<style scoped>

</style>
