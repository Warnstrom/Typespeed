<template>
  <transition name="fade">
    <div>
      <div class="row">
        <h1 style="width: 100%;">
          <span class="left-border"></span>
          Hello, {{ username }}
          <span style="float: right;">{{ time }}s</span>
        </h1>
      </div>
      <div class="row">
        <h3 style="width: 100%;">Here you can try your typing speed.
        <span style="float: right;"><router-link to="/leaderboard">Leaderboard</router-link></span>
        </h3>
      </div>
      <div class="row">
        <div class="column inputs">
          <div class="card">
            <div class="wordsContainer">
              <span v-for="word in wordList" :key="word.id">{{ word }}</span>
            </div>
            <div class="inputContainer">
              <form v-on:submit.prevent>
                <input
                  name="username"
                  class="textInput"
                  v-model="input"
                  v-on:keydown.space="wordCheck(); calcAccuracy(); startTest();"
                  placeholder="Start typing..."
                  :disabled="time != 0 ? false : true"
                  spellcheck="false"
                  autocomplete="off"
                />
              </form>
            </div>
          </div>
        </div>
        <div class="column results">
          <div class="card">
            <div class="testReview">
              <div class="card-body">
                <h1 style="margin-top: 0;">Test result</h1>
                <p>WPM (Words per minute): {{ wpm }}</p>
                <p>Accuracy: {{ accuracy }}%</p>
                <p>Correct words: {{ correct }}</p>
                <p>Wrong words: {{ wrong }}</p>
                <footer>          
                  <button name="button" v-on:click="timerRunning(); reset(); alert();">
                    <span>Save data</span>
                  <div id="alert">Successfully saved!</div>
                  </button>
                  <button
                    class="playAgainButton"
                    style="margin-left: 70px;"
                    v-on:click="reset();"
                  >Restart</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { getWords, getCookie } from "../helper.js";
let timer;

export default {
  name: "mainContent",
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
  created() {
    this.readWords();
  },
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
      if (this.running == false) {
        let that = this;
        timer = setInterval(function() {
          that.counter();
        }, 1000);
      }
      this.running = true;
    },
    counter() {
      if (this.time == 0) {
        clearInterval(timer);
      } else {
        this.calcWordsPerMinute();
        this.time--;
      }
    },
    timerRunning() {
      if (this.time != 0) {
        document.getElementById("button").disabled = true;
      }
    },
    alert() {
  var x = document.getElementById("alert");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    },
    reset() {
      clearInterval(timer);
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
  }
};
</script>

<style scoped>
.inputs {
  -webkit-box-flex: 0;
  width: 100%;
  height: 100%;
}
.results {
  width: 100%;
  height: auto;
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
.wordsContainer {
  width: auto;
  max-height: 70px;
  padding: 15px;
  margin-bottom: 5%;
  border-radius: 10px;
  background-color: #eef2f7;
  overflow: hidden;
}

.wordsContainer > span {
  line-height: 45px;
  font-weight: bold;
  font-size: 22px;
  margin: 0 10px 0 10px;
}
.wordsContainer > span:first-child {
  background-color: var(--success);
  border-radius: 8px;
  padding: 6px;
}
.inputContainer {
  margin-top: 5%;
}
.textInput {
  width: 100%;
  height: 70px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  display: inline-block;
  line-height: 34px;
  font-weight: 400;
  padding: 0 10px 0 10px;
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
.testReview {
  font-weight: bold;
  background-color: #eef2f7;
  border-radius: 10px;
}
.testReview > p {
  font-size: 18px;
}

#alert {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: var(--success);
  color: var(--primary-text);
  text-align: center;
  border-radius: 8px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 280px;
}
#alert.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 280px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 280px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 280px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 280px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

footer {
  display: flex;
  height: 50%;
}
button {
  font-weight: bold;
  background-color: var(--primary-background);
  color: var(--primary);
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
button:hover {
  background-color: var(--blue);
  border: none;
  color: white;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
}
</style>
