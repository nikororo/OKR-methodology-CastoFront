<template>
  <div class="addGoalModalCont">
    <div class="flexModalCont">
    <div class="addGoalModal">
      <form v-on:submit.prevent="deleteKr">
        <div>
          Вы уверены, что хотите удалить выбранный ключевой результат?
        </div>
        <footer>
          <button type="submit" class="button_pass">
            Удалить
          </button>
          <button type="button" class="button_pass" @click="close">
            Отмена
          </button>
        </footer>
      </form>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DeleteKeModal',
  methods: {
    close() {
      this.$emit('close');
    },

    deleteKr() {
      this.$emit('delete');
      this.$emit('close');
    }
  },
}
</script>

<style scoped>
.addGoalModal footer {
  margin-top: 40px;
}
</style>
