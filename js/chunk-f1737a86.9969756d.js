(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1737a86"],{"6f6c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"authorization"},[a("div",{staticClass:"blueAuth"}),t._m(0),t._m(1),a("div",{staticClass:"contAuth"},[a("div",{staticClass:"authTitle"},[t._v("Вход")]),a("form",{on:{submit:function(s){return s.preventDefault(),t.onLog(s)}}},[a("label",{attrs:{for:"signinEmail"}},[t._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:this.$store.state.authHasError},attrs:{id:"signinEmail",type:"email",placeholder:"E-mail",required:"",minlength:"3",maxlength:"40"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),a("label",{attrs:{for:"signinPass"}},[t._v("Пароль")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{error:this.$store.state.authHasError},attrs:{id:"signinPass",type:"password",placeholder:"Пароль",required:"",minlength:"8",maxlength:"30"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),this.$store.state.authHasError?a("div",{staticClass:"errorMsg"},[t._v("Неверно введен email и/или пароль.")]):t._e(),a("div",{staticClass:"message"},[t._v("Еще не зарегистрированы? "),a("router-link",{attrs:{to:"/signup"}},[t._v("Создать аккаунт")])],1),a("button",[t._v("Вход")])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"imgAuth"},[e("img",{attrs:{alt:"Картинка для авторизации",src:a("bdc0")}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"authLogo"},[e("img",{attrs:{alt:"Логотип OKR",src:a("7c5b")}})])}],r={name:"Signin",data:function(){return{email:"",password:"",publicPath:"/CastoFront/"}},methods:{onLog:function(){var t=this.$store.state.account.email,s=this.$store.state.account.password;if(this.email===t&&this.password===s){var a=this.$store.state.account;this.$store.commit("authCorr",a),this.$router.push("/")}else this.$store.commit("authErr"),this.email="",this.password=""}}},o=r,n=a("2877"),l=Object(n["a"])(o,e,i,!1,null,null,null);s["default"]=l.exports},"7c5b":function(t,s,a){t.exports=a.p+"img/AuthLogo.c3d8c622.png"},bdc0:function(t,s,a){t.exports=a.p+"img/Auth.0587a1bf.png"}}]);
//# sourceMappingURL=chunk-f1737a86.9969756d.js.map