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
            <option value disabled selected>Сфера деятельности</option>
            <option value="Руководитель отдела">Руководитель отдела</option>
            <option value="Менеджер">Менеджер</option>
            <option selected value="Разработчик">Разработчик</option>
            <option value="Аналитик">Аналитик</option>
            <option value="Дизайнер">Дизайнер</option>
            <option selected value="Тестировщик">Тестировщик</option>
            <option value="Другое">Другое</option>
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
import firebase from 'firebase/app';
import 'firebase/auth'

export default {
  name: 'Signup',
  data: () => ({
    email: '',
    password: '',
    fullName: '',
    activity: ''
  }),

  methods: {
    onReg() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(async (res) => {
          await this.$store.dispatch('regCorr', 
            {
              email: res.user.email,
              id: res.user.uid,
              name: this.fullName,
              command: this.activity
            }
          );
          this.$router.push('/');
        })
        .catch(() => {
          this.$store.commit('authErr');
        });
    },
  }
}
</script>