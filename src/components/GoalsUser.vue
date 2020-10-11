<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-md-5 col-lg-10 settings">
        <div class="header_targets">
          <h2 class="h2_user_name">{{ this.$store.state.user.name }}</h2>
        </div>

        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/planWeek" exact>
            Планы на неделю
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/planWeek/goalsUser">
            Цели
          </router-link>
        </div>

        <div class="tasks">
          <div>
            <div class="goalsDepHeadHeader">
              <select v-model="selectedStatus" class="selectStatus">
                <option value="unsent" selected>Неотправленные цели</option>
                <option value="proposed">Предложенные цели</option>
                <option value="approved">Одобренные цели</option>
                <option value="rejected">Неодобренные цели</option>
              </select>
              <button v-if="selectedStatus === 'unsent'" class="button_goals" @click="showAddGoalModal = true">Добавить</button>
              <AddGoalModal v-if="showAddGoalModal" @close="showAddGoalModal = false"/>
            </div>
            <UnsentGoals v-if="selectedStatus === 'unsent'" />
            <ApprovedGoals v-if="selectedStatus === 'approved'" />
            <ProposedGoals v-if="selectedStatus === 'proposed'" />
            <RejectedGoals v-if="selectedStatus === 'rejected'" />
          </div>
        </div>
        <!-- <div class="tasks">
          <div>
            <div class="goalsDepHeadHeader">
              <h2>Неотправленные цели
                <div class="circle_status_planner"></div>
              </h2>
              <button class="button_goals" @click="showAddGoalModal = true">Добавить</button>
              <AddGoalModal v-if="showAddGoalModal" @close="showAddGoalModal = false"/>
            </div>
            <div>
              <div v-for="goal in unsentGoals" v-bind:key="goal.id">
                <div class="contGoal">
                  <div class="companyGoals">
                    <button class="btnShowKR" @click="displayKr(goal.id)">
                      <p class="nameGoals">{{goal.name}}</p>
                    </button>
                    <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                    <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>

                    <div class="menu">
                      <a class="button_menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#aad7de">
                              <path
                                  d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <div class="links_menu">
                        <div class="tre"></div>
                        <div>
                          <button @click="sendGoal(goal.id)" class="btnLogOut">
                            <img width="25" height="25" src="../style/img/Copy.png" alt="Send">
                            <span>Отправить</span>
                          </button>
                        </div>
                        <div>
                          <button @click="openEditGoal(goal.id)" class="btnLogOut">
                            <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                            <span>Редактировать</span>
                          </button>
                        </div>
                        <div>
                          <button class="btnLogOut">
                            <img width="25" height="25" src="../style/img/Expand.png" alt="Expand">
                            <span>Подробнее</span>
                          </button>
                        </div>
                        <div>
                          <button @click="openDeleteGoal(goal.id)" class="btnLogOut">
                            <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                            <span>Удалить</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="contKr" v-if="goal.showKr">
                    <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                      <label for="newKr"> {{ kr.title }}</label>
                      <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id)" v-model="kr.percent" class="slider">
                      <p class="percentGoals">{{ kr.percent }}%</p>
                      <div class="menu">
                        <a class="button_menu">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                              viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                              stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                              font-family="none" font-weight="none" font-size="none" text-anchor="none"
                              style="mix-blend-mode: normal">
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g fill="#aad7de">
                                <path
                                    d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                        <div class="links_menu">
                          <div class="tre"></div>
                          <div>
                            <button @click="openEditKr(goal.id, kr.id)" class="btnLogOut">
                              <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                              <span>Редактировать</span>
                            </button>
                          </div>
                          <div>
                            <button class="btnLogOut" @click="openDeleteKr(goal.id, kr.id)">
                              <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                              <span>Удалить</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form v-on:submit="addKr(goal.id, goal.remainderWeight, goal.newKr.weight, $event)" class="createKR">
                        <div class="flexModalCont"> <div class="nameCreateKR">
                          <button type="submit">
                            <img src="../style/img/Plus.png" alt="Add KR">
                          </button>
                          <input type="text" placeholder="Добавить КР" required v-model.trim="goal.newKr.title" minlength="5" maxlength="100">
                        </div>
                        <div class="promptWeight" v-bind:class="{errorWeigth}">Осталось: {{goal.remainderWeight}}</div>
                        <div class="meaning">
                          <label for="createKrPercent">Вес</label>
                          <input v-bind:class="{errorWeigth}" id="createKrPercent" class="input_percent" type="number" min="1" max="100" placeholder="1" v-model="goal.newKr.weight" required>
                          <span>%</span>
                        </div>
                      </div>
                      <div class="flexModalCont">
                        <label for="createKrExecutor">Ответственный</label>
                        <select v-model="goal.newKr.executor" id="createKrExecutor" class="input_percent">
                          <option value disabled selected hidden>Ответственный</option>
                          <option v-for="(men, index) in people" v-bind:key="index">
                            {{men}}
                          </option>
                        </select>
                        <label for="createKrFile">Прикрепить документ <img class="icon_user" src="../style/img/AddFile.png" alt="add"></label>
                        <input type="file" id="createKrFile" class="fileKr" />
                      </div>
                    </form>
                  </div>
                
                </div>
              </div>
              <EditGoalModal v-if="showEditGoalModal" v-bind:idGoal="idSelectedGoal" @close="showEditGoalModal = false"/>
              <DeleteGoalModal v-if="showDeleteGoalModal" @close="showDeleteGoalModal = false" @delete="deleteGoal"/>
              <EditKrModal v-if="showEditKrModal" v-bind:idGoal="idSelectedGoal" v-bind:idKr="idSelectedKr" @close="showEditKrModal = false"/>
              <DeleteKrModal v-if="showDeleteKrModal" @close="showDeleteKrModal = false" @delete="deleteKr"/>
            </div>
          </div>

          <div>
            <div class="goalsDepHeadHeader">
              <h2>Предложенные цели
                <div class="circle_status_planner"></div>
              </h2>
            </div>
            <div>
              <div v-for="goal in proposedGoals" v-bind:key="goal.id">
                <div class="contGoal">
                  <div class="companyGoals">
                    <button class="btnShowKR" @click="displayKr(goal.id)">
                      <p class="nameGoals">{{goal.name}}</p>
                    </button>
                    <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                    <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>
                  </div>
                  
                  <div class="contKr" v-if="goal.showKr">
                    <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                      <label for="newKr"> {{ kr.title }}</label>
                      <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id)" v-model="kr.percent" class="slider">
                      <p class="percentGoals">{{ kr.percent }}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="goalsDepHeadHeader">
              <h2>Одобренные цели
                <div class="circle_status_planner"></div>
              </h2>
            </div>
            <div>
              <div v-for="goal in approvedGoals" v-bind:key="goal.id">
                <div class="contGoal">
                  <div class="companyGoals">
                    <button class="btnShowKR" @click="displayKr(goal.id)">
                      <p class="nameGoals">{{goal.name}}</p>
                    </button>
                    <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                    <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>

                    <div class="menu">
                      <a class="button_menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#aad7de">
                              <path
                                  d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <div class="links_menu">
                        <div class="tre"></div>
                        <div>
                          <button @click="openEditGoal(goal.id)" class="btnLogOut">
                            <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                            <span>Редактировать</span>
                          </button>
                        </div>
                        <div>
                          <button class="btnLogOut">
                            <img width="25" height="25" src="../style/img/Expand.png" alt="Expand">
                            <span>Подробнее</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="contKr" v-if="goal.showKr">
                    <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                      <label for="newKr"> {{ kr.title }}</label>
                      <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id)" v-model="kr.percent" class="slider">
                      <p class="percentGoals">{{ kr.percent }}%</p>
                      <div class="menu">
                        <a class="button_menu">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35"
                              viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                              stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                              font-family="none" font-weight="none" font-size="none" text-anchor="none"
                              style="mix-blend-mode: normal">
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g fill="#aad7de">
                                <path
                                    d="M86,21.5c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,71.66667c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86,121.83333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                        <div class="links_menu">
                          <div class="tre"></div>
                          <div>
                            <button @click="openEditKr(goal.id, kr.id)" class="btnLogOut">
                              <img width="25" height="25" src="../style/img/Pen.png" alt="Pen">
                              <span>Редактировать</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form v-on:submit="addKr(goal.id, goal.remainderWeight, goal.newKr.weight, $event)" class="createKR">
                        <div class="flexModalCont"> <div class="nameCreateKR">
                          <button type="submit">
                            <img src="../style/img/Plus.png" alt="Add KR">
                          </button>
                          <input type="text" placeholder="Добавить КР" required v-model.trim="goal.newKr.title" minlength="5" maxlength="100">
                        </div>
                        <div class="promptWeight" v-bind:class="{errorWeigth}">Осталось: {{goal.remainderWeight}}</div>
                        <div class="meaning">
                          <label for="createKrPercent">Вес</label>
                          <input v-bind:class="{errorWeigth}" id="createKrPercent" class="input_percent" type="number" min="1" max="100" placeholder="1" v-model="goal.newKr.weight" required>
                          <span>%</span>
                        </div>
                      </div>
                      <div class="flexModalCont">
                        <label for="createKrExecutor">Ответственный</label>
                        <select v-model="goal.newKr.executor" id="createKrExecutor" class="input_percent">
                          <option value disabled selected hidden>Ответственный</option>
                          <option v-for="(men, index) in people" v-bind:key="index">
                            {{men}}
                          </option>
                        </select>
                        <label for="createKrFile">Прикрепить документ <img class="icon_user" src="../style/img/AddFile.png" alt="add"></label>
                        <input type="file" id="createKrFile" class="fileKr" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div class="goalsDepHeadHeader">
              <h2>Не одобренные цели
                <div class="circle_status_planner"></div>
              </h2>
            </div>
            <div>
              <div v-for="goal in rejectedGoals" v-bind:key="goal.id">
                <div class="contGoal">
                  <div class="companyGoals">
                    <button class="btnShowKR" @click="displayKr(goal.id)">
                      <p class="nameGoals">{{goal.name}}</p>
                    </button>
                    <input type="range" min="0" max="100" class="sliderGoal" v-model="goal.percentOfCompletion" disabled>
                    <p class="percentGoals">{{ goal.percentOfCompletion }}%</p>
                  </div>
                  
                  <div class="contKr" v-if="goal.showKr">
                    <div class="krs" v-for="kr in goal.krs" :key="kr.id">
                      <label for="newKr"> {{ kr.title }}</label>
                      <input id="newKr" type="range" min="0" max="100" @change="sum(goal.id)" v-model="kr.percent" class="slider">
                      <p class="percentGoals">{{ kr.percent }}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div> 
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";
import UnsentGoals from "@/components/differentGoalsUser/UnsentGoals";
import ApprovedGoals from "@/components/differentGoalsUser/ApprovedGoals";
import ProposedGoals from "@/components/differentGoalsUser/ProposedGoals";
import RejectedGoals from "@/components/differentGoalsUser/RejectedGoals";

export default {
  name: 'CommonGoals',
  components: {
    Head, 
    ToolBar,
    UnsentGoals,
    ApprovedGoals,
    ProposedGoals,
    RejectedGoals
  },

  data: () => ({
    showAddGoalModal: false,
    selectedStatus: 'unsent',
  }),
}
</script>


<style scoped>
p {
  margin-bottom: 0;
}

.goalsDepHeadHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 20px;
  height: 37px;
}

button {
  border: none;
}

.selectStatus {
  background-color: #f4f4f4;
  border: solid 1px #43CBD7;
  width: 250px;
  padding: 2px 10px;
  border-radius: 10px;
  margin-right: 10px;
}
</style>