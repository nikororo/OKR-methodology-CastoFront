<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-10 col-sm-11">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals">
            Дерево целей
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/goalsQuarter">
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
              <div class="contGoal">
                <div class="companyGoals">
                  <button class="btnShowKR" @click="displayKr(goal.id)">
                    <p class="nameGoals">{{goal.name}}</p>
                  </button>
                  <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                  <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>

                  <div class="menu">
                    <a class="button_menu">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                           viewBox="0 0 172 172" style=" fill:#000000;">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                           font-family="none" font-weight="none" font-size="none" text-anchor="none"
                           style="mix-blend-mode: normal">
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#aad7de">
                            <path
                                d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <div class="links_menu">
                      <div class="tre"></div>
                      <div>
                        <button @click="openEditGoal(goal.id)" class="btnLogOut">
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
                        <button @click="openDeleteGoal(goal.id)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                          <span>Удалить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="contKr" v-if="goal.showKr">
                  <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                    <label for="newKr"> {{ kr.title }}</label>
                    <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id)" v-model="kr.percent" class="slider">
                    <p class="percentGoals">{{ kr.percent }}%</p>
                    <div class="menu">
                    <a class="button_menu">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                           viewBox="0 0 172 172" style=" fill:#000000;">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                           font-family="none" font-weight="none" font-size="none" text-anchor="none"
                           style="mix-blend-mode: normal">
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#aad7de">
                            <path
                                d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <div class="links_menu">
                      <div class="tre"></div>
                      <div>
                        <button @click="openEditKr(goal.id, kr.id)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                          <span>Редактировать</span>
                        </button>
                      </div>
                      <div>
                        <button class="btnLogOut" @click="openDeleteKr(goal.id, kr.id)">
                          <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                          <span>Удалить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>

                  <form v-on:submit="addKr(goal.id, $event)" class="createKR">
                     <div class="flexModalCont"> <div class="nameCreateKR">
                        <button type="submit">
                          <img src="../style/img/Plus.png" alt="Add KR">
                        </button>
                        <input type="text" placeholder="Добавить КР" required v-model="title" minlength="5" maxlength="100">
                      </div>
                      <div class="meaning">
                        <label for="createKrPercent">Вес</label>
                        <input id="createKrPercent" class="input_percent" type="number" min="1" max="100" placeholder="1" v-model="weight" required>
                        <span>%</span>
                      </div>
                    </div>
                    <div class="flexModalCont">
                      <label for="createKrExecutor">Ответственный</label>
                      <select v-model="executor" id="createKrExecutor" class="input_percent">
                        <option value disabled selected hidden>Ответственный</option>
                        <option v-for="(men, index) in people" v-bind:key="index">
                          {{men}}
                        </option>
                      </select>
                      <label for="createKrFile">Прикрепить документ <img class="icon_user" src="../style/img/AddFile.png" alt="add"></label>
                      <input type="file" id="createKrFile" class="fileKr" />
                    </div>
                  </form>
                </div>
              
              </div>
            </div>
            <EditGoalModal v-if="showEditGoalModal" v-bind:idGoal="idSelectedGoal" @close="showEditGoalModal = false"/>
            <DeleteGoalModal v-if="showDeleteGoalModal" @close="showDeleteGoalModal = false" @delete="deleteGoal"/>
            <EditKrModal v-if="showEditKrModal" v-bind:idGoal="idSelectedGoal" v-bind:idKr="idSelectedKr" @close="showEditKrModal = false"/>
            <DeleteKrModal v-if="showDeleteKrModal" @close="showDeleteKrModal = false" @delete="deleteKr"/>
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
import DeleteGoalModal from './DeleteGoalModal';
import DeleteKrModal from './DeleteKrModal';
import EditGoalModal from './EditGoalModal';
import EditKrModal from './EditKrModal';

export default {
  name: 'CommonGoals',
  components: {
    Head, 
    ToolBar, 
    AddGoalModal, 
    DeleteGoalModal, 
    DeleteKrModal, 
    EditGoalModal, 
    EditKrModal
  },

  data: () => ({
    showAddGoalModal: false,
    showEditGoalModal: false,
    showDeleteGoalModal: false,
    showEditKrModal: false,
    showDeleteKrModal: false,
    haveGoals: true,
    people: '',
    weight: '',
    title: '',
    executor: '',
    idSelectedGoal: '',
    idSelectedKr: ''
  }),

  mounted: function () {
    this.people = this.$store.state.people;
  }, 

  methods: {
    sum(id) {
      this.$store.dispatch('sumPercent', id)
    },

    addKr(goalId, event) {
      event.preventDefault();
      let newKr = {
        title: this.title,
        weight: this.weight,
        executor: this.executor,
        goalId: goalId
      }
      this.$store.commit('createKr', newKr);
      this.title = '';
      this.weight = '';
    },

    openEditGoal(id) {
      this.idSelectedGoal = id;
      this.showEditGoalModal = true;
    },

    openDeleteGoal(id) {
      this.idSelectedGoal = id;
      this.showDeleteGoalModal = true;
    },

    openEditKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showEditKrModal = true;
    },

    openDeleteKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showDeleteKrModal = true;
    },

    deleteGoal() {
      this.$store.commit('deleteGoal', this.idSelectedGoal);
      this.idSelectedGoal = '';
    },

    deleteKr() {
      let payload = {
        idGoal: this.idSelectedGoal, 
        idKr: this.idSelectedKr
      }
      this.$store.commit('deleteKr', payload);
      this.$store.dispatch('sumPercent', this.idSelectedGoal);
      this.idSelectedGoal = '';
      this.idSelectedKr = '';
    },

    displayKr(idGoal) {
      this.$store.commit('displayKr', idGoal);
    },
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
  background-color: #f4f4f4;
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
  width: 220px;
  font-size: 18px;
  top: 32px;
  right: -11px;
}

.companyGoals .links_menu {
  top: 49px;
  right: -7px;
}

.btnShowKR {
  width: 100%;
  background-color: #f4f4f4;
  text-align: left;
}

.flexModalCont:last-child {
  margin-top: 40px;
}

.flexModalCont label {
  margin: 0 20px 0 0;
}

#createKrExecutor {
  color: #6d7273;
  margin-right: 55px;
  width: 320px;
  font-size: 18px;
}
</style>