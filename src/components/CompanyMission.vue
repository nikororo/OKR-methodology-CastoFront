<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-sm-10 col-md-10 col-lg-10">
        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/goals/companyMission">
            Стратегические цели
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/goals" exact>
            Цели
          </router-link>
          <router-link v-if="role == 'leader'" class="link_targets" active-class="active_link_targets" to="/goals/goalsProtection">
            Защита целей
          </router-link>
        </div>
        <div class="pageMission">
          <div class="ps_button_mission">
            <button v-if="role == 'leader'" class="button_goals" @click="showAddMissionModal = true">Добавить</button>
            <AddMissionModal v-if="showAddMissionModal" @close="showAddMissionModal = false"/>
          </div>
          <div v-if="this.$store.state.missions.length !== 0">
            <div class="missionMain">
              <div v-for="mission in this.$store.state.missions" v-bind:key="mission.id" class="missionBlock">
                <div class="headMission">
                  <img class="imgChel" src="../style/img/Chel.png" alt="mission">
                  <p>{{ mission.name }}</p>
                  <div class="menu" v-if="role == 'leader'">
                    <a class="button_menu_mission">
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
                        <button @click="openDeleteMission(mission.id)" class="btnLogOut">
                          <img width="25" height="25" src="../style/img/Delete.png" alt="Delete">
                          <span>Удалить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="descriptionMission">
                  <div class="lineBlock">
                    <div class="line"></div>
                    <p>Описание</p>
                    <div class="line"></div>
                  </div>
                  <div class="textMission">
                    <p>{{ mission.descr }}</p>
                  </div>
                </div>
                <DeleteMissionModal v-if="showDeleteMissionModal" @close="showDeleteMissionModal = false" @delete="deleteMission"/>
              </div>
            </div>
          </div>
          <div v-else class="haveNoMission">
            <div>Здесь еще ничего нет, Вы не составили миссии компании</div>
            <img src="../style/img/CatNoGoals.png" alt="Котик">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import ToolBar from "@/components/ToolBar";
import AddMissionModal from './AddMissionModal';
import DeleteMissionModal from './DeleteMissionModal';

export default {
  name: 'CommonMission',
  components: {
    Head, ToolBar, AddMissionModal, DeleteMissionModal
  },
  data: () => ({
    showDeleteMissionModal: false,
    showAddMissionModal: false,
    idSelectedMission: '',
    role: ''
  }),
  mounted: function () {
    this.role = this.$store.state.user.role;
  },
  methods: {
    openDeleteMission(id){
      this.idSelectedMission = id;
      this.showDeleteMissionModal = true;
    },
    deleteMission() {
      this.$store.commit('deleteMission', this.idSelectedMission);
      this.idSelectedMission = '';
    }
  }
}
</script>

<style>
p {
  margin-bottom: 0;
}

h2 {
  margin: 0;
}

button {
  border: none;
}

.pageMission {
  background-color: #F4F4F4;
  min-height: calc(100vh - 166px);
  width: 100%;
  padding: 46px 47px;
}

.haveNoMission {
  text-align: center;
  font-size: 36px;
  color: #0C2528;
  opacity: 0.5;
  padding-top: 70px;
}

.haveNoMission img {
  max-width: 410px;
  padding-top: 30px;
}

.missionMain {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
}

.missionBlock {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 49%;
  background-color: #F4F4F4;
  box-shadow: 0px 0px 20px 2px rgba(12, 37, 40, 0.1);
  padding: 15px 35px 35px;
  margin-bottom: 25px;
}

.headMission {
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
}

.imgChel {
  width: 80px;
  height: 90px;
  margin-right: 35px;
}

.headMission p {
  font-size: 20px;
  line-height: 25px;
  color: #0C2528;
  width: 183px;
}

.descriptionMission {
  width: 100%;
  height: auto;
}

.lineBlock {
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;

}

.line {
  width: 40%;
  height: 1px;
  background-color: #D76101;
}

.lineBlock p {
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0 17px 0 17px;
}

.textMission {
  max-width: 529px;
}

.menu {
  position: absolute;
  right: -3px;
}

.ps_button_mission {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
</style>