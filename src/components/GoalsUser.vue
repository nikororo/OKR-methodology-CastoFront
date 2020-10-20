<template>
  <div>
    <Head/>
    <div class="row no-gutter cont">
      <toolBar/>
      <div class="col-sm-10 col-md-10 col-lg-10 settings">
        <div class="header_targets">
          <h2 class="h2_user_name">{{ this.$store.state.user.name }}</h2>
        </div>

        <div class="header_targets_link">
          <router-link class="link_targets" active-class="active_link_targets" to="/profile" exact>
            Планы на неделю
          </router-link>
          <router-link class="link_targets" active-class="active_link_targets" to="/profile/goals">
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
            </div>
            <UnsentGoals v-if="selectedStatus === 'unsent'" />
            <ApprovedGoals v-if="selectedStatus === 'approved'" />
            <ProposedGoals v-if="selectedStatus === 'proposed'" />
            <RejectedGoals v-if="selectedStatus === 'rejected'" />
          </div>
        </div>
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
.krs svg {
  position: absolute;
  right: 15px;
  top: -17px;
}

</style>