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
                    <router-link class="link_targets" active-class="active_link_targets" to="/profile" exact="">Планы на
                        неделю
                    </router-link>
                    <router-link v-if="this.$store.state.user.role == 'manager'" class="link_targets" active-class="active_link_targets" to="/profile/goals">Цели
                    </router-link>
                </div>
                <div class="main_plan_week">
                    <div class="scale_bg">
                        <div class="scale">
                            <div class="scale_first">
                                2
                            </div>
                            <div class="scale_middle">
                                4
                            </div>
                            <div class="scale_last">
                                1
                            </div>
                        </div>
                    </div>
                    <div class="tasks">
                        <div>
                            <h2 class="h2_status_tasks">Запланировано
                                <div class="circle_status_planner"></div>
                            </h2>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                        </div>
                        <div>
                            <h2 class="h2_status_tasks">Готово
                                <div class="circle_status_ready"></div>
                            </h2>
                            <div class="task">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                        </div>
                        <div>
                            <h2 class="h2_status_tasks">Возникшие проблемы
                                <div class="circle_status_problem"></div>
                            </h2>
                            <div class="task">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt="">
                                    <p class="i_task"><span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Head from './Head'
    import ToolBar from './ToolBar'

    export default {
        name: 'Home',
        components: {
            Head, ToolBar
        }
    }
</script>

<style scoped>
.tasks {
    padding-top: 40px;
}
</style>