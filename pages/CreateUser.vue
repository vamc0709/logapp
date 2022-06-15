<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
      <h3>Creating User</h3>
    </header>
    <hr />
    <div class="all">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Email :</p>
      <input type="email" id="email" v-model="email" />

      <p class="title-1 title-4">Password :</p>
      <input type="password" id="password" v-model="password" />

      <p class="title-1 title-5">Is Superuser :</p>
      <input type="radio" id="name" @click="yes" /> Yes
      <input type="radio" id="name" @click="no" /> No <br /><br />
      <!-- <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Sponsor"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item> -->
      <button class="button" @click="onSubmit">Create User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isSuperuser: false,
    }
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('onSubmit')
      this.$router.push('/user')
    },
    // async yes(){
    //   if(this.isSuperuser)
    //   {this.isSuperuser=false}else{this.isSuperuser=true}
    //   },
    goBack() {
      this.$router.push('/log')
    },
  },
}
</script>

<style>
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
h3 {
  text-align: center;
  margin-top: 10px;
}
label {
  display: block;
  text-align: center;
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
  margin-right: 11.5rem;
}
.title-5 {
  display: block;
  margin-right: 8rem;
}
#name {
  margin-left: -80px;
  margin-right: -100px;
}
input:hover {
  background: rgb(230, 230, 230);
}
input:active {
  background: rgb(214, 196, 196);
  color: #707271;
}
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 250px;
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
.button:hover,
.button:active {
  background: rgb(182, 180, 180);
  color: #707271;
}
.button:focus {
  outline: none;
}
</style>