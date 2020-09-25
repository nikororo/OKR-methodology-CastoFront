<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-md-5 col-lg-10 settings">
        <div class="header_targets">
          <h2 class="h2_user_name">{{ this.$store.state.user.name }}</h2>
        </div>
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/PlanWeek">Планы на неделю
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/GoalsUser">Цели</router-link>
        </div>
        <div class="pustota"></div>
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