<template>
  <div>
    <Head/>

    <div class="row no-gutter cont">
      <toolBar/>

      <div class="col-lg-10 col-md-7">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals" exact>
            Дерево целей
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/GoalsQuarter">
            Цели на квартал
          </router-link>
        </div>

        <div class="page">
          Тут что-нибудь когда-нибудь будет =3
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