<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-7">
        <div class="homePage">Какое-то описание окр</div>
      </div>
    </div>
  </div>
</template>
<script>
import Head from './Head'
import ToolBar from './ToolBar'

export default {
  name: 'Home',
  components: {
    Head, ToolBar
  }
}
</script>

<style>
.homePage {
  background-color: #F4F4F4;
  padding: 40px 180px;
  min-height: calc(100vh - 85px);
  width: 100%;
  box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.5) inset;
}
</style>