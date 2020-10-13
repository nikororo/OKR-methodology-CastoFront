<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-md-10 col-lg-10 settings">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser" exact>Найстройки
            профиля
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser/alertsUser">
            Оповещения
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
  }),

  methods: {}
}
</script>