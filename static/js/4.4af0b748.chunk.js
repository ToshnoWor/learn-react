(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(e,t,a){"use strict";a.d(t,"b",function(){return p}),a.d(t,"a",function(){return f}),a.d(t,"c",function(){return d});var n=a(234),r=a(0),i=a.n(r),o=a(230),l=a.n(o),u=a(106),s=["input","meta"],c=["input","meta"],m=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,o=(e.props,a&&n);return i.a.createElement("div",{className:l.a.formControl+" "+(o?l.a.error:"")},i.a.createElement("div",null,r,o&&i.a.createElement("span",{onMouseEnter:function(){alert(n)}},"!")))},p=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,s));return i.a.createElement(m,e,i.a.createElement("textarea",Object.assign({},t,a)))},f=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,c));return i.a.createElement(m,e,i.a.createElement("input",Object.assign({},t,a)))},d=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r)),o)}},230:function(e,t,a){e.exports={formControl:"FromsControls_formControl__3d2KV",error:"FromsControls_error__Gm5kJ",divSpanError:"FromsControls_divSpanError__1o8Ln"}},232:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},233:function(e,t,a){e.exports=a.p+"static/media/defaultUserMan.9e883cf3.png"},236:function(e,t,a){"use strict";var n=a(54);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(u){r=!0,i=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",function(){return r})},238:function(e,t,a){},244:function(e,t,a){e.exports={description:"ProfileSpecimen_description__ekxgK",details:"ProfileSpecimen_details__6LbYi",details_title:"ProfileSpecimen_details_title__342Wz",details_text:"ProfileSpecimen_details_text__H_Yzg",button:"ProfileSpecimen_button__1DCiH",inputStatus:"ProfileSpecimen_inputStatus__1Qw2M",span:"ProfileSpecimen_span__1ydwW"}},299:function(e,t,a){},300:function(e,t,a){e.exports={profile_logo:"ProfileInfo_profile_logo__3Ec0k",pro_logo:"ProfileInfo_pro_logo__2jsFh",ava_description:"ProfileInfo_ava_description__dW0Et"}},301:function(e,t,a){e.exports={posts:"MyPosts_posts__1m7wH",my_posts:"MyPosts_my_posts__1lyJH"}},302:function(e,t,a){e.exports={item:"Post_item__3ZN1F"}},308:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(18),i=a(20),o=a(19),l=a(0),u=a.n(l),s=a(299),c=a.n(s),m=a(300),p=a.n(m),f=a(244),d=a.n(f),v=a(23),h=a(16),_=a(50),E=a(236),b=function(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),n=a[0],r=a[1],i=Object(l.useState)(e.status),o=Object(E.a)(i,2),s=o[0],c=o[1];Object(l.useEffect)(function(){c(e.status)},[e.status]);return u.a.createElement(u.a.Fragment,null,!n&&u.a.createElement("div",{onDoubleClick:e.isAuth?function(){r(!0)}:function(){alert("It's not your page!")}},u.a.createElement("span",{className:d.a.span},s||"Not status")),n&&u.a.createElement("div",null,u.a.createElement("input",{className:d.a.inputStatus,autoFocus:!0,onChange:function(e){c(e.target.value)},value:s}),u.a.createElement("button",{className:d.a.button,onClick:function(){r(!1),e.saveStatus(e.auth,s)}},"Save")))};var g=Object(h.d)(Object(v.b)(function(e){return{status:e.profilePage.profile.status,isAuth:e.profilePage.profile._id===e.auth.userId,auth:e.auth}},{saveStatus:_.h}))(function(e){return u.a.createElement(b,{status:e.status,saveStatus:e.saveStatus,isAuth:e.isAuth,auth:e.auth})}),y=function(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),n=a[0],r=a[1],i=Object(l.useState)(e.state.value),o=Object(E.a)(i,2),s=o[0],c=o[1];Object(l.useEffect)(function(){c(e.state.value)},[e.state.value]);return u.a.createElement(u.a.Fragment,null,n?u.a.createElement("div",null,u.a.createElement("input",{className:d.a.inputStatus,autoFocus:!0,onChange:function(e){c(e.target.value)},value:s}),u.a.createElement("button",{className:d.a.button,onClick:function(){r(!1),e.state.saveValue(e.state.auth,s)}},"Save")):u.a.createElement("div",{onDoubleClick:e.state.isAuth?function(){r(!0)}:function(){alert("It's not your page!")}},u.a.createElement("span",{className:d.a.spanStatus},s||"Not "+e.children)))};var j=Object(v.b)(function(e){return{auth:e.auth,isAuth:e.auth.userId===e.profilePage.profile._id,value:e.profilePage.profile.age}},{saveValue:_.e})(function(e){return u.a.createElement(y,{state:e},"age")});var P=Object(v.b)(function(e){return{auth:e.auth,isAuth:e.auth.userId===e.profilePage.profile._id,value:e.profilePage.profile.type}},{saveValue:_.i})(function(e){return u.a.createElement(y,{state:e},"type")});var O=Object(v.b)(function(e){return{auth:e.auth,isAuth:e.auth.userId===e.profilePage.profile._id,value:e.profilePage.profile.city}},{saveValue:_.f})(function(e){return u.a.createElement(y,{state:e},"city")});var S=Object(v.b)(function(e){return{auth:e.auth,isAuth:e.auth.userId===e.profilePage.profile._id,value:e.profilePage.profile.name}},{saveValue:_.g})(function(e){return u.a.createElement(y,{state:e},"name")}),N=function(e){return u.a.createElement("div",{className:d.a.description},u.a.createElement("div",null,u.a.createElement(S,null)),u.a.createElement("div",null,u.a.createElement("div",{className:d.a.details},u.a.createElement("div",{className:d.a.details_title},"Age:"),u.a.createElement("div",{className:d.a.details_text},u.a.createElement(j,null)),u.a.createElement("div",{className:d.a.details_title},"Type:"),u.a.createElement("div",{className:d.a.details_text},u.a.createElement(P,null)),u.a.createElement("div",{className:d.a.details_title},"City:"),u.a.createElement("div",{className:d.a.details_text},u.a.createElement(O,null)),u.a.createElement("div",{className:d.a.details_title},"Status:"),u.a.createElement("div",{className:d.a.details_text},u.a.createElement(g,null)))))},A=a(233),k=a.n(A),I=a(33),C=function(e){var t=e.profile;return t?u.a.createElement("div",null,u.a.createElement("div",{className:p.a.ava_description},u.a.createElement("div",{className:p.a.profile_logo},u.a.createElement("img",{src:null===t.photo?k.a:t.photo,alt:"=("})),u.a.createElement(N,{profile_name:null===t.name?"":t.name,profile_age:null===t.age?"":t.age,profile_sex:null===t.type?"":t.type,profile_city:null===t.city?"":t.city}))):u.a.createElement(I.a,null)},x=a(14),w=a(301),F=a.n(w),M=(a(238),a(302)),V=a.n(M),D=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).deletePost=function(t){e.props.removePost(e.props.auth,t.target.value)},e}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:V.a.item},u.a.createElement("div",null," "),u.a.createElement("div",null,this.props.message),this.props.auth.isAuth?u.a.createElement("button",{value:this.props.postId,onClick:this.deletePost},"X"):u.a.createElement(u.a.Fragment,null))}}]),a}(u.a.Component),H=a(106),J=a(107),W=a(232),z=a(229),K=Object(W.a)(255),L=Object(J.a)({form:"post"})(function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement(H.a,{component:z.b,name:"post",validate:[W.b,K]}),u.a.createElement("button",null,"Add post"))}),T=u.a.memo(function(e){var t,a=e.posts;null!=a&&"undefined"!==a&&(t=Object(x.a)(a).reverse().map(function(t,n){return u.a.createElement(D,{key:n,postId:a.length-1-n,message:t,removePost:e.removePost,auth:{isAuth:e.isAuth,token:e.token}})}));return u.a.createElement("div",{className:F.a.my_posts},"Posts",e.isAuth?u.a.createElement("div",{className:F.a.Create_post},u.a.createElement(L,{onSubmit:function(t){e.addPost({isAuth:e.isAuth,token:e.token},t.post)}})):u.a.createElement(u.a.Fragment,null),u.a.createElement("div",{className:F.a.posts},"undefined"!==t?t:""))}),Y=Object(v.b)(function(e){return{posts:e.profilePage.posts,token:e.auth.token,isAuth:e.auth.userId===(e.profilePage.profile&&e.profilePage.profile._id)}},{addPost:_.a,removePost:_.d})(T),q=function(e){return u.a.createElement("div",{className:c.a.content},u.a.createElement(C,{profile:e.profile}),u.a.createElement(Y,null))},G=a(228),Q=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authId)||this.props.history.push("/login"),null===e&&"undefined"===e||this.props.getProfile(e)}},{key:"render",value:function(){return u.a.createElement(q,{profile:this.props.profile})}}]),a}(u.a.Component);t.default=Object(h.d)(Object(v.b)(function(e){return{profile:e.profilePage.profile,authId:e.auth.userId,isAuth:e.auth.isAuth}},{getProfile:_.c}),G.a)(Q)}}]);
//# sourceMappingURL=4.4af0b748.chunk.js.map