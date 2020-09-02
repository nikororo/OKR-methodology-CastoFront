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
                    <router-link class="settings_link" active-class="active_settings_one" to="/settingsUser">
                        Настройки
                        профиля
                    </router-link>
                    <router-link class="settings_link" active-class="active_settings_two" to="">
                        Оповещения
                    </router-link>
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
        },
        data: () => ({
            links: [
                {title: 'Настройки профиля', url: '/settingsUser'},
                {title: 'Проект', url: ''}
            ]
        })
    }
</script>