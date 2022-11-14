(self.webpackChunkantd=self.webpackChunkantd||[]).push([[92496],{92496:function(F,s,o){"use strict";o.r(s);var C=o(67294),m=o(13669),n=o(97005),c=o(13946),l=function(){return(0,c.tZ)(m.Alert,{banner:!0,message:(0,c.tZ)(n.Z,{pauseOnHover:!0,gradient:!1},"I can be a React component, multiple React components, or just some text.")})};s.default=l},97005:function(F,s,o){var C;function m(e){if(!e||typeof window=="undefined")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}C={value:!0};var n=o(67294);function c(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var l=c(n);var u=function(){return u=Object.assign||function(t){for(var r,a=1,i=arguments.length;a<i;a++){r=arguments[a];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(t[d]=r[d])}return t},u.apply(this,arguments)};m(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var X=function(e){var t,r,a,i,d=e.style,G=d===void 0?{}:d,w=e.className,$=w===void 0?"":w,O=e.play,v=O===void 0?!0:O,b=e.pauseOnHover,R=b===void 0?!1:b,M=e.pauseOnClick,x=M===void 0?!1:M,W=e.direction,A=W===void 0?"left":W,k=e.speed,q=k===void 0?20:k,D=e.delay,P=D===void 0?0:D,L=e.loop,f=L===void 0?0:L,I=e.gradient,J=I===void 0?!0:I,B=e.gradientColor,p=B===void 0?[255,255,255]:B,N=e.gradientWidth,y=N===void 0?200:N,Q=e.onFinish,V=e.onCycleComplete,j=e.children,T=n.useState(0),Z=T[0],Y=T[1],z=n.useState(0),H=z[0],ee=z[1],K=n.useState(!1),g=K[0],ne=K[1],h=n.useRef(null),_=n.useRef(null);n.useEffect(function(){if(!!g){var E=function(){_.current&&h.current&&(Y(h.current.getBoundingClientRect().width),ee(_.current.getBoundingClientRect().width))};return E(),window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}}},[g]),n.useEffect(function(){ne(!0)},[]);var S="rgba("+p[0]+", "+p[1]+", "+p[2],U=H<Z?Z/q:H/q;return l.default.createElement(n.Fragment,null,g?l.default.createElement("div",{ref:h,style:u(u({},G),(t={},t["--pause-on-hover"]=!v||R?"paused":"running",t["--pause-on-click"]=!v||R&&!x||x?"paused":"running",t)),className:$+" marquee-container"},J&&l.default.createElement("div",{style:(r={},r["--gradient-color"]=S+", 1), "+S+", 0)",r["--gradient-width"]=typeof y=="number"?y+"px":y,r),className:"overlay"}),l.default.createElement("div",{ref:_,style:(a={},a["--play"]=v?"running":"paused",a["--direction"]=A==="left"?"normal":"reverse",a["--duration"]=U+"s",a["--delay"]=P+"s",a["--iteration-count"]=f?""+f:"infinite",a),className:"marquee",onAnimationIteration:V,onAnimationEnd:Q},j),l.default.createElement("div",{style:(i={},i["--play"]=v?"running":"paused",i["--direction"]=A==="left"?"normal":"reverse",i["--duration"]=U+"s",i["--delay"]=P+"s",i["--iteration-count"]=f?""+f:"infinite",i),className:"marquee","aria-hidden":"true"},j)):null)};s.Z=X}}]);
