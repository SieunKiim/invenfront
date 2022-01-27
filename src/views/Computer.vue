<template>
<div>
    <h1>여긴 컴퓨터</h1>
    <input type="text" v-model="search">
    <div class="Computer_User" v-for="Computer in COM_data" v-bind:key="Computer.id">
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
      search: "",
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
  computed: {
    COM_data() {
      return this.Computer_list.filter(Computer =>
        Computer.user.includes(this.search));
    }
  }
}

</script> 

<style>

</style>