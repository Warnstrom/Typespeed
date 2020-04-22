<template>
  <div id="app">
    <username v-if="usernameIsSet" />
    <mainComponent v-else />
  </div>
</template>

<script>
import mainComponent from "./components/mainComponent.vue";
import username from "./components/username.vue";
import api from "./api.js";
import { getCookie } from "./helper.js";

export default {
  name: "App",
  components: {
    mainComponent,
    username
  },
  data: function() {
    return {
      usernameIsSet: false
    };
  },
  mounted() {
    this.checkUsername();
  },
  methods: {
    checkUsername() {
      const username = getCookie("username");
      username != ""
        ? (this.usernameIsSet = false)
        : (this.usernameIsSet = true);
    },
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
body {
  margin: 0;
  padding: 0 15px 0 15px;
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
  --primary: #1633ff;
  --secondary: #6e84a3;
  --success: #00d97e;
  /*00d97e*/
  --info: #39afd1;
  --warning: #f6c343;
  --danger: #e63757;
  --light: #edf2f9;
  --dark: #12263f;
  --font-family-sans-serif: "Cerebri Sans", sans-serif;
  --primary-text: #031b4e;
}
</style>
