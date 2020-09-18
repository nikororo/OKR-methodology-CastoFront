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
          <div>
            <button class="button_goals" @click="showAddGoalModal = true">Добавить</button>
            <AddGoalModal v-if="showAddGoalModal" @close="showAddGoalModal = false"/>
          </div>

          <div class="block_goals">
            <div class="goals companyGoals">
              <p class="nameGoals">Название командной цели</p>
              <input type="range" min="1" max="100" v-model="percent" class="slider">
              <p class="percentGoals">{{ percent }}%</p>
            </div>
            <div class="goals_comand">
              <div class="goals otherGoals" v-for="goal in this.goals" v-bind:key="goal.id">
                <p> {{ goal.title }}</p>
                <input type="range" min="1" max="100" v-model="percent" class="slider">
                <p class="percentGoals">{{ percent }}%</p>
              </div>
              <div class="create_goal">
                <button @click="add_goal"><img src="../style/img/Plus.png" alt="Add Goal"></button>
                <input class="input_creat_goal" type="text" placeholder="Добавить КР" v-model="new_goal.title">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";
import AddGoalModal from "@/components/AddGoalModal";

export default {
  name: 'goalsQuarter',
  components: {
    Head, ToolBar, AddGoalModal
  },
  data: () => ({
    percent: '',
    showAddGoalModal: false,
    new_goal: {
      title: ''
    },
    goals: []
  }),
  methods: {
    add_goal() {
      if (this.new_goal.title !== '') {
        this.goals.push({
          title: this.new_goal.title
        });
        this.new_goal.title = '';
      }
    }
  }
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
