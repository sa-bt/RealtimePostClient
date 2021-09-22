<template>

  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">

      <div class=" flex justify-center items-center" v-if="loading">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>

      <!--Search -->
      <div class="mb-2">
        <label for="name" class="block mb-2 text-gray-700 ">Search</label>
        <input type="name" name="name" id="name" v-model="searchInput" @keyup="search"
               class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <!--Create New Task -->
      <form @submit.prevent="createNewTask">
        <div class="mb-2">
          <label for="title" class="block mb-2 text-gray-700 ">Title</label>
          <input type="title" title="title" id="title" v-model="form.title" @keyup="search"
                 class="w-full border-2 border-gray-300 rounded px-3 py-2">
        </div>
        <div class="mb-3">
          <label for="description" class="block mb-2 text-gray-700 ">Content</label>
          <textarea
            name="description"
            id="description"
            placeholder="Share something..."
            v-model="form.description"
            class="w-full border-2 border-gray-300 rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">
          Create New Task
        </button>
      </form>

      <!-- component -->
      <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
        <Task v-for="task in tasks" :key="task.id" :task="task"/>
      </div>

    </div>

  </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import Task from '../../components/Task'

    export default {
        components: {
            Task
        },
        data() {
            return {
                page: 1,
                loading: true,
                searchInput: '',
                form: {
                    title: '',
                    description: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                tasks: 'tasks/tasks',
            })
        },
        methods: {
            ...mapMutations({
                SET_TASKS: 'tasks/SET_LIKES'
            }),
            ...mapActions({
                getTasks: 'tasks/getTasks',
                searchTasks: 'tasks/search',
                createTask: 'tasks/createTask',
            }),
            search() {
                this.searchTasks(this.searchInput)
            },

            createNewTask(){
                this.createTask(this.form)
            }

        },

        mounted() {

            this.getTasks()
        },

    }
</script>
