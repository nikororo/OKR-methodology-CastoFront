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