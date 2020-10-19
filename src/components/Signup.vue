<template>
  <div class="authorization">
    <div class="blueAuth"></div>
    <div class="imgAuth">
      <img alt="Картинка для регистрации" src="../style/img/Auth.png">
    </div>
    <div class="authLogo">
      <img alt="Логотип OKR" src="../style/img/AuthLogo.png">
    </div>
    <div class="contAuth">
      <div class="authTitle">Регистрация</div>
      <form v-on:submit.prevent="onReg" class="register-form">
        <label for="signupFullName">Полное имя</label>
        <input id="signupFullName" v-model.trim="fullName" type="text" placeholder="Полное имя" required minlength="3"
               maxlength="80"/>
        <label for="signupEmail">E-mail</label>
        <input id="signupEmail" v-model.trim="email" v-bind:class="{error: this.$store.state.authHasError}" type="email"
               placeholder="E-mail" required minlength="3" maxlength="40"/>
        <label for="signupActivity">Ваша сфера деятельности</label>
        <div>
          <select id="signupActivity" v-model="activity" required>
            <option value hidden selected>Сфера деятельности</option>
            <option value="Руководитель отдела">Руководитель отдела</option>
            <option value="Менеджер">Менеджер</option>
            <option selected value="Разработчик">Разработчик</option>
            <option value="Аналитик">Аналитик</option>
            <option value="Дизайнер">Дизайнер</option>
            <option selected value="Тестировщик">Тестировщик</option>
            <option value="Другое">Другое</option>
          </select>
        </div>
        <label for="signupCommand">Ваш отдел</label>
        <div>
          <select id="signupCommand" v-model="command" required>
            <option value hidden selected>Отдел</option>
            <option v-for="(command, index) in this.$store.state.commands" v-bind:key="index">
              {{command}}
            </option>
          </select>
        </div>
        <label for="signupPass">Пароль</label>
        <input id="signupPass" v-model.trim="password" type="password"
               placeholder="Пароль" required pattern="^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).+$"
               title="Латинские символы и цифры, без пробелов" minlength="8" maxlength="30"/>
        <div class="errorMsg" v-if="this.$store.state.authHasError">Возможно, ваш e-mail уже зарегистрирован</div>
        <div class="message">Уже зарегистрированы?
          <router-link to="/signin">Войти</router-link>
        </div>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data: () => ({
    email: '',
    password: '',
    fullName: '',
    activity: '',
    command: '',
  }),

  mounted: function () {
    this.$store.commit('resetErr');
  },

  methods: {
    async onReg() {
      let newUser = {
        name: this.fullName,
        email: this.email,
        password: this.password,
        activity_sphere: this.activity,
        command: this.command
      }

      await this.$store.dispatch('register', newUser);
      if (!this.$store.state.authHasError) {
        this.$router.push('/');
      }
    },
  }
}
</script>