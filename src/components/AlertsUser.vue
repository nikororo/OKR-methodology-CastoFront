<template>
  <div>
    <Head/>

    <div class="row no-gutter cont">
      <toolBar/>

<!--      <div class="col-sm-10 col-md-4 col-lg-2 Private_user">-->
<!--        <div class="bg_color">-->
<!--          <div class="ps_user">-->
<!--            <img class="icon_user" src="../style/img/User.png" alt="User">-->
<!--            <p class="User_name">{{ this.$store.state.user.name }}</p>-->
<!--          </div>-->
<!--          <router-link class="settings_link" active-class="active_settings" to="/private/settingsUser">-->
<!--            Настройки-->
<!--            профиля-->
<!--          </router-link>-->
<!--          <router-link class="settings_link" active-class="active_settings" to="/private/alertsUser">-->
<!--            Оповещения-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->

      <div class="col-md-5 col-lg-10 settings">

        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser" exact>Найстройки
            профиля
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser/alertsUser">Оповещения
          </router-link>
        </div>

        <div class="main_settings">

        </div>
      </div>

    </div>
  </div>
</template>


<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";

export default {
  name: 'settingsUser',
  components: {
    Head, ToolBar
  },
  data: () => ({
    activity: '',
    publicPath: process.env.BASE_URL,
  }),

  methods: {}
}
</script>