<template>
	<div class="authorization">
    <img alt="Okr" :src="`${publicPath}auth.png`">
		<form v-on:submit.prevent="onLog">
			<div class="authTitle">Вход</div>
      <label for="signinEmail">E-mail</label>
			<input id="signinEmail" v-model="email" v-bind:class="{error: this.$store.state.authHasError}" type="email" placeholder="E-mail" required/>
      <label for="signinPass">Пароль</label>
			<input id="signinPass" v-model="password" v-bind:class="{error: this.$store.state.authHasError}" type="password" placeholder="Пароль" required/>
			<div class="errorMsg" v-if="this.$store.state.authHasError">Неверный email или пароль</div>
      <div class="message">Еще не зарегистрированы? <router-link to="/signup">Создать аккаунт</router-link></div>
      <div class="enterGoogle"> 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.850382 4.39371C2.1614 1.78937 4.85435 0 7.97252 0C10.1251 0 11.9234 0.788397 13.3052 2.07285L11.0552 4.26974C10.4794 3.72934 9.46956 3.08269 7.97252 3.08269C5.86424 3.08269 4.07487 4.47347 3.42815 6.39573C3.2687 6.89179 3.1713 7.42327 3.1713 7.97252C3.1713 8.52171 3.2687 9.05325 3.43701 9.54931C4.07487 11.4716 5.86424 12.8623 7.97252 12.8623C9.15951 12.8623 10.0631 12.5345 10.7363 12.065C11.7993 11.321 12.2777 10.2137 12.3662 9.47841H7.97252V6.51976H15.4578C15.5729 7.01582 15.6261 7.49417 15.6261 8.14968C15.6261 10.5769 14.758 12.6231 13.2521 14.0139C11.9322 15.2363 10.1251 15.945 7.97252 15.945C4.85435 15.945 2.1614 14.1556 0.850382 11.5513C0.310046 10.4705 0 9.25698 0 7.97252C0 6.68806 0.310046 5.47444 0.850382 4.39371Z" fill="black"/>
        </svg>
        <div class="message">Войдите при помощи аккаунта Google</div>
      </div>
			<button class="submit">Войти</button>
		</form>
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

<style>
.authorization {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.authorization form {
  min-width: 325px;
  max-width: 325px;
  padding-right: 45px;
  margin-left: 130px;
}

.authorization .authTitle {
  margin-bottom: 25px;
  font-size: 40px;
}

.authorization input, .authorization select {
  width: 100%;
  height: 46px;
  border: 2px solid #dddddd;
  margin: 5px 0 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

.authorization label {
  margin-left: 17px;
}

.authorization .error {
  border: 1.5px solid rgb(255, 112, 112);
}

.authorization .errorMsg {
  color: #ff3838;
  text-align: left;
  margin-bottom: 15px;
  font-size: 14px;
}

.authorization button {
  outline: 0;
  border-radius: 19px;
  background-color: #3ec6ff;
  border: none;
  min-width: 200px;
  padding: 4px 25px;
  display: block;
  margin: 0 auto;
  color: #fff;
  font-size: 22px;
}

.authorization button:hover {
  background-color: #00adf7;
}

.authorization .message {
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

.authorization .enterGoogle {
  display: flex;
  flex-direction: row;
  align-items: center;
	justify-content: center;
  margin: 25px 0;
}

.enterGoogle .message {
  margin: 0 0 0 10px;
}

.authorization .message a {
  color: #86919a;
}
</style>