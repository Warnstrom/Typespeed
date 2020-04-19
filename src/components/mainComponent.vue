<template>
  <div class="container">
    <div clas="content">
      <div class="header">
        <h1>Hello, {{ username }}</h1>
        <h3>
          Here you can try your typing speed.
          <span style="float: right;">{{ counter }}s</span>
        </h3>
      </div>
      <div class="wordsContainer">
        <span v-for="word in wordList" :key="word.id">{{ word }}</span>
      </div>
      <form>
        <input
          name="username"
          class="textInput"
          v-model="input"
          v-on:keydown.space="wordCheck();"
          placeholder="Start typing..."
          spellcheck="false"
          autocomplete="off"
        />
        <button class="playAgainButton">Try again</button>
      </form>
    </div>
    <div class="testReview">
      <h2>Typespeed test review</h2>
      <p>Correct words: {{ correctWords }}</p>
      <p>Wrong words: {{ wrongWords }}</p>
    </div>
  </div>
</template>

<script>
import { getWords, getCookie } from "../helper.js";

export default {
  name: "mainComponent",
  data: function() {
    return {
      wordList: [],
      input: "",
      username: getCookie("username"),
      counter: this.timer(),
      correctWords: 0,
      wrongWords: 0,
      running: false
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
      const inputWord = this.input;
      if (this.running) {
        if (inputWord.trim() == this.wordList[0]) {
          this.wordList = this.wordList.splice(1, this.wordList.length);
          this.input = "";
          this.correctWords++;
        } else {
          this.wrongWords++;
        }
      }
    },
    timer() {
      let timeLeft = 60;
      return timeLeft;
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
  color: #161b1f;
}

.content {
  text-align: center;
  line-height: 1.5;
  width: 800px;
  padding: 14px;
  transition: all 0.3s;
  font-size: 14px;
  border-radius: 3px;
  white-space: nowrap;
}
.wordsContainer > span {
  line-height: 45px;
  font-weight: 400;
  font-size: 25px;
  margin: 5px;
}

.wordsContainer > span:first-child {
  color: rgb(27, 207, 27);
}

.testReview {
  height: 500px;
  width: 450px;
  background-color: #eef2f7;
  border-radius: 14px;
  padding: 0 20px 20px 20px;
  margin-left: 200px;
}
.testReview > p {
  font-size: 18px;
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
