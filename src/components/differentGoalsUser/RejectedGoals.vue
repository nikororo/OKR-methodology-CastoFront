<template>
  <div>  
    <div v-if="rejectedGoals.length !== 0">
      <div v-for="goal in rejectedGoals" v-bind:key="goal.id">
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
            <div class="percentGoals">
              <div class="btnRejectComm">
                <img width="25" height="25" src="@/style/img/Comment.png" alt="Comment">
                <div class="links_menu rejectComm">
                  <div class="tre"></div>
                  <h2>Комментарий:</h2>
                  <p>{{goal.rejectionComments}}</p>
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
                  <button @click="openDetailsGoald(goal.id)" class="btnLogOut">
                    <img width="25" height="25" src="@/style/img/Expand.png" alt="Expand">
                    <span>Подробнее</span>
                  </button>
                </div>
                <div>
                  <button class="btnLogOut" @click="openDeleteGoal(goal.id)">
                    <img width="25" height="25" src="@/style/img/Delete.png" alt="Delete">
                    <span>Удалить</span>
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
      <DetailsGoal v-if="detailsGoalWindow" v-bind:idGoal="idSelectedGoal" @close="detailsGoalWindow = false"/>
      <DeleteGoalModal v-if="showDeleteGoalModal" @close="showDeleteGoalModal = false" @delete="deleteGoal"/>
    </div>
    <div v-else class="haveNoGoals">
      <div>Неодобренных целей нет</div>
      <img src="@/style/img/CatNoGoals.png" alt="Котик">
    </div>
  </div>
</template>

<script>
import DeleteGoalModal from '../DeleteGoalModal';
import DetailsGoal from "@/components/DetailsGoal";
export default {
  name: 'RejectedGoals',
  components: {
    DeleteGoalModal,
    DetailsGoal
  },
  data: () => ({
    showDeleteGoalModal: false,
    detailsGoalWindow: false,
    idSelectedGoal: '',
    rejectedGoals: [],
  }),
  mounted: function () {
    this.getGoals();
  },

  methods: {
    async getGoals() {
      this.rejectedGoals = this.$store.state.goals.filter(goal => goal.status === 'rejected' && goal.authorID === this.$store.state.user.id);
    },
    async displayKr(idGoal) {
      this.$store.commit('displayKr', idGoal);
      await this.$store.dispatch('getKrs', idGoal);
    },
    openDeleteGoal(id) {
      this.idSelectedGoal = id;
      this.showDeleteGoalModal = true;
    },
    async deleteGoal() {
      await this.$store.dispatch('deleteGoal', this.idSelectedGoal);
      await this.$store.dispatch('getGoals');
      this.getGoals();
      this.idSelectedGoal = '';
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
.btnRejectComm {
  margin: 0 20px 0 10px;
}
.btnRejectComm img {
  opacity: 0.7;
}
.companyGoals .rejectComm {
  top: 30px;
  right: 5px;
  min-width: 300px;    
  color: #0C2528;
  background-color: #F4F4F4;
  box-shadow: 0px 0px 20px rgba(12, 37, 40, 0.27);
}
.rejectComm p {
  opacity: 0.8;  
  color: #0C2528;
}
.rejectComm h2 {
  font-weight: 500;
  font-size: 20px;
  color: #0C2528;
}
.rejectComm .tre {
  border: none;
  width: 60px;
  height: 60px;
}
.btnRejectComm:focus .rejectComm, .btnRejectComm:active  .rejectComm, .rejectComm:hover { 
  display: flex; 
} 

.percentGoals {
  display: flex;
  position: absolute;
  right: 50px;
}

.leftBlockGoal {
  width: 55%;
  margin-right: 15px;
}

.infoGoal {
  margin-right: 70px;
  width: 40%;
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