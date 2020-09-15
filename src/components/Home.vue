<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <CommonGoals class="col-sm-11 col-md-4 col-lg-11"/>
    </div>
  </div>
</template>
<script>
import Head from './Head'
import ToolBar from './ToolBar'
import CommonGoals from './CommonGoals'

export default {
  name: 'Home',
  components: {
    Head, ToolBar, CommonGoals
  }
}
</script>
