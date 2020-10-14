<template>
  <div>
    <Head/>
    <div class="row no-gutter">
      <toolBar/>    
      <div class="col-sm-10 col-md-10 col-lg-10 command">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/command" exact>Моя команда</router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/command/commandList">Список команд</router-link>
        </div>
        <div class="listOfEmployees">
          <button class="addBtnUserComm">Создать команду</button>
          <ol>
            <div class="contUserComm" v-for="(command, index) in this.$store.state.commands" v-bind:key="index">
              <li>
                <div class="userComm">
                  <p>{{command}}</p>
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