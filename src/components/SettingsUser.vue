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
          <router-link class="settings_link" active-class="active_settings_two" to="">
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
              <input type="file" id="file" class="input_file">
              <label for="file" class="button_file">
                <span>Фото</span>
              </label>
              <span class="p_input_file">Выберете фото</span>
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
              <div class="promt">
                <span class="promt_pass">Заполните в случае обновления пароля</span>
              </div>
            </div>

            <div class="data_user">
              <p class="p_data_user">Новый пароль</p>
              <input class="input_user" type="password" placeholder="Новый пароль">
            </div>

            <a href="" class="button_pass">Обновить пароль</a>
          </div>
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