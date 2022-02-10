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
    <button type="button" class="btn btn-outline-primary btn-sm" @click="onClickAddRedirect">의료기기 추가</button>
  </div>
  <div class="m-4em">
    <table class="table table-classic table-hover" id="MedicalTable">
      <thead>
        <tr>
          <th scope="col" @click="sortTable(0)">이름</th>
          <th scope="col" @click="sortTable(1)">부서</th>
          <th scope="col" @click="sortTable(2)">직책</th>
          <th scope="col" @click="sortTable(3)">기기 종류</th>
          <th scope="col" @click="sortTable(4)">S / N</th>
          <th scope="col" @click="sortTable(5)">세부 정보</th>
          <th scope="col" @click="sortTable(6)">생산 년도</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medical in Medical_data" v-bind:key="medical.id">
          <!-- <th scope="row">{{ medical.user }}</th> -->
          <td>{{ medical.user }}</td>
          <td>{{ medical.department }}</td>
          <td>{{ medical.position }}</td>
          <td>{{ medical.medical_type }}</td>
          <td>{{ medical.serial_Number }}</td>
          <td>{{ medical.details }}</td>
          <td>{{ medical.man_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
let url = "http://127.0.0.1:8000/inven/Medical/";

export default {
  data: () => {
    return {
      name: "",
      Medical_list: [],
    };
  },
  components: {},
  mounted() {
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        this.Medical_list = response.data;
        console.log(this.Medical_list);
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
      this.$router.push('/Medical/add/');
      // console.log("클릭");
    },
    searchName(e) {
      this.name = e.target.value
    },
    sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("MedicalTable");
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
    Medical_data() {
      return this.Medical_list.filter(medical =>
        medical.user.includes(this.name));
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
