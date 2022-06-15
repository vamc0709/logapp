<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
      <h2>Creating Tag</h2>
    </header>
    <hr />
    <div class="all">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Type Name :</p>
      <input type="text" v-model="text" />
      <br><br>
    <button class="button">Create Tag</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      text: '',
    }
  },
  methods:{  
    goBack() {
      this.$router.push('/log')
    },
    // backFunction() {
    //   this.$router.push('/logs')
    // },
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
.all {
  background-color: white;
  display: block;
  text-align: center;
  width: 25rem;
  margin: 1px auto;
  margin-top: 30px;
  /* margin-bottom: 100px; */
  border: 1px solid #d4fde9;
  border-radius: 10px;
  box-shadow: #707271 0px 5px 17px;
}
h2 {
  text-align: center;
  margin-top: 10px;
}
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 265px;
  margin-top: 18px;
  margin-bottom: 30px;
  font: inherit;
  /* // margin-left:17px; */
  border: 1px solid #fafcfb;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
}
input {
  width: 250px;
  padding: 5px;
  border: 2px solid #a0f8ce;
  border-radius: 10px;
  background: rgb(247, 246, 246);
}
.title-1 {
  font-weight: bold;
  margin-right: 160px;
}
.title-2 {
  display: block;
  margin-right: 11.5rem;
}
.title-3 {
  display: block;
  margin-right: 10rem;
}
input:hover {
  background: rgb(230, 230, 230);
}
input:active {
  background: rgb(214, 196, 196);
  color: #707271;
}
.button:hover,
.button:active {
  background: rgb(182, 180, 180);
  color: #707271;
}
.button:focus {
  outline: none;
}
</style>