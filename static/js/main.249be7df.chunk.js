(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c.n(a),n=c(16),s=c.n(n),i=c(3),o=c(11),l=c(18),u=c(29),d=c(9),j={isLoading:!1};var p={favoriteCitys:[],currCity:{_id:"2154402",name:"Tel Aviv",country:"Israel",key:2154402}};var m={themeState:!1};var b={temperatureScale:"celsius"};var h=Object(l.b)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case"LOADING_DONE":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1});default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITE_CITYS":return Object(d.a)(Object(d.a)({},e),{},{favoriteCitys:t.citys});case"SET_CURRENT_CITY":return Object(d.a)(Object(d.a)({},e),{},{currCity:t.city});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return Object(d.a)(Object(d.a)({},e),{},{themeState:t.themeState});default:return e}},temperatureScale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCALE":return Object(d.a)(Object(d.a)({},e),{},{temperatureScale:t.temperatureScale});default:return e}}}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,f=Object(l.d)(h,v(Object(l.a)(u.a))),O=c(5),x=(c(43),c(8)),y=c(4),g=c.n(y),N=c(7),T=c(10),w=c(35);var S,_={loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},saveToStorage:function(e,t){localStorage[e]=JSON.stringify(t)}},k="CITYS",I={query:function(){return C.apply(this,arguments)},getById:function(e){if(S){var t=S.find((function(t){return t._id===e}));return Promise.resolve(t)}},save:function(e){S.filter((function(t){return t.key===e.key}))[0]?(t=e.key,S=S.filter((function(e){return e.key!==t})),O.b.success("".concat(e.name," deleted from favorite list"),{position:O.b.POSITION.BOTTOM_LEFT})):(!function(e){var t=Object(d.a)({_id:E()},e);S=[t].concat(Object(w.a)(S))}(e),O.b.success("".concat(e.name," added to favorite list"),{position:O.b.POSITION.BOTTOM_LEFT}));var t;return _.saveToStorage(k,S),S}};function C(){return(C=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.loadFromStorage(k);case 2:return(S=e.sent)||(S=[],_.saveToStorage(k,S)),e.abrupt("return",S);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=c.charAt(Math.floor(Math.random()*c.length));return t}function D(){return function(){var e=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"LOADING_START"}),e.next=4,I.query();case 4:c=e.sent,t({type:"SET_FAVORITE_CITYS",citys:c}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err in loading citys",e.t0),O.b.error("Unable to loade citys",{position:O.b.POSITION.BOTTOM_LEFT});case 12:return e.prev=12,t({type:"LOADING_DONE"}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(t){return e.apply(this,arguments)}}()}function F(e){return function(){var t=Object(N.a)(g.a.mark((function t(c){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.save(e);case 3:a=t.sent,c({type:"SET_FAVORITE_CITYS",citys:a}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),O.b.error("Unable to update fav citys",{position:O.b.POSITION.BOTTOM_LEFT}),console.log("err in updating citys",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function L(e){return function(){var t=Object(N.a)(g.a.mark((function t(c){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{c({type:"SET_CURRENT_CITY",city:e})}catch(a){console.log("err in updating city",a),O.b.error("Unable to update city",{position:O.b.POSITION.BOTTOM_LEFT})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var M="Wr4K62SUuvcGfHVAo41RoFjFbKGTkzGo",P={getAutoComplete:function(e){return fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(M,"&q=").concat(e))},getCurrentCityConditions:function(e){return R.apply(this,arguments)},getForecastFromCity:function(e){return z.apply(this,arguments)},getCurrLocation:function(e){return A.apply(this,arguments)},getHourlyFrecast:function(e){return fetch("https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(e,"?apikey=").concat(M,"&details=true&metric=true"))}};function A(){return(A=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(M,"&q=").concat(t)),e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(M,"&details=true&metric=true")),e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(M,"&details=true")),e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=c(1),H=function(e){var t=e.isActive,c=e.size;return Object(V.jsx)("div",{className:"heart ".concat(t?"active":""),children:Object(V.jsx)("div",{className:"heart-flip ".concat(c||"")})})};function W(){var e=Object(i.c)((function(e){return e.city.favoriteCitys})),t=Object(i.c)((function(e){return e.theme.themeState})),c=Object(a.useState)([]),r=Object(T.a)(c,2),n=r[0],s=r[1],o=Object(i.b)(),l=Object(x.f)(),u=Object(a.useRef)();function d(){return(d=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.target.value.length&&s([]),!(t.target.value.length>2)){e.next=14;break}return e.prev=2,e.next=5,P.getAutoComplete(t.target.value).then((function(e){return e.json()})).then((function(e){return e}));case 5:c=e.sent,s(c),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),s([]),O.b.error("Failed auto complete",{position:O.b.POSITION.BOTTOM_LEFT}),console.log("ERR in get citys from AutoComplete",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function j(t){if(e&&e.length>0&&e.filter((function(e){return e.key===t}))[0])return"includes"}function p(e,t){var c={name:t.LocalizedName,country:t.Country.LocalizedName,key:t.Key};e.preventDefault(),e.stopPropagation(),o(F(c))}function m(e){var t={name:e.LocalizedName,country:e.Country.LocalizedName,key:e.Key};o(L(t)),l.push("/".concat(t.name))}return Object(a.useEffect)((function(){o(D())}),[o]),Object(V.jsxs)("div",{className:"search flex column justify-center",children:[Object(V.jsx)("div",{className:"search-title",children:"Search for city"}),Object(V.jsx)("input",{className:"search-input ".concat(t?"dark":""),type:"search",ref:u,onChange:function(e){return d.apply(this,arguments)},placeholder:"Enter at least 2 letters to start.."}),n.length>0&&Object(V.jsx)("div",{className:"city-list ".concat(n.length>0?"full":""),children:Object(V.jsx)("div",{className:"city-list-scroll-wrapper",children:n.map((function(t,c){return Object(V.jsx)(U,{cityData:t,getCurrentStyle:j,onGetCityDetails:m,onToggleLocation:p,favoriteCitys:e,setCitysData:s,inputRef:u},c)}))})})]})}function U(e){var t=e.favoriteCitys,c=e.cityData,r=e.getCurrentStyle,n=e.onGetCityDetails,s=e.onToggleLocation,i=e.setCitysData,o=e.inputRef,l=Object(a.useState)(!1),u=Object(T.a)(l,2),d=u[0],j=u[1];return Object(a.useEffect)((function(){var e=t.filter((function(e){return e.key===c.Key}))[0];j(!!e)}),[c,t]),Object(V.jsxs)("div",{className:"city-data-preview flex  place-center ".concat(r(c.Key)),onClick:function(){n(c),i([]),o&&o.current&&(o.current.value="")},children:[Object(V.jsxs)("div",{className:"flex search-name-result",children:[Object(V.jsxs)("div",{className:"margin-right-5px",children:[c.LocalizedName,", "]}),Object(V.jsx)("div",{className:"country",children:c.Country.LocalizedName})]}),Object(V.jsx)("div",{onClick:function(e){s(e,c)},children:Object(V.jsx)(H,{isActive:d,size:"small"})})]})}var B=function(e){var t,c=e.value,a=e.currentTextSize,r=Object(i.c)((function(e){return e.temperatureScale.temperatureScale}));return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("span",{className:"temperature-value",children:["celsius"===r&&Math.round(c),"fahrenheit"===r&&Math.round((t=c,9*t/5+32))]}),Object(V.jsxs)("span",{className:"temperature-unit",children:["celsius"===r&&Object(V.jsx)(V.Fragment,{children:"\xb0"}),"fahrenheit"===r&&Object(V.jsx)("span",{className:"".concat(a?"":"fs-for-temp-scale"),children:"\u2109"})]})]})},G=c(32),q=c(31),J=c(30),K=c(33);function Y(e){switch(e){case 1:case 2:case 3:case 4:case 5:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199308/OIH57D1.eps_crop__1_-removebg-preview_g3qwv5.png";case 6:case 7:case 8:case 19:case 20:case 38:case 43:case 11:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199333/OIH57D1.eps_crop__2_-removebg-preview_oclptj.png";case 12:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199371/OIH57D1.eps_crop__4_-removebg-preview_gnl9n6.png";case 13:case 14:case 39:case 40:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199391/OIH57D1.eps_crop__3_-removebg-preview_eicsqk.png";case 15:case 16:case 17:case 41:case 42:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622039606/OIH57D1.eps_crop-removebg-preview_dx3n3o.png";case 18:case 25:case 26:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199420/OIH57D1.eps_crop__5_-removebg-preview_nazxov.png";case 22:case 29:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199442/OIH57D1.eps_crop__7_-removebg-preview_ow6llf.png";case 23:case 44:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199464/OIH57D1.eps_crop__6_-removebg-preview_meirie.png";case 24:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199478/OIH57D1.eps_crop__13_-removebg-preview_ilfsnl.png";case 30:case 31:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199496/OIH57D1.eps_crop__12_-removebg-preview_tiqmlu.png";case 32:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199523/OIH57D1.eps_crop__15_-removebg-preview_lw0ij6.png";case 33:case 34:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199561/OIH57D1.eps_crop__11_-removebg-preview_ywo1lm.png";case 35:case 36:case 37:return"https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199575/OIH57D1.eps_crop__9_-removebg-preview_beblpw.png"}}function X(e){switch(!0){case e.includes("UV"):return Object(V.jsx)(J.a,{});case e.includes("Humidity"):return Object(V.jsx)(q.a,{});case e.includes("Wind"):return Object(V.jsx)(G.a,{});case e.includes("Precipitation"):case e.includes("Liquid"):return Object(V.jsx)(K.a,{})}}var Q=function(e){var t=e.currentCityData,c=t.weatherIcon,a=t.weatherText,r=t.temperature,n=t.realFeelTemperature,s=Object(i.c)((function(e){return e.theme.themeState}));return Object(V.jsxs)("div",{className:"weather-card-preview flex",children:[Object(V.jsx)("div",{className:"weather-text bold-600 title-txt",children:a}),Object(V.jsxs)("div",{className:"temperature-wrapper flex",children:[Object(V.jsx)("div",{className:"current-temperature",children:Object(V.jsx)(B,{value:r})}),Object(V.jsxs)("div",{className:"real-feel-temperature under-title-small-txt bold-600 ",children:[Object(V.jsx)("span",{children:"Feels like "}),Object(V.jsx)("span",{className:"real-feel-value",children:Object(V.jsx)(B,{value:n,currentTextSize:!0})})]})]}),Object(V.jsxs)("div",{className:"weather-icon ".concat(function(){switch(c){case 33:case 34:case 35:case 36:case 37:return"smaller";default:return""}}()),children:[Object(V.jsx)("img",{src:Y(c),alt:"",srcSet:""}),Object(V.jsx)("div",{className:"img-shadow ".concat(s?"dark-theme":"light-theme")})]})]})},Z=function(e){var t=e.currCity,c=Object(i.c)((function(e){return e.city.favoriteCitys})),r=Object(a.useState)(!1),n=Object(T.a)(r,2),s=n[0],o=n[1],l=Object(i.b)();return Object(a.useEffect)((function(){var e=c.filter((function(e){return e.key===t.key}))[0];o(!!e)}),[t,c]),Object(V.jsxs)("div",{className:"favorite-btn",onClick:function(){l(F(t))},children:[Object(V.jsx)("div",{className:"desktop-view-btn",children:Object(V.jsx)($,{isActive:s})}),Object(V.jsx)("div",{className:"mobile-view-btn",children:Object(V.jsx)(H,{isActive:s})})]})},$=function(e){var t=e.isActive;return Object(V.jsxs)("div",{className:"heart-button ".concat(t?"active":""),children:[Object(V.jsx)("div",{className:"heart-flip"}),Object(V.jsxs)("span",{children:[t?"Added to":"Add to"," favorite"]})]})};function ee(e){var t=new Date(e),c=t.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()];return"".concat(c," ").concat(a)}function te(e){return["S","M","T","W","T","F","S"][new Date(e).getDay()]}var ce=c(34),ae=function(e){var t,c=e.dailyForecast,a=Object(i.c)((function(e){return e.theme.themeState}));return Object(V.jsxs)("div",{className:"card-type-2 ".concat(a?"":"light-theme"," day-forecast-preview"),children:[Object(V.jsxs)("div",{className:"desktop",children:[Object(V.jsx)("div",{className:"flex column place-center",children:Object(V.jsxs)("div",{className:"flex column place-center",children:[Object(V.jsxs)("div",{className:"flex column place-center ".concat(a?"lightClr":""),children:[Object(V.jsx)("div",{className:"title-txt",children:(t=c.Date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t).getDay()])}),Object(V.jsx)("div",{className:"fs11",children:ee(c.Date)})]}),Object(V.jsx)("div",{className:"day-icon",children:Object(V.jsx)("img",{src:Y(c.Day.Icon),alt:"",srcSet:""})})]})}),Object(V.jsx)("div",{className:"weather-text title-txt text-center ".concat(a?"lightClr":""),children:c.Day.ShortPhrase}),Object(V.jsxs)("div",{className:"flex width-full space-evenly",children:[Object(V.jsx)("div",{className:"day-temperature max bold-700 fs30",children:Object(V.jsx)(B,{currentTextSize:!0,value:c.Temperature.Maximum.Value})}),Object(V.jsx)("div",{className:"day-temperature min bold-700 fs30",children:Object(V.jsx)(B,{currentTextSize:!0,value:c.Temperature.Minimum.Value})})]}),Object(V.jsxs)("div",{className:"temperature-params forecast",children:[Object(V.jsxs)("div",{children:[Object(V.jsxs)("span",{className:"clr6 margin-right-5px",children:[Object(V.jsx)("span",{className:"margin-right-5px",children:X("UV")}),Object(V.jsx)("span",{children:"UV:"})]}),Object(V.jsxs)("span",{className:"".concat(a?"clr4":"clr6"," "),children:[c.AirAndPollen[5].Value,"/10"]})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)("span",{className:"clr6 margin-right-5px",children:[Object(V.jsx)("span",{className:"margin-right-5px",children:X("Wind")}),Object(V.jsx)("span",{children:"Wind:"})]}),Object(V.jsxs)("span",{className:"".concat(a?"clr4":"clr6"," "),children:[c.Day.WindGust.Speed.Value," km/h"]})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)("span",{className:"clr6 margin-right-5px",children:[Object(V.jsx)("span",{className:"margin-right-5px",children:Object(V.jsx)(ce.a,{})}),Object(V.jsx)("span",{children:"Real Feel:"})]}),Object(V.jsx)("span",{className:"".concat(a?"clr4":"clr6"," "),children:Object(V.jsx)(B,{currentTextSize:!0,value:c.RealFeelTemperature.Maximum.Value})})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)("span",{className:"clr6 margin-right-5px",children:[Object(V.jsx)("span",{className:"margin-right-5px",children:X("Liquid")}),Object(V.jsx)("span",{children:"Total Liquid:"})]}),Object(V.jsxs)("span",{className:"".concat(a?"clr4":"clr6"," "),children:[c.Day.TotalLiquid.Value," mm"]})]})]})]}),Object(V.jsxs)("div",{className:"mobile flex column place-center justify-center",children:[Object(V.jsx)("div",{className:"day-letter",children:te(c.Date)}),Object(V.jsx)("div",{className:"day-icon",children:Object(V.jsx)("img",{src:Y(c.Day.Icon),alt:"",srcSet:""})}),Object(V.jsx)("div",{className:"day-temperature bold-700",children:Object(V.jsx)(B,{value:c.Temperature.Maximum.Value,currentTextSize:!0})})]})]})},re=function(e){var t=e.dailyForecastsData;return Object(V.jsxs)("div",{children:[Object(V.jsx)("div",{className:"bold-700 title-txt",children:"Next 5 Days"}),Object(V.jsx)("div",{className:"daily-forecasts",children:t.map((function(e,t){return Object(V.jsx)(ae,{day:"M",dailyForecast:e},t)}))})]})};function ne(e){return function(){var t=Object(N.a)(g.a.mark((function t(c){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{c({type:"SET_SCALE",temperatureScale:e})}catch(a){console.log("err in updating temperature scale",a),O.b.error("Unable to update temperature scale",{position:O.b.POSITION.BOTTOM_LEFT})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function se(){var e=Object(i.c)((function(e){return e.temperatureScale.temperatureScale})),t=Object(i.c)((function(e){return e.theme.themeState})),c=Object(i.b)();return Object(V.jsx)("div",{className:"conversion-btn-wrapper width-full flex",children:Object(V.jsx)("input",{type:"checkbox",className:"temperature-conversion-btn ".concat(t?"dark":""),onChange:function(){c(ne("celsius"===e?"fahrenheit":"celsius"))},checked:"celsius"!==e})})}function ie(e){var t=e.param,c=Object(i.c)((function(e){return e.theme.themeState}));function a(){switch(!0){case t.name.includes("UV"):return 10*t.value;case t.name.includes("Humidity"):case t.name.includes("Wind"):case t.name.includes("Precipitation"):return t.value}}return Object(V.jsxs)("div",{className:"param-progress-bar width-fit flex column place-center",children:[Object(V.jsxs)("div",{className:"title-text flex",children:[Object(V.jsx)("div",{className:"margin-right-7px",children:t.name}),Object(V.jsx)("div",{className:"fs18",children:X(t.name)})]}),Object(V.jsxs)("div",{className:"progress-circle ".concat(a()>50?"over50":"","  p").concat(a()," ").concat(c?"dark":""),children:[Object(V.jsx)("div",{className:"flex ".concat(t.txt?"column":""),children:Object(V.jsxs)("span",{children:[t.value,t.unit]})}),Object(V.jsxs)("div",{className:"left-half-clipper",children:[Object(V.jsx)("div",{className:"first50-bar"}),Object(V.jsx)("div",{className:"value-bar"})]})]})]})}function oe(e){var t=new Date(e),c=t.getHours(),a=t.getMinutes(),r=c>=12?"pm":"am";return(c=(c%=12)||12)+":"+(a=a<10?"0"+a:a)+" "+r}function le(){return Object(V.jsxs)("div",{className:"loading-wrapper",children:[Object(V.jsx)("div",{className:"loading-text",children:"LOADING"}),Object(V.jsx)("div",{className:"loading-content"})]})}var ue,de=function(){var e=Object(i.c)((function(e){return e.city.currCity})),t=Object(a.useState)(null),c=Object(T.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)([]),o=Object(T.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)([]),j=Object(T.a)(d,2),p=j[0],m=j[1],b=Object(a.useState)(null),h=Object(T.a)(b,2),v=h[0],f=h[1],y=Object(i.b)(),w=Object(x.f)(),S=Object(x.g)();return Object(a.useEffect)((function(){v&&function(){if(v){(function(){var e=Object(N.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getCurrLocation(v).then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,c={_id:"".concat(t.Key),name:t.LocalizedName,key:parseInt(t.Key),country:t.Country.LocalizedName},y(L(c)),w.push("/".concat(c.name));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}()}),[v,w,y]),Object(a.useEffect)((function(){if("/"===S.pathname)try{!function(){try{navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,c=e.coords.longitude;f("".concat(t,",").concat(c))}),(function(){f(null),O.b.error("Unable to retrieve your location",{position:O.b.POSITION.BOTTOM_LEFT}),"/"===S.pathname&&e&&w.push("/".concat(e.name))})):(f(null),O.b.error("Geolocation is not supported by your browser",{position:O.b.POSITION.BOTTOM_LEFT}))}catch(t){navigator.geolocation.watchPosition((function(e){f("".concat(e.coords.latitude,",").concat(e.coords.longitude))}))}}()}catch(t){O.b.error("Failed to get location",{position:O.b.POSITION.BOTTOM_LEFT})}else{try{(function(){var t=Object(N.a)(g.a.mark((function t(){var c,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.getCurrentCityConditions(e.key).then((function(e){return e.json()})).then((function(e){return e[0]}));case 2:(c=t.sent)&&(a={weatherText:c.WeatherText,weatherIcon:c.WeatherIcon,temperature:c.Temperature.Metric.Value,realFeelTemperature:c.RealFeelTemperature.Metric.Value,temperatureParams:[{name:"UV Index",value:c.UVIndex,unit:"/10",txt:c.UVIndexText},{name:"Humidity",value:c.RelativeHumidity,unit:"%"},{name:"Wind Gust",value:c.WindGust.Speed.Metric.Value,unit:"km/h"},{name:"Precipitation",value:c.PrecipitationSummary.Precipitation.Metric.Value,unit:c.PrecipitationSummary.Precipitation.Metric.Unit}]}),n(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}catch(t){O.b.error("Failed to fetch current conditions",{position:O.b.POSITION.BOTTOM_LEFT}),console.log("ERR in getting current city conditions",t)}try{(function(){var t=Object(N.a)(g.a.mark((function t(){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.getForecastFromCity(e.key).then((function(e){return e.json()})).then((function(e){return e.DailyForecasts}));case 2:c=t.sent,u(c);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}catch(t){O.b.error("Failed to fetch daily forecast",{position:O.b.POSITION.BOTTOM_LEFT}),console.log("ERR in getting daily forecast",t)}try{(function(){var t=Object(N.a)(g.a.mark((function t(){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.getHourlyFrecast(e.key).then((function(e){return e.json()})).then((function(e){return e}));case 2:c=t.sent,m(c);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}catch(t){O.b.error("Failed to fetch hourly forecast",{position:O.b.POSITION.BOTTOM_LEFT}),console.log("ERR in getting hourly forecast",t)}}return function(){n(null),u([]),m([])}}),[e,S.pathname]),r||0!==l.length||0!==p.length?Object(V.jsxs)("div",{className:"weather-details",children:[Object(V.jsx)("div",{className:"desktop-search",children:Object(V.jsx)(W,{})}),Object(V.jsxs)("div",{className:"inner-container",children:[Object(V.jsxs)("div",{className:"current-details-section",children:[Object(V.jsxs)("div",{className:"flex space-between full",children:[Object(V.jsx)(je,{currCity:e}),Object(V.jsx)(me,{currentCityData:r}),Object(V.jsx)(Z,{currCity:e})]}),Object(V.jsxs)("div",{className:"current-conditions-container",children:[Object(V.jsx)(Q,{currentCityData:r}),r.temperatureParams&&Object(V.jsx)("div",{className:"flex space-evenly temperature-params",children:r.temperatureParams.map((function(e,t){return Object(V.jsx)(pe,{param:e},t)}))})]})]}),Object(V.jsx)(se,{}),Object(V.jsx)(be,{hourlyForecastData:p}),Object(V.jsx)(re,{dailyForecastsData:l})]})]}):Object(V.jsx)(le,{})},je=function(e){var t=e.currCity;return Object(V.jsxs)("div",{className:"location flex column",children:[Object(V.jsxs)("div",{className:"city bold-800 title-txt",children:[t.name,","]}),Object(V.jsx)("div",{className:"country bold-800 title-txt",children:t.country}),Object(V.jsx)("div",{className:"date under-title-small-txt",children:void function(e){var t=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"],a=e.getMonth(),r=c[a],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];"".concat(n,", ").concat(t," ").concat(r)}(new Date)})]})},pe=function(e){var t=e.param,c=Object(i.c)((function(e){return e.theme.themeState}));return Object(V.jsxs)("div",{className:"temperature-param flex column",children:[Object(V.jsx)("div",{className:"card-type-2 flex place-center justify-center ".concat(c?"dark-theme":""," temperature-value "),children:Object(V.jsx)("div",{className:"icon mobile flex place-center justify-center",children:X(t.name)})}),Object(V.jsxs)("div",{className:"fs12 bold-700 ".concat(c?"dark-theme":""),children:[t.value,t.unit]})]})},me=function(e){var t=e.currentCityData;return Object(V.jsx)("div",{className:"temperatureParams-desktop-wrapper flex",children:t.temperatureParams.map((function(e,t){return Object(V.jsx)(ie,{param:e},t)}))})},be=function(e){var t=e.hourlyForecastData,c=Object(i.c)((function(e){return e.theme.themeState}));return Object(V.jsxs)("div",{className:"hourly-forecast-wrapper",children:[Object(V.jsx)("div",{className:"bold-700 title-txt margin-bottom-10px",children:"Today"}),Object(V.jsx)("div",{className:"grid hourly-forecast-list width-full space-between ".concat(c?"dark":""),children:t.map((function(e,t){return Object(V.jsxs)("div",{className:"flex column place-center hourly-forecast-preview ".concat(c?"dark":""),children:[Object(V.jsx)("div",{className:"clr2",children:oe(e.DateTime)}),Object(V.jsx)("div",{className:"icon-img flex place-center justify-center",children:Object(V.jsx)("img",{src:Y(e.WeatherIcon),alt:"",srcSet:""})}),Object(V.jsxs)("div",{className:"flex place-baseline",children:[Object(V.jsx)("div",{className:"title-txt margin-right-5px",children:Object(V.jsx)(B,{currentTextSize:!0,value:e.Temperature.Value})}),Object(V.jsx)("div",{className:"fs11",children:Object(V.jsx)(B,{currentTextSize:!0,value:e.RealFeelTemperature.Value})})]}),Object(V.jsx)("div",{className:"text-center word-break ".concat(c?"clr4":"clr6"),children:e.IconPhrase})]},t)}))})]})},he=c(27),ve=function(e){var t=e.city,c=Object(i.c)((function(e){return e.theme.themeState})),r=Object(a.useState)(null),n=Object(T.a)(r,2),s=n[0],o=n[1],l=Object(a.useState)(!1),u=Object(T.a)(l,2),d=u[0],j=u[1],p=Object(i.b)(),m=Object(x.f)(),b=Object(a.useRef)();Object(a.useEffect)((function(){try{(function(){var e=Object(N.a)(g.a.mark((function e(){var c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getCurrentCityConditions(t.key).then((function(e){return e.json()})).then((function(e){return e[0]}));case 2:(c=e.sent)&&(a={temperature:c.Temperature.Metric.Value,realFeelTemperature:c.RealFeelTemperature.Metric.Value,weatherText:c.WeatherText,weatherIcon:c.WeatherIcon,temperatureParams:[{name:"UV",value:c.UVIndex,unit:"/10"},{name:"Humidity",value:c.RelativeHumidity,unit:"%"},{name:"Wind Gust",value:c.WindGust.Speed.Metric.Value,unit:"km/h"}]},o(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){O.b.error("Failed getting current conditions",{position:O.b.POSITION.BOTTOM_LEFT}),console.log("ERR in getting fav city conditions",e)}}),[t.key]);return Object(a.useEffect)((function(){d&&b&&b.current&&b.current.focus()}),[d]),s?Object(V.jsxs)("div",{className:"weather-card-preview favorite flex column",onClick:function(){p(L(t)),m.push("/".concat(t.name))},children:[Object(V.jsxs)("div",{className:"position-relative options-container",children:[Object(V.jsx)("div",{className:"options-btn-wrapper flex place-center ".concat(d?"active":""),onClick:function(e){e.preventDefault(),e.stopPropagation(),j((function(e){return!e}))},children:Object(V.jsx)(he.a,{})}),d&&Object(V.jsx)("div",{className:"modal",tabIndex:"0",ref:b,onBlur:function(){return j(!1)},children:Object(V.jsxs)("div",{onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),p(F(t)),j(!1)}(e)},className:"delete-btn flex place-center",children:[Object(V.jsx)("div",{className:"margin-right-5px",children:"Delete"}),Object(V.jsx)(he.b,{})]})})]}),Object(V.jsxs)("div",{className:"flex space-between width-full",children:[Object(V.jsxs)("div",{className:"flex column favorite-location ".concat(c?"dark":""),children:[Object(V.jsxs)("div",{className:"title-txt bold-600 space-nowrap",children:[t.name,","]}),Object(V.jsx)("div",{children:t.country})]}),Object(V.jsxs)("div",{className:"weather-icon-favorite",children:[Object(V.jsx)("img",{src:Y(s.weatherIcon),alt:"",srcSet:""}),Object(V.jsx)("div",{className:"img-shadow-favorite ".concat(c?"dark-theme":"light-theme")})]})]}),Object(V.jsxs)("div",{className:"flex space-between width-full margin-t-20",children:[Object(V.jsx)("div",{className:"curr-favorite-location-params flex",children:s.temperatureParams.map((function(e,t){return Object(V.jsxs)("div",{className:"flex column param-wrapper justify-center",children:[Object(V.jsx)("div",{className:"text-center fs14",children:e.name}),Object(V.jsxs)("div",{className:"text-center fs11",children:[e.value,e.unit]})]},t)}))}),Object(V.jsx)("div",{className:"fs40 bold-700 favorite-temperature",children:Object(V.jsx)(B,{value:s.temperature})})]})]}):Object(V.jsx)(le,{})},fe=function(e){var t=e.favoriteCitys;return Object(V.jsx)("div",{className:"favorite-list inner-container ",children:t.map((function(e,t){return Object(V.jsx)(ve,{city:e},t)}))})},Oe=[{path:"/",component:de},{path:"/favorite",component:function(){var e=Object(i.c)((function(e){return e.city.favoriteCitys})),t=Object(i.b)();return Object(a.useEffect)((function(){t(D())}),[t]),0===e.length?Object(V.jsx)(le,{}):Object(V.jsxs)("div",{className:"favorite-page flex place-center column",children:[Object(V.jsx)("div",{className:"title bold-800 title-txt margin-bottom-30px",children:"Favorite Locations"}),e.length>0?Object(V.jsx)(fe,{favoriteCitys:e}):Object(V.jsx)("div",{className:" bold-700 title-txt",children:"No favorite citys"})]})}},{path:"/:id",component:de}],xe="THEME_STATE",ye={query:function(){return ge.apply(this,arguments)},save:function(e){ue=e,_.saveToStorage(xe,ue)}};function ge(){return(ge=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.loadFromStorage(xe);case 2:return(ue=e.sent)||(ue=!1,_.saveToStorage(xe,ue)),e.abrupt("return",ue);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(){return function(){var e=Object(N.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"LOADING_START"}),e.next=4,ye.query();case 4:c=e.sent,t({type:"SET_THEME",themeState:c}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err in loading theme",e.t0),O.b.error("Unable to load  theme background color status",{position:O.b.POSITION.BOTTOM_LEFT});case 12:return e.prev=12,t({type:"LOADING_DONE"}),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(t){return e.apply(this,arguments)}}()}function Te(){var e=Object(i.c)((function(e){return e.theme.themeState})),t=Object(i.b)();return Object(a.useEffect)((function(){t(Ne())}),[t]),Object(V.jsx)("div",{className:"wrapper",children:Object(V.jsxs)("div",{className:"toggle",children:[Object(V.jsx)("input",{className:"toggle-input",type:"checkbox",checked:e,onChange:function(){t(function(e){return function(){var t=Object(N.a)(g.a.mark((function t(c){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.save(e);case 3:c({type:"SET_THEME",themeState:e}),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("err in updating theme",t.t0),O.b.error("Unable to update theme background color",{position:O.b.POSITION.BOTTOM_LEFT});case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(!e))}}),Object(V.jsx)("div",{className:"toggle-bg"}),Object(V.jsx)("div",{className:"toggle-switch ",children:e?Object(V.jsx)("img",{className:"dark",src:"https://img.icons8.com/office/25/000000/moon.png",alt:""}):Object(V.jsx)("img",{className:"light",src:"https://img.icons8.com/emoji/35/000000/sun-behind-small-cloud.png",alt:""})})]})})}var we=function(){var e=Object(i.c)((function(e){return e.city.currCity})),t=Object(i.c)((function(e){return e.theme.themeState})),c=Object(a.useState)(0),r=Object(T.a)(c,2),n=r[0],s=r[1],l=Object(x.g)(),u=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};function d(){var e=Object(a.useState)(u()),t=Object(T.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){r(u())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),c}return Object(a.useEffect)((function(){window.onscroll=function(){s(window.pageYOffset)}}),[]),Object(V.jsx)("div",{className:"navbar ".concat(n>0?"scroll":""),children:Object(V.jsxs)("div",{className:"inner-navbar-container flex space-between",children:[Object(V.jsx)(o.b,{className:"logo-wrapper flex place-center",to:"/".concat(e.name),children:Object(V.jsx)("span",{children:" Weather app "})}),d()>599&&Object(V.jsxs)("div",{className:"flex place-center",children:[Object(V.jsxs)(o.b,{className:"navlink-btn margin-right-7px ".concat(t?"dark":""," ").concat("/"===l.pathname?"active":""),to:"/".concat(e.name),children:["home",Object(V.jsx)("span",{}),Object(V.jsx)("span",{}),Object(V.jsx)("span",{}),Object(V.jsx)("span",{})]}),Object(V.jsxs)(o.b,{className:"navlink-btn margin-right-7px ".concat(t?"dark":""," ").concat("/favorite"===l.pathname?"active":""),to:"/favorite",children:["favorite",Object(V.jsx)("span",{}),Object(V.jsx)("span",{}),Object(V.jsx)("span",{}),Object(V.jsx)("span",{})]}),Object(V.jsx)(Te,{})]}),d()<600&&Object(V.jsx)(Te,{})]})})},Se=c(28),_e=function(){var e=Object(i.c)((function(e){return e.theme.themeState})),t=Object(x.g)();return Object(V.jsx)("div",{className:"mobile-navbar ".concat(e?"dark-theme":""),children:Object(V.jsxs)("div",{className:"flex space-around place-center inner-navbar-container",children:[Object(V.jsx)(o.b,{className:"navlink-btn flex place-center ".concat("/"===t.pathname&&"/favorite"!==t.pathname?"active":""),to:"/",children:Object(V.jsx)(Se.b,{})}),Object(V.jsx)(o.b,{className:"navlink-btn flex place-center ".concat("/favorite"===t.pathname?"active":""),to:"/favorite",children:Object(V.jsx)(Se.a,{})})]})})};function ke(){var e=Object(i.c)((function(e){return e.theme.themeState})),t=Object(i.b)(),c=Object(x.g)();return Object(a.useEffect)((function(){t(Ne())}),[t]),Object(V.jsxs)("div",{className:"App ".concat(e?"/favorite"===c.pathname?"dark-desktop-favorite-page-view":"dark":"/favorite"===c.pathname?"light-desktop-favorite-page-view":"light"),children:[Object(V.jsx)(we,{}),Object(V.jsx)(x.c,{children:Oe.map((function(e){return Object(V.jsx)(x.a,{exact:!0,component:e.component,path:e.path},e.path)}))}),Object(V.jsx)(_e,{}),Object(V.jsx)(O.a,{})]})}c(48);var Ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))};s.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(i.a,{store:f,children:Object(V.jsx)(o.a,{children:Object(V.jsx)(ke,{})})})}),document.getElementById("root")),Ie()}},[[49,1,2]]]);
//# sourceMappingURL=main.249be7df.chunk.js.map