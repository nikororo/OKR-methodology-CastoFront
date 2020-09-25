<template>
  <div class="toolBar col-sm-1 col-md-2 col-lg-2">
    <router-link class="block_button" active-class="active" to="/settingsUser">
      <div class="content_toolbar">
        <div class="button_toolbar">
          <img class="img_color" width="18" height="18" src="../style/img/Home.png" alt="">
        </div>
        <p>Личный кабинет</p>
      </div>
    </router-link>
    <router-link class="block_button" active-class="active" to="/goals">
      <div class="content_toolbar">
        <div class="button_toolbar">
          <img class="img_color" width="18" height="18" src="../style/img/Project.png" alt="">
        </div>
        <p>Цели</p>
      </div>
    </router-link>
    <router-link class="block_button" active-class="active" to="/command">
      <div class="content_toolbar">
        <div class="button_toolbar">
          <img class="img_color" width="18" height="18" src="../style/img/Group.png" alt="">
        </div>
        <p>Команды</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
   name: 'ToolBar'
}
</script>

<style>
  .row {
    margin: 0;
    padding: 0;
  }
</style>