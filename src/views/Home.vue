<template>
<div>
  <div class="form-floating">
    <input type="text" class="form-control " id="userSearch" v-model="search" label="🔎" placeholder="사용자 검색">
    <label for="userSearch">사용자 검색</label>
  </div>
  <div class="table-responsive">
    <table class="table table-classic table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">장비</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tool in All_data" v-bind:key="tool.id">
          <th scope="row">{{ tool.id }}</th>
          <td>{{ tool.user }}</td>
          <td>{{ tool.부서 }}</td>
          <td>{{ tool.tool_type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/All/";

export default {
  data: () => {
    return {
      search: "",
      All_list: [],
    };
  },
  components: {},
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.All_list = response.data;
        console.log(this.All_list);
      })
      .catch((response) => {
        console.log("Failed", response);
      });
  },
  computed: {
    All_data() {
      return this.All_list.filter(tool =>
        tool.user.includes(this.search));
    }
  }
};
</script>

<style>
.table-responsive {
  padding: 3em;
  margin-top: 5em;
}
</style>
