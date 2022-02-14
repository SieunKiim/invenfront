<template>
<div>
  <div>
    <h1>사용자 및 의료기기 정보 입력</h1>
  </div>
  <div id="contai">
    
    <form action="/inven/Others/add/" method="post" autocomplete='off'>
      
      <input type="text" id="User" name="User" v-model="User_val" placeholder="User" class="topInput">
      <input type="text" id="tool" name="tool" v-model="tool_val" placeholder="Others" readonly>


      <input type="text" id="other_tool_name" name="other_tool_name" v-model="other_tool_name" placeholder="장비 이름">
      <input type="text" id="details" name="details" v-model="details" placeholder="세부 사항">
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
      tool_val:'Others',
      other_tool_name:'',
      details:''
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
/* #details {
  height: 200px;
  vertical-align: 0;
} */
</style>