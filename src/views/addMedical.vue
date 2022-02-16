<template>
<div>
  <div>
    <h1>사용자 및 의료기기 정보 입력</h1>
  </div>
  <div id="contai">
    
    <form action="/inven/Medical/add/" method="post" autocomplete='off'>
      <!-- <input type="text" id="User" name="User" v-model="User_val" placeholder="User" class="topInput"> -->

      <select name="User" id="User" v-model="User_val" class="select" required>
        <option value="" disabled selected>사용자를 선택하세요</option>
        <option v-for="user in user_list" v-bind:key="user.id">
          {{user.name}}
        </option>
      </select>

      <input type="text" id="tool" name="tool" v-model="tool_val" placeholder="Medical" readonly>
      <input type="text" id="medical_type" name="medical_type" v-model="medical_type" placeholder="의료기기 종류">
      <input type="text" id="details" name="details" v-model="details" placeholder="세부 사항">
      <input type="text" id="serial_Number" name="serial_Number" v-model="serial_Number" placeholder="S/N">
      <input type="date" id="man_date" name="man_date" v-model="man_date" />
      <div class="my-4">
        <button id="submit" type="submit">저장</button>
      </div>
      
    </form>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Medical/add";

export default {
  data: () => {
    return {
      User_val:'',
      tool_val:'Medical',
      medical_type:'',
      details:'',
      serial_Number:'',
      man_date:'',
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

  }
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
#man_date {
  border-radius: 5px;
  width: 202px;
  height: 30px;
}
</style>