<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-10 col-sm-10">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/companyMission">
            Стратегические цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals" exact>
            Цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/goalsProtection">
            Защита целей
          </router-link>
        </div>
        <div class="page">
          <select v-on:change="getGoals" v-model="selectedCommand" class="selectStatus" required>
            <option value disabled selected hidden>По отделам</option>
            <option value="">Все</option>
            <option v-for="(command, index) in this.$store.state.commands" v-bind:key="index" v-bind:value="command">
              {{ command }}
            </option>
          </select>
          <div v-if="proposedGoals.length !== 0">
            <div v-for="goal in proposedGoals" v-bind:key="goal.id">
              <div class="contGoal">
                <div class="companyGoals">
                  <button class="btnShowKR" @click="displayKr(goal.id)">
                    <div class="leftBlockGoal">
                      <p class="nameGoals">{{ goal.name }}</p>
                    </div>
                    <div class="infoGoal">
                      <img class="icon_user" src="../style/img/Group.png" alt="Depart">
                      <div>
                        <p>{{ goal.command }}</p>
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
                        <button @click="approveGoal(goal.id)" class="btnLogOut">
                          <img height="25" src="../style/img/ApproveGoal.png" alt="Approve">
                          <span>Одобрить</span>
                        </button>
                      </div>
                      <div>
                        <button @click="openRejectGoalModal(goal.id, goal.name)" class="btnLogOut">
                          <img height="25" src="../style/img/RejectGoal.png" alt="Reject">
                          <span>Отклонить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="contKr" v-if="goal.showKr">
                  <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                    <p class="nameKrs">{{ kr.title }}</p>
                    <p class="NameExecutor"><img class="icon_user_kr" src="../style/img/User.png" alt="User">{{goal.executor}}</p>
                    <p class="percentGoals">Вес: {{ kr.weight }}</p>
                  </div>
                </div>
              </div>
            </div>
            <RejectGoalModal v-if="showRejectGoalModal" :nameGoal="nameSelectedGoal" :idGoal="idSelectedGoal" @close="closeRejectGoal"/>
            <DetailsGoal v-if="detailsGoalWindow" v-bind:idGoal="idSelectedGoal" @close="detailsGoalWindow = false"/>
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
import DetailsGoal from "@/components/DetailsGoal";
import RejectGoalModal from "@/components/RejectGoalModal";

export default {
  name: 'CommonGoals',
  components: {
    Head,
    ToolBar,
    DetailsGoal,
    RejectGoalModal
  },
   
  data: () => ({
    proposedGoals: [],
    detailsGoalWindow: false,
    showRejectGoalModal: false,
    idSelectedGoal: '',
    nameSelectedGoal: '',
    selectedCommand: ''
  }),

  created: function () {
    this.getGoals();
  },
 
  methods: {
    async getGoals() {
      await this.$store.dispatch('getGoals');
      if (this.selectedCommand) {
        this.proposedGoals = this.$store.state.goals.filter(goal => goal.status === 'proposed' && goal.command == this.selectedCommand);
      } else {
        this.proposedGoals = this.$store.state.goals.filter(goal => goal.status === 'proposed');
      }
    },
    async approveGoal(idGoal) {
      await this.$store.dispatch('goalApprove', idGoal);
      this.getGoals();
    },
    closeRejectGoal() {
      this.showRejectGoalModal = false;
      this.getGoals();
    },
    displayKr(idGoal) {
      this.$store.commit('displayKr', idGoal);
      this.$store.dispatch('getKrs', idGoal);
    },
    openDetailsGoald(id) {
      this.idSelectedGoal = id;
      this.detailsGoalWindow = true;
    },
    openRejectGoalModal(id, name) {
      this.idSelectedGoal = id;
      this.nameSelectedGoal = name;
      this.showRejectGoalModal = true;
    },
  }
}
</script>


<style scoped>
.leftBlockGoal {
  width: 65%;
}
.infoGoal {
  width: 50%;
}
.krs img {
  margin-right: 12px;
}
.dataGoal {
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
  color: #0C2528;
  opacity: 0.3;
}
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
.flexModalCont label {
  margin: 0 20px 0 0;
}
.infoGoal {
  width: 35%;
}
.nameGoals {
  width: 95%;
}
.nameKrs {
  width: 40%;
  margin-right: 10px;
}
.krs .NameExecutor {
  width: 40%;
  margin-right: 10px;
}
.krs .percentGoal {
  width: 20%;
}
.selectStatus {
  background-color: #f4f4f4;
  border: solid 1px #43CBD7;
  width: 250px;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 40px;
}
</style>