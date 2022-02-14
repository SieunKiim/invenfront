<template>
<div>
  <div>
    <h1>사용자 및 의료기기 정보 입력</h1>
  </div>
  <div id="contai">
    
    <form action="/inven/Medical/add/" method="post" autocomplete='off'>
      
      <input type="text" id="User" name="User" v-model="User_val" placeholder="User" class="topInput">
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


export default {
  data: () => {
    return {
      User_val:'',
      tool_val:'Medical',
      medical_type:'',
      details:'',
      serial_Number:'',
      man_date:''
    }
  },
  methods: {

  }
}
</script>

<style>
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