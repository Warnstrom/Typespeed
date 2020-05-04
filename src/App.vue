<template>
  <div id="app">
    <div class="container">
      <div class="container-wrap">
        <transition name="fade">
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
  data: function() {
    return {};
  },
  mounted() {
    this.checkUsername();
  },
  methods: {
    checkUsername() {
      const username = getCookie("username");
      if (username != "") {
        this.$router.push("/typespeed");
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
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
a {
  font-size: 20px;
  background: var(--primary);
  text-decoration: none;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}
a:hover {
  background: var(--blue);
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
:root {
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
  --primary: #4058d1;
  --secondary: #6e84a3;
  --success: #00d97e;
  --info: #39afd1;
  --warning: #f6c343;
  --danger: #e63757;
  --primary-background: #eef2f7;
  --light: #edf2f9;
  --dark: #12263f;
  --font-family-sans-serif: "Cerebri Sans", sans-serif;
  --primary-text: #031b4e;
}
</style>
