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
                      <span>Вес</span>
                      <input class="input_percent" type="number" placeholder="0" v-model="newKR.percent">
                      <span>%</span>
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
                  
                  <div class="menu">
                    <a href="" class="button_menu"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#aad7de"><path d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path></g></g></svg></a>
                    <div class="links_menu">
                      <div class="tre"></div>
                      <div>
                        <button class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Copy.png" alt="copy">
                          <span>Добавить описание</span>
                        </button>
                      </div>
                      <div>
                        <button class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                          <span>Редактировать</span>
                        </button>
                      </div>
                      <div>
                        <button class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Expand.png" alt="Expand">
                          <span>Подробнее</span>
                        </button>
                      </div>
                      <div>
                        <button v-on:click="deleteGoal(goal.id, goal.name)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                          <span>Удалить</span>
                        </button>
                      </div>
                    </div>
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
    },

    deleteGoal(idGoal, nameGoal) {
      if (confirm(`Удалить цель ${nameGoal}?`)) {
        this.$store.commit('deleteGoal', idGoal);
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

.menu {
  position: absolute;
  right: 25px;
}

.tre {
  top: -42px;
  right: 0;
  position: absolute;
  border: 24px solid transparent;
  border-bottom: 30px solid #70C7D4;
  border-radius: 10px;
}

.btnLogOut {
  margin-bottom: 10px;
  border: none;
  background: transparent;
  text-decoration: none;
  opacity: 0.7;
}

.btnLogOut span {
  color: #0C2528;
  margin-left: 12px;
}

.links_menu {
  width: 270px;
  font-size: 18px;
}
</style>