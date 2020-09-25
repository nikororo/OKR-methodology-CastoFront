<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-md-5 col-lg-10 settings">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser" exact>Найстройки
            профиля
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser/alertsUser">Оповещения
          </router-link>
        </div>
        <div class="main_settings">
          <div class="ps_settings">
            <div class="data_user">
              <p class="p_data_user">Фото</p>
              <input type="file" id="file" class="input_file" accept="image/*">
              <label for="file" class="button_file">
                <span>Фото</span>
              </label>
              <span class="p_input_file">Выбрать фото</span>
            </div>
            <div class="data_user">
              <p class="p_data_user">Полное имя</p>
              <input class="input_user" type="text" placeholder="Полное имя">
            </div>
            <div class="data_user">
              <p class="p_data_user">Сфера деятельности</p>
              <select class="input_user" type="text" id="signupActivity" v-model="activity" required>
                <option value disabled selected>Сфера деятельности</option>
                <option value="departmentHead">Руководитель отдела</option>
                <option value="manager">Менеджер</option>
                <option selected value="developer">Разработчик</option>
                <option value="analyst">Аналитик</option>
                <option value="designer">Дизайнер</option>
                <option selected value="tester">Тестировщик</option>
                <option value="other">Другое</option>
              </select>
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
            <div class="save_settings">
              <a href="" class="button_save">Сохранить изменения</a>
              <a href="" class="button_canceling">Отмена</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";

export default {
  name: 'settingsUser',
  components: {
    Head, ToolBar
  },
  data: () => ({
    activity: '',
    publicPath: process.env.BASE_URL,
  }),

  methods: {}
}
</script>