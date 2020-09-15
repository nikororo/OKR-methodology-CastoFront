<template>
  <div>
    <header class="header_okr">
      <div class="soft_menu">
        <router-link href="" class="home_main" to="/">
          <img src="../style/img/Logo.png" alt="Logo" class="logo_okr">
        </router-link>
      </div>
      <div class="user_menu">
        <router-link class="use_name" to="/signup" v-if="this.$store.state.user">Зарегистрироваться</router-link>
        <router-link class="use_name" to="/signin" v-if="this.$store.state.user">Войти</router-link>
      </div>
    </header>
    <div class="userNotAuthCont">
      <div class="msgOops">Упс! Что-то пошло не так</div>
      <div class="msgNotAuth">У Вас нет доступа, <router-link to="/signup">зарегистрируйтесь</router-link> или <router-link to="/signin">войдите</router-link> в систему</div>
      <img src="../style/img/cat.png" alt="cat">
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserNotAuth',
}
</script>

<style scoped>
  .use_name {
    margin-right: 36px;
  }

  .userNotAuthCont {
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    text-align: center;
  }

  .msgOops {
    font-weight: 600;
    font-size: 60px;
    line-height: 82px;
    color: #40B5C6;
    margin-top: 45px;
  }

  .msgNotAuth {
    max-width: 751px;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    margin: 25px 0;
  }

  .msgNotAuth a {
    color: #40B5C6;
    text-decoration: underline;
  }
</style>