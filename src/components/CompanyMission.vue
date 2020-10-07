<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-lg-10 col-md-7">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/companyMission">
            Миссии компании
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals" exact>
            Цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/goalsProtection">
            Защита целей
          </router-link>
        </div>
        <div class="page">
          <div v-if="this.$store.state.missions.length !== 0">

          </div>
          <div v-else class="haveNoMission">
            <div>Здесь еще ничего нет, Вы не составили миссии компании</div>
            <img src="../style/img/CatNoGoals.png" alt="Котик">
          </div>
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

<style>
.haveNoMission {
  text-align: center;
  font-size: 36px;
  color: #0C2528;
  opacity: 0.5;
  padding-top: 70px;
}

.haveNoMission img {
  max-width: 410px;
  padding-top: 30px;
}
</style>