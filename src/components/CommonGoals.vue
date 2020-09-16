<template>
  <div>
    <Head/>

    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-11 col-md-7">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals">
            Дерево целей
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/GoalsQuarter">
            Цели на квартал
          </router-link>
        </div>
        <div class="page">
          <div>
            <button class="button_goals" @click="showAddGoalModal = true">Добавить</button>
            <AddGoalModal v-if="showAddGoalModal" @close="showAddGoalModal = false"/>
          </div>
          <div class="goals companyGoals">
            <p class="nameGoals">Цель компании</p>
            <input type="range" min="1" max="100" v-model="percent" class="slider">
            <p class="percentGoals">{{ percent }}%</p>
          </div>
          <div class="goals otherGoals">
            <div class="line_tree"></div>
            <p class="nameGoals">Цель отдела</p>
            <input type="range" min="1" max="100" v-model="percent" class="slider">
            <p class="percentGoals">{{ percent }}%</p>
          </div>
          <div class="goals otherGoals">
            <div class="line_tree"></div>
            <p class="nameGoals">Цель отдела</p>
            <input type="range" min="1" max="100" v-model="percent" class="slider">
            <p class="percentGoals">{{ percent }}%</p>
          </div>
          <div class="goals otherGoals">
            <div class="line_tree"></div>
            <p class="nameGoals">Цель отдела</p>
            <input type="range" min="1" max="100" v-model="percent" class="slider">
            <p class="percentGoals">{{ percent }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";
import AddGoalModal from './AddGoalModal';

export default {
  name: 'CommonGoals',

  components: {
    Head, ToolBar, AddGoalModal
  },

  data: () => ({
    percent: '',
    showAddGoalModal: false
  }),
}
</script>


<style scoped>
p {
  margin-bottom: 0;
}

button {
  border: none;
}
</style>