<template>
    <div>
        <header class="header_okr">
            <div class="soft_menu">
                <img src="../style/img/Logo.png" alt="Logo" class="logo_okr">
                <label>
                    <input type="search" class="search_okr">
                </label>
                <a href="" class="button_header">+</a>
            </div>

            <div class="user_menu">
                <img src="../style/img/Bell.png" alt="Bell" class="bell_okr">
                <p class="use_name">User</p>
                <img src="../style/img/User.png" alt="Photo" class="user_photo">
                <nav>
                    <ul class="menu_user">
                        <li><img src="../style/img/Menu.png" alt="Menu" class="submenu-link">
                            <ul class="submenu">
                                <li><a href="">Ссылка</a></li>
                                <li><a href="">Ссылка</a></li>
                                <li><a href="">Ссылка</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>


<style>
    button, input {
        outline: none;
    }

    .soft_menu {
        display: flex;
        justify-content: space-between;;
        align-items: center;
    }

    .header_okr {
        display: flex;
        height: 81px;
        background-color: white;
        padding: 0 20px 0 20px;
        justify-content: space-between;;
        align-items: center;
    }

    .logo_okr {
        margin-right: 18px;
    }

    .search_okr {
        width: 115px;
        height: 18px;
        margin-right: 18px;
        border: 2px solid #ADADAD;
        padding: 3px;
    }

    .button_header {
        width: 33px;
        height: 33px;
        border-radius: 25px;
        border: 1px solid #3EC6FF;
        color: #3EC6FF;
        font-size: 26px;
        background-color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button_header:hover {
        border: none;
        background-color: #3EC6FF;
        color: white;
        text-decoration: none;
    }

    .user_menu {

    }

    .bell_okr {
        margin-right: 18px;
    }

    .use_name {
        display: inline-block;
        width: auto;
        margin-right: 18px;
    }

    .user_photo {
        margin-right: 18px;
    }

    nav {
        display: inline-block;
    }

    nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .menu_user:after {
        display: table;
        margin-right: 18px;
    }

    .menu_user > li {
        position: relative;
    }

    .menu_user > li > a {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        color: #404040;
    }

    .menu_user li a:hover {
        color: black;
    }

    .submenu-link:after {

        color: inherit;
    }

    .submenu {
        background: #DDDDDD;
        position: absolute;
        top: 30px;
        right: 0;
        z-index: 5;
        width: 180px;
        transform: scaleY(0);
        transform-origin: 0 0;
        transition: .5s ease-in-out;
    }

    .submenu a {
        color: white;
        padding: 12px 15px;
        font-size: 13px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
    }

    .submenu li:last-child a {
        border-bottom: none;
    }

    .menu_user > li:hover .submenu {
        opacity: 1;
        transform: scaleY(1);
    }
</style>