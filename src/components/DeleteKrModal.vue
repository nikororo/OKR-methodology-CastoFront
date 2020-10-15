<template>
  <div class="addGoalModalCont">
    <div class="flexModalCont">
    <div class="addGoalModal">
      <form v-on:submit.prevent="deleteKr">
        <div>
          Вы уверены, что хотите удалить выбранный ключевой результат?
        </div>
        <footer>
          <button type="submit" class="button_pass_kr">
            Удалить
          </button>
          <button type="button" class="button_pass_kr" @click="close">
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
.button_pass_kr {
border: none;
  background: #40B5C6;
  color: white;
  height: 40px;
  width: 177px;
  text-decoration: none;
  text-align: center;
  padding: 10px 22px;
  border-radius: 25px;
  margin-left: 65px;
  font-size: 16px;
}

.button_pass_kr:last-child {
  border: 1px solid #40B5C6;
  background-color: #F4F4F4;
  color: #0C2528;
  margin-left: 50px;
}
.button_pass_kr:first-child:hover {
  text-decoration: none;
  background: #F4F4F4;
  border: 1px solid #40B5C6;
  color: #40B5C6;
  transform: none;
}
.button_pass_kr:last-child:hover {
  border: 1px solid #0C2528;
}
</style>
