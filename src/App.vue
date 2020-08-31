<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

@font-face {
    font-family: "Open Sans"; 
    src: url("../public/OpenSans.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal; 
} 

#app, input, button, select {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

input:active, input:focus, select:focus  {
  outline: none;
}

</style>
