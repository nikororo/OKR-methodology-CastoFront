<template>
    <div>
        <Head/>

        <div class="row cont">
            <toolBar/>

            <div class="col-sm-10 col-md-2 col-lg-1 Private_user">
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

            <div class="col-md-8 col-lg-10 Settings">

                <div class="Header_settings">
                    <h2 class="h2_settings">Настройки профиля</h2>
                </div>

                <div class="Main_settings">
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

                        <div class="ps_last data_user">
                            <p class="p_data_user">Подключите профль Google</p>
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

    .Settings {
        margin-top: 5px;
        padding: 0;
    }

    .Header_settings {
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

    .Main_settings {
        min-height: 100%;
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