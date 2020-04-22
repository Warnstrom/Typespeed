<template>
  <div class="container">
    <div class="content">
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
      <div class="inputContainer">
        <form v-on:submit.prevent>
          <input
            name="username"
            class="textInput"
            v-model="input"
            v-on:keydown.space="wordCheck(); calcAccuracy();"
            v-on:keyup.space.once="startTest(); counter();"
            placeholder="Start typing..."
            :disabled="time != 0 ? false : true"
            spellcheck="false"
            autocomplete="off"
          />
          <button class="playAgainButton" v-on:click="reset();">
            <i class="fa fa-refresh" style="font-size:22px;"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="testReview">
      <div class="content">
        <h1>Test end result</h1>
        <p>WPM (Words per minute): {{ wpm }}</p>
        <p>Accuracy: {{ accuracy }}%</p>
        <p>Correct words: {{ correct }}</p>
        <p>Wrong words: {{ wrong }}</p>
      </div>
      <footer>
        <button class="saveDataButton">Save data</button>
      </footer>
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
      this.wpm = this.correct;
    },
    // Checks for valid words in array and return true it shifts the element from start to end
    wordCheck() {
      let inputWord = this.input;
      if (inputWord.trim() == this.wordList[0]) {
        this.wordList.push(this.wordList.shift());
        this.input = "";
        this.correct++;
        this.total++;
      } else {
        this.wordList.push(this.wordList.shift());
        this.input = "";
        this.total++;
        this.wrong++;
        if (this.correct == 0) {
          this.correct = 0;
        }
      }
    },
    startTest() {
      this.running = true;
    },
    counter() {
      setInterval(() => {
        if (this.time == 0) {
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
      this.wpm = 0;
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
  font-weight: bold;
  font-size: 20px;
  margin: 5px;
}

.wordsContainer > span:first-child {
  background-color: var(--success);
  border-radius: 5px;
  padding: 5px;
}

.testReview {
  height: 350px;
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
  height: 80px;
  width: 100px;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 10px;
}
.saveDataButton {
  font-weight: bold;
  height: 40px;
  width: 100px;
  margin-top: 60px;
  background-color: #eef2f7;
  color: var(--primary);
  font-size: 13px;
  float: right;
  letter-spacing: 1px;
  border-radius: 8px;
  border: 2px solid var(--primary);
}
button:hover {
  background-color: var(--blue);
  border: 2px solid var(--blue);
  color: white;
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
  width: 700px;
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
