<template>
  <div class="addGoalModalCont">
    <div class="flexModalCont">
    <div class="addGoalModal">
      <form v-on:submit.prevent="deleteGoal">
        <div>
          Вы уверены, что хотите удалить выбранную цель?
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
  name: 'DeleteGoalModal',
  methods: {
    close() {
      this.$emit('close');
    },

    deleteGoal() {
      this.$emit('delete');
      this.$emit('close');
    }
  },
}
</script>

<style scoped>
.addGoalModalCont {
  background-color: rgba(0, 0, 0, 0.1);
}

.addGoalModal {
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
  height: auto;
  padding: 60px 40px 40px;
}

.addGoalModal footer {
  margin-top: 40px;
}
</style>
