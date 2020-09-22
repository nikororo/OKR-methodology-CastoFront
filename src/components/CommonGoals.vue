<template>
  <div>
    <Head/>

    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-7">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals">
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
          <div class="main_tree" v-if="haveGoals">
            <div class="companyGoals" v-for="goal in goalComp" v-bind:key="goal.id">
              <p class="nameGoals">Цель компании</p>
              <input type="range" min="1" max="100" v-model="avrg" class="slider">
              <p  class="percentGoals">{{avrg}}%</p>
            </div>

            <div class="goals_comand">
              <div class="goals otherGoals" v-for="goal in goals" :key="goal.id">
                <p> {{ goal.title }}</p>
                <input  type="range" min="1" max="100" v-model="goal.percent" class="slider">
                <p class="percentGoals">{{ goal.percent }}%</p>
              </div>

              <div class="create_goal">
                <div>
                  <button @click="add_goal"><img src="../style/img/Plus.png" alt="Add Goal"></button>
                  <input class="input_creat_goal" type="text" placeholder="Добавить КР" v-model="new_goal.title">
                </div>
                <div class="meaning">
                  <div class="start_meaning">
                    <span>Начальное значение</span>
                    <input class="input_percent" type="number" placeholder="0" v-model="new_goal.percent">
                    <span>%</span>
                  </div>
                  <div class="finish_meaning">
                    <span>Итоговое значение</span>
                    <input class="input_percent" type="number" placeholder="100">
                    <span>%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div v-else class="haveNoGoals">
            <div>Здесь еще ничего нет, Вы не составили свое дерево целей</div>
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
import AddGoalModal from './AddGoalModal';

export default {
  name: 'CommonGoals',
  components: {
    Head, ToolBar, AddGoalModal
  },

  data: () => ({
    showAddGoalModal: false,
    haveGoals: true,
    new_goal: {
      percent: '',
      percent_max: '',
      title: '',
      id: ''
    },
    goals: [],
    goalComp:{
      percent: ''
    }
  }),
  computed: {
    avrg () {
      let percentAll = 0;
      let itemsFound = 0;
      let item = 0;
      let len = this.goals.length;
      let result = 0;
      for (let i = 0; i < len; i++) {
        item = Number(this.goals[i].percent)
        percentAll = item + percentAll;
        itemsFound = itemsFound + 1;
        console.log(percentAll)
        console.log(itemsFound)
        result = percentAll / itemsFound;
        result = result.toFixed(2)

      }
      return result
    }
  },
  methods: {
    add_goal() {
      if (this.new_goal.title !== '' && this.new_goal.percent !== '') {
        this.goals.push({
          title: this.new_goal.title,
          percent: this.new_goal.percent,
          percent_max: this.new_goal.percent_max,
        });
        this.new_goal.title = '';
        this.new_goal.percent = '';
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

.haveNoGoals {
  text-align: center;
  font-size: 36px;
  color: #0C2528;
  opacity: 0.5;
  padding-top: 10px;
}

.haveNoGoals img {
  max-width: 410px;
  padding-top: 30px;
}

.input_percent {
  width: 89px;
  height: 29px;
  border: solid 1px #43CBD7;
  margin-right: 10px;
}
</style>