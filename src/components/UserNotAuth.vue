<template>
  <div>
    У Вас нет доступа, зарегистрируйтесь или войдите в систему
    <div class="message">Еще не зарегистрированы? <router-link to="/signup">Создать аккаунт</router-link></div>
    <div class="message">Уже зарегистрированы? <router-link to="/signin">Войти</router-link></div>
  </div>
</template>

<script>

export default {
  name: 'UserNotAuth',
}
</script>
