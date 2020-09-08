<template>
    <div>
        <Head/>

        <div class="row no-gutter cont">
            <toolBar/>

            <div class="col-sm-10 col-md-4 col-lg-2 Private_user">
                <div class="bg_color">
                    <div class="ps_user">
                        <img src="../style/img/User.png" alt="User">
                        <p class="User_name">User</p>
                    </div>
                    <router-link class="settings_link" active-class="active_settings_one" to="/private/settingsUser">
                        Настройки
                        профиля
                    </router-link>
                    <router-link class="settings_link" active-class="active_settings_two" to="/settingsUser">
                        Оповещения
                    </router-link>
                </div>
            </div>

            <div class="col-md-5 col-lg-8 settings">

                <div class="header_targets">
                    <h2 class="h2_user_name">User</h2>
                </div>

                <div class="header_targets_link">
                    <router-link class="link_targets" active-class="active_link_targets" to="/PlanWeek">Планы на неделю
                    </router-link>
                    <router-link class="link_targets" active-class="active_link_targets" to="/GoalsUser">Цели</router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import Head from './Head'
    import ToolBar from './ToolBar'

    export default {
        name: 'Home',
        components: {
            Head, ToolBar
        }
    }
</script>