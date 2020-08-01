<template>
  <div class="row">
    <div class="column" style="margin: 0 auto; width: 40rem;">
      <h1>Welcome, please choose a username.</h1>
      <form v-on:submit="saveUsername(input)">
        <input name="username" v-model="input" placeholder="Enter your username" autofocus />
        <button class="playAgainButton">Play</button>
      </form>
    </div>
  </div>
</template>

<script>
import { setCookie } from "../helper.js";
export default {
  name: "username",
  data: function() {
    return {
      input: ""
    };
  },
  methods: {
    /**
     * Saves a username in browser cookies/localstorage
     *
     * @param {saveUsername} username
     *
     */
    saveUsername(username) {
      this.$router.push("/typespeed");
      setCookie(username);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
input {
  transition: 0.3s;
  width: 100%;
  height: 60px;
  font-size: 20px;
  line-height: 34px;
  display: inline-block;
  color: #031b4e;
  padding: 0 10px 0 20px;
  border: none;
  border-radius: 8px;
  outline: 0;
  color: var(--primary-text);
  background-color: var(--primary-background);
  vertical-align: top;
  box-sizing: border-box;
}
input:focus {
  transition: none;
  border-left: 3px solid var(--primary);
  border-top: none;
  border-bottom: none;
  border-right: 3px solid var(--primary);
}
.playAgainButton {
  transition: 0.3s;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  background-color: var(--primary);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
}
.playAgainButton:hover {
  background-color: var(--blue);
}
</style>
