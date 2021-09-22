export default {

  state() {
    return {
      tasks: [],
      search: []
    }
  },

  getters: {
    tasks(state) {
      return state.tasks
    }
  },

  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    APPEND_TASK(state, task) {
      state.tasks = [...state.tasks, task]
    },
    CHANGE_STATE_TASK(state, data) {
      const index = state.tasks.findIndex(task => task.id == data.id)
      state.tasks.splice(index, 1, data)

    },
  },


  actions: {

    async getTasks({commit}) {
      let tasks = await this.$axios.get('api/tasks')
      commit('SET_TASKS', tasks.data)
    },

    async search({commit}, word) {
      let tasks = await this.$axios.get(`api/tasks/search?word=${word}`)
      commit('SET_TASKS', tasks.data)
    },

    async createTask({commit}, data) {
      try {
        let task = await this.$axios.post(`api/tasks`, data)
        commit('APPEND_TASK', task.data)
      } catch (e) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',

            show_class:
              {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show'
              }
          }
        )
      }
    }
    ,

    async doneTask({commit}, data) {
      let task = await this.$axios.post(`api/tasks/${data.id}/done`)
      commit('CHANGE_STATE_TASK', task.data)
      Swal.fire({
        title: 'Are you sure',
        icon: 'success',
        position:"top",
        timerProgressBar:true,
        timer:3000,
        showConfirmButton:false,
        toast:true
      })
    }
  }
  ,


}
