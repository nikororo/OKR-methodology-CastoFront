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
          <div v-if="haveGoals">
            <div v-for="goal in this.$store.state.goals" v-bind:key="goal.id">
              <div v-if="goal.lvl === 1" class="contGoal">
                <div class="companyGoals">
                  <p class="nameGoals">{{goal.name}}</p>
                  <input type="range" min="0" max="100" v-model="avrg" class="slider" disabled>
                  <p  class="percentGoals">{{avrg}}%</p>
                </div>

                <div>
                  <div class="goals otherGoals" v-for="kr in krs" :key="kr.id">
                    <p> {{ kr.title }}</p>
                    <input  type="range" min="0" max="100" v-model="kr.percent" class="slider">
                    <p class="percentGoals">{{ kr.percent }}%</p>
                  </div>

                  <div class="createKR">
                    <div>
                      <button @click="addKr"><img src="../style/img/Plus.png" alt="Add KR"></button>
                      <input type="text" placeholder="Добавить КР" v-model="newKR.title">
                    </div>
                    <div class="meaning">
                      <div class="start_meaning">
                        <span>Начальное значение</span>
                        <input class="input_percent" type="number" placeholder="0" v-model="newKR.percent">
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

              <div v-else>
                <div class="goals otherGoals">
                  <div class="line_tree"></div>
                  <p class="nameGoals">{{goal.name}}</p>
                  <input type="range" min="0" max="100" class="slider" v-model="goal.percentOfCompletion">
                  <p class="percentGoals">{{goal.percentOfCompletion}}%</p>
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
    newKR: {
      percent: '',
      percent_max: '',
      title: '',
      id: ''
    },
    krs: [],
  }),
  computed: {
    avrg() {
      let percentAll = 0;
      let itemsFound = 0;
      let item = 0;
      let len = this.krs.length;
      let result = 0;
      for (let i = 0; i < len; i++) {
        item = Number(this.krs[i].percent)
        percentAll = item + percentAll;
        itemsFound = itemsFound + 1;
        result = percentAll / itemsFound;
        result = result.toFixed()

      }
      return result
    }
  },
  methods: {
    addKr() {
      if (this.newKR.title !== '' && this.newKR.percent !== '') {
        this.krs.push({
          title: this.newKR.title,
          percent: this.newKR.percent,
          percent_max: this.newKR.percent_max,
        });
        this.newKR.title = '';
        this.newKR.percent = '';
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