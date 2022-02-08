<template>
  <div id="app" class="demo">
    <h1>사용자 추가하기</h1>
    <h6>공용 물품은 "공용"으로 적어주세요</h6>

    <form action="/inven/user/" method="post" autocomplete='on'>
        <!-- {% csrf_token %} -->
        <div v-for="item in formItems" :key="item.id" class='form-item'>
            <label :for="item.id">{{ item.label }} </label>
            <input :type="item.type" :id="item.id" :name="item.id" v-model="item.value" :placeholder="item.placeholder">
        </div>
        <button type="submit">저장</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '이름',
          id: 'name',
          type: 'text',
          value: '',
          placeholder:''
        },
        {
          label: '부서',
          id: 'department',
          type: 'text',
          value: '',
          placeholder:''
        },
        {
          label: '직책',
          id: 'position',
          type: 'text',
          value: '',
          placeholder:''
        },
      ]
    };
  }
};
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 20px 30px;
  /* margin-top: 4em; */
  /* margin-bottom: 40px; */
  margin: 4em;
  user-select: none;
  overflow-x: auto;
}

.form-item {
    margin: 1em auto;
}

.form-item label {
    margin-right: 170px;
    display: block;
}

button {
  font-size: 1em;
}

</style>