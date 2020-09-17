<template>
  <div>
    <header class="header_okr">
      <div class="soft_menu">
        <router-link href="" class="home_main" to="/">
          <img src="../style/img/Logo.png" alt="Logo" class="logo_okr icon_logo">
        </router-link>

      </div>

      <div class="user_menu">
        <img src="../style/img/Bell.png" alt="Bell" class="bell_okr icon_bell">
        <router-link class="use_name" to="/targetsUser" v-if="this.$store.state.user">
          {{ this.$store.state.user.name }}
        </router-link>
        <img src="../style/img/User.png" alt="Photo" class="user_photo icon_user">
        <router-link class="link_exit" to="">
          <img src="../style/img/Exit.png" alt="Exit">
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>
