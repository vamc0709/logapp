<template>
  <div class="all">
    <header>
      <h3>Log App</h3>
      <nav class="main-nav">
        <ul class="main-nav_items">
          <br /><br />
          <li class="main-nav_item">
            <a href="/profile">Profile</a>
          </li>
          <!-- <br /><br />
          <li class="main-nav_item">
            <a href="#">About</a>
          </li> -->
        </ul>
      </nav>
      <div class="manage">
        <el-dropdown>
          <el-button type="primary">
            Manage <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <!-- <nuxt-link to="/CreateUser"
              ><el-dropdown-item>Create User</el-dropdown-item></nuxt-link
            > -->
            <el-dropdown-item
              ><el-link href="/createuser" target="_blank"
                >Create User</el-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><el-link href="/updateuser" target="_blank"
                >Update User</el-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><el-link href="/allusers" target="_blank"
                >All Users</el-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><el-link href="/createtag" target="_blank"
                >Create Tag</el-link
              ></el-dropdown-item
            >
            <!-- <nuxt-link to="/UpdateUser">
              <el-dropdown-item>Update User </el-dropdown-item>
             </nuxt-link
            > -->
            <!-- <nuxt-link to="/AllUser"
              > -->
            <!-- <el-dropdown-item>All Users</el-dropdown-item> -->
            <!-- </nuxt-link
            > -->
            <!-- <nuxt-link to="/CreateTag"
              ><el-dropdown-item>Create Tag</el-dropdown-item></nuxt-link
            > -->
            <!-- <el-dropdown-item>Action 5</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- <hr /> -->
      <div>
        <h4>All Logs</h4>
      </div>
      <!-- <div id="logs">
        <input
          type="search"
          class="search-bar"
          v-model="search"
          placeholder="Search logs"
        />
      </div> -->
      <div id="app">
        <input v-model="searchQuery" v-show="!isVisible" />
        <div v-for="r of resultQuery" :key="r.id">{{ r.title }}</div>
      </div>
        <span class="date">Sort by DateTime:</span>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="From Date"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
        <br />
        <!-- <p>to</p> -->
        <el-date-picker
          v-model="value"
          type="date"
          placeholder="To Date"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
        <div>
          <el-select-v2
            v-model="value"
            filterable
            :options="options"
            placeholder="Please select"
            style="width: 240px"
            multiple
          />
          <!-- <el-select class="filter" v-model="value2" placeholder="Filter"> -->
          <!-- <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> -->
          <!-- <el-option>Tag Title</el-option>
            <el-option>Unseen</el-option>
            <el-option>All</el-option>
            <el-option>By UserId</el-option>
            <el-option>Bin</el-option>
          </el-select> -->
        </div>
      </div>
    </header>
    <br />
    <br />
    <!-- <div class="log-item">
      <input
        class="text"
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
      /> -->
    <!-- <input class="text1" type="text" /> -->
    <!-- <input type="text" v-model="enteredGoalValue" />
      <button @click="addGoal">Add</button>
      <p v-if="goals.length === 0">No goals have been added yet</p>
      <ul v-else>
        <li v-for="goal in goals" v-bind:key="goal" @click="removeGoal">
          <p>{{ goal }}</p>
          <input type="text" @click.stop />
        </li>
      </ul>
      <div class="buttons">
        <br />
        <button class="btn-1">Update</button>
        <button class="btn-2">Delete</button>
      </div> -->
    <!-- </div> -->
  </div>
</template>

  <script>
export default {
  data() {
    return {
      searchQuery: null,
      resources: [
        {
          id: 1,
          title: 'Tag Title',
          date: '2020-01-01',
          userId: 1,
          tagId: 1,
        },
        {
          id: 2,
          title: 'Unseen',
          date: '2020-01-01',
          userId: 1,
          tagId: 2,
        },
        {
          id: 3,
          title: 'All',
          date: '2020-01-01',
          userId: 1,
          tagId: 3,
        },
        {
          id: 4,
          title: 'By UserId',
          date: '2020-01-01',
          userId: 1,
          tagId: 4,
        },
        {
          id: 5,
          title: 'Bin',
          date: '2020-01-01',
          userId: 1,
          tagId: 5,
        },
      ],
      search: '',
      value: '',
      value1: '',
      options: '',
      //   enteredGoalValue: '',
      //   goals: [],

      pickerOptions: {
        // shortcuts: [
        // {
        //   text: 'Today',
        //   onClick(picker) {
        //     picker.$emit('pick', new Date())
        //   },
        // },
        // {
        //   text: 'Yesterday',
        //   onClick(picker) {
        //     const date = new Date()
        //     date.setTime(date.getTime() - 3600 * 1000 * 24)
        //     picker.$emit('pick', date)
        //   },
        // },
        // {
        //   text: 'A week ago',
        //   onClick(picker) {
        //     const date = new Date()
        //     date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        //     picker.$emit('pick', date)
        //   },
        // },
        // ],
      },
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.title.toLowerCase().includes(v))
        })
      } else {
        return this.resources
      }
    },
  },
}
</script>
<style lang="scss" scoped>
body {
  background: whitesmoke;
  width: 100%;
  height: 100%;
}
/* hr {
  border: 1px solid rgb(92, 90, 90);
  text-decoration: none; 
} */
.manage {
  display: block;
  text-align: left;
  /* align-items: right; */
  margin-right: 1.5rem;
  margin-top: -5rem;
  /* font-size: 2.5rem; */
  font-weight: bolder;
  /* font-weight: bolder; */
}
.main-nav {
  display: inline-block;
  text-align: right;
  width: calc(100% - 50px);
  vertical-align: middle;
  margin-top: -170px;
  /* margin-right: 100px; */
}

.main-nav_items {
  /* margin-left: ; */

  padding: 0;
  list-style: none;
  /* padding-left: 1000px; */
}

.main-nav_item {
  /* display: inline-block; */
  margin: 0px 1rem;
  /* font-size: 1.232rem;
  font-weight: bolder; */
}

.main-nav_item a {
  text-decoration: none;
  color: #494949;
  font-weight: bold;
  padding: 8px;
  background-color: rgba(252, 252, 252, 0.877);
  border-radius: 10px;
  margin-right: -40px;
  /* margin: 10px 0px; */
}

.main-nav_item a:hover,
.main-nav_item a:active {
  color: rgb(65, 64, 64);
  border: 1px solid rgb(49, 45, 45);
  border-radius: 10px;
  background: rgb(255, 255, 255);
}
.block {
  display: block;
  text-align: right;
  margin-right: 1rem;

  /* width:90%; */
}
h3,
h4 {
  display: block;
  margin-top: 10px;
  text-align: center;
  font-size: xx-large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h4 {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: x-large;
  background: rgb(161, 173, 185);
  width: 100%;
  border: 2px solid white;
  border-radius: 10px;
  font-family: cursive;
  color: white;
}
.filter {
  display: block;
  /* margin:auto; */
  /* font-weight: bolder; */
  /* font-size: larger; */
  width: 11%;
  padding: 3px;
  margin-top: -6.2rem;
}
#app {
  display: block;
  padding: 5px;
  text-align: center;
  // border: 1px solid rgb(211, 210, 210);
  // border-radius: 5px;
  margin: auto 10rem;
  width: 12%;
  height: 40px;
  // font-size: large;
  // font-weight: 500;
  /* margin-right: 55rem; */
  margin-top: -1.5rem;
}
.date {
  display: block;
  text-align: right;
  margin-right: 5rem;
  margin-top: -45px;
  font-weight: lighter;
  font-size: large;
}
p {
  display: block;
  font-weight: lighter;
  font-size: larger;
  margin: 0px;
  margin-left: 5rem;
}
/* .log-item { */
/* display: block; */
/* align-items: center; */
/* text-align: center; */
/* } */
.text1 {
  /* display: block; */
  width: 50%;
  border: 2px solid gray;
  padding: 8px;
}
button {
  /* margin-left:6rem; */
  padding: 7px;
}
.buttons {
  text-align: right;
  margin-right: 2.6rem;
  margin-top: -3rem;
}
.btn-1 {
  background-color: rgb(251, 252, 249);
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #fafcfb;
  font-weight: bold;
}
.btn-1:hover,
.btn-1:active {
  background: rgb(245, 243, 243);
  color: #04f77e;
}
.btn-1:focus {
  outline: none;
}
.btn-2 {
  background-color: rgb(238, 13, 13);
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #fafcfb;
  font-weight: bold;
}
.btn-2:hover,
.btn-2:active {
  background: rgb(247, 245, 245);
  color: #4d4e4e;
}
.btn-2:focus {
  outline: none;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
