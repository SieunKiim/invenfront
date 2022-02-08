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
  <div class="m-4em">
    <table class="table table-classic table-hover" id="AllTable">
      <thead>
        <tr>
          <!-- <th scope="col">ID</th> -->
          <th scope="col" @click="sortTable(0)">이름</th>
          <th scope="col" @click="sortTable(1)">부서</th>
          <th scope="col" @click="sortTable(2)">장비</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tool in All_data" v-bind:key="tool.id">
          <!-- <th scope="row">{{ tool.id }}</th> -->
          <!-- <th scope="row">{{ tool.user }}</th> -->
          <td>{{ tool.user }}</td>
          <td>{{ tool.부서 }}</td>
          <td>{{ tool.tool_type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/All/";

export default {
  data: () => {
    return {
      name: "",
      All_list: [],
    };
  },
  components: {},
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.All_list = response.data;
        console.log(this.All_list);
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
    searchName(e) {
      this.name = e.target.value
    },
    sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("AllTable");
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

          // if(target.classList.contains('active')){
          //   console.log("이거");
          // }
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
    All_data() {
      return this.All_list.filter(tool =>
        tool.user.includes(this.name));
    }
  }
};
</script>

<style>
/* .table-responsive {
  padding: 3em; 
  margin-top: 5em;
} */
/* .container {
  padding-top: 4em;
  margin-right: 7em;
} */
.label {
  font-size: 4px;
}
th {
  cursor: pointer;
  
}
</style>
