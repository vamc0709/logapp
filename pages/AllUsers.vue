<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
      <h2>All Users</h2>
      <div id="logs">
        <input
          type="search"
          class="search-bar"
          v-model="queryParams.title"
          placeholder="Search"
          @change="getUsers"
        />
      </div>
    </header>
    <hr />
    <section>
      <h3>Details :</h3>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      queryParams: {
        page: 1,
        limit: 20,
        title: '',
      },
    }
  },
  computed: {
    ...mapState(['user'])
  },

  methods: {
    goBack() {
      this.$router.push('/log')
    },
     async getUsers() {
      console.log(this.queryParams)
      await this.$store.dispatch('getAllUsers', this.queryParams)
     }
  },
}
</script>

<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: whitesmoke;
}
h2 {
  text-align: center;
  margin-top: 10px;
}
input {
  display: block;
  margin: 1px auto;
  padding: 8px;
  width: 250px;
  border: 1px solid #4c4d4c;
  border-radius: 10px;
  text-align: left;
  font-size: medium;
}
section {
  background-color: white;
}
</style>