<template>
  <div class="ps_details">
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-10 col-sm-11">
        <div v-on:submit.prevent="editGoal" class="header_targets_link">
          <p>{{ this.name }}</p>
        </div>
        <div class="page row">
          <div class=" leftBlock col-lg-6">
            <button @click="close" class="btnBack">
              <img src="../style/img/Arrow.png" alt="Назад">
              <p>Назад</p>
            </button>
            <form v-on:submit.prevent="editGoal">
              <section class="goalModalBody">
                <div class="goalNameInput">
                  <p>Автор</p>
                  <p>Период</p>
                  <p>Ответственный</p>
                  <p>Исполнитель</p>
                  <p>Описание цели</p>
                </div>
                <div class="addGoalInput">
                  <div class="modal_user_name">
                    <img class="icon_user" src="../style/img/User.png" alt="">
                    <p>{{ author }}</p>
                  </div>
                  <div class="dateDetails">
                    <div>{{ dateStart }}</div>
                    <div>{{ dateEnd }}</div>
                  </div>
                  <div class="executorDetails">
                    <img class="icon_user" src="../style/img/User.png" alt="">
                    <div>{{ executor }}</div>
                  </div>
                  <div class="executorDetails">
                    <img class="icon_user" src="../style/img/User.png" alt="">
                    <div>{{ executor }}</div>
                  </div>
                  <div class="descrDetails">
                    {{ descr }}
                  </div>
                </div>
              </section>
            </form>
          </div>
          <div class="rightBlock col-lg-6">
            <p class="krHeader">Ключевые результаты</p>
            <div class="krsDetails" v-for="kr in krs" :key="kr.id">
              <label for="newKr"> {{ kr.title }}</label>
              <input id="newKr" type="range" min="0" max="100" v-model="kr.percent" class="slider" disabled>
              <p class="percentGoalsDetails">{{ kr.percent }}%</p>
            </div>
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
  name: 'DetailsGoal',
  props: ['idGoal'],
  components: {
    Head,
    ToolBar
  },
  data: () => ({
    name: '',
    author: '',
    dateStart: '',
    dateEnd: '',
    executor: '',
    command: '',
    descr: '',
    krs: []
  }),

  mounted: function () {
    this.$store.state.goals.forEach(goal => {
      if (goal.id === this.idGoal) {
        this.name = goal.name;
        this.author = goal.author;
        this.dateStart = goal.dateStart;
        this.dateEnd = goal.dateEnd;
        this.executor = goal.executor;
        this.command = goal.command;
        this.descr = goal.descr;
        this.krs = goal.krs
      }
    });
  },
  methods: {
    close() {
      this.$emit('close');
    },
    editGoal() {
      let modifiedGoal = {
        name: this.name,
        command: this.command,
        dateStart: this.dateStart,
        dateEnd: this.dateEnd,
        id: this.idGoal,
        descr: this.descr,
        executor: this.executor
      }
      this.$store.commit('editGoal', modifiedGoal);
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
}

p {
  margin: 0;
}

.header_targets_link {
  margin-bottom: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #bec3c3;
}
.slider {
  width: 30%;
}
.ps_details {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 9999;
}

.leftBlock {
  padding: 25px 0 0 45px;
}
.addGoalInput {
  width: 100%;
}

.goalNameInput p {
  margin: 12px 25px 27px 0;
}

.icon_user {
  margin-right: 15px;
}

.dateDetails {
  width: 253px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.dateDetails div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 121px;
  height: 46px;
  border: 2px solid #3AACBD;
  font-size: 18px;
  line-height: 21px;
  color: #0C2528;
}

.executorDetails {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.executorDetails div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 7px;
  width: 208px;
  height: 46px;
  border: 2px solid #3AACBD;
  font-size: 15px;
  line-height: 21px;
  color: #0C2528;
}

.descrDetails {
  padding: 15px 15px ;
  width: 90%;
  margin-bottom: 15px;
  min-height: 50px;
  max-height: auto;
  font-size: 18px;
  line-height: 21px;
  border: 2px solid #3AACBD;
  color: #0C2528;
}

.rightBlock {
  padding: 25px 45px 0 0;
}

.krHeader {
  font-size: 16px;
  line-height: 19px;
  color: #0C2528;
  margin: 95px 0 20px 0;
}

.btnBack {
  margin-top: 25px;
  height: auto;
  width: auto;
}

.goalModalBody {
  margin: 64px 0 0 0;
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  line-height: 22px;
}

.goalNameInput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.goalNameInput label {
  margin: 12px 25px 27px 0;
}

.btnBack p {
  font-size: 14px;
  line-height: 17px;
  color: #0C2528;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 0;
}

.btnBack:hover {
  text-decoration: none;
}

.krsDetails {
  position: relative;
  padding: 25px 40px;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  background-color: #F4F4F4;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}
.krsDetails label {
  width: 47%;
}

.percentGoalsDetails {
  position: absolute;
  right: 10%;
}

</style>