<template>
  <transition name="fade">
    <div>
      <div class="row">
        <div class="column" style="width: auto;">
          <div class="header">
            <h1>
              Leaderboard
              <span style="float: right;"><router-link to="/typespeed">Go back</router-link></span>
              <span style="float: right; margin-right: -500px;"><router-link to="/leaderboard">Top 10</router-link></span>
            </h1>
          </div>
          <div class="scroll">
            <table class="table sticky">
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
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>07-05-2020</td>
                  <td>Robert</td>
                  <td>65</td>
                  <td>87%</td>
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
  </transition>
</template>

<script>
import { getScores } from "../api.js";
export default {
  name: "leaderboard",
  data: function() {
    return {
      scores: getScores()
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-left: 10px;
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
  margin-left: -1100px;
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
  padding: 20px 40px 20px 40px;
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
