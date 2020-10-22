<template>
  <div class="addGoalModalCont">
    <div class="flexModalCont">
      <div class="addGoalModal">

        <form v-on:submit.prevent="editKr">
          <header>
            <input v-model.trim="title" required minlength="5" maxlength="100"/>
            <button class="btnClose" @click="close">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.4361 13.0008L25.7023 1.73457C26.0989 1.33792 26.0989 0.694822 25.7023 0.298221C25.3056 -0.0983798 24.6625 -0.0984305 24.2659 0.298221L12.9997 11.5644L1.73359 0.298221C1.33694 -0.0984305 0.693845 -0.0984305 0.297244 0.298221C-0.0993563 0.694873 -0.099407 1.33797 0.297244 1.73457L11.5634 13.0007L0.297244 24.2669C-0.099407 24.6636 -0.099407 25.3067 0.297244 25.7033C0.495545 25.9016 0.755494 26.0007 1.01544 26.0007C1.27539 26.0007 1.53529 25.9016 1.73364 25.7033L12.9997 14.4371L24.2659 25.7033C24.4642 25.9016 24.7241 26.0007 24.9841 26.0007C25.244 26.0007 25.5039 25.9016 25.7023 25.7033C26.0989 25.3066 26.0989 24.6635 25.7023 24.2669L14.4361 13.0008Z"
                    fill="black"/>
              </svg>
            </button>
          </header>
          <hr>
          <section class="addGoalModalBody">
            <div class="addGoalNameInput">
              <label for="editKrWeight">Вес</label>
              <label for="editKrExecutor">Ответственный</label>
              <label for="editKrPerformers">Исполнители</label>
            </div>
            <div class="addGoalInput">
              <div class="promptWeight" v-bind:class="{errorWeigth}">Осталось: {{remainderWeight}}</div>
              <div class="meaning">
                <input v-bind:class="{errorWeigth}" v-model="weight" id="editKrWeight" class="input_user" type="number" min="1" max="100" required>
                <span>%</span>
              </div>
              <select v-model="executor" id="addGoalExecutor" class="input_user">
                <option value disabled selected hidden>{{executor}}</option>
                <option v-for="men in people" v-bind:key="men.id" v-bind:value="men.id">
                  {{men.name}}
                </option>
              </select>
              <select v-model="performers" id="editKrPerformers" class="input_user" multiple>
                <option v-for="men in people" v-bind:key="men.id" v-bind:value="men.id">
                  {{men.name}}
                </option>
              </select>
              <label for="createKrFile">Документ <img class="icon_user" src="../style/img/AddFile.png" alt="add"></label>
              <input type="file" id="createKrFile" class="fileKr" disabled/>
            </div>
          </section>
          <footer>
            <button type="submit" class="button_pass">
              Сохранить
            </button>
            <button type="button" class="button_pass" @click="close">
              Отмена
            </button>
          </footer>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EditKrModal',

  props: ['idGoal','idKr'],

  data: () => ({
    title: '',
    oldWeight: '',
    weight: '',
    executor: '',
    people: [],
    performers: [],
    uncorrectPerf: [],
    remainderWeight: '',
    errorWeigth: false,
  }),

  created: async function () {
    await this.$store.dispatch('getUsers');
    this.people = this.$store.state.people;
  },

  mounted: function () {
    this.$store.state.goals.forEach(goal => {
      if (goal.id === this.idGoal) {
        this.remainderWeight = goal.remainderWeight;
        goal.krs.forEach(kr => {
          if (kr.id === this.idKr) {
            this.title = kr.title;
            this.weight = kr.weight;
            this.oldWeight = kr.weight;
            this.executor = kr.executor;
            this.uncorrectPerf = kr.performers.users;
          }
        })
      }
    });
    this.uncorrectPerf.map((user) => {
      this.performers.push(user.id);
    })
  },

  methods: {
    close() {
      this.$emit('close');
    },

    editKr() {
      if ((this.weight - this.oldWeight) > this.remainderWeight) {
        this.errorWeigth = true;
        return;
      }
      let modifiedKr = {
        title: this.title,
        weight: this.weight,
        executor: this.executor,
        idGoal: this.idGoal,
      }
      this.$store.dispatch('editKr', {id: this.idKr, modifiedKr, performers: this.performers});
      //придумать как пересчитывать, когда доделается редактирование
      this.$store.dispatch('sumPercent', {idGoal: this.idGoal, idKr: this.idKr});
      this.$emit('close');
    }
  },
}
</script>

<style scoped>
.addGoalModal {
  padding: 0 0 30px;
  width: 750px;
}

#editKrWeight {
  font-size: 16px;
  width: 80px;
}

.meaning span {
  margin: 10px 0 0 10px;
}

.addGoalInput {
  text-align: left;
  position: relative;
}

#editKrPerformers {
  height: 70px;
}

#editKrPerformers option {
  background-color:inherit;
  color: black;
}

.promptWeight {
  position: absolute;
  left: 0;
  top: -23px;
}
</style>