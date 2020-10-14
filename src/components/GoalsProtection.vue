<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-10 col-sm-10">
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
                    <p class="nameGoals">{{goal.name}}</p>
                  </button>
                  <div class="commandGoals">{{goal.command}}</div>

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
                        <button class="btnLogOut">
                          <img height="25" src="../style/img/Expand.png" alt="Expand">
                          <span>Подробнее</span>
                        </button>
                      </div>
                      <div>
                        <button @click="approveGoal(goal.id)" class="btnLogOut">
                          <img height="25" src="../style/img/ApproveGoal.png" alt="Pen">
                          <span>Одобрить</span>
                        </button>
                      </div>
                      <div>
                        <button @click="rejectGoal(goal.id)" class="btnLogOut">
                          <img height="25" src="../style/img/RejectGoal.png" alt="Delete">
                          <span>Отклонить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="contKr" v-if="goal.showKr">
                  <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                    <p>{{ kr.title }}</p>
                    <p class="percentGoals">Вес: {{ kr.weight }}</p>
                  </div>
                </div>
              </div>
            </div>
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

export default {
  name: 'CommonGoals',
  components: {
    Head, 
    ToolBar,
  },
   
  data: () => ({
    proposedGoals: [],
  }),

  created: async function () {
    await this.$store.dispatch('getGoals');
    this.proposedGoals = this.$store.state.goals.filter(goal => goal.status === 'proposed');
  },

  methods: {
    sum(idGoal) {
      this.$store.dispatch('sumPercent', idGoal)
    },

    approveGoal(idGoal) {
      this.$store.commit('approveGoal', idGoal);
    },

    rejectGoal(idGoal) {
      this.$store.commit('rejectGoal', idGoal);
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