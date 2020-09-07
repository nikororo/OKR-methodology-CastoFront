<template>
    <div>
        <Head/>

        <div class="row no-gutter cont">
            <toolBar/>

            <div class="col-sm-10 col-md-4 col-lg-2 Private_user">
                <div class="bg_color">
                    <div class="ps_user">
                        <img src="../style/img/User.png" alt="User">
                        <p class="User_name">User</p>
                    </div>
                    <router-link class="settings_link" active-class="active_settings_one" to="/settingsUser">
                        Настройки
                        профиля
                    </router-link>
                    <router-link class="settings_link" active-class="active_settings_two" to="/settingsUser">
                        Оповещения
                    </router-link>
                </div>
            </div>

            <div class="col-md-5 col-lg-8 settings">

                <div class="header_targets">
                    <h2 class="h2_user_name">User</h2>
                </div>

                <div class="header_targets_link">
                    <router-link class="link_targets" active-class="active_link_targets_one" to="/PlanWeek">Планы на
                        неделю
                    </router-link>
                    <router-link class="link_targets" active-class="active_link_targets_two" to="/GoalsUser">Цели
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
                        <div class="status_tasks">
                            <h2 class="h2_status_tasks">Запланировано
                                <div class="circle_status_planner"></div>
                            </h2>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <input type="checkbox">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                        </div>
                        <div class="status_tasks">
                            <h2 class="h2_status_tasks">Готово
                                <div class="circle_status_ready"></div>
                            </h2>
                            <div class="task">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                            <div class="task">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
                            </div>
                        </div>
                        <div class="status_tasks">
                            <h2 class="h2_status_tasks">Возникшие проблемы
                                <div class="circle_status_problem"></div>
                            </h2>
                            <div class="task">
                                <span>Название задачи</span>
                                <a href="" class="link_task"><img class="tr" src="../style/img/Frame.png" alt=""> <p class="i_task"> <span>+</span>Cвязать задачу с целью</p></a>
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