<template>
    <div>
        <Head/>

        <div class="row cont">

            <toolBar/>

            <div class="col-sm-10 col-md-4 col-lg-2 Private_user">
                <div class="bg_color">
                    <div class="ps_user">
                        <img src="../style/img/User.png" alt="User">
                        <p class="User_name">User</p>
                    </div>
                    <router-link class="settings_link" active-class="active_settings_one" to="/settingsUser" exact>Настройки
                        профиля
                    </router-link>
                    <router-link class="settings_link" active-class="active_settings_two" to="/settingsUser" exact>
                        Оповещения
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .row {
        margin: 0;
    }
    .cont {
        /*min-height: 100%;*/
    }

    .Private_user {
        margin-top: 5px;
        padding: 0 5px 0 0;
    }

    .bg_color {
        background-color: white;
        width: 100%;
        height: 822px;
        padding: 74px 0 0 25px;
    }

    .ps_user {
        display: flex;
        align-items: center;
        padding-bottom: 40px;
    }

    .User_name {
        margin: 0 0 0 10px;
    }

    .settings_link {
        display: block;
        margin-bottom: 10px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        color: black;
    }

    .settings_link:hover {
        text-decoration: none;
        color: #86919A;
    }

    .active_settings_one {
        color: #86919A;
    }
</style>

<script>
    import Head from './Head'
    import ToolBar from './toolBar'

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