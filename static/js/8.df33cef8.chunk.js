(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(t,e,n){"use strict";n.d(e,"b",function(){return f}),n.d(e,"a",function(){return m}),n.d(e,"c",function(){return h});var r=n(233),o=n(0),a=n.n(o),i=n(231),c=n.n(i),u=n(107),s=["input","meta"],p=["input","meta"],l=function(t){t.input;var e=t.meta,n=e.touched,r=e.error,o=t.children,i=(t.props,n&&r);return a.a.createElement("div",{className:c.a.formControl+" "+(i?c.a.error:"")},a.a.createElement("div",null,o,i&&a.a.createElement("span",{onMouseEnter:function(){alert(r)}},"!")))},f=function(t){var e=t.input,n=(t.meta,Object(r.a)(t,s));return a.a.createElement(l,t,a.a.createElement("textarea",Object.assign({},e,n)))},m=function(t){var e=t.input,n=(t.meta,Object(r.a)(t,p));return a.a.createElement(l,t,a.a.createElement("input",Object.assign({},e,n)))},h=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return a.a.createElement("div",null,a.a.createElement(u.a,Object.assign({placeholder:t,name:e,validate:n,component:r},o)),i)}},231:function(t,e,n){t.exports={formControl:"FromsControls_formControl__3d2KV",error:"FromsControls_error__Gm5kJ",divSpanError:"FromsControls_divSpanError__1o8Ln"}},232:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var r=function(t){if(!t)return"Field is required"},o=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},245:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=n(13),u=n.n(c),s=n(9),p=n.n(s),l=n(31),f=n(52),m=n.n(f),h={},b=0,d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,n=h[e]||(h[e]={});if(n[t])return n[t];var r=m.a.compile(t);return b<1e4&&(n[t]=r,b++),r}(t)(e,{pretty:!0})},v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(l.b)(t.to),n=Object(l.b)(this.props.to);Object(l.c)(e,n)?u()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,n=t.to;return e?"string"===typeof n?d(n,e.params):v({},n,{pathname:d(n.pathname,e.params)}):n},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,n=this.computeTo(this.props);e?t.push(n):t.replace(n)},e.prototype.render=function(){return null},e}(o.a.Component);y.propTypes={computedMatch:i.a.object,push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},y.defaultProps={push:!1},y.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};var j=y;e.a=j},304:function(t,e,n){t.exports={main:"SingUp_main__23rRs",checkbox:"SingUp_checkbox__1Lw03"}},313:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n(18),a=n(20),i=n(19),c=n(0),u=n.n(c),s=n(229),p=n(23),l=n(32),f=n(304),m=n.n(f),h=n(108),b=n(230),d=n(232),v=n(245),y=Object(h.a)({form:"sing-up"})(function(t){var e=t.handleSubmit;return u.a.createElement("form",{onSubmit:e},Object(b.c)("Yor full name","name",[d.b],b.a),Object(b.c)("Email","email",[d.b],b.a),Object(b.c)("Password","pass",[d.b],b.a),u.a.createElement("div",null,u.a.createElement("button",null,"SingUp")))}),j=function(t){var e=t.singUp;return t.isAuth?u.a.createElement(v.a,{to:"/profile/"}):u.a.createElement("div",{className:m.a.main},u.a.createElement("h1",null,"Sing Up"),u.a.createElement(y,{onSubmit:function(t){e({name:t.name,email:t.email,password:t.pass})}}))},O=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement(j,{singUp:this.props.singUp,isAuth:this.props.isAuth})}}]),n}(u.a.Component),g=Object(s.a)(O);e.default=Object(p.b)(function(t){return{isAuth:t.auth.isAuth}},{singUp:l.d})(g)}}]);
//# sourceMappingURL=8.df33cef8.chunk.js.map