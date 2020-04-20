<template>
  <div class="container">
    <div clas="content">
      <div class="header">
        <h1>
          <span class="left-border"></span>
          Hello, {{ username }}
          <span style="float: right;">{{ time }}s</span>
        </h1>
        <h3>Here you can try your typing speed.</h3>
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
      <div class="header">
        <h2>Test end result</h2>
      </div>
      <div class="reviewContent">
        <p>WPM (Words per minute): {{ wpm }}</p>
        <p>Accuracy: {{ accuracy }}%</p>
        <p>Correct words: {{ correct }}</p>
        <p>Wrong words: {{ wrong }}</p>
      </div>
      <div class="footer">
        <button class="saveDataButton">Save data</button>
      </div>
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
      time: 60,
      correct: 0,
      total: 0,
      wrong: 0,
      wpm: 0,
      accuracy: 0,
      running: false
    };
  },
  mounted() {},
  methods: {
    // Reads words from file into displayable array
    readWords() {
      this.wordList = getWords();
    },
    calcAccuracy() {
      this.accuracy = Math.round((this.correct / this.total) * 100);
    },
    calcWordsPerMinute() {
      this.wpm = Math.round((this.correct / this.time) * 100);
    },
    // Checks for valid words in array and return true it shifts the element from start to end
    wordCheck() {
      let inputWord = this.input;
      if (inputWord.trim() == this.wordList[0]) {
        const removeFirstElement = this.wordList.shift();
        this.wordList.push(removeFirstElement);
        this.input = "";
        this.correct++;
        this.total++;
      } else {
        const removeFirstElement = this.wordList.shift();
        this.wordList.push(removeFirstElement);
        this.input = "";
        this.total++;
        this.wrong++;
        if (this.correct === 0) {
          this.correct = 0;
        } else {
          this.correct--;
        }
      }
    },
    startTest() {
      this.calcAccuracy();

      /*this.running = true;
      if (this.running) {
        this.counter();
      }*/
    },
    counter() {
      setInterval(() => {
        if (this.time == 0) {
          this.running = false;
          clearInterval();
        } else {
          this.calcWordsPerMinute();
          this.time--;
        }
      }, 1000);
    },
    reset() {
      this.time = 60;
      this.running = false;
      this.wordList = "";
      this.readWords();
      this.input = "";
      this.wrong = 0;
      this.correct = 0;
      this.total = 0;
      this.accuracy = 0;
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
}

.left-border {
  width: 4px;
  background: var(--primary);
  border-radius: 5px;
  height: 35px;
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
  color: var(--success);
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
.playAgainButton {
  float: right;
  height: 60px;
  width: 100px;
  margin-top: 40px;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 10px;
}
.saveDataButton {
  height: 60px;
  width: 80px;
  margin-top: 40px;
  font-size: 10px;
  float: bottom;
  letter-spacing: 1px;
  border-radius: 10px;
}
button:hover {
  background-color: var(--blue);
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
  border-left: 3px solid var(--primary);
  color: var(--primary-text);
  border-top: none;
  border-bottom: none;
  border-right: 3px solid var(--primary);
}
</style>
