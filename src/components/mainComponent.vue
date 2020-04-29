<template>
  <div class="container">
    <div class="content">
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

<style scoped>
.container {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.content {
  transition: all 0.3s;
  white-space: nowrap;
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
</style>
