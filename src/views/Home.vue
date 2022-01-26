<template>
  <!-- <input class="stage-search" type="text" v-model="search" placeholder="사용자 검색" @input="handleSearchInput" @keydown.tab="KeydownTab" /> -->
<div>
<h2>여긴 홈이여</h2>
    <table>
      <tr>
        <th>이름</th>
        <th>부서</th>
        <th>직책</th>
        <th>장비</th>
      </tr>
      <tr v-for="item in All_list" :key="item.user.name">
        <td>{{item.user.name}}</td>
        <td>{{item.user.department}}</td>
        <td>{{item.user.position}}</td>
        <td>{{item.tool_name}}</td>
      <!-- <h2>{{item.user.name}}</h2> -->
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/All/";

export default {
  data: () => {
    return {
      All_list: []
    };
  },
  components: {

  },
  mounted() {
    axios({
      method: "GET",
      url: url
    })
    .then(response => {
      this.All_list = response.data;
      console.log(this.All_list);
    })
    .catch(response => {
      console.log("Failed", response)

    });
  }
}

</script>

<style>


</style>