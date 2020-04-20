<template>
  <div class="container">
    <div clas="content">
      <div class="header">
        <h1>Hello, {{ username }}</h1>
        <h3>
          Here you can try your typing speed.
          <span style="float: right;">{{ time }}s</span>
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
      </form>
      <button class="playAgainButton" v-on:click="reset();">Try again</button>
    </div>
    <div class="testReview">
      <h2>Typespeed test review</h2>
      <p>Correct words: {{ correctWords }}</p>
      <p>Wrong words: {{ wrongWords }}</p>
    </div>
  </div>
</template>

<script>
import { getWords, getCookie, timer } from "../helper.js";

export default {
  name: "mainComponent",
  data: function() {
    return {
      wordList: [],
      input: "",
      username: getCookie("username"),
      time: "",
      correctWords: 0,
      wrongWords: 0
    };
  },
  mounted() {
    this.readWords();
    this.counter();
  },
  methods: {
    readWords() {
      this.wordList = getWords();
    },
    wordCheck() {
      let inputWord = this.input;
      console.log(this.input[0]);
      if (inputWord.trim() == this.wordList[0]) {
        const removeFirstElement = this.wordList.shift();
        this.wordList.push(removeFirstElement)
        this.input = "";
        this.correctWords++;
      } else {
        this.wrongWords++;
        this.correctWords--;
      }
    },
    counter() {
      this.time = timer();
    },
    reset() {
      this.wordList = "";
      this.readWords();
      this.input = "";
      this.wrongWords = 0;
      this.correctWords = 0;
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
  float: right;
  height: 60px;
  width: 100px;
  margin-top: 15px;
  border: 1px solid #2b5b8f;
  color: #fff;
  background-color: #2b5b8f;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 14px;
}
.playAgainButton:hover {
  border: 2px solid #0f335a;
  background-color: #0f335a;
}

.wordsContainer {
  width: 850px;
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
  width: 100%;
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
