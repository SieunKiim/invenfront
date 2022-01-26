<template>
  <!-- <input class="stage-search" type="text" v-model="search" placeholder="사용자 검색" @input="handleSearchInput" @keydown.tab="KeydownTab" /> -->
<h2>여긴 홈이여</h2>
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