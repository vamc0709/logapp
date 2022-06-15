<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
      <h2>All Users</h2>
      <div>
        <input
          type="text"
          class="search-bar"
          v-model="search"
          placeholder="Search"
        />
      </div>
    </header>
    <hr>
    <section>
      <h3>Details :</h3>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods:{  
    goBack() {
      this.$router.push('/log')
    },
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
  border: 1px solid #c9ffe5;
  border-radius: 10px;
  text-align: center;
}
section{
  background-color: white;
}
</style>