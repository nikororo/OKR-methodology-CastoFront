<template>
    <div>
        <header class="header_okr">
            <div class="soft_menu">
              <router-link href="" class="home_main" to="/">
                <img src="../style/img/Logo.png" alt="Logo" class="logo_okr">
              </router-link>
<!--                <label>-->
<!--                    <input type="search" class="search_okr" >-->
<!--                </label>-->
              <div class="search_okr">
                <form>
                  <input type="text">
                  <button type="submit"><img width="15" height="15" src="../style/img/Search.png" alt=""></button>
                </form>
              </div>
            </div>

            <div class="user_menu">
                <img src="../style/img/Bell.png" alt="Bell" class="bell_okr">
                <router-link class="use_name" to="/targetsUser">User</router-link>
                <img src="../style/img/User.png" alt="Photo" class="user_photo">
                <nav>
                    <ul class="menu_user">
                        <li><img src="../style/img/Menu.png" alt="Menu" class="submenu-link">
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

        data: () => ({
            links: [
                {title: 'User', url: '/targetsUser'},
                {title: 'Проект', url: ''}
            ]
        })
    }
</script>