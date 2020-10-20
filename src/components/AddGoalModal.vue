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
                           onfocus="(this.type='date')" onblur="(this.type='text')" required maxlength="30">
                    <input v-model="dateEnd" id="addGoalDateEnd" class="input_user" placeholder="Дата окончания"
                           v-bind:class="{error: this.dataErr}" type="text"
                           onfocus="(this.type='date')" onblur="(this.type='text')" required maxlength="30">
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
              <div v-for="(kr, index) in newKrs" :key="kr.id">
                <form>
                  <section class="addGoalModalBody">
                    <div class="addGoalNameInput">
                      <label class="labelKr" for="addKrName">Ключевой результат</label>
                    </div>
                    <div class="addKrInput">
                      <div class="flex flex-row">
                        <input v-model.trim="kr.title" class="input_user" id="addKrName" placeholder="Название цели"
                             required minlength="5" maxlength="100">
                        <button @click="deleteFormKr(index)"><img src="@/style/img/CloseKr.png" alt=""></button>
                      </div>
                      <div class="settingKr">
                        <div class="parametersKr">
                          <label for="createKrPercent">Вес</label>
                          <input v-model="kr.weight" id="createKrPercent" class="input_user" type="number" min="1"
                                 max="100" placeholder="100%" required>
                          <label for="createKrFile">Прикрепить документ <img class="icon_user" src="@/style/img/AddFile.png" alt="add"></label>
                          <input type="file" id="createKrFile" class="fileKr" disabled/>
                        </div>
                        <div class="responsibleKr">
                          <label for="addKrExecutor">Ответственный</label>
                          <select v-model="kr.executor" id="addKrExecutor" class="input_user" required>
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
                  Отправить
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
    executor: '',
    newKrs: []
  }),

  created: async function () {
    this.addForm();
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
        executor: this.executor,
      }
      if (this.descr) newGoal.descr = this.descr;
      this.dataErr = false;
      let krs = this.newKrs.filter(kr => kr.title !== '')
      let payload = { newGoal, krs }
      await this.$store.dispatch('addGoal', payload);
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

.addKrInput input, .addKrInput select {
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
  margin: 0 0 40px 0;
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
  width: 520px;
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
  width: 145px;
}

.labelKr {
  margin-top: 0;
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
  border-radius: 20px;
}

.button_pass_add_goal:last-child {
  background: transparent;
  border: 1px solid #40B5C6;
  color: #0C2528;
  height: 40px;
  width: 110px;
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
  width: 139px;
  height: 40px;
  align-items: center;
  font-size: 18px;
  line-height: 25px;
  color: #0C2528;
  border: 1px solid #3AACBD;
  box-sizing: border-box;
  margin-left: 145px;
  margin-bottom: 50px;
  border-radius: 20px;
}

.addGoalModalBody button {
  position: relative;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  right: 0;
  top: 0;
}

#addKrName {
  width: 520px;
}
</style>