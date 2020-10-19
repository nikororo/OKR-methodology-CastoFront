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
              <div class="rightBlockGoal">
                <p class="percentGoals">{{ goal.command }}</p>
              </div>
            </button>
<!--            <div class="percentGoals">-->
<!--              <p>{{ goal.command }}</p>-->
<!--              <div class="btnRejectComm">-->
<!--                <img width="25" height="25" src="@/style/img/Comment.png" alt="Comment">-->
<!--                <div class="links_menu rejectComm">-->
<!--                  <div class="tre"></div>-->
<!--                  <p>{{goal.comment}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
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

export default {
  name: 'RejectedGoals',

  components: {
    DeleteGoalModal
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
      this.rejectedGoals = this.$store.state.goals.filter(goal => goal.status === 'rejected');
      this.rejectedGoals.map(goal => {
        if (this.$store.state.rejectionComments[goal.id]) {
          goal.comment = this.$store.state.rejectionComments[goal.id];
        } else {
          goal.comment = 'Цель отклонена'
        }
      });
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
.krs .links_menu {
  right: 8px;
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
}

.rejectComm p {
  opacity: 0.8;  
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
</style>