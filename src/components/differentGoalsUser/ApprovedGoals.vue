<template>
  <div>  
    <div v-if="approvedGoals.length !== 0">
      <div v-for="goal in approvedGoals" v-bind:key="goal.id">
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
                    <img width="25" height="25" src="@/style/img/Pen.png" alt="Pen">
                    <span>Редактировать</span>
                  </button>
                </div>
                <div>
                  <button @click="openDetailsGoald(goal.id)" class="btnLogOut">
                    <img width="25" height="25" src="@/style/img/Expand.png" alt="Expand">
                    <span>Подробнее</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contKr" v-if="goal.showKr">
            <div class="krs" v-for="kr in goal.krs" :key="kr.id">
              <label for="newKr"> {{ kr.title }}</label>
              <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id, kr.id, kr.percent)" v-model="kr.percent" class="slider">
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
                      <img width="25" height="25" src="@/style/img/Pen.png" alt="Pen">
                      <span>Редактировать</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsGoal v-if="detailsGoalWindow" v-bind:idGoal="idSelectedGoal" @close="detailsGoalWindow = false"/>
      <EditGoalModal v-if="showEditGoalModal" v-bind:idGoal="idSelectedGoal" @close="showEditGoalModal = false"/>
      <EditKrModal v-if="showEditKrModal" v-bind:idGoal="idSelectedGoal" v-bind:idKr="idSelectedKr" @close="showEditKrModal = false"/>
    </div>
    <div v-else class="haveNoGoals">
      <div>Цели еще не одобрены, здесь ничего нет</div>
      <img src="@/style/img/CatNoGoals.png" alt="Котик">
    </div>
  </div>
</template>

<script>
import EditGoalModal from '../EditGoalModal';
import EditKrModal from '../EditKrModal';
import DetailsGoal from "@/components/DetailsGoal";


export default {
  name: 'ApprovedGoals',
  components: {
    EditGoalModal, 
    EditKrModal,
    DetailsGoal
  },

  data: () => ({
    showEditGoalModal: false,
    showEditKrModal: false,
    errorWeigth: false,
    people: '',
    idSelectedGoal: '',
    idSelectedKr: '',
    approvedGoals: [],
    detailsGoalWindow: false,
  }),

  created: async function () {
    this.approvedGoals = this.$store.state.goals.filter(goal => goal.status === 'approved');
    await this.$store.dispatch('getUsers');
    await this.$store.dispatch('getKrs');
    this.people = this.$store.state.people;
  },

  methods: {
    async sum(idGoal, idKr, percent) {
      await this.$store.dispatch('sumPercent', {idGoal, idKr, percent})
    },

    openEditGoal(id) {
      this.idSelectedGoal = id;
      this.showEditGoalModal = true;
      this.errorWeigth = false;
    },

    openEditKr(idGoal, idKr) {
      this.idSelectedGoal = idGoal;
      this.idSelectedKr = idKr;
      this.showEditKrModal = true;
      this.errorWeigth = false;
    },

    async displayKr(idGoal) {
      this.$store.commit('displayKr', idGoal);
      await this.$store.dispatch('getKrs', idGoal);
    },
    openDetailsGoald(id) {
      this.idSelectedGoal = id;
      this.detailsGoalWindow = true;
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
</style>