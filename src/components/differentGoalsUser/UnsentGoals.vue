<template>
  <div>
    <button class="button_goals" @click="showAddGoalModal = true">Добавить</button>
    <AddGoalModal v-if="showAddGoalModal" @close="closeAdd"/>
    <div v-if="unsentGoals.length !== 0">
      <div v-for="goal in unsentGoals" v-bind:key="goal.id">
        <div class="contGoal">
          <div class="companyGoals">
            <button class="btnShowKR" @click="displayKr(goal.id)">
              <div class="leftBlockGoal">
                <p class="nameGoals">{{ goal.name }}</p>
              </div>
              <div class="infoGoal">
                <img class="icon_user" src="@/style/img/User.png" alt="User">
                <div>
                  <p class="NameExecutor">{{ goal.executor }}</p>
                  <p class="dataGoal">{{ goal.dateStart }}/{{ goal.dateEnd }}</p>
                </div>
              </div>
            </button>

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
                  <button @click="sendGoal(goal.id)" class="btnLogOut">
                    <img width="25" height="25" src="@/style/img/Copy.png" alt="Send">
                    <span>Отправить</span>
                  </button>
                </div>
                <div>
                  <button @click="openEditGoal(goal.id)" class="btnLogOut">
                    <img width="25" height="25" src="@/style/img/Pen.png" alt="Pen">
                    <span>Редактировать</span>
                  </button>
                </div>
                <div>
                  <button @click="openDeleteGoal(goal.id)" class="btnLogOut">
                    <img width="25" height="25" src="@/style/img/Delete.png" alt="Delete">
                    <span>Удалить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="contKr" v-if="goal.showKr">
            <div class="krs" v-for="kr in goal.krs" :key="kr.id">
              <DeleteKrModal v-if="showDeleteKrModal" @close="getKR(goal.id)" @delete="deleteKr"/>
                <p>{{ kr.title }}</p>
                <p class="percentGoals">Вес: {{ kr.weight }}</p>
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
                          <path d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <div class="links_menu">
                    <div class="tre"></div>
                    <div>
                      <button @click="openEditKr(goal.id, kr.id)" class="btnLogOut">
                        <img width="25" height="25" src="@/style/img/Pen.png" alt="Pen">
                        <span>Редактировать</span>
                      </button>
                    </div>
                    <div>
                      <button class="btnLogOut" @click="openDeleteKr(goal.id, kr.id)">
                        <img width="25" height="25" src="@/style/img/Delete.png" alt="Delete">
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
                    <img src="@/style/img/Plus.png" alt="Add">
                  </button>
                  <input type="text" placeholder="Добавить КР" required v-model.trim="goal.newKr.title" minlength="5"
                         maxlength="100">
                </div>
                <div class="promptWeight" v-bind:class="{errorWeigth}">Осталось: {{ goal.remainderWeight }}</div>
                <div class="meaning">
                  <label for="createKrPercent">Вес</label>
                  <input v-bind:class="{errorWeigth}" id="createKrPercent" class="input_percent" type="number" min="1"
                         max="100" placeholder="1" v-model="goal.newKr.weight" required>
                  <span>%</span>
                </div>
              </div>
              <div class="flexModalCont">
                <label for="createKrExecutor">Ответственный</label>
                <select v-model="goal.newKr.executor" id="createKrExecutor" class="input_percent">
                  <option value disabled selected hidden>Ответственный</option>
                  <option v-for="men in people" v-bind:key="men.id" v-bind:value="men.id">
                    {{ men.name }}
                  </option>
                </select>
                <label for="createKrFile">Прикрепить документ <img class="icon_user" src="@/style/img/AddFile.png" alt="add"></label>
                <input type="file" id="createKrFile" class="fileKr" disabled/>
              </div>

            </form>
          </div>
        </div>
      </div>

      <EditGoalModal v-if="showEditGoalModal" v-bind:idGoal="idSelectedGoal" @close="showEditGoalModal = false"/>
      <DeleteGoalModal v-if="showDeleteGoalModal" @close="showDeleteGoalModal = false" @delete="deleteGoal"/>
      <EditKrModal v-if="showEditKrModal" v-bind:idGoal="idSelectedGoal" v-bind:idKr="idSelectedKr"
                   @close="getKR(idSelectedGoal)"/>
    </div>
    <div v-else class="haveNoGoals">
      <div>Цели еще не созданы, здесь ничего нет</div>
      <img src="@/style/img/CatNoGoals.png" alt="Котик">
    </div>
  </div>
</template>

<script>
import AddGoalModal from "@/components/AddGoalModal";
import DeleteGoalModal from '../DeleteGoalModal';
import DeleteKrModal from '../DeleteKrModal';
import EditGoalModal from '../EditGoalModal';
import EditKrModal from '../EditKrModal';


export default {
  name: 'UnsentGoals',
  components: {
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
    errorWeigth: false,
    detailsGoalWindow: false,
    people: '',
    idSelectedGoal: '',
    idSelectedKr: '',
    unsentGoals: []
  }),

  mounted: async function () {
    this.getGoals();
    await this.$store.dispatch('getUsers');
    this.people = this.$store.state.people;
  },

  methods: {
    async getGoals() {
      await this.$store.dispatch('getGoals');
      this.unsentGoals = this.$store.state.goals.filter(goal => goal.status === 'unsent' && goal.authorID === this.$store.state.user.id);
    },

    async getKR(idGoal) {
      this.showDeleteKrModal = false;
      this.showEditKrModal = false;
      await this.$store.dispatch('getKrs', idGoal)
    },

    closeAdd() {
      this.showAddGoalModal = false;
      this.getGoals();
    },

    openEditGoal(id) {
      this.idSelectedGoal = id;
      this.showEditGoalModal = true;
      this.errorWeigth = false;
    },

    openDeleteGoal(id) {
      this.idSelectedGoal = id;
      this.showDeleteGoalModal = true;
      this.errorWeigth = false;
    },

    openDetailsGoald(id) {
      this.idSelectedGoal = id;
      this.detailsGoalWindow = true;
    },

    async deleteGoal() {
      await this.$store.dispatch('deleteGoal', this.idSelectedGoal);
      this.getGoals();
      this.idSelectedGoal = '';
    },

    async sendGoal(idGoal) {
      await this.$store.dispatch('goalProtection', idGoal);
      this.getGoals();
    },

    async displayKr(idGoal) {
      await this.$store.dispatch('getKrs', idGoal);
      this.$store.commit('displayKr', idGoal);
    },

    async addKr(goalId, remainderWeight, weight, event) {
      event.preventDefault();
      if (weight > remainderWeight) {
        this.errorWeigth = true;
        this.getKR(goalId);
        return;
      }
      this.errorWeigth = false;
      await this.$store.dispatch('createKr', goalId);
      this.getKR(goalId);
    },

    openDeleteKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showDeleteKrModal = true;
      this.errorWeigth = false;
    },

    async deleteKr() {
      let payload = {
        idGoal: this.idSelectedGoal,
        idKr: this.idSelectedKr
      }
      await this.$store.dispatch('deleteKr', payload);
      await this.$store.dispatch('getGoalPercent', this.idSelectedGoal);
      this.idSelectedGoal = '';
      this.idSelectedKr = '';
      this.getKR(payload.idGoal)
    },

    openEditKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showEditKrModal = true;
      this.errorWeigth = false;
    },

  }
}
</script>

<style scoped>
.button_goals {
  position: absolute;
  top: 50px;
  right: 60px;
}

p {
  margin-bottom: 0;
}

button {
  border: none;
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
.krs .links_menu {
  right: 8px;
}

.leftBlockGoal {
  width: 65%;
  margin-right: 15px;
}

.krs .percentGoals {
    position: absolute;
    right: 80px;
}

.infoGoal {
  margin-right: 10%;
}

.dataGoal {
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
  color: #0C2528;
  opacity: 0.3;
}

.krs p:first-child {
  max-width: calc(100% - 150px);
}
</style>