<template>
  <div class="container">
    <div class="container-wrap">
      <leaderboard v-if="show_leaderboard" />
      <typespeed v-else />
      <button v-if="show_leaderboard" class="GoBack" v-on:click="hideLeaderboard();">Go back</button>
      <button v-else class="leaderboard" v-on:click="showLeaderboard();">Leaderboard</button>
    </div>
  </div>
</template>

<script>
import typespeed from "./typespeed.vue";
import leaderboard from "./leaderboard.vue";

export default {
  name: "mainComponent",
  components: {
    typespeed,
    leaderboard
  },
  data: function() {
    return {
      show_leaderboard: false
    };
  },
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

<style>
.container {
  padding-top: 200px;
  position: relative;
  min-height: 1290px;
}
.container-wrap {
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: -15px 0 0 -15px;
}
.column {
  position: relative;
  width: 100%;
  padding: 15px 0 0 0;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-clip: border-box;
}
.card-title {
  margin-bottom: 5px;
  margin-top: 5px;
  position: relative;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.leaderboard,
.GoBack {
  font-weight: bold;
  height: 40px;
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 8px;
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
@media only screen and (max-width: 1080px) {
  .container {
    padding-top: 100px;
  }
}
</style>
