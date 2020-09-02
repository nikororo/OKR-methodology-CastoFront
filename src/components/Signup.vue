<template>
	<div class="authorization">
		<img alt="Okr" :src="`${publicPath}auth.png`">
		<form v-on:submit.prevent="onReg" class="register-form">
			<div class="authTitle">Регистрация</div>
			<label for="signupFullName">Полное имя</label>
			<input id="signupFullName" v-model="fullName" type="text" placeholder="Полное имя" required/>
			<label for="signupEmail">E-mail</label>
			<input id="signupEmail" v-model="email" v-bind:class="{error: this.$store.state.authHasError}" type="email" placeholder="E-mail" required/>
			<label for="signupCompany">Название вашей компании</label>
			<input id="signupCompany" v-model="company" type="text" placeholder="Название компании" required/>
			<label for="signupActivity">Ваша сфера деятельности</label>
			<div>
				<select id="signupActivity" v-model="activity" required>
					<option value disabled selected>Сфера деятельности</option>
					<option value="departmentHead">Руководитель отдела</option>
					<option value="manager">Менеджер</option>
					<option selected value="developer">Разработчик</option>
					<option value="analyst">Аналитик</option>
					<option value="designer">Дизайнер</option>
					<option selected value="tester">Тестировщик</option>
					<option value="other">Другое</option>
				</select>
			</div>
			<label for="signupPass">Пароль</label>
			<input id="signupPass" v-model="password" v-bind:class="{error: this.$store.state.authHasError}" type="password" placeholder="Пароль" required/>
			<div class="errorMsg" v-if="this.$store.state.authHasError">{{this.$store.state.errMsg}}</div>
			<div class="message">Уже зарегистрированы? <router-link to="/signin">Войти</router-link></div>
			<div class="enterGoogle"> 
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.850382 4.39371C2.1614 1.78937 4.85435 0 7.97252 0C10.1251 0 11.9234 0.788397 13.3052 2.07285L11.0552 4.26974C10.4794 3.72934 9.46956 3.08269 7.97252 3.08269C5.86424 3.08269 4.07487 4.47347 3.42815 6.39573C3.2687 6.89179 3.1713 7.42327 3.1713 7.97252C3.1713 8.52171 3.2687 9.05325 3.43701 9.54931C4.07487 11.4716 5.86424 12.8623 7.97252 12.8623C9.15951 12.8623 10.0631 12.5345 10.7363 12.065C11.7993 11.321 12.2777 10.2137 12.3662 9.47841H7.97252V6.51976H15.4578C15.5729 7.01582 15.6261 7.49417 15.6261 8.14968C15.6261 10.5769 14.758 12.6231 13.2521 14.0139C11.9322 15.2363 10.1251 15.945 7.97252 15.945C4.85435 15.945 2.1614 14.1556 0.850382 11.5513C0.310046 10.4705 0 9.25698 0 7.97252C0 6.68806 0.310046 5.47444 0.850382 4.39371Z" fill="black"/>
				</svg>
				<div class="message">Зарегистрироваться через Google</div>
			</div>
			<button>Зарегистрироваться</button>
		</form>
	</div>
</template>

<script>

export default {
	name: 'Signup',
	data: () => ({
		email: '',
		password: '',
		company: '',
		fullName: '',
		activity: '',
		publicPath: process.env.BASE_URL
	}),
	
	methods: {
		onReg() {
			//ВЫЗВАТЬ регистрацию С БЕКА,
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