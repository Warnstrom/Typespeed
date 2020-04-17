<template>
  <div class="container">
    <div clas="content">
      <div class="header">
        <h1>Hello, {{ username }}</h1>
        <h3>Here you can try your typing speed.</h3>
        <p style="right: 0;">60s</p>
      </div>
      <div class="wordsContainer">
        <span v-for="word in wordList" :key="word.id">{{ word }}</span>
      </div>
      <form>
        <input
          name="username"
          class="textInput"
          v-model="input"
          v-on:keydown.space="wordCheck"
          placeholder="Start typing..."
        />
        <button class="playAgainButton">Try again</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getWords } from "../helper.js";
import { getCookie } from "../helper.js";

export default {
  name: "mainComponent",
  data: function() {
    return {
      wordList: [],
      input: "",
      username: getCookie("username")
    };
  },
  mounted() {
    this.readWords();
  },
  methods: {
    readWords() {
      this.wordList = getWords();
    },
    wordCheck() {
      let inputWord = this.input;
      if (inputWord.trim() == this.wordList[0]) {
        this.wordList = this.wordList.splice(1, this.wordList.length);
        this.input = "";
      }
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

.content {
  text-align: center;
  line-height: 1.5;
  width: 170px;
  padding: 14px;
  transition: all 0.3s;
  font-size: 14px;
  border-radius: 3px;
  white-space: nowrap;
}
span {
  line-height: 45px;
  font-weight: 400;
  font-size: 25px;
  margin: 5px;
}

span:first-child {
  color: rgb(27, 207, 27);
}

.playAgainButton {
  display: inline-flex;
  height: 80px;
  width: 100px;
  border: 2px solid #123d6a;
  color: #fff;
  background-color: #123d6a;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  border-radius: 14px;
}
.playAgainButton:hover {
  border: 2px solid #0f335a;
  background-color: #0f335a;
}

.wordsContainer {
  width: 800px;
  height: 80px;
  line-height: 34px;
  margin-top: 20px;
  margin-bottom: 150px;
  display: inline-block;
  color: #161b1f;
  padding: 15px;
  border: 0;
  border-radius: 14px;
  outline: 0;
  background-color: #eef2f7;
  vertical-align: top;
  box-sizing: border-box;
  overflow: hidden;
}

.textInput {
  width: 660px;
  height: 80px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  display: inline-block;
  line-height: 34px;
  font-weight: 400;
  color: #161b1f;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 40px;
  border: 0;
  border-radius: 14px;
  outline: 0;
  background-color: #eef2f7;
  vertical-align: top;
  box-sizing: border-box;
}
</style>
