(this["webpackJsonpflow_m-ui_react"]=this["webpackJsonpflow_m-ui_react"]||[]).push([[0],{15:function(t,e,n){t.exports={create_post:"styles_create_post__1YIT3",create_post_container:"styles_create_post_container__qWcKM",input:"styles_input__2P84y",button:"styles_button__1V1vB"}},18:function(t,e,n){t.exports={input:"styles_input__2XSAU",button:"styles_button__NI2aw",auth_container:"styles_auth_container__3nIHD",auth_wrap:"styles_auth_wrap__3FhLo"}},19:function(t,e,n){t.exports={post_header:"styles_post_header__YZ153",post_content:"styles_post_content__2ZuCv",post_img:"styles_post_img__3rgxe",post_text:"styles_post_text__4Y8bB"}},22:function(t,e,n){t.exports={header:"styles_header__2dQfB",header_item:"styles_header_item__23gs7",user_block:"styles_user_block__2GfqF"}},23:function(t,e,n){t.exports={comments:"styles_comments__1RnZq",comments_block:"styles_comments_block__3bVN1",comments_list:"styles_comments_list__Yt6Xe",comments_list_item:"styles_comments_list_item__1_9kp"}},26:function(t,e,n){t.exports={post:"styles_post__3BqCS",post_title:"styles_post_title__2MOY_",post_text:"styles_post_text__O8S-V"}},32:function(t,e,n){t.exports={post_page:"styles_post_page__Zm75e",post_page_item:"styles_post_page_item__3cysC"}},43:function(t,e,n){t.exports={container:"style_container__1ncd8"}},44:function(t,e,n){t.exports={input:"styles_input__3I9lN"}},45:function(t,e,n){t.exports={button:"styles_button__1M9-J"}},48:function(t,e,n){t.exports={textarea:"styles_textarea__U8r4W"}},51:function(t,e,n){t.exports=n(80)},79:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),o=n(4),u=n(3),l=n(17),i=n(43),p=n.n(i),m=function(t){var e=t.maxWidth,n=void 0===e?1200:e,a=t.children;return r.a.createElement("div",{className:p.a.container,style:{maxWidth:n}},a)},_=n(16),E=n.n(_),f=n(44),O=n.n(f),h=function(t){return r.a.createElement("input",{className:E()(O.a.input,Object(u.a)({},t.className,t.className)),value:t.value,onChange:t.onChange,type:t.type||"text",accept:t.accept||"",placeholder:t.placeholder})},S=n(45),d=n.n(S),b=function(t){return r.a.createElement("button",{className:E()(d.a.button,Object(u.a)({},t.className||"",t.className)),onClick:t.onClick,type:"text",disabled:t.disabled},t.children)},y=n(18),g=n.n(y),C=n(2),v="AUTH_SIGN_IN_START",j="AUTH_SIGN_IN_SUCCESS",T="AUTH_SIGN_IN_ERROR",N="CHECK_TOKEN_START",R="CHECK_TOKEN_SUCCESS",P="CHECK_TOKEN_ERROR",U=n(5),w=n.n(U),x=n(11),k=n(29),D=n.n(k),A="".concat("http://localhost:5000","/").concat("api"),I=localStorage.getItem("AUTH_TOKEN"),G={auth:{signIn:"".concat(A,"/auth/signin"),signUp:"".concat(A,"/auth/signup"),checkToken:"".concat(A,"/auth/checkToken")},user:{getUser:"".concat(A,"/user")},post:{getAll:"".concat(A,"/post/getAll"),getOne:"".concat(A,"/post/getOne"),getByUserID:"".concat(A,"/post/getById"),create:"".concat(A,"/post/create")},comment:{getAll:"".concat(A,"/comment/getByPostId"),create:"".concat(A,"/comment/create")}},H=function(t,e){return D.a.get(t,{headers:{authorization:e?I:null}})},M=function(t,e,n){return D.a.post(t,e,{headers:{authorization:n?I:null}})},Q=G,W=function(){var t=Object(x.a)(w.a.mark((function t(e){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.login,a=e.password,t.next=3,M(Q.auth.signIn,{login:n,password:a},!1);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L={UN_TOUCHED:"UN_TOUCHED",REQUESTING:"REQUESTING",SUCCESS:"SUCCESS",ERROR:"ERROR"},K=function(t){return t===L.REQUESTING||t===L.UN_TOUCHED},B=function(t){return t===L.REQUESTING},z=function(t){return t===L.SUCCESS},Y=function(t){return t===L.ERROR};function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var F=Object(C.b)((function(t){return{isAuth:t.auth.isAuth,authStatus:t.auth.authStatus}}),{authSignIn:function(t){var e=t.login,n=t.password;return function(t){t({type:v}),W({login:e,password:n}).then((function(e){var n;localStorage.setItem("AUTH_TOKEN",e.data.token),t((n=e.data,{type:j,data:n}))})).catch((function(e){localStorage.clear(),t({type:T,error:e})}))}}})((function(t){var e=t.isAuth,n=t.authStatus,c=t.authSignIn,s=Object(a.useState)({login:"",password:""}),i=Object(l.a)(s,2),p=i[0],_=i[1],E=function(t){return function(e){return _(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},p,Object(u.a)({},t,e.target.value)))}},f=!p.login||!p.password||B(n);return e?r.a.createElement(o.a,{to:"/"}):r.a.createElement(m,{maxWidth:1200},r.a.createElement("div",{className:g.a.auth_wrap},r.a.createElement("div",{className:g.a.auth_container},r.a.createElement(h,{value:p.login,onChange:E("login"),className:g.a.input}),r.a.createElement(h,{value:p.password,onChange:E("password"),className:g.a.input}),B(n)&&r.a.createElement("div",null,"Wait"),r.a.createElement(b,{disabled:f,className:g.a.button,onClick:function(){p.login&&p.password&&c(p)}},"Log in"))))})),Z=n(32),J=n.n(Z),V=n(26),X=n.n(V),$=n(21),tt=function(t){var e=t.data;return r.a.createElement("div",{className:X.a.post},r.a.createElement("h2",{className:X.a.post_title},e.title),r.a.createElement("img",{src:"https://im3.turbina.ru/photos.4/9/2/5/7/7/3177529/normal.photo/Fenomen-v-pustyne-Karak.jpg",alt:""}),r.a.createElement($.a,{to:"/posts/".concat(e.id),className:X.a.post_text},e.text))},et="GET_ALL_START",nt="GET_ALL_SUCCESS",at="GET_ALL_ERROR",rt="GET_ONE_START",ct="GET_ONE_SUCCESS",st="GET_ONE_ERROR",ot="CLEAR_POST",ut="CREATE_POST_START",lt="CREATE_POST_SUCCESS",it="CREATE_POST_ERROR",pt="CREATE_POST_CLEAR",mt="GET_COMMENTS_START",_t="GET_COMMENTS_SUCCESS",Et="GET_COMMENTS_ERROR",ft="CREATE_COMMENT_START",Ot="CREATE_COMMENT_SUCCESS",ht=function(){var t=Object(x.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(Q.post.getAll,!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),St=function(){var t=Object(x.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H("".concat(Q.post.getOne,"/").concat(e),!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dt=function(){var t=Object(x.a)(w.a.mark((function t(e){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.title,a=e.text,t.next=3,M(Q.post.create,{title:n,text:a},!0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),bt=function(){var t=Object(x.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H("".concat(Q.comment.getAll,"/").concat(e),!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),yt=function(){var t=Object(x.a)(w.a.mark((function t(e){var n,a,r,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.author,a=e.text,r=e.authorID,c=e.postID,t.next=3,M("".concat(Q.comment.create,"/").concat(c),{author:n,text:a,authorID:r},!0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gt=function(t){return function(e){e({type:mt}),bt(t).then((function(t){return e((n=t.data,{type:_t,data:n}));var n})).catch((function(t){return e({type:Et,error:t})}))}},Ct=n(22),vt=n.n(Ct),jt="GET_USER_START",Tt="GET_USER_SUCCESS",Nt="GET_USER_ERROR",Rt=function(){var t=Object(x.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(Q.user.getUser,!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Pt=Object(C.b)((function(t){return{userStatus:t.user.userStatus,user:t.user.user}}),{getUser:function(t){return function(e){e({type:jt}),Rt(t).then((function(t){return e((n=t.data,{type:Tt,data:n}));var n})).catch((function(t){return e({type:Nt,error:t})}))}}})((function(t){var e=t.getUser,n=t.userStatus,c=t.user;return Object(a.useEffect)(e,[]),r.a.createElement("div",{className:vt.a.header},r.a.createElement($.a,{className:vt.a.header_item,to:"/"},"Posts"),r.a.createElement($.a,{className:vt.a.header_item,to:"/create-post"},"Create Post"),z(n)&&r.a.createElement("div",{className:vt.a.user_block},"Hello ",r.a.createElement("span",null,c.name)))})),Ut=function(t){var e=t.children;return r.a.createElement("div",null,r.a.createElement(Pt,null),e)},wt=Object(C.b)((function(t){return{posts:t.post.posts,postsStatus:t.post.postsStatus}}),{getAll:function(){return function(t){t({type:et}),ht().then((function(e){return t((n=e.data,{type:nt,data:n}));var n})).catch((function(e){return t({type:at,error:e})}))}}})((function(t){var e=t.posts,n=t.postsStatus,c=t.getAll;return Object(a.useEffect)(c,[]),console.log(e,n),K(n)?r.a.createElement(m,null,"Wait"):Y(n)?r.a.createElement(m,null,"Error!"):r.a.createElement(m,null,r.a.createElement(Ut,null,r.a.createElement("div",{className:J.a.post_page},e.map((function(t){return r.a.createElement("div",{key:t.id,className:J.a.post_page_item},r.a.createElement(tt,{data:t}))})))))})),xt=n(19),kt=n.n(xt),Dt=n(23),At=n.n(Dt),It=Object(C.b)((function(t){return{getCommentsStatus:t.post.getCommentsStatus,postComments:t.post.selectedPost.comments,user:t.user.user,createCommentsStatus:t.post.createCommentsStatus}}),{getComments:gt,createComment:function(t){var e=t.author,n=t.text,a=t.authorID,r=t.postID;return function(t){t({type:ft}),yt({author:e,text:n,authorID:a,postID:r}).then((function(e){return t((n=e.data,{type:Ot,data:n}));var n})).catch((function(e){return t({type:"CREATE_COMMENT_ERROR",error:e})}))}},createCommentsClear:function(t){return{type:"CREATE_COMMENT_CLEAR"}}})((function(t){var e=t.getComments,n=t.postID,c=t.postComments,s=t.getCommentsStatus,o=t.user,u=t.createComment,i=(t.createCommentsStatus,t.createCommentsClear);Object(a.useEffect)((function(){return e(n),i}),[n]);var p=Object(a.useState)(""),m=Object(l.a)(p,2),_=m[0],E=m[1];return r.a.createElement("div",{className:At.a.comments},r.a.createElement("div",{className:At.a.comments_block},r.a.createElement(h,{placeholder:"Comment",value:_,onChange:function(t){return E(t.target.value)}}),r.a.createElement(b,{onClick:function(){u({author:o.name,text:_,authorID:o._id,postID:n}),E("")}},"Send comment")),r.a.createElement("div",{className:At.a.comments_list},z(s)&&c.map((function(t){return r.a.createElement("div",{className:At.a.comments_list_item},r.a.createElement("h3",null,t.author),r.a.createElement("p",null,t.text))})),z(s)&&!c.length&&r.a.createElement("div",null,"No comments")))})),Gt=Object(C.b)((function(t){return{post:t.post.selectedPost,postStatus:t.post.selectedPostStatus}}),{getOne:function(t){return function(e){e({type:rt}),St(t).then((function(t){return e((n=t.data,{type:ct,data:n}));var n})).catch((function(t){return e({type:st,error:t})}))}},clearPost:function(){return{type:ot}},getComments:gt})((function(t){var e=t.match,n=t.getOne,c=t.post,s=t.postStatus,o=t.clearPost;return Object(a.useEffect)((function(){return n(e.params.id),o}),[e.params.id]),K(s)?r.a.createElement(m,null,"Wait"):Y(s)?r.a.createElement(m,null,"Error!"):r.a.createElement(m,{maxWidth:1200},r.a.createElement(Ut,null,r.a.createElement("div",{className:kt.a.post},r.a.createElement("div",{className:kt.a.post_header},c.title),r.a.createElement("div",{className:kt.a.post_content},r.a.createElement("img",{className:kt.a.post_img,src:"https://prigorod.info/images/places/nizhegorodskaya-oblast/muzei-vystavochnye-kompleksy/nizhegorodskiy-gosudarstvennyy-hudozhestvennyy-muzey/3.jpg",alt:""}),r.a.createElement("p",{className:kt.a.post_text},c.text)),r.a.createElement(It,{comments:c.comments,postID:e.params.id}))))})),Ht=n(15),Mt=n.n(Ht),Qt=n(48),Wt=n.n(Qt),Lt=function(t){return r.a.createElement("input",{className:E()(Wt.a.textarea,Object(u.a)({},t.className,t.className)),value:t.value,onChange:t.onChange,placeholder:t.placeholder,type:"text"})};function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var Bt=Object(C.b)((function(t){return{createPostStatus:t.post.createPostStatus}}),{create:function(t){var e=t.title,n=t.text;return function(t){t({type:ut}),dt({title:e,text:n}).then((function(e){return t((n=e.data,{type:lt,data:n}));var n})).catch((function(e){return t({type:it,error:e})}))}},createPostClear:function(){return{type:pt}}})((function(t){var e=t.createPostStatus,n=t.create,c=t.createPostClear;Object(a.useEffect)((function(){return c}),[]);var s=Object(a.useState)({}),o=Object(l.a)(s,2),i=o[0],p=o[1],_=function(t){return function(e){p(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Kt(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,Object(u.a)({},t,e.target.value)))}},E=B(e)||!i.title||!i.text;return r.a.createElement(m,{maxWidth:1200},r.a.createElement(Ut,null,r.a.createElement("div",{className:Mt.a.create_post},r.a.createElement("div",{className:Mt.a.create_post_container},r.a.createElement("div",null,"Create post"),r.a.createElement(h,{placeholder:"title",value:i.title,onChange:_("title"),className:Mt.a.input}),r.a.createElement(Lt,{alue:i.text,onChange:_("text"),textAreaProps:{placeholder:"Text"},placeholder:"Text",className:Mt.a.input}),r.a.createElement(h,{onChange:function(t){t.preventDefault();var e=new FileReader,n=t.target.files[0];e.onloadend=function(){console.log(e),console.log(n)},e.readAsDataURL(n)},type:"file",className:Mt.a.input,accept:"image/x-png,image/gif,image/jpeg"}),B(e)?r.a.createElement("div",null,"Wait"):r.a.createElement(b,{disabled:E,onClick:function(){n(i)},type:"button",className:Mt.a.button},"Create post")))))})),zt=Object(C.b)((function(t,e){return{checkTokenStatus:t.auth.checkTokenStatus,isAuth:t.auth.isAuth,routeProps:e}}),{})((function(t){var e=t.checkTokenStatus,n=t.routeProps,a=t.isAuth;return K(e)?r.a.createElement(m,null,"Wait"):a||K(e)?a&&z(e)?r.a.createElement(o.b,n):r.a.createElement(m,null,"Wait"):r.a.createElement(o.a,{to:"/auth"})})),Yt=function(){return r.a.createElement(Ut,null,r.a.createElement("h1",null,"404"))},qt=Object(C.b)((function(){}),{checkToken:function(){return function(t){t({type:N}),M(Q.auth.checkToken,{},!0).then((function(e){return t((n=e.data,{type:R,data:n}));var n})).catch((function(e){localStorage.clear(),t({type:P,error:e})}))}}})((function(t){var e=t.checkToken;return Object(a.useEffect)(e,[]),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/auth",component:F}),r.a.createElement(zt,{exact:!0,path:"/",component:wt}),r.a.createElement(zt,{path:"/posts/:id",component:Gt}),r.a.createElement(zt,{path:"/create-post",component:Bt}),r.a.createElement(zt,{component:Yt}))})),Ft=(n(79),n(6)),Zt=n(14),Jt=n(49);function Vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Vt(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $t={isAuth:!1,authStatus:L.UN_TOUCHED,checkTokenStatus:L.UN_TOUCHED};function te(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t;switch((arguments.length>1?arguments[1]:void 0).type){case v:return Xt({},t,{authStatus:L.REQUESTING});case j:return Xt({},t,{authStatus:L.SUCCESS,isAuth:!0});case T:return Xt({},t,{isAuth:!1,authStatus:L.ERROR});case N:return Xt({},t,{checkTokenStatus:L.REQUESTING});case R:return Xt({},t,{checkTokenStatus:L.SUCCESS,isAuth:!0});case P:return Xt({},t,{isAuth:!1,checkTokenStatus:L.ERROR});default:return t}}var ee=n(50);function ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ae(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ne(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var re={posts:null,postsStatus:L.UN_TOUCHED,selectedPost:null,selectedPostStatus:L.UN_TOUCHED,createPostStatus:L.UN_TOUCHED,getCommentsStatus:L.UN_TOUCHED,createCommentsStatus:L.UN_TOUCHED};function ce(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case et:return ae({},t,{postsStatus:L.REQUESTING});case nt:return ae({},t,{postsStatus:L.SUCCESS,posts:e.data});case at:return ae({},t,{postsStatus:L.ERROR});case rt:return ae({},t,{selectedPostStatus:L.REQUESTING});case ct:return ae({},t,{selectedPostStatus:L.SUCCESS,selectedPost:e.data});case st:return ae({},t,{selectedPostStatus:L.ERROR});case ot:return ae({},t,{selectedPostStatus:L.UN_TOUCHED,getCommentsStatus:L.UN_TOUCHED,createCommentsStatus:L.UN_TOUCHED,selectedPost:null});case ut:return ae({},t,{createPostStatus:L.REQUESTING});case lt:return ae({},t,{createPostStatus:L.SUCCESS});case it:return ae({},t,{createPostStatus:L.ERROR});case pt:return ae({},t,{createPostStatus:L.UN_TOUCHED,selectedPost:null});case mt:return ae({},t,{getCommentsStatus:L.REQUESTING});case _t:return ae({},t,{getCommentsStatus:L.SUCCESS,selectedPost:ae({},t.selectedPost,{comments:e.data})});case Et:return ae({},t,{getCommentsStatus:L.ERROR});case ft:return ae({},t,{createCommentsStatus:L.REQUESTING});case Ot:return ae({},t,{createCommentsStatus:L.SUCCESS,selectedPost:ae({},t.selectedPost,{comments:[].concat(Object(ee.a)(t.selectedPost.comments),[e.data])})});default:return t}}function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function oe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?se(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ue={user:null,userStatus:L.UN_TOUCHED};function le(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case jt:return oe({},t,{userStatus:L.REQUESTING});case Tt:return oe({},t,{userStatus:L.SUCCESS,user:e.data});case Nt:return oe({},t,{userStatus:L.ERROR});default:return t}}var ie=function(){return Object(Zt.c)({auth:te,post:ce,user:le})};n.d(e,"history",(function(){return pe}));var pe=Object(Ft.a)(),me=Object(Zt.d)(ie(pe),Object(Zt.a)(Jt.a));s.a.render(r.a.createElement(C.a,{store:me},r.a.createElement(o.c,{history:Object(Ft.a)()},r.a.createElement(qt,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d6372f01.chunk.js.map