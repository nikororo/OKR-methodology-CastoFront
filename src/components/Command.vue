<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>    
      <div class="col-sm-10 col-md-10 col-lg-10 command">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/command" exact>Мой отдел</router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/command/commandList">Список отделов</router-link>
        </div>
        <h2 class="commandName">{{commName}}</h2>
        <div class="listOfEmployees">
          <button class="addBtnUserComm">Добавить в отдел</button>
          <ol>
            <div class="contUserComm" v-for="user in this.usersComm" v-bind:key="user.id">
              <li>
                <div class="userComm">
                  <p>{{user.name}}</p>
                  <p>{{user.activity}}</p>
                </div>
              </li>
            </div>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Head from './Head'
import ToolBar from './ToolBar'

export default {
  name: 'Command',

  components: {
    Head, ToolBar
  },

  data: () => ({
    commName: 'Castoroides',
    usersComm: [
      {
        name: 'Литвинова Наталья Игоревна',
        activity: 'Дизайнер',
        id: 0
      },
      {
        name: 'Черкасов Данил Владимирович',
        activity: 'Менеджер',
        id: 1
      },
      {
        name: 'Печуркина Екатерина Андреевна',
        activity: 'Фронт-енд',
        id: 2
      },
      {
        name: 'Чеснокова Ксения Андреевна',
        activity: 'Тестировщик',
        id: 3
      },
      {
        name: 'Венберг Алексей Алексеевич',
        activity: 'Бэк-енд',
        id: 4
      },
      {
        name: 'Бруев Максим Олегович',
        activity: 'Фронт-енд',
        id: 5
      },
      {
        name: 'Титова Арина Радиевна',
        activity: 'Аналитик',
        id: 6
      }
    ]
  }),

  created: function() {
    //запрашиваем данные об отделе с бэка и записываем в usersComm
  }
}
</script>