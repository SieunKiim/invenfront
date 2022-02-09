<template>
<div>
  <div class="container p-5">
  <div class="float-start">
    <div class="form-floating form-control-sm">
      <!-- <textarea class="form-control" style="height: 10px" placeholder=" " id="userSearch" :value="name" @input="searchName"></textarea> -->
      <input type="text" class="form-control" id="userSearch" :value="name" @input="searchName" placeholder="사용자 검색">
      <label for="userSearch">사용자 검색</label>
    </div>
  </div>
  <div class="float-start p-3 mt-2">
    <button type="button" class="btn btn-outline-success btn-sm" @click="onClickRedirect">사용자 추가</button>
  </div>
  <div class="float-end p-3 mt-2">
    <button type="button" class="btn btn-outline-primary btn-sm" @click="onClickAddRedirect">스크린 추가</button>
  </div>
  <div class="m-4em">
    <table class="table table-classic table-hover" id="ScreenTable">
      <thead>
        <tr>
          <th scope="col" @click="sortTable(0)">이름</th>
          <th scope="col" @click="sortTable(1)">부서</th>
          <th scope="col" @click="sortTable(2)">직책</th>
          <th scope="col" @click="sortTable(3)">브랜드</th>
          <th scope="col" @click="sortTable(4)">SIZE</th>
          <th scope="col" @click="sortTable(5)">해상도</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="screen in Screen_data" v-bind:key="screen.id">
          <!-- <th scope="row">{{ screen.user }}</th> -->
          <td>{{ screen.user }}</td>
          <td>{{ screen.department }}</td>
          <td>{{ screen.position }}</td>
          <td>{{ screen.brand }}</td>
          <td>{{ screen.size }}</td>
          <td>{{ screen.resolution }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Screen/";

export default {
  data: () => {
    return {
      name: "",
      Screen_list: [],
    };
  },
  components: {},
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.Screen_list = response.data;
        console.log(this.Screen_list);
      })
      .catch((response) => {
        console.log("Failed", response);
      });
  },
  methods: {
    onClickRedirect(){
      this.$router.push('/user/');
      // console.log("클릭");
    },
    onClickAddRedirect(){
      this.$router.push('/Screen/add/');
      // console.log("클릭");
    },
    searchName(e) {
      this.name = e.target.value
    },
    sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("ScreenTable");
      switching = true;
      // Set the sorting direction to ascending:
      dir = "asc";
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount ++;
        } else {
          /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }
  },
  computed: {
    Screen_data() {
      return this.Screen_list.filter(screen =>
        screen.user.includes(this.name));
    }
  }
};
</script> 

<style>
/* .container {
  padding-top: 4em;
  margin-right: 7em;
} */
.label {
  font-size: 4px;
}
</style>