(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"097f":function(t,e,n){},1918:function(t,e,n){},"281a":function(t,e,n){"use strict";n("d6e7")},"49e5":function(t,e,n){"use strict";n("e3e6")},"569e":function(t,e,n){"use strict";n("1918")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("MainInfo"),n("Header"),n("HeaderMobile"),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"link-container"},[n("div",[n("SubLink",{attrs:{link_style:"main-link",path:"/",text:"Jiaming Qiu"}})],1)]),n("div",{staticClass:"img-container"}),t._m(0),n("ul",{staticClass:"intro"},[n("li",{staticClass:"intro-font link-font"},[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fas","map-marker-alt"]}}),t._v("St. Louis, MO, U.S.A. ")],1),n("li",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fas","envelope"]}}),n("Link",{staticClass:"intro-font link-font",attrs:{path:"mailto:qiujiaming@wustl.edu",text:"Email"}})],1),n("li",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fab","github"]}}),n("Link",{staticClass:"intro-font link-font",attrs:{path:"https://github.com/qiujiaming315",text:"Github"}})],1),n("li",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fab","orcid"]}}),n("Link",{staticClass:"intro-font link-font",attrs:{path:"https://orcid.org/0000-0001-9576-0499",text:"ORCID"}})],1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("p",{staticClass:"intro-info intro-font"},[t._v(" PhD candidate"),n("br"),t._v("Dept. of Computer Science"),n("br"),t._v("Washington University in St. Louis ")])])}],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{class:t.link_style,attrs:{to:t.path}},[t._v(t._s(t.text))])},u=[],f={name:"SubLink",props:{link_style:String,path:String,text:String}},p=f,d=(n("281a"),n("2877")),h=Object(d["a"])(p,l,u,!1,null,"36c83c2c",null),m=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.path}},[t._v(t._s(t.text))])},b=[],g={name:"Link",props:{path:String,text:String}},k=g,_=(n("8b00"),Object(d["a"])(k,v,b,!1,null,"731ee599",null)),x=_.exports,C={name:"MainInfo",components:{SubLink:m,Link:x}},y=C,w=(n("6fc7"),Object(d["a"])(y,r,c,!1,null,"c1a47d0c",null)),S=w.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"link-container"},[n("div",[n("SubLink",{attrs:{link_style:"sub-link",path:"/background",text:"Background"}})],1)]),n("div",{staticClass:"link-container"},[n("div",[n("SubLink",{attrs:{link_style:"sub-link",path:"/publications",text:"Publications"}})],1)])])},j=[],O={name:"Header",components:{SubLink:m}},P=O,E=(n("a808"),Object(d["a"])(P,L,j,!1,null,"48957ec3",null)),M=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"img-container"}),n("div",{staticClass:"intro"},[n("div",[n("SubLink",{attrs:{link_style:"sub-link",path:"/",text:"Jiaming Qiu"}})],1),t._m(0)]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"btn home-div"},[n("div",[n("SubLink",{staticClass:"home-link",attrs:{link_style:"sub-link",path:"/",text:"Jiaming Qiu"}})],1)]),n("div",{staticClass:"btn"},[n("Button",{class:t.divshow[0]?"show":"",attrs:{text:"Navigate",btn_id:0},on:{"btn-click":t.toggle}}),n("div",{staticClass:"btn-expand",style:{height:t.divshow[0]?this.$refs["ul-0"].clientHeight+2*this.$refs["ul-0"].clientTop+"px":"0"}},[n("ul",{ref:"ul-0",staticClass:"expand expand-nav"},[n("li",[n("SubLink",{staticClass:"expand-link",attrs:{path:"/background",text:"Background"}})],1),n("li",[n("SubLink",{staticClass:"expand-link",attrs:{path:"/publications",text:"Publications"}})],1)])])],1),n("div",{staticClass:"btn last"},[n("Button",{class:t.divshow[1]?"show":"",attrs:{text:"Follow",btn_id:1},on:{"btn-click":t.toggle}}),n("div",{staticClass:"btn-expand",style:{height:t.divshow[1]?this.$refs["ul-1"].clientHeight+2*this.$refs["ul-1"].clientTop+"px":"0"}},[n("ul",{ref:"ul-1",staticClass:"expand expand-flw"},[n("li",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fas","envelope"]}}),n("Link",{staticClass:"link-font",attrs:{path:"mailto:qiujiaming@wustl.edu",text:"Email"}})],1),n("li",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fab","github"]}}),n("Link",{staticClass:"link-font",attrs:{path:"https://github.com/qiujiaming315",text:"Github"}})],1),n("li",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fab","orcid"]}}),n("Link",{staticClass:"link-font",attrs:{path:"https://orcid.org/0000-0001-9576-0499",text:"ORCID"}})],1)])])],1)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro-font"},[t._v(" PhD candidate"),n("br"),t._v("Dept. of Computer Science"),n("br"),t._v("Washington University in St. Louis ")])}],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return t.$emit("btn-click",t.btn_id)}}},[t._v(t._s(t.text))])},B=[],H=(n("a9e3"),{name:"Button",props:{text:String,btn_id:Number}}),J=H,D=(n("cd68"),Object(d["a"])(J,T,B,!1,null,"8fb56e4a",null)),U=D.exports,Q={name:"HeaderMobile",components:{SubLink:m,Link:x,Button:U},data:function(){return{divshow:[!1,!1]}},methods:{toggle:function(t){this.$set(this.divshow,t,!this.divshow[t])}}},A=Q,R=(n("49e5"),Object(d["a"])(A,$,I,!1,null,"cff56bde",null)),W=R.exports,q={name:"App",components:{MainInfo:S,Header:M,HeaderMobile:W}},N=q,G=Object(d["a"])(N,s,o,!1,null,null,null),z=G.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainText",{staticClass:"title",attrs:{text:"About"}}),n("p",[t._v(" Welcome to this webpage! I am currently a third year PhD student in the "),n("Link",{attrs:{path:"https://cse.wustl.edu/index.html",text:"Computer Science Department"}}),t._v(" at "),n("Link",{attrs:{path:"https://wustl.edu/",text:"Washington University in St. Louis"}}),t._v(" (WashU), advised by Prof. "),n("Link",{attrs:{path:"https://rochguerin.github.io/",text:"Roch Guerin"}}),t._v(". I received my Bachelor degree in Computer Science in 2020, also from WashU. ")],1),n("p",[t._v(" My research mainly focus on computer networks. Specifically, I am interested in network optimization, edge computing, and applying machine learning techniques to improve the efficiency and flexibility of network systems. ")]),n("p",[t._v(" You can find more information about me from the "),n("router-link",{attrs:{to:"/background"}},[t._v("Background")]),t._v(" section, along with a list of my "),n("router-link",{attrs:{to:"/publications"}},[t._v("Publications")]),t._v(". ")],1)],1)},V=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(t._s(t.text))])},K=[],Y={name:"MainText",props:{text:String}},X=Y,tt=(n("b323"),Object(d["a"])(X,Z,K,!1,null,"65d37b9e",null)),et=tt.exports,nt={name:"Home",components:{MainText:et,Link:x}},it=nt,at=(n("bf61"),Object(d["a"])(it,F,V,!1,null,"63567bf2",null)),st=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainText",{staticClass:"title",attrs:{text:"Background"}}),n("p",[t._v(" I was born and grew up in Nanjing, China. I went to "),n("Link",{attrs:{path:"http://www.nsfz.net/",text:"High School Affiliated to Nanjing Normal University"}}),t._v(" and graduated in 2016. I studied Atmospheric Science for the following two years at "),n("Link",{attrs:{path:"https://cwxy.nuist.edu.cn/",text:"Changwang School of Honors"}}),t._v(" of "),n("Link",{attrs:{path:"https://www.nuist.edu.cn/",text:"Nanjing University of Information Science & Technology"}}),t._v(", during which I developed a strong interest in Computer Science (I'm still interested in Atmospheric Science nevertheless). Later I transferred to "),n("Link",{attrs:{path:"https://wustl.edu/",text:"Washington University in St. Louis"}}),t._v(" and earned my Bachelor degree in Computer Science in 2020. ")],1),n("p",[t._v(" Currently, I continue to stay at WashU to pursue a PhD degree advised by Prof. "),n("Link",{attrs:{path:"https://rochguerin.github.io/",text:"Roch Guerin"}}),t._v(". ")],1),n("p",[t._v(" For more information, please check my "),n("Link",{attrs:{path:"https://qiujiaming315.github.io/data/Jiaming_Qiu_CV20221201.pdf",text:"Curriculum Vitae"}}),t._v(". ")],1)],1)},rt=[],ct={name:"Background",components:{MainText:et,Link:x}},lt=ct,ut=(n("569e"),Object(d["a"])(lt,ot,rt,!1,null,"46fbdb74",null)),ft=ut.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("MainText",{staticClass:"title",attrs:{text:"Publications"}})],1),n("Publication",{attrs:{title:"Adaptive edge offloading for image classification under rate limit",conference:"ACM SIGBED International Conference on Embedded Software (EMSOFT 2022)",authors:[{name:"Jiaming Qiu",link:""},{name:"Ruiqi Wang",link:""},{name:"Ayan Chakrabarti",link:"https://projects.ayanc.org/"},{name:"Roch Guérin",link:"https://rochguerin.github.io/"},{name:"Chenyang Lu",link:"https://www.cse.wustl.edu/~lu/"}],paper:"https://ieeexplore.ieee.org/document/9852802",video:"https://drive.google.com/file/d/1vBp9K2hzNUGaPQejJ_xR40FMSCh76qtu",slides:"https://docs.google.com/presentation/d/1_tz3UT7ev9F0JMhv3vZH-8oE2gD6R0rI"}}),n("Publication",{attrs:{title:"Intensification of hydrological drought due to human activity in the middle reaches of the Yangtze River, China",conference:"Science of the Total Environment (STOTEN 2018)",authors:[{name:"Dan Zhang",link:""},{name:"Qi Zhang",link:""},{name:"Jiaming Qiu",link:""},{name:"Peng Bai",link:""},{name:"Kang Liang",link:""},{name:"Xianghu Li",link:""}],paper:"https://doi.org/10.1016/j.scitotenv.2018.05.121",video:"",slides:""}})],1)},dt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pub"},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("p",{staticClass:"conference"},[t._v(t._s(t.conference))]),n("div",{staticClass:"author-list"},t._l(t.authors,(function(e,i){return n("p",{key:i},["Jiaming Qiu"===e.name?n("span",{staticClass:"self"},[t._v(t._s(e.name))]):""!==e.link?n("Link",{staticClass:"author",attrs:{path:e.link,text:e.name}}):n("span",[t._v(t._s(e.name))]),i!=Object.keys(t.authors).length-1?n("span",[t._v(", ")]):t._e()],1)})),0),n("div",{staticClass:"author-list"},[""!==t.paper?n("div",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fas","file-alt"]}}),n("Link",{attrs:{path:t.paper,text:"Paper"}})],1):t._e(),""!==t.video?n("div",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fas","video"]}}),n("Link",{attrs:{path:t.video,text:"Video"}})],1):t._e(),""!==t.slides?n("div",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:["fas","file-powerpoint"]}}),n("Link",{attrs:{path:t.slides,text:"Slides"}})],1):t._e()])])},mt=[],vt={name:"Publication",props:{title:String,conference:String,authors:Array,paper:String,video:String,slides:String},components:{Link:x}},bt=vt,gt=(n("6f5e"),Object(d["a"])(bt,ht,mt,!1,null,"ea088064",null)),kt=gt.exports,_t={name:"Publications",components:{MainText:et,Publication:kt}},xt=_t,Ct=(n("7549"),Object(d["a"])(xt,pt,dt,!1,null,"31f74a9c",null)),yt=Ct.exports,wt=[{path:"/",name:"Home",component:st,meta:{title:"Jiaming Qiu's webpage"}},{path:"/background",name:"Background",component:ft,meta:{title:"Background"}},{path:"/publications",name:"Publications",component:yt,meta:{title:"Publications"}}],St=new a["a"]({routes:wt}),Lt="Jiaming Qiu's webpage";St.afterEach((function(t){i["a"].nextTick((function(){document.title=t.meta.title||Lt}))}));var jt=St,Ot=n("ecee"),Pt=n("c074"),Et=n("f2d1"),Mt=n("ad3d");Ot["c"].add(Pt["d"],Pt["a"],Pt["b"],Pt["e"],Pt["c"],Et["a"],Et["b"]),i["a"].component("font-awesome-icon",Mt["a"]),i["a"].config.productionTip=!1,i["a"].use(a["a"]),new i["a"]({render:function(t){return t(z)},router:jt}).$mount("#app")},6893:function(t,e,n){},"6f5e":function(t,e,n){"use strict";n("a281")},"6fc7":function(t,e,n){"use strict";n("6893")},7549:function(t,e,n){"use strict";n("da29")},8118:function(t,e,n){},"8b00":function(t,e,n){"use strict";n("8118")},a281:function(t,e,n){},a808:function(t,e,n){"use strict";n("bf84")},adfa:function(t,e,n){},b323:function(t,e,n){"use strict";n("097f")},bf61:function(t,e,n){"use strict";n("f2fd")},bf84:function(t,e,n){},cd68:function(t,e,n){"use strict";n("adfa")},d6e7:function(t,e,n){},da29:function(t,e,n){},e3e6:function(t,e,n){},f2fd:function(t,e,n){}});
//# sourceMappingURL=app.757e0c0f.js.map