<template>
<div>
    <h1>여긴 컴퓨터</h1>
    <div class="Computer_User" v-for="Computer in Computer_list" v-bind:key="Computer.id">
        <h3>{{Computer.user}}</h3>
    </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Computer/";

export default {
  data: () => {
    return {
      Computer_list: []
    };
  },
//   components: {

//   },
  mounted() {
    axios({
      method: "GET",
      url: url
    })
    .then(response => {
      this.Computer_list = response.data;
    })
    .catch(response => {
      console.log("Failed", response)

    });
  },
//   methods: { // 로직 들어간다는디

//   }
}

</script> 

<style>

</style>