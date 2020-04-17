<template>
  <div id="app">
    <username v-if="usernameIsSet" /> 
    <mainComponent v-else/>
  </div>
</template>

<script>
import mainComponent from './components/mainComponent.vue'
import username from './components/username.vue'
import { getCookie } from './helper.js'


export default {
  name: 'App',
  components: {
    mainComponent,
    username
  },
    data: function() {
    return {
      usernameIsSet: true
    };
  },
  mounted() {
    this.checkUsername();
  },
  methods: {
    checkUsername() {
      const username = getCookie("username");
      username != "" ? (this.usernameIsSet = false) : (this.usernameIsSet = true);
    }
  }
}
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
    --font-family-sans-serif: "Cerebri Sans", sans-serif;
}
</style>
