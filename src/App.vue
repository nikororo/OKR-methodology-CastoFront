<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import "style/Style.css";
  @import "~bootstrap/dist/css/bootstrap.css";
  
  * {
      margin: 0;
      padding: 0;
  }

  input:active, input:focus, select:focus, button:active, button:focus {
    outline: none;
  }
</style>
