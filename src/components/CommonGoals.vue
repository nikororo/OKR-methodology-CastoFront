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
          <router-link class="link_targets" active-class="active_link_targets" to="/goals">
            Цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/goalsProtection">
            Защита целей
          </router-link>
        </div>
        <div class="page">
          <div v-if="approvedGoals.length !== 0">
            <div v-for="goal in approvedGoals" v-bind:key="goal.id">
              <div class="contGoal">
                <div class="companyGoals">
                  <button class="btnShowKR" @click="displayKr(goal.id)">
                    <p class="nameGoals">{{ goal.name }}</p>
                  </button>
                  <div>
                    <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                  </div>
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
                        <button class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Expand.png" alt="Expand">
                          <span>Подробнее</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="haveNoGoals">
            <div>Цели еще не одобрены, здесь ничего нет</div>
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

  computed: {
    approvedGoals: function () {
      return this.$store.state.goals.filter(goal => goal.status === 'approved');
    }
  },

  methods: {
    sum(id) {
      this.$store.dispatch('sumPercent', id)
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