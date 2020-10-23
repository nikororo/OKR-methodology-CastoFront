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
          <router-link class="link_targets" active-class="active_link_targets" to="/goals">
            Цели
          </router-link>
          <router-link v-if="role == 'leader'" class="link_targets" active-class="active_link_targets" to="/goals/goalsProtection">
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
          <div v-if="approvedGoals.length !== 0">
            <div v-for="goal in approvedGoals" v-bind:key="goal.id">
              <div class="contGoal">
                <div class="companyGoals">
                  <button class="btnShowKR" @click="displayKr(goal.id)">
                    <div class="leftBlockGoal">
                      <p class="nameGoals">{{ goal.name }}</p>
                    </div>
                    <div class="infoGoal">
                      <img class="icon_user" src="../style/img/User.png" alt="User">
                      <div>
                        <p class="NameExecutor">{{ goal.executor }}</p>
                        <p class="dataGoal">{{ goal.dateStart }}/{{ goal.dateEnd }}</p>
                      </div>
                    </div>
                    <div class="rightBlockGoal">
                      <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>
                      <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                    </div>
                  </button>
                </div>
                <div class="contKr" v-if="goal.showKr">
                  <p v-if="goal.descr" class="descrGoal">{{goal.descr}}</p>
                  <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                    <label for="newKr"> {{ kr.title }}</label>
                    <div class="infoKr">
                      <input v-if="role  == 'manager'" id="newKr" type="range" min="0" max="100" 
                            @change="sum(goal.id, kr.id, kr.percent)" v-model="kr.percent" class="slider">
                      <input v-else id="newKr" type="range" min="0" max="100" @change="sum(goal.id, kr.id, kr.percent)"
                             v-model="kr.percent" class="slider" disabled>
                      <p class="weightKr">Вес {{ kr.weight }}/100</p>
                    </div>
                    <div class="rightBlockKr modalExecutor">
                      <p class="percentGoals">{{ kr.percent }}%</p>
                      <img class="icon_user_kr" src="../style/img/User.png" alt="User">
                      <div class="modalNameExecutor">
                        <div>
                          <img class="icon_user" src="../style/img/Group.png" alt="Depart">
                          <p>{{ goal.command }}</p>
                        </div>
                        <p class="executorP">Ответственный:</p>
                        <div>
                          <img class="icon_user_kr" src="../style/img/User.png" alt="User">
                          <p>{{ kr.executorName }}</p>
                        </div>
                        <p class="executorP" v-if="kr.performers.users.length !== 0">Исполнители:</p>
                        <div v-for="perf in kr.performers.users" v-bind:key="perf.id">
                          <p><img class="icon_user_kr" src="../style/img/User.png" alt="User">{{perf.name}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DetailsGoal v-if="detailsGoalWindow" v-bind:idGoal="idSelectedGoal" @close="detailsGoalWindow = false"/>
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
import DetailsGoal from "@/components/DetailsGoal";

export default {
  name: 'CommonGoals',
  components: {
    Head,
    ToolBar,
    DetailsGoal
  },
  data: () => ({
    detailsGoalWindow: false,
    idSelectedGoal: '',
    approvedGoals: [],
    role: '',
    selectedCommand: ''
  }),

  created: function () {
    this.getGoals();
  },

  mounted: function () {
    this.role = this.$store.state.user.role;
  },

  methods: {
    async getGoals() {
      await this.$store.dispatch('getGoals');
      if (this.selectedCommand) {
        this.approvedGoals = this.$store.state.goals.filter(goal => goal.status === 'approved' && goal.command === this.selectedCommand);
      } else {
        this.approvedGoals = this.$store.state.goals.filter(goal => goal.status === 'approved');
      }
    },

    async sum(idGoal, idKr, percent) {
      await this.$store.dispatch('sumPercent', {idGoal, idKr, percent})
    },

    displayKr(idGoal) {
      this.$store.commit('displayKr', idGoal);
      this.$store.dispatch('getKrs', idGoal);
    },

    openDetailsGoald(id) {
      this.idSelectedGoal = id;
      this.detailsGoalWindow = true;
    }
  }
}
</script>


<style scoped>
.page {
  padding-bottom: 250px;
}

p {
  margin-bottom: 0;
}

button {
  border: none;
}

.dataGoal {
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
  color: #0C2528;
  opacity: 0.3;
}

.flexModalCont label {
  margin: 0 20px 0 0;
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

.selectStatus {
  background-color: #f4f4f4;
  border: solid 1px #43CBD7;
  width: 250px;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 40px;
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