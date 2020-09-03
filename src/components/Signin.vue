<template>
    <div class="authorization">
        <img alt="Okr" :src="`${publicPath}auth.png`">
        <form v-on:submit.prevent="onLog">
            <div class="authTitle">Вход</div>
            <label for="signinEmail">E-mail</label>
            <input id="signinEmail" v-model="email" v-bind:class="{error: this.$store.state.authHasError}" type="email" placeholder="E-mail" required/>
            <label for="signinPass">Пароль</label>
            <input id="signinPass" v-model="password" v-bind:class="{error: this.$store.state.authHasError}" type="password" placeholder="Пароль" required/>
            <div class="errorMsg" v-if="this.$store.state.authHasError">Неверно введен email и/или пароль.</div>
            <div class="message">Еще не зарегистрированы? <router-link to="/signup">Создать аккаунт</router-link></div>
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
        margin: 10px 0 20px;
        text-align: center;
    }

    .authorization .message a {
        color: #86919a;
    }
</style>