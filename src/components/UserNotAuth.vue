<template>
  <div>
    <div>
      <header class="header_okr">
        <div class="soft_menu">
          <router-link href="" class="home_main" to="/">
            <img src="../style/img/Logo.png" alt="Logo" class="logo_okr icon_logo">
          </router-link>
        </div>
        <div class="user_menu">
          <router-link class="linkAuth" to="/signup" v-if="this.$store.state.user"><b class="redText">Зарегистрироваться</b></router-link>
          <router-link class="linkAuth" to="/signin" v-if="this.$store.state.user">Войти</router-link>
        </div>
      </header>
    </div>
    <div class="userNotAuthCont">
      <div class="msgOops"><b class="redText">Упс!</b> Что-то пошло не так</div>
      <div class="msgNotAuth">У Вас нет доступа,
        <router-link to="/signup">зарегистрируйтесь</router-link>
        или
        <router-link to="/signin">войдите</router-link>
        в систему
      </div>
      <img src="../style/img/Cat.png" alt="Котик">
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserNotAuth',
}
</script>

<style scoped>
.userNotAuthCont {
  background-color: #F4F4F4;
  min-height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  text-align: center;
  padding: 20px;
}

.msgOops {
  font-weight: 600;
  font-size: 60px;
  line-height: 71px;
  color: #40B5C6;
}

.redText {
  color: #C9002E;
  font-weight: inherit;
}

.msgNotAuth {
  max-width: 751px;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  margin: 25px 0;
}

.msgNotAuth a {
  color: #40B5C6;
  text-decoration: none;
}

.linkAuth {
  color: #40B5C6;
  font-size: 18px;
  line-height: 21px;
  margin-right: 36px;
  text-decoration: none;
}
</style>