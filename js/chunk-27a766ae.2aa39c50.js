(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27a766ae"],{"234e":function(t,s,a){t.exports=a.p+"img/Project.a788993e.png"},2736:function(t,s,a){t.exports=a.p+"img/Settings.4eb5db93.png"},"2c62":function(t,s,a){},"4a50":function(t,s,a){"use strict";var e=a("af03"),i=a.n(e);i.a},"503c":function(t,s,a){"use strict";var e=a("2c62"),i=a.n(e);i.a},"77e5":function(t,s,a){},"7a0f":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("header",{staticClass:"header_okr"},[e("div",{staticClass:"soft_menu"},[e("router-link",{staticClass:"home_main",attrs:{href:"",to:"/"}},[e("img",{staticClass:"logo_okr icon_logo",attrs:{src:a("edd6"),alt:"Logo"}})])],1),e("div",{staticClass:"user_menu"},[e("img",{staticClass:"bell_okr icon_bell",attrs:{src:a("d68b"),alt:"Bell"}}),this.$store.state.user?e("p",{staticClass:"use_name"},[t._v(" "+t._s(this.$store.state.user.name)+" ")]):t._e(),e("img",{staticClass:"user_photo icon_user",attrs:{src:a("d648"),alt:"Photo"}}),e("div",{staticClass:"menu"},[t._m(0),e("div",{staticClass:"links_menu"},[e("div",{staticClass:"tre"}),e("div",{staticClass:"btnLogOut"},[e("router-link",{attrs:{to:"/settingsUser"}},[e("img",{attrs:{width:"25",height:"25",src:a("2736"),alt:""}}),e("span",[t._v("Настройки")])])],1),e("div",[e("button",{staticClass:"btnLogOut",on:{click:function(s){t.showLogOutModal=!0}}},[e("img",{attrs:{width:"25",height:"25",src:a("b4b8"),alt:"Log Out"}}),e("span",[t._v("Выход")])])])])]),t.showLogOutModal?e("LogOutModal",{on:{close:function(s){t.showLogOutModal=!1}}}):t._e()],1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"button_menu"},[e("img",{attrs:{src:a("e9f1"),alt:""}})])}],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"addGoalModalCont"},[a("div",{staticClass:"flexModalCont"},[a("div",{staticClass:"addGoalModal"},[a("button",{staticClass:"btnClose",on:{click:t.close}},[a("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M14.4361 13.0008L25.7023 1.73457C26.0989 1.33792 26.0989 0.694822 25.7023 0.298221C25.3056 -0.0983798 24.6625 -0.0984305 24.2659 0.298221L12.9997 11.5644L1.73359 0.298221C1.33694 -0.0984305 0.693845 -0.0984305 0.297244 0.298221C-0.0993563 0.694873 -0.099407 1.33797 0.297244 1.73457L11.5634 13.0007L0.297244 24.2669C-0.099407 24.6636 -0.099407 25.3067 0.297244 25.7033C0.495545 25.9016 0.755494 26.0007 1.01544 26.0007C1.27539 26.0007 1.53529 25.9016 1.73364 25.7033L12.9997 14.4371L24.2659 25.7033C24.4642 25.9016 24.7241 26.0007 24.9841 26.0007C25.244 26.0007 25.5039 25.9016 25.7023 25.7033C26.0989 25.3066 26.0989 24.6635 25.7023 24.2669L14.4361 13.0008Z",fill:"black"}})])]),t._m(0),a("footer",[a("button",{staticClass:"button_pass",on:{click:t.logOut}},[t._v("Да")]),a("button",{staticClass:"button_pass",on:{click:t.close}},[t._v("Отмена")])])])])])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"addGoalModalBody"},[a("div",[t._v("Вы уверены, что хотите выйти из аккаунта?")])])}],l={name:"AddGoalModal",methods:{close:function(){this.$emit("close")},logOut:function(){this.$store.commit("logOut"),this.close(),this.$router.push("/signin")}}},c=l,r=(a("503c"),a("2877")),u=Object(r["a"])(c,o,n,!1,null,"d69165ea",null),d=u.exports,_={name:"Head",components:{LogOutModal:d},data:function(){return{showLogOutModal:!1}}},v=_,p=(a("dd00"),Object(r["a"])(v,e,i,!1,null,"7639e88e",null));s["a"]=p.exports},8898:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Head"),a("div",{staticClass:"row no-gutter cont"},[a("toolBar"),a("div",{staticClass:"col-md-5 col-lg-10 settings"},[a("div",{staticClass:"header_targets_link"},[a("router-link",{staticClass:"link_targets",attrs:{"active-class":"active_link_targets",to:"/settingsUser",exact:""}},[t._v("Найстройки профиля ")])],1),a("div",{staticClass:"main_settings"},[a("div",{staticClass:"ps_settings"},[t._m(0),t._m(1),a("div",{staticClass:"data_user"},[a("p",{staticClass:"p_data_user"},[t._v("Сфера деятельности")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],staticClass:"input_user",attrs:{type:"text",id:"signupActivity",required:""},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.activity=s.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"",hidden:""}},[t._v("Сфера деятельности")]),a("option",{attrs:{value:"departmentHead"}},[t._v("Руководитель отдела")]),a("option",{attrs:{value:"manager"}},[t._v("Менеджер")]),a("option",{attrs:{selected:"",value:"developer"}},[t._v("Разработчик")]),a("option",{attrs:{value:"analyst"}},[t._v("Аналитик")]),a("option",{attrs:{value:"designer"}},[t._v("Дизайнер")]),a("option",{attrs:{selected:"",value:"tester"}},[t._v("Тестировщик")]),a("option",{attrs:{value:"other"}},[t._v("Другое")])])]),t._m(2),t._m(3),a("a",{staticClass:"button_pass",attrs:{href:""}},[t._v("Обновить пароль")]),t._m(4)])])])],1)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"data_user"},[a("p",{staticClass:"p_data_user"},[t._v("Фото")]),a("input",{staticClass:"input_file",attrs:{type:"file",id:"file",accept:"image/*"}}),a("label",{staticClass:"button_file",attrs:{for:"file"}},[a("span",[t._v("Фото")])]),a("span",{staticClass:"p_input_file"},[t._v("Выбрать фото")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"data_user"},[a("p",{staticClass:"p_data_user"},[t._v("Полное имя")]),a("input",{staticClass:"input_user",attrs:{type:"text",placeholder:"Полное имя"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"data_user"},[a("p",{staticClass:"p_data_user"},[t._v("Пароль")]),a("input",{staticClass:"input_user",attrs:{type:"password",placeholder:"Ваш пароль"}}),a("div",{staticClass:"promt"},[a("span",{staticClass:"promt_pass"},[t._v("Заполните в случае обновления пароля")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"data_user"},[a("p",{staticClass:"p_data_user"},[t._v("Новый пароль")]),a("input",{staticClass:"input_user",attrs:{type:"password",placeholder:"Новый пароль"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"save_settings"},[a("a",{staticClass:"button_save",attrs:{href:""}},[t._v("Сохранить изменения")]),a("a",{staticClass:"button_canceling",attrs:{href:""}},[t._v("Отмена")])])}],o=a("7a0f"),n=a("d546"),l={name:"settingsUser",components:{Head:o["a"],ToolBar:n["a"]},data:function(){return{activity:"",publicPath:"/CastoFront/"}},methods:{}},c=l,r=a("2877"),u=Object(r["a"])(c,e,i,!1,null,null,null);s["default"]=u.exports},"9df5":function(t,s,a){t.exports=a.p+"img/Home.7dd66e03.png"},af03:function(t,s,a){},b21a:function(t,s,a){t.exports=a.p+"img/Group.4601f773.png"},b4b8:function(t,s,a){t.exports=a.p+"img/Exit.2adcf165.png"},d546:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"toolBar col-sm-1 col-md-2 col-lg-2"},[e("router-link",{staticClass:"block_button",attrs:{"active-class":"active",to:"/profile"}},[e("div",{staticClass:"content_toolbar"},[e("div",{staticClass:"button_toolbar"},[e("img",{staticClass:"img_color",attrs:{width:"18",height:"18",src:a("9df5"),alt:""}})]),e("p",[t._v("Личный кабинет")])])]),e("router-link",{staticClass:"block_button",attrs:{"active-class":"active",to:"/goals"}},[e("div",{staticClass:"content_toolbar"},[e("div",{staticClass:"button_toolbar"},[e("img",{staticClass:"img_color",attrs:{width:"18",height:"18",src:a("234e"),alt:""}})]),e("p",[t._v("Цели")])])]),e("router-link",{staticClass:"block_button",attrs:{"active-class":"active",to:"/command"}},[e("div",{staticClass:"content_toolbar"},[e("div",{staticClass:"button_toolbar"},[e("img",{staticClass:"img_color",attrs:{width:"18",height:"18",src:a("b21a"),alt:""}})]),e("p",[t._v("Команды")])])])],1)},i=[],o={name:"ToolBar"},n=o,l=(a("4a50"),a("2877")),c=Object(l["a"])(n,e,i,!1,null,null,null);s["a"]=c.exports},d648:function(t,s,a){t.exports=a.p+"img/User.412e5ede.png"},d68b:function(t,s,a){t.exports=a.p+"img/Bell.38ec20ed.png"},dd00:function(t,s,a){"use strict";var e=a("77e5"),i=a.n(e);i.a},e9f1:function(t,s,a){t.exports=a.p+"img/Menu.271d2faf.png"},edd6:function(t,s,a){t.exports=a.p+"img/Logo.80c03b60.png"}}]);
//# sourceMappingURL=chunk-27a766ae.2aa39c50.js.map