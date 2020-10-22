<template>
  <div class="addGoalModalCont">
    <div class="flexModalCont">
    <div class="addGoalModal">
      <form v-on:submit.prevent="reject">
        <header>
          <h1>{{nameGoal}}</h1>
          <button class="btnClose" @click="close">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M14.4361 13.0008L25.7023 1.73457C26.0989 1.33792 26.0989 0.694822 25.7023 0.298221C25.3056 -0.0983798 24.6625 -0.0984305 24.2659 0.298221L12.9997 11.5644L1.73359 0.298221C1.33694 -0.0984305 0.693845 -0.0984305 0.297244 0.298221C-0.0993563 0.694873 -0.099407 1.33797 0.297244 1.73457L11.5634 13.0007L0.297244 24.2669C-0.099407 24.6636 -0.099407 25.3067 0.297244 25.7033C0.495545 25.9016 0.755494 26.0007 1.01544 26.0007C1.27539 26.0007 1.53529 25.9016 1.73364 25.7033L12.9997 14.4371L24.2659 25.7033C24.4642 25.9016 24.7241 26.0007 24.9841 26.0007C25.244 26.0007 25.5039 25.9016 25.7023 25.7033C26.0989 25.3066 26.0989 24.6635 25.7023 24.2669L14.4361 13.0008Z"
                  fill="black"/>
            </svg>
          </button>
        </header>
        <hr>
        <div class="addRejectComment">
          <label for="addRejectComment">Комментарий:</label>
          <textarea v-model="comment" id="addRejectComment" class="input_user" type="text" required
                    placeholder="Цель отклонена, так как..." minlength="5" maxlength="500"></textarea>
        </div>
        <footer>
          <button type="submit" class="button_pass">
            Отклонить
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
  name: 'RejectGoalModal',
  props: ['nameGoal', 'idGoal'],
  data: () => ({
    comment: '',
  }),

  methods: {
    close() {
      this.$emit('close');
    },

    async reject() {
      let payload = {
        idGoal: this.idGoal,
        rejectionComments: this.comment
      }
      await this.$store.dispatch('rejectGoal',  payload);
      this.$emit('close');
    }
  },
}
</script>

<style scoped>

.addGoalModal {
  padding: 0;
  padding-bottom: 50px;
}

.addGoalModal footer {
  margin-top: 30px;
}

h1 {
  margin-bottom: 20px;
  font-size: 35px;
  color: #535353;
  font-weight: 400;
}

.addRejectComment {
  display: flex;
  margin: 30px 80px;
}

label {
  margin: 10px 20px 0 0;
}

#addRejectComment {
  width: 520px;
  height: 140px;
}
</style>
