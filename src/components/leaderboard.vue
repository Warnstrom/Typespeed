<template>
  <div>
    <div class="container">
      <div class="container-wrap">
        <div class="row">
          <div class="column">
            <div class="header">
              <h1>Leaderboard</h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>07-05-2020</td>
                  <td>Anton</td>
                  <td>54</td>
                  <td>67%</td>
                </tr>

                <tr>
                  <td>07-05-2020</td>
                  <td>Andreas</td>
                  <td>23</td>
                  <td>24%</td>
                </tr>

                <tr>
                  <td>07-05-2020</td>
                  <td>Jonatan</td>
                  <td>76</td>
                  <td>90%</td>
                </tr>

                <tr>
                  <td>07-05-2020</td>
                  <td>Joel</td>
                  <td>45</td>
                  <td>62%</td>
                </tr>

                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { getScores } from "../api.js";
export default {
  name: "typespeed",
  data: function() {
    return {
      scores: getScores()
    };
  },
  created() {},
  methods: {
    showLeaderboard() {
      return (this.show_leaderboard = true);
    },
    hideLeaderboard() {
      return (this.show_leaderboard = false);
    }
  }
};
</script>

<style scoped>
.container {
  font-weight: bold;
  align-items: center;
  justify-content: center;
  max-height: 500px;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
}
.content {
  transition: all 0.3s;
  width: 620px;
  height: 500px;
  white-space: nowrap;
  margin-left: 75px;
}

.top10,
.GoBack {
  font-weight: bold;
  height: 40px;
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 8px;
  margin-bottom: 5px;
}
button {
  transition: 0.3s;
  color: #fff;
  background-color: var(--primary);
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
button:hover {
  background-color: var(--blue);
  color: white;
}
.header {
  text-align: center;
  margin-left: 80px;
  margin-right: 75px;
}
.BackButton {
margin-right: 0px;
margin-left: -78px;
}

.table thead {
  background-color: var(--primary);
  border: 1px solid var(--primary);
  color: white;
}
.table th,
td {
  padding: 20px 40px 20px 40px;
}
.table tr {
  border-radius: 10px;
}
.table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}
.table tbody {
  height: 100px;
}
.table table {
  border-collapse: collapse;
  
}
.table.sticky th {
  background-color: var(--primary);
  position: sticky;
  top: 0;
}
</style>
