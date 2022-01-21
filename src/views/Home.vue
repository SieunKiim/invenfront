<template>
  <input class="stage-search" type="text" v-model="search" placeholder="사용자 검색" @input="handleSearchInput" @keydown.tab="KeydownTab" />

</template>

<script>
import apiBoard from '@/data/Data.js';

export default {
    mounted() {
      apiBoard.getArticle(1)
      .then(function (response) {
        console.log("getArticle",response)
      })
      .catch(function (e) {
        console.log(e);
      });
    }
}

</script>

<style>

</style>