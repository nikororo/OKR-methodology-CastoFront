<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>    
      <div class="col-sm-10 col-md-9 col-lg-11 command">

        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/command">Моя команда</router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/commandList">Список команд</router-link>
        </div>

        <h2 class="commandName">{{commName}}</h2>
        
        <div class="listOfEmployees">
          <button class="addBtnUserComm">Добавить в команду</button>
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

<style>

  .command {
    min-height: calc(100vh - 150px);
  }

  .commandName {
    background-color: #F4F4F4;
    margin-bottom: 1px;
    padding: 10px;
    text-align: center;
  }

  .listOfEmployees {
    min-height: calc(100vh - 225px);  
    background-color: #F4F4F4;
    text-align: right;
    padding-top: 30px;
  }

  .addBtnUserComm {
    margin: 0 50px 35px 0;
    outline: 0;
    border-radius: 58px;
    border: 2px solid #40B5C6;
    background-color: #40B5C6;
    padding: 0 20px;
    color: #fff;
    font-size: 18px;
    height: 42px;
  }

  .addBtnUserComm:hover {
      background-color: #fff;
      color: #40B5C6;
      border: 2px solid #40B5C6;
      transform: none;
  }

  .contUserComm {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
  }

  .userComm {
    display: flex;
    justify-content: space-between;
    width: 435px;
    padding-left: 15px;
  }
</style>