<template>
  <div class="addGoalModalCont">
    <div class="addGoalModal">

      <form v-on:submit.prevent="addGoal">
        <header>
          <input placeholder="Название цели" required minlength="5" maxlength="100"/>
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
            <label for="addGoalAuthor">Автор</label>
            <label for="addGoalDateStart">Период</label>
            <label for="addGoalExecutor">Исполнитель</label>
            <label for="addGoalDescr">Описание цели</label>
          </div>
          <div class="addGoalInput">
            <div class="modal_user_name">
              <img class="icon_user" src="../style/img/User.png" alt="">
              <p v-if="this.$store.state.user">{{ this.$store.state.user.name }}</p>
            </div>
            <div class="addGoalDate">
              <input id="addGoalDateStart" class="input_user" placeholder="Дата начала" type="text"
                     onfocus="(this.type='date')" onblur="(this.type='text')" required>
              <input id="addGoalDateEnd" class="input_user" placeholder="Дата окончания" type="text"
                     onfocus="(this.type='date')" onblur="(this.type='text')" required>
            </div>
            <select id="addGoalExecutor" class="input_user" required>
              <option value disabled selected>Исполнитель</option>
            </select>
            <select id="addGoalExecutor" class="input_user" required>
              <option value disabled selected>Родительская цель</option>
            </select>
            <textarea id="addGoalDescr" class="input_user" type="text"
                      placeholder="Описание цели"></textarea>
          </div>
        </section>
        <footer>
          <button
              type="submit"
              class="button_pass"
          >
            Сохранить
          </button>
          <button
              type="button"
              class="button_pass"
              @click="close"
          >
            Отмена
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddGoalModal',

  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>