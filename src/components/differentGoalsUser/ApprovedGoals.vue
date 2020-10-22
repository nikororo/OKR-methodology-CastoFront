<template>
  <div style="padding-bottom: 100px">
    <div v-if="approvedGoals.length !== 0">
      <div v-for="goal in approvedGoals" v-bind:key="goal.id">
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
              <div class="rightBlockGoal">
                <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>
                <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion"
                       disabled>
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
                  <button @click="openEditGoal(goal.id)" class="btnLogOut">
                    <img width="25" height="25" src="@/style/img/Pen.png" alt="Pen">
                    <span>Редактировать</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="contKr" v-if="goal.showKr">
            <div class="krs" v-for="kr in goal.krs" :key="kr.id">
              <label for="newKr"> {{ kr.title }}</label>
              <div class="infoKr">
                <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id, kr.id, kr.percent)"
                       v-model="kr.percent" class="slider">
                <p class="weightKr">{{ kr.weight }}/100</p>
              </div>
              <div class="rightBlockKr modalExecutor">
                <p class="percentGoals">{{ kr.percent }}%</p>
                <img class="icon_user_kr" src="@/style/img/User.png" alt="User">
                <div class="modalNameExecutor">
                  <div>
                    <img class="icon_user" src="@/style/img/Group.png" alt="Depart">
                    <p>{{ goal.command }}</p>
                  </div>
                  <p class="executorP">Ответственный:</p>
                  <div>
                    <img class="icon_user_kr" src="@/style/img/User.png" alt="User">
                    <p>{{ goal.executor }}</p>
                  </div>
                  <p class="executorP" v-if="kr.performers.users.length !== 0">Исполнители:</p>
                  <div v-for="perf in kr.performers.users" v-bind:key="perf.id">
                    <p><img class="icon_user_kr" src="@/style/img/User.png" alt="User">{{perf.name}}</p>
                  </div>
                </div>
              </div>

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
      <EditGoalModal v-if="showEditGoalModal" v-bind:idGoal="idSelectedGoal" @close="showEditGoalModal = false"/>
      <EditKrModal v-if="showEditKrModal" v-bind:idGoal="idSelectedGoal" v-bind:idKr="idSelectedKr"
                   @close="showEditKrModal = false"/>
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


export default {
  name: 'ApprovedGoals',
  components: {
    EditGoalModal,
    EditKrModal
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
    this.approvedGoals = this.$store.state.goals.filter(goal => goal.status === 'approved' && goal.authorID === this.$store.state.user.id);
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

.rightBlockKr {
  justify-content: space-between;
}

.rightBlockKr p {
  margin-right: 20px;
}

.flexModalCont label {
  margin: 0 20px 0 0;
}

.dataGoal {
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
  color: #0C2528;
  opacity: 0.3;
}
.modalExecutor:hover .modalNameExecutor {
  display: flex;
}
.modalNameExecutor {
  display: none;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  padding: 30px 20px 5px 30px;
  position: absolute;
  top: 36px;
  right: -10px;
  z-index: 999;
  background: #F4F4F4;
  box-shadow: 0px 0px 20px rgba(12, 37, 40, 0.27);
  border-radius: 24px;
  color: #0C2528;
  font-size: 18px;
}
.krs p:first-child {
  max-width: 100%;
}
.modalNameExecutor p img {
  margin-right: 12px;
  width: 30px;
  height: 30px;
}

.krs svg {
  position: absolute;
  right: 15px;
  top: -17px;
}

.krs .links_menu {
  right: 8px;
}

.krs .infoKr {
  width: 40%;
}

.rightBlockKr {
  margin-right: 50px;
}

.infoKr {
  width: calc(45% - 170px);
  margin-right: 35px;
}

.krs label {
  width: 55%;
  margin-right: 35px;
}
</style>