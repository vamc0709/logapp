<template>
  <div class="main">
    <!-- <span class="arrow">&#x2190;</span> -->
    <!-- <i class="fa-solid fa-arrow-left"></i> -->
    <header>
      <div class="nav">
        <el-page-header @back="goBack"></el-page-header>
        <el-button @click.prevent="removeDomain">Delete</el-button>
        <el-button @click.prevent="removeDomain">Unseen</el-button>
        <el-button @click.prevent="removeDomain">Edit</el-button>
      </div>
      <br /><br />
    </header>
    <div class="logs">
      <br /><br />
      <form>
        <label for="title">Title:</label>
        <!-- <input type="text" id="fname" name="fname"> -->
        <!-- <label for="description">Description:</label> -->
        <!-- <a href="#">Description</a> -->
        <!-- <textarea id="description" name="description"></textarea> -->
        <tr>
          <th scope="col" v-if="isVisible">
            <input type="text" class="form-control" v-model="Description" />
          </th>
          <th scope="col" v-else>
            <i class="fa fa-user" style="font-size: 24px"></i>
            <b> Description</b> : {{ Description }}
          </th>

          <th scope="col">
            <button v-if="!isVisible" @click="visible" class="bg-info">
              <i class="fa fa-edit" style="font-size: 16px"></i>Update
            </button>

            <button v-else class="btn btn-success" @click="UpdateDescription">
              Submit
            </button>
          </th>
        </tr>

        <label for="stacktrace">Stacktrace:</label>
        <hr />

        <!-- <textarea id="stacktrace" name="stacktrace">
     -->

        <!-- </textarea><br><br> -->
        <div class="add-tags">
          <div>
            <span class="add">All Tags</span>
            <ul class="list">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <div class="one">
                <label for="vehicle1">html</label>
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2">css</label>
              </div>
            </ul>
          </div>

          <div class="bottom">
            <span>Add tags</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      Description: this.$store.state.Description,
      isVisible: false,
      newName: '',
      LogId: this.$route.params.id,
      title: '',
      tag: '',
    }
  },
  computed: {
    ...mapState(['Description', 'Title', 'Stacktrace']),
  },
  methods: {
    visible() {
      this.isVisible = true
      this.Description = this.$store.state.Description
    },
    UpdateDescription() {
      this.isVisible = false
      console.log(this.Description)
      this.$store.dispatch('UpdateDescription', {
        description: this.Description,
      })
    },
    goBack() {
      this.$router.push('/log')
    },
  }
}
</script>

<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
}
.main {
  background-color: white;
}
header {
  display: block;
  text-align: right;
  margin-right: 3rem;
  margin-top: -20px;
  /* background: none repeat scroll 0 0 #E0E0E0; */
  border-radius: 5px;
}
.logs {
  display: block;
  text-align: center;
  font-weight: bold;

  /* margin-right: 10rem; */
}
.arrow {
  /* margin-right: 77rem; */
  /* justify-content: start;*/
  /* align-items:flex-start;  */
  text-align: start;
  font-weight: bolder;
  font-size: x-large;
  margin-left: 10px;
  /* padding: 10px; */
  /* display: inline-flex; */
  /* border-width: 0.1em; */
}
label {
  display: block;
  padding: 20px;
}
.add-tags {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 350px;
}
.plus {
  font-weight: bold;
  font-size: 48px;
}
.add {
  justify-content: space-around;
  margin-left: 100px;
}

.list {
  /* display: inline-flex; */
  margin-left: 100px;
  font-weight: unset;
  /* margin-right: 10px; */
}
.bottom {
  margin-top: -190px;
  margin-left: 100px;
}
a {
  text-decoration: none;
  list-style: none;
  color: black;
}

.form-control {
  margin: 200px;
}
.one {
  font-weight: normal;
}
</style>