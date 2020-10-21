<template>
  <div>  
    <div v-if="proposedGoals.length !== 0">
      <div v-for="goal in proposedGoals" v-bind:key="goal.id">
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
      <img src="@/style/img/CatNoGoals.png" alt="Котик">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProposedGoals',

  data: () => ({
    detailsGoalWindow: false,
    idSelectedGoal: '',
    proposedGoals: [],
  }),

  created: async function () {
    this.proposedGoals = this.$store.state.goals.filter(goal => goal.status === 'proposed' && goal.authorID === this.$store.state.user.id);
  },

  methods: {
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

.btnShowKR {
  width: 100%;
  background-color: #f4f4f4;
  text-align: left;
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

.krs p:first-child {
  max-width: calc(100% - 150px);
}
</style>