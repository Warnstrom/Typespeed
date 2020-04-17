<template>
  <div class="container">
    <div class="content">
        <h1>Welcome, please write your username.</h1>
      <form v-on:submit="saveUsername(input)">
        <input name="username" v-model="input" placeholder="Enter your username" />
      </form>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
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
      setCookie(username)
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

input {
  width: 525px;
  height: 60px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  display: inline-block;
  color: #161b1f;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
  border: 0;
  border-radius: 14px;
  outline: 0;
  background-color: #eef2f7;
  vertical-align: top;
  box-sizing: border-box;
}

.content {
  text-align: center;
  line-height: 1.5;
  transition: all 0.3s;
  font-size: 14px;
  border-radius: 3px;
  white-space: nowrap;
}
</style>
