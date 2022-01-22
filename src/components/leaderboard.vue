<template>
  <div>
    <div class="row">
      <div class="column" style="width: auto;">
        <div class="header">
          <h1 style="width: 100%;">
            Scoreboard
            <span style="float: left;">
              <router-link to="/typespeed">Go back</router-link>
            </span>
            <span style="float: right;">
              <button v-on:click="loadTop10()">Top 10</button>
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
            <tbody>
              <tr v-for="item in scores" v-bind:key="item.id">
                <td>{{ item.username }}</td>
                <td>{{item.words_per_minute }}</td>
                <td>{{ item.accuracy }}%</td>
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
          console.log("I loaded your data! :)");
          this.scores = response.data;
        })
        .catch(error => {
          this.errored = true;
          return error;
        })
        .finally(() => (this.loading = false));
    },
    loadTop10() {
      this.scores = "";
      axios
        .get("https://warnstrom.com/API/get_top_10.php")
        .then(response => {
          console.log("I loaded your top 10 data! :)");
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
    transition: .3s;

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
  background-color: var(--primary-background);
  border: none;
  border-radius: 10px;
  height: 50vh;
  overflow: scroll;
  overflow-x: hidden;
}
button {
  transition: 0.3s;
  font-size: 20px;
  background-color: var(--primary);
  text-decoration: none;
  padding: 10px;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}
button:hover {
  background-color: var(--button-hover);
  border: none;
  color: white;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
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
    transition: .3s;

}
tbody tr:nth-child(odd) {
    transition: .3s;
  background-color: var(--odd-leaderboard);
}

tbody tr:hover {
  background-color: var(--hover-leaderboard);
}
.table.sticky th {
  background-color: var(--primary);
  position: sticky;
  top: 0px;
}
/* Support for Firefox */
* {
  transition: 0.3s ease-in-out;
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-background);
}

/* Support for Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: var(--scrollbar-background);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-color);
  border-radius: 20px;
  border: none;
}

</style>
