(this["webpackJsonpflow_m-ui_react"]=this["webpackJsonpflow_m-ui_react"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"styles_input__2XSAU",button:"styles_button__NI2aw",auth_container:"styles_auth_container__3nIHD",auth_wrap:"styles_auth_wrap__3FhLo"}},18:function(t,e,n){t.exports={create_post:"styles_create_post__1YIT3",create_post_container:"styles_create_post_container__qWcKM",input:"styles_input__2P84y",button:"styles_button__1V1vB"}},21:function(t,e,n){t.exports={header:"styles_header__2dQfB",header_item:"styles_header_item__23gs7",user_block:"styles_user_block__2GfqF"}},22:function(t,e,n){t.exports={post_header:"styles_post_header__YZ153",post_content:"styles_post_content__2ZuCv",post_img:"styles_post_img__3rgxe",post_text:"styles_post_text__4Y8bB"}},23:function(t,e,n){t.exports={comments:"styles_comments__1RnZq",comments_block:"styles_comments_block__3bVN1",comments_list:"styles_comments_list__Yt6Xe",comments_list_item:"styles_comments_list_item__1_9kp"}},26:function(t,e,n){t.exports={post:"styles_post__3BqCS",post_title:"styles_post_title__2MOY_",post_text:"styles_post_text__O8S-V"}},32:function(t,e,n){t.exports={post_page:"styles_post_page__Zm75e",post_page_item:"styles_post_page_item__3cysC"}},43:function(t,e,n){t.exports={container:"style_container__1ncd8"}},44:function(t,e,n){t.exports={input:"styles_input__3I9lN"}},45:function(t,e,n){t.exports={button:"styles_button__1M9-J"}},48:function(t,e,n){t.exports={textarea:"styles_textarea__U8r4W"}},51:function(t,e,n){t.exports=n(80)},79:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(24),s=n.n(c),o=n(4),u=n(2),l=n(16),i=n(43),p=n.n(i),m=function(t){var e=t.maxWidth,n=void 0===e?1200:e,r=t.children;return a.a.createElement("div",{className:p.a.container,style:{maxWidth:n}},r)},f=n(19),E=n.n(f),_=n(44),O=n.n(_),h=function(t){return a.a.createElement("input",{className:E()(O.a.input,Object(u.a)({},t.className,t.className)),value:t.value,onChange:t.onChange,type:t.type||"text",accept:t.accept||"",placeholder:t.placeholder})},S=n(45),b=n.n(S),d=function(t){return a.a.createElement("button",{className:E()(b.a.button,Object(u.a)({},t.className||"",t.className)),onClick:t.onClick,type:"text",disabled:t.disabled},t.children)},g=n(10),y=n.n(g),v=n(3),C="AUTH_SIGN_IN_START",j="AUTH_SIGN_IN_SUCCESS",T="AUTH_SIGN_IN_ERROR",U="CHECK_TOKEN_START",N="CHECK_TOKEN_SUCCESS",P="CHECK_TOKEN_ERROR",R="AUTH_SIGN_UP_START",w="AUTH_SIGN_UP_SUCCESS",x="AUTH_SIGN_UP_ERROR",D="AUTH_SIGN_UP_CLEAR",k=n(5),A=n.n(k),I=n(12),G=n(29),H=n.n(G);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W="".concat("http://localhost:5000","/").concat("api"),L=function(){return localStorage.getItem("AUTH_TOKEN")},K={auth:{signIn:"".concat(W,"/auth/signin"),signUp:"".concat(W,"/auth/signup"),checkToken:"".concat(W,"/auth/checkToken")},user:{getUser:"".concat(W,"/user")},post:{getAll:"".concat(W,"/post/getAll"),getOne:"".concat(W,"/post/getOne"),getByUserID:"".concat(W,"/post/getById"),create:"".concat(W,"/post/create")},comment:{getAll:"".concat(W,"/comment/getByPostId"),create:"".concat(W,"/comment/create")}},B=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return H.a.get(t,{headers:Q({authorization:e?L():null},n)})},Y=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return H.a.post(t,e,{headers:Q({authorization:n?L():null},r)})},q=K,Z=function(){var t=Object(I.a)(A.a.mark((function t(e){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.login,r=e.password,t.next=3,Y(q.auth.signIn,{login:n,password:r},!1);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F={UN_TOUCHED:"UN_TOUCHED",REQUESTING:"REQUESTING",SUCCESS:"SUCCESS",ERROR:"ERROR"},J=function(t){return t===F.REQUESTING||t===F.UN_TOUCHED},V=function(t){return t===F.REQUESTING},z=function(t){return t===F.SUCCESS},X=function(t){return t===F.ERROR},$=n(14);function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var et=Object(v.b)((function(t){return{isAuth:t.auth.isAuth,authStatus:t.auth.authStatus}}),{authSignIn:function(t){var e=t.login,n=t.password;return function(t){t({type:C}),Z({login:e,password:n}).then((function(e){var n;localStorage.setItem("AUTH_TOKEN",e.data.token),t((n=e.data,{type:j,data:n}))})).catch((function(e){localStorage.clear(),t({type:T,error:e})}))}}})((function(t){var e=t.isAuth,n=t.authStatus,c=t.authSignIn,s=Object(r.useState)({login:"",password:""}),i=Object(l.a)(s,2),p=i[0],f=i[1],E=function(t){return function(e){return f(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},p,Object(u.a)({},t,e.target.value)))}},_=!p.login||!p.password||V(n);return e?a.a.createElement(o.a,{to:"/"}):a.a.createElement(m,{maxWidth:1200},a.a.createElement("div",{className:y.a.auth_wrap},a.a.createElement("div",{className:y.a.auth_container},a.a.createElement("div",null,"Sign in"),a.a.createElement(h,{placeholder:"login",value:p.login,onChange:E("login"),className:y.a.input}),a.a.createElement(h,{placeholder:"password",value:p.password,onChange:E("password"),className:y.a.input}),V(n)&&a.a.createElement("div",null,"Wait"),X(n)&&a.a.createElement("div",null,"Error"),a.a.createElement($.a,{to:"/registration"},"Create account"),a.a.createElement(d,{disabled:_,className:y.a.button,onClick:function(){p.login&&p.password&&c(p)}},"Log in"))))})),nt=n(32),rt=n.n(nt),at=n(26),ct=n.n(at),st=function(t){var e=t.data;return console.log(e.imageUrl),a.a.createElement("div",{className:ct.a.post},a.a.createElement("h2",{className:ct.a.post_title},e.title),a.a.createElement("img",{src:"/".concat(e.imageUrl),alt:""}),a.a.createElement($.a,{to:"/posts/".concat(e.id),className:ct.a.post_text},e.text))},ot="GET_ALL_START",ut="GET_ALL_SUCCESS",lt="GET_ALL_ERROR",it="GET_ONE_START",pt="GET_ONE_SUCCESS",mt="GET_ONE_ERROR",ft="CLEAR_POST",Et="CREATE_POST_START",_t="CREATE_POST_SUCCESS",Ot="CREATE_POST_ERROR",ht="CREATE_POST_CLEAR",St="GET_COMMENTS_START",bt="GET_COMMENTS_SUCCESS",dt="GET_COMMENTS_ERROR",gt="CREATE_COMMENT_START",yt="CREATE_COMMENT_SUCCESS",vt=function(){var t=Object(I.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(q.post.getAll,!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ct=function(){var t=Object(I.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("".concat(q.post.getOne,"/").concat(e),!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),jt=function(){var t=Object(I.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(q.post.create,e,!0,{"Content-Type":"multipart/form-data"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Tt=function(){var t=Object(I.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("".concat(q.comment.getAll,"/").concat(e),!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ut=function(){var t=Object(I.a)(A.a.mark((function t(e){var n,r,a,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.author,r=e.text,a=e.authorID,c=e.postID,t.next=3,Y("".concat(q.comment.create,"/").concat(c),{author:n,text:r,authorID:a},!0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Nt=function(t){return function(e){e({type:St}),Tt(t).then((function(t){return e((n=t.data,{type:bt,data:n}));var n})).catch((function(t){return e({type:dt,error:t})}))}},Pt=n(21),Rt=n.n(Pt),wt="GET_USER_START",xt="GET_USER_SUCCESS",Dt="GET_USER_ERROR",kt=function(){var t=Object(I.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(q.user.getUser,!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),At=Object(v.b)((function(t){return{userStatus:t.user.userStatus,user:t.user.user}}),{getUser:function(t){return function(e){e({type:wt}),kt(t).then((function(t){return e((n=t.data,{type:xt,data:n}));var n})).catch((function(t){return e({type:Dt,error:t})}))}}})((function(t){var e=t.getUser,n=t.userStatus,c=t.user;return Object(r.useEffect)(e,[]),a.a.createElement("div",{className:Rt.a.header},a.a.createElement($.a,{className:Rt.a.header_item,to:"/"},"Posts"),a.a.createElement($.a,{className:Rt.a.header_item,to:"/create-post"},"Create Post"),z(n)&&a.a.createElement("div",{className:Rt.a.user_block},"Hello ",a.a.createElement("span",null,c.name)))})),It=function(t){var e=t.children;return a.a.createElement("div",null,a.a.createElement(At,null),e)},Gt=Object(v.b)((function(t){return{posts:t.post.posts,postsStatus:t.post.postsStatus}}),{getAll:function(){return function(t){t({type:ot}),vt().then((function(e){return t((n=e.data,{type:ut,data:n}));var n})).catch((function(e){return t({type:lt,error:e})}))}}})((function(t){var e=t.posts,n=t.postsStatus,c=t.getAll;return Object(r.useEffect)(c,[]),console.log(e),J(n)?a.a.createElement(m,null,"Wait"):X(n)?a.a.createElement(m,null,"Error!"):a.a.createElement(m,null,a.a.createElement(It,null,a.a.createElement("div",{className:rt.a.post_page},e.map((function(t){return a.a.createElement("div",{key:t.id,className:rt.a.post_page_item},a.a.createElement(st,{data:t}))})))))})),Ht=n(22),Mt=n.n(Ht),Qt=n(23),Wt=n.n(Qt),Lt=Object(v.b)((function(t){return{getCommentsStatus:t.post.getCommentsStatus,postComments:t.post.selectedPost.comments,user:t.user.user,createCommentsStatus:t.post.createCommentsStatus}}),{getComments:Nt,createComment:function(t){var e=t.author,n=t.text,r=t.authorID,a=t.postID;return function(t){t({type:gt}),Ut({author:e,text:n,authorID:r,postID:a}).then((function(e){return t((n=e.data,{type:yt,data:n}));var n})).catch((function(e){return t({type:"CREATE_COMMENT_ERROR",error:e})}))}},createCommentsClear:function(t){return{type:"CREATE_COMMENT_CLEAR"}}})((function(t){var e=t.getComments,n=t.postID,c=t.postComments,s=t.getCommentsStatus,o=t.user,u=t.createComment,i=(t.createCommentsStatus,t.createCommentsClear);Object(r.useEffect)((function(){return e(n),i}),[n]);var p=Object(r.useState)(""),m=Object(l.a)(p,2),f=m[0],E=m[1];return a.a.createElement("div",{className:Wt.a.comments},a.a.createElement("div",{className:Wt.a.comments_block},a.a.createElement(h,{placeholder:"Comment",value:f,onChange:function(t){return E(t.target.value)}}),a.a.createElement(d,{onClick:function(){u({author:o.name,text:f,authorID:o._id,postID:n}),E("")}},"Send comment")),a.a.createElement("div",{className:Wt.a.comments_list},z(s)&&c.map((function(t){return a.a.createElement("div",{className:Wt.a.comments_list_item},a.a.createElement("h3",null,t.author),a.a.createElement("p",null,t.text))})),z(s)&&!c.length&&a.a.createElement("div",null,"No comments")))})),Kt=Object(v.b)((function(t){return{post:t.post.selectedPost,postStatus:t.post.selectedPostStatus}}),{getOne:function(t){return function(e){e({type:it}),Ct(t).then((function(t){return e((n=t.data,{type:pt,data:n}));var n})).catch((function(t){return e({type:mt,error:t})}))}},clearPost:function(){return{type:ft}},getComments:Nt})((function(t){var e=t.match,n=t.getOne,c=t.post,s=t.postStatus,o=t.clearPost;return Object(r.useEffect)((function(){return n(e.params.id),o}),[e.params.id]),J(s)?a.a.createElement(m,null,"Wait"):X(s)?a.a.createElement(m,null,"Error!"):a.a.createElement(m,{maxWidth:1200},a.a.createElement(It,null,a.a.createElement("div",{className:Mt.a.post},a.a.createElement("div",{className:Mt.a.post_header},c.title),a.a.createElement("div",{className:Mt.a.post_content},a.a.createElement("img",{src:"http://localhost:5000/".concat(c.imageUrl),alt:""}),a.a.createElement("p",{className:Mt.a.post_text},c.text)),a.a.createElement("br",null),a.a.createElement(Lt,{comments:c.comments,postID:e.params.id}))))})),Bt=n(18),Yt=n.n(Bt),qt=n(48),Zt=n.n(qt),Ft=function(t){return a.a.createElement("input",{className:E()(Zt.a.textarea,Object(u.a)({},t.className,t.className)),value:t.value,onChange:t.onChange,placeholder:t.placeholder,type:"text"})};function Jt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Jt(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var zt=Object(v.b)((function(t){return{createPostStatus:t.post.createPostStatus}}),{create:function(t){return function(e){e({type:Et}),jt(t).then((function(t){return e((n=t.data,{type:_t,data:n}));var n})).catch((function(t){return e({type:Ot,error:t})}))}},createPostClear:function(){return{type:ht}}})((function(t){var e=t.createPostStatus,n=t.create,c=t.createPostClear;Object(r.useEffect)((function(){return c}),[]);var s=Object(r.useState)({}),o=Object(l.a)(s,2),i=o[0],p=o[1],f=function(t){return function(e){p(Vt({},i,Object(u.a)({},t,e.target.value)))}},E=V(e)||!i.title||!i.text;return a.a.createElement(m,{maxWidth:1200},a.a.createElement(It,null,a.a.createElement("div",{className:Yt.a.create_post},a.a.createElement("div",{className:Yt.a.create_post_container},a.a.createElement("div",null,"Create post"),a.a.createElement(h,{placeholder:"title",value:i.title,onChange:f("title"),className:Yt.a.input}),a.a.createElement(Ft,{value:i.text,onChange:f("text"),textAreaProps:{placeholder:"Text"},placeholder:"Text",className:Yt.a.input}),a.a.createElement(h,{onChange:function(t){t.preventDefault();var e=t.target.files[0];p(Vt({},i,{postImage:e}))},type:"file",className:Yt.a.input,accept:"image/x-png,image/gif,image/jpeg"}),V(e)?a.a.createElement("div",null,"Wait"):a.a.createElement(d,{disabled:E,onClick:function(){var t=new FormData;t.append("postImage",i.postImage),t.append("title",i.title),t.append("text",i.text),n(t)},type:"button",className:Yt.a.button},"Create post")))))})),Xt=Object(v.b)((function(t,e){return{checkTokenStatus:t.auth.checkTokenStatus,isAuth:t.auth.isAuth,routeProps:e}}),{})((function(t){var e=t.checkTokenStatus,n=t.routeProps,r=t.isAuth;return r||J(e)?r&&z(e)?a.a.createElement(o.b,n):a.a.createElement(m,null,"Wait"):a.a.createElement(o.a,{to:"/auth"})})),$t=function(){return a.a.createElement(It,null,a.a.createElement("h1",null,"404"))};function te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var ee=Object(v.b)((function(t){return{signUpStatus:t.auth.signUpStatus}}),{authSignUp:function(t){var e=t.login,n=t.password,r=t.name;return function(t){t({type:R}),function(t){var e=t.login,n=t.name,r=t.password;return Y(q.auth.signUp,{login:e,name:n,password:r},!1)}({login:e,password:n,name:r}).then((function(e){return t((n=e.data,{type:w,data:n}));var n})).catch((function(e){return t({type:x,error:e})}))}},authSignUpClear:function(){return{type:D}}})((function(t){var e=t.authSignUp,n=t.authSignUpClear,c=t.signUpStatus;Object(r.useEffect)((function(){return n}),[]);var s=Object(r.useState)({login:"",password:"",name:""}),o=Object(l.a)(s,2),i=o[0],p=o[1],f=function(t){return function(e){return p(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?te(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,Object(u.a)({},t,e.target.value)))}},E=!i.login||!i.password||V(c);return a.a.createElement(m,{maxWidth:1200},a.a.createElement("div",{className:y.a.auth_wrap},a.a.createElement("div",{className:y.a.auth_container},a.a.createElement("div",null,"Create account"),a.a.createElement(h,{placeholder:"login",value:i.login,onChange:f("login"),className:y.a.input}),a.a.createElement(h,{placeholder:"name",value:i.name,onChange:f("name"),className:y.a.input}),a.a.createElement(h,{placeholder:"password",value:i.password,onChange:f("password"),className:y.a.input}),V(c)?a.a.createElement("div",null,"Wait"):a.a.createElement(d,{disabled:E,className:y.a.button,onClick:function(){i.login&&i.password&&e(i)}},"Create account"),X(c)&&a.a.createElement("div",null,"Error"),z(c)&&a.a.createElement("div",null,"Account created ",a.a.createElement($.a,{to:"/auth"},"Log in")))))})),ne=Object(v.b)((function(){}),{checkToken:function(){return function(t){t({type:U}),Y(q.auth.checkToken,{},!0).then((function(e){return t((n=e.data,{type:N,data:n}));var n})).catch((function(e){localStorage.clear(),t({type:P,error:e})}))}}})((function(t){var e=t.checkToken;return Object(r.useEffect)(e,[]),a.a.createElement(o.d,null,a.a.createElement(o.b,{path:"/auth",component:et}),a.a.createElement(o.b,{path:"/registration",component:ee}),a.a.createElement(Xt,{exact:!0,path:"/",component:Gt}),a.a.createElement(Xt,{path:"/posts/:id",component:Kt}),a.a.createElement(Xt,{path:"/create-post",component:zt}),a.a.createElement(Xt,{component:$t}))})),re=(n(79),n(6)),ae=n(17),ce=n(49);function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function oe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?se(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ue={isAuth:!1,authStatus:F.UN_TOUCHED,checkTokenStatus:F.UN_TOUCHED,signUpStatus:F.UN_TOUCHED};function le(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;switch((arguments.length>1?arguments[1]:void 0).type){case C:return oe({},t,{authStatus:F.REQUESTING});case j:return oe({},t,{authStatus:F.SUCCESS,checkTokenStatus:F.SUCCESS,isAuth:!0});case T:return oe({},t,{isAuth:!1,authStatus:F.ERROR});case U:return oe({},t,{checkTokenStatus:F.REQUESTING});case N:return oe({},t,{checkTokenStatus:F.SUCCESS,isAuth:!0});case P:return oe({},t,{isAuth:!1,checkTokenStatus:F.ERROR});case R:return oe({},t,{signUpStatus:F.REQUESTING});case w:return oe({},t,{signUpStatus:F.SUCCESS});case x:return oe({},t,{isAuth:!1,signUpStatus:F.ERROR});case D:return oe({},t,{isAuth:!1,signUpStatus:F.UN_TOUCHED});default:return t}}var ie=n(50);function pe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function me(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pe(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var fe={posts:null,postsStatus:F.UN_TOUCHED,selectedPost:null,selectedPostStatus:F.UN_TOUCHED,createPostStatus:F.UN_TOUCHED,getCommentsStatus:F.UN_TOUCHED,createCommentsStatus:F.UN_TOUCHED};function Ee(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ot:return me({},t,{postsStatus:F.REQUESTING});case ut:return me({},t,{postsStatus:F.SUCCESS,posts:e.data});case lt:return me({},t,{postsStatus:F.ERROR});case it:return me({},t,{selectedPostStatus:F.REQUESTING});case pt:return me({},t,{selectedPostStatus:F.SUCCESS,selectedPost:e.data});case mt:return me({},t,{selectedPostStatus:F.ERROR});case ft:return me({},t,{selectedPostStatus:F.UN_TOUCHED,getCommentsStatus:F.UN_TOUCHED,createCommentsStatus:F.UN_TOUCHED,selectedPost:null});case Et:return me({},t,{createPostStatus:F.REQUESTING});case _t:return me({},t,{createPostStatus:F.SUCCESS});case Ot:return me({},t,{createPostStatus:F.ERROR});case ht:return me({},t,{createPostStatus:F.UN_TOUCHED,selectedPost:null});case St:return me({},t,{getCommentsStatus:F.REQUESTING});case bt:return me({},t,{getCommentsStatus:F.SUCCESS,selectedPost:me({},t.selectedPost,{comments:e.data})});case dt:return me({},t,{getCommentsStatus:F.ERROR});case gt:return me({},t,{createCommentsStatus:F.REQUESTING});case yt:return me({},t,{createCommentsStatus:F.SUCCESS,selectedPost:me({},t.selectedPost,{comments:[].concat(Object(ie.a)(t.selectedPost.comments),[e.data])})});default:return t}}function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Oe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_e(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var he={user:null,userStatus:F.UN_TOUCHED};function Se(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case wt:return Oe({},t,{userStatus:F.REQUESTING});case xt:return Oe({},t,{userStatus:F.SUCCESS,user:e.data});case Dt:return Oe({},t,{userStatus:F.ERROR});default:return t}}var be=function(){return Object(ae.c)({auth:le,post:Ee,user:Se})};n.d(e,"history",(function(){return de}));var de=Object(re.a)(),ge=Object(ae.d)(be(de),Object(ae.a)(ce.a));s.a.render(a.a.createElement(v.a,{store:ge},a.a.createElement(o.c,{history:Object(re.a)()},a.a.createElement(ne,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.336c6dbb.chunk.js.map