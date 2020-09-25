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
          <router-link class="link_targets" active-class="active_link_targets" to="/PlanWeek">Планы на
            неделю
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/GoalsUser">Цели
          </router-link>
        </div>
        <div class="main_plan_week">
          <div class="scale_bg">
            <div class="scale">
              <div class="scale_first">
                2
              </div>
              <div class="scale_middle">
                4
              </div>
              <div class="scale_last">
                1
              </div>
            </div>
          </div>
          <div class="tasks">
            <div class="status_tasks">
              <h2 class="h2_status_tasks">Одобренные цели
                <div class="circle_status_planner"></div>
              </h2>
              <div class="task_goals">
                <span>Название предложенной цели</span>
              </div>
              <div class="task_goals">
                <span>Название предложенной цели</span>
              </div>
            </div>
            <div class="status_tasks">
              <h2 class="h2_status_tasks">Неодобренные цели
                <div class="circle_status_ready"></div>
              </h2>
              <div class="task_goals">
                <span>Название предложенной цели</span>
              </div>
              <div class="task_goals">
                <span>Название предложенной цели</span>
              </div>
              <div class="task_goals">
                <span>Название предложенной цели</span>
              </div>
              <div class="task_goals">
                <span>Название предложенной цели</span>
              </div>
            </div>
          </div>
        </div>
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