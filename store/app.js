const state = () => ({
  token: null,
  user_id: null,
  name: null,
  email: null,
  title: null,
  description: null,
  my_logs: [],
  logs: [],
  log_id: null,
})

const getters = {}
const mutations = {
  setToken(state, token) {
    state.token = data.token
    state.user_id = data.id
    state.name = data.name
    state.email = data.email
  },

setList(state, data) {
    state.logs = data
  },

  createUser(state, data) {
    state.MyUsers.unshift(data)
  },

  updateDescription(state, data) {
    state.Description = data
  },

  updateLog(state, data) {
    const index = state.logs.findIndex((log) => log.id === data.id)
    state.logs[index].title = data.title
  },

  updateUser(state, data) {
    const index = state.users.findIndex((user) => user.id === user.id)
    state.users[index].title = data.title
  },
}

const actions = {
  async login(state, data) {
    try {
      // Hit the backend api.
      const res = await this.$axios.post('user/login/', {
        email: data.email,
        password: data.password,
      })
      // console.log(res.data.id)

      this.commit('setToken', res.data)
      if (res.status == 200) {
        console.log(res)

        // Set the token after the call is success.
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
        // move to the homepage from login page.
        this.$router.push('/log')
      } else {
        alert('Invalid email or password')
      }
    } catch (e) {
      console.log(' error while logging in: ' + e)
      alert(' cannot login right now, please try again later')
    }
  },

  async getAllLogs({ commit, state }) {
    const res = await this.$axios.get('log')
    commit('setList', res.data)
  },

  async deleteLog({ commit }, id) {
    // console.log(id)
    const res = await this.$axios.delete('log/' + id)
    console.log(res, 'delete')
  },

  async createUser({ commit, state }, data) {
    // console.log(data)
    const res = await this.$axios.post('user/', data)
    commit('createUser', res.data)
  },

  async updateDescription({ commit }, data) {
    // console.log(data)
    const res = await this.$axios.put('log/' + id, data)
    console.log(res, 'Updated')
    commit('updateDescription', data.Description)
  },

  async updateUser({ commit }, data) {
    await this.$axios
      .put('user/' + data.id, {
        headers: {
          Authorization: 'Bearer ' + this.state.token,
        },
      })
      .then((res) => {
        console.user(res)
        console.user('called')
        commit('updateUser', data)
      })
  },

  async addTag({ commit, state }, data) {
    const res = await this.$axios.post('tag/', {
      text: data.text,
      log_id: state.Log_id,
    })
  },

  async deleteTag({ commit, state }, id) {
    const res = await this.$axios.delete('tag/' + id)
    commit('createdNewPost', res.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}