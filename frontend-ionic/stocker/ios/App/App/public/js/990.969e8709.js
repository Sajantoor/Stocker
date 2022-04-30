"use strict";(self["webpackChunkstocker"]=self["webpackChunkstocker"]||[]).push([[990],{990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return s}});var r=n(587),o=n(545),c=n(515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,i)=>{const a=t.ownerDocument.defaultView,u=(0,o.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=a.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,k=t=>h(t)&&e(),f=t=>{const e=l(t),n=e/a.innerWidth;s(n)},w=t=>{const e=l(t),n=a.innerWidth,o=e/n,c=d(t),s=n/2,u=c>=0&&(c>.2||e>s),h=u?1-o:o,k=h*n;let f=0;if(k>5){const t=k/Math.abs(c);f=Math.min(t,540)}i(u,o<=0?.01:(0,r.j)(0,o,.9999),f)};return(0,c.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:k,onStart:n,onMove:f,onEnd:w})}}}]);
//# sourceMappingURL=990.969e8709.js.map