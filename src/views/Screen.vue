<template>
<div>
  <div class="container w-25 mx-5 mt-5">
    <div class="form-floating">
      <input type="text" class="form-control" id="userSearch" :value="name" @input="searchName" placeholder="사용자 검색">
      <label for="userSearch">사용자 검색</label>
    </div>
  </div>
  <div class="table-responsive mx-5 mt-2">
    <table class="table table-classic table-hover">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직책</th>
          <th scope="col">브랜드</th>
          <th scope="col">SIZE</th>
          <th scope="col">해상도</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="screen in Screen_data" v-bind:key="screen.id">
          <th scope="row">{{ screen.user }}</th>
          <td>{{ screen.department }}</td>
          <td>{{ screen.position }}</td>
          <td>{{ screen.brand }}</td>
          <td>{{ screen.size }}</td>
          <td>{{ screen.resolution }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Screen/";

export default {
  data: () => {
    return {
      name: "",
      Screen_list: [],
    };
  },
  components: {},
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.Screen_list = response.data;
        console.log(this.Screen_list);
      })
      .catch((response) => {
        console.log("Failed", response);
      });
  },
  methods: {
    searchName(e) {
      this.name = e.target.value
    }
  },
  computed: {
    Screen_data() {
      return this.Screen_list.filter(screen =>
        screen.user.includes(this.name));
    }
  }
};
</script> 

<style>
.container {
  padding-top: 4em;
  margin-right: 7em;
}
.label {
  font-size: 4px;
}
</style>