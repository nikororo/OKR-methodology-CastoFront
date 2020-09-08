<template>
  <div class="toolBar col-sm-2 col-md-3 col-lg-2">

    <router-link class="block_button" active-class="active" to="/private">
      <div class="content_toolbar">
        <div class="button_toolbar">
          <img width="18" height="18" src="../style/img/Home.png" alt="">
        </div>
        <p>Личный кабинет</p>
      </div>
    </router-link>

    <router-link class="block_button" active-class="" to="">
      <div class="content_toolbar">
        <div class="button_toolbar">
          <img width="18" height="18" src="../style/img/Project.png" alt="">
        </div>
        <p>Проект</p>
      </div>
    </router-link>


    <router-link class="block_button" active-class="" to="">
      <div class="content_toolbar">
        <div class="button_toolbar">
          <img width="18" height="18" src="../style/img/Group.png" alt="">
        </div>
        <p>Команды</p>
      </div>
    </router-link>

  </div>
</template>
<style>
.row {
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  data: () => ({
    links: [
      {title: 'Личный кабинет', url: '/private'},
      {title: 'Проект', url: ''},
      {title: 'Команды', url: ''}
    ]
  })
}
</script>
