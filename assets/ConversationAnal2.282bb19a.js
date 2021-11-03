var kt=Object.defineProperty,wt=Object.defineProperties;var zt=Object.getOwnPropertyDescriptors;var rt=Object.getOwnPropertySymbols;var xt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var ct=(e,a,s)=>a in e?kt(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,ht=(e,a)=>{for(var s in a||(a={}))xt.call(a,s)&&ct(e,s,a[s]);if(rt)for(var s of rt(a))Mt.call(a,s)&&ct(e,s,a[s]);return e},dt=(e,a)=>wt(e,zt(a));import{m as P,n as Tt,l as $t,o as R,c as X,b as g,t as J,a as Q,p as et,e as nt,u as mt,q as St,M as jt,s as Et,v as It,B as Dt,x as Vt,y as Kt}from"./vendor.5e3fbbc5.js";import{s as q,d as Bt,T as ot,i as at,a as st}from"./transform.f235dda1.js";import{L as Ct}from"./LineChart.68fab9e7.js";import{_ as W}from"./index.74213ab3.js";function Yt(e){let a;for(;a=e.sourceEvent;)e=a;return e}function L(e,a){if(e=Yt(e),a===void 0&&(a=e.currentTarget),a){var s=a.ownerSVGElement||a;if(s.createSVGPoint){var o=s.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(a.getScreenCTM().inverse()),[o.x,o.y]}if(a.getBoundingClientRect){var _=a.getBoundingClientRect();return[e.clientX-_.left-a.clientLeft,e.clientY-_.top-a.clientTop]}}return[e.pageX,e.pageY]}const it={capture:!0,passive:!1};function ut(e){e.preventDefault(),e.stopImmediatePropagation()}function At(e){var a=e.document.documentElement,s=q(e).on("dragstart.drag",ut,it);"onselectstart"in a?s.on("selectstart.drag",ut,it):(a.__noselect=a.style.MozUserSelect,a.style.MozUserSelect="none")}function Pt(e,a){var s=e.document.documentElement,o=q(e).on("dragstart.drag",null);a&&(o.on("click.drag",ut,it),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in s?o.on("selectstart.drag",null):(s.style.MozUserSelect=s.__noselect,delete s.__noselect)}var qt=1e-12;function ft(e){return((e=Math.exp(e))+1/e)/2}function Gt(e){return((e=Math.exp(e))-1/e)/2}function Rt(e){return((e=Math.exp(2*e))-1)/(e+1)}var Xt=function e(a,s,o){function _(p,r){var d=p[0],z=p[1],k=p[2],x=r[0],l=r[1],v=r[2],b=x-d,I=l-z,j=b*b+I*I,B,c;if(j<qt)c=Math.log(v/k)/a,B=function(A){return[d+A*b,z+A*I,k*Math.exp(a*A*c)]};else{var C=Math.sqrt(j),D=(v*v-k*k+o*j)/(2*k*s*C),G=(v*v-k*k-o*j)/(2*v*s*C),Y=Math.log(Math.sqrt(D*D+1)-D),T=Math.log(Math.sqrt(G*G+1)-G);c=(T-Y)/a,B=function(A){var U=A*c,O=ft(Y),H=k/(s*C)*(O*Rt(a*U+Y)-Gt(Y));return[d+H*b,z+H*I,k*O/ft(a*U+Y)]}}return B.duration=c*1e3*a/Math.SQRT2,B}return _.rho=function(p){var r=Math.max(.001,+p),d=r*r,z=d*d;return e(r,d,z)},_}(Math.SQRT2,2,4),Z=e=>()=>e;function Lt(e,{sourceEvent:a,target:s,transform:o,dispatch:_}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:a,enumerable:!0,configurable:!0},target:{value:s,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:_}})}function lt(e){e.stopImmediatePropagation()}function N(e){e.preventDefault(),e.stopImmediatePropagation()}function Jt(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Nt(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function pt(){return this.__zoom||at}function Ut(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Ot(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ht(e,a,s){var o=e.invertX(a[0][0])-s[0][0],_=e.invertX(a[1][0])-s[1][0],p=e.invertY(a[0][1])-s[0][1],r=e.invertY(a[1][1])-s[1][1];return e.translate(_>o?(o+_)/2:Math.min(0,o)||Math.max(0,_),r>p?(p+r)/2:Math.min(0,p)||Math.max(0,r))}function Qt(){var e=Jt,a=Nt,s=Ht,o=Ut,_=Ot,p=[0,1/0],r=[[-1/0,-1/0],[1/0,1/0]],d=250,z=Xt,k=Bt("start","zoom","end"),x,l,v,b=500,I=150,j=0,B=10;function c(t){t.property("__zoom",pt).on("wheel.zoom",U,{passive:!1}).on("mousedown.zoom",O).on("dblclick.zoom",H).filter(_).on("touchstart.zoom",_t).on("touchmove.zoom",yt).on("touchend.zoom touchcancel.zoom",bt).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}c.transform=function(t,i,n,u){var h=t.selection?t.selection():t;h.property("__zoom",pt),t!==h?Y(t,i,n,u):h.interrupt().each(function(){T(this,arguments).event(u).start().zoom(null,typeof i=="function"?i.apply(this,arguments):i).end()})},c.scaleBy=function(t,i,n,u){c.scaleTo(t,function(){var h=this.__zoom.k,m=typeof i=="function"?i.apply(this,arguments):i;return h*m},n,u)},c.scaleTo=function(t,i,n,u){c.transform(t,function(){var h=a.apply(this,arguments),m=this.__zoom,f=n==null?G(h):typeof n=="function"?n.apply(this,arguments):n,y=m.invert(f),w=typeof i=="function"?i.apply(this,arguments):i;return s(D(C(m,w),f,y),h,r)},n,u)},c.translateBy=function(t,i,n,u){c.transform(t,function(){return s(this.__zoom.translate(typeof i=="function"?i.apply(this,arguments):i,typeof n=="function"?n.apply(this,arguments):n),a.apply(this,arguments),r)},null,u)},c.translateTo=function(t,i,n,u,h){c.transform(t,function(){var m=a.apply(this,arguments),f=this.__zoom,y=u==null?G(m):typeof u=="function"?u.apply(this,arguments):u;return s(at.translate(y[0],y[1]).scale(f.k).translate(typeof i=="function"?-i.apply(this,arguments):-i,typeof n=="function"?-n.apply(this,arguments):-n),m,r)},u,h)};function C(t,i){return i=Math.max(p[0],Math.min(p[1],i)),i===t.k?t:new ot(i,t.x,t.y)}function D(t,i,n){var u=i[0]-n[0]*t.k,h=i[1]-n[1]*t.k;return u===t.x&&h===t.y?t:new ot(t.k,u,h)}function G(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function Y(t,i,n,u){t.on("start.zoom",function(){T(this,arguments).event(u).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(u).end()}).tween("zoom",function(){var h=this,m=arguments,f=T(h,m).event(u),y=a.apply(h,m),w=n==null?G(y):typeof n=="function"?n.apply(h,m):n,E=Math.max(y[1][0]-y[0][0],y[1][1]-y[0][1]),M=h.__zoom,$=typeof i=="function"?i.apply(h,m):i,V=z(M.invert(w).concat(E/M.k),$.invert(w).concat(E/$.k));return function(S){if(S===1)S=$;else{var K=V(S),tt=E/K[2];S=new ot(tt,w[0]-K[0]*tt,w[1]-K[1]*tt)}f.zoom(null,S)}})}function T(t,i,n){return!n&&t.__zooming||new A(t,i)}function A(t,i){this.that=t,this.args=i,this.active=0,this.sourceEvent=null,this.extent=a.apply(t,i),this.taps=0}A.prototype={event:function(t){return t&&(this.sourceEvent=t),this},start:function(){return++this.active==1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,i){return this.mouse&&t!=="mouse"&&(this.mouse[1]=i.invert(this.mouse[0])),this.touch0&&t!=="touch"&&(this.touch0[1]=i.invert(this.touch0[0])),this.touch1&&t!=="touch"&&(this.touch1[1]=i.invert(this.touch1[0])),this.that.__zoom=i,this.emit("zoom"),this},end:function(){return--this.active==0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){var i=q(this.that).datum();k.call(t,this.that,new Lt(t,{sourceEvent:this.sourceEvent,target:c,type:t,transform:this.that.__zoom,dispatch:k}),i)}};function U(t,...i){if(!e.apply(this,arguments))return;var n=T(this,i).event(t),u=this.__zoom,h=Math.max(p[0],Math.min(p[1],u.k*Math.pow(2,o.apply(this,arguments)))),m=L(t);if(n.wheel)(n.mouse[0][0]!==m[0]||n.mouse[0][1]!==m[1])&&(n.mouse[1]=u.invert(n.mouse[0]=m)),clearTimeout(n.wheel);else{if(u.k===h)return;n.mouse=[m,u.invert(m)],st(this),n.start()}N(t),n.wheel=setTimeout(f,I),n.zoom("mouse",s(D(C(u,h),n.mouse[0],n.mouse[1]),n.extent,r));function f(){n.wheel=null,n.end()}}function O(t,...i){if(v||!e.apply(this,arguments))return;var n=t.currentTarget,u=T(this,i,!0).event(t),h=q(t.view).on("mousemove.zoom",w,!0).on("mouseup.zoom",E,!0),m=L(t,n),f=t.clientX,y=t.clientY;At(t.view),lt(t),u.mouse=[m,this.__zoom.invert(m)],st(this),u.start();function w(M){if(N(M),!u.moved){var $=M.clientX-f,V=M.clientY-y;u.moved=$*$+V*V>j}u.event(M).zoom("mouse",s(D(u.that.__zoom,u.mouse[0]=L(M,n),u.mouse[1]),u.extent,r))}function E(M){h.on("mousemove.zoom mouseup.zoom",null),Pt(M.view,u.moved),N(M),u.event(M).end()}}function H(t,...i){if(!!e.apply(this,arguments)){var n=this.__zoom,u=L(t.changedTouches?t.changedTouches[0]:t,this),h=n.invert(u),m=n.k*(t.shiftKey?.5:2),f=s(D(C(n,m),u,h),a.apply(this,i),r);N(t),d>0?q(this).transition().duration(d).call(Y,f,u,t):q(this).call(c.transform,f,u,t)}}function _t(t,...i){if(!!e.apply(this,arguments)){var n=t.touches,u=n.length,h=T(this,i,t.changedTouches.length===u).event(t),m,f,y,w;for(lt(t),f=0;f<u;++f)y=n[f],w=L(y,this),w=[w,this.__zoom.invert(w),y.identifier],h.touch0?!h.touch1&&h.touch0[2]!==w[2]&&(h.touch1=w,h.taps=0):(h.touch0=w,m=!0,h.taps=1+!!x);x&&(x=clearTimeout(x)),m&&(h.taps<2&&(l=w[0],x=setTimeout(function(){x=null},b)),st(this),h.start())}}function yt(t,...i){if(!!this.__zooming){var n=T(this,i).event(t),u=t.changedTouches,h=u.length,m,f,y,w;for(N(t),m=0;m<h;++m)f=u[m],y=L(f,this),n.touch0&&n.touch0[2]===f.identifier?n.touch0[0]=y:n.touch1&&n.touch1[2]===f.identifier&&(n.touch1[0]=y);if(f=n.that.__zoom,n.touch1){var E=n.touch0[0],M=n.touch0[1],$=n.touch1[0],V=n.touch1[1],S=(S=$[0]-E[0])*S+(S=$[1]-E[1])*S,K=(K=V[0]-M[0])*K+(K=V[1]-M[1])*K;f=C(f,Math.sqrt(S/K)),y=[(E[0]+$[0])/2,(E[1]+$[1])/2],w=[(M[0]+V[0])/2,(M[1]+V[1])/2]}else if(n.touch0)y=n.touch0[0],w=n.touch0[1];else return;n.zoom("touch",s(D(f,y,w),n.extent,r))}}function bt(t,...i){if(!!this.__zooming){var n=T(this,i).event(t),u=t.changedTouches,h=u.length,m,f;for(lt(t),v&&clearTimeout(v),v=setTimeout(function(){v=null},b),m=0;m<h;++m)f=u[m],n.touch0&&n.touch0[2]===f.identifier?delete n.touch0:n.touch1&&n.touch1[2]===f.identifier&&delete n.touch1;if(n.touch1&&!n.touch0&&(n.touch0=n.touch1,delete n.touch1),n.touch0)n.touch0[1]=this.__zoom.invert(n.touch0[0]);else if(n.end(),n.taps===2&&(f=L(f,this),Math.hypot(l[0]-f[0],l[1]-f[1])<B)){var y=q(this).on("dblclick.zoom");y&&y.apply(this,arguments)}}}return c.wheelDelta=function(t){return arguments.length?(o=typeof t=="function"?t:Z(+t),c):o},c.filter=function(t){return arguments.length?(e=typeof t=="function"?t:Z(!!t),c):e},c.touchable=function(t){return arguments.length?(_=typeof t=="function"?t:Z(!!t),c):_},c.extent=function(t){return arguments.length?(a=typeof t=="function"?t:Z([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),c):a},c.scaleExtent=function(t){return arguments.length?(p[0]=+t[0],p[1]=+t[1],c):[p[0],p[1]]},c.translateExtent=function(t){return arguments.length?(r[0][0]=+t[0][0],r[1][0]=+t[1][0],r[0][1]=+t[0][1],r[1][1]=+t[1][1],c):[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},c.constrain=function(t){return arguments.length?(s=t,c):s},c.duration=function(t){return arguments.length?(d=+t,c):d},c.interpolate=function(t){return arguments.length?(z=t,c):z},c.on=function(){var t=k.on.apply(k,arguments);return t===k?c:t},c.clickDistance=function(t){return arguments.length?(j=(t=+t)*t,c):Math.sqrt(j)},c.tapDistance=function(t){return arguments.length?(B=+t,c):B},c}const Wt={class:"treeview"},Zt={width:"100%",height:"100%"},Ft=["transform"],te={props:["selected","nodes","edges"],emits:["selected"],setup(e,{emit:a}){const s=e,o=P(JSON.parse(localStorage.getItem("treeview-transform"))||{x:0,y:0,k:1});return Tt(function(){localStorage.setItem("treeview-transform",JSON.stringify(o.value))}),$t(function(){const _=q(".treeview").select("svg"),p=_.select("g"),r=Qt().scaleExtent([.02,2]).filter(l=>!l.ctrlKey&&!l.shiftKey).on("zoom",l=>{o.value={x:l.transform.x,y:l.transform.y,k:l.transform.k},p.attr("transform",l.transform)});_.call(r).call(r.transform,at.translate(o.value.x,o.value.y).scale(o.value.k)).on("dblclick.zoom",null);const d=32,z=4,k=1;p.selectAll("line").data(s.edges).join("line").attr("x1",l=>s.nodes.find(b=>b.id===l.from).pos.x*d+z/2*d).attr("y1",l=>s.nodes.find(b=>b.id===l.from).pos.y*d+k*d).attr("x2",l=>s.nodes.find(b=>b.id===l.to).pos.x*d+z/2*d).attr("y2",l=>s.nodes.find(b=>b.id===l.to).pos.y*d).attr("stroke","#444444").attr("stroke-width",2);const x=p.selectAll("g").data(s.nodes).join("g");x.append("rect").attr("fill","white").attr("stroke",l=>l.id===s.selected?"#cc4444":"#444444").attr("stroke-width",1).attr("width",z*d).attr("height",k*d).attr("rx",6).attr("x",l=>l.pos.x*d).attr("y",l=>l.pos.y*d).attr("cursor","pointer").on("click",(l,v)=>{a("selected",v.id)}),x.append("text").attr("fill","black").attr("x",l=>l.pos.x*d+d/4).attr("y",l=>l.pos.y*d+k*d/2+d/16).attr("font-size","7px").attr("pointer-events","none").text(l=>l.label.length>30?`${l.label.substr(0,30)}...`:l.label)}),(_,p)=>(R(),X("div",Wt,[(R(),X("svg",Zt,[g("g",{transform:`translate(${o.value.x},${o.value.y}) scale(${o.value.k})`},null,8,Ft)]))]))}};var ee=W(te,[["__scopeId","data-v-5c0bb1e9"]]);const vt=e=>(et("data-v-1bf8f54a"),e=e(),nt(),e),ne={class:"datacont"},oe={key:0,class:"cont-item graph"},ae=vt(()=>g("h4",null,"Ei vastauksia",-1)),se={key:1,class:"cont-item graph"},ie={class:"cont-item treeview"},ue=vt(()=>g("h3",null,"Keskustelupuu",-1)),le={props:["answers","nodes","edges"],setup(e){const a=e,s=P(0),o=P(""),_=P(0),p=P([]),r=P([]),d=P(new Set);function z(x,l=0){if(l>10){console.error("Too much recursion at setReplies");return}p.value.splice(0),r.value.splice(0),d.value.clear();for(let v=0;v<a.edges.length;++v){const b=a.edges[v];if(b.from===x){if(!b.label){z(b.to,l+1);return}p.value.push(b.label);const I=a.answers.get(b.id),j=I?I.count:0;r.value.push(j),d.value.add(b.to)}}_.value=r.value.reduce((v,b)=>v+b,0)}function k(x){s.value=x,o.value=a.nodes.find(l=>l.id===Number(s.value)).label,z(x)}return k(0),(x,l)=>(R(),X("div",ne,[_.value===0?(R(),X("div",oe,[g("h3",null,"Kysymys: "+J(o.value),1),ae])):(R(),X("div",se,[g("h3",null,"Kysymys: "+J(o.value),1),g("h4",null,J(_.value)+" vastausta",1),Q(Ct,{key:`${s.value}-${r.value.join()}`,labels:p.value,data:r.value},null,8,["labels","data"])])),g("div",ie,[ue,Q(ee,{onSelected:k,key:`${s.value}-${r.value.join()}`,selected:s.value,nodes:e.nodes,edges:e.edges},null,8,["selected","nodes","edges"])])]))}};var re=W(le,[["__scopeId","data-v-1bf8f54a"]]);const F=e=>(et("data-v-51e6a392"),e=e(),nt(),e),ce={class:"datacont"},he={class:"cont-item"},de=F(()=>g("div",{class:"head"},[g("h3",null,"K\xE4ytt\xE4ji\xE4")],-1)),me={class:"cont-item"},fe=F(()=>g("div",{class:"head"},[g("h3",null,"Viestej\xE4")],-1)),pe=F(()=>g("div",{class:"cont-item"},[g("div",{class:"head"},[g("h3",null,"Lorem ipsum")]),g("h4",null,"62%")],-1)),ve=F(()=>g("div",{class:"cont-item"},[g("div",{class:"head"},[g("h3",null,"Loppuunviedyt keskustelut")]),g("h4",null,"92%")],-1)),ge={props:["answers","nodes","edges"],setup(e){const a=e,s=Array.from(a.answers.values()).map(r=>r.uids).flat(),o=Array.from(a.answers.values()).map(r=>r.count),_=new Set(s).size,p=o.reduce((r,d)=>r+d,0);return(r,d)=>(R(),X("div",ce,[g("div",he,[de,g("h4",null,J(mt(_)),1)]),g("div",me,[fe,g("h4",null,J(mt(p)),1)]),pe,ve]))}};var _e=W(ge,[["__scopeId","data-v-51e6a392"]]);const gt=e=>(et("data-v-8fa16992"),e=e(),nt(),e),ye={class:"cont"},be={class:"cont-row"},ke=gt(()=>g("h3",{class:"card-title"},"Yleistietoa",-1)),we={class:"card"},ze={class:"cont-row"},xe=gt(()=>g("h3",{class:"card-title"},"Keskustelutiedot",-1)),Me={class:"card"},Te={setup(e){const a=P(new Map),s=St("db");let o=0;const _=[{id:o++,pos:{x:0,y:0*2},label:"Beep-boop, olen UKV-botti \u{1F916}. Minulla olisi muutama kysymys Krapin bootcapmista"},{id:o++,pos:{x:0,y:1*2},label:"Voit keskustella minun kanssani painamalla alla olevia vaihtoehtoja. Kaikki vastaukset ovat t\xE4ysin anonyymej\xE4, jotenka voit vastata niihin huoletta"},{id:o++,pos:{x:0,y:2*2},label:"Ty\xF6stimme eilen oppiraportteja. Miss\xE4 vaiheessa arvioisit teid\xE4n raporttinne olevan?"},{id:o++,pos:{x:0,y:3*2},label:"Miten arvioisitte eilisen illallisen?"},{id:o++,pos:{x:0,y:4*2},label:"Monta tuntia sait nukuttua viime y\xF6n\xE4?"},{id:o++,pos:{x:-6,y:5*2},label:"Hienoa!"},{id:o++,pos:{x:-2,y:5*2},label:"Muutaman p\xE4iv\xE4n selvi\xE4\xE4 hieman alhaisemmalla unim\xE4\xE4r\xE4ll\xE4, mutta pidemm\xE4n p\xE4\xE4lle kannattaa nukkua yli kahdeksan tuntia p\xE4iv\xE4ss\xE4. Jos p\xE4iv\xE4n aikana alkaa v\xE4sytt\xE4m\xE4\xE4n, niin kannattaa harkita lyhyit\xE4 10 minuutin p\xE4iv\xE4unia"},{id:o++,pos:{x:2,y:5*2},label:"Y\xF6unien suositeltu mitta on v\xE4hint\xE4\xE4n kahdeksan tuntia. Jo yhden tunnin ylim\xE4\xE4r\xE4inen y\xF6uni saa ihmeit\xE4 aikaan, olet virke\xE4mpi, innovatiivisempi ja muisti lakkaa p\xE4tkim\xE4st\xE4."},{id:o++,pos:{x:6,y:5*2},label:"Jos olet autolla matkassa, niin kannattaa ottaa p\xE4iv\xE4unet ennen l\xE4ht\xF6\xE4. V\xE4h\xE4isten y\xF6unien vaikutus ajamiseen on verrattavissa humalatilaan"},{id:o++,pos:{x:0,y:6*2},label:"Asteikolla 1-5, miten yleisesti arvioisit minun kanssani keskustelemista?"},{id:o++,pos:{x:0,y:7*2},label:"Kiitos vastauksistasi, ja mukavaa p\xE4iv\xE4njatkoa!"}];o=0;const p=[{id:o++,from:0,to:1,label:null},{id:o++,from:1,to:2,label:"Haluan vastata Krapin kyselyyn"},{id:o++,from:2,to:3,label:"Sen on valmis"},{id:o++,from:2,to:3,label:"Viimeistely\xE4 vaille valmis"},{id:o++,from:2,to:3,label:"Se on noin puoliv\xE4liss\xE4"},{id:o++,from:2,to:3,label:"Vasta alkuvaiheissa"},{id:o++,from:3,to:4,label:"\u2B50\u2B50\u2B50\u2B50\u2B50"},{id:o++,from:3,to:4,label:"\u2B50\u2B50\u2B50\u2B50"},{id:o++,from:3,to:4,label:"\u2B50\u2B50\u2B50"},{id:o++,from:3,to:4,label:"\u2B50\u2B50"},{id:o++,from:3,to:4,label:"\u2B50"},{id:o++,from:4,to:5,label:"Yli 8 tuntia"},{id:o++,from:4,to:6,label:"6-8 tuntia"},{id:o++,from:4,to:7,label:"4-6 tuntia"},{id:o++,from:4,to:8,label:"Alle 4 tuntia"},{id:o++,from:5,to:9,label:null},{id:o++,from:6,to:9,label:null},{id:o++,from:7,to:9,label:null},{id:o++,from:8,to:9,label:null},{id:o++,from:9,to:10,label:"5"},{id:o++,from:9,to:10,label:"4"},{id:o++,from:9,to:10,label:"3"},{id:o++,from:9,to:10,label:"2"},{id:o++,from:9,to:10,label:"1"}];async function r(){if(!s)return;console.log("fetching");const d=new Date(Date.now()-2*60*60*1e3),z=jt(Vt(s,"conversations"),Dt("timestamp",">",d),It("timestamp","desc"),Et(1e3));(await Kt(z)).forEach(x=>{const l=x.data(),v=a.value.get(l.edge_id)||{count:0,from:l.parent,to:l.next,label:l.label,timestamps:[],uids:[]};a.value.set(l.edge_id,dt(ht({},v),{count:v.count+1,timestamps:v.timestamps.concat(l.timestamp),uids:v.uids.concat(l.uid)}))})}return r(),(d,z)=>(R(),X("div",ye,[g("div",be,[ke,g("div",we,[Q(_e,{key:a.value.size,nodes:_,edges:p,answers:a.value},null,8,["answers"])])]),g("div",ze,[xe,g("div",Me,[Q(re,{key:a.value.size,nodes:_,edges:p,answers:a.value},null,8,["answers"])])])]))}};var De=W(Te,[["__scopeId","data-v-8fa16992"]]);export{De as default};