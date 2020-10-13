<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-10 col-sm-11">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/companyMission">
            Миссии компании
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals" exact>
            Цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/goalsProtection">
            Защита целей
          </router-link>
        </div>
        <div class="page">
          <div v-if="proposedGoals.length !== 0">
            <div v-for="goal in proposedGoals" v-bind:key="goal.id">
              <div class="contGoal">
                <div class="companyGoals">
                  <button class="btnShowKR" @click="displayKr(goal.id, goal.krs)">
                    <p class="nameGoals">{{ goal.name }}</p>
                  </button>
                  <div class="commandGoals">{{ goal.command }}</div>

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
                        <button @click="openDetailsGoald(goal.id)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Expand.png" alt="Expand">
                          <span>Подробнее</span>
                        </button>
                      </div>
                      <div>
                        <button @click="approveGoal(goal.id)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                          <span>Одобрить</span>
                        </button>
                      </div>
                      <div>
                        <button @click="rejectGoal(goal.id)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                          <span>Отклонить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="contKr" v-if="goal.showKr">
                  <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                    <label for="newKr"> {{ kr.title }}</label>
                    <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id)" v-model="kr.percent"
                           class="slider">
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

                  <form v-on:submit="addKr(goal.id, goal.remainderWeight, goal.newKr.weight, $event)" class="createKR">
                    <div class="flexModalCont">
                      <div class="nameCreateKR">
                        <button type="submit">
                          <img src="../style/img/Plus.png" alt="Add KR">
                        </button>
                        <input type="text" placeholder="Добавить КР" required v-model.trim="goal.newKr.title"
                               minlength="5" maxlength="100">
                      </div>
                      <div class="promptWeight" v-bind:class="{errorWeigth}">Осталось: {{ goal.remainderWeight }}</div>
                      <div class="meaning">
                        <label for="createKrPercent">Вес</label>
                        <input v-bind:class="{errorWeigth}" id="createKrPercent" class="input_percent" type="number"
                               min="1" max="100" placeholder="1" v-model="goal.newKr.weight" required>
                        <span>%</span>
                      </div>
                    </div>
                    <div class="flexModalCont">
                      <label for="createKrExecutor">Ответственный</label>
                      <select v-model="goal.newKr.executor" id="createKrExecutor" class="input_percent">
                        <option value disabled selected hidden>Ответственный</option>
                        <option v-for="(men, index) in people" v-bind:key="index">
                          {{ men }}
                        </option>
                      </select>
                      <label for="createKrFile">Прикрепить документ <img class="icon_user"
                                                                         src="../style/img/AddFile.png"
                                                                         alt="add"></label>
                      <input type="file" id="createKrFile" class="fileKr"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <DetailsGoal v-if="detailsGoalWindow" v-bind:idGoal="idSelectedGoal" @close="detailsGoalWindow = false"/>
            <EditGoalModal v-if="showEditGoalModal" v-bind:idGoal="idSelectedGoal" @close="showEditGoalModal = false"/>
            <EditKrModal v-if="showEditKrModal" v-bind:idGoal="idSelectedGoal" v-bind:idKr="idSelectedKr"
                         @close="showEditKrModal = false"/>
            <DeleteKrModal v-if="showDeleteKrModal" @close="showDeleteKrModal = false" @delete="deleteKr"/>
          </div>
          <div v-else class="haveNoGoals">
            <div>Цели еще не предложены, здесь ничего нет</div>
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
import EditGoalModal from './EditGoalModal';
import EditKrModal from './EditKrModal';
import DeleteKrModal from './DeleteKrModal';
import DetailsGoal from "@/components/DetailsGoal";

export default {
  name: 'CommonGoals',
  components: {
    Head,
    ToolBar,
    EditGoalModal,
    EditKrModal,
    DeleteKrModal,
    DetailsGoal
  },

  data: () => ({
    detailsGoalWindow: false,
    showEditGoalModal: false,
    showEditKrModal: false,
    showDeleteKrModal: false,
    errorWeigth: false,
    people: '',
    idSelectedGoal: '',
    idSelectedKr: ''
  }),

  computed: {
    proposedGoals: function () {
      return this.$store.state.goals.filter(goal => goal.status === 'proposed');
    }
  },

  mounted: function () {
    this.people = this.$store.state.people;
  },

  methods: {
    sum(idGoal) {
      this.$store.dispatch('sumPercent', idGoal)
    },

    addKr(goalId, remainderWeight, weight, event) {
      event.preventDefault();
      if (weight > remainderWeight) {
        this.errorWeigth = true;
        return;
      }
      this.errorWeigth = false;

      this.$store.commit('createKr', goalId);
    },

    approveGoal(idGoal) {
      this.$store.commit('approveGoal', idGoal);
    },

    rejectGoal(idGoal) {
      this.$store.commit('rejectGoal', idGoal);
    },

    openEditGoal(idGoal) {
      this.idSelectedGoal = idGoal;
      this.showEditGoalModal = true;
      this.errorWeigth = false;
    },

    openEditKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showEditKrModal = true;
      this.errorWeigth = false;
    },

    openDeleteKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showDeleteKrModal = true;
      this.errorWeigth = false;
    },

    openDetailsGoald(id) {
      this.idSelectedGoal = id;
      this.detailsGoalWindow = true;
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
.commandGoals {
  position: absolute;
  right: 10%;
}

.nameGoals {
  width: 65%;
}

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

.promptWeight {
  position: absolute;
  font-size: 18px;
  right: 80px;
  top: 10px;
}
</style>