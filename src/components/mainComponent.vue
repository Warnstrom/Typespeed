<template>
  <div class="container">
    <div clas="content">
      <div class="header">
        <h1>
          <span class="left-border"></span>
          Hello, {{ username }}
        </h1>
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
          v-on:keydown.space="wordCheck(); startTest();"
          placeholder="Start typing..."
          :disabled="time != 0 ? false : true"
          spellcheck="false"
          autocomplete="off"
        />
      </form>
      <button class="playAgainButton" v-on:click="reset();">Try again</button>
    </div>
    <div class="testReview">
      <h2>{{ username }}'s test stats</h2>
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
      time: 10,
      correctWords: 0,
      wrongWords: 0,
      running: false
    };
  },
  mounted() {},
  methods: {
    // Reads words from file into displayable array
    readWords() {
      this.wordList = getWords();
    },
    // Checks for valid words in array and return true it shifts the element from start to end
    wordCheck() {
      let inputWord = this.input;
      if (inputWord.trim() == this.wordList[0]) {
        const removeFirstElement = this.wordList.shift();
        this.wordList.push(removeFirstElement);
        this.input = "";
        this.correctWords++;
      } else {
        this.wrongWords++;
        this.correctWords--;
      }
    },
    startTest() {
      this.running = true;
      if (this.running) {
        this.counter();
      }
    },
    counter() {
      setInterval(() => {
        if (this.time == 0) {
          this.running = false;
          clearInterval();
        } else {
          this.time--;
        }
      }, 1000);
    },
    reset() {
      this.time = 10;
      this.running = false;
      this.wordList = "";
      this.readWords();
      this.input = "";
      this.wrongWords = 0;
      this.correctWords = 0;
    }
  },
  created() {
    this.readWords();
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
.left-border {
  width: 4px;
  background: #1633ff;
  border-radius: 5px;
  height: 40px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
}
.wordsContainer > span {
  line-height: 45px;
  font-weight: 400;
  font-size: 20px;
  margin: 5px;
}

.wordsContainer > span:first-child {
  color: #25d366;
}

.testReview {
  height: 560px;
  width: 425px;
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin-left: 150px;
}
.testReview > p {
  font-size: 18px;
}

.playAgainButton {
  transition: 0.3s;
  float: right;
  height: 60px;
  width: 100px;
  margin-top: 40px;
  border: none;
  color: #fff;
  background-color: #0069ff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
}
.playAgainButton:hover {
  background-color: #1633ff;
}

.wordsContainer {
  width: 850px;
  height: 80px;
  margin-top: 20px;
  margin-bottom: 150px;
  display: inline-block;
  padding: 15px;
  border: 0;
  border-radius: 10px;
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
  border-radius: 10px;
  border: none;
  outline: 0;
  background-color: #eef2f7;
  vertical-align: top;
  box-sizing: border-box;
}
.textInput:focus {
  border-left: 3px solid #1633ff;
  border-top: none;
  border-bottom: none;
  border-right: 3px solid #1633ff;
}
</style>
