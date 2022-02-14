<template>
<div>
  <div>
    <h1>사용자 및 컴퓨터 사양 입력</h1>
  </div>
  <div id="contai">
    
    <form action="/inven/Computer/add/" method="post" autocomplete='off'>
      
      <!-- <input type="text" id="User" name="User" v-model="User_val" placeholder="User" class="topInput"> -->

      <select name="User" id="User" v-model="User_val" class="select" required>
        <option value="" disabled selected>사용자를 선택하세요</option>
        <option v-for="user in user_list" v-bind:key="user.id">
          {{user.name}}
        </option>
      </select>

      <input type="text" id="tool" name="tool" v-model="tool_val" placeholder="Computer" readonly>
      <input type="text" id="OS" name="OS" v-model="OS_val" placeholder="OS">
      <input type="text" id="CPU" name="CPU" v-model="CPU_val" placeholder="CPU">
      <input type="text" id="RAM" name="RAM" v-model="RAM_val" placeholder="RAM">
      <input type="text" id="VGA" name="VGA" v-model="VGA_val" placeholder="VGA">
      <input type="text" id="SSD_HDD" name="SSD_HDD" v-model="SSD_HDD_val" placeholder="SSD_HDD">
     
      <div class="my-4">
        <button id="submit" type="submit">저장</button>
      </div>
      
    </form>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Computer/add";

export default {
  data: () => {
    return {
      msg: '',
      User_val:'',
      tool_val:'Computer',
      OS_val:'',
      CPU_val:'',
      RAM_val:'',
      VGA_val:'',
      SSD_HDD_val:'',
      user_list: [],
      user_list_len: 0
    }
  },
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.user_list = response.data;
        this.user_list_len = this.user_list.length;
        console.log(this.user_list);
        console.log(this.user_list_len);
      })
      .catch((response) => {
        console.log("Failed", response);
      });
  },
  methods: {

  },
}
</script>

<style>
select{
  margin-top: 50px;
  margin-bottom: 8px; 
  border-radius: 5px;
  width: 202px;
  height: 27px;
}
select option[value=""] [disabled] {
  display: none;
}
input { 
  margin: 8px 2px; 
  border-radius: 5px;
  }
h1 {
  margin-top: 3em;
}
.topInput {
  margin-top: 30px;
}
#contai {
    margin-top: 4em;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid gray;
    border-radius: 30px;
    width : 300px;
}
</style>