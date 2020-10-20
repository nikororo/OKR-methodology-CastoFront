<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-sm-10 col-md-10 col-lg-10 settings">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser" exact>Найстройки
            профиля
          </router-link>
          <!-- <router-link class="link_targets" active-class="active_link_targets" to="/settingsUser/alertsUser">Оповещения
          </router-link> -->
        </div>
        <div class="main_settings">
          <div class="ps_settings">
            <div class="data_user">
              <p class="p_data_user">Полное имя</p>
              <input class="input_user" type="text" placeholder="Полное имя" minlength="3" maxlength="80">
            </div>
            <div class="data_user">
              <p class="p_data_user">Сфера деятельности</p>
              <select class="input_user" type="text" id="signupActivity" v-model="activity" required>
                <option value disabled selected hidden>Сфера деятельности</option>
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
              <input class="input_user" type="password" placeholder="Ваш пароль" minlength="8" maxlength="30">
              <div class="promt">
                <span class="promt_pass">Заполните в случае обновления пароля</span>
              </div>
            </div>
            <div class="data_user">
              <p class="p_data_user">Новый пароль</p>
              <input class="input_user" type="password" placeholder="Новый пароль" minlength="8" maxlength="30">
            </div>
            <a class="button_pass">Обновить пароль</a>
            <div class="save_settings">
              <a class="button_save">Сохранить изменения</a>
              <a class="button_pass_add_goal">Отмена</a>
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
  }),

  methods: {}
}
</script>

<style scoped>
.button_pass_add_goal {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: transparent;
  border: 1px solid #40B5C6;
  color: #0C2528;
  height: 40px;
  width: 110px;
  text-decoration: none;
  margin-left: 15px;
  font-size: 16px;
}

.button_pass_add_goal:hover {
  border: 1px solid #0C2528;
  color: #0C2528;
}
</style>