<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>    
      <div class="col-sm-10 col-md-9 col-lg-10 command">

        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/command" exact>Моя команда</router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/command/commandList">Список команд</router-link>
        </div>
        
        <div class="listOfEmployees">
          <button class="addBtnUserComm">Создать команду</button>
          <ol>
            <div class="contUserComm" v-for="comm in this.commands" v-bind:key="comm.id">
              <li>
                <div class="userComm">
                  <p>{{comm.name}}</p>
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
  name: 'CommandList',

  components: {
    Head, ToolBar
  },

  data: () => ({
    commands: [
      {
        name: 'Тестировщики',
        id: 0
      },
      {
        name: 'Castoroides',
        id: 1
      },
      {
        name: 'Академия',
        id: 2
      },
      {
        name: 'Marketing',
        id: 3
      },
      {
        name: 'Человек Умелый',
        id: 4
      },
    ]
  }),

  created: function() {
    //запрашиваем данные об отделах с бэка и записываем в commands
  }
}
</script>

<style scoped>
.command {
  min-height: calc(100vh - 82px);
}

.listOfEmployees {
  min-height: calc(100vh - 166px);  
}
</style>