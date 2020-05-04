<template>
  <div>
    <div class="row">
      <div class="column" style="width: auto;">
        <div class="header">
          <h1 style="width: 100%;">
            Leaderboard
            <span style="float: left;">
              <router-link to="/typespeed">Go back</router-link>
            </span>
            <span style="float: right;">
              <router-link to="/leaderboard">Top 10</router-link>
            </span>
          </h1>
        </div>
        <div class="scroll">
          <table class="table sticky">
            <thead>
              <tr>
                <th>Name</th>
                <th>WPM</th>
                <th>Accuracy</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody v-for="item in scores" v-bind:key="item.id">
              <tr>
                <td>{{ item.Username }}</td>
                <td>{{item.Words_Per_Minute }}</td>
                <td>{{ item.Accuracy }}%</td>
                <td>{{ item.Date_played.slice(0, 10) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "leaderboard",
  data: function() {
    return {
      scores: ""
    };
  },
  created() {
    this.getScores();
  },
  methods: {
    getScores() {
      axios
        .get("https://warnstrom.com/API/get_scores.php")
        .then(response => {
          console.log(response.data);
          this.scores = response.data;
        })
        .catch(error => {
          this.errored = true;
          return error;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

.header {
  text-align: center;
}
.column {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
.scroll {
  height: 50vh;
  overflow: scroll;
  overflow-x: hidden;
}
a {
  font-size: 20px;
  background: var(--primary);
  text-decoration: none;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}
a:hover {
  background: var(--blue);
}

thead {
  background-color: var(--primary);
  border: 1px solid var(--primary);
  color: white;
}
th,
td {
  text-align: center;
  padding: 20px 40px 20px 40px;
}
td {
  text-align: center;
}
tr {
  border-radius: 10px;
}
tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}
.table.sticky th {
  background-color: var(--primary);
  position: sticky;
  top: 0px;
}
</style>
