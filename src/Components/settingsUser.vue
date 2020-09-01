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

            <div class="col-md-5 col-lg-8 settings">

                <div class="header_settings">
                    <h2 class="h2_settings">Настройки профиля</h2>
                </div>

                <div class="main_settings">
                    <div class="ps_settings">
                        <div class="data_user">
                            <p class="p_data_user">Фото</p>
                            <input type="file">
                        </div>

                        <div class="data_user">
                            <p class="p_data_user">Полное имя</p>
                            <input class="input_user" type="text" placeholder="Полное имя">
                        </div>

                        <div class="data_user">
                            <p class="p_data_user">Сфера деятельности</p>
                            <input class="input_user" type="text" placeholder="Сфера деятельности">
                        </div>

                        <div class="data_user">
                            <p class="p_data_user">Пароль</p>
                            <input class="input_user" type="password" placeholder="Ваш пароль">
                        </div>

                        <div class="data_user">
                            <p class="p_data_user">Новый пароль</p>
                            <input class="input_user" type="password" placeholder="Новый пароль">
                        </div>

                        <a href="" class="button_pass">Обновить пароль</a>
                        <div class="ps_last data_user_google">
                            <p class="p_data_user">Подключите профиль Google</p>
                            <a href="" class="button_google">Подключите Google</a>
                        </div>
                    </div>
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

    .settings {
        margin-top: 5px;
        padding: 0;
    }

    .header_settings {
        width: 100%;
        background-color: white;
        margin-bottom: 5px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .h2_settings {
        margin: 0;
    }

    .main_settings {
        position: relative;
        height: 757px;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        padding-top: 83px;
        text-align: center;
    }

    .data_user {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 30px;
        align-items: center;
    }

    .data_user p {
        margin-right: 42px;
        margin-bottom: 0;
    }

    .input_user {
        border: 2px solid #DDDDDD;
        padding: 11px;
        height: 46px;
        width: 323px;
    }

    .button_pass {
        margin-bottom: 73px;
        background: #3EC6FF;
        color: white;
        height: 40px;
        width: 177px;
        text-decoration: none;
        text-align: center;
        padding: 8px;
        border-radius: 25px;
    }

    .button_pass:hover {
        text-decoration: none;
        background: white;
        border: 1px solid #3EC6FF;
        color: #3EC6FF;
        transform: none;
    }

    .data_user_google {
        position: absolute;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 30px;
        align-items: center;
        right: 36%;
    }

    .data_user_google p {
        margin-right: 42px;
        margin-bottom: 0;
    }

    .button_google {
        background: #3EC6FF;
        color: white;
        height: 40px;
        width: 203px;
        text-decoration: none;
        text-align: center;
        padding: 8px;
        border-radius: 25px;
    }

    .button_google:hover {
        text-decoration: none;
        background: white;
        border: 1px solid #3EC6FF;
        color: #3EC6FF;
        transform: none;
    }

    .ps_last {
        margin-top: 73px;
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
        }
    }
</script>