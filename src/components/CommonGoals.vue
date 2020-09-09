<template>
  <div class="page">
    <select id="selectLvlGoals" class="search" v-model="selectLvlGoals">
      <option value selected disabled>По уровню цели</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <select id="selectActivity" class="search" v-model="selectActivity">
      <option value selected disabled>По активности</option>
      <option value="selectProccess">В процессе</option>
      <option value="selectPause">На паузе</option>
    </select>
    <div class="ps_button_goals">
      <button class="button_goals">Добавить</button>
    </div>
    <div class="goals companyGoals">
      <p>Цель компании</p>
      <div class="statistics">
        <p class="statItem">В процессе {{ onPause }}</p>
        <p class="statItem">На паузе {{ inProcess }}</p>
      </div>
    </div>
    <div class="goals otherGoals">
      <p>Цель отдела</p>
      <input type="range" min="1" max="100" v-model="percent" class="slider">
      <p>{{ percent }}%</p>
    </div>
    <div class="goals otherGoals">
      <p>Цель отдела</p>
      <input type="range" min="1" max="100" v-model="percent" class="slider">
      <p>{{ percent }}%</p>
    </div>
    <div class="goals otherGoals">
      <p>Цель отдела</p>
      <input type="range" min="1" max="100" v-model="percent" class="slider">
      <p>{{ percent }}%</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CommonGoals',
  data: () => ({
    percent: 22,
    onPause: 4,
    inProcess: 10,
    selectLvlGoals: '',
    selectActivity: ''
  }),
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
  background-color: white;
  padding: 40px;
  min-height: calc(100vh - 85px);
}

.button_goals {
  position: absolute;
  right: 40px;
  top: 40px;
  width: 151px;
  height: 31px;
  background-color: #86919A;
  color: white;
  border-radius: 10px;
}

.goals {
  padding: 10px 40px;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.companyGoals {
  background-color: #dee7ee;
  font-size: 24px;
}

.otherGoals {
  background-color: #B8C5D0;
  margin-left: 20px;
}

.statistics {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
}

.statItem {
  padding: 2px 10px;
  border: 1px solid black;
  border-radius: 8px;
  margin-right: 20px;
}

.search {
  padding: 2px 10px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 20px 20px 0;
  min-width: 200px;
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