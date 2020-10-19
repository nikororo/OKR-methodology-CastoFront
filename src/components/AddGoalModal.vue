<template>
  <div class="ps_details">
    <Head/>
    <div class="row no-gutter">
      <toolBar/>
      <div class="col-lg-10 col-md-10 col-sm-11">
        <div class="header_targets">
          <p>Создание цели</p>
        </div>
        <div class="page">
          <div>
            <form v-on:submit.prevent="addGoal()">
              <section class="addGoalModalBody">
                <div class="addGoalNameInput">
                  <label for="addGoalName">Название</label>
                  <label for="addGoalAuthor">Автор</label>
                  <label for="addGoalDateStart">Период</label>
                  <label for="addGoalExecutor">Ответственный</label>
                  <label for="addGoalDescr">Описание цели</label>
                </div>
                <div class="addGoalInput">
                  <input class="input_user" id="addGoalName" v-model.trim="name" placeholder="Название цели" required
                         minlength="5" maxlength="100"/>
                  <div class="modal_user_name">
                    <img class="icon_user" src="../style/img/User.png" alt="User">
                    <p>{{ this.$store.state.user.name }}</p>
                  </div>
                  <div class="addGoalDate">
                    <input v-model="dateStart" id="addGoalDateStart" class="input_user" placeholder="Дата начала"
                           v-bind:class="{error: this.dataErr}" type="text"
                           onfocus="(this.type='date')" onblur="(this.type='text')" required>
                    <input v-model="dateEnd" id="addGoalDateEnd" class="input_user" placeholder="Дата окончания"
                           v-bind:class="{error: this.dataErr}" type="text"
                           onfocus="(this.type='date')" onblur="(this.type='text')" required>
                    <div class="errorMsg" v-if="this.dataErr">Дата начала позже даты окончания</div>
                  </div>
                  <select v-model="executor" id="addGoalExecutor" class="input_user" required>
                    <option value disabled selected hidden>Ответственный</option>
                    <option v-for="men in people" v-bind:key="men.id" v-bind:value="men.id">
                      {{ men.name }}
                    </option>
                  </select>
                  <textarea v-model="descr" id="addGoalDescr" class="input_user" type="text" placeholder="Описание цели" minlength="5" maxlength="500"></textarea>
                </div>
              </section>

              <h2>Ключевые результаты</h2>
              <div v-for="kr in newKrs" :key="kr.id">
                <form>
                  <section class="addGoalModalBody">
                    <button @click="deleteFormKr"><img src="@/style/img/CloseKr.png" alt=""></button>
                    <div class="addGoalNameInput">
                      <label for="addKrName">Ключевой результат</label>
                    </div>
                    <div class="addKrInput">
                      <input v-model.trim="kr.title" class="input_user" id="addKrName" placeholder="Название цели"
                             required minlength="5" maxlength="100">
                      <div class="settingKr">
                        <div class="parametersKr">
                          <label for="createKrPercent">Вес</label>
                          <input v-model="kr.weight" id="createKrPercent" class="input_user" type="number" min="1"
                                 max="100" placeholder="1" required>
                          <label for="createKrFile">Прикрепить документ <img class="icon_user" src="@/style/img/AddFile.png" alt="add"></label>
                          <input type="file" id="createKrFile" class="fileKr"/>
                        </div>
                        <div class="responsibleKr">
                          <label for="addGoalExecutor">Ответственный</label>
                          <select v-model="kr.executor" id="addGoalExecutor" class="input_user" required>
                            <option value disabled selected hidden>Ответственный</option>
                            <option v-for="men in people" v-bind:key="men.id" v-bind:value="men.id">
                              {{ men.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
              <footer>
                <button type="submit" class="button_pass_add_goal">
                  Добавить
                </button>
                <button type="button" class="button_pass_add_goal" @click="close">
                  Отмена
                </button>
              </footer>
            </form>
              <button @click="addForm" class="button_pass_add_kr">Добавить</button>
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
  name: 'AddGoalModal',
  components: {
    Head,
    ToolBar
  },

  data: () => ({
    name: '',
    dateStart: '',
    dateEnd: '',
    dataErr: false,
    people: '',
    descr: '',
    status: 'unsent',
    executor: '',
    newKrs: []
  }),

  created: async function () {
    await this.$store.dispatch('getUsers');
    this.people = this.$store.state.people;
  },

  methods: {
    async addForm() {
      await this.newKrs.push({
        title: '',
        weight: '',
        executor: ''
      })
    },

    deleteFormKr: function (index) {
      this.newKrs.splice(index, 1);
    },

    close() {
      this.$emit('close');
    },

    async addGoal() {
      if (this.dateStart > this.dateEnd) {
        this.dataErr = true;
        return;
      }
      let newGoal = {
        name: this.name,
        dateStart: this.dateStart,
        dateEnd: this.dateEnd,
        status: this.status
      }
      if (this.descr) newGoal.descr = this.descr;
      if (this.executor) newGoal.executor = this.executor;
      this.dataErr = false;
      await this.$store.dispatch('addGoal', newGoal);
      this.$emit('close');
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

.errorMsg {
  position: absolute;
  top: -20px;
}

.settingKr {
  display: flex;
  flex-direction: column;
  padding-right: 30px;
}

.addKrInput {
  display: flex;
  flex-direction: column;
}

.addKrInput input .addKrInput select {
  margin: 0;
  font-size: 14px;
  line-height: 19px;
}

.parametersKr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0 25px 0;
}

.parametersKr label {
  margin: 0;
  font-size: 14px;
  line-height: 19px;
  color: #0C2528;
  opacity: 0.4;
}

.parametersKr label:first-child {
  margin-right: 97px;
  opacity: 1;
  font-size: 16px;
}

.parametersKr .input_user {
  width: 17%;
}

.responsibleKr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.responsibleKr label {
  margin: 0 20px 0 0;
}

.responsibleKr input {
  margin-bottom: 0;
}

h2 {
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 35px;
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

.addGoalModalBody {
  margin: 0 0 65px 0;
  display: flex;
  font-size: 16px;
  line-height: 22px;
}

.modal_user_name {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 2px solid #00000069;
  opacity: 0.5;
  padding: 11px;
  height: 46px;
  width: 323px;
}

.modal_user_name:first-child {
  padding-top: 8px;
  margin-bottom: 34px;
}

.modal_user_name p {
  margin-bottom: 0;
  font-size: 18px;
}

.goalNameInput p {
  margin: 12px 25px 27px 0;
}

.input_user {
  background: transparent;
  width: 100%;
}

.icon_user {
  margin-right: 15px;
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

.krsDetails label {
  width: 47%;
}

.errorMsg {
  position: absolute;
  top: -20px;
}

.addGoalNameInput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

footer {
  position: absolute;
  bottom: 50px;
  left: 35%;
  margin: 0 auto;
  width: 236px;
  display: flex;
  justify-content: space-around;
}

.button_pass_add_goal {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #40B5C6;
  color: white;
  height: 40px;
  width: 177px;
  text-decoration: none;
  font-size: 16px;
}

.button_pass_add_goal:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #40B5C6;
  color: #0C2528;
  height: 40px;
  width: 83px;
  text-decoration: none;
  margin-left: 15px;
  font-size: 16px;
}

.button_pass_add_goal:hover {
  text-decoration: none;
  background: #F4F4F4;
  border: 1px solid #40B5C6;
  color: #40B5C6;
  transform: none;
}

.button_pass_add_goal:last-child:hover {
  border: 1px solid #0C2528;
  color: #0C2528;
}

.header_targets {
  margin: 0;
  border-bottom: 1px solid #eae1e1;
}

.header_targets p {
  font-size: 24px;
  line-height: 28px;
}

.button_pass_add_kr {
  display: flex;
  justify-content: center;
  padding: 10px 24px;
  align-items: center;
  font-size: 18px;
  line-height: 25px;
  color: #0C2528;
  border: 1px solid #3AACBD;
  box-sizing: border-box;
  margin-left: 176px;
  margin-bottom: 50px;
}
</style>

<!--<template>-->
<!--  <div class="addGoalModalCont">-->
<!--    <div class="flexModalCont">-->
<!--      <div class="addGoalModal">-->

<!--        <form v-on:submit.prevent="addGoal">-->
<!--          <header>-->
<!--            <input v-model.trim="name" placeholder="Название цели" required minlength="5" maxlength="100"/>-->
<!--            <button class="btnClose" @click="close">-->
<!--              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                    d="M14.4361 13.0008L25.7023 1.73457C26.0989 1.33792 26.0989 0.694822 25.7023 0.298221C25.3056 -0.0983798 24.6625 -0.0984305 24.2659 0.298221L12.9997 11.5644L1.73359 0.298221C1.33694 -0.0984305 0.693845 -0.0984305 0.297244 0.298221C-0.0993563 0.694873 -0.099407 1.33797 0.297244 1.73457L11.5634 13.0007L0.297244 24.2669C-0.099407 24.6636 -0.099407 25.3067 0.297244 25.7033C0.495545 25.9016 0.755494 26.0007 1.01544 26.0007C1.27539 26.0007 1.53529 25.9016 1.73364 25.7033L12.9997 14.4371L24.2659 25.7033C24.4642 25.9016 24.7241 26.0007 24.9841 26.0007C25.244 26.0007 25.5039 25.9016 25.7023 25.7033C26.0989 25.3066 26.0989 24.6635 25.7023 24.2669L14.4361 13.0008Z"-->
<!--                    fill="black"/>-->
<!--              </svg>-->
<!--            </button>-->
<!--          </header>-->
<!--          <hr>-->
<!--          <section class="addGoalModalBody">-->
<!--            <div class="addGoalNameInput">-->
<!--              <label for="addGoalAuthor">Автор</label>-->
<!--              <label for="addGoalCommand">Отдел</label>-->
<!--              <label for="addGoalDateStart">Период</label>-->
<!--              <label for="addGoalExecutor">Ответственный</label>-->
<!--              <label for="addGoalDescr">Описание цели</label>-->
<!--            </div>-->
<!--            <div class="addGoalInput">-->
<!--              <div class="modal_user_name">-->
<!--                <img class="icon_user" src="../style/img/User.png" alt="User">-->
<!--                <p>{{ this.$store.state.user.name }}</p>-->
<!--              </div>-->
<!--              <div class="modal_user_name">-->
<!--                <p>{{ this.$store.state.user.command }}</p>-->
<!--              </div>-->
<!--              <div class="addGoalDate">-->
<!--                <input v-model="dateStart" id="addGoalDateStart" class="input_user" placeholder="Дата начала"-->
<!--                       v-bind:class="{error: this.dataErr}" type="text"-->
<!--                       onfocus="(this.type='date')" onblur="(this.type='text')" required>-->
<!--                <input v-model="dateEnd" id="addGoalDateEnd" class="input_user" placeholder="Дата окончания"-->
<!--                       v-bind:class="{error: this.dataErr}" type="text"-->
<!--                       onfocus="(this.type='date')" onblur="(this.type='text')" required>-->
<!--                <div class="errorMsg" v-if="this.dataErr">Дата начала позже даты окончания</div>       -->
<!--              </div>-->
<!--              <select v-model="executor" id="addGoalExecutor" class="input_user" required>-->
<!--                <option value disabled selected hidden>Ответственный</option>-->
<!--                <option v-for="men in people" v-bind:key="men.id" v-bind:value="men.id">-->
<!--                  {{men.name}}-->
<!--                </option>-->
<!--              </select>-->
<!--              <textarea v-model="descr" id="addGoalDescr" class="input_user" type="text"-->
<!--                        placeholder="Описание цели" minlength="5" maxlength="500"></textarea>-->
<!--            </div>-->
<!--          </section>-->
<!--          <footer>-->
<!--            <button type="submit" class="button_pass">-->
<!--              Добавить-->
<!--            </button>-->
<!--            <button type="button" class="button_pass" @click="close">-->
<!--              Отмена-->
<!--            </button>-->
<!--          </footer>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: 'AddGoalModal',-->

<!--  data: () => ({-->
<!--    name: '',-->
<!--    dateStart: '',-->
<!--    dateEnd: '',-->
<!--    executor: '',-->
<!--    dataErr: false,-->
<!--    people: '',-->
<!--    descr: '',-->
<!--    status: 'unsent'-->
<!--  }),-->

<!--  created: async function () {-->
<!--    await this.$store.dispatch('getUsers');-->
<!--    this.people = this.$store.state.people;-->
<!--  },-->

<!--  methods: {-->
<!--    close() {-->
<!--      this.$emit('close');-->
<!--    },-->
<!--    async addGoal() {-->
<!--      if (this.dateStart > this.dateEnd) {-->
<!--        this.dataErr = true;-->
<!--        return;-->
<!--      }-->
<!--      let newGoal = {-->
<!--        name: this.name,-->
<!--        dateStart: this.dateStart,-->
<!--        dateEnd: this.dateEnd,-->
<!--        status: this.status-->
<!--      }-->
<!--      if (this.descr) newGoal.descr = this.descr;-->
<!--      if (this.executor) newGoal.executor = this.executor;-->
<!--      this.dataErr = false;-->
<!--      await this.$store.dispatch('addGoal', newGoal);-->
<!--      this.$emit('close');-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.errorMsg {-->
<!--  position: absolute;-->
<!--  top: -20px;-->
<!--}-->

<!--.addGoalModal {-->
<!--  padding: 0 0 30px;-->
<!--}-->
<!--</style>-->