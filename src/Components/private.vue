<template>
    <div>
        <Head/>

        <div class="row cont">

            <toolBar/>

            <div class="col-sm-10 col-md-3 col-lg-1 Private_user">
                <div class="bg_color">
                    <div class="ps_user">
                        <img src="../style/img/User.png" alt="User">
                        <p class="User_name">User</p>
                    </div>
                    <ul class="ul_Private_user">
                        <li class="li_Private_user">
                            <router-link active-class="active_settings" to="/settingsUser" exact>Настройки профиля
                            </router-link>
                        </li>
                        <li class="li_Private_user"><a href="">Оповещания</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .row {
        margin: 0;
    }

    .Private_user {
        margin-top: 5px;
        padding: 0 5px 0 0;
    }

    .bg_color {
        background-color: white;
        width: 100%;
        height: 100%;
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

    .ul_Private_user {
        list-style: none;
    }

    .li_Private_user {
        margin-bottom: 10px;
    }

    .li_Private_user a {
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        color: black;
    }

    .li_Private_user a:hover {
        color: #86919A;
    }

    .active_settings {
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