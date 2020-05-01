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
  methods: {}
};
</script>

<style scoped>
.container {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 500px;
  width: 100%;
}
.content {
  transition: all 0.3s;
  white-space: nowrap;
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
</style>
