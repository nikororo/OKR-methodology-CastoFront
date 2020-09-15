<template>
  <div>
    <Head/>

    <div class="row no-gutter cont">
      <toolBar/>

      <div class="page col-lg-11 col-md-7">

        <div class="ps_button_goals">
          <button class="button_goals" @click="showAddGoalModal = true">Добавить</button>
          <AddGoalModal v-if="showAddGoalModal" @close="showAddGoalModal = false"/>
        </div>
        <div class="block_goals">
          <div class="goals companyGoals">
            <p>Название командной цели</p>
            <input type="range" min="1" max="100" v-model="percent" class="slider">
            <p>{{ percent }}%</p>
          </div>

          <!--          <div class="goals otherGoals">-->
          <!--            <p>Название КР</p>-->
          <!--            <input type="range" min="1" max="100" v-model="percent" class="slider">-->
          <!--            <p>{{ percent }}%</p>-->
          <!--          </div>-->
          <!--          -->
          <!--          <div class="goals otherGoals">-->
          <!--            <p>Название КР</p>-->
          <!--            <input type="range" min="1" max="100" v-model="percent" class="slider">-->
          <!--            <p>{{ percent }}%</p>-->
          <!--          </div>-->

          <div>
            <div>
              <div></div>
            </div>
          </div>

          <div class="create_goals">
            <input type="text" placeholder="Добавить КР"/>
            <button>+</button>
          </div>
        </div>

        <div class="block_goals">
          <div class="goals companyGoals">
            <p>Название командной цели</p>
            <input type="range" min="1" max="100" v-model="percent" class="slider">
            <p>{{ percent }}%</p>
          </div>
          <div class="create_goals">
            <input type="text" placeholder="Добавить КР"/>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";
import AddGoalModal from "@/components/AddGoalModal";

export default {
  props: ['data'],
  name: 'goalsQuarter',
  components: {
    Head, ToolBar, AddGoalModal
  },
  data: () => ({
    percent: '',
    showAddGoalModal: false,
  })
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}

button {
  border: none;
}

.page {
  position: relative;
  background-color: #F4F4F4;
  padding: 40px 180px;
  min-height: calc(100vh - 85px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.button_goals {
  right: 40px;
  top: 40px;
  width: 151px;
  height: 31px;
  background-color: #86919A;
  color: white;
  border-radius: 10px;
  margin-bottom: 23px;
}

.block_goals {
  margin-bottom: 40px;
}

.goals {
  position: relative;
  padding: 10px 40px;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.companyGoals {
  background-color: #dee7ee;
  font-size: 24px;
}

.slider {
  -webkit-appearance: none;
  width: 40%;
  height: 7px;
  border-radius: 4px;
  background: #86919A;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #86919A;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #86919A;
  cursor: pointer;
}

p {
  margin-bottom: 0;
}

button {
  border: none;
}

.page {
  position: relative;
  background-color: white;
  padding: 40px 180px;
  min-height: calc(100vh - 85px);
}

.button_goals {
  right: 40px;
  top: 40px;
  width: 151px;
  height: 31px;
  background-color: #86919A;
  color: white;
  border-radius: 10px;
  margin-bottom: 23px;
}

.block_goals {
  margin-bottom: 40px;
}

.goals {
  position: relative;
  padding: 10px 40px;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.companyGoals {
  background-color: #dee7ee;
  font-size: 24px;
}

.slider {
  -webkit-appearance: none;
  width: 40%;
  height: 7px;
  border-radius: 4px;
  background: #86919A;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #86919A;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #86919A;
  cursor: pointer;
}

</style>
