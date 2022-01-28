<template>
<div>
  <div class="container w-25 mx-5 mt-5">
    <div class="form-floating">
      <!-- <textarea class="form-control" style="height: 10px" placeholder=" " id="userSearch" :value="name" @input="searchName"></textarea> -->
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
          <th scope="col">OS</th>
          <th scope="col">CPU</th>
          <th scope="col">RAM</th>
          <th scope="col">VGA</th>
          <th scope="col">SSD/HDD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="computer in Computer_data" v-bind:key="computer.id">
          <th scope="row">{{ computer.user }}</th>
          <td>{{ computer.department }}</td>
          <td>{{ computer.position }}</td>
          <td>{{ computer.OS }}</td>
          <td>{{ computer.CPU }}</td>
          <td>{{ computer.RAM }}</td>
          <td>{{ computer.VGA }}</td>
          <td>{{ computer.SSD_HDD }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Computer/";

export default {
  data: () => {
    return {
      name: "",
      Computer_list: [],
    };
  },
  components: {},
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.Computer_list = response.data;
        console.log(this.Computer_list);
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
    Computer_data() {
      return this.Computer_list.filter(computer =>
        computer.user.includes(this.name));
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