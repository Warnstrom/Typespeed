<template>
  <div id="app">
    <div class="container">
      <div class="container-wrap">
        <div class="row">
          <div class="column">
            <div class="card">
              <header class="header-container">
                <div class="card-body">
                  <div class="theme-switch-wrapper">
                    <!--<em>Try out dark mode -></em>-->
                    <label class="theme-switch" for="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        v-on:click="toggle()"
                      />
                      <div class="slider round"></div>
                    </label>
                    <button class="">Multiplayer</button>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "./helper.js";

export default {
  name: "App",
  data: function () {
    return {
      toggleTheme: false,
    };
  },
  mounted() {
    this.checkUsername();
  },
  methods: {
    toggle() {
      if (this.toggleTheme === false) {
        this.toggleTheme = true;
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        this.toggleTheme = false;
        document.documentElement.setAttribute("data-theme", "");
      }
    },
    checkUsername() {
      // Check if we've saved a username in cookies if not redirect to /login page
      const username = getCookie("username");
      if (username != "") {
        this.$router.push("/typespeed");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
em {
  margin-right: 10px;
  font-size: 1rem;
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: var(--primary-text);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}

input:checked + .slider {
  background-color: var(--primary);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
@font-face {
  font-family: "Cerebri Sans";
  src: url(../fonts/Cerebri-Sans/CerebriSans-Light.eot);
  src: url(../fonts/Cerebri-Sans/CerebriSans-Light.ttf);
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Cerebri Sans";
  src: url(../fonts/Cerebri-Sans/CerebriSans-Regular.eot);
  src: url(../fonts/Cerebri-Sans/CerebriSans-Regular.ttf);
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Cerebri Sans";
  src: url(../fonts/Cerebri-Sans/CerebriSans-Bold.eot);
  src: url(../fonts/Cerebri-Sans/CerebriSans-Bold.ttf);
  font-weight: 700;
  font-style: normal;
}
body,
html {
  transition: 0.3s;
  background: var(--white);
  height: 100%;
  margin: 0;
  color: var(--primary-text);
  font-variant-numeric: tabular-nums 0;
}
body,
* {
  font-family: "Cerebri Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
::after,
::before {
  box-sizing: border-box;
}
* {
  outline: none;
}

#app {
  padding: 0 15px 0 15px;
  height: 100%;
}
.container {
  padding-top: 200px;
  position: relative;
  min-height: 100%;
}
.container-wrap {
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: -15px 0 0 -15px;
}
.column {
  position: relative;
  width: 100%;
  padding: 15px 0 0 0;
}
span > a {
  transition: 0.3s;
}
a {
  transition: 0.3s;
  font-size: 20px;
  background-color: var(--primary);
  text-decoration: none;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}
a:hover {
  background: var(--button-hover);
}
.header-container {
  background-color: #eef2f7;
  display: flex;
  justify-content: flex-start;
  transition: 0.3s;
  background-color: var(--primary-background);
  border-radius: 10px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-clip: border-box;
}
.card-title {
  margin-bottom: 5px;
  margin-top: 5px;
  position: relative;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

@media only screen and (max-width: 1080px) {
  .container {
    padding-top: 100px;
  }
}
html {
  --blue: #1228ce;
  --indigo: #727cf5;
  --purple: #6b5eae;
  --pink: #ff679b;
  --red: #e63757;
  --orange: #fd7e14;
  --yellow: #f6c343;
  --green: #00d97e;
  --teal: #02a8b5;
  --cyan: #39afd1;
  --white: #ffffff;
  --gray: #95aac9;
  --gray-dark: #3b506c;
  --primary: #0779e4;
  --secondary: #6e84a3;
  --success: #00d97e;
  --info: #39afd1;
  --warning: #f6c343;
  --danger: #e63757;
  --primary-background: #eef2f7;
  --hover-leaderboard: #dbdbdb;
  --odd-leaderboard: #f2f2f2;
  --button-hover: #0356a3;
  --dark: #12263f;
  --font-family-sans-serif: "Cerebri Sans", sans-serif;
  --primary-text: #031b4e;
}
html[data-theme="dark"] {
  --primary-text: white;
  --primary-background: #152e4d;
  --odd-leaderboard: #122842;
  --hover-leaderboard: #10233a;
  --button-hover: #00376b;
  --white: #0f253b;
  --primary: #00488b;
  --blue: #00488b;
}
</style>
