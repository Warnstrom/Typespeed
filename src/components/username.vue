<template>
  <div class="row">
    <div class="column">
      <h1>Welcome, please write your username.</h1>
      <form v-on:submit="saveUsername(input)">
        <input name="username" v-model="input" placeholder="Enter your username" />
        <button class="playAgainButton">Log in</button>
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
    saveUsername(username) {
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
  background-color: #eef2f7;
  vertical-align: top;
  box-sizing: border-box;
}
input:focus {
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
