<template>
<div>
  <div>
    <h1>사용자 및 스크린 사양 입력</h1>
  </div>
  <div id="contai">
    
    <form action="/inven/Screen/add/" method="post" autocomplete='off'>
      
      <input type="text" id="User" name="User" v-model="User_val" placeholder="User" class="topInput">
      <input type="text" id="tool" name="tool" v-model="tool_val" placeholder="Screen" readonly>


      <input type="text" id="size" name="size" v-model="size" placeholder="크기">
      <input type="text" id="brand" name="brand" v-model="brand" placeholder="브랜드">
      <input type="text" id="resolution" name="resolution" v-model="resolution" placeholder="해상도 ex)720x1080">
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
      tool_val:'Screen',
      size:'',
      brand:'',
      resolution:'',
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