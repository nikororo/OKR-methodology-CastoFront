<template>
    <div class="toolBar col-sm-2 col-md-2 col-lg-1">

        <router-link class="block_button" active-class="active" to="/private" exact>
            <a href="">
                <div>
                    <img src="../style/img/Home.png" alt="">
                    <p>Личный кабинет</p>
                </div>
            </a>
        </router-link>

        <a href="" class="block_button">
            <div>
                <img src="../style/img/Project.png" alt="">
                <p>Проект</p>
            </div>
        </a>


        <a href="" class="block_button">
            <div>
                <img src="../style/img/Group.png" alt="">
                <p>Команды</p>
            </div>
        </a>
    </div>
</template>

<style>
    .toolBar {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 88px);
        background: #DDDDDD;
        margin: 5px 0 0 0;
        padding: 0;

    }

    .block_button {
        margin-bottom: 5px;
        outline: none;
        background-color: #DDDDDD;
        border: none;
        text-decoration: none;
        text-align: center;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0 20px 0;
    }

    .block_button a {
        text-decoration: none;
        color: black;
    }

    .block_button:hover {
        background-color: white;
        text-decoration: none;
        color: black;
    }

    .active {
        background-color: white;
        text-decoration: none;
        color: black;
    }
</style>

<script>
    export default {
        data: () => ({
            links: [
                {title: 'Личный кабинет', url: '/private'},
                {title: 'Проект', url: ''},
                {title: 'Команды', url: ''}
            ]
        })
    }
</script>
