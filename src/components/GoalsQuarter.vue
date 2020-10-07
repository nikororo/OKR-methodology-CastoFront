<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-lg-10 col-md-7">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/MissionCompany">
            Миссия компании
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals" exact>
            Цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/goalsQuarter">
            Защита целей
          </router-link>
        </div>
        <div class="page">
          Тут что-нибудь когда-нибудь будет =)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";

export default {
  name: 'CommonGoals',
  components: {
    Head, ToolBar
  },
}
</script>