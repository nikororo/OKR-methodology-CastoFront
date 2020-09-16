<template>
  <div>
    <Head/>

    <div class="row no-gutter cont">
      <toolBar/>

      <div class="col-lg-11 col-md-7">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals">
            Дерево целей
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/GoalsQuarter">
            Цели на квартал
          </router-link>
        </div>
        <div class="page">
          <div>
            <button class="button_goals" @click="showAddGoalModal = true">Добавить</button>
            <AddGoalModal v-if="showAddGoalModal" @close="showAddGoalModal = false"/>
          </div>
          <div class="block_goals">
            <div class="goals companyGoals">
              <p class="nameGoals">Название командной цели</p>
              <input type="range" min="1" max="100" v-model="percent" class="slider">
              <p class="percentGoals">{{ percent }}%</p>
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
              <p class="nameGoals">Название командной цели</p>
              <input type="range" min="1" max="100" v-model="percent" class="slider">
              <p class="percentGoals">{{ percent }}%</p>
            </div>
            <div class="create_goals">
              <input type="text" placeholder="Добавить КР"/>
              <button>+</button>
            </div>
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
</style>
