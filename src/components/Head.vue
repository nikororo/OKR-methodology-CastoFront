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

        <button @click="showLogOutModal = true" class='btnLogOut'><img src="../style/img/LogOut.png" alt="Log Out"></button>
        <LogOutModal v-if="showLogOutModal" @close="showLogOutModal = false"/>

      </div>
    </header>
  </div>
</template>

<script>
import LogOutModal from './LogOutModal';

export default {
  name: 'Head',

  components: {
    LogOutModal
  },
  
  data: () => ({
    showLogOutModal: false
  }),
}
</script>

<style scoped>
.btnLogOut {
  border: none;
  margin-left: 20px;
}
</style>