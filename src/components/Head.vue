<template>
  <div class="shadow_header">
    <header class="header_okr">
      <div class="soft_menu">
        <router-link href="" class="home_main" to="/">
          <img src="../style/img/Logo.png" alt="Logo" class="logo_okr icon_logo">
        </router-link>

        <div class="search_okr">
          <form>
            <input type="text">
            <button type="submit"><img width="15" height="15" src="../style/img/Search.png" alt=""></button>
          </form>
        </div>
      </div>

      <div class="user_menu">
        <img src="../style/img/Bell.png" alt="Bell" class="bell_okr icon_bell">
        <router-link class="use_name" to="/targetsUser" v-if="this.$store.state.user">
          {{ this.$store.state.user.name }}
        </router-link>
        <img src="../style/img/User.png" alt="Photo" class="user_photo icon_user">
        <nav>
          <ul class="menu_user">
            <li><img width="21" height="17" src="../style/img/Menu.png" alt="Menu" class="submenu-link">
              <ul class="submenu">
                <li><a href="">Ссылка</a></li>
                <li><a href="">Ссылка</a></li>
                <li><a href="">Ссылка</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>
