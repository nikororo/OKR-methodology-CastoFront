<template>
<<<<<<< HEAD
  <div class="authorization">
    <div class="imgAuth">
      <img alt="Картинка для авторизации" :src="`${publicPath}auth.png`">
    </div>
    <div class="contAuth">
      <div class="authTitle">Вход</div>
      <form v-on:submit.prevent="onLog">
        <label for="signinEmail">E-mail</label>
        <input id="signinEmail" v-model="email" v-bind:class="{error: this.$store.state.authHasError}" type="email"
               placeholder="E-mail" required/>
        <label for="signinPass">Пароль</label>
        <input id="signinPass" v-model="password" v-bind:class="{error: this.$store.state.authHasError}" type="password"
               placeholder="Пароль" required/>
        <div class="errorMsg" v-if="this.$store.state.authHasError">Неверно введен email и/или пароль.</div>
        <div class="message">Еще не зарегистрированы?
          <router-link to="/signup">Создать аккаунт</router-link>
=======
    <div class="authorization">
        <div class="imgAuth">
            <img alt="Картинка для авторизации" :src="`${publicPath}auth.png`">
        </div>
        <div class="contAuth">
            <div class="authTitle">Вход</div>
            <form v-on:submit.prevent="onLog">
                <label for="signinEmail">E-mail</label>
                <input id="signinEmail" v-model="email" v-bind:class="{error: this.$store.state.authHasError}" type="email" placeholder="E-mail" required minlength="3" maxlength="40"/>
                <label for="signinPass">Пароль</label>
                <input id="signinPass" v-model="password" v-bind:class="{error: this.$store.state.authHasError}" type="password" placeholder="Пароль" required minlength="8" maxlength="30"/>
                <div class="errorMsg" v-if="this.$store.state.authHasError">Неверно введен email и/или пароль.</div>
                <div class="message">Еще не зарегистрированы? <router-link to="/signup">Создать аккаунт</router-link></div>
                <button class="submit">Войти</button>
            </form>
>>>>>>> 67fe229026f873218589d4ad4f9e09eb001bb602
        </div>
        <button class="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Signin',
  data: () => ({
    email: '',
    password: '',
    publicPath: process.env.BASE_URL
  }),

  methods: {
    onLog() {
      //ВЫЗВАТЬ АВТОРИЗАЦИЮ С БЕКА,
      // .then(() => {
      // 	this.$store.commit('authCorr');
      //  this.$router.push('/');
      // })
      // .catch(() => {
      // 		this.$store.commit('authErr');
      // });
    },
  }
}
</script>