var Zb=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var XO=Zb((ZO,ml)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();var Yf={exports:{}},Na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function $b(){if(N_)return Na;N_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:s,type:a,key:h,ref:o!==void 0?o:null,props:u}}return Na.Fragment=e,Na.jsx=i,Na.jsxs=i,Na}var O_;function Jb(){return O_||(O_=1,Yf.exports=$b()),Yf.exports}var Q=Jb(),Ff={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function eT(){if(M_)return ie;M_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function b(y){return y===null||typeof y!="object"?null:(y=T&&y[T]||y["@@iterator"],typeof y=="function"?y:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,$={};function F(y,v,D){this.props=y,this.context=v,this.refs=$,this.updater=D||U}F.prototype.isReactComponent={},F.prototype.setState=function(y,v){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,v,"setState")},F.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Oe(){}Oe.prototype=F.prototype;function ze(y,v,D){this.props=y,this.context=v,this.refs=$,this.updater=D||U}var _e=ze.prototype=new Oe;_e.constructor=ze,H(_e,F.prototype),_e.isPureReactComponent=!0;var Re=Array.isArray,ne={H:null,A:null,T:null,S:null,V:null},We=Object.prototype.hasOwnProperty;function Pe(y,v,D,x,z,V){return D=V.ref,{$$typeof:s,type:y,key:v,ref:D!==void 0?D:null,props:V}}function Ie(y,v){return Pe(y.type,v,void 0,void 0,void 0,y.props)}function Me(y){return typeof y=="object"&&y!==null&&y.$$typeof===s}function st(y){var v={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(D){return v[D]})}var Lt=/\/+/g;function rt(y,v){return typeof y=="object"&&y!==null&&y.key!=null?st(""+y.key):v.toString(36)}function Nn(){}function gn(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Nn,Nn):(y.status="pending",y.then(function(v){y.status==="pending"&&(y.status="fulfilled",y.value=v)},function(v){y.status==="pending"&&(y.status="rejected",y.reason=v)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Ze(y,v,D,x,z){var V=typeof y;(V==="undefined"||V==="boolean")&&(y=null);var B=!1;if(y===null)B=!0;else switch(V){case"bigint":case"string":case"number":B=!0;break;case"object":switch(y.$$typeof){case s:case e:B=!0;break;case E:return B=y._init,Ze(B(y._payload),v,D,x,z)}}if(B)return z=z(y),B=x===""?"."+rt(y,0):x,Re(z)?(D="",B!=null&&(D=B.replace(Lt,"$&/")+"/"),Ze(z,v,D,"",function(he){return he})):z!=null&&(Me(z)&&(z=Ie(z,D+(z.key==null||y&&y.key===z.key?"":(""+z.key).replace(Lt,"$&/")+"/")+B)),v.push(z)),1;B=0;var G=x===""?".":x+":";if(Re(y))for(var Y=0;Y<y.length;Y++)x=y[Y],V=G+rt(x,Y),B+=Ze(x,v,D,V,z);else if(Y=b(y),typeof Y=="function")for(y=Y.call(y),Y=0;!(x=y.next()).done;)x=x.value,V=G+rt(x,Y++),B+=Ze(x,v,D,V,z);else if(V==="object"){if(typeof y.then=="function")return Ze(gn(y),v,D,x,z);throw v=String(y),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return B}function O(y,v,D){if(y==null)return y;var x=[],z=0;return Ze(y,x,"","",function(V){return v.call(D,V,z++)}),x}function q(y){if(y._status===-1){var v=y._result;v=v(),v.then(function(D){(y._status===0||y._status===-1)&&(y._status=1,y._result=D)},function(D){(y._status===0||y._status===-1)&&(y._status=2,y._result=D)}),y._status===-1&&(y._status=0,y._result=v)}if(y._status===1)return y._result.default;throw y._result}var X=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ve(){}return ie.Children={map:O,forEach:function(y,v,D){O(y,function(){v.apply(this,arguments)},D)},count:function(y){var v=0;return O(y,function(){v++}),v},toArray:function(y){return O(y,function(v){return v})||[]},only:function(y){if(!Me(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ie.Component=F,ie.Fragment=i,ie.Profiler=o,ie.PureComponent=ze,ie.StrictMode=a,ie.Suspense=g,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,ie.__COMPILER_RUNTIME={__proto__:null,c:function(y){return ne.H.useMemoCache(y)}},ie.cache=function(y){return function(){return y.apply(null,arguments)}},ie.cloneElement=function(y,v,D){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var x=H({},y.props),z=y.key,V=void 0;if(v!=null)for(B in v.ref!==void 0&&(V=void 0),v.key!==void 0&&(z=""+v.key),v)!We.call(v,B)||B==="key"||B==="__self"||B==="__source"||B==="ref"&&v.ref===void 0||(x[B]=v[B]);var B=arguments.length-2;if(B===1)x.children=D;else if(1<B){for(var G=Array(B),Y=0;Y<B;Y++)G[Y]=arguments[Y+2];x.children=G}return Pe(y.type,z,void 0,void 0,V,x)},ie.createContext=function(y){return y={$$typeof:h,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:u,_context:y},y},ie.createElement=function(y,v,D){var x,z={},V=null;if(v!=null)for(x in v.key!==void 0&&(V=""+v.key),v)We.call(v,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(z[x]=v[x]);var B=arguments.length-2;if(B===1)z.children=D;else if(1<B){for(var G=Array(B),Y=0;Y<B;Y++)G[Y]=arguments[Y+2];z.children=G}if(y&&y.defaultProps)for(x in B=y.defaultProps,B)z[x]===void 0&&(z[x]=B[x]);return Pe(y,V,void 0,void 0,null,z)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(y){return{$$typeof:d,render:y}},ie.isValidElement=Me,ie.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:q}},ie.memo=function(y,v){return{$$typeof:m,type:y,compare:v===void 0?null:v}},ie.startTransition=function(y){var v=ne.T,D={};ne.T=D;try{var x=y(),z=ne.S;z!==null&&z(D,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(ve,X)}catch(V){X(V)}finally{ne.T=v}},ie.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},ie.use=function(y){return ne.H.use(y)},ie.useActionState=function(y,v,D){return ne.H.useActionState(y,v,D)},ie.useCallback=function(y,v){return ne.H.useCallback(y,v)},ie.useContext=function(y){return ne.H.useContext(y)},ie.useDebugValue=function(){},ie.useDeferredValue=function(y,v){return ne.H.useDeferredValue(y,v)},ie.useEffect=function(y,v,D){var x=ne.H;if(typeof D=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return x.useEffect(y,v)},ie.useId=function(){return ne.H.useId()},ie.useImperativeHandle=function(y,v,D){return ne.H.useImperativeHandle(y,v,D)},ie.useInsertionEffect=function(y,v){return ne.H.useInsertionEffect(y,v)},ie.useLayoutEffect=function(y,v){return ne.H.useLayoutEffect(y,v)},ie.useMemo=function(y,v){return ne.H.useMemo(y,v)},ie.useOptimistic=function(y,v){return ne.H.useOptimistic(y,v)},ie.useReducer=function(y,v,D){return ne.H.useReducer(y,v,D)},ie.useRef=function(y){return ne.H.useRef(y)},ie.useState=function(y){return ne.H.useState(y)},ie.useSyncExternalStore=function(y,v,D){return ne.H.useSyncExternalStore(y,v,D)},ie.useTransition=function(){return ne.H.useTransition()},ie.version="19.1.1",ie}var D_;function qh(){return D_||(D_=1,Ff.exports=eT()),Ff.exports}var Xe=qh(),Kf={exports:{}},Oa={},Qf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function tT(){return x_||(x_=1,function(s){function e(O,q){var X=O.length;O.push(q);e:for(;0<X;){var ve=X-1>>>1,y=O[ve];if(0<o(y,q))O[ve]=q,O[X]=y,X=ve;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var q=O[0],X=O.pop();if(X!==q){O[0]=X;e:for(var ve=0,y=O.length,v=y>>>1;ve<v;){var D=2*(ve+1)-1,x=O[D],z=D+1,V=O[z];if(0>o(x,X))z<y&&0>o(V,x)?(O[ve]=V,O[z]=X,ve=z):(O[ve]=x,O[D]=X,ve=D);else if(z<y&&0>o(V,X))O[ve]=V,O[z]=X,ve=z;else break e}}return q}function o(O,q){var X=O.sortIndex-q.sortIndex;return X!==0?X:O.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var g=[],m=[],E=1,T=null,b=3,U=!1,H=!1,$=!1,F=!1,Oe=typeof setTimeout=="function"?setTimeout:null,ze=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;function Re(O){for(var q=i(m);q!==null;){if(q.callback===null)a(m);else if(q.startTime<=O)a(m),q.sortIndex=q.expirationTime,e(g,q);else break;q=i(m)}}function ne(O){if($=!1,Re(O),!H)if(i(g)!==null)H=!0,We||(We=!0,rt());else{var q=i(m);q!==null&&Ze(ne,q.startTime-O)}}var We=!1,Pe=-1,Ie=5,Me=-1;function st(){return F?!0:!(s.unstable_now()-Me<Ie)}function Lt(){if(F=!1,We){var O=s.unstable_now();Me=O;var q=!0;try{e:{H=!1,$&&($=!1,ze(Pe),Pe=-1),U=!0;var X=b;try{t:{for(Re(O),T=i(g);T!==null&&!(T.expirationTime>O&&st());){var ve=T.callback;if(typeof ve=="function"){T.callback=null,b=T.priorityLevel;var y=ve(T.expirationTime<=O);if(O=s.unstable_now(),typeof y=="function"){T.callback=y,Re(O),q=!0;break t}T===i(g)&&a(g),Re(O)}else a(g);T=i(g)}if(T!==null)q=!0;else{var v=i(m);v!==null&&Ze(ne,v.startTime-O),q=!1}}break e}finally{T=null,b=X,U=!1}q=void 0}}finally{q?rt():We=!1}}}var rt;if(typeof _e=="function")rt=function(){_e(Lt)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,gn=Nn.port2;Nn.port1.onmessage=Lt,rt=function(){gn.postMessage(null)}}else rt=function(){Oe(Lt,0)};function Ze(O,q){Pe=Oe(function(){O(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return b},s.unstable_next=function(O){switch(b){case 1:case 2:case 3:var q=3;break;default:q=b}var X=b;b=q;try{return O()}finally{b=X}},s.unstable_requestPaint=function(){F=!0},s.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=b;b=O;try{return q()}finally{b=X}},s.unstable_scheduleCallback=function(O,q,X){var ve=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ve+X:ve):X=ve,O){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=X+y,O={id:E++,callback:q,priorityLevel:O,startTime:X,expirationTime:y,sortIndex:-1},X>ve?(O.sortIndex=X,e(m,O),i(g)===null&&O===i(m)&&($?(ze(Pe),Pe=-1):$=!0,Ze(ne,X-ve))):(O.sortIndex=y,e(g,O),H||U||(H=!0,We||(We=!0,rt()))),O},s.unstable_shouldYield=st,s.unstable_wrapCallback=function(O){var q=b;return function(){var X=b;b=q;try{return O.apply(this,arguments)}finally{b=X}}}}(Xf)),Xf}var k_;function nT(){return k_||(k_=1,Qf.exports=tT()),Qf.exports}var Wf={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function iT(){if(L_)return bt;L_=1;var s=qh();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,m,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:g,containerInfo:m,implementation:E}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,bt.createPortal=function(g,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(g,m,null,E)},bt.flushSync=function(g){var m=h.T,E=a.p;try{if(h.T=null,a.p=2,g)return g()}finally{h.T=m,a.p=E,a.d.f()}},bt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(g,m))},bt.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},bt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var E=m.as,T=d(E,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,U=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?a.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:U}):E==="script"&&a.d.X(g,{crossOrigin:T,integrity:b,fetchPriority:U,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=d(m.as,m.crossOrigin);a.d.M(g,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(g)},bt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,T=d(E,m.crossOrigin);a.d.L(g,E,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bt.preloadModule=function(g,m){if(typeof g=="string")if(m){var E=d(m.as,m.crossOrigin);a.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(g)},bt.requestFormReset=function(g){a.d.r(g)},bt.unstable_batchedUpdates=function(g,m){return g(m)},bt.useFormState=function(g,m,E){return h.H.useFormState(g,m,E)},bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},bt.version="19.1.1",bt}var U_;function sT(){if(U_)return Wf.exports;U_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wf.exports=iT(),Wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function rT(){if(z_)return Oa;z_=1;var s=nT(),e=qh(),i=sT();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(a(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,l=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){r=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return d(c),t;if(f===l)return d(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=c,l=f;else{for(var p=!1,_=c.child;_;){if(_===r){p=!0,r=c,l=f;break}if(_===l){p=!0,l=c,r=f;break}_=_.sibling}if(!p){for(_=f.child;_;){if(_===r){p=!0,r=f,l=c;break}if(_===l){p=!0,l=f,r=c;break}_=_.sibling}if(!p)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),ze=Symbol.for("react.consumer"),_e=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),Lt=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=Lt&&t[Lt]||t["@@iterator"],typeof t=="function"?t:null)}var Nn=Symbol.for("react.client.reference");function gn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Nn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case F:return"Profiler";case $:return"StrictMode";case ne:return"Suspense";case We:return"SuspenseList";case Me:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case _e:return(t.displayName||"Context")+".Provider";case ze:return(t._context.displayName||"Context")+".Consumer";case Re:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pe:return n=t.displayName||null,n!==null?n:gn(t.type)||"Memo";case Ie:n=t._payload,t=t._init;try{return gn(t(n))}catch{}}return null}var Ze=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ve=[],y=-1;function v(t){return{current:t}}function D(t){0>y||(t.current=ve[y],ve[y]=null,y--)}function x(t,n){y++,ve[y]=t.current,t.current=n}var z=v(null),V=v(null),B=v(null),G=v(null);function Y(t,n){switch(x(B,n),x(V,t),x(z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i_(n),t=s_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}D(z),x(z,t)}function he(){D(z),D(V),D(B)}function De(t){t.memoizedState!==null&&x(G,t);var n=z.current,r=s_(n,t.type);n!==r&&(x(V,t),x(z,r))}function ye(t){V.current===t&&(D(z),D(V)),G.current===t&&(D(G),Ca._currentValue=X)}var xe=Object.prototype.hasOwnProperty,Fe=s.unstable_scheduleCallback,oe=s.unstable_cancelCallback,yt=s.unstable_shouldYield,Ut=s.unstable_requestPaint,qe=s.unstable_now,an=s.unstable_getCurrentPriorityLevel,_n=s.unstable_ImmediatePriority,zt=s.unstable_UserBlockingPriority,Es=s.unstable_NormalPriority,Oc=s.unstable_LowPriority,gl=s.unstable_IdlePriority,_l=s.log,Mc=s.unstable_setDisableYieldValue,ei=null,Tt=null;function yn(t){if(typeof _l=="function"&&Mc(t),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(ei,t)}catch{}}var vt=Math.clz32?Math.clz32:Dc,yl=Math.log,Dr=Math.LN2;function Dc(t){return t>>>=0,t===0?32:31-(yl(t)/Dr|0)|0}var Ss=256,vl=4194304;function Bi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function El(t,n,r){var l=t.pendingLanes;if(l===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var _=l&134217727;return _!==0?(l=_&~f,l!==0?c=Bi(l):(p&=_,p!==0?c=Bi(p):r||(r=_&~t,r!==0&&(c=Bi(r))))):(_=l&~f,_!==0?c=Bi(_):p!==0?c=Bi(p):r||(r=l&~t,r!==0&&(c=Bi(r)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:c}function xr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function P0(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(){var t=Ss;return Ss<<=1,(Ss&4194048)===0&&(Ss=256),t}function qd(){var t=vl;return vl<<=1,(vl&62914560)===0&&(vl=4194304),t}function xc(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function kr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function H0(t,n,r,l,c,f){var p=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var _=t.entanglements,S=t.expirationTimes,R=t.hiddenUpdates;for(r=p&~r;0<r;){var M=31-vt(r),L=1<<M;_[M]=0,S[M]=-1;var I=R[M];if(I!==null)for(R[M]=null,M=0;M<I.length;M++){var N=I[M];N!==null&&(N.lane&=-536870913)}r&=~L}l!==0&&Vd(t,l,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(p&~n))}function Vd(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-vt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|r&4194090}function jd(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var l=31-vt(r),c=1<<l;c&n|t[l]&n&&(t[l]|=n),r&=~c}}function kc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gd(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:T_(t.type))}function B0(t,n){var r=q.p;try{return q.p=t,n()}finally{q.p=r}}var ti=Math.random().toString(36).slice(2),Et="__reactFiber$"+ti,It="__reactProps$"+ti,bs="__reactContainer$"+ti,Uc="__reactEvents$"+ti,q0="__reactListeners$"+ti,V0="__reactHandles$"+ti,Yd="__reactResources$"+ti,Lr="__reactMarker$"+ti;function zc(t){delete t[Et],delete t[It],delete t[Uc],delete t[q0],delete t[V0]}function Ts(t){var n=t[Et];if(n)return n;for(var r=t.parentNode;r;){if(n=r[bs]||r[Et]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=o_(t);t!==null;){if(r=t[Et])return r;t=o_(t)}return n}t=r,r=t.parentNode}return null}function Cs(t){if(t=t[Et]||t[bs]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ur(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function ws(t){var n=t[Yd];return n||(n=t[Yd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function at(t){t[Lr]=!0}var Fd=new Set,Kd={};function qi(t,n){As(t,n),As(t+"Capture",n)}function As(t,n){for(Kd[t]=n,t=0;t<n.length;t++)Fd.add(n[t])}var j0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qd={},Xd={};function G0(t){return xe.call(Xd,t)?!0:xe.call(Qd,t)?!1:j0.test(t)?Xd[t]=!0:(Qd[t]=!0,!1)}function Sl(t,n,r){if(G0(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function bl(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function On(t,n,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+l)}}var Pc,Wd;function Rs(t){if(Pc===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Pc=n&&n[1]||"",Wd=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pc+t+Wd}var Hc=!1;function Bc(t,n){if(!t||Hc)return"";Hc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(N){var I=N}Reflect.construct(t,[],L)}else{try{L.call()}catch(N){I=N}t.call(L.prototype)}}else{try{throw Error()}catch(N){I=N}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(N){if(N&&I&&typeof N.stack=="string")return[N.stack,I.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),p=f[0],_=f[1];if(p&&_){var S=p.split(`
`),R=_.split(`
`);for(c=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;c<R.length&&!R[c].includes("DetermineComponentFrameRoot");)c++;if(l===S.length||c===R.length)for(l=S.length-1,c=R.length-1;1<=l&&0<=c&&S[l]!==R[c];)c--;for(;1<=l&&0<=c;l--,c--)if(S[l]!==R[c]){if(l!==1||c!==1)do if(l--,c--,0>c||S[l]!==R[c]){var M=`
`+S[l].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=l&&0<=c);break}}}finally{Hc=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Rs(r):""}function Y0(t){switch(t.tag){case 26:case 27:case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 15:return Bc(t.type,!1);case 11:return Bc(t.type.render,!1);case 1:return Bc(t.type,!0);case 31:return Rs("Activity");default:return""}}function Zd(t){try{var n="";do n+=Y0(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $d(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function F0(t){var n=$d(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(p){l=""+p,f.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tl(t){t._valueTracker||(t._valueTracker=F0(t))}function Jd(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return t&&(l=$d(t)?t.checked?"true":"false":t.value),t=l,t!==r?(n.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var K0=/[\n"\\]/g;function Kt(t){return t.replace(K0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qc(t,n,r,l,c,f,p,_){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ft(n)):t.value!==""+Ft(n)&&(t.value=""+Ft(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?Vc(t,p,Ft(n)):r!=null?Vc(t,p,Ft(r)):l!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+Ft(_):t.removeAttribute("name")}function ep(t,n,r,l,c,f,p,_){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Ft(r):"",n=n!=null?""+Ft(n):r,_||n===t.value||(t.value=n),t.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=_?t.checked:!!l,t.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function Vc(t,n,r){n==="number"&&Cl(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Is(t,n,r,l){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&l&&(t[r].defaultSelected=!0)}else{for(r=""+Ft(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function tp(t,n,r){if(n!=null&&(n=""+Ft(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Ft(r):""}function np(t,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(Ze(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=Ft(n),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l)}function Ns(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Q0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(t,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,r):typeof r!="number"||r===0||Q0.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function sp(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&r[c]!==l&&ip(t,c,l)}else for(var f in n)n.hasOwnProperty(f)&&ip(t,f,n[f])}function jc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return W0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Os=null,Ms=null;function rp(t){var n=Cs(t);if(n&&(t=n.stateNode)){var r=t[It]||null;e:switch(t=n.stateNode,n.type){case"input":if(qc(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Kt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==t&&l.form===t.form){var c=l[It]||null;if(!c)throw Error(a(90));qc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===t.form&&Jd(l)}break e;case"textarea":tp(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Is(t,!!r.multiple,n,!1)}}}var Fc=!1;function ap(t,n,r){if(Fc)return t(n,r);Fc=!0;try{var l=t(n);return l}finally{if(Fc=!1,(Os!==null||Ms!==null)&&(uo(),Os&&(n=Os,t=Ms,Ms=Os=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function zr(t,n){var r=t.stateNode;if(r===null)return null;var l=r[It]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Mn)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Kc=!1}var ni=null,Qc=null,Al=null;function lp(){if(Al)return Al;var t,n=Qc,r=n.length,l,c="value"in ni?ni.value:ni.textContent,f=c.length;for(t=0;t<r&&n[t]===c[t];t++);var p=r-t;for(l=1;l<=p&&n[r-l]===c[f-l];l++);return Al=c.slice(t,1<l?1-l:void 0)}function Rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function op(){return!1}function Nt(t){function n(r,l,c,f,p){this._reactName=r,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(r=t[_],this[_]=r?r(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Il:op,this.isPropagationStopped=op,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),n}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Nt(Vi),Hr=E({},Vi,{view:0,detail:0}),Z0=Nt(Hr),Xc,Wc,Br,Ol=E({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Br&&(Br&&t.type==="mousemove"?(Xc=t.screenX-Br.screenX,Wc=t.screenY-Br.screenY):Wc=Xc=0,Br=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),cp=Nt(Ol),$0=E({},Ol,{dataTransfer:0}),J0=Nt($0),eS=E({},Hr,{relatedTarget:0}),Zc=Nt(eS),tS=E({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=Nt(tS),iS=E({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sS=Nt(iS),rS=E({},Vi,{data:0}),up=Nt(rS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=oS[t])?!!n[t]:!1}function $c(){return cS}var uS=E({},Hr,{key:function(t){if(t.key){var n=aS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=Nt(uS),hS=E({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Nt(hS),dS=E({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),pS=Nt(dS),mS=E({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gS=Nt(mS),_S=E({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Nt(_S),vS=E({},Vi,{newState:0,oldState:0}),ES=Nt(vS),SS=[9,13,27,32],Jc=Mn&&"CompositionEvent"in window,qr=null;Mn&&"documentMode"in document&&(qr=document.documentMode);var bS=Mn&&"TextEvent"in window&&!qr,hp=Mn&&(!Jc||qr&&8<qr&&11>=qr),dp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return SS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function TS(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return t=n.data,t===dp&&pp?null:t;default:return null}}function CS(t,n){if(Ds)return t==="compositionend"||!Jc&&mp(t,n)?(t=lp(),Al=Qc=ni=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!wS[t.type]:n==="textarea"}function yp(t,n,r,l){Os?Ms?Ms.push(l):Ms=[l]:Os=l,n=_o(n,"onChange"),0<n.length&&(r=new Nl("onChange","change",null,r,l),t.push({event:r,listeners:n}))}var Vr=null,jr=null;function AS(t){$g(t,0)}function Ml(t){var n=Ur(t);if(Jd(n))return t}function vp(t,n){if(t==="change")return n}var Ep=!1;if(Mn){var eu;if(Mn){var tu="oninput"in document;if(!tu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),tu=typeof Sp.oninput=="function"}eu=tu}else eu=!1;Ep=eu&&(!document.documentMode||9<document.documentMode)}function bp(){Vr&&(Vr.detachEvent("onpropertychange",Tp),jr=Vr=null)}function Tp(t){if(t.propertyName==="value"&&Ml(jr)){var n=[];yp(n,jr,t,Yc(t)),ap(AS,n)}}function RS(t,n,r){t==="focusin"?(bp(),Vr=n,jr=r,Vr.attachEvent("onpropertychange",Tp)):t==="focusout"&&bp()}function IS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(jr)}function NS(t,n){if(t==="click")return Ml(n)}function OS(t,n){if(t==="input"||t==="change")return Ml(n)}function MS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Pt=typeof Object.is=="function"?Object.is:MS;function Gr(t,n){if(Pt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var c=r[l];if(!xe.call(n,c)||!Pt(t[c],n[c]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,n){var r=Cp(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=n&&l>=n)return{node:r,offset:n-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cp(r)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Cl(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Cl(t.document)}return n}function nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var DS=Mn&&"documentMode"in document&&11>=document.documentMode,xs=null,iu=null,Yr=null,su=!1;function Ip(t,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;su||xs==null||xs!==Cl(l)||(l=xs,"selectionStart"in l&&nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yr&&Gr(Yr,l)||(Yr=l,l=_o(iu,"onSelect"),0<l.length&&(n=new Nl("onSelect","select",null,n,r),t.push({event:n,listeners:l}),n.target=xs)))}function ji(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var ks={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionrun:ji("Transition","TransitionRun"),transitionstart:ji("Transition","TransitionStart"),transitioncancel:ji("Transition","TransitionCancel"),transitionend:ji("Transition","TransitionEnd")},ru={},Np={};Mn&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Gi(t){if(ru[t])return ru[t];if(!ks[t])return t;var n=ks[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Np)return ru[t]=n[r];return t}var Op=Gi("animationend"),Mp=Gi("animationiteration"),Dp=Gi("animationstart"),xS=Gi("transitionrun"),kS=Gi("transitionstart"),LS=Gi("transitioncancel"),xp=Gi("transitionend"),kp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function ln(t,n){kp.set(t,n),qi(n,[t])}var Lp=new WeakMap;function Qt(t,n){if(typeof t=="object"&&t!==null){var r=Lp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:Zd(n)},Lp.set(t,n),n)}return{value:t,source:n,stack:Zd(n)}}var Xt=[],Ls=0,lu=0;function Dl(){for(var t=Ls,n=lu=Ls=0;n<t;){var r=Xt[n];Xt[n++]=null;var l=Xt[n];Xt[n++]=null;var c=Xt[n];Xt[n++]=null;var f=Xt[n];if(Xt[n++]=null,l!==null&&c!==null){var p=l.pending;p===null?c.next=c:(c.next=p.next,p.next=c),l.pending=c}f!==0&&Up(r,c,f)}}function xl(t,n,r,l){Xt[Ls++]=t,Xt[Ls++]=n,Xt[Ls++]=r,Xt[Ls++]=l,lu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ou(t,n,r,l){return xl(t,n,r,l),kl(t)}function Us(t,n){return xl(t,null,null,n),kl(t)}function Up(t,n,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var c=!1,f=t.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-vt(r),t=f.hiddenUpdates,l=t[c],l===null?t[c]=[n]:l.push(n),n.lane=r|536870912),f):null}function kl(t){if(50<ga)throw ga=0,mf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var zs={};function US(t,n,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,n,r,l){return new US(t,n,r,l)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dn(t,n){var r=t.alternate;return r===null?(r=Ht(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function zp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ll(t,n,r,l,c,f){var p=0;if(l=t,typeof t=="function")cu(t)&&(p=1);else if(typeof t=="string")p=Pb(t,r,z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Me:return t=Ht(31,r,n,c),t.elementType=Me,t.lanes=f,t;case H:return Yi(r.children,c,f,n);case $:p=8,c|=24;break;case F:return t=Ht(12,r,n,c|2),t.elementType=F,t.lanes=f,t;case ne:return t=Ht(13,r,n,c),t.elementType=ne,t.lanes=f,t;case We:return t=Ht(19,r,n,c),t.elementType=We,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Oe:case _e:p=10;break e;case ze:p=9;break e;case Re:p=11;break e;case Pe:p=14;break e;case Ie:p=16,l=null;break e}p=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return n=Ht(p,r,n,c),n.elementType=t,n.type=l,n.lanes=f,n}function Yi(t,n,r,l){return t=Ht(7,t,l,n),t.lanes=r,t}function uu(t,n,r){return t=Ht(6,t,null,n),t.lanes=r,t}function fu(t,n,r){return n=Ht(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ps=[],Hs=0,Ul=null,zl=0,Wt=[],Zt=0,Fi=null,xn=1,kn="";function Ki(t,n){Ps[Hs++]=zl,Ps[Hs++]=Ul,Ul=t,zl=n}function Pp(t,n,r){Wt[Zt++]=xn,Wt[Zt++]=kn,Wt[Zt++]=Fi,Fi=t;var l=xn;t=kn;var c=32-vt(l)-1;l&=~(1<<c),r+=1;var f=32-vt(n)+c;if(30<f){var p=c-c%5;f=(l&(1<<p)-1).toString(32),l>>=p,c-=p,xn=1<<32-vt(n)+c|r<<c|l,kn=f+t}else xn=1<<f|r<<c|l,kn=t}function hu(t){t.return!==null&&(Ki(t,1),Pp(t,1,0))}function du(t){for(;t===Ul;)Ul=Ps[--Hs],Ps[Hs]=null,zl=Ps[--Hs],Ps[Hs]=null;for(;t===Fi;)Fi=Wt[--Zt],Wt[Zt]=null,kn=Wt[--Zt],Wt[Zt]=null,xn=Wt[--Zt],Wt[Zt]=null}var Ct=null,Ve=null,ge=!1,Qi=null,vn=!1,pu=Error(a(519));function Xi(t){var n=Error(a(418,""));throw Qr(Qt(n,t)),pu}function Hp(t){var n=t.stateNode,r=t.type,l=t.memoizedProps;switch(n[Et]=t,n[It]=l,r){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(r=0;r<ya.length;r++)ue(ya[r],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":ue("invalid",n),ep(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Tl(n);break;case"select":ue("invalid",n);break;case"textarea":ue("invalid",n),np(n,l.value,l.defaultValue,l.children),Tl(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||n_(n.textContent,r)?(l.popover!=null&&(ue("beforetoggle",n),ue("toggle",n)),l.onScroll!=null&&ue("scroll",n),l.onScrollEnd!=null&&ue("scrollend",n),l.onClick!=null&&(n.onclick=yo),n=!0):n=!1,n||Xi(t)}function Bp(t){for(Ct=t.return;Ct;)switch(Ct.tag){case 5:case 13:vn=!1;return;case 27:case 3:vn=!0;return;default:Ct=Ct.return}}function Fr(t){if(t!==Ct)return!1;if(!ge)return Bp(t),ge=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Mf(t.type,t.memoizedProps)),r=!r),r&&Ve&&Xi(t),Bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){Ve=cn(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}Ve=null}}else n===27?(n=Ve,yi(t.type)?(t=Lf,Lf=null,Ve=t):Ve=n):Ve=Ct?cn(t.stateNode.nextSibling):null;return!0}function Kr(){Ve=Ct=null,ge=!1}function qp(){var t=Qi;return t!==null&&(Dt===null?Dt=t:Dt.push.apply(Dt,t),Qi=null),t}function Qr(t){Qi===null?Qi=[t]:Qi.push(t)}var mu=v(null),Wi=null,Ln=null;function ii(t,n,r){x(mu,n._currentValue),n._currentValue=r}function Un(t){t._currentValue=mu.current,D(mu)}function gu(t,n,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===r)break;t=t.return}}function _u(t,n,r,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var p=c.child;f=f.firstContext;e:for(;f!==null;){var _=f;f=c;for(var S=0;S<n.length;S++)if(_.context===n[S]){f.lanes|=r,_=f.alternate,_!==null&&(_.lanes|=r),gu(f.return,r,t),l||(p=null);break e}f=_.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(a(341));p.lanes|=r,f=p.alternate,f!==null&&(f.lanes|=r),gu(p,r,t),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function Xr(t,n,r,l){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var _=c.type;Pt(c.pendingProps.value,p.value)||(t!==null?t.push(_):t=[_])}}else if(c===G.current){if(p=c.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ca):t=[Ca])}c=c.return}t!==null&&_u(n,t,r,l),n.flags|=262144}function Pl(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zi(t){Wi=t,Ln=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function St(t){return Vp(Wi,t)}function Hl(t,n){return Wi===null&&Zi(t),Vp(t,n)}function Vp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ln===null){if(t===null)throw Error(a(308));Ln=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ln=Ln.next=n;return r}var zS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},PS=s.unstable_scheduleCallback,HS=s.unstable_NormalPriority,et={$$typeof:_e,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new zS,data:new Map,refCount:0}}function Wr(t){t.refCount--,t.refCount===0&&PS(HS,function(){t.controller.abort()})}var Zr=null,vu=0,Bs=0,qs=null;function BS(t,n){if(Zr===null){var r=Zr=[];vu=0,Bs=bf(),qs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return vu++,n.then(jp,jp),n}function jp(){if(--vu===0&&Zr!==null){qs!==null&&(qs.status="fulfilled");var t=Zr;Zr=null,Bs=0,qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qS(t,n){var r=[],l={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),l}var Gp=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&BS(t,n),Gp!==null&&Gp(t,n)};var $i=v(null);function Eu(){var t=$i.current;return t!==null?t:ke.pooledCache}function Bl(t,n){n===null?x($i,$i.current):x($i,n.pool)}function Yp(){var t=Eu();return t===null?null:{parent:et._currentValue,pool:t}}var $r=Error(a(460)),Fp=Error(a(474)),ql=Error(a(542)),Su={then:function(){}};function Kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vl(){}function Qp(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Vl,Vl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wp(t),t;default:if(typeof n.status=="string")n.then(Vl,Vl);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wp(t),t}throw Jr=n,$r}}var Jr=null;function Xp(){if(Jr===null)throw Error(a(459));var t=Jr;return Jr=null,t}function Wp(t){if(t===$r||t===ql)throw Error(a(483))}var si=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ri(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ai(t,n,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=kl(t),Up(t,null,r),n}return xl(t,l,n,r),kl(t)}function ea(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,jd(t,r)}}function Cu(t,n){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=p:f=f.next=p,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var wu=!1;function ta(){if(wu){var t=qs;if(t!==null)throw t}}function na(t,n,r,l){wu=!1;var c=t.updateQueue;si=!1;var f=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var S=_,R=S.next;S.next=null,p===null?f=R:p.next=R,p=S;var M=t.alternate;M!==null&&(M=M.updateQueue,_=M.lastBaseUpdate,_!==p&&(_===null?M.firstBaseUpdate=R:_.next=R,M.lastBaseUpdate=S))}if(f!==null){var L=c.baseState;p=0,M=R=S=null,_=f;do{var I=_.lane&-536870913,N=I!==_.lane;if(N?(de&I)===I:(l&I)===I){I!==0&&I===Bs&&(wu=!0),M!==null&&(M=M.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var te=t,W=_;I=n;var Ce=r;switch(W.tag){case 1:if(te=W.payload,typeof te=="function"){L=te.call(Ce,L,I);break e}L=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=W.payload,I=typeof te=="function"?te.call(Ce,L,I):te,I==null)break e;L=E({},L,I);break e;case 2:si=!0}}I=_.callback,I!==null&&(t.flags|=64,N&&(t.flags|=8192),N=c.callbacks,N===null?c.callbacks=[I]:N.push(I))}else N={lane:I,tag:_.tag,payload:_.payload,callback:_.callback,next:null},M===null?(R=M=N,S=L):M=M.next=N,p|=I;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);M===null&&(S=L),c.baseState=S,c.firstBaseUpdate=R,c.lastBaseUpdate=M,f===null&&(c.shared.lanes=0),pi|=p,t.lanes=p,t.memoizedState=L}}function Zp(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function $p(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Zp(r[t],n)}var Vs=v(null),jl=v(0);function Jp(t,n){t=jn,x(jl,t),x(Vs,n),jn=t|n.baseLanes}function Au(){x(jl,jn),x(Vs,Vs.current)}function Ru(){jn=jl.current,D(Vs),D(jl)}var li=0,se=null,be=null,$e=null,Gl=!1,js=!1,Ji=!1,Yl=0,ia=0,Gs=null,VS=0;function Ke(){throw Error(a(321))}function Iu(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Pt(t[r],n[r]))return!1;return!0}function Nu(t,n,r,l,c,f){return li=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Um:zm,Ji=!1,f=r(l,c),Ji=!1,js&&(f=tm(n,r,l,c)),em(t),f}function em(t){O.H=Zl;var n=be!==null&&be.next!==null;if(li=0,$e=be=se=null,Gl=!1,ia=0,Gs=null,n)throw Error(a(300));t===null||lt||(t=t.dependencies,t!==null&&Pl(t)&&(lt=!0))}function tm(t,n,r,l){se=t;var c=0;do{if(js&&(Gs=null),ia=0,js=!1,25<=c)throw Error(a(301));if(c+=1,$e=be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=XS,f=n(r,l)}while(js);return f}function jS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?sa(n):n,t=t.useState()[0],(be!==null?be.memoizedState:null)!==t&&(se.flags|=1024),n}function Ou(){var t=Yl!==0;return Yl=0,t}function Mu(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Du(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}li=0,$e=be=se=null,js=!1,ia=Yl=0,Gs=null}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?se.memoizedState=$e=t:$e=$e.next=t,$e}function Je(){if(be===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var n=$e===null?se.memoizedState:$e.next;if(n!==null)$e=n,be=t;else{if(t===null)throw se.alternate===null?Error(a(467)):Error(a(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},$e===null?se.memoizedState=$e=t:$e=$e.next=t}return $e}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sa(t){var n=ia;return ia+=1,Gs===null&&(Gs=[]),t=Qp(Gs,t,n),n=se,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Um:zm),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sa(t);if(t.$$typeof===_e)return St(t)}throw Error(a(438,String(t)))}function ku(t){var n=null,r=se.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=xu(),se.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),l=0;l<t;l++)r[l]=st;return n.index++,r}function zn(t,n){return typeof n=="function"?n(t):n}function Kl(t){var n=Je();return Lu(n,be,t)}function Lu(t,n,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var c=t.baseQueue,f=l.pending;if(f!==null){if(c!==null){var p=c.next;c.next=f.next,f.next=p}n.baseQueue=c=f,l.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var _=p=null,S=null,R=n,M=!1;do{var L=R.lane&-536870913;if(L!==R.lane?(de&L)===L:(li&L)===L){var I=R.revertLane;if(I===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),L===Bs&&(M=!0);else if((li&I)===I){R=R.next,I===Bs&&(M=!0);continue}else L={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(_=S=L,p=f):S=S.next=L,se.lanes|=I,pi|=I;L=R.action,Ji&&r(f,L),f=R.hasEagerState?R.eagerState:r(f,L)}else I={lane:L,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(_=S=I,p=f):S=S.next=I,se.lanes|=L,pi|=L;R=R.next}while(R!==null&&R!==n);if(S===null?p=f:S.next=_,!Pt(f,t.memoizedState)&&(lt=!0,M&&(r=qs,r!==null)))throw r;t.memoizedState=f,t.baseState=p,t.baseQueue=S,l.lastRenderedState=f}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Uu(t){var n=Je(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var p=c=c.next;do f=t(f,p.action),p=p.next;while(p!==c);Pt(f,n.memoizedState)||(lt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function nm(t,n,r){var l=se,c=Je(),f=ge;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var p=!Pt((be||c).memoizedState,r);p&&(c.memoizedState=r,lt=!0),c=c.queue;var _=rm.bind(null,l,c,t);if(ra(2048,8,_,[t]),c.getSnapshot!==n||p||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,Ys(9,Ql(),sm.bind(null,l,c,r,n),null),ke===null)throw Error(a(349));f||(li&124)!==0||im(l,n,r)}return r}function im(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=se.updateQueue,n===null?(n=xu(),se.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function sm(t,n,r,l){n.value=r,n.getSnapshot=l,am(n)&&lm(t)}function rm(t,n,r){return r(function(){am(n)&&lm(t)})}function am(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Pt(t,r)}catch{return!0}}function lm(t){var n=Us(t,2);n!==null&&Gt(n,t,2)}function zu(t){var n=Ot();if(typeof t=="function"){var r=t;if(t=r(),Ji){yn(!0);try{r()}finally{yn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:t},n}function om(t,n,r,l){return t.baseState=r,Lu(t,be,typeof l=="function"?l:zn)}function GS(t,n,r,l,c){if(Wl(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};O.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,cm(n,f)):(f.next=r.next,n.pending=r.next=f)}}function cm(t,n){var r=n.action,l=n.payload,c=t.state;if(n.isTransition){var f=O.T,p={};O.T=p;try{var _=r(c,l),S=O.S;S!==null&&S(p,_),um(t,n,_)}catch(R){Pu(t,n,R)}finally{O.T=f}}else try{f=r(c,l),um(t,n,f)}catch(R){Pu(t,n,R)}}function um(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){fm(t,n,l)},function(l){return Pu(t,n,l)}):fm(t,n,r)}function fm(t,n,r){n.status="fulfilled",n.value=r,hm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,cm(t,r)))}function Pu(t,n,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,hm(n),n=n.next;while(n!==l)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dm(t,n){return n}function pm(t,n){if(ge){var r=ke.formState;if(r!==null){e:{var l=se;if(ge){if(Ve){t:{for(var c=Ve,f=vn;c.nodeType!==8;){if(!f){c=null;break t}if(c=cn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ve=cn(c.nextSibling),l=c.data==="F!";break e}}Xi(l)}l=!1}l&&(n=r[0])}}return r=Ot(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},r.queue=l,r=xm.bind(null,se,l),l.dispatch=r,l=zu(!1),f=ju.bind(null,se,!1,l.queue),l=Ot(),c={state:n,dispatch:null,action:t,pending:null},l.queue=c,r=GS.bind(null,se,c,f,r),c.dispatch=r,l.memoizedState=t,[n,r,!1]}function mm(t){var n=Je();return gm(n,be,t)}function gm(t,n,r){if(n=Lu(t,n,dm)[0],t=Kl(zn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=sa(n)}catch(p){throw p===$r?ql:p}else l=n;n=Je();var c=n.queue,f=c.dispatch;return r!==n.memoizedState&&(se.flags|=2048,Ys(9,Ql(),YS.bind(null,c,r),null)),[l,f,t]}function YS(t,n){t.action=n}function _m(t){var n=Je(),r=be;if(r!==null)return gm(n,r,t);Je(),n=n.memoizedState,r=Je();var l=r.queue.dispatch;return r.memoizedState=t,[n,l,!1]}function Ys(t,n,r,l){return t={tag:t,create:r,deps:l,inst:n,next:null},n=se.updateQueue,n===null&&(n=xu(),se.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,n.lastEffect=t),t}function Ql(){return{destroy:void 0,resource:void 0}}function ym(){return Je().memoizedState}function Xl(t,n,r,l){var c=Ot();l=l===void 0?null:l,se.flags|=t,c.memoizedState=Ys(1|n,Ql(),r,l)}function ra(t,n,r,l){var c=Je();l=l===void 0?null:l;var f=c.memoizedState.inst;be!==null&&l!==null&&Iu(l,be.memoizedState.deps)?c.memoizedState=Ys(n,f,r,l):(se.flags|=t,c.memoizedState=Ys(1|n,f,r,l))}function vm(t,n){Xl(8390656,8,t,n)}function Em(t,n){ra(2048,8,t,n)}function Sm(t,n){return ra(4,2,t,n)}function bm(t,n){return ra(4,4,t,n)}function Tm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,r){r=r!=null?r.concat([t]):null,ra(4,4,Tm.bind(null,n,t),r)}function Hu(){}function wm(t,n){var r=Je();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&Iu(n,l[1])?l[0]:(r.memoizedState=[t,n],t)}function Am(t,n){var r=Je();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&Iu(n,l[1]))return l[0];if(l=t(),Ji){yn(!0);try{t()}finally{yn(!1)}}return r.memoizedState=[l,n],l}function Bu(t,n,r){return r===void 0||(li&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=Ng(),se.lanes|=t,pi|=t,r)}function Rm(t,n,r,l){return Pt(r,n)?r:Vs.current!==null?(t=Bu(t,r,l),Pt(t,n)||(lt=!0),t):(li&42)===0?(lt=!0,t.memoizedState=r):(t=Ng(),se.lanes|=t,pi|=t,n)}function Im(t,n,r,l,c){var f=q.p;q.p=f!==0&&8>f?f:8;var p=O.T,_={};O.T=_,ju(t,!1,n,r);try{var S=c(),R=O.S;if(R!==null&&R(_,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var M=qS(S,l);aa(t,n,M,jt(t))}else aa(t,n,l,jt(t))}catch(L){aa(t,n,{then:function(){},status:"rejected",reason:L},jt())}finally{q.p=f,O.T=p}}function FS(){}function qu(t,n,r,l){if(t.tag!==5)throw Error(a(476));var c=Nm(t).queue;Im(t,c,n,X,r===null?FS:function(){return Om(t),r(l)})}function Nm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:X},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Nm(t).next.queue;aa(t,n,{},jt())}function Vu(){return St(Ca)}function Mm(){return Je().memoizedState}function Dm(){return Je().memoizedState}function KS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=jt();t=ri(r);var l=ai(n,t,r);l!==null&&(Gt(l,n,r),ea(l,n,r)),n={cache:yu()},t.payload=n;return}n=n.return}}function QS(t,n,r){var l=jt();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Wl(t)?km(n,r):(r=ou(t,n,r,l),r!==null&&(Gt(r,t,l),Lm(r,n,l)))}function xm(t,n,r){var l=jt();aa(t,n,r,l)}function aa(t,n,r,l){var c={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))km(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,_=f(p,r);if(c.hasEagerState=!0,c.eagerState=_,Pt(_,p))return xl(t,n,c,0),ke===null&&Dl(),!1}catch{}finally{}if(r=ou(t,n,c,l),r!==null)return Gt(r,t,l),Lm(r,n,l),!0}return!1}function ju(t,n,r,l){if(l={lane:2,revertLane:bf(),action:l,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(a(479))}else n=ou(t,r,l,2),n!==null&&Gt(n,t,2)}function Wl(t){var n=t.alternate;return t===se||n!==null&&n===se}function km(t,n){js=Gl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Lm(t,n,r){if((r&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,jd(t,r)}}var Zl={readContext:St,use:Fl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Um={readContext:St,use:Fl,useCallback:function(t,n){return Ot().memoizedState=[t,n===void 0?null:n],t},useContext:St,useEffect:vm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Xl(4194308,4,Tm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var r=Ot();n=n===void 0?null:n;var l=t();if(Ji){yn(!0);try{t()}finally{yn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(t,n,r){var l=Ot();if(r!==void 0){var c=r(n);if(Ji){yn(!0);try{r(n)}finally{yn(!1)}}}else c=n;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=QS.bind(null,se,t),[l.memoizedState,t]},useRef:function(t){var n=Ot();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,r=xm.bind(null,se,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Hu,useDeferredValue:function(t,n){var r=Ot();return Bu(r,t,n)},useTransition:function(){var t=zu(!1);return t=Im.bind(null,se,t.queue,!0,!1),Ot().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var l=se,c=Ot();if(ge){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),ke===null)throw Error(a(349));(de&124)!==0||im(l,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,vm(rm.bind(null,l,f,t),[t]),l.flags|=2048,Ys(9,Ql(),sm.bind(null,l,f,r,n),null),r},useId:function(){var t=Ot(),n=ke.identifierPrefix;if(ge){var r=kn,l=xn;r=(l&~(1<<32-vt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=Yl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=VS++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=Ot();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=ju.bind(null,se,!0,r),r.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return Ot().memoizedState=KS.bind(null,se)}},zm={readContext:St,use:Fl,useCallback:wm,useContext:St,useEffect:Em,useImperativeHandle:Cm,useInsertionEffect:Sm,useLayoutEffect:bm,useMemo:Am,useReducer:Kl,useRef:ym,useState:function(){return Kl(zn)},useDebugValue:Hu,useDeferredValue:function(t,n){var r=Je();return Rm(r,be.memoizedState,t,n)},useTransition:function(){var t=Kl(zn)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:sa(t),n]},useSyncExternalStore:nm,useId:Mm,useHostTransitionStatus:Vu,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var r=Je();return om(r,be,t,n)},useMemoCache:ku,useCacheRefresh:Dm},XS={readContext:St,use:Fl,useCallback:wm,useContext:St,useEffect:Em,useImperativeHandle:Cm,useInsertionEffect:Sm,useLayoutEffect:bm,useMemo:Am,useReducer:Uu,useRef:ym,useState:function(){return Uu(zn)},useDebugValue:Hu,useDeferredValue:function(t,n){var r=Je();return be===null?Bu(r,t,n):Rm(r,be.memoizedState,t,n)},useTransition:function(){var t=Uu(zn)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:sa(t),n]},useSyncExternalStore:nm,useId:Mm,useHostTransitionStatus:Vu,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var r=Je();return be!==null?om(r,be,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Dm},Fs=null,la=0;function $l(t){var n=la;return la+=1,Fs===null&&(Fs=[]),Qp(Fs,t,n)}function oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===T?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){var n=t._init;return n(t._payload)}function Hm(t){function n(w,C){if(t){var A=w.deletions;A===null?(w.deletions=[C],w.flags|=16):A.push(C)}}function r(w,C){if(!t)return null;for(;C!==null;)n(w,C),C=C.sibling;return null}function l(w){for(var C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function c(w,C){return w=Dn(w,C),w.index=0,w.sibling=null,w}function f(w,C,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<C?(w.flags|=67108866,C):A):(w.flags|=67108866,C)):(w.flags|=1048576,C)}function p(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function _(w,C,A,k){return C===null||C.tag!==6?(C=uu(A,w.mode,k),C.return=w,C):(C=c(C,A),C.return=w,C)}function S(w,C,A,k){var j=A.type;return j===H?M(w,C,A.props.children,k,A.key):C!==null&&(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ie&&Pm(j)===C.type)?(C=c(C,A.props),oa(C,A),C.return=w,C):(C=Ll(A.type,A.key,A.props,null,w.mode,k),oa(C,A),C.return=w,C)}function R(w,C,A,k){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=fu(A,w.mode,k),C.return=w,C):(C=c(C,A.children||[]),C.return=w,C)}function M(w,C,A,k,j){return C===null||C.tag!==7?(C=Yi(A,w.mode,k,j),C.return=w,C):(C=c(C,A),C.return=w,C)}function L(w,C,A){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=uu(""+C,w.mode,A),C.return=w,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case b:return A=Ll(C.type,C.key,C.props,null,w.mode,A),oa(A,C),A.return=w,A;case U:return C=fu(C,w.mode,A),C.return=w,C;case Ie:var k=C._init;return C=k(C._payload),L(w,C,A)}if(Ze(C)||rt(C))return C=Yi(C,w.mode,A,null),C.return=w,C;if(typeof C.then=="function")return L(w,$l(C),A);if(C.$$typeof===_e)return L(w,Hl(w,C),A);Jl(w,C)}return null}function I(w,C,A,k){var j=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return j!==null?null:_(w,C,""+A,k);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case b:return A.key===j?S(w,C,A,k):null;case U:return A.key===j?R(w,C,A,k):null;case Ie:return j=A._init,A=j(A._payload),I(w,C,A,k)}if(Ze(A)||rt(A))return j!==null?null:M(w,C,A,k,null);if(typeof A.then=="function")return I(w,C,$l(A),k);if(A.$$typeof===_e)return I(w,C,Hl(w,A),k);Jl(w,A)}return null}function N(w,C,A,k,j){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return w=w.get(A)||null,_(C,w,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return w=w.get(k.key===null?A:k.key)||null,S(C,w,k,j);case U:return w=w.get(k.key===null?A:k.key)||null,R(C,w,k,j);case Ie:var re=k._init;return k=re(k._payload),N(w,C,A,k,j)}if(Ze(k)||rt(k))return w=w.get(A)||null,M(C,w,k,j,null);if(typeof k.then=="function")return N(w,C,A,$l(k),j);if(k.$$typeof===_e)return N(w,C,A,Hl(C,k),j);Jl(C,k)}return null}function te(w,C,A,k){for(var j=null,re=null,K=C,Z=C=0,ct=null;K!==null&&Z<A.length;Z++){K.index>Z?(ct=K,K=null):ct=K.sibling;var pe=I(w,K,A[Z],k);if(pe===null){K===null&&(K=ct);break}t&&K&&pe.alternate===null&&n(w,K),C=f(pe,C,Z),re===null?j=pe:re.sibling=pe,re=pe,K=ct}if(Z===A.length)return r(w,K),ge&&Ki(w,Z),j;if(K===null){for(;Z<A.length;Z++)K=L(w,A[Z],k),K!==null&&(C=f(K,C,Z),re===null?j=K:re.sibling=K,re=K);return ge&&Ki(w,Z),j}for(K=l(K);Z<A.length;Z++)ct=N(K,w,Z,A[Z],k),ct!==null&&(t&&ct.alternate!==null&&K.delete(ct.key===null?Z:ct.key),C=f(ct,C,Z),re===null?j=ct:re.sibling=ct,re=ct);return t&&K.forEach(function(Ti){return n(w,Ti)}),ge&&Ki(w,Z),j}function W(w,C,A,k){if(A==null)throw Error(a(151));for(var j=null,re=null,K=C,Z=C=0,ct=null,pe=A.next();K!==null&&!pe.done;Z++,pe=A.next()){K.index>Z?(ct=K,K=null):ct=K.sibling;var Ti=I(w,K,pe.value,k);if(Ti===null){K===null&&(K=ct);break}t&&K&&Ti.alternate===null&&n(w,K),C=f(Ti,C,Z),re===null?j=Ti:re.sibling=Ti,re=Ti,K=ct}if(pe.done)return r(w,K),ge&&Ki(w,Z),j;if(K===null){for(;!pe.done;Z++,pe=A.next())pe=L(w,pe.value,k),pe!==null&&(C=f(pe,C,Z),re===null?j=pe:re.sibling=pe,re=pe);return ge&&Ki(w,Z),j}for(K=l(K);!pe.done;Z++,pe=A.next())pe=N(K,w,Z,pe.value,k),pe!==null&&(t&&pe.alternate!==null&&K.delete(pe.key===null?Z:pe.key),C=f(pe,C,Z),re===null?j=pe:re.sibling=pe,re=pe);return t&&K.forEach(function(Wb){return n(w,Wb)}),ge&&Ki(w,Z),j}function Ce(w,C,A,k){if(typeof A=="object"&&A!==null&&A.type===H&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case b:e:{for(var j=A.key;C!==null;){if(C.key===j){if(j=A.type,j===H){if(C.tag===7){r(w,C.sibling),k=c(C,A.props.children),k.return=w,w=k;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ie&&Pm(j)===C.type){r(w,C.sibling),k=c(C,A.props),oa(k,A),k.return=w,w=k;break e}r(w,C);break}else n(w,C);C=C.sibling}A.type===H?(k=Yi(A.props.children,w.mode,k,A.key),k.return=w,w=k):(k=Ll(A.type,A.key,A.props,null,w.mode,k),oa(k,A),k.return=w,w=k)}return p(w);case U:e:{for(j=A.key;C!==null;){if(C.key===j)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){r(w,C.sibling),k=c(C,A.children||[]),k.return=w,w=k;break e}else{r(w,C);break}else n(w,C);C=C.sibling}k=fu(A,w.mode,k),k.return=w,w=k}return p(w);case Ie:return j=A._init,A=j(A._payload),Ce(w,C,A,k)}if(Ze(A))return te(w,C,A,k);if(rt(A)){if(j=rt(A),typeof j!="function")throw Error(a(150));return A=j.call(A),W(w,C,A,k)}if(typeof A.then=="function")return Ce(w,C,$l(A),k);if(A.$$typeof===_e)return Ce(w,C,Hl(w,A),k);Jl(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,C!==null&&C.tag===6?(r(w,C.sibling),k=c(C,A),k.return=w,w=k):(r(w,C),k=uu(A,w.mode,k),k.return=w,w=k),p(w)):r(w,C)}return function(w,C,A,k){try{la=0;var j=Ce(w,C,A,k);return Fs=null,j}catch(K){if(K===$r||K===ql)throw K;var re=Ht(29,K,null,w.mode);return re.lanes=k,re.return=w,re}finally{}}}var Ks=Hm(!0),Bm=Hm(!1),$t=v(null),En=null;function oi(t){var n=t.alternate;x(tt,tt.current&1),x($t,t),En===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(En=t)}function qm(t){if(t.tag===22){if(x(tt,tt.current),x($t,t),En===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(En=t)}}else ci()}function ci(){x(tt,tt.current),x($t,$t.current)}function Pn(t){D($t),En===t&&(En=null),D(tt)}var tt=v(0);function eo(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||kf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Gu(t,n,r,l){n=t.memoizedState,r=r(l,n),r=r==null?n:E({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Yu={enqueueSetState:function(t,n,r){t=t._reactInternals;var l=jt(),c=ri(l);c.payload=n,r!=null&&(c.callback=r),n=ai(t,c,l),n!==null&&(Gt(n,t,l),ea(n,t,l))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var l=jt(),c=ri(l);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=ai(t,c,l),n!==null&&(Gt(n,t,l),ea(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=jt(),l=ri(r);l.tag=2,n!=null&&(l.callback=n),n=ai(t,l,r),n!==null&&(Gt(n,t,r),ea(n,t,r))}};function Vm(t,n,r,l,c,f,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,p):n.prototype&&n.prototype.isPureReactComponent?!Gr(r,l)||!Gr(c,f):!0}function jm(t,n,r,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==t&&Yu.enqueueReplaceState(n,n.state,null)}function es(t,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(t=t.defaultProps){r===n&&(r=E({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var to=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gm(t){to(t)}function Ym(t){console.error(t)}function Fm(t){to(t)}function no(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Km(t,n,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Fu(t,n,r){return r=ri(r),r.tag=3,r.payload={element:null},r.callback=function(){no(t,n)},r}function Qm(t){return t=ri(t),t.tag=3,t}function Xm(t,n,r,l){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;t.payload=function(){return c(f)},t.callback=function(){Km(n,r,l)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Km(n,r,l),typeof c!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function WS(t,n,r,l,c){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Xr(n,r,c,!0),r=$t.current,r!==null){switch(r.tag){case 13:return En===null?_f():r.alternate===null&&je===0&&(je=3),r.flags&=-257,r.flags|=65536,r.lanes=c,l===Su?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),vf(t,l,c)),!1;case 22:return r.flags|=65536,l===Su?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),vf(t,l,c)),!1}throw Error(a(435,r.tag))}return vf(t,l,c),_f(),!1}if(ge)return n=$t.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==pu&&(t=Error(a(422),{cause:l}),Qr(Qt(t,r)))):(l!==pu&&(n=Error(a(423),{cause:l}),Qr(Qt(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=Qt(l,r),c=Fu(t.stateNode,l,c),Cu(t,c),je!==4&&(je=2)),!1;var f=Error(a(520),{cause:l});if(f=Qt(f,r),ma===null?ma=[f]:ma.push(f),je!==4&&(je=2),n===null)return!0;l=Qt(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Fu(r.stateNode,l,t),Cu(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mi===null||!mi.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Qm(c),Xm(c,t,r,l),Cu(r,c),!1}r=r.return}while(r!==null);return!1}var Wm=Error(a(461)),lt=!1;function ht(t,n,r,l){n.child=t===null?Bm(n,null,r,l):Ks(n,t.child,r,l)}function Zm(t,n,r,l,c){r=r.render;var f=n.ref;if("ref"in l){var p={};for(var _ in l)_!=="ref"&&(p[_]=l[_])}else p=l;return Zi(n),l=Nu(t,n,r,p,f,c),_=Ou(),t!==null&&!lt?(Mu(t,n,c),Hn(t,n,c)):(ge&&_&&hu(n),n.flags|=1,ht(t,n,l,c),n.child)}function $m(t,n,r,l,c){if(t===null){var f=r.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,l,c)):(t=Ll(r.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,c)){var p=f.memoizedProps;if(r=r.compare,r=r!==null?r:Gr,r(p,l)&&t.ref===n.ref)return Hn(t,n,c)}return n.flags|=1,t=Dn(f,l),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,r,l,c){if(t!==null){var f=t.memoizedProps;if(Gr(f,l)&&t.ref===n.ref)if(lt=!1,n.pendingProps=l=f,ef(t,c))(t.flags&131072)!==0&&(lt=!0);else return n.lanes=t.lanes,Hn(t,n,c)}return Ku(t,n,r,l,c)}function eg(t,n,r){var l=n.pendingProps,c=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return tg(t,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(n,f!==null?f.cachePool:null),f!==null?Jp(n,f):Au(),qm(n);else return n.lanes=n.childLanes=536870912,tg(t,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(Bl(n,f.cachePool),Jp(n,f),ci(),n.memoizedState=null):(t!==null&&Bl(n,null),Au(),ci());return ht(t,n,c,r),n.child}function tg(t,n,r,l){var c=Eu();return c=c===null?null:{parent:et._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&Bl(n,null),Au(),qm(n),t!==null&&Xr(t,n,l,!0),null}function io(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Ku(t,n,r,l,c){return Zi(n),r=Nu(t,n,r,l,void 0,c),l=Ou(),t!==null&&!lt?(Mu(t,n,c),Hn(t,n,c)):(ge&&l&&hu(n),n.flags|=1,ht(t,n,r,c),n.child)}function ng(t,n,r,l,c,f){return Zi(n),n.updateQueue=null,r=tm(n,l,r,c),em(t),l=Ou(),t!==null&&!lt?(Mu(t,n,f),Hn(t,n,f)):(ge&&l&&hu(n),n.flags|=1,ht(t,n,r,f),n.child)}function ig(t,n,r,l,c){if(Zi(n),n.stateNode===null){var f=zs,p=r.contextType;typeof p=="object"&&p!==null&&(f=St(p)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},bu(n),p=r.contextType,f.context=typeof p=="object"&&p!==null?St(p):zs,f.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Gu(n,r,p,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Yu.enqueueReplaceState(f,f.state,null),na(n,l,f,c),ta(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var _=n.memoizedProps,S=es(r,_);f.props=S;var R=f.context,M=r.contextType;p=zs,typeof M=="object"&&M!==null&&(p=St(M));var L=r.getDerivedStateFromProps;M=typeof L=="function"||typeof f.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,M||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_||R!==p)&&jm(n,f,l,p),si=!1;var I=n.memoizedState;f.state=I,na(n,l,f,c),ta(),R=n.memoizedState,_||I!==R||si?(typeof L=="function"&&(Gu(n,r,L,l),R=n.memoizedState),(S=si||Vm(n,r,S,l,I,R,p))?(M||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=R),f.props=l,f.state=R,f.context=p,l=S):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Tu(t,n),p=n.memoizedProps,M=es(r,p),f.props=M,L=n.pendingProps,I=f.context,R=r.contextType,S=zs,typeof R=="object"&&R!==null&&(S=St(R)),_=r.getDerivedStateFromProps,(R=typeof _=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==L||I!==S)&&jm(n,f,l,S),si=!1,I=n.memoizedState,f.state=I,na(n,l,f,c),ta();var N=n.memoizedState;p!==L||I!==N||si||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof _=="function"&&(Gu(n,r,_,l),N=n.memoizedState),(M=si||Vm(n,r,M,l,I,N,S)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?(R||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,S)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===t.memoizedProps&&I===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&I===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=S,l=M):(typeof f.componentDidUpdate!="function"||p===t.memoizedProps&&I===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&I===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,io(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=Ks(n,t.child,null,c),n.child=Ks(n,null,r,c)):ht(t,n,r,c),n.memoizedState=f.state,t=n.child):t=Hn(t,n,c),t}function sg(t,n,r,l){return Kr(),n.flags|=256,ht(t,n,r,l),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(t){return{baseLanes:t,cachePool:Yp()}}function Wu(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Jt),t}function rg(t,n,r){var l=n.pendingProps,c=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=t!==null&&t.memoizedState===null?!1:(tt.current&2)!==0),p&&(c=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(c?oi(n):ci(),ge){var _=Ve,S;if(S=_){e:{for(S=_,_=vn;S.nodeType!==8;){if(!_){_=null;break e}if(S=cn(S.nextSibling),S===null){_=null;break e}}_=S}_!==null?(n.memoizedState={dehydrated:_,treeContext:Fi!==null?{id:xn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},S=Ht(18,null,null,0),S.stateNode=_,S.return=n,n.child=S,Ct=n,Ve=null,S=!0):S=!1}S||Xi(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return kf(_)?n.lanes=32:n.lanes=536870912,null;Pn(n)}return _=l.children,l=l.fallback,c?(ci(),c=n.mode,_=so({mode:"hidden",children:_},c),l=Yi(l,c,r,null),_.return=n,l.return=n,_.sibling=l,n.child=_,c=n.child,c.memoizedState=Xu(r),c.childLanes=Wu(t,p,r),n.memoizedState=Qu,l):(oi(n),Zu(n,_))}if(S=t.memoizedState,S!==null&&(_=S.dehydrated,_!==null)){if(f)n.flags&256?(oi(n),n.flags&=-257,n=$u(t,n,r)):n.memoizedState!==null?(ci(),n.child=t.child,n.flags|=128,n=null):(ci(),c=l.fallback,_=n.mode,l=so({mode:"visible",children:l.children},_),c=Yi(c,_,r,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ks(n,t.child,null,r),l=n.child,l.memoizedState=Xu(r),l.childLanes=Wu(t,p,r),n.memoizedState=Qu,n=c);else if(oi(n),kf(_)){if(p=_.nextSibling&&_.nextSibling.dataset,p)var R=p.dgst;p=R,l=Error(a(419)),l.stack="",l.digest=p,Qr({value:l,source:null,stack:null}),n=$u(t,n,r)}else if(lt||Xr(t,n,r,!1),p=(r&t.childLanes)!==0,lt||p){if(p=ke,p!==null&&(l=r&-r,l=(l&42)!==0?1:kc(l),l=(l&(p.suspendedLanes|r))!==0?0:l,l!==0&&l!==S.retryLane))throw S.retryLane=l,Us(t,l),Gt(p,t,l),Wm;_.data==="$?"||_f(),n=$u(t,n,r)}else _.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=S.treeContext,Ve=cn(_.nextSibling),Ct=n,ge=!0,Qi=null,vn=!1,t!==null&&(Wt[Zt++]=xn,Wt[Zt++]=kn,Wt[Zt++]=Fi,xn=t.id,kn=t.overflow,Fi=n),n=Zu(n,l.children),n.flags|=4096);return n}return c?(ci(),c=l.fallback,_=n.mode,S=t.child,R=S.sibling,l=Dn(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,R!==null?c=Dn(R,c):(c=Yi(c,_,r,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,_=t.child.memoizedState,_===null?_=Xu(r):(S=_.cachePool,S!==null?(R=et._currentValue,S=S.parent!==R?{parent:R,pool:R}:S):S=Yp(),_={baseLanes:_.baseLanes|r,cachePool:S}),c.memoizedState=_,c.childLanes=Wu(t,p,r),n.memoizedState=Qu,l):(oi(n),r=t.child,t=r.sibling,r=Dn(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=r,n.memoizedState=null,r)}function Zu(t,n){return n=so({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function so(t,n){return t=Ht(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function $u(t,n,r){return Ks(n,t.child,null,r),t=Zu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ag(t,n,r){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),gu(t.return,n,r)}function Ju(t,n,r,l,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=c)}function lg(t,n,r){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(ht(t,n,l.children,r),l=tt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,r,n);else if(t.tag===19)ag(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(x(tt,l),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&eo(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Ju(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&eo(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Ju(n,!0,r,null,f);break;case"together":Ju(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hn(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),pi|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Xr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=Dn(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Dn(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function ZS(t,n,r){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),ii(n,et,t.memoizedState.cache),Kr();break;case 27:case 5:De(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:ii(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(oi(n),n.flags|=128,null):(r&n.child.childLanes)!==0?rg(t,n,r):(oi(n),t=Hn(t,n,r),t!==null?t.sibling:null);oi(n);break;case 19:var c=(t.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Xr(t,n,r,!1),l=(r&n.childLanes)!==0),c){if(l)return lg(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),x(tt,tt.current),l)break;return null;case 22:case 23:return n.lanes=0,eg(t,n,r);case 24:ii(n,et,t.memoizedState.cache)}return Hn(t,n,r)}function og(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)lt=!0;else{if(!ef(t,r)&&(n.flags&128)===0)return lt=!1,ZS(t,n,r);lt=(t.flags&131072)!==0}else lt=!1,ge&&(n.flags&1048576)!==0&&Pp(n,zl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")cu(l)?(t=es(l,t),n.tag=1,n=ig(null,n,l,t,r)):(n.tag=0,n=Ku(null,n,l,t,r));else{if(l!=null){if(c=l.$$typeof,c===Re){n.tag=11,n=Zm(null,n,l,t,r);break e}else if(c===Pe){n.tag=14,n=$m(null,n,l,t,r);break e}}throw n=gn(l)||l,Error(a(306,n,""))}}return n;case 0:return Ku(t,n,n.type,n.pendingProps,r);case 1:return l=n.type,c=es(l,n.pendingProps),ig(t,n,l,c,r);case 3:e:{if(Y(n,n.stateNode.containerInfo),t===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(t,n),na(n,l,null,r);var p=n.memoizedState;if(l=p.cache,ii(n,et,l),l!==f.cache&&_u(n,[et],r,!0),ta(),l=p.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sg(t,n,l,r);break e}else if(l!==c){c=Qt(Error(a(424)),n),Qr(c),n=sg(t,n,l,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=cn(t.firstChild),Ct=n,ge=!0,Qi=null,vn=!0,r=Bm(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Kr(),l===c){n=Hn(t,n,r);break e}ht(t,n,l,r)}n=n.child}return n;case 26:return io(t,n),t===null?(r=h_(n.type,null,n.pendingProps,null))?n.memoizedState=r:ge||(r=n.type,t=n.pendingProps,l=vo(B.current).createElement(r),l[Et]=n,l[It]=t,pt(l,r,t),at(l),n.stateNode=l):n.memoizedState=h_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return De(n),t===null&&ge&&(l=n.stateNode=c_(n.type,n.pendingProps,B.current),Ct=n,vn=!0,c=Ve,yi(n.type)?(Lf=c,Ve=cn(l.firstChild)):Ve=c),ht(t,n,n.pendingProps.children,r),io(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((c=l=Ve)&&(l=wb(l,n.type,n.pendingProps,vn),l!==null?(n.stateNode=l,Ct=n,Ve=cn(l.firstChild),vn=!1,c=!0):c=!1),c||Xi(n)),De(n),c=n.type,f=n.pendingProps,p=t!==null?t.memoizedProps:null,l=f.children,Mf(c,f)?l=null:p!==null&&Mf(c,p)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,jS,null,null,r),Ca._currentValue=c),io(t,n),ht(t,n,l,r),n.child;case 6:return t===null&&ge&&((t=r=Ve)&&(r=Ab(r,n.pendingProps,vn),r!==null?(n.stateNode=r,Ct=n,Ve=null,t=!0):t=!1),t||Xi(n)),null;case 13:return rg(t,n,r);case 4:return Y(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ks(n,null,l,r):ht(t,n,l,r),n.child;case 11:return Zm(t,n,n.type,n.pendingProps,r);case 7:return ht(t,n,n.pendingProps,r),n.child;case 8:return ht(t,n,n.pendingProps.children,r),n.child;case 12:return ht(t,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,ii(n,n.type,l.value),ht(t,n,l.children,r),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,Zi(n),c=St(c),l=l(c),n.flags|=1,ht(t,n,l,r),n.child;case 14:return $m(t,n,n.type,n.pendingProps,r);case 15:return Jm(t,n,n.type,n.pendingProps,r);case 19:return lg(t,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},t===null?(r=so(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Dn(t.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return eg(t,n,r);case 24:return Zi(n),l=St(et),t===null?(c=Eu(),c===null&&(c=ke,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:l,cache:c},bu(n),ii(n,et,c)):((t.lanes&r)!==0&&(Tu(t,n),na(n,null,null,r),ta()),c=t.memoizedState,f=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ii(n,et,l)):(l=f.cache,ii(n,et,l),l!==c.cache&&_u(n,[et],r,!0))),ht(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Bn(t){t.flags|=4}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!__(n)){if(n=$t.current,n!==null&&((de&4194048)===de?En!==null:(de&62914560)!==de&&(de&536870912)===0||n!==En))throw Jr=Su,Fp;t.flags|=8192}}function ro(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?qd():536870912,t.lanes|=n,Zs|=n)}function ca(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Be(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=r,n}function $S(t,n,r){var l=n.pendingProps;switch(du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return Be(n),null;case 3:return r=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Un(et),he(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?Bn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qp())),Be(n),null;case 26:return r=n.memoizedState,t===null?(Bn(n),r!==null?(Be(n),cg(n,r)):(Be(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Bn(n),Be(n),cg(n,r)):(Be(n),n.flags&=-16777217):(t.memoizedProps!==l&&Bn(n),Be(n),n.flags&=-16777217),null;case 27:ye(n),r=B.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Bn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Be(n),null}t=z.current,Fr(n)?Hp(n):(t=c_(c,l,r),n.stateNode=t,Bn(n))}return Be(n),null;case 5:if(ye(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Bn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Be(n),null}if(t=z.current,Fr(n))Hp(n);else{switch(c=vo(B.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(r,{is:l.is}):c.createElement(r)}}t[Et]=n,t[It]=l;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(pt(t,r,l),r){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Bn(n)}}return Be(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Bn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(t=B.current,Fr(n)){if(t=n.stateNode,r=n.memoizedProps,l=null,c=Ct,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[Et]=n,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||n_(t.nodeValue,r)),t||Xi(n)}else t=vo(t).createTextNode(l),t[Et]=n,n.stateNode=t}return Be(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Et]=n}else Kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),c=!1}else c=qp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Pn(n),n):(Pn(n),null)}if(Pn(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,t=t!==null&&t.memoizedState!==null,r){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),ro(n,n.updateQueue),Be(n),null;case 4:return he(),t===null&&Af(n.stateNode.containerInfo),Be(n),null;case 10:return Un(n.type),Be(n),null;case 19:if(D(tt),c=n.memoizedState,c===null)return Be(n),null;if(l=(n.flags&128)!==0,f=c.rendering,f===null)if(l)ca(c,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=eo(t),f!==null){for(n.flags|=128,ca(c,!1),t=f.updateQueue,n.updateQueue=t,ro(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)zp(r,t),r=r.sibling;return x(tt,tt.current&1|2),n.child}t=t.sibling}c.tail!==null&&qe()>oo&&(n.flags|=128,l=!0,ca(c,!1),n.lanes=4194304)}else{if(!l)if(t=eo(f),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,ro(n,t),ca(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!ge)return Be(n),null}else 2*qe()-c.renderingStartTime>oo&&r!==536870912&&(n.flags|=128,l=!0,ca(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=qe(),n.sibling=null,t=tt.current,x(tt,l?t&1|2:t&1),n):(Be(n),null);case 22:case 23:return Pn(n),Ru(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),r=n.updateQueue,r!==null&&ro(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),t!==null&&D($i),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Un(et),Be(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function JS(t,n){switch(du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Un(et),he(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ye(n),null;case 13:if(Pn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Kr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return D(tt),null;case 4:return he(),null;case 10:return Un(n.type),null;case 22:case 23:return Pn(n),Ru(),t!==null&&D($i),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Un(et),null;case 25:return null;default:return null}}function ug(t,n){switch(du(n),n.tag){case 3:Un(et),he();break;case 26:case 27:case 5:ye(n);break;case 4:he();break;case 13:Pn(n);break;case 19:D(tt);break;case 10:Un(n.type);break;case 22:case 23:Pn(n),Ru(),t!==null&&D($i);break;case 24:Un(et)}}function ua(t,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){l=void 0;var f=r.create,p=r.inst;l=f(),p.destroy=l}r=r.next}while(r!==c)}}catch(_){Ne(n,n.return,_)}}function ui(t,n,r){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&t)===t){var p=l.inst,_=p.destroy;if(_!==void 0){p.destroy=void 0,c=n;var S=r,R=_;try{R()}catch(M){Ne(c,S,M)}}}l=l.next}while(l!==f)}}catch(M){Ne(n,n.return,M)}}function fg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{$p(n,r)}catch(l){Ne(t,t.return,l)}}}function hg(t,n,r){r.props=es(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Ne(t,n,l)}}function fa(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(c){Ne(t,n,c)}}function Sn(t,n){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ne(t,n,c)}else r.current=null}function dg(t){var n=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(c){Ne(t,t.return,c)}}function tf(t,n,r){try{var l=t.stateNode;Eb(l,t.type,r,n),l[It]=n}catch(c){Ne(t,t.return,c)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&yi(t.type)||t.tag===4}function nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&yi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=yo));else if(l!==4&&(l===27&&yi(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,r),t=t.sibling;t!==null;)sf(t,n,r),t=t.sibling}function ao(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(l!==4&&(l===27&&yi(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(ao(t,n,r),t=t.sibling;t!==null;)ao(t,n,r),t=t.sibling}function mg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);pt(n,l,r),n[Et]=t,n[It]=r}catch(f){Ne(t,t.return,f)}}var qn=!1,Qe=!1,rf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,ot=null;function eb(t,n){if(t=t.containerInfo,Nf=wo,t=Rp(t),nu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var p=0,_=-1,S=-1,R=0,M=0,L=t,I=null;t:for(;;){for(var N;L!==r||c!==0&&L.nodeType!==3||(_=p+c),L!==f||l!==0&&L.nodeType!==3||(S=p+l),L.nodeType===3&&(p+=L.nodeValue.length),(N=L.firstChild)!==null;)I=L,L=N;for(;;){if(L===t)break t;if(I===r&&++R===c&&(_=p),I===f&&++M===l&&(S=p),(N=L.nextSibling)!==null)break;L=I,I=L.parentNode}L=N}r=_===-1||S===-1?null:{start:_,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Of={focusedElem:t,selectionRange:r},wo=!1,ot=n;ot!==null;)if(n=ot,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,ot=t;else for(;ot!==null;){switch(n=ot,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var te=es(r.type,c,r.elementType===r.type);t=l.getSnapshotBeforeUpdate(te,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(W){Ne(r,r.return,W)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)xf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,ot=t;break}ot=n.return}}function _g(t,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:fi(t,r),l&4&&ua(5,r);break;case 1:if(fi(t,r),l&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(p){Ne(r,r.return,p)}else{var c=es(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Ne(r,r.return,p)}}l&64&&fg(r),l&512&&fa(r,r.return);break;case 3:if(fi(t,r),l&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{$p(t,n)}catch(p){Ne(r,r.return,p)}}break;case 27:n===null&&l&4&&mg(r);case 26:case 5:fi(t,r),n===null&&l&4&&dg(r),l&512&&fa(r,r.return);break;case 12:fi(t,r);break;case 13:fi(t,r),l&4&&Eg(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=cb.bind(null,r),Rb(t,r))));break;case 22:if(l=r.memoizedState!==null||qn,!l){n=n!==null&&n.memoizedState!==null||Qe,c=qn;var f=Qe;qn=l,(Qe=n)&&!f?hi(t,r,(r.subtreeFlags&8772)!==0):fi(t,r),qn=c,Qe=f}break;case 30:break;default:fi(t,r)}}function yg(t){var n=t.alternate;n!==null&&(t.alternate=null,yg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zc(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var He=null,Mt=!1;function Vn(t,n,r){for(r=r.child;r!==null;)vg(t,n,r),r=r.sibling}function vg(t,n,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ei,r)}catch{}switch(r.tag){case 26:Qe||Sn(r,n),Vn(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Qe||Sn(r,n);var l=He,c=Mt;yi(r.type)&&(He=r.stateNode,Mt=!1),Vn(t,n,r),Ea(r.stateNode),He=l,Mt=c;break;case 5:Qe||Sn(r,n);case 6:if(l=He,c=Mt,He=null,Vn(t,n,r),He=l,Mt=c,He!==null)if(Mt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(r.stateNode)}catch(f){Ne(r,n,f)}else try{He.removeChild(r.stateNode)}catch(f){Ne(r,n,f)}break;case 18:He!==null&&(Mt?(t=He,l_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ia(t)):l_(He,r.stateNode));break;case 4:l=He,c=Mt,He=r.stateNode.containerInfo,Mt=!0,Vn(t,n,r),He=l,Mt=c;break;case 0:case 11:case 14:case 15:Qe||ui(2,r,n),Qe||ui(4,r,n),Vn(t,n,r);break;case 1:Qe||(Sn(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&hg(r,n,l)),Vn(t,n,r);break;case 21:Vn(t,n,r);break;case 22:Qe=(l=Qe)||r.memoizedState!==null,Vn(t,n,r),Qe=l;break;default:Vn(t,n,r)}}function Eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ia(t)}catch(r){Ne(n,n.return,r)}}function tb(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(a(435,t.tag))}}function af(t,n){var r=tb(t);n.forEach(function(l){var c=ub.bind(null,t,l);r.has(l)||(r.add(l),l.then(c,c))})}function Bt(t,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],f=t,p=n,_=p;e:for(;_!==null;){switch(_.tag){case 27:if(yi(_.type)){He=_.stateNode,Mt=!1;break e}break;case 5:He=_.stateNode,Mt=!1;break e;case 3:case 4:He=_.stateNode.containerInfo,Mt=!0;break e}_=_.return}if(He===null)throw Error(a(160));vg(f,p,c),He=null,Mt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var on=null;function Sg(t,n){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bt(n,t),qt(t),l&4&&(ui(3,t,t.return),ua(3,t),ui(5,t,t.return));break;case 1:Bt(n,t),qt(t),l&512&&(Qe||r===null||Sn(r,r.return)),l&64&&qn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var c=on;if(Bt(n,t),qt(t),l&512&&(Qe||r===null||Sn(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Lr]||f[Et]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),pt(f,l,r),f[Et]=t,at(f),l=f;break e;case"link":var p=m_("link","href",c).get(l+(r.href||""));if(p){for(var _=0;_<p.length;_++)if(f=p[_],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(_,1);break t}}f=c.createElement(l),pt(f,l,r),c.head.appendChild(f);break;case"meta":if(p=m_("meta","content",c).get(l+(r.content||""))){for(_=0;_<p.length;_++)if(f=p[_],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(_,1);break t}}f=c.createElement(l),pt(f,l,r),c.head.appendChild(f);break;default:throw Error(a(468,l))}f[Et]=t,at(f),l=f}t.stateNode=l}else g_(c,t.type,t.stateNode);else t.stateNode=p_(c,l,t.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?g_(c,t.type,t.stateNode):p_(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&tf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Bt(n,t),qt(t),l&512&&(Qe||r===null||Sn(r,r.return)),r!==null&&l&4&&tf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Bt(n,t),qt(t),l&512&&(Qe||r===null||Sn(r,r.return)),t.flags&32){c=t.stateNode;try{Ns(c,"")}catch(N){Ne(t,t.return,N)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,tf(t,c,r!==null?r.memoizedProps:c)),l&1024&&(rf=!0);break;case 6:if(Bt(n,t),qt(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(N){Ne(t,t.return,N)}}break;case 3:if(bo=null,c=on,on=Eo(n.containerInfo),Bt(n,t),on=c,qt(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ia(n.containerInfo)}catch(N){Ne(t,t.return,N)}rf&&(rf=!1,bg(t));break;case 4:l=on,on=Eo(t.stateNode.containerInfo),Bt(n,t),qt(t),on=l;break;case 12:Bt(n,t),qt(t);break;case 13:Bt(n,t),qt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hf=qe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,af(t,l)));break;case 22:c=t.memoizedState!==null;var S=r!==null&&r.memoizedState!==null,R=qn,M=Qe;if(qn=R||c,Qe=M||S,Bt(n,t),Qe=M,qn=R,qt(t),l&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||S||qn||Qe||ts(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){S=r=n;try{if(f=S.stateNode,c)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{_=S.stateNode;var L=S.memoizedProps.style,I=L!=null&&L.hasOwnProperty("display")?L.display:null;_.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(N){Ne(S,S.return,N)}}}else if(n.tag===6){if(r===null){S=n;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(N){Ne(S,S.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,af(t,r))));break;case 19:Bt(n,t),qt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,af(t,l)));break;case 30:break;case 21:break;default:Bt(n,t),qt(t)}}function qt(t){var n=t.flags;if(n&2){try{for(var r,l=t.return;l!==null;){if(pg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,f=nf(t);ao(t,f,c);break;case 5:var p=r.stateNode;r.flags&32&&(Ns(p,""),r.flags&=-33);var _=nf(t);ao(t,_,p);break;case 3:case 4:var S=r.stateNode.containerInfo,R=nf(t);sf(t,R,S);break;default:throw Error(a(161))}}catch(M){Ne(t,t.return,M)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ui(4,n,n.return),ts(n);break;case 1:Sn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&hg(n,n.return,r),ts(n);break;case 27:Ea(n.stateNode);case 26:case 5:Sn(n,n.return),ts(n);break;case 22:n.memoizedState===null&&ts(n);break;case 30:ts(n);break;default:ts(n)}t=t.sibling}}function hi(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=t,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:hi(c,f,r),ua(4,f);break;case 1:if(hi(c,f,r),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(R){Ne(l,l.return,R)}if(l=f,c=l.updateQueue,c!==null){var _=l.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)Zp(S[c],_)}catch(R){Ne(l,l.return,R)}}r&&p&64&&fg(f),fa(f,f.return);break;case 27:mg(f);case 26:case 5:hi(c,f,r),r&&l===null&&p&4&&dg(f),fa(f,f.return);break;case 12:hi(c,f,r);break;case 13:hi(c,f,r),r&&p&4&&Eg(c,f);break;case 22:f.memoizedState===null&&hi(c,f,r),fa(f,f.return);break;case 30:break;default:hi(c,f,r)}n=n.sibling}}function lf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Wr(r))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wr(t))}function bn(t,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(t,n,r,l),n=n.sibling}function Tg(t,n,r,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bn(t,n,r,l),c&2048&&ua(9,n);break;case 1:bn(t,n,r,l);break;case 3:bn(t,n,r,l),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wr(t)));break;case 12:if(c&2048){bn(t,n,r,l),t=n.stateNode;try{var f=n.memoizedProps,p=f.id,_=f.onPostCommit;typeof _=="function"&&_(p,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ne(n,n.return,S)}}else bn(t,n,r,l);break;case 13:bn(t,n,r,l);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?bn(t,n,r,l):ha(t,n):f._visibility&2?bn(t,n,r,l):(f._visibility|=2,Qs(t,n,r,l,(n.subtreeFlags&10256)!==0)),c&2048&&lf(p,n);break;case 24:bn(t,n,r,l),c&2048&&of(n.alternate,n);break;default:bn(t,n,r,l)}}function Qs(t,n,r,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,p=n,_=r,S=l,R=p.flags;switch(p.tag){case 0:case 11:case 15:Qs(f,p,_,S,c),ua(8,p);break;case 23:break;case 22:var M=p.stateNode;p.memoizedState!==null?M._visibility&2?Qs(f,p,_,S,c):ha(f,p):(M._visibility|=2,Qs(f,p,_,S,c)),c&&R&2048&&lf(p.alternate,p);break;case 24:Qs(f,p,_,S,c),c&&R&2048&&of(p.alternate,p);break;default:Qs(f,p,_,S,c)}n=n.sibling}}function ha(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,l=n,c=l.flags;switch(l.tag){case 22:ha(r,l),c&2048&&lf(l.alternate,l);break;case 24:ha(r,l),c&2048&&of(l.alternate,l);break;default:ha(r,l)}n=n.sibling}}var da=8192;function Xs(t){if(t.subtreeFlags&da)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 26:Xs(t),t.flags&da&&t.memoizedState!==null&&Bb(on,t.memoizedState,t.memoizedProps);break;case 5:Xs(t);break;case 3:case 4:var n=on;on=Eo(t.stateNode.containerInfo),Xs(t),on=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=da,da=16777216,Xs(t),da=n):Xs(t));break;default:Xs(t)}}function wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function pa(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];ot=l,Rg(l,t)}wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:pa(t),t.flags&2048&&ui(9,t,t.return);break;case 3:pa(t);break;case 12:pa(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,lo(t)):pa(t);break;default:pa(t)}}function lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];ot=l,Rg(l,t)}wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ui(8,n,n.return),lo(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,lo(n));break;default:lo(n)}t=t.sibling}}function Rg(t,n){for(;ot!==null;){var r=ot;switch(r.tag){case 0:case 11:case 15:ui(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wr(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,ot=l;else e:for(r=t;ot!==null;){l=ot;var c=l.sibling,f=l.return;if(yg(l),l===r){ot=null;break e}if(c!==null){c.return=f,ot=c;break e}ot=f}}}var nb={getCacheForType:function(t){var n=St(et),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},ib=typeof WeakMap=="function"?WeakMap:Map,Ee=0,ke=null,ce=null,de=0,Se=0,Vt=null,di=!1,Ws=!1,cf=!1,jn=0,je=0,pi=0,ns=0,uf=0,Jt=0,Zs=0,ma=null,Dt=null,ff=!1,hf=0,oo=1/0,co=null,mi=null,dt=0,gi=null,$s=null,Js=0,df=0,pf=null,Ig=null,ga=0,mf=null;function jt(){if((Ee&2)!==0&&de!==0)return de&-de;if(O.T!==null){var t=Bs;return t!==0?t:bf()}return Gd()}function Ng(){Jt===0&&(Jt=(de&536870912)===0||ge?Bd():536870912);var t=$t.current;return t!==null&&(t.flags|=32),Jt}function Gt(t,n,r){(t===ke&&(Se===2||Se===9)||t.cancelPendingCommit!==null)&&(er(t,0),_i(t,de,Jt,!1)),kr(t,r),((Ee&2)===0||t!==ke)&&(t===ke&&((Ee&2)===0&&(ns|=r),je===4&&_i(t,de,Jt,!1)),Tn(t))}function Og(t,n,r){if((Ee&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&t.expiredLanes)===0||xr(t,n),c=l?ab(t,n):yf(t,n,!0),f=l;do{if(c===0){Ws&&!l&&_i(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!sb(r)){c=yf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var _=t;c=ma;var S=_.current.memoizedState.isDehydrated;if(S&&(er(_,p).flags|=256),p=yf(_,p,!1),p!==2){if(cf&&!S){_.errorRecoveryDisabledLanes|=f,ns|=f,c=4;break e}f=Dt,Dt=c,f!==null&&(Dt===null?Dt=f:Dt.push.apply(Dt,f))}c=p}if(f=!1,c!==2)continue}}if(c===1){er(t,0),_i(t,n,0,!0);break}e:{switch(l=t,f=c,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:_i(l,n,Jt,!di);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=hf+300-qe(),10<c)){if(_i(l,n,Jt,!di),El(l,0,!0)!==0)break e;l.timeoutHandle=r_(Mg.bind(null,l,r,Dt,co,ff,n,Jt,ns,Zs,di,f,2,-0,0),c);break e}Mg(l,r,Dt,co,ff,n,Jt,ns,Zs,di,f,0,-0,0)}}break}while(!0);Tn(t)}function Mg(t,n,r,l,c,f,p,_,S,R,M,L,I,N){if(t.timeoutHandle=-1,L=n.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(Ta={stylesheets:null,count:0,unsuspend:Hb},Cg(n),L=qb(),L!==null)){t.cancelPendingCommit=L(Pg.bind(null,t,n,f,r,l,c,p,_,S,M,1,I,N)),_i(t,f,p,!R);return}Pg(t,n,f,r,l,c,p,_,S)}function sb(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var c=r[l],f=c.getSnapshot;c=c.value;try{if(!Pt(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _i(t,n,r,l){n&=~uf,n&=~ns,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var c=n;0<c;){var f=31-vt(c),p=1<<f;l[f]=-1,c&=~p}r!==0&&Vd(t,r,n)}function uo(){return(Ee&6)===0?(_a(0),!1):!0}function gf(){if(ce!==null){if(Se===0)var t=ce.return;else t=ce,Ln=Wi=null,Du(t),Fs=null,la=0,t=ce;for(;t!==null;)ug(t.alternate,t),t=t.return;ce=null}}function er(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,bb(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),gf(),ke=t,ce=r=Dn(t.current,null),de=n,Se=0,Vt=null,di=!1,Ws=xr(t,n),cf=!1,Zs=Jt=uf=ns=pi=je=0,Dt=ma=null,ff=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var c=31-vt(l),f=1<<c;n|=t[c],l&=~f}return jn=n,Dl(),r}function Dg(t,n){se=null,O.H=Zl,n===$r||n===ql?(n=Xp(),Se=3):n===Fp?(n=Xp(),Se=4):Se=n===Wm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vt=n,ce===null&&(je=1,no(t,Qt(n,t.current)))}function xg(){var t=O.H;return O.H=Zl,t===null?Zl:t}function kg(){var t=O.A;return O.A=nb,t}function _f(){je=4,di||(de&4194048)!==de&&$t.current!==null||(Ws=!0),(pi&134217727)===0&&(ns&134217727)===0||ke===null||_i(ke,de,Jt,!1)}function yf(t,n,r){var l=Ee;Ee|=2;var c=xg(),f=kg();(ke!==t||de!==n)&&(co=null,er(t,n)),n=!1;var p=je;e:do try{if(Se!==0&&ce!==null){var _=ce,S=Vt;switch(Se){case 8:gf(),p=6;break e;case 3:case 2:case 9:case 6:$t.current===null&&(n=!0);var R=Se;if(Se=0,Vt=null,tr(t,_,S,R),r&&Ws){p=0;break e}break;default:R=Se,Se=0,Vt=null,tr(t,_,S,R)}}rb(),p=je;break}catch(M){Dg(t,M)}while(!0);return n&&t.shellSuspendCounter++,Ln=Wi=null,Ee=l,O.H=c,O.A=f,ce===null&&(ke=null,de=0,Dl()),p}function rb(){for(;ce!==null;)Lg(ce)}function ab(t,n){var r=Ee;Ee|=2;var l=xg(),c=kg();ke!==t||de!==n?(co=null,oo=qe()+500,er(t,n)):Ws=xr(t,n);e:do try{if(Se!==0&&ce!==null){n=ce;var f=Vt;t:switch(Se){case 1:Se=0,Vt=null,tr(t,n,f,1);break;case 2:case 9:if(Kp(f)){Se=0,Vt=null,Ug(n);break}n=function(){Se!==2&&Se!==9||ke!==t||(Se=7),Tn(t)},f.then(n,n);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Kp(f)?(Se=0,Vt=null,Ug(n)):(Se=0,Vt=null,tr(t,n,f,7));break;case 5:var p=null;switch(ce.tag){case 26:p=ce.memoizedState;case 5:case 27:var _=ce;if(!p||__(p)){Se=0,Vt=null;var S=_.sibling;if(S!==null)ce=S;else{var R=_.return;R!==null?(ce=R,fo(R)):ce=null}break t}}Se=0,Vt=null,tr(t,n,f,5);break;case 6:Se=0,Vt=null,tr(t,n,f,6);break;case 8:gf(),je=6;break e;default:throw Error(a(462))}}lb();break}catch(M){Dg(t,M)}while(!0);return Ln=Wi=null,O.H=l,O.A=c,Ee=r,ce!==null?0:(ke=null,de=0,Dl(),je)}function lb(){for(;ce!==null&&!yt();)Lg(ce)}function Lg(t){var n=og(t.alternate,t,jn);t.memoizedProps=t.pendingProps,n===null?fo(t):ce=n}function Ug(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=ng(r,n,n.pendingProps,n.type,void 0,de);break;case 11:n=ng(r,n,n.pendingProps,n.type.render,n.ref,de);break;case 5:Du(n);default:ug(r,n),n=ce=zp(n,jn),n=og(r,n,jn)}t.memoizedProps=t.pendingProps,n===null?fo(t):ce=n}function tr(t,n,r,l){Ln=Wi=null,Du(n),Fs=null,la=0;var c=n.return;try{if(WS(t,c,n,r,de)){je=1,no(t,Qt(r,t.current)),ce=null;return}}catch(f){if(c!==null)throw ce=c,f;je=1,no(t,Qt(r,t.current)),ce=null;return}n.flags&32768?(ge||l===1?t=!0:Ws||(de&536870912)!==0?t=!1:(di=t=!0,(l===2||l===9||l===3||l===6)&&(l=$t.current,l!==null&&l.tag===13&&(l.flags|=16384))),zg(n,t)):fo(n)}function fo(t){var n=t;do{if((n.flags&32768)!==0){zg(n,di);return}t=n.return;var r=$S(n.alternate,n,jn);if(r!==null){ce=r;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=t}while(n!==null);je===0&&(je=5)}function zg(t,n){do{var r=JS(t.alternate,t);if(r!==null){r.flags&=32767,ce=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){ce=t;return}ce=t=r}while(t!==null);je=6,ce=null}function Pg(t,n,r,l,c,f,p,_,S){t.cancelPendingCommit=null;do ho();while(dt!==0);if((Ee&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=lu,H0(t,r,f,p,_,S),t===ke&&(ce=ke=null,de=0),$s=n,gi=t,Js=r,df=f,pf=c,Ig=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fb(Es,function(){return jg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,c=q.p,q.p=2,p=Ee,Ee|=4;try{eb(t,n,r)}finally{Ee=p,q.p=c,O.T=l}}dt=1,Hg(),Bg(),qg()}}function Hg(){if(dt===1){dt=0;var t=gi,n=$s,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=q.p;q.p=2;var c=Ee;Ee|=4;try{Sg(n,t);var f=Of,p=Rp(t.containerInfo),_=f.focusedElem,S=f.selectionRange;if(p!==_&&_&&_.ownerDocument&&Ap(_.ownerDocument.documentElement,_)){if(S!==null&&nu(_)){var R=S.start,M=S.end;if(M===void 0&&(M=R),"selectionStart"in _)_.selectionStart=R,_.selectionEnd=Math.min(M,_.value.length);else{var L=_.ownerDocument||document,I=L&&L.defaultView||window;if(I.getSelection){var N=I.getSelection(),te=_.textContent.length,W=Math.min(S.start,te),Ce=S.end===void 0?W:Math.min(S.end,te);!N.extend&&W>Ce&&(p=Ce,Ce=W,W=p);var w=wp(_,W),C=wp(_,Ce);if(w&&C&&(N.rangeCount!==1||N.anchorNode!==w.node||N.anchorOffset!==w.offset||N.focusNode!==C.node||N.focusOffset!==C.offset)){var A=L.createRange();A.setStart(w.node,w.offset),N.removeAllRanges(),W>Ce?(N.addRange(A),N.extend(C.node,C.offset)):(A.setEnd(C.node,C.offset),N.addRange(A))}}}}for(L=[],N=_;N=N.parentNode;)N.nodeType===1&&L.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<L.length;_++){var k=L[_];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}wo=!!Nf,Of=Nf=null}finally{Ee=c,q.p=l,O.T=r}}t.current=n,dt=2}}function Bg(){if(dt===2){dt=0;var t=gi,n=$s,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=q.p;q.p=2;var c=Ee;Ee|=4;try{_g(t,n.alternate,n)}finally{Ee=c,q.p=l,O.T=r}}dt=3}}function qg(){if(dt===4||dt===3){dt=0,Ut();var t=gi,n=$s,r=Js,l=Ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dt=5:(dt=0,$s=gi=null,Vg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(mi=null),Lc(r),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ei,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,c=q.p,q.p=2,O.T=null;try{for(var f=t.onRecoverableError,p=0;p<l.length;p++){var _=l[p];f(_.value,{componentStack:_.stack})}}finally{O.T=n,q.p=c}}(Js&3)!==0&&ho(),Tn(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===mf?ga++:(ga=0,mf=t):ga=0,_a(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Wr(n)))}function ho(t){return Hg(),Bg(),qg(),jg()}function jg(){if(dt!==5)return!1;var t=gi,n=df;df=0;var r=Lc(Js),l=O.T,c=q.p;try{q.p=32>r?32:r,O.T=null,r=pf,pf=null;var f=gi,p=Js;if(dt=0,$s=gi=null,Js=0,(Ee&6)!==0)throw Error(a(331));var _=Ee;if(Ee|=4,Ag(f.current),Tg(f,f.current,p,r),Ee=_,_a(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ei,f)}catch{}return!0}finally{q.p=c,O.T=l,Vg(t,n)}}function Gg(t,n,r){n=Qt(r,n),n=Fu(t.stateNode,n,2),t=ai(t,n,2),t!==null&&(kr(t,2),Tn(t))}function Ne(t,n,r){if(t.tag===3)Gg(t,t,r);else for(;n!==null;){if(n.tag===3){Gg(n,t,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mi===null||!mi.has(l))){t=Qt(r,t),r=Qm(2),l=ai(n,r,2),l!==null&&(Xm(r,l,n,t),kr(l,2),Tn(l));break}}n=n.return}}function vf(t,n,r){var l=t.pingCache;if(l===null){l=t.pingCache=new ib;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(r)||(cf=!0,c.add(r),t=ob.bind(null,t,n,r),n.then(t,t))}function ob(t,n,r){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,ke===t&&(de&r)===r&&(je===4||je===3&&(de&62914560)===de&&300>qe()-hf?(Ee&2)===0&&er(t,0):uf|=r,Zs===de&&(Zs=0)),Tn(t)}function Yg(t,n){n===0&&(n=qd()),t=Us(t,n),t!==null&&(kr(t,n),Tn(t))}function cb(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Yg(t,r)}function ub(t,n){var r=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),Yg(t,r)}function fb(t,n){return Fe(t,n)}var po=null,nr=null,Ef=!1,mo=!1,Sf=!1,is=0;function Tn(t){t!==nr&&t.next===null&&(nr===null?po=nr=t:nr=nr.next=t),mo=!0,Ef||(Ef=!0,db())}function _a(t,n){if(!Sf&&mo){Sf=!0;do for(var r=!1,l=po;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var p=l.suspendedLanes,_=l.pingedLanes;f=(1<<31-vt(42|t)+1)-1,f&=c&~(p&~_),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Xg(l,f))}else f=de,f=El(l,l===ke?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||xr(l,f)||(r=!0,Xg(l,f));l=l.next}while(r);Sf=!1}}function hb(){Fg()}function Fg(){mo=Ef=!1;var t=0;is!==0&&(Sb()&&(t=is),is=0);for(var n=qe(),r=null,l=po;l!==null;){var c=l.next,f=Kg(l,n);f===0?(l.next=null,r===null?po=c:r.next=c,c===null&&(nr=r)):(r=l,(t!==0||(f&3)!==0)&&(mo=!0)),l=c}_a(t)}function Kg(t,n){for(var r=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var p=31-vt(f),_=1<<p,S=c[p];S===-1?((_&r)===0||(_&l)!==0)&&(c[p]=P0(_,n)):S<=n&&(t.expiredLanes|=_),f&=~_}if(n=ke,r=de,r=El(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===n&&(Se===2||Se===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&oe(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||xr(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(l!==null&&oe(l),Lc(r)){case 2:case 8:r=zt;break;case 32:r=Es;break;case 268435456:r=gl;break;default:r=Es}return l=Qg.bind(null,t),r=Fe(r,l),t.callbackPriority=n,t.callbackNode=r,n}return l!==null&&l!==null&&oe(l),t.callbackPriority=2,t.callbackNode=null,2}function Qg(t,n){if(dt!==0&&dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(ho()&&t.callbackNode!==r)return null;var l=de;return l=El(t,t===ke?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Og(t,l,n),Kg(t,qe()),t.callbackNode!=null&&t.callbackNode===r?Qg.bind(null,t):null)}function Xg(t,n){if(ho())return null;Og(t,n,!0)}function db(){Tb(function(){(Ee&6)!==0?Fe(_n,hb):Fg()})}function bf(){return is===0&&(is=Bd()),is}function Wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(""+t)}function Zg(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function pb(t,n,r,l,c){if(n==="submit"&&r&&r.stateNode===c){var f=Wg((c[It]||null).action),p=l.submitter;p&&(n=(n=p[It]||null)?Wg(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var _=new Nl("action","action",null,l,c);t.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(is!==0){var S=p?Zg(c,p):new FormData(c);qu(r,{pending:!0,data:S,method:c.method,action:f},null,S)}}else typeof f=="function"&&(_.preventDefault(),S=p?Zg(c,p):new FormData(c),qu(r,{pending:!0,data:S,method:c.method,action:f},f,S))},currentTarget:c}]})}}for(var Tf=0;Tf<au.length;Tf++){var Cf=au[Tf],mb=Cf.toLowerCase(),gb=Cf[0].toUpperCase()+Cf.slice(1);ln(mb,"on"+gb)}ln(Op,"onAnimationEnd"),ln(Mp,"onAnimationIteration"),ln(Dp,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(xS,"onTransitionRun"),ln(kS,"onTransitionStart"),ln(LS,"onTransitionCancel"),ln(xp,"onTransitionEnd"),As("onMouseEnter",["mouseout","mouseover"]),As("onMouseLeave",["mouseout","mouseover"]),As("onPointerEnter",["pointerout","pointerover"]),As("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya));function $g(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var p=l.length-1;0<=p;p--){var _=l[p],S=_.instance,R=_.currentTarget;if(_=_.listener,S!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=R;try{f(c)}catch(M){to(M)}c.currentTarget=null,f=S}else for(p=0;p<l.length;p++){if(_=l[p],S=_.instance,R=_.currentTarget,_=_.listener,S!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=R;try{f(c)}catch(M){to(M)}c.currentTarget=null,f=S}}}}function ue(t,n){var r=n[Uc];r===void 0&&(r=n[Uc]=new Set);var l=t+"__bubble";r.has(l)||(Jg(n,t,2,!1),r.add(l))}function wf(t,n,r){var l=0;n&&(l|=4),Jg(r,t,l,n)}var go="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[go]){t[go]=!0,Fd.forEach(function(r){r!=="selectionchange"&&(_b.has(r)||wf(r,!1,t),wf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[go]||(n[go]=!0,wf("selectionchange",!1,n))}}function Jg(t,n,r,l){switch(T_(n)){case 2:var c=Gb;break;case 8:c=Yb;break;default:c=Bf}r=c.bind(null,n,r,t),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Rf(t,n,r,l,c){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var _=l.stateNode.containerInfo;if(_===c)break;if(p===4)for(p=l.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===c)return;p=p.return}for(;_!==null;){if(p=Ts(_),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){l=f=p;continue e}_=_.parentNode}}l=l.return}ap(function(){var R=f,M=Yc(r),L=[];e:{var I=kp.get(t);if(I!==void 0){var N=Nl,te=t;switch(t){case"keypress":if(Rl(r)===0)break e;case"keydown":case"keyup":N=fS;break;case"focusin":te="focus",N=Zc;break;case"focusout":te="blur",N=Zc;break;case"beforeblur":case"afterblur":N=Zc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=pS;break;case Op:case Mp:case Dp:N=nS;break;case xp:N=gS;break;case"scroll":case"scrollend":N=Z0;break;case"wheel":N=yS;break;case"copy":case"cut":case"paste":N=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=fp;break;case"toggle":case"beforetoggle":N=ES}var W=(n&4)!==0,Ce=!W&&(t==="scroll"||t==="scrollend"),w=W?I!==null?I+"Capture":null:I;W=[];for(var C=R,A;C!==null;){var k=C;if(A=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||A===null||w===null||(k=zr(C,w),k!=null&&W.push(va(C,k,A))),Ce)break;C=C.return}0<W.length&&(I=new N(I,te,null,r,M),L.push({event:I,listeners:W}))}}if((n&7)===0){e:{if(I=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",I&&r!==Gc&&(te=r.relatedTarget||r.fromElement)&&(Ts(te)||te[bs]))break e;if((N||I)&&(I=M.window===M?M:(I=M.ownerDocument)?I.defaultView||I.parentWindow:window,N?(te=r.relatedTarget||r.toElement,N=R,te=te?Ts(te):null,te!==null&&(Ce=u(te),W=te.tag,te!==Ce||W!==5&&W!==27&&W!==6)&&(te=null)):(N=null,te=R),N!==te)){if(W=cp,k="onMouseLeave",w="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(W=fp,k="onPointerLeave",w="onPointerEnter",C="pointer"),Ce=N==null?I:Ur(N),A=te==null?I:Ur(te),I=new W(k,C+"leave",N,r,M),I.target=Ce,I.relatedTarget=A,k=null,Ts(M)===R&&(W=new W(w,C+"enter",te,r,M),W.target=A,W.relatedTarget=Ce,k=W),Ce=k,N&&te)t:{for(W=N,w=te,C=0,A=W;A;A=ir(A))C++;for(A=0,k=w;k;k=ir(k))A++;for(;0<C-A;)W=ir(W),C--;for(;0<A-C;)w=ir(w),A--;for(;C--;){if(W===w||w!==null&&W===w.alternate)break t;W=ir(W),w=ir(w)}W=null}else W=null;N!==null&&e_(L,I,N,W,!1),te!==null&&Ce!==null&&e_(L,Ce,te,W,!0)}}e:{if(I=R?Ur(R):window,N=I.nodeName&&I.nodeName.toLowerCase(),N==="select"||N==="input"&&I.type==="file")var j=vp;else if(_p(I))if(Ep)j=OS;else{j=IS;var re=RS}else N=I.nodeName,!N||N.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?R&&jc(R.elementType)&&(j=vp):j=NS;if(j&&(j=j(t,R))){yp(L,j,r,M);break e}re&&re(t,I,R),t==="focusout"&&R&&I.type==="number"&&R.memoizedProps.value!=null&&Vc(I,"number",I.value)}switch(re=R?Ur(R):window,t){case"focusin":(_p(re)||re.contentEditable==="true")&&(xs=re,iu=R,Yr=null);break;case"focusout":Yr=iu=xs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Ip(L,r,M);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Ip(L,r,M)}var K;if(Jc)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Ds?mp(t,r)&&(Z="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Z="onCompositionStart");Z&&(hp&&r.locale!=="ko"&&(Ds||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Ds&&(K=lp()):(ni=M,Qc="value"in ni?ni.value:ni.textContent,Ds=!0)),re=_o(R,Z),0<re.length&&(Z=new up(Z,t,null,r,M),L.push({event:Z,listeners:re}),K?Z.data=K:(K=gp(r),K!==null&&(Z.data=K)))),(K=bS?TS(t,r):CS(t,r))&&(Z=_o(R,"onBeforeInput"),0<Z.length&&(re=new up("onBeforeInput","beforeinput",null,r,M),L.push({event:re,listeners:Z}),re.data=K)),pb(L,t,R,r,M)}$g(L,n)})}function va(t,n,r){return{instance:t,listener:n,currentTarget:r}}function _o(t,n){for(var r=n+"Capture",l=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zr(t,r),c!=null&&l.unshift(va(t,c,f)),c=zr(t,n),c!=null&&l.push(va(t,c,f))),t.tag===3)return l;t=t.return}return[]}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e_(t,n,r,l,c){for(var f=n._reactName,p=[];r!==null&&r!==l;){var _=r,S=_.alternate,R=_.stateNode;if(_=_.tag,S!==null&&S===l)break;_!==5&&_!==26&&_!==27||R===null||(S=R,c?(R=zr(r,f),R!=null&&p.unshift(va(r,R,S))):c||(R=zr(r,f),R!=null&&p.push(va(r,R,S)))),r=r.return}p.length!==0&&t.push({event:n,listeners:p})}var yb=/\r\n?/g,vb=/\u0000|\uFFFD/g;function t_(t){return(typeof t=="string"?t:""+t).replace(yb,`
`).replace(vb,"")}function n_(t,n){return n=t_(n),t_(t)===n}function yo(){}function Te(t,n,r,l,c,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Ns(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Ns(t,""+l);break;case"className":bl(t,"class",l);break;case"tabIndex":bl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,r,l);break;case"style":sp(t,l,f);break;case"data":if(n!=="object"){bl(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=wl(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Te(t,n,"name",c.name,c,null),Te(t,n,"formEncType",c.formEncType,c,null),Te(t,n,"formMethod",c.formMethod,c,null),Te(t,n,"formTarget",c.formTarget,c,null)):(Te(t,n,"encType",c.encType,c,null),Te(t,n,"method",c.method,c,null),Te(t,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=wl(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=yo);break;case"onScroll":l!=null&&ue("scroll",t);break;case"onScrollEnd":l!=null&&ue("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=wl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":ue("beforetoggle",t),ue("toggle",t),Sl(t,"popover",l);break;case"xlinkActuate":On(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":On(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":On(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":On(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":On(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":On(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":On(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":On(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":On(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=X0.get(r)||r,Sl(t,r,l))}}function If(t,n,r,l,c,f){switch(r){case"style":sp(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Ns(t,l):(typeof l=="number"||typeof l=="bigint")&&Ns(t,""+l);break;case"onScroll":l!=null&&ue("scroll",t);break;case"onScrollEnd":l!=null&&ue("scrollend",t);break;case"onClick":l!=null&&(t.onclick=yo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kd.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=t[It]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,l,c);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Sl(t,r,l)}}}function pt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",t),ue("load",t);var l=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var p=r[f];if(p!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Te(t,n,f,p,r,null)}}c&&Te(t,n,"srcSet",r.srcSet,r,null),l&&Te(t,n,"src",r.src,r,null);return;case"input":ue("invalid",t);var _=f=p=c=null,S=null,R=null;for(l in r)if(r.hasOwnProperty(l)){var M=r[l];if(M!=null)switch(l){case"name":c=M;break;case"type":p=M;break;case"checked":S=M;break;case"defaultChecked":R=M;break;case"value":f=M;break;case"defaultValue":_=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(a(137,n));break;default:Te(t,n,l,M,r,null)}}ep(t,f,_,S,R,p,c,!1),Tl(t);return;case"select":ue("invalid",t),l=p=f=null;for(c in r)if(r.hasOwnProperty(c)&&(_=r[c],_!=null))switch(c){case"value":f=_;break;case"defaultValue":p=_;break;case"multiple":l=_;default:Te(t,n,c,_,r,null)}n=f,r=p,t.multiple=!!l,n!=null?Is(t,!!l,n,!1):r!=null&&Is(t,!!l,r,!0);return;case"textarea":ue("invalid",t),f=c=l=null;for(p in r)if(r.hasOwnProperty(p)&&(_=r[p],_!=null))switch(p){case"value":l=_;break;case"defaultValue":c=_;break;case"children":f=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(a(91));break;default:Te(t,n,p,_,r,null)}np(t,l,c,f),Tl(t);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(l=r[S],l!=null))switch(S){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Te(t,n,S,l,r,null)}return;case"dialog":ue("beforetoggle",t),ue("toggle",t),ue("cancel",t),ue("close",t);break;case"iframe":case"object":ue("load",t);break;case"video":case"audio":for(l=0;l<ya.length;l++)ue(ya[l],t);break;case"image":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"embed":case"source":case"link":ue("error",t),ue("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in r)if(r.hasOwnProperty(R)&&(l=r[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Te(t,n,R,l,r,null)}return;default:if(jc(n)){for(M in r)r.hasOwnProperty(M)&&(l=r[M],l!==void 0&&If(t,n,M,l,r,void 0));return}}for(_ in r)r.hasOwnProperty(_)&&(l=r[_],l!=null&&Te(t,n,_,l,r,null))}function Eb(t,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,p=null,_=null,S=null,R=null,M=null;for(N in r){var L=r[N];if(r.hasOwnProperty(N)&&L!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=L;default:l.hasOwnProperty(N)||Te(t,n,N,null,l,L)}}for(var I in l){var N=l[I];if(L=r[I],l.hasOwnProperty(I)&&(N!=null||L!=null))switch(I){case"type":f=N;break;case"name":c=N;break;case"checked":R=N;break;case"defaultChecked":M=N;break;case"value":p=N;break;case"defaultValue":_=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(137,n));break;default:N!==L&&Te(t,n,I,N,l,L)}}qc(t,p,_,S,R,M,f,c);return;case"select":N=p=_=I=null;for(f in r)if(S=r[f],r.hasOwnProperty(f)&&S!=null)switch(f){case"value":break;case"multiple":N=S;default:l.hasOwnProperty(f)||Te(t,n,f,null,l,S)}for(c in l)if(f=l[c],S=r[c],l.hasOwnProperty(c)&&(f!=null||S!=null))switch(c){case"value":I=f;break;case"defaultValue":_=f;break;case"multiple":p=f;default:f!==S&&Te(t,n,c,f,l,S)}n=_,r=p,l=N,I!=null?Is(t,!!r,I,!1):!!l!=!!r&&(n!=null?Is(t,!!r,n,!0):Is(t,!!r,r?[]:"",!1));return;case"textarea":N=I=null;for(_ in r)if(c=r[_],r.hasOwnProperty(_)&&c!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Te(t,n,_,null,l,c)}for(p in l)if(c=l[p],f=r[p],l.hasOwnProperty(p)&&(c!=null||f!=null))switch(p){case"value":I=c;break;case"defaultValue":N=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Te(t,n,p,c,l,f)}tp(t,I,N);return;case"option":for(var te in r)if(I=r[te],r.hasOwnProperty(te)&&I!=null&&!l.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:Te(t,n,te,null,l,I)}for(S in l)if(I=l[S],N=r[S],l.hasOwnProperty(S)&&I!==N&&(I!=null||N!=null))switch(S){case"selected":t.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Te(t,n,S,I,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in r)I=r[W],r.hasOwnProperty(W)&&I!=null&&!l.hasOwnProperty(W)&&Te(t,n,W,null,l,I);for(R in l)if(I=l[R],N=r[R],l.hasOwnProperty(R)&&I!==N&&(I!=null||N!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(a(137,n));break;default:Te(t,n,R,I,l,N)}return;default:if(jc(n)){for(var Ce in r)I=r[Ce],r.hasOwnProperty(Ce)&&I!==void 0&&!l.hasOwnProperty(Ce)&&If(t,n,Ce,void 0,l,I);for(M in l)I=l[M],N=r[M],!l.hasOwnProperty(M)||I===N||I===void 0&&N===void 0||If(t,n,M,I,l,N);return}}for(var w in r)I=r[w],r.hasOwnProperty(w)&&I!=null&&!l.hasOwnProperty(w)&&Te(t,n,w,null,l,I);for(L in l)I=l[L],N=r[L],!l.hasOwnProperty(L)||I===N||I==null&&N==null||Te(t,n,L,I,l,N)}var Nf=null,Of=null;function vo(t){return t.nodeType===9?t:t.ownerDocument}function i_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Sb(){var t=window.event;return t&&t.type==="popstate"?t===Df?!1:(Df=t,!0):(Df=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,bb=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(t){return a_.resolve(null).then(t).catch(Cb)}:r_;function Cb(t){setTimeout(function(){throw t})}function yi(t){return t==="head"}function l_(t,n){var r=n,l=0,c=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var p=t.ownerDocument;if(r&1&&Ea(p.documentElement),r&2&&Ea(p.body),r&4)for(r=p.head,Ea(r),p=r.firstChild;p;){var _=p.nextSibling,S=p.nodeName;p[Lr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=_}}if(c===0){t.removeChild(f),Ia(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);Ia(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":xf(r),zc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function wb(t,n,r,l){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Lr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=cn(t.nextSibling),t===null)break}return null}function Ab(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=cn(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Rb(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function cn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Lf=null;function o_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function c_(t,n,r){switch(n=vo(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ea(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zc(t)}var en=new Map,u_=new Set;function Eo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gn=q.d;q.d={f:Ib,r:Nb,D:Ob,C:Mb,L:Db,m:xb,X:Lb,S:kb,M:Ub};function Ib(){var t=Gn.f(),n=uo();return t||n}function Nb(t){var n=Cs(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):Gn.r(t)}var sr=typeof document>"u"?null:document;function f_(t,n,r){var l=sr;if(l&&typeof n=="string"&&n){var c=Kt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),u_.has(c)||(u_.add(c),t={rel:t,crossOrigin:r,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),pt(n,"link",t),at(n),l.head.appendChild(n)))}}function Ob(t){Gn.D(t),f_("dns-prefetch",t,null)}function Mb(t,n){Gn.C(t,n),f_("preconnect",t,n)}function Db(t,n,r){Gn.L(t,n,r);var l=sr;if(l&&t&&n){var c='link[rel="preload"][as="'+Kt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Kt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Kt(r.imageSizes)+'"]')):c+='[href="'+Kt(t)+'"]';var f=c;switch(n){case"style":f=rr(t);break;case"script":f=ar(t)}en.has(f)||(t=E({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),en.set(f,t),l.querySelector(c)!==null||n==="style"&&l.querySelector(Sa(f))||n==="script"&&l.querySelector(ba(f))||(n=l.createElement("link"),pt(n,"link",t),at(n),l.head.appendChild(n)))}}function xb(t,n){Gn.m(t,n);var r=sr;if(r&&t){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Kt(l)+'"][href="'+Kt(t)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(t)}if(!en.has(f)&&(t=E({rel:"modulepreload",href:t},n),en.set(f,t),r.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ba(f)))return}l=r.createElement("link"),pt(l,"link",t),at(l),r.head.appendChild(l)}}}function kb(t,n,r){Gn.S(t,n,r);var l=sr;if(l&&t){var c=ws(l).hoistableStyles,f=rr(t);n=n||"default";var p=c.get(f);if(!p){var _={loading:0,preload:null};if(p=l.querySelector(Sa(f)))_.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":n},r),(r=en.get(f))&&Uf(t,r);var S=p=l.createElement("link");at(S),pt(S,"link",t),S._p=new Promise(function(R,M){S.onload=R,S.onerror=M}),S.addEventListener("load",function(){_.loading|=1}),S.addEventListener("error",function(){_.loading|=2}),_.loading|=4,So(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:_},c.set(f,p)}}}function Lb(t,n){Gn.X(t,n);var r=sr;if(r&&t){var l=ws(r).hoistableScripts,c=ar(t),f=l.get(c);f||(f=r.querySelector(ba(c)),f||(t=E({src:t,async:!0},n),(n=en.get(c))&&zf(t,n),f=r.createElement("script"),at(f),pt(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function Ub(t,n){Gn.M(t,n);var r=sr;if(r&&t){var l=ws(r).hoistableScripts,c=ar(t),f=l.get(c);f||(f=r.querySelector(ba(c)),f||(t=E({src:t,async:!0,type:"module"},n),(n=en.get(c))&&zf(t,n),f=r.createElement("script"),at(f),pt(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function h_(t,n,r,l){var c=(c=B.current)?Eo(c):null;if(!c)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=rr(r.href),r=ws(c).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=rr(r.href);var f=ws(c).hoistableStyles,p=f.get(t);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,p),(f=c.querySelector(Sa(t)))&&!f._p&&(p.instance=f,p.state.loading=5),en.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},en.set(t,r),f||zb(c,t,r,p.state))),n&&l===null)throw Error(a(528,""));return p}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(r),r=ws(c).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function rr(t){return'href="'+Kt(t)+'"'}function Sa(t){return'link[rel="stylesheet"]['+t+"]"}function d_(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function zb(t,n,r,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),pt(n,"link",r),at(n),t.head.appendChild(n))}function ar(t){return'[src="'+Kt(t)+'"]'}function ba(t){return"script[async]"+t}function p_(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Kt(r.href)+'"]');if(l)return n.instance=l,at(l),l;var c=E({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),at(l),pt(l,"style",c),So(l,r.precedence,t),n.instance=l;case"stylesheet":c=rr(r.href);var f=t.querySelector(Sa(c));if(f)return n.state.loading|=4,n.instance=f,at(f),f;l=d_(r),(c=en.get(c))&&Uf(l,c),f=(t.ownerDocument||t).createElement("link"),at(f);var p=f;return p._p=new Promise(function(_,S){p.onload=_,p.onerror=S}),pt(f,"link",l),n.state.loading|=4,So(f,r.precedence,t),n.instance=f;case"script":return f=ar(r.src),(c=t.querySelector(ba(f)))?(n.instance=c,at(c),c):(l=r,(c=en.get(f))&&(l=E({},r),zf(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),at(c),pt(c,"link",l),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,So(l,r.precedence,t));return n.instance}function So(t,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,p=0;p<l.length;p++){var _=l[p];if(_.dataset.precedence===n)f=_;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var bo=null;function m_(t,n,r){if(bo===null){var l=new Map,c=bo=new Map;c.set(r,l)}else c=bo,l=c.get(r),l||(l=new Map,c.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var f=r[c];if(!(f[Lr]||f[Et]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=t+p;var _=l.get(p);_?_.push(f):l.set(p,[f])}}return l}function g_(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Pb(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ta=null;function Hb(){}function Bb(t,n,r){if(Ta===null)throw Error(a(475));var l=Ta;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=rr(r.href),f=t.querySelector(Sa(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=To.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=f,at(f);return}f=t.ownerDocument||t,r=d_(r),(c=en.get(c))&&Uf(r,c),f=f.createElement("link"),at(f);var p=f;p._p=new Promise(function(_,S){p.onload=_,p.onerror=S}),pt(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=To.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function qb(){if(Ta===null)throw Error(a(475));var t=Ta;return t.stylesheets&&t.count===0&&Pf(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Pf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function To(){if(this.count--,this.count===0){if(this.stylesheets)Pf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Co=null;function Pf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Co=new Map,n.forEach(Vb,t),Co=null,To.call(t))}function Vb(t,n){if(!(n.state.loading&4)){var r=Co.get(t);if(r)var l=r.get(null);else{r=new Map,Co.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var p=c[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),l=p)}l&&r.set(null,l)}c=n.instance,p=c.getAttribute("data-precedence"),f=r.get(p)||l,f===l&&r.set(null,c),r.set(p,c),this.count++,l=To.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ca={$$typeof:_e,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function jb(t,n,r,l,c,f,p,_){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.hiddenUpdates=xc(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function y_(t,n,r,l,c,f,p,_,S,R,M,L){return t=new jb(t,n,r,p,_,S,R,L),n=1,f===!0&&(n|=24),f=Ht(3,null,null,n),t.current=f,f.stateNode=t,n=yu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},bu(f),t}function v_(t){return t?(t=zs,t):zs}function E_(t,n,r,l,c,f){c=v_(c),l.context===null?l.context=c:l.pendingContext=c,l=ri(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=ai(t,l,n),r!==null&&(Gt(r,t,n),ea(r,t,n))}function S_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Hf(t,n){S_(t,n),(t=t.alternate)&&S_(t,n)}function b_(t){if(t.tag===13){var n=Us(t,67108864);n!==null&&Gt(n,t,67108864),Hf(t,67108864)}}var wo=!0;function Gb(t,n,r,l){var c=O.T;O.T=null;var f=q.p;try{q.p=2,Bf(t,n,r,l)}finally{q.p=f,O.T=c}}function Yb(t,n,r,l){var c=O.T;O.T=null;var f=q.p;try{q.p=8,Bf(t,n,r,l)}finally{q.p=f,O.T=c}}function Bf(t,n,r,l){if(wo){var c=qf(l);if(c===null)Rf(t,n,l,Ao,r),C_(t,l);else if(Kb(c,t,n,r,l))l.stopPropagation();else if(C_(t,l),n&4&&-1<Fb.indexOf(t)){for(;c!==null;){var f=Cs(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=Bi(f.pendingLanes);if(p!==0){var _=f;for(_.pendingLanes|=2,_.entangledLanes|=2;p;){var S=1<<31-vt(p);_.entanglements[1]|=S,p&=~S}Tn(f),(Ee&6)===0&&(oo=qe()+500,_a(0))}}break;case 13:_=Us(f,2),_!==null&&Gt(_,f,2),uo(),Hf(f,2)}if(f=qf(l),f===null&&Rf(t,n,l,Ao,r),f===c)break;c=f}c!==null&&l.stopPropagation()}else Rf(t,n,l,null,r)}}function qf(t){return t=Yc(t),Vf(t)}var Ao=null;function Vf(t){if(Ao=null,t=Ts(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ao=t,null}function T_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(an()){case _n:return 2;case zt:return 8;case Es:case Oc:return 32;case gl:return 268435456;default:return 32}default:return 32}}var jf=!1,vi=null,Ei=null,Si=null,wa=new Map,Aa=new Map,bi=[],Fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(t,n){switch(t){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":Ei=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":wa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(n.pointerId)}}function Ra(t,n,r,l,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Cs(n),n!==null&&b_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Kb(t,n,r,l,c){switch(n){case"focusin":return vi=Ra(vi,t,n,r,l,c),!0;case"dragenter":return Ei=Ra(Ei,t,n,r,l,c),!0;case"mouseover":return Si=Ra(Si,t,n,r,l,c),!0;case"pointerover":var f=c.pointerId;return wa.set(f,Ra(wa.get(f)||null,t,n,r,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Aa.set(f,Ra(Aa.get(f)||null,t,n,r,l,c)),!0}return!1}function w_(t){var n=Ts(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){t.blockedOn=n,B0(t.priority,function(){if(r.tag===13){var l=jt();l=kc(l);var c=Us(r,l);c!==null&&Gt(c,r,l),Hf(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=qf(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Gc=l,r.target.dispatchEvent(l),Gc=null}else return n=Cs(r),n!==null&&b_(n),t.blockedOn=r,!1;n.shift()}return!0}function A_(t,n,r){Ro(t)&&r.delete(n)}function Qb(){jf=!1,vi!==null&&Ro(vi)&&(vi=null),Ei!==null&&Ro(Ei)&&(Ei=null),Si!==null&&Ro(Si)&&(Si=null),wa.forEach(A_),Aa.forEach(A_)}function Io(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Qb)))}var No=null;function R_(t){No!==t&&(No=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){No===t&&(No=null);for(var n=0;n<t.length;n+=3){var r=t[n],l=t[n+1],c=t[n+2];if(typeof l!="function"){if(Vf(l||r)===null)continue;break}var f=Cs(r);f!==null&&(t.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:r.method,action:l},l,c))}}))}function Ia(t){function n(S){return Io(S,t)}vi!==null&&Io(vi,t),Ei!==null&&Io(Ei,t),Si!==null&&Io(Si,t),wa.forEach(n),Aa.forEach(n);for(var r=0;r<bi.length;r++){var l=bi[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<bi.length&&(r=bi[0],r.blockedOn===null);)w_(r),r.blockedOn===null&&bi.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var c=r[l],f=r[l+1],p=c[It]||null;if(typeof f=="function")p||R_(r);else if(p){var _=null;if(f&&f.hasAttribute("formAction")){if(c=f,p=f[It]||null)_=p.formAction;else if(Vf(c)!==null)continue}else _=p.action;typeof _=="function"?r[l+1]=_:(r.splice(l,3),l-=3),R_(r)}}}function Gf(t){this._internalRoot=t}Oo.prototype.render=Gf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=jt();E_(r,l,t,n,null,null)},Oo.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;E_(t.current,2,null,t,null,null),uo(),n[bs]=null}};function Oo(t){this._internalRoot=t}Oo.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gd();t={blockedOn:null,target:t,priority:n};for(var r=0;r<bi.length&&n!==0&&n<bi[r].priority;r++);bi.splice(r,0,t),r===0&&w_(t)}};var I_=e.version;if(I_!=="19.1.1")throw Error(a(527,I_,"19.1.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Xb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{ei=Mo.inject(Xb),Tt=Mo}catch{}}return Oa.createRoot=function(t,n){if(!o(t))throw Error(a(299));var r=!1,l="",c=Gm,f=Ym,p=Fm,_=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=y_(t,1,!1,null,null,r,l,c,f,p,_,null),t[bs]=n.current,Af(t),new Gf(n)},Oa.hydrateRoot=function(t,n,r){if(!o(t))throw Error(a(299));var l=!1,c="",f=Gm,p=Ym,_=Fm,S=null,R=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(R=r.formState)),n=y_(t,1,!0,n,r??null,l,c,f,p,_,S,R),n.context=v_(null),r=n.current,l=jt(),l=kc(l),c=ri(l),c.callback=null,ai(r,c,l),r=l,n.current.lanes=r,kr(n,r),Tn(n),t[bs]=n.current,Af(t),new Oo(n)},Oa.version="19.1.1",Oa}var P_;function aT(){if(P_)return Kf.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Kf.exports=rT(),Kf.exports}var lT=aT();const oT=()=>{};var H_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(s,e){if(!s)throw Cr(e)},Cr=function(s){return new Error("Firebase Database ("+sv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},cT=function(s){const e=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[i++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[i++],h=s[i++],d=s[i++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|d&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const u=s[i++],h=s[i++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const u=s[o],h=o+1<s.length,d=h?s[o+1]:0,g=o+2<s.length,m=g?s[o+2]:0,E=u>>2,T=(u&3)<<4|d>>4;let b=(d&15)<<2|m>>6,U=m&63;g||(U=64,h||(b=64)),a.push(i[E],i[T],i[b],i[U])}return a.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(rv(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):cT(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const u=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const m=o<s.length?i[s.charAt(o)]:64;++o;const T=o<s.length?i[s.charAt(o)]:64;if(++o,u==null||d==null||m==null||T==null)throw new uT;const b=u<<2|d>>4;if(a.push(b),m!==64){const U=d<<4&240|m>>2;if(a.push(U),T!==64){const H=m<<6&192|T;a.push(H)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class uT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const av=function(s){const e=rv(s);return Vh.encodeByteArray(e,!0)},Bo=function(s){return av(s).replace(/\./g,"")},qo=function(s){try{return Vh.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(s){return lv(void 0,s)}function lv(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!hT(i)||(s[i]=lv(s[i],e[i]));return s}function hT(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=()=>dT().__FIREBASE_DEFAULTS__,mT=()=>{if(typeof process>"u"||typeof H_>"u")return;const s=H_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},gT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&qo(s[1]);return e&&JSON.parse(e)},jh=()=>{try{return oT()||pT()||mT()||gT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},ov=s=>jh()?.emulatorHosts?.[s],_T=s=>{const e=ov(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},cv=()=>jh()?.config,uv=s=>jh()?.[`_${s}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fv(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Bo(JSON.stringify(i)),Bo(JSON.stringify(h)),""].join(".")}const Pa={};function vT(){const s={prod:[],emulator:[]};for(const e of Object.keys(Pa))Pa[e]?s.emulator.push(e):s.prod.push(e);return s}function ET(s){let e=document.getElementById(s),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),i=!0),{created:i,element:e}}let B_=!1;function hv(s,e){if(typeof window>"u"||typeof document>"u"||!wr(window.location.host)||Pa[s]===e||Pa[s]||B_)return;Pa[s]=e;function i(b){return`__firebase__banner__${b}`}const a="__firebase__banner",u=vT().prod.length>0;function h(){const b=document.getElementById(a);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function g(b,U){b.setAttribute("width","24"),b.setAttribute("id",U),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function m(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{B_=!0,h()},b}function E(b,U){b.setAttribute("id",U),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=ET(a),U=i("text"),H=document.getElementById(U)||document.createElement("span"),$=i("learnmore"),F=document.getElementById($)||document.createElement("a"),Oe=i("preprendIcon"),ze=document.getElementById(Oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const _e=b.element;d(_e),E(F,$);const Re=m();g(ze,Oe),_e.append(ze,H,F,Re),document.body.appendChild(_e)}u?(H.innerText="Preview backend disconnected.",ze.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ze.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function ST(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dv(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function pv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bT(){const s=Rt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function TT(){return sv.NODE_ADMIN===!0}function mv(){try{return typeof indexedDB=="object"}catch{return!1}}function gv(){return new Promise((s,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(i){e(i)}})}function CT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="FirebaseError";class Rn extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=wT,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?AT(u,a):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Rn(o,d,a)}}function AT(s,e){return s.replace(RT,(i,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const RT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(s){return JSON.parse(s)}function it(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(s){let e={},i={},a={},o="";try{const u=s.split(".");e=Fa(qo(u[0])||""),i=Fa(qo(u[1])||""),o=u[2],a=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:a,signature:o}},IT=function(s){const e=_v(s),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},NT=function(s){const e=_v(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function yr(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function gh(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Vo(s,e,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=e.call(i,s[o],o,s));return a}function ki(s,e){if(s===e)return!0;const i=Object.keys(s),a=Object.keys(e);for(const o of i){if(!a.includes(o))return!1;const u=s[o],h=e[o];if(q_(u)&&q_(h)){if(!ki(u,h))return!1}else if(u!==h)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function q_(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(s){const e=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Ua(s){const e={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,u]=a.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function za(s){const e=s.indexOf("?");if(!e)return"";const i=s.indexOf("#",e);return s.substring(e,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const a=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)a[T]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let T=0;T<16;T++)a[T]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let T=16;T<80;T++){const b=a[T-3]^a[T-8]^a[T-14]^a[T-16];a[T]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],h=this.chain_[2],d=this.chain_[3],g=this.chain_[4],m,E;for(let T=0;T<80;T++){T<40?T<20?(m=d^u&(h^d),E=1518500249):(m=u^h^d,E=1859775393):T<60?(m=u&h|d&(u|h),E=2400959708):(m=u^h^d,E=3395469782);const b=(o<<5|o>>>27)+m+g+E+a[T]&4294967295;g=d,d=h,h=(u<<30|u>>>2)&4294967295,u=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const a=i-this.blockSize;let o=0;const u=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=a;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(u[h]=e.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}else for(;o<i;)if(u[h]=e[o],++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[a]=this.chain_[o]>>u&255,++a;return e}}function MT(s,e){const i=new DT(s,e);return i.subscribe.bind(i)}class DT{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let o;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");xT(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:a},o.next===void 0&&(o.next=Zf),o.error===void 0&&(o.error=Zf),o.complete===void 0&&(o.complete=Zf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xT(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function Zf(){}function fc(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const u=o-55296;a++,P(a<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(a)-56320;o=65536+(u<<10)+h}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},hc=function(s){let e=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=1e3,UT=2,zT=14400*1e3,PT=.5;function V_(s,e=LT,i=UT){const a=e*Math.pow(i,s),o=Math.round(PT*a*(Math.random()-.5)*2);return Math.min(zT,a+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(s){return s&&s._delegate?s._delegate:s}class pn{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new sl;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(u);a===d&&h.resolve(o)}return o}onInit(e,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:BT(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BT(s){return s===ss?void 0:s}function qT(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new HT(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(we||(we={}));const jT={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},GT=we.INFO,YT={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},FT=(s,e,...i)=>{if(e<s.logLevel)return;const a=new Date().toISOString(),o=YT[e];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=GT,this._logHandler=FT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const KT=(s,e)=>e.some(i=>s instanceof i);let j_,G_;function QT(){return j_||(j_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XT(){return G_||(G_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yv=new WeakMap,_h=new WeakMap,vv=new WeakMap,$f=new WeakMap,Yh=new WeakMap;function WT(s){const e=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",h)},u=()=>{i(Oi(s.result)),o()},h=()=>{a(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&yv.set(i,s)}).catch(()=>{}),Yh.set(e,s),e}function ZT(s){if(_h.has(s))return;const e=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",h),s.removeEventListener("abort",h)},u=()=>{i(),o()},h=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",h),s.addEventListener("abort",h)});_h.set(s,e)}let yh={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return _h.get(s);if(e==="objectStoreNames")return s.objectStoreNames||vv.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Oi(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function $T(s){yh=s(yh)}function JT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=s.call(Jf(this),e,...i);return vv.set(a,e.sort?e.sort():[e]),Oi(a)}:XT().includes(s)?function(...e){return s.apply(Jf(this),e),Oi(yv.get(this))}:function(...e){return Oi(s.apply(Jf(this),e))}}function e1(s){return typeof s=="function"?JT(s):(s instanceof IDBTransaction&&ZT(s),KT(s,QT())?new Proxy(s,yh):s)}function Oi(s){if(s instanceof IDBRequest)return WT(s);if($f.has(s))return $f.get(s);const e=e1(s);return e!==s&&($f.set(s,e),Yh.set(e,s)),e}const Jf=s=>Yh.get(s);function Ev(s,e,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const h=indexedDB.open(s,e),d=Oi(h);return a&&h.addEventListener("upgradeneeded",g=>{a(Oi(h.result),g.oldVersion,g.newVersion,Oi(h.transaction),g)}),i&&h.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),d.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const t1=["get","getKey","getAll","getAllKeys","count"],n1=["put","add","delete","clear"],eh=new Map;function Y_(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(eh.get(e))return eh.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,o=n1.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||t1.includes(i)))return;const u=async function(h,...d){const g=this.transaction(h,o?"readwrite":"readonly");let m=g.store;return a&&(m=m.index(d.shift())),(await Promise.all([m[i](...d),o&&g.done]))[0]};return eh.set(e,u),u}$T(s=>({...s,get:(e,i,a)=>Y_(e,i)||s.get(e,i,a),has:(e,i)=>!!Y_(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(s1(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function s1(s){return s.getComponent()?.type==="VERSION"}const vh="@firebase/app",F_="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new dc("@firebase/app"),r1="@firebase/app-compat",a1="@firebase/analytics-compat",l1="@firebase/analytics",o1="@firebase/app-check-compat",c1="@firebase/app-check",u1="@firebase/auth",f1="@firebase/auth-compat",h1="@firebase/database",d1="@firebase/data-connect",p1="@firebase/database-compat",m1="@firebase/functions",g1="@firebase/functions-compat",_1="@firebase/installations",y1="@firebase/installations-compat",v1="@firebase/messaging",E1="@firebase/messaging-compat",S1="@firebase/performance",b1="@firebase/performance-compat",T1="@firebase/remote-config",C1="@firebase/remote-config-compat",w1="@firebase/storage",A1="@firebase/storage-compat",R1="@firebase/firestore",I1="@firebase/ai",N1="@firebase/firestore-compat",O1="firebase",M1="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="[DEFAULT]",D1={[vh]:"fire-core",[r1]:"fire-core-compat",[l1]:"fire-analytics",[a1]:"fire-analytics-compat",[c1]:"fire-app-check",[o1]:"fire-app-check-compat",[u1]:"fire-auth",[f1]:"fire-auth-compat",[h1]:"fire-rtdb",[d1]:"fire-data-connect",[p1]:"fire-rtdb-compat",[m1]:"fire-fn",[g1]:"fire-fn-compat",[_1]:"fire-iid",[y1]:"fire-iid-compat",[v1]:"fire-fcm",[E1]:"fire-fcm-compat",[S1]:"fire-perf",[b1]:"fire-perf-compat",[T1]:"fire-rc",[C1]:"fire-rc-compat",[w1]:"fire-gcs",[A1]:"fire-gcs-compat",[R1]:"fire-fst",[N1]:"fire-fst-compat",[I1]:"fire-vertex","fire-js":"fire-js",[O1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map,x1=new Map,Sh=new Map;function K_(s,e){try{s.container.addComponent(e)}catch(i){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function An(s){const e=s.name;if(Sh.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,s);for(const i of jo.values())K_(i,s);for(const i of x1.values())K_(i,s);return!0}function gs(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function tn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mi=new ms("app","Firebase",k1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,i,a){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=M1;function Sv(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const a={name:Eh,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw Mi.create("bad-app-name",{appName:String(o)});if(i||(i=cv()),!i)throw Mi.create("no-options");const u=jo.get(o);if(u){if(ki(i,u.options)&&ki(a,u.config))return u;throw Mi.create("duplicate-app",{appName:o})}const h=new VT(o);for(const g of Sh.values())h.addComponent(g);const d=new L1(i,a,h);return jo.set(o,d),d}function Fh(s=Eh){const e=jo.get(s);if(!e&&s===Eh&&cv())return Sv();if(!e)throw Mi.create("no-app",{appName:s});return e}function sn(s,e,i){let a=D1[s]??s;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${a}" with version "${e}":`];o&&h.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(h.join(" "));return}An(new pn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="firebase-heartbeat-database",z1=1,Ka="firebase-heartbeat-store";let th=null;function bv(){return th||(th=Ev(U1,z1,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ka)}catch(i){console.warn(i)}}}}).catch(s=>{throw Mi.create("idb-open",{originalErrorMessage:s.message})})),th}async function P1(s){try{const i=(await bv()).transaction(Ka),a=await i.objectStore(Ka).get(Tv(s));return await i.done,a}catch(e){if(e instanceof Rn)Wn.warn(e.message);else{const i=Mi.create("idb-get",{originalErrorMessage:e?.message});Wn.warn(i.message)}}}async function Q_(s,e){try{const a=(await bv()).transaction(Ka,"readwrite");await a.objectStore(Ka).put(e,Tv(s)),await a.done}catch(i){if(i instanceof Rn)Wn.warn(i.message);else{const a=Mi.create("idb-set",{originalErrorMessage:i?.message});Wn.warn(a.message)}}}function Tv(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=1024,B1=30;class q1{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new j1(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=X_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>B1){const o=G1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Wn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=X_(),{heartbeatsToSend:i,unsentEntries:a}=V1(this._heartbeatsCache.heartbeats),o=Bo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Wn.warn(e),""}}}function X_(){return new Date().toISOString().substring(0,10)}function V1(s,e=H1){const i=[];let a=s.slice();for(const o of s){const u=i.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),W_(i)>e){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),W_(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class j1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mv()?gv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await P1(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return Q_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return Q_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function W_(s){return Bo(JSON.stringify({version:2,heartbeats:s})).length}function G1(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(s){An(new pn("platform-logger",e=>new i1(e),"PRIVATE")),An(new pn("heartbeat",e=>new q1(e),"PRIVATE")),sn(vh,F_,s),sn(vh,F_,"esm2020"),sn("fire-js","")}Y1("");var F1="firebase",K1="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(F1,K1,"app");function Cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q1=Cv,wv=new ms("auth","Firebase",Cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new dc("@firebase/auth");function X1(s,...e){Go.logLevel<=we.WARN&&Go.warn(`Auth (${Rr}): ${s}`,...e)}function Lo(s,...e){Go.logLevel<=we.ERROR&&Go.error(`Auth (${Rr}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(s,...e){throw Kh(s,...e)}function Cn(s,...e){return Kh(s,...e)}function Av(s,e,i){const a={...Q1(),[e]:i};return new ms("auth","Firebase",a).create(e,{appName:s.name})}function Qn(s){return Av(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kh(s,...e){if(typeof s!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return wv.create(s,...e)}function J(s,e,...i){if(!s)throw Kh(e,...i)}function Yn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Lo(e),new Error(e)}function Zn(s,e){s||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return typeof self<"u"&&self.location?.href||""}function W1(){return Z_()==="http:"||Z_()==="https:"}function Z_(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W1()||dv()||"connection"in navigator)?navigator.onLine:!0}function $1(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,i){this.shortDelay=e,this.longDelay=i,Zn(i>e,"Short delay should be less than long delay!"),this.isMobile=Gh()||pv()}get(){return Z1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(s,e){Zn(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tC=new rl(3e4,6e4);function Pi(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Hi(s,e,i,a,o={}){return Iv(s,o,async()=>{let u={},h={};a&&(e==="GET"?h=a:u={body:JSON.stringify(a)});const d=Ar({key:s.config.apiKey,...h}).slice(1),g=await s._getAdditionalHeaders();g["Content-Type"]="application/json",s.languageCode&&(g["X-Firebase-Locale"]=s.languageCode);const m={method:e,headers:g,...u};return ST()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&wr(s.emulatorConfig.host)&&(m.credentials="include"),Rv.fetch()(await Nv(s,s.config.apiHost,i,d),m)})}async function Iv(s,e,i){s._canInitEmulator=!1;const a={...J1,...e};try{const o=new iC(s),u=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Do(s,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const d=u.ok?h.errorMessage:h.error.message,[g,m]=d.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Do(s,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Do(s,"email-already-in-use",h);if(g==="USER_DISABLED")throw Do(s,"user-disabled",h);const E=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Av(s,E,m);mn(s,E)}}catch(o){if(o instanceof Rn)throw o;mn(s,"network-request-failed",{message:String(o)})}}async function al(s,e,i,a,o={}){const u=await Hi(s,e,i,a,o);return"mfaPendingCredential"in u&&mn(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function Nv(s,e,i,a){const o=`${e}${i}?${a}`,u=s,h=u.config.emulator?Qh(s.config,o):`${s.config.apiScheme}://${o}`;return eC.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function nC(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(Cn(this.auth,"network-request-failed")),tC.get())})}}function Do(s,e,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=Cn(s,e,a);return o.customData._tokenResponse=i,o}function $_(s){return s!==void 0&&s.enterprise!==void 0}class sC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return nC(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rC(s,e){return Hi(s,"GET","/v2/recaptchaConfig",Pi(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(s,e){return Hi(s,"POST","/v1/accounts:delete",e)}async function Yo(s,e){return Hi(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lC(s,e=!1){const i=_t(s),a=await i.getIdToken(e),o=Xh(a);J(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:a,authTime:Ha(nh(o.auth_time)),issuedAtTime:Ha(nh(o.iat)),expirationTime:Ha(nh(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function nh(s){return Number(s)*1e3}function Xh(s){const[e,i,a]=s.split(".");if(e===void 0||i===void 0||a===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const o=qo(i);return o?JSON.parse(o):(Lo("Failed to decode base64 JWT payload"),null)}catch(o){return Lo("Caught error parsing JWT payload as JSON",o?.toString()),null}}function J_(s){const e=Xh(s);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(s,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof Rn&&oC(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function oC({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(s){const e=s.auth,i=await s.getIdToken(),a=await Qa(s,Yo(e,{idToken:i}));J(a?.users.length,e,"internal-error");const o=a.users[0];s._notifyReloadListener(o);const u=o.providerUserInfo?.length?Ov(o.providerUserInfo):[],h=fC(s.providerData,u),d=s.isAnonymous,g=!(s.email&&o.passwordHash)&&!h?.length,m=d?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Th(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(s,E)}async function uC(s){const e=_t(s);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fC(s,e){return[...s.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function Ov(s){return s.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(s,e){const i=await Iv(s,{},async()=>{const a=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,h=await Nv(s,o,"/v1/token",`key=${u}`),d=await s._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:d,body:a};return s.emulatorConfig&&wr(s.emulatorConfig.host)&&(g.credentials="include"),Rv.fetch()(h,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function dC(s,e){return Hi(s,"POST","/v2/accounts:revokeToken",Pi(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):J_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){J(e.length!==0,"internal-error");const i=J_(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:o,expiresIn:u}=await hC(e,i);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:o,expirationTime:u}=i,h=new hr;return a&&(J(typeof a=="string","internal-error",{appName:e}),h.refreshToken=a),o&&(J(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(J(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(s,e){J(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class fn{constructor({uid:e,auth:i,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new cC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Th(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const i=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return J(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return lC(this,e)}reload(){return uC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await Fo(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await Qa(this,aC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const a=i.displayName??void 0,o=i.email??void 0,u=i.phoneNumber??void 0,h=i.photoURL??void 0,d=i.tenantId??void 0,g=i._redirectEventId??void 0,m=i.createdAt??void 0,E=i.lastLoginAt??void 0,{uid:T,emailVerified:b,isAnonymous:U,providerData:H,stsTokenManager:$}=i;J(T&&$,e,"internal-error");const F=hr.fromJSON(this.name,$);J(typeof T=="string",e,"internal-error"),Ci(a,e.name),Ci(o,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof U=="boolean",e,"internal-error"),Ci(u,e.name),Ci(h,e.name),Ci(d,e.name),Ci(g,e.name),Ci(m,e.name),Ci(E,e.name);const Oe=new fn({uid:T,auth:e,email:o,emailVerified:b,displayName:a,isAnonymous:U,photoURL:h,phoneNumber:u,tenantId:d,stsTokenManager:F,createdAt:m,lastLoginAt:E});return H&&Array.isArray(H)&&(Oe.providerData=H.map(ze=>({...ze}))),g&&(Oe._redirectEventId=g),Oe}static async _fromIdTokenResponse(e,i,a=!1){const o=new hr;o.updateFromServerResponse(i);const u=new fn({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await Fo(u),u}static async _fromGetAccountInfoResponse(e,i,a){const o=i.users[0];J(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ov(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,d=new hr;d.updateFromIdToken(a);const g=new fn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Th(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,m),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;function Fn(s){Zn(s instanceof Function,"Expected a class definition");let e=ey.get(s);return e?(Zn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,ey.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Mv.type="NONE";const ty=Mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(s,e,i){return`firebase:${s}:${e}:${i}`}class dr{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=Uo(this.userKey,o.apiKey,u),this.fullPersistenceKey=Uo("persistence",o.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Yo(this.auth,{idToken:e}).catch(()=>{});return i?fn._fromGetAccountInfoResponse(this.auth,i,e):null}return fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new dr(Fn(ty),e,a);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=o[0]||Fn(ty);const h=Uo(a,e.config.apiKey,e.name);let d=null;for(const m of i)try{const E=await m._get(h);if(E){let T;if(typeof E=="string"){const b=await Yo(e,{idToken:E}).catch(()=>{});if(!b)break;T=await fn._fromGetAccountInfoResponse(e,b,E)}else T=fn._fromJSON(e,E);m!==u&&(d=T),u=m;break}}catch{}const g=o.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new dr(u,e,a):(u=g[0],d&&await u._set(h,d.toJSON()),await Promise.all(i.map(async m=>{if(m!==u)try{await m._remove(h)}catch{}})),new dr(u,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zv(e))return"Blackberry";if(Pv(e))return"Webos";if(xv(e))return"Safari";if((e.includes("chrome/")||kv(e))&&!e.includes("edge/"))return"Chrome";if(Uv(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if(a?.length===2)return a[1]}return"Other"}function Dv(s=Rt()){return/firefox\//i.test(s)}function xv(s=Rt()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kv(s=Rt()){return/crios\//i.test(s)}function Lv(s=Rt()){return/iemobile/i.test(s)}function Uv(s=Rt()){return/android/i.test(s)}function zv(s=Rt()){return/blackberry/i.test(s)}function Pv(s=Rt()){return/webos/i.test(s)}function Wh(s=Rt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function pC(s=Rt()){return Wh(s)&&!!window.navigator?.standalone}function mC(){return bT()&&document.documentMode===10}function Hv(s=Rt()){return Wh(s)||Uv(s)||Pv(s)||zv(s)||/windows phone/i.test(s)||Lv(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(s,e=[]){let i;switch(s){case"Browser":i=ny(Rt());break;case"Worker":i=`${ny(Rt())}-${s}`;break;default:i=s}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Rr}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=u=>new Promise((h,d)=>{try{const g=e(u);h(g)}catch(g){d(g)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(s,e={}){return Hi(s,"GET","/v2/passwordPolicy",Pi(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=6;class vC{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??yC,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,i,a,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new gC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Fn(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await dr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Yo(this,{idToken:e}),a=await fn._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(tn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=a?._redirectEventId,d=await this.tryRedirectSignIn(e);(!u||u===h)&&d?.user&&(a=d.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Qn(this));const i=e?_t(e):null;return i&&J(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _C(this),i=new vC(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await dC(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Fn(e)||this._popupRedirectResolver;J(i,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[Fn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,o){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(d,this,"internal-error"),d.then(()=>{h||u(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,a,o);return()=>{h=!0,g()}}else{const g=e.addObserver(i);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&X1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _s(s){return _t(s)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=MT(i=>this.observer=i)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SC(s){pc=s}function qv(s){return pc.loadJS(s)}function bC(){return pc.recaptchaEnterpriseScript}function TC(){return pc.gapiScript}function CC(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class wC{constructor(){this.enterprise=new AC}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class AC{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const RC="recaptcha-enterprise",Vv="NO_RECAPTCHA";class IC{constructor(e){this.type=RC,this.auth=_s(e)}async verify(e="verify",i=!1){async function a(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,d)=>{rC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new sC(g);return u.tenantId==null?u._agentRecaptchaConfig=m:u._tenantRecaptchaConfigs[u.tenantId]=m,h(m.siteKey)}}).catch(g=>{d(g)})})}function o(u,h,d){const g=window.grecaptcha;$_(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(m=>{h(m)}).catch(()=>{h(Vv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wC().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{a(this.auth).then(d=>{if(!i&&$_(window.grecaptcha))o(d,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=bC();g.length!==0&&(g+=d),qv(g).then(()=>{o(d,u,h)}).catch(m=>{h(m)})}}).catch(d=>{h(d)})})}}async function sy(s,e,i,a=!1,o=!1){const u=new IC(s);let h;if(o)h=Vv;else try{h=await u.verify(i)}catch{h=await u.verify(i,!0)}const d={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const g=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const g=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return a?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Ch(s,e,i,a,o){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await sy(s,e,i,i==="getOobCode");return a(s,u)}else return a(s,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await sy(s,e,i,i==="getOobCode");return a(s,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(s,e){const i=gs(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),u=i.getOptions();if(ki(u,e??{}))return o;mn(o,"already-initialized")}return i.initialize({options:e})}function OC(s,e){const i=e?.persistence||[],a=(Array.isArray(i)?i:[i]).map(Fn);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(a,e?.popupRedirectResolver)}function MC(s,e,i){const a=_s(s);J(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,u=jv(e),{host:h,port:d}=DC(e),g=d===null?"":`:${d}`,m={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:d,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){J(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),J(ki(m,a.config.emulator)&&ki(E,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=m,a.emulatorConfig=E,a.settings.appVerificationDisabledForTesting=!0,wr(h)?(fv(`${u}//${h}${g}`),hv("Auth",!0)):xC()}function jv(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function DC(s){const e=jv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:ry(a.substr(u.length+1))}}else{const[u,h]=a.split(":");return{host:u,port:ry(h)}}}function ry(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function xC(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,i){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function kC(s,e){return Hi(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(s,e){return al(s,"POST","/v1/accounts:signInWithPassword",Pi(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(s,e){return al(s,"POST","/v1/accounts:signInWithEmailLink",Pi(s,e))}async function zC(s,e){return al(s,"POST","/v1/accounts:signInWithEmailLink",Pi(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Zh{constructor(e,i,a,o=null){super("password",a),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new Xa(e,i,"password")}static _fromEmailAndCode(e,i,a=null){return new Xa(e,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,i,"signInWithPassword",LC);case"emailLink":return UC(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,a,"signUpPassword",kC);case"emailLink":return zC(e,{idToken:i,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(s,e){return al(s,"POST","/v1/accounts:signInWithIdp",Pi(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="http://localhost";class os extends Zh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):mn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...u}=i;if(!a||!o)return null;const h=new os(a,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return pr(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,pr(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,pr(e,i)}buildRequest(){const e={requestUri:PC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Ar(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(s){const e=Ua(za(s)).link,i=e?Ua(za(e)).deep_link_id:null,a=Ua(za(s)).deep_link_id;return(a?Ua(za(a)).link:null)||a||i||e||s}class $h{constructor(e){const i=Ua(za(e)),a=i.apiKey??null,o=i.oobCode??null,u=HC(i.mode??null);J(a&&o&&u,"argument-error"),this.apiKey=a,this.operation=u,this.code=o,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=BC(e);try{return new $h(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.providerId=Ir.PROVIDER_ID}static credential(e,i){return Xa._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const a=$h.parseLink(i);return J(a,"argument-error"),Xa._fromEmailAndCode(e,a.code,a.tenantId)}}Ir.PROVIDER_ID="password";Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends ll{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return os._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Ai.credential(i,a)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends ll{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends ll{constructor(){super("twitter.com")}static credential(e,i){return os._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return Ii.credential(i,a)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(s,e){return al(s,"POST","/v1/accounts:signUp",Pi(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,o=!1){const u=await fn._fromIdTokenResponse(e,a,o),h=ay(a);return new cs({user:u,providerId:h,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const o=ay(a);return new cs({user:e,providerId:o,_tokenResponse:a,operationType:i})}}function ay(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Rn{constructor(e,i,a,o){super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,o){return new Ko(e,i,a,o)}}function Yv(s,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(s,u,e,a):u})}async function VC(s,e,i=!1){const a=await Qa(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return cs._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(s,e,i=!1){const{auth:a}=s;if(tn(a.app))return Promise.reject(Qn(a));const o="reauthenticate";try{const u=await Qa(s,Yv(a,o,e,s),i);J(u.idToken,a,"internal-error");const h=Xh(u.idToken);J(h,a,"internal-error");const{sub:d}=h;return J(s.uid===d,a,"user-mismatch"),cs._forOperation(s,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&mn(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(s,e,i=!1){if(tn(s.app))return Promise.reject(Qn(s));const a="signIn",o=await Yv(s,a,e),u=await cs._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(u.user),u}async function GC(s,e){return Fv(_s(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(s){const e=_s(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YC(s,e,i){if(tn(s.app))return Promise.reject(Qn(s));const a=_s(s),h=await Ch(a,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qC).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Kv(s),g}),d=await cs._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(d.user),d}function FC(s,e,i){return tn(s.app)?Promise.reject(Qn(s)):GC(_t(s),Ir.credential(e,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Kv(s),a})}function KC(s,e,i,a){return _t(s).onIdTokenChanged(e,i,a)}function QC(s,e,i){return _t(s).beforeAuthStateChanged(e,i)}function XC(s,e,i,a){return _t(s).onAuthStateChanged(e,i,a)}function WC(s){return _t(s).signOut()}const Qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=1e3,$C=10;class Xv extends Qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&e(i,o,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,d,g)=>{this.notifyListeners(h,g)});return}const a=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!i&&this.localCache[a]===h||this.notifyListeners(a,h)},u=this.storage.getItem(a);mC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$C):o()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xv.type="LOCAL";const JC=Xv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv extends Qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Wv.type="SESSION";const Zv=Wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const a=new mc(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:o,data:u}=i.data,h=this.handlersMap[o];if(!h?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const d=Array.from(h).map(async m=>m(i.origin,u)),g=await ew(d);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(s="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((d,g)=>{const m=Jh("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(T){const b=T;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),d(b.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:m,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function nw(s){wn().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function iw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sw(){return navigator?.serviceWorker?.controller||null}function rw(){return $v()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebaseLocalStorageDb",aw=1,Xo="firebaseLocalStorage",eE="fbase_key";class ol{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function gc(s,e){return s.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function lw(){const s=indexedDB.deleteDatabase(Jv);return new ol(s).toPromise()}function wh(){const s=indexedDB.open(Jv,aw);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(Xo,{keyPath:eE})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(Xo)?e(a):(a.close(),await lw(),e(await wh()))})})}async function ly(s,e,i){const a=gc(s,!0).put({[eE]:e,value:i});return new ol(a).toPromise()}async function ow(s,e){const i=gc(s,!1).get(e),a=await new ol(i).toPromise();return a===void 0?null:a.value}function oy(s,e){const i=gc(s,!0).delete(e);return new ol(i).toPromise()}const cw=800,uw=3;class tE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wh(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>uw)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(rw()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iw(),!this.activeServiceWorker)return;this.sender=new tw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wh();return await ly(e,Qo,"1"),await oy(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>ly(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>ow(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>oy(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=gc(o,!1).getAll();return new ol(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tE.type="LOCAL";const fw=tE;new rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(s,e){return e?Fn(e):(J(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Zh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,i){return pr(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function dw(s){return Fv(s.auth,new ed(s),s.bypassAuthState)}function pw(s){const{auth:e,user:i}=s;return J(i,e,"internal-error"),jC(i,new ed(s),s.bypassAuthState)}async function mw(s){const{auth:e,user:i}=s;return J(i,e,"internal-error"),VC(i,new ed(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,i,a,o,u=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:o,tenantId:u,error:h,type:d}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(g))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dw;case"linkViaPopup":case"linkViaRedirect":return mw;case"reauthViaPopup":case"reauthViaRedirect":return pw;default:mn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new rl(2e3,1e4);class ur extends nE{constructor(e,i,a,o,u){super(e,i,o,u),this.provider=a,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gw.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="pendingRedirect",zo=new Map;class yw extends nE{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const a=await vw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vw(s,e){const i=bw(e),a=Sw(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function Ew(s,e){zo.set(s._key(),e)}function Sw(s){return Fn(s._redirectPersistence)}function bw(s){return Uo(_w,s.config.apiKey,s.name)}async function Tw(s,e,i=!1){if(tn(s.app))return Promise.reject(Qn(s));const a=_s(s),o=hw(a,e),h=await new yw(a,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=600*1e3;class ww{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Aw(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!iE(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";i.onError(Cn(this.auth,a))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cw&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function iE({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function Aw(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iE(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(s,e={}){return Hi(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nw=/^https?/;async function Ow(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Rw(s);for(const i of e)try{if(Mw(i))return}catch{}mn(s,"unauthorized-domain")}function Mw(s){const e=bh(),{protocol:i,hostname:a}=new URL(e);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===a}if(!Nw.test(i))return!1;if(Iw.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new rl(3e4,6e4);function uy(){const s=wn().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function xw(s){return new Promise((e,i)=>{function a(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),i(Cn(s,"network-request-failed"))},timeout:Dw.get()})}if(wn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(wn().gapi?.load)a();else{const o=CC("iframefcb");return wn()[o]=()=>{gapi.load?a():i(Cn(s,"network-request-failed"))},qv(`${TC()}?onload=${o}`).catch(u=>i(u))}}).catch(e=>{throw Po=null,e})}let Po=null;function kw(s){return Po=Po||xw(s),Po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new rl(5e3,15e3),Uw="__/auth/iframe",zw="emulator/auth/iframe",Pw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bw(s){const e=s.config;J(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?Qh(e,zw):`https://${s.config.authDomain}/${Uw}`,a={apiKey:e.apiKey,appName:s.name,v:Rr},o=Hw.get(s.config.apiHost);o&&(a.eid=o);const u=s._getFrameworks();return u.length&&(a.fw=u.join(",")),`${i}?${Ar(a).slice(1)}`}async function qw(s){const e=await kw(s),i=wn().gapi;return J(i,s,"internal-error"),e.open({where:document.body,url:Bw(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pw,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const h=Cn(s,"network-request-failed"),d=wn().setTimeout(()=>{u(h)},Lw.get());function g(){wn().clearTimeout(d),o(a)}a.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jw=500,Gw=600,Yw="_blank",Fw="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kw(s,e,i,a=jw,o=Gw){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const g={...Vw,width:a.toString(),height:o.toString(),top:u,left:h},m=Rt().toLowerCase();i&&(d=kv(m)?Yw:i),Dv(m)&&(e=e||Fw,g.scrollbars="yes");const E=Object.entries(g).reduce((b,[U,H])=>`${b}${U}=${H},`,"");if(pC(m)&&d!=="_self")return Qw(e||"",d),new fy(null);const T=window.open(e||"",d,E);J(T,s,"popup-blocked");try{T.focus()}catch{}return new fy(T)}function Qw(s,e){const i=document.createElement("a");i.href=s,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="__/auth/handler",Ww="emulator/auth/handler",Zw=encodeURIComponent("fac");async function hy(s,e,i,a,o,u){J(s.config.authDomain,s,"auth-domain-config-required"),J(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:Rr,eventId:o};if(e instanceof Gv){e.setDefaultLanguage(s.languageCode),h.providerId=e.providerId||"",gh(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof ll){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const g=await s._getAppCheckToken(),m=g?`#${Zw}=${encodeURIComponent(g)}`:"";return`${$w(s)}?${Ar(d).slice(1)}${m}`}function $w({config:s}){return s.emulator?Qh(s,Ww):`https://${s.authDomain}/${Xw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class Jw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zv,this._completeRedirectFn=Tw,this._overrideRedirectResult=Ew}async _openPopup(e,i,a,o){Zn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await hy(e,i,a,bh(),o);return Kw(e,u,Jh())}async _openRedirect(e,i,a,o){await this._originValidation(e);const u=await hy(e,i,a,bh(),o);return nw(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:u}=this.eventManagers[i];return o?Promise.resolve(o):(Zn(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await qw(e),a=new ww(e);return i.register("authEvent",o=>(J(o?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ih,{type:ih},o=>{const u=o?.[0]?.[ih];u!==void 0&&i(!!u),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Ow(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Hv()||xv()||Wh()}}const eA=Jw;var dy="@firebase/auth",py="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iA(s){An(new pn("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=a.options;J(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(s)},m=new EC(a,o,u,g);return OC(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),An(new pn("auth-internal",e=>{const i=_s(e.getProvider("auth").getImmediate());return(a=>new tA(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(dy,py,nA(s)),sn(dy,py,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=300,rA=uv("authIdTokenMaxAge")||sA;let my=null;const aA=s=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>rA)return;const o=i?.token;my!==o&&(my=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lA(s=Fh()){const e=gs(s,"auth");if(e.isInitialized())return e.getImmediate();const i=NC(s,{popupRedirectResolver:eA,persistence:[fw,JC,Zv]}),a=uv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const h=aA(u.toString());QC(i,h,()=>h(i.currentUser)),KC(i,d=>h(d))}}const o=ov("auth");return o&&MC(i,`http://${o}`),i}function oA(){return document.getElementsByTagName("head")?.[0]??document}SC({loadJS(s){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=e,a.onerror=o=>{const u=Cn("internal-error");u.customData=o,i(u)},a.type="text/javascript",a.charset="UTF-8",oA().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iA("Browser");var gy={};const _y="@firebase/database",yy="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sE="";function cA(s){sE=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:Fa(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return In(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uA(e)}}catch{}return new fA},as=rE("localStorage"),hA=rE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new dc("@firebase/database"),dA=function(){let s=1;return function(){return s++}}(),aE=function(s){const e=kT(s),i=new OT;i.update(e);const a=i.digest();return Vh.encodeByteArray(a)},cl=function(...s){let e="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=cl.apply(null,a):typeof a=="object"?e+=it(a):e+=a,e+=" "}return e};let Ba=null,vy=!0;const pA=function(s,e){P(!0,"Can't turn on custom loggers persistently."),mr.logLevel=we.VERBOSE,Ba=mr.log.bind(mr)},mt=function(...s){if(vy===!0&&(vy=!1,Ba===null&&hA.get("logging_enabled")===!0&&pA()),Ba){const e=cl.apply(null,s);Ba(e)}},ul=function(s){return function(...e){mt(s,...e)}},Ah=function(...s){const e="FIREBASE INTERNAL ERROR: "+cl(...s);mr.error(e)},$n=function(...s){const e=`FIREBASE FATAL ERROR: ${cl(...s)}`;throw mr.error(e),new Error(e)},At=function(...s){const e="FIREBASE WARNING: "+cl(...s);mr.warn(e)},mA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},td=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},gA=function(s){if(document.readyState==="complete")s();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},vr="[MIN_NAME]",us="[MAX_NAME]",ys=function(s,e){if(s===e)return 0;if(s===vr||e===us)return-1;if(e===vr||s===us)return 1;{const i=Ey(s),a=Ey(e);return i!==null?a!==null?i-a===0?s.length-e.length:i-a:-1:a!==null?1:s<e?-1:1}},_A=function(s,e){return s===e?0:s<e?-1:1},Ma=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+it(e))},nd=function(s){if(typeof s!="object"||s===null)return it(s);const e=[];for(const a in s)e.push(a);e.sort();let i="{";for(let a=0;a<e.length;a++)a!==0&&(i+=","),i+=it(e[a]),i+=":",i+=nd(s[e[a]]);return i+="}",i},lE=function(s,e){const i=s.length;if(i<=e)return[s];const a=[];for(let o=0;o<i;o+=e)o+e>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+e));return a};function gt(s,e){for(const i in s)s.hasOwnProperty(i)&&e(i,s[i])}const oE=function(s){P(!td(s),"Invalid JSON number");const e=11,i=52,a=(1<<e-1)-1;let o,u,h,d,g;s===0?(u=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),a),u=d+a,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(u=0,h=Math.round(s/Math.pow(2,1-a-i))));const m=[];for(g=i;g;g-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(g=e;g;g-=1)m.push(u%2?1:0),u=Math.floor(u/2);m.push(o?1:0),m.reverse();const E=m.join("");let T="";for(g=0;g<64;g+=8){let b=parseInt(E.substr(g,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},yA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EA(s,e){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+e._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const SA=new RegExp("^-?(0*)\\d{1,10}$"),bA=-2147483648,TA=2147483647,Ey=function(s){if(SA.test(s)){const e=Number(s);if(e>=bA&&e<=TA)return e}return null},Nr=function(s){try{s()}catch(e){setTimeout(()=>{const i=e.stack||"";throw At("Exception was thrown by user callback.",i),e},Math.floor(0))}},CA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qa=function(s,e){const i=setTimeout(s,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,i){this.appCheckProvider=i,this.appName=e.name,tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(a=>this.appCheck=a)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){At(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,i,a){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class Ho{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ho.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="5",cE="v",uE="s",fE="r",hE="f",dE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pE="ls",mE="p",Rh="ac",gE="websocket",_E="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,i,a,o,u=!1,h="",d=!1,g=!1,m=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=g,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=as.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&as.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function RA(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function vE(s,e,i){P(typeof e=="string","typeof type must == string"),P(typeof i=="object","typeof params must == object");let a;if(e===gE)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===_E)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RA(s)&&(i.ns=s.namespace);const o=[];return gt(i,(u,h)=>{o.push(u+"="+h)}),a+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.counters_={}}incrementCounter(e,i=1){In(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return fT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={},rh={};function sd(s){const e=s.toString();return sh[e]||(sh[e]=new IA),sh[e]}function NA(s,e){const i=s.toString();return rh[i]||(rh[i]=e()),rh[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&Nr(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="start",MA="close",DA="pLPCommand",xA="pRTLPCB",EE="id",SE="pw",bE="ser",kA="cb",LA="seg",UA="ts",zA="d",PA="dframe",TE=1870,CE=30,HA=TE-CE,BA=25e3,qA=3e4;class fr{constructor(e,i,a,o,u,h,d){this.connId=e,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=u,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ul(e),this.stats_=sd(i),this.urlFn=g=>(this.appCheckToken&&(g[Rh]=this.appCheckToken),vE(i,_E,g))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new OA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qA)),gA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rd((...u)=>{const[h,d,g,m,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Sy)this.id=d,this.password=g;else if(h===MA)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,d]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const a={};a[Sy]="t",a[bE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[kA]=this.scriptTagHolder.uniqueCallbackIdentifier),a[cE]=id,this.transportSessionId&&(a[uE]=this.transportSessionId),this.lastSessionId&&(a[pE]=this.lastSessionId),this.applicationId&&(a[mE]=this.applicationId),this.appCheckToken&&(a[Rh]=this.appCheckToken),typeof location<"u"&&location.hostname&&dE.test(location.hostname)&&(a[fE]=hE);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fr.forceAllow_=!0}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){return fr.forceAllow_?!0:!fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yA()&&!vA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=it(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=av(i),o=lE(a,HA);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[PA]="t",a[EE]=e,a[SE]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=it(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class rd{constructor(e,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dA(),window[DA+this.uniqueCallbackIdentifier]=e,window[xA+this.uniqueCallbackIdentifier]=i,this.myIFrame=rd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){mt("frame writing exception"),d.stack&&mt(d.stack),mt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[EE]=this.myID,e[SE]=this.myPW,e[bE]=this.currentSerial;let i=this.urlFn(e),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+CE+a.length<=TE;){const h=this.pendingSegs.shift();a=a+"&"+LA+o+"="+h.seg+"&"+UA+o+"="+h.ts+"&"+zA+o+"="+h.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,a){this.pendingSegs.push({seg:e,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(BA)),u=()=>{clearTimeout(o),a()};this.addTag(e,u)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=16384,jA=45e3;let Wo=null;typeof MozWebSocket<"u"?Wo=MozWebSocket:typeof WebSocket<"u"&&(Wo=WebSocket);class un{constructor(e,i,a,o,u,h,d){this.connId=e,this.applicationId=a,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ul(this.connId),this.stats_=sd(i),this.connURL=un.connectionURL_(i,h,d,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,a,o,u){const h={};return h[cE]=id,typeof location<"u"&&location.hostname&&dE.test(location.hostname)&&(h[fE]=hE),i&&(h[uE]=i),a&&(h[pE]=a),o&&(h[Rh]=o),u&&(h[mE]=u),vE(e,gE,h)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,as.set("previous_websocket_failure",!0);try{let a;TT(),this.mySock=new Wo(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&Wo!==null&&!un.forceDisallow_}static previouslyFailed(){return as.isInMemoryStorage||as.get("previous_websocket_failure")===!0}markConnectionHealthy(){as.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Fa(i);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const i=it(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=lE(i,VA);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jA))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}un.responsesRequiredToBeHealthy=2;un.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{static get ALL_TRANSPORTS(){return[fr,un]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const i=un&&un.isAvailable();let a=i&&!un.previouslyFailed();if(e.webSocketOnly&&(i||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[un];else{const o=this.transports_=[];for(const u of Wa.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=6e4,YA=5e3,FA=10*1024,KA=100*1024,ah="t",by="d",QA="s",Ty="r",XA="e",Cy="o",wy="a",Ay="n",Ry="p",WA="h";class ZA{constructor(e,i,a,o,u,h,d,g,m,E){this.id=e,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=g,this.onKill_=m,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ul("c:"+this.id+":"),this.transportManager_=new Wa(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=qa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ah in e){const i=e[ah];i===wy?this.upgradeIfSecondaryHealthy_():i===Ty?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Cy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=Ma("t",e),a=Ma("d",e);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ry,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ay,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=Ma("t",e),a=Ma("d",e);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=Ma(ah,e);if(by in e){const a=e[by];if(i===WA){const o={...a};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Ay){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===QA?this.onConnectionShutdown_(a):i===Ty?this.onReset_(a):i===XA?Ah("Server Error: "+a):i===Cy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ah("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,a=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),id!==a&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),qa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ry,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(as.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{put(e,i,a,o){}merge(e,i,a,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,a){}onDisconnectMerge(e,i,a){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(e,i,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:a});const o=this.getInitialEvent(e);o&&i.apply(a,o)}off(e,i,a){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===i&&(!a||a===o[u].context)){o.splice(u,1);return}}validateEventType_(e){P(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends AE{static getInstance(){return new Zo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=32,Ny=768;class Ae{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function me(){return new Ae("")}function ae(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Li(s){return s.pieces_.length-s.pieceNum_}function Ue(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Ae(s.pieces_,e)}function ad(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function $A(s){let e="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[i])));return e||"/"}function Za(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function RE(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)e.push(s.pieces_[i]);return new Ae(e,0)}function Ge(s,e){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(e instanceof Ae)for(let a=e.pieceNum_;a<e.pieces_.length;a++)i.push(e.pieces_[a]);else{const a=e.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new Ae(i,0)}function fe(s){return s.pieceNum_>=s.pieces_.length}function wt(s,e){const i=ae(s),a=ae(e);if(i===null)return e;if(i===a)return wt(Ue(s),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function JA(s,e){const i=Za(s,0),a=Za(e,0);for(let o=0;o<i.length&&o<a.length;o++){const u=ys(i[o],a[o]);if(u!==0)return u}return i.length===a.length?0:i.length<a.length?-1:1}function ld(s,e){if(Li(s)!==Li(e))return!1;for(let i=s.pieceNum_,a=e.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==e.pieces_[a])return!1;return!0}function nn(s,e){let i=s.pieceNum_,a=e.pieceNum_;if(Li(s)>Li(e))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==e.pieces_[a])return!1;++i,++a}return!0}class eR{constructor(e,i){this.errorPrefix_=i,this.parts_=Za(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=hc(this.parts_[a]);IE(this)}}function tR(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=hc(e),IE(s)}function nR(s){const e=s.parts_.pop();s.byteLength_-=hc(e),s.parts_.length>0&&(s.byteLength_-=1)}function IE(s){if(s.byteLength_>Ny)throw new Error(s.errorPrefix_+"has a key path longer than "+Ny+" bytes ("+s.byteLength_+").");if(s.parts_.length>Iy)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Iy+") or object contains a cycle "+rs(s))}function rs(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends AE{static getInstance(){return new od}constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=1e3,iR=300*1e3,Oy=30*1e3,sR=1.3,rR=3e4,aR="server_kill",My=3;class Xn extends wE{constructor(e,i,a,o,u,h,d,g){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=g,this.id=Xn.nextPersistentConnectionId_++,this.log_=ul("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Da,this.maxReconnectDelay_=iR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,a){const o=++this.requestNumber_,u={r:o,a:e,b:i};this.log_(it(u)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),a&&(this.requestCBHash_[o]=a)}get(e){this.initConnection_();const i=new sl,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),i.promise}listen(e,i,a,o){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:e,tag:a};this.listens.get(h).set(u,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(e){const i=e.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const u={p:a},h="q";e.tag&&(u.q=i._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,d=>{const g=d.d,m=d.s;Xn.warnOnListenWarnings_(g,i),(this.listens.get(a)&&this.listens.get(a).get(o))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(a,o),e.onComplete&&e.onComplete(m,g))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&In(e,"w")){const a=yr(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',u=i._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Oy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=IT(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const u=o.s,h=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,a=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(e,i){const a=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,e._queryObject,i)}sendUnlisten_(e,i,a,o){this.log_("Unlisten on "+e+" for "+i);const u={p:e},h="n";o&&(u.q=a,u.t=o),this.sendRequest(h,u)}onDisconnectPut(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:a})}onDisconnectMerge(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:a})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,a,o){const u={p:i,d:a};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(e,i,a,o){this.putInternal("p",e,i,a,o)}merge(e,i,a,o){this.putInternal("m",e,i,a,o)}putInternal(e,i,a,o,u){this.initConnection_();const h={p:i,d:a};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,a,u=>{this.log_(i+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const u=a.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const i=e.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):Ah("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rR&&(this.reconnectDelay_=Da),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Xn.nextConnectionId_++,u=this.lastSessionId;let h=!1,d=null;const g=function(){d?d.close():(h=!0,a())},m=function(T){P(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:g,sendRequest:m};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);h?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,d=new ZA(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,a,U=>{At(U+" ("+this.repoInfo_.toString()+")"),this.interrupt(aR)},u))}catch(T){this.log_("Failed to get token: "+T),h||(this.repoInfo_.nodeAdmin&&At(T),g())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gh(this.interruptReasons_)&&(this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let a;i?a=i.map(u=>nd(u)).join("$"):a="default";const o=this.removeListen_(e,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const a=new Ae(e).toString();let o;if(this.listens.has(a)){const u=this.listens.get(a);o=u.get(i),u.delete(i),u.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(e,i){mt("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=My&&(this.reconnectDelay_=Oy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){mt("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=My&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+sE.replace(/\./g,"-")]=1,Gh()?e["framework.cordova"]=1:pv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return gh(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new le(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const a=new le(vr,e),o=new le(vr,i);return this.compare(a,o)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;class NE extends _c{static get __EMPTY_NODE(){return xo}static set __EMPTY_NODE(e){xo=e}compare(e,i){return ys(e.name,i.name)}isDefinedOn(e){throw Cr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return le.MIN}maxPost(){return new le(us,xo)}makePost(e,i){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,xo)}toString(){return".key"}}const gr=new NE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,i,a,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=i?a(e.key,i):1,o&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,i,a,o,u){this.key=e,this.value=i,this.color=a??ft.RED,this.left=o??xt.EMPTY_NODE,this.right=u??xt.EMPTY_NODE}copy(e,i,a,o,u){return new ft(e??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let o=this;const u=a(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,i,a),null):u===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let a,o;if(a=this,i(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(e,a.key)===0){if(a.right.isEmpty())return xt.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class lR{copy(e,i,a,o,u){return this}insert(e,i,a){return new ft(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,i=xt.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new xt(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(e,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(e){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(e,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new ko(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new ko(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new ko(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new lR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(s,e){return ys(s.name,e.name)}function cd(s,e){return ys(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih;function cR(s){Ih=s}const OE=function(s){return typeof s=="number"?"number:"+oE(s):"string:"+s},ME=function(s){if(s.isLeafNode()){const e=s.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&In(e,".sv"),"Priority must be a string or number.")}else P(s===Ih||s.isEmpty(),"priority of unexpected type.");P(s===Ih||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dy;class ut{static set __childrenNodeConstructor(e){Dy=e}static get __childrenNodeConstructor(){return Dy}constructor(e,i=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ME(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:ae(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const a=ae(e);return a===null?i:i.isEmpty()&&a!==".priority"?this:(P(a!==".priority"||Li(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+OE(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=oE(this.value_):e+=this.value_,this.lazyHash_=aE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,a=typeof this.value_,o=ut.VALUE_TYPE_ORDER.indexOf(i),u=ut.VALUE_TYPE_ORDER.indexOf(a);return P(o>=0,"Unknown leaf type: "+i),P(u>=0,"Unknown leaf type: "+a),o===u?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DE,xE;function uR(s){DE=s}function fR(s){xE=s}class hR extends _c{compare(e,i){const a=e.node.getPriority(),o=i.node.getPriority(),u=a.compareTo(o);return u===0?ys(e.name,i.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return le.MIN}maxPost(){return new le(us,new ut("[PRIORITY-POST]",xE))}makePost(e,i){const a=DE(e);return new le(i,new ut("[PRIORITY-POST]",a))}toString(){return".priority"}}const Ye=new hR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=Math.log(2);class pR{constructor(e){const i=u=>parseInt(Math.log(u)/dR,10),a=u=>parseInt(Array(u+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=a(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $o=function(s,e,i,a){s.sort(e);const o=function(g,m){const E=m-g;let T,b;if(E===0)return null;if(E===1)return T=s[g],b=i?i(T):T,new ft(b,T.node,ft.BLACK,null,null);{const U=parseInt(E/2,10)+g,H=o(g,U),$=o(U+1,m);return T=s[U],b=i?i(T):T,new ft(b,T.node,ft.BLACK,H,$)}},u=function(g){let m=null,E=null,T=s.length;const b=function(H,$){const F=T-H,Oe=T;T-=H;const ze=o(F+1,Oe),_e=s[F],Re=i?i(_e):_e;U(new ft(Re,_e.node,$,null,ze))},U=function(H){m?(m.left=H,m=H):(E=H,m=H)};for(let H=0;H<g.count;++H){const $=g.nextBitIsOne(),F=Math.pow(2,g.count-(H+1));$?b(F,ft.BLACK):(b(F,ft.BLACK),b(F,ft.RED))}return E},h=new pR(s.length),d=u(h);return new xt(a||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;const lr={};class Kn{static get Default(){return P(lr&&Ye,"ChildrenNode.ts has not been loaded"),lh=lh||new Kn({".priority":lr},{".priority":Ye}),lh}constructor(e,i){this.indexes_=e,this.indexSet_=i}get(e){const i=yr(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof xt?i:null}hasIndex(e){return In(this.indexSet_,e.toString())}addIndex(e,i){P(e!==gr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const u=i.getIterator(le.Wrap);let h=u.getNext();for(;h;)o=o||e.isDefinedOn(h.node),a.push(h),h=u.getNext();let d;o?d=$o(a,e.getCompare()):d=lr;const g=e.toString(),m={...this.indexSet_};m[g]=e;const E={...this.indexes_};return E[g]=d,new Kn(E,m)}addToIndexes(e,i){const a=Vo(this.indexes_,(o,u)=>{const h=yr(this.indexSet_,u);if(P(h,"Missing index implementation for "+u),o===lr)if(h.isDefinedOn(e.node)){const d=[],g=i.getIterator(le.Wrap);let m=g.getNext();for(;m;)m.name!==e.name&&d.push(m),m=g.getNext();return d.push(e),$o(d,h.getCompare())}else return lr;else{const d=i.get(e.name);let g=o;return d&&(g=g.remove(new le(e.name,d))),g.insert(e,e.node)}});return new Kn(a,this.indexSet_)}removeFromIndexes(e,i){const a=Vo(this.indexes_,o=>{if(o===lr)return o;{const u=i.get(e.name);return u?o.remove(new le(e.name,u)):o}});return new Kn(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;class ee{static get EMPTY_NODE(){return xa||(xa=new ee(new xt(cd),null,Kn.Default))}constructor(e,i,a){this.children_=e,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&ME(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xa}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?xa:i}}getChild(e){const i=ae(e);return i===null?this:this.getImmediateChild(i).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(P(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const a=new le(e,i);let o,u;i.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(e,i),u=this.indexMap_.addToIndexes(a,this.children_));const h=o.isEmpty()?xa:this.priorityNode_;return new ee(o,h,u)}}updateChild(e,i){const a=ae(e);if(a===null)return i;{P(ae(e)!==".priority"||Li(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(Ue(e),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let a=0,o=0,u=!0;if(this.forEachChild(Ye,(h,d)=>{i[h]=d.val(e),a++,u&&ee.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):u=!1}),!e&&u&&o<2*a){const h=[];for(const d in i)h[d]=i[d];return h}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+OE(this.getPriority().val())+":"),this.forEachChild(Ye,(i,a)=>{const o=a.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":aE(e)}return this.lazyHash_}getPredecessorChildName(e,i,a){const o=this.resolveIndex_(a);if(o){const u=o.getPredecessorKey(new le(e,i));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new le(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new le(i,this.children_.get(i)):null}forEachChild(e,i){const a=this.resolveIndex_(e);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,le.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fl?-1:0}withIndex(e){if(e===gr||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===gr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(Ye),o=i.getIterator(Ye);let u=a.getNext(),h=o.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=a.getNext(),h=o.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===gr?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mR extends ee{constructor(){super(new xt(cd),ee.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const fl=new mR;Object.defineProperties(le,{MIN:{value:new le(vr,ee.EMPTY_NODE)},MAX:{value:new le(us,fl)}});NE.__EMPTY_NODE=ee.EMPTY_NODE;ut.__childrenNodeConstructor=ee;cR(fl);fR(fl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=!0;function nt(s,e=null){if(s===null)return ee.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new ut(i,nt(e))}if(!(s instanceof Array)&&gR){const i=[];let a=!1;if(gt(s,(h,d)=>{if(h.substring(0,1)!=="."){const g=nt(d);g.isEmpty()||(a=a||!g.getPriority().isEmpty(),i.push(new le(h,g)))}}),i.length===0)return ee.EMPTY_NODE;const u=$o(i,oR,h=>h.name,cd);if(a){const h=$o(i,Ye.getCompare());return new ee(u,nt(e),new Kn({".priority":h},{".priority":Ye}))}else return new ee(u,nt(e),Kn.Default)}else{let i=ee.EMPTY_NODE;return gt(s,(a,o)=>{if(In(s,a)&&a.substring(0,1)!=="."){const u=nt(o);(u.isLeafNode()||!u.isEmpty())&&(i=i.updateImmediateChild(a,u))}}),i.updatePriority(nt(e))}}uR(nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R extends _c{constructor(e){super(),this.indexPath_=e,P(!fe(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const a=this.extractChild(e.node),o=this.extractChild(i.node),u=a.compareTo(o);return u===0?ys(e.name,i.name):u}makePost(e,i){const a=nt(e),o=ee.EMPTY_NODE.updateChild(this.indexPath_,a);return new le(i,o)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,fl);return new le(us,e)}toString(){return Za(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR extends _c{compare(e,i){const a=e.node.compareTo(i.node);return a===0?ys(e.name,i.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,i){const a=nt(e);return new le(i,a)}toString(){return".value"}}const vR=new yR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(s){return{type:"value",snapshotNode:s}}function Er(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function $a(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Ja(s,e,i){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:i}}function ER(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.index_=e}updateChild(e,i,a,o,u,h){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(i);return d.getChild(o).equals(a.getChild(o))&&d.isEmpty()===a.isEmpty()||(h!=null&&(a.isEmpty()?e.hasChild(i)?h.trackChildChange($a(i,d)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(Er(i,a)):h.trackChildChange(Ja(i,a,d))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(e,i,a){return a!=null&&(e.isLeafNode()||e.forEachChild(Ye,(o,u)=>{i.hasChild(o)||a.trackChildChange($a(o,u))}),i.isLeafNode()||i.forEachChild(Ye,(o,u)=>{if(e.hasChild(o)){const h=e.getImmediateChild(o);h.equals(u)||a.trackChildChange(Ja(o,u,h))}else a.trackChildChange(Er(o,u))})),i.withIndex(this.index_)}updatePriority(e,i){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.indexedFilter_=new ud(e.getIndex()),this.index_=e.getIndex(),this.startPost_=el.getStartPost_(e),this.endPost_=el.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return i&&a}updateChild(e,i,a,o,u,h){return this.matches(new le(i,a))||(a=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,i,a,o,u,h)}updateFullNode(e,i,a){i.isLeafNode()&&(i=ee.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(ee.EMPTY_NODE);const u=this;return i.forEachChild(Ye,(h,d)=>{u.matches(new le(h,d))||(o=o.updateImmediateChild(h,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,a)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const i=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),i)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const i=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),i)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new el(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,i,a,o,u,h){return this.rangedFilter_.matches(new le(i,a))||(a=ee.EMPTY_NODE),e.getImmediateChild(i).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,i,a,o,u,h):this.fullLimitUpdateChild_(e,i,a,u,h)}updateFullNode(e,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=ee.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;u.hasNext()&&h<this.limit_;){const d=u.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(ee.EMPTY_NODE);let u;this.reverse_?u=o.getReverseIterator(this.index_):u=o.getIterator(this.index_);let h=0;for(;u.hasNext();){const d=u.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,a)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,i,a,o,u){let h;if(this.reverse_){const T=this.index_.getCompare();h=(b,U)=>T(U,b)}else h=this.index_.getCompare();const d=e;P(d.numChildren()===this.limit_,"");const g=new le(i,a),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),E=this.rangedFilter_.matches(g);if(d.hasChild(i)){const T=d.getImmediateChild(i);let b=o.getChildAfterChild(this.index_,m,this.reverse_);for(;b!=null&&(b.name===i||d.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const U=b==null?1:h(b,g);if(E&&!a.isEmpty()&&U>=0)return u?.trackChildChange(Ja(i,a,T)),d.updateImmediateChild(i,a);{u?.trackChildChange($a(i,T));const $=d.updateImmediateChild(i,ee.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(u?.trackChildChange(Er(b.name,b.node)),$.updateImmediateChild(b.name,b.node)):$}}else return a.isEmpty()?e:E&&h(m,g)>=0?(u!=null&&(u.trackChildChange($a(m.name,m.node)),u.trackChildChange(Er(i,a))),d.updateImmediateChild(i,a).updateImmediateChild(m.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ye}copy(){const e=new fd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bR(s){return s.loadsAllData()?new ud(s.getIndex()):s.hasLimit()?new SR(s):new el(s)}function xy(s){const e={};if(s.isDefault())return e;let i;if(s.index_===Ye?i="$priority":s.index_===vR?i="$value":s.index_===gr?i="$key":(P(s.index_ instanceof _R,"Unrecognized index type!"),i=s.index_.toString()),e.orderBy=it(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";e[a]=it(s.indexStartValue_),s.startNameSet_&&(e[a]+=","+it(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";e[a]=it(s.indexEndValue_),s.endNameSet_&&(e[a]+=","+it(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function ky(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),e.vf=i}return s.index_!==Ye&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends wE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,i,a,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=ul("p:rest:"),this.listens_={}}listen(e,i,a,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=Jo.getListenId_(e,a),d={};this.listens_[h]=d;const g=xy(e._queryParams);this.restRequest_(u+".json",g,(m,E)=>{let T=E;if(m===404&&(T=null,m=null),m===null&&this.onDataUpdate_(u,T,!1,a),yr(this.listens_,h)===d){let b;m?m===401?b="permission_denied":b="rest_error:"+m:b="ok",o(b,null)}})}unlisten(e,i){const a=Jo.getListenId_(e,i);delete this.listens_[a]}get(e){const i=xy(e._queryParams),a=e._path.toString(),o=new sl;return this.restRequest_(a+".json",i,(u,h)=>{let d=h;u===404&&(d=null,u=null),u===null?(this.onDataUpdate_(a,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(i.auth=o.accessToken),u&&u.token&&(i.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ar(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(a&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let g=null;if(d.status>=200&&d.status<300){try{g=Fa(d.responseText)}catch{At("Failed to parse JSON response for "+h+": "+d.responseText)}a(null,g)}else d.status!==401&&d.status!==404&&At("Got unsuccessful REST response for "+h+" Status: "+d.status),a(d.status);a=null}},d.open("GET",h,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){return{value:null,children:new Map}}function LE(s,e,i){if(fe(e))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,i);else{const a=ae(e);s.children.has(a)||s.children.set(a,ec());const o=s.children.get(a);e=Ue(e),LE(o,e,i)}}function Nh(s,e,i){s.value!==null?i(e,s.value):CR(s,(a,o)=>{const u=new Ae(e.toString()+"/"+a);Nh(o,u,i)})}function CR(s,e){s.children.forEach((i,a)=>{e(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i={...e};return this.last_&&gt(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=10*1e3,AR=30*1e3,RR=300*1e3;class IR{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new wR(e);const a=Ly+(AR-Ly)*Math.random();qa(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),i={};let a=!1;gt(e,(o,u)=>{u>0&&In(this.statsToReport_,o)&&(i[o]=u,a=!0)}),a&&this.server_.reportStats(i),qa(this.reportStats_.bind(this),Math.floor(Math.random()*2*RR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pd(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,i,a){this.path=e,this.affectedTree=i,this.revert=a,this.type=hn.ACK_USER_WRITE,this.source=hd()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ae(e));return new tc(me(),i,this.revert)}}else return P(ae(this.path)===e,"operationForChild called for unrelated child."),new tc(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,i){this.source=e,this.path=i,this.type=hn.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new tl(this.source,me()):new tl(this.source,Ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,i,a){this.source=e,this.path=i,this.snap=a,this.type=hn.OVERWRITE}operationForChild(e){return fe(this.path)?new fs(this.source,me(),this.snap.getImmediateChild(e)):new fs(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,i,a){this.source=e,this.path=i,this.children=a,this.type=hn.MERGE}operationForChild(e){if(fe(this.path)){const i=this.children.subtree(new Ae(e));return i.isEmpty()?null:i.value?new fs(this.source,me(),i.value):new Sr(this.source,me(),i)}else return P(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sr(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,i,a){this.node_=e,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const i=ae(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OR(s,e,i,a){const o=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(ER(h.childName,h.snapshotNode))}),ka(s,o,"child_removed",e,a,i),ka(s,o,"child_added",e,a,i),ka(s,o,"child_moved",u,a,i),ka(s,o,"child_changed",e,a,i),ka(s,o,"value",e,a,i),o}function ka(s,e,i,a,o,u){const h=a.filter(d=>d.type===i);h.sort((d,g)=>DR(s,d,g)),h.forEach(d=>{const g=MR(s,d,u);o.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(g,s.query_))})})}function MR(s,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function DR(s,e,i){if(e.childName==null||i.childName==null)throw Cr("Should only compare child_ events.");const a=new le(e.childName,e.snapshotNode),o=new le(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(s,e){return{eventCache:s,serverCache:e}}function Va(s,e,i,a){return yc(new Ui(e,i,a),s.serverCache)}function UE(s,e,i,a){return yc(s.eventCache,new Ui(e,i,a))}function nc(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function hs(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;const xR=()=>(oh||(oh=new xt(_A)),oh);class Le{static fromObject(e){let i=new Le(null);return gt(e,(a,o)=>{i=i.set(new Ae(a),o)}),i}constructor(e,i=xR()){this.value=e,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:me(),value:this.value};if(fe(e))return null;{const a=ae(e),o=this.children.get(a);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Ue(e),i);return u!=null?{path:Ge(new Ae(a),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const i=ae(e),a=this.children.get(i);return a!==null?a.subtree(Ue(e)):new Le(null)}}set(e,i){if(fe(e))return new Le(i,this.children);{const a=ae(e),u=(this.children.get(a)||new Le(null)).set(Ue(e),i),h=this.children.insert(a,u);return new Le(this.value,h)}}remove(e){if(fe(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const i=ae(e),a=this.children.get(i);if(a){const o=a.remove(Ue(e));let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),this.value===null&&u.isEmpty()?new Le(null):new Le(this.value,u)}else return this}}get(e){if(fe(e))return this.value;{const i=ae(e),a=this.children.get(i);return a?a.get(Ue(e)):null}}setTree(e,i){if(fe(e))return i;{const a=ae(e),u=(this.children.get(a)||new Le(null)).setTree(Ue(e),i);let h;return u.isEmpty()?h=this.children.remove(a):h=this.children.insert(a,u),new Le(this.value,h)}}fold(e){return this.fold_(me(),e)}fold_(e,i){const a={};return this.children.inorderTraversal((o,u)=>{a[o]=u.fold_(Ge(e,o),i)}),i(e,this.value,a)}findOnPath(e,i){return this.findOnPath_(e,me(),i)}findOnPath_(e,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(fe(e))return null;{const u=ae(e),h=this.children.get(u);return h?h.findOnPath_(Ue(e),Ge(i,u),a):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,me(),i)}foreachOnPath_(e,i,a){if(fe(e))return this;{this.value&&a(i,this.value);const o=ae(e),u=this.children.get(o);return u?u.foreachOnPath_(Ue(e),Ge(i,o),a):new Le(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,i){this.children.inorderTraversal((a,o)=>{o.foreach_(Ge(e,a),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,a)=>{a.value&&e(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new Le(null))}}function ja(s,e,i){if(fe(e))return new dn(new Le(i));{const a=s.writeTree_.findRootMostValueAndPath(e);if(a!=null){const o=a.path;let u=a.value;const h=wt(o,e);return u=u.updateChild(h,i),new dn(s.writeTree_.set(o,u))}else{const o=new Le(i),u=s.writeTree_.setTree(e,o);return new dn(u)}}}function Oh(s,e,i){let a=s;return gt(i,(o,u)=>{a=ja(a,Ge(e,o),u)}),a}function Uy(s,e){if(fe(e))return dn.empty();{const i=s.writeTree_.setTree(e,new Le(null));return new dn(i)}}function Mh(s,e){return vs(s,e)!=null}function vs(s,e){const i=s.writeTree_.findRootMostValueAndPath(e);return i!=null?s.writeTree_.get(i.path).getChild(wt(i.path,e)):null}function zy(s){const e=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ye,(a,o)=>{e.push(new le(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&e.push(new le(a,o.value))}),e}function Di(s,e){if(fe(e))return s;{const i=vs(s,e);return i!=null?new dn(new Le(i)):new dn(s.writeTree_.subtree(e))}}function Dh(s){return s.writeTree_.isEmpty()}function br(s,e){return zE(me(),s.writeTree_,e)}function zE(s,e,i){if(e.value!=null)return i.updateChild(s,e.value);{let a=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(P(u.value!==null,"Priority writes must always be leaf nodes"),a=u.value):i=zE(Ge(s,o),u,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(Ge(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(s,e){return qE(e,s)}function kR(s,e,i,a,o){P(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=ja(s.visibleWrites,e,i)),s.lastWriteId=a}function LR(s,e,i,a){P(a>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:e,children:i,writeId:a,visible:!0}),s.visibleWrites=Oh(s.visibleWrites,e,i),s.lastWriteId=a}function UR(s,e){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===e)return a}return null}function zR(s,e){const i=s.allWrites.findIndex(d=>d.writeId===e);P(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,u=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&PR(d,a.path)?o=!1:nn(a.path,d.path)&&(u=!0)),h--}if(o){if(u)return HR(s),!0;if(a.snap)s.visibleWrites=Uy(s.visibleWrites,a.path);else{const d=a.children;gt(d,g=>{s.visibleWrites=Uy(s.visibleWrites,Ge(a.path,g))})}return!0}else return!1}function PR(s,e){if(s.snap)return nn(s.path,e);for(const i in s.children)if(s.children.hasOwnProperty(i)&&nn(Ge(s.path,i),e))return!0;return!1}function HR(s){s.visibleWrites=PE(s.allWrites,BR,me()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function BR(s){return s.visible}function PE(s,e,i){let a=dn.empty();for(let o=0;o<s.length;++o){const u=s[o];if(e(u)){const h=u.path;let d;if(u.snap)nn(i,h)?(d=wt(i,h),a=ja(a,d,u.snap)):nn(h,i)&&(d=wt(h,i),a=ja(a,me(),u.snap.getChild(d)));else if(u.children){if(nn(i,h))d=wt(i,h),a=Oh(a,d,u.children);else if(nn(h,i))if(d=wt(h,i),fe(d))a=Oh(a,me(),u.children);else{const g=yr(u.children,ae(d));if(g){const m=g.getChild(Ue(d));a=ja(a,me(),m)}}}else throw Cr("WriteRecord should have .snap or .children")}}return a}function HE(s,e,i,a,o){if(!a&&!o){const u=vs(s.visibleWrites,e);if(u!=null)return u;{const h=Di(s.visibleWrites,e);if(Dh(h))return i;if(i==null&&!Mh(h,me()))return null;{const d=i||ee.EMPTY_NODE;return br(h,d)}}}else{const u=Di(s.visibleWrites,e);if(!o&&Dh(u))return i;if(!o&&i==null&&!Mh(u,me()))return null;{const h=function(m){return(m.visible||o)&&(!a||!~a.indexOf(m.writeId))&&(nn(m.path,e)||nn(e,m.path))},d=PE(s.allWrites,h,e),g=i||ee.EMPTY_NODE;return br(d,g)}}}function qR(s,e,i){let a=ee.EMPTY_NODE;const o=vs(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ye,(u,h)=>{a=a.updateImmediateChild(u,h)}),a;if(i){const u=Di(s.visibleWrites,e);return i.forEachChild(Ye,(h,d)=>{const g=br(Di(u,new Ae(h)),d);a=a.updateImmediateChild(h,g)}),zy(u).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}else{const u=Di(s.visibleWrites,e);return zy(u).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}}function VR(s,e,i,a,o){P(a||o,"Either existingEventSnap or existingServerSnap must exist");const u=Ge(e,i);if(Mh(s.visibleWrites,u))return null;{const h=Di(s.visibleWrites,u);return Dh(h)?o.getChild(i):br(h,o.getChild(i))}}function jR(s,e,i,a){const o=Ge(e,i),u=vs(s.visibleWrites,o);if(u!=null)return u;if(a.isCompleteForChild(i)){const h=Di(s.visibleWrites,o);return br(h,a.getNode().getImmediateChild(i))}else return null}function GR(s,e){return vs(s.visibleWrites,e)}function YR(s,e,i,a,o,u,h){let d;const g=Di(s.visibleWrites,e),m=vs(g,me());if(m!=null)d=m;else if(i!=null)d=br(g,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const E=[],T=h.getCompare(),b=u?d.getReverseIteratorFrom(a,h):d.getIteratorFrom(a,h);let U=b.getNext();for(;U&&E.length<o;)T(U,a)!==0&&E.push(U),U=b.getNext();return E}else return[]}function FR(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function ic(s,e,i,a){return HE(s.writeTree,s.treePath,e,i,a)}function md(s,e){return qR(s.writeTree,s.treePath,e)}function Py(s,e,i,a){return VR(s.writeTree,s.treePath,e,i,a)}function sc(s,e){return GR(s.writeTree,Ge(s.treePath,e))}function KR(s,e,i,a,o,u){return YR(s.writeTree,s.treePath,e,i,a,o,u)}function gd(s,e,i){return jR(s.writeTree,s.treePath,e,i)}function BE(s,e){return qE(Ge(s.treePath,e),s.writeTree)}function qE(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,a=e.childName;P(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),P(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const u=o.type;if(i==="child_added"&&u==="child_removed")this.changeMap.set(a,Ja(a,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&u==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&u==="child_changed")this.changeMap.set(a,$a(a,o.oldSnap));else if(i==="child_changed"&&u==="child_added")this.changeMap.set(a,Er(a,e.snapshotNode));else if(i==="child_changed"&&u==="child_changed")this.changeMap.set(a,Ja(a,e.snapshotNode,o.oldSnap));else throw Cr("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{getCompleteChild(e){return null}getChildAfterChild(e,i,a){return null}}const VE=new XR;class _d{constructor(e,i,a=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new Ui(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gd(this.writes_,e,a)}}getChildAfterChild(e,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),u=KR(this.writes_,o,i,1,a,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(s){return{filter:s}}function ZR(s,e){P(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function $R(s,e,i,a,o){const u=new QR;let h,d;if(i.type===hn.OVERWRITE){const m=i;m.source.fromUser?h=xh(s,e,m.path,m.snap,a,o,u):(P(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!fe(m.path),h=rc(s,e,m.path,m.snap,a,o,d,u))}else if(i.type===hn.MERGE){const m=i;m.source.fromUser?h=eI(s,e,m.path,m.children,a,o,u):(P(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),h=kh(s,e,m.path,m.children,a,o,d,u))}else if(i.type===hn.ACK_USER_WRITE){const m=i;m.revert?h=iI(s,e,m.path,a,o,u):h=tI(s,e,m.path,m.affectedTree,a,o,u)}else if(i.type===hn.LISTEN_COMPLETE)h=nI(s,e,i.path,a,u);else throw Cr("Unknown operation type: "+i.type);const g=u.getChanges();return JR(e,h,g),{viewCache:h,changes:g}}function JR(s,e,i){const a=e.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),u=nc(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(u)||!a.getNode().getPriority().equals(u.getPriority()))&&i.push(kE(nc(e)))}}function jE(s,e,i,a,o,u){const h=e.eventCache;if(sc(a,i)!=null)return e;{let d,g;if(fe(i))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=hs(e),E=m instanceof ee?m:ee.EMPTY_NODE,T=md(a,E);d=s.filter.updateFullNode(e.eventCache.getNode(),T,u)}else{const m=ic(a,hs(e));d=s.filter.updateFullNode(e.eventCache.getNode(),m,u)}else{const m=ae(i);if(m===".priority"){P(Li(i)===1,"Can't have a priority with additional path components");const E=h.getNode();g=e.serverCache.getNode();const T=Py(a,i,E,g);T!=null?d=s.filter.updatePriority(E,T):d=h.getNode()}else{const E=Ue(i);let T;if(h.isCompleteForChild(m)){g=e.serverCache.getNode();const b=Py(a,i,h.getNode(),g);b!=null?T=h.getNode().getImmediateChild(m).updateChild(E,b):T=h.getNode().getImmediateChild(m)}else T=gd(a,m,e.serverCache);T!=null?d=s.filter.updateChild(h.getNode(),m,T,E,o,u):d=h.getNode()}}return Va(e,d,h.isFullyInitialized()||fe(i),s.filter.filtersNodes())}}function rc(s,e,i,a,o,u,h,d){const g=e.serverCache;let m;const E=h?s.filter:s.filter.getIndexedFilter();if(fe(i))m=E.updateFullNode(g.getNode(),a,null);else if(E.filtersNodes()&&!g.isFiltered()){const U=g.getNode().updateChild(i,a);m=E.updateFullNode(g.getNode(),U,null)}else{const U=ae(i);if(!g.isCompleteForPath(i)&&Li(i)>1)return e;const H=Ue(i),F=g.getNode().getImmediateChild(U).updateChild(H,a);U===".priority"?m=E.updatePriority(g.getNode(),F):m=E.updateChild(g.getNode(),U,F,H,VE,null)}const T=UE(e,m,g.isFullyInitialized()||fe(i),E.filtersNodes()),b=new _d(o,T,u);return jE(s,T,i,o,b,d)}function xh(s,e,i,a,o,u,h){const d=e.eventCache;let g,m;const E=new _d(o,e,u);if(fe(i))m=s.filter.updateFullNode(e.eventCache.getNode(),a,h),g=Va(e,m,!0,s.filter.filtersNodes());else{const T=ae(i);if(T===".priority")m=s.filter.updatePriority(e.eventCache.getNode(),a),g=Va(e,m,d.isFullyInitialized(),d.isFiltered());else{const b=Ue(i),U=d.getNode().getImmediateChild(T);let H;if(fe(b))H=a;else{const $=E.getCompleteChild(T);$!=null?ad(b)===".priority"&&$.getChild(RE(b)).isEmpty()?H=$:H=$.updateChild(b,a):H=ee.EMPTY_NODE}if(U.equals(H))g=e;else{const $=s.filter.updateChild(d.getNode(),T,H,b,E,h);g=Va(e,$,d.isFullyInitialized(),s.filter.filtersNodes())}}}return g}function Hy(s,e){return s.eventCache.isCompleteForChild(e)}function eI(s,e,i,a,o,u,h){let d=e;return a.foreach((g,m)=>{const E=Ge(i,g);Hy(e,ae(E))&&(d=xh(s,d,E,m,o,u,h))}),a.foreach((g,m)=>{const E=Ge(i,g);Hy(e,ae(E))||(d=xh(s,d,E,m,o,u,h))}),d}function By(s,e,i){return i.foreach((a,o)=>{e=e.updateChild(a,o)}),e}function kh(s,e,i,a,o,u,h,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let g=e,m;fe(i)?m=a:m=new Le(null).setTree(i,a);const E=e.serverCache.getNode();return m.children.inorderTraversal((T,b)=>{if(E.hasChild(T)){const U=e.serverCache.getNode().getImmediateChild(T),H=By(s,U,b);g=rc(s,g,new Ae(T),H,o,u,h,d)}}),m.children.inorderTraversal((T,b)=>{const U=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!E.hasChild(T)&&!U){const H=e.serverCache.getNode().getImmediateChild(T),$=By(s,H,b);g=rc(s,g,new Ae(T),$,o,u,h,d)}}),g}function tI(s,e,i,a,o,u,h){if(sc(o,i)!=null)return e;const d=e.serverCache.isFiltered(),g=e.serverCache;if(a.value!=null){if(fe(i)&&g.isFullyInitialized()||g.isCompleteForPath(i))return rc(s,e,i,g.getNode().getChild(i),o,u,d,h);if(fe(i)){let m=new Le(null);return g.getNode().forEachChild(gr,(E,T)=>{m=m.set(new Ae(E),T)}),kh(s,e,i,m,o,u,d,h)}else return e}else{let m=new Le(null);return a.foreach((E,T)=>{const b=Ge(i,E);g.isCompleteForPath(b)&&(m=m.set(E,g.getNode().getChild(b)))}),kh(s,e,i,m,o,u,d,h)}}function nI(s,e,i,a,o){const u=e.serverCache,h=UE(e,u.getNode(),u.isFullyInitialized()||fe(i),u.isFiltered());return jE(s,h,i,a,VE,o)}function iI(s,e,i,a,o,u){let h;if(sc(a,i)!=null)return e;{const d=new _d(a,e,o),g=e.eventCache.getNode();let m;if(fe(i)||ae(i)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=ic(a,hs(e));else{const T=e.serverCache.getNode();P(T instanceof ee,"serverChildren would be complete if leaf node"),E=md(a,T)}E=E,m=s.filter.updateFullNode(g,E,u)}else{const E=ae(i);let T=gd(a,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=g.getImmediateChild(E)),T!=null?m=s.filter.updateChild(g,E,T,Ue(i),d,u):e.eventCache.getNode().hasChild(E)?m=s.filter.updateChild(g,E,ee.EMPTY_NODE,Ue(i),d,u):m=g,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=ic(a,hs(e)),h.isLeafNode()&&(m=s.filter.updateFullNode(m,h,u)))}return h=e.serverCache.isFullyInitialized()||sc(a,me())!=null,Va(e,m,h,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,i){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new ud(a.getIndex()),u=bR(a);this.processor_=WR(u);const h=i.serverCache,d=i.eventCache,g=o.updateFullNode(ee.EMPTY_NODE,h.getNode(),null),m=u.updateFullNode(ee.EMPTY_NODE,d.getNode(),null),E=new Ui(g,h.isFullyInitialized(),o.filtersNodes()),T=new Ui(m,d.isFullyInitialized(),u.filtersNodes());this.viewCache_=yc(T,E),this.eventGenerator_=new NR(this.query_)}get query(){return this.query_}}function rI(s){return s.viewCache_.serverCache.getNode()}function aI(s){return nc(s.viewCache_)}function lI(s,e){const i=hs(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!fe(e)&&!i.getImmediateChild(ae(e)).isEmpty())?i.getChild(e):null}function qy(s){return s.eventRegistrations_.length===0}function oI(s,e){s.eventRegistrations_.push(e)}function Vy(s,e,i){const a=[];if(i){P(e==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(u=>{const h=u.createCancelEvent(i,o);h&&a.push(h)})}if(e){let o=[];for(let u=0;u<s.eventRegistrations_.length;++u){const h=s.eventRegistrations_[u];if(!h.matches(e))o.push(h);else if(e.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(u+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function jy(s,e,i,a){e.type===hn.MERGE&&e.source.queryId!==null&&(P(hs(s.viewCache_),"We should always have a full cache before handling merges"),P(nc(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=$R(s.processor_,o,e,i,a);return ZR(s.processor_,u.viewCache),P(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,GE(s,u.changes,u.viewCache.eventCache.getNode(),null)}function cI(s,e){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ye,(u,h)=>{a.push(Er(u,h))}),i.isFullyInitialized()&&a.push(kE(i.getNode())),GE(s,a,i.getNode(),e)}function GE(s,e,i,a){const o=a?[a]:s.eventRegistrations_;return OR(s.eventGenerator_,e,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;class YE{constructor(){this.views=new Map}}function uI(s){P(!ac,"__referenceConstructor has already been defined"),ac=s}function fI(){return P(ac,"Reference.ts has not been loaded"),ac}function hI(s){return s.views.size===0}function yd(s,e,i,a){const o=e.source.queryId;if(o!==null){const u=s.views.get(o);return P(u!=null,"SyncTree gave us an op for an invalid query."),jy(u,e,i,a)}else{let u=[];for(const h of s.views.values())u=u.concat(jy(h,e,i,a));return u}}function FE(s,e,i,a,o){const u=e._queryIdentifier,h=s.views.get(u);if(!h){let d=ic(i,o?a:null),g=!1;d?g=!0:a instanceof ee?(d=md(i,a),g=!1):(d=ee.EMPTY_NODE,g=!1);const m=yc(new Ui(d,g,!1),new Ui(a,o,!1));return new sI(e,m)}return h}function dI(s,e,i,a,o,u){const h=FE(s,e,a,o,u);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,h),oI(h,i),cI(h,i)}function pI(s,e,i,a){const o=e._queryIdentifier,u=[];let h=[];const d=zi(s);if(o==="default")for(const[g,m]of s.views.entries())h=h.concat(Vy(m,i,a)),qy(m)&&(s.views.delete(g),m.query._queryParams.loadsAllData()||u.push(m.query));else{const g=s.views.get(o);g&&(h=h.concat(Vy(g,i,a)),qy(g)&&(s.views.delete(o),g.query._queryParams.loadsAllData()||u.push(g.query)))}return d&&!zi(s)&&u.push(new(fI())(e._repo,e._path)),{removed:u,events:h}}function KE(s){const e=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||e.push(i);return e}function xi(s,e){let i=null;for(const a of s.views.values())i=i||lI(a,e);return i}function QE(s,e){if(e._queryParams.loadsAllData())return Ec(s);{const a=e._queryIdentifier;return s.views.get(a)}}function XE(s,e){return QE(s,e)!=null}function zi(s){return Ec(s)!=null}function Ec(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;function mI(s){P(!lc,"__referenceConstructor has already been defined"),lc=s}function gI(){return P(lc,"Reference.ts has not been loaded"),lc}let _I=1;class Gy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=FR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WE(s,e,i,a,o){return kR(s.pendingWriteTree_,e,i,a,o),o?Or(s,new fs(hd(),e,i)):[]}function yI(s,e,i,a){LR(s.pendingWriteTree_,e,i,a);const o=Le.fromObject(i);return Or(s,new Sr(hd(),e,o))}function Ni(s,e,i=!1){const a=UR(s.pendingWriteTree_,e);if(zR(s.pendingWriteTree_,e)){let u=new Le(null);return a.snap!=null?u=u.set(me(),!0):gt(a.children,h=>{u=u.set(new Ae(h),!0)}),Or(s,new tc(a.path,u,i))}else return[]}function hl(s,e,i){return Or(s,new fs(dd(),e,i))}function vI(s,e,i){const a=Le.fromObject(i);return Or(s,new Sr(dd(),e,a))}function EI(s,e){return Or(s,new tl(dd(),e))}function SI(s,e,i){const a=Ed(s,i);if(a){const o=Sd(a),u=o.path,h=o.queryId,d=wt(u,e),g=new tl(pd(h),d);return bd(s,u,g)}else return[]}function oc(s,e,i,a,o=!1){const u=e._path,h=s.syncPointTree_.get(u);let d=[];if(h&&(e._queryIdentifier==="default"||XE(h,e))){const g=pI(h,e,i,a);hI(h)&&(s.syncPointTree_=s.syncPointTree_.remove(u));const m=g.removed;if(d=g.events,!o){const E=m.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=s.syncPointTree_.findOnPath(u,(b,U)=>zi(U));if(E&&!T){const b=s.syncPointTree_.subtree(u);if(!b.isEmpty()){const U=CI(b);for(let H=0;H<U.length;++H){const $=U[H],F=$.query,Oe=e0(s,$);s.listenProvider_.startListening(Ga(F),nl(s,F),Oe.hashFn,Oe.onComplete)}}}!T&&m.length>0&&!a&&(E?s.listenProvider_.stopListening(Ga(e),null):m.forEach(b=>{const U=s.queryToTagMap.get(Sc(b));s.listenProvider_.stopListening(Ga(b),U)}))}wI(s,m)}return d}function ZE(s,e,i,a){const o=Ed(s,a);if(o!=null){const u=Sd(o),h=u.path,d=u.queryId,g=wt(h,e),m=new fs(pd(d),g,i);return bd(s,h,m)}else return[]}function bI(s,e,i,a){const o=Ed(s,a);if(o){const u=Sd(o),h=u.path,d=u.queryId,g=wt(h,e),m=Le.fromObject(i),E=new Sr(pd(d),g,m);return bd(s,h,E)}else return[]}function Lh(s,e,i,a=!1){const o=e._path;let u=null,h=!1;s.syncPointTree_.foreachOnPath(o,(b,U)=>{const H=wt(b,o);u=u||xi(U,H),h=h||zi(U)});let d=s.syncPointTree_.get(o);d?(h=h||zi(d),u=u||xi(d,me())):(d=new YE,s.syncPointTree_=s.syncPointTree_.set(o,d));let g;u!=null?g=!0:(g=!1,u=ee.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((U,H)=>{const $=xi(H,me());$&&(u=u.updateImmediateChild(U,$))}));const m=XE(d,e);if(!m&&!e._queryParams.loadsAllData()){const b=Sc(e);P(!s.queryToTagMap.has(b),"View does not exist, but we have a tag");const U=AI();s.queryToTagMap.set(b,U),s.tagToQueryMap.set(U,b)}const E=vc(s.pendingWriteTree_,o);let T=dI(d,e,i,E,u,g);if(!m&&!h&&!a){const b=QE(d,e);T=T.concat(RI(s,e,b))}return T}function vd(s,e,i){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(e,(h,d)=>{const g=wt(h,e),m=xi(d,g);if(m)return m});return HE(o,e,u,i,!0)}function TI(s,e){const i=e._path;let a=null;s.syncPointTree_.foreachOnPath(i,(m,E)=>{const T=wt(m,i);a=a||xi(E,T)});let o=s.syncPointTree_.get(i);o?a=a||xi(o,me()):(o=new YE,s.syncPointTree_=s.syncPointTree_.set(i,o));const u=a!=null,h=u?new Ui(a,!0,!1):null,d=vc(s.pendingWriteTree_,e._path),g=FE(o,e,d,u?h.getNode():ee.EMPTY_NODE,u);return aI(g)}function Or(s,e){return $E(e,s.syncPointTree_,null,vc(s.pendingWriteTree_,me()))}function $E(s,e,i,a){if(fe(s.path))return JE(s,e,i,a);{const o=e.get(me());i==null&&o!=null&&(i=xi(o,me()));let u=[];const h=ae(s.path),d=s.operationForChild(h),g=e.children.get(h);if(g&&d){const m=i?i.getImmediateChild(h):null,E=BE(a,h);u=u.concat($E(d,g,m,E))}return o&&(u=u.concat(yd(o,s,a,i))),u}}function JE(s,e,i,a){const o=e.get(me());i==null&&o!=null&&(i=xi(o,me()));let u=[];return e.children.inorderTraversal((h,d)=>{const g=i?i.getImmediateChild(h):null,m=BE(a,h),E=s.operationForChild(h);E&&(u=u.concat(JE(E,d,g,m)))}),o&&(u=u.concat(yd(o,s,a,i))),u}function e0(s,e){const i=e.query,a=nl(s,i);return{hashFn:()=>(rI(e)||ee.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?SI(s,i._path,a):EI(s,i._path);{const u=EA(o,i);return oc(s,i,null,u)}}}}function nl(s,e){const i=Sc(e);return s.queryToTagMap.get(i)}function Sc(s){return s._path.toString()+"$"+s._queryIdentifier}function Ed(s,e){return s.tagToQueryMap.get(e)}function Sd(s){const e=s.indexOf("$");return P(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Ae(s.substr(0,e))}}function bd(s,e,i){const a=s.syncPointTree_.get(e);P(a,"Missing sync point for query tag that we're tracking");const o=vc(s.pendingWriteTree_,e);return yd(a,i,o,null)}function CI(s){return s.fold((e,i,a)=>{if(i&&zi(i))return[Ec(i)];{let o=[];return i&&(o=KE(i)),gt(a,(u,h)=>{o=o.concat(h)}),o}})}function Ga(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(gI())(s._repo,s._path):s}function wI(s,e){for(let i=0;i<e.length;++i){const a=e[i];if(!a._queryParams.loadsAllData()){const o=Sc(a),u=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(u)}}}function AI(){return _I++}function RI(s,e,i){const a=e._path,o=nl(s,e),u=e0(s,i),h=s.listenProvider_.startListening(Ga(e),o,u.hashFn,u.onComplete),d=s.syncPointTree_.subtree(a);if(o)P(!zi(d.value),"If we're adding a query, it shouldn't be shadowed");else{const g=d.fold((m,E,T)=>{if(!fe(m)&&E&&zi(E))return[Ec(E).query];{let b=[];return E&&(b=b.concat(KE(E).map(U=>U.query))),gt(T,(U,H)=>{b=b.concat(H)}),b}});for(let m=0;m<g.length;++m){const E=g[m];s.listenProvider_.stopListening(Ga(E),nl(s,E))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new Td(i)}node(){return this.node_}}class Cd{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=Ge(this.path_,e);return new Cd(this.syncTree_,i)}node(){return vd(this.syncTree_,this.path_)}}const II=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},Yy=function(s,e,i){if(!s||typeof s!="object")return s;if(P(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return NI(s[".sv"],e,i);if(typeof s[".sv"]=="object")return OI(s[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},NI=function(s,e,i){switch(s){case"timestamp":return i.timestamp;default:P(!1,"Unexpected server value: "+s)}},OI=function(s,e,i){s.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&P(!1,"Unexpected increment value: "+a);const o=e.node();if(P(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const h=o.getValue();return typeof h!="number"?a:h+a},t0=function(s,e,i,a){return wd(e,new Cd(i,s),a)},n0=function(s,e,i){return wd(s,new Td(e),i)};function wd(s,e,i){const a=s.getPriority().val(),o=Yy(a,e.getImmediateChild(".priority"),i);let u;if(s.isLeafNode()){const h=s,d=Yy(h.getValue(),e,i);return d!==h.getValue()||o!==h.getPriority().val()?new ut(d,nt(o)):s}else{const h=s;return u=h,o!==h.getPriority().val()&&(u=u.updatePriority(new ut(o))),h.forEachChild(Ye,(d,g)=>{const m=wd(g,e.getImmediateChild(d),i);m!==g&&(u=u.updateImmediateChild(d,m))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e="",i=null,a={children:{},childCount:0}){this.name=e,this.parent=i,this.node=a}}function Rd(s,e){let i=e instanceof Ae?e:new Ae(e),a=s,o=ae(i);for(;o!==null;){const u=yr(a.node.children,o)||{children:{},childCount:0};a=new Ad(o,a,u),i=Ue(i),o=ae(i)}return a}function Mr(s){return s.node.value}function i0(s,e){s.node.value=e,Uh(s)}function s0(s){return s.node.childCount>0}function MI(s){return Mr(s)===void 0&&!s0(s)}function bc(s,e){gt(s.node.children,(i,a)=>{e(new Ad(i,s,a))})}function r0(s,e,i,a){i&&e(s),bc(s,o=>{r0(o,e,!0)})}function DI(s,e,i){let a=s.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function dl(s){return new Ae(s.parent===null?s.name:dl(s.parent)+"/"+s.name)}function Uh(s){s.parent!==null&&xI(s.parent,s.name,s)}function xI(s,e,i){const a=MI(i),o=In(s.node.children,e);a&&o?(delete s.node.children[e],s.node.childCount--,Uh(s)):!a&&!o&&(s.node.children[e]=i.node,s.node.childCount++,Uh(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=/[\[\].#$\/\u0000-\u001F\u007F]/,LI=/[\[\].#$\u0000-\u001F\u007F]/,ch=10*1024*1024,Id=function(s){return typeof s=="string"&&s.length!==0&&!kI.test(s)},a0=function(s){return typeof s=="string"&&s.length!==0&&!LI.test(s)},UI=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),a0(s)},zI=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!td(s)||s&&typeof s=="object"&&In(s,".sv")},PI=function(s,e,i,a){Tc(fc(s,"value"),e,i)},Tc=function(s,e,i){const a=i instanceof Ae?new eR(i,s):i;if(e===void 0)throw new Error(s+"contains undefined "+rs(a));if(typeof e=="function")throw new Error(s+"contains a function "+rs(a)+" with contents = "+e.toString());if(td(e))throw new Error(s+"contains "+e.toString()+" "+rs(a));if(typeof e=="string"&&e.length>ch/3&&hc(e)>ch)throw new Error(s+"contains a string greater than "+ch+" utf8 bytes "+rs(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(gt(e,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!Id(h)))throw new Error(s+" contains an invalid key ("+h+") "+rs(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tR(a,h),Tc(s,d,a),nR(a)}),o&&u)throw new Error(s+' contains ".value" child '+rs(a)+" in addition to actual children.")}},HI=function(s,e){let i,a;for(i=0;i<e.length;i++){a=e[i];const u=Za(a);for(let h=0;h<u.length;h++)if(!(u[h]===".priority"&&h===u.length-1)){if(!Id(u[h]))throw new Error(s+"contains an invalid key ("+u[h]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JA);let o=null;for(i=0;i<e.length;i++){if(a=e[i],o!==null&&nn(o,a))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+a.toString());o=a}},BI=function(s,e,i,a){const o=fc(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const u=[];gt(e,(h,d)=>{const g=new Ae(h);if(Tc(o,d,Ge(i,g)),ad(g)===".priority"&&!zI(d))throw new Error(o+"contains an invalid value for '"+g.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(g)}),HI(o,u)},l0=function(s,e,i,a){if(!a0(i))throw new Error(fc(s,e)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qI=function(s,e,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),l0(s,e,i)},VI=function(s,e){if(ae(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},jI=function(s,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Id(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!UI(i))throw new Error(fc(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cc(s,e){let i=null;for(let a=0;a<e.length;a++){const o=e[a],u=o.getPath();i!==null&&!ld(u,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:u}),i.events.push(o)}i&&s.eventLists_.push(i)}function o0(s,e,i){Cc(s,i),c0(s,a=>ld(a,e))}function rn(s,e,i){Cc(s,i),c0(s,a=>nn(a,e)||nn(e,a))}function c0(s,e){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const u=o.path;e(u)?(YI(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function YI(s){for(let e=0;e<s.events.length;e++){const i=s.events[e];if(i!==null){s.events[e]=null;const a=i.getEventRunner();Ba&&mt("event: "+i.toString()),Nr(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="repo_interrupt",KI=25;class QI{constructor(e,i,a,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new Ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XI(s,e,i){if(s.stats_=sd(s.repoInfo_),s.forceRestClient_||CA())s.server_=new Jo(s.repoInfo_,(a,o,u,h)=>{Fy(s,a,o,u,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>Ky(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new Xn(s.repoInfo_,e,(a,o,u,h)=>{Fy(s,a,o,u,h)},a=>{Ky(s,a)},a=>{ZI(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=NA(s.repoInfo_,()=>new IR(s.stats_,s.server_)),s.infoData_=new TR,s.infoSyncTree_=new Gy({startListening:(a,o,u,h)=>{let d=[];const g=s.infoData_.getNode(a._path);return g.isEmpty()||(d=hl(s.infoSyncTree_,a._path,g),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),Nd(s,"connected",!1),s.serverSyncTree_=new Gy({startListening:(a,o,u,h)=>(s.server_.listen(a,u,o,(d,g)=>{const m=h(d,g);rn(s.eventQueue_,a._path,m)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function WI(s){const i=s.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function wc(s){return II({timestamp:WI(s)})}function Fy(s,e,i,a,o){s.dataUpdateCount++;const u=new Ae(e);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,i):i;let h=[];if(o)if(a){const g=Vo(i,m=>nt(m));h=bI(s.serverSyncTree_,u,g,o)}else{const g=nt(i);h=ZE(s.serverSyncTree_,u,g,o)}else if(a){const g=Vo(i,m=>nt(m));h=vI(s.serverSyncTree_,u,g)}else{const g=nt(i);h=hl(s.serverSyncTree_,u,g)}let d=u;h.length>0&&(d=Tr(s,u)),rn(s.eventQueue_,d,h)}function Ky(s,e){Nd(s,"connected",e),e===!1&&tN(s)}function ZI(s,e){gt(e,(i,a)=>{Nd(s,i,a)})}function Nd(s,e,i){const a=new Ae("/.info/"+e),o=nt(i);s.infoData_.updateSnapshot(a,o);const u=hl(s.infoSyncTree_,a,o);rn(s.eventQueue_,a,u)}function Od(s){return s.nextWriteId_++}function $I(s,e,i){const a=TI(s.serverSyncTree_,e);return a!=null?Promise.resolve(a):s.server_.get(e).then(o=>{const u=nt(o).withIndex(e._queryParams.getIndex());Lh(s.serverSyncTree_,e,i,!0);let h;if(e._queryParams.loadsAllData())h=hl(s.serverSyncTree_,e._path,u);else{const d=nl(s.serverSyncTree_,e);h=ZE(s.serverSyncTree_,e._path,u,d)}return rn(s.eventQueue_,e._path,h),oc(s.serverSyncTree_,e,i,null,!0),u},o=>(pl(s,"get for query "+it(e)+" failed: "+o),Promise.reject(new Error(o))))}function JI(s,e,i,a,o){pl(s,"set",{path:e.toString(),value:i,priority:a});const u=wc(s),h=nt(i,a),d=vd(s.serverSyncTree_,e),g=n0(h,d,u),m=Od(s),E=WE(s.serverSyncTree_,e,g,m,!0);Cc(s.eventQueue_,E),s.server_.put(e.toString(),h.val(!0),(b,U)=>{const H=b==="ok";H||At("set at "+e+" failed: "+b);const $=Ni(s.serverSyncTree_,m,!H);rn(s.eventQueue_,e,$),zh(s,o,b,U)});const T=Dd(s,e);Tr(s,T),rn(s.eventQueue_,T,[])}function eN(s,e,i,a){pl(s,"update",{path:e.toString(),value:i});let o=!0;const u=wc(s),h={};if(gt(i,(d,g)=>{o=!1,h[d]=t0(Ge(e,d),nt(g),s.serverSyncTree_,u)}),o)mt("update() called with empty data.  Don't do anything."),zh(s,a,"ok",void 0);else{const d=Od(s),g=yI(s.serverSyncTree_,e,h,d);Cc(s.eventQueue_,g),s.server_.merge(e.toString(),i,(m,E)=>{const T=m==="ok";T||At("update at "+e+" failed: "+m);const b=Ni(s.serverSyncTree_,d,!T),U=b.length>0?Tr(s,e):e;rn(s.eventQueue_,U,b),zh(s,a,m,E)}),gt(i,m=>{const E=Dd(s,Ge(e,m));Tr(s,E)}),rn(s.eventQueue_,e,[])}}function tN(s){pl(s,"onDisconnectEvents");const e=wc(s),i=ec();Nh(s.onDisconnect_,me(),(o,u)=>{const h=t0(o,u,s.serverSyncTree_,e);LE(i,o,h)});let a=[];Nh(i,me(),(o,u)=>{a=a.concat(hl(s.serverSyncTree_,o,u));const h=Dd(s,o);Tr(s,h)}),s.onDisconnect_=ec(),rn(s.eventQueue_,me(),a)}function nN(s,e,i){let a;ae(e._path)===".info"?a=Lh(s.infoSyncTree_,e,i):a=Lh(s.serverSyncTree_,e,i),o0(s.eventQueue_,e._path,a)}function iN(s,e,i){let a;ae(e._path)===".info"?a=oc(s.infoSyncTree_,e,i):a=oc(s.serverSyncTree_,e,i),o0(s.eventQueue_,e._path,a)}function sN(s){s.persistentConnection_&&s.persistentConnection_.interrupt(FI)}function pl(s,...e){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),mt(i,...e)}function zh(s,e,i,a){e&&Nr(()=>{if(i==="ok")e(null);else{const o=(i||"error").toUpperCase();let u=o;a&&(u+=": "+a);const h=new Error(u);h.code=o,e(h)}})}function u0(s,e,i){return vd(s.serverSyncTree_,e,i)||ee.EMPTY_NODE}function Md(s,e=s.transactionQueueTree_){if(e||Ac(s,e),Mr(e)){const i=h0(s,e);P(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&rN(s,dl(e),i)}else s0(e)&&bc(e,i=>{Md(s,i)})}function rN(s,e,i){const a=i.map(m=>m.currentWriteId),o=u0(s,e,a);let u=o;const h=o.hash();for(let m=0;m<i.length;m++){const E=i[m];P(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=wt(e,E.path);u=u.updateChild(T,E.currentOutputSnapshotRaw)}const d=u.val(!0),g=e;s.server_.put(g.toString(),d,m=>{pl(s,"transaction put response",{path:g.toString(),status:m});let E=[];if(m==="ok"){const T=[];for(let b=0;b<i.length;b++)i[b].status=2,E=E.concat(Ni(s.serverSyncTree_,i[b].currentWriteId)),i[b].onComplete&&T.push(()=>i[b].onComplete(null,!0,i[b].currentOutputSnapshotResolved)),i[b].unwatcher();Ac(s,Rd(s.transactionQueueTree_,e)),Md(s,s.transactionQueueTree_),rn(s.eventQueue_,e,E);for(let b=0;b<T.length;b++)Nr(T[b])}else{if(m==="datastale")for(let T=0;T<i.length;T++)i[T].status===3?i[T].status=4:i[T].status=0;else{At("transaction at "+g.toString()+" failed: "+m);for(let T=0;T<i.length;T++)i[T].status=4,i[T].abortReason=m}Tr(s,e)}},h)}function Tr(s,e){const i=f0(s,e),a=dl(i),o=h0(s,i);return aN(s,o,a),a}function aN(s,e,i){if(e.length===0)return;const a=[];let o=[];const h=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const g=e[d],m=wt(i,g.path);let E=!1,T;if(P(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)E=!0,T=g.abortReason,o=o.concat(Ni(s.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=KI)E=!0,T="maxretry",o=o.concat(Ni(s.serverSyncTree_,g.currentWriteId,!0));else{const b=u0(s,g.path,h);g.currentInputSnapshot=b;const U=e[d].update(b.val());if(U!==void 0){Tc("transaction failed: Data returned ",U,g.path);let H=nt(U);typeof U=="object"&&U!=null&&In(U,".priority")||(H=H.updatePriority(b.getPriority()));const F=g.currentWriteId,Oe=wc(s),ze=n0(H,b,Oe);g.currentOutputSnapshotRaw=H,g.currentOutputSnapshotResolved=ze,g.currentWriteId=Od(s),h.splice(h.indexOf(F),1),o=o.concat(WE(s.serverSyncTree_,g.path,ze,g.currentWriteId,g.applyLocally)),o=o.concat(Ni(s.serverSyncTree_,F,!0))}else E=!0,T="nodata",o=o.concat(Ni(s.serverSyncTree_,g.currentWriteId,!0))}rn(s.eventQueue_,i,o),o=[],E&&(e[d].status=2,function(b){setTimeout(b,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?a.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):a.push(()=>e[d].onComplete(new Error(T),!1,null))))}Ac(s,s.transactionQueueTree_);for(let d=0;d<a.length;d++)Nr(a[d]);Md(s,s.transactionQueueTree_)}function f0(s,e){let i,a=s.transactionQueueTree_;for(i=ae(e);i!==null&&Mr(a)===void 0;)a=Rd(a,i),e=Ue(e),i=ae(e);return a}function h0(s,e){const i=[];return d0(s,e,i),i.sort((a,o)=>a.order-o.order),i}function d0(s,e,i){const a=Mr(e);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);bc(e,o=>{d0(s,o,i)})}function Ac(s,e){const i=Mr(e);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,i0(e,i.length>0?i:void 0)}bc(e,a=>{Ac(s,a)})}function Dd(s,e){const i=dl(f0(s,e)),a=Rd(s.transactionQueueTree_,e);return DI(a,o=>{uh(s,o)}),uh(s,a),r0(a,o=>{uh(s,o)}),i}function uh(s,e){const i=Mr(e);if(i){const a=[];let o=[],u=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(P(u===h-1,"All SENT items should be at beginning of queue."),u=h,i[h].status=3,i[h].abortReason="set"):(P(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Ni(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&a.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?i0(e,void 0):i.length=u+1,rn(s.eventQueue_,dl(e),o);for(let h=0;h<a.length;h++)Nr(a[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(s){let e="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function oN(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):At(`Invalid query segment '${i}' in query '${s}'`)}return e}const Qy=function(s,e){const i=cN(s),a=i.namespace;i.domain==="firebase.com"&&$n(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||mA();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new yE(i.host,i.secure,a,o,e,"",a!==i.subdomain),path:new Ae(i.pathString)}},cN=function(s){let e="",i="",a="",o="",u="",h=!0,d="https",g=443;if(typeof s=="string"){let m=s.indexOf("//");m>=0&&(d=s.substring(0,m-1),s=s.substring(m+2));let E=s.indexOf("/");E===-1&&(E=s.length);let T=s.indexOf("?");T===-1&&(T=s.length),e=s.substring(0,Math.min(E,T)),E<T&&(o=lN(s.substring(E,T)));const b=oN(s.substring(Math.min(s.length,T)));m=e.indexOf(":"),m>=0?(h=d==="https"||d==="wss",g=parseInt(e.substring(m+1),10)):m=e.length;const U=e.slice(0,m);if(U.toLowerCase()==="localhost")i="localhost";else if(U.split(".").length<=2)i=U;else{const H=e.indexOf(".");a=e.substring(0,H).toLowerCase(),i=e.substring(H+1),u=a}"ns"in b&&(u=b.ns)}return{host:e,port:g,domain:i,subdomain:a,secure:h,scheme:d,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,i,a,o){this.eventType=e,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class fN{constructor(e,i,a){this.eventRegistration=e,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,i){this.snapshotCallback=e,this.cancelCallback=i}onValue(e,i){this.snapshotCallback.call(null,e,i)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,i,a,o){this._repo=e,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return fe(this._path)?null:ad(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=ky(this._queryParams),i=nd(e);return i==="{}"?"default":i}get _queryObject(){return ky(this._queryParams)}isEqual(e){if(e=_t(e),!(e instanceof xd))return!1;const i=this._repo===e._repo,a=ld(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+$A(this._path)}}class Jn extends xd{constructor(e,i){super(e,i,new fd,!1)}get parent(){const e=RE(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class il{constructor(e,i,a){this._node=e,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const i=new Ae(e),a=Ph(this.ref,e);return new il(this._node.getChild(i),a,Ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>e(new il(o,Ph(this.ref,a),Ye)))}hasChild(e){const i=new Ae(e);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function or(s,e){return s=_t(s),s._checkNotDeleted("ref"),e!==void 0?Ph(s._root,e):s._root}function Ph(s,e){return s=_t(s),ae(s._path)===null?qI("child","path",e):l0("child","path",e),new Jn(s._repo,Ge(s._path,e))}function m0(s,e){s=_t(s),VI("set",s._path),PI("set",e,s._path);const i=new sl;return JI(s._repo,s._path,e,null,i.wrapCallback(()=>{})),i.promise}function hN(s,e){BI("update",e,s._path);const i=new sl;return eN(s._repo,s._path,e,i.wrapCallback(()=>{})),i.promise}function Xy(s){s=_t(s);const e=new p0(()=>{}),i=new Rc(e);return $I(s._repo,s,i).then(a=>new il(a,new Jn(s._repo,s._path),s._queryParams.getIndex()))}class Rc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,i){const a=i._queryParams.getIndex();return new uN("value",this,new il(e.snapshotNode,new Jn(i._repo,i._path),a))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,i){return this.callbackContext.hasCancelCallback?new fN(this,e,i):null}matches(e){return e instanceof Rc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dN(s,e,i,a,o){const u=new p0(i,void 0),h=new Rc(u);return nN(s._repo,s,h),()=>iN(s._repo,s,h)}function fh(s,e,i,a){return dN(s,"value",e)}uI(Jn);mI(Jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="FIREBASE_DATABASE_EMULATOR_HOST",Hh={};let mN=!1;function gN(s,e,i,a){const o=e.lastIndexOf(":"),u=e.substring(0,o),h=wr(u);s.repoInfo_=new yE(e,h,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function _N(s,e,i,a,o){let u=a||s.options.databaseURL;u===void 0&&(s.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=Qy(u,o),d=h.repoInfo,g;typeof process<"u"&&gy&&(g=gy[pN]),g?(u=`http://${g}?ns=${d.namespace}`,h=Qy(u,o),d=h.repoInfo):h.repoInfo.secure;const m=new AA(s.name,s.options,e);jI("Invalid Firebase Database URL",h),fe(h.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const E=vN(d,s,m,new wA(s,i));return new EN(E,s)}function yN(s,e){const i=Hh[e];(!i||i[s.key]!==s)&&$n(`Database ${e}(${s.repoInfo_}) has already been deleted.`),sN(s),delete i[s.key]}function vN(s,e,i,a){let o=Hh[e.name];o||(o={},Hh[e.name]=o);let u=o[s.toURLString()];return u&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new QI(s,mN,i,a),o[s.toURLString()]=u,u}class EN{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function SN(s=Fh(),e){const i=gs(s,"database").getImmediate({identifier:e});if(!i._instanceStarted){const a=_T("database");a&&bN(i,...a)}return i}function bN(s,e,i,a={}){s=_t(s),s._checkNotDeleted("useEmulator");const o=`${e}:${i}`,u=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&ki(a,u.repoInfo_.emulatorOptions))return;$n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(u.repoInfo_.nodeAdmin)a.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Ho(Ho.OWNER);else if(a.mockUserToken){const d=typeof a.mockUserToken=="string"?a.mockUserToken:yT(a.mockUserToken,s.app.options.projectId);h=new Ho(d)}wr(e)&&(fv(e),hv("Database",!0)),gN(u,o,a,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(s){cA(Rr),An(new pn("database",(e,{instanceIdentifier:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return _N(a,o,u,i)},"PUBLIC").setMultipleInstances(!0)),sn(_y,yy,s),sn(_y,yy,"esm2020")}Xn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Xn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};TN();const g0="@firebase/installations",kd="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=1e4,y0=`w:${kd}`,v0="FIS_v2",CN="https://firebaseinstallations.googleapis.com/v1",wN=3600*1e3,AN="installations",RN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ds=new ms(AN,RN,IN);function E0(s){return s instanceof Rn&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0({projectId:s}){return`${CN}/projects/${s}/installations`}function b0(s){return{token:s.token,requestStatus:2,expiresIn:ON(s.expiresIn),creationTime:Date.now()}}async function T0(s,e){const a=(await e.json()).error;return ds.create("request-failed",{requestName:s,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function C0({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function NN(s,{refreshToken:e}){const i=C0(s);return i.append("Authorization",MN(e)),i}async function w0(s){const e=await s();return e.status>=500&&e.status<600?s():e}function ON(s){return Number(s.replace("s","000"))}function MN(s){return`${v0} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN({appConfig:s,heartbeatServiceProvider:e},{fid:i}){const a=S0(s),o=C0(s),u=e.getImmediate({optional:!0});if(u){const m=await u.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const h={fid:i,authVersion:v0,appId:s.appId,sdkVersion:y0},d={method:"POST",headers:o,body:JSON.stringify(h)},g=await w0(()=>fetch(a,d));if(g.ok){const m=await g.json();return{fid:m.fid||i,registrationStatus:2,refreshToken:m.refreshToken,authToken:b0(m.authToken)}}else throw await T0("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^[cdef][\w-]{21}$/,Bh="";function LN(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=UN(s);return kN.test(i)?i:Bh}catch{return Bh}}function UN(s){return xN(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Map;function I0(s,e){const i=Ic(s);N0(i,e),zN(i,e)}function N0(s,e){const i=R0.get(s);if(i)for(const a of i)a(e)}function zN(s,e){const i=PN();i&&i.postMessage({key:s,fid:e}),HN()}let ls=null;function PN(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=s=>{N0(s.data.key,s.data.fid)}),ls}function HN(){R0.size===0&&ls&&(ls.close(),ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="firebase-installations-database",qN=1,ps="firebase-installations-store";let hh=null;function Ld(){return hh||(hh=Ev(BN,qN,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(ps)}}})),hh}async function cc(s,e){const i=Ic(s),o=(await Ld()).transaction(ps,"readwrite"),u=o.objectStore(ps),h=await u.get(i);return await u.put(e,i),await o.done,(!h||h.fid!==e.fid)&&I0(s,e.fid),e}async function O0(s){const e=Ic(s),a=(await Ld()).transaction(ps,"readwrite");await a.objectStore(ps).delete(e),await a.done}async function Nc(s,e){const i=Ic(s),o=(await Ld()).transaction(ps,"readwrite"),u=o.objectStore(ps),h=await u.get(i),d=e(h);return d===void 0?await u.delete(i):await u.put(d,i),await o.done,d&&(!h||h.fid!==d.fid)&&I0(s,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(s){let e;const i=await Nc(s.appConfig,a=>{const o=VN(a),u=jN(s,o);return e=u.registrationPromise,u.installationEntry});return i.fid===Bh?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function VN(s){const e=s||{fid:LN(),registrationStatus:0};return M0(e)}function jN(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ds.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=GN(s,i);return{installationEntry:i,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YN(s)}:{installationEntry:e}}async function GN(s,e){try{const i=await DN(s,e);return cc(s.appConfig,i)}catch(i){throw E0(i)&&i.customData.serverCode===409?await O0(s.appConfig):await cc(s.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function YN(s){let e=await Wy(s.appConfig);for(;e.registrationStatus===1;)await A0(100),e=await Wy(s.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await Ud(s);return a||i}return e}function Wy(s){return Nc(s,e=>{if(!e)throw ds.create("installation-not-found");return M0(e)})}function M0(s){return FN(s)?{fid:s.fid,registrationStatus:0}:s}function FN(s){return s.registrationStatus===1&&s.registrationTime+_0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN({appConfig:s,heartbeatServiceProvider:e},i){const a=QN(s,i),o=NN(s,i),u=e.getImmediate({optional:!0});if(u){const m=await u.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const h={installation:{sdkVersion:y0,appId:s.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},g=await w0(()=>fetch(a,d));if(g.ok){const m=await g.json();return b0(m)}else throw await T0("Generate Auth Token",g)}function QN(s,{fid:e}){return`${S0(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(s,e=!1){let i;const a=await Nc(s.appConfig,u=>{if(!D0(u))throw ds.create("not-registered");const h=u.authToken;if(!e&&ZN(h))return u;if(h.requestStatus===1)return i=XN(s,e),u;{if(!navigator.onLine)throw ds.create("app-offline");const d=JN(u);return i=WN(s,d),d}});return i?await i:a.authToken}async function XN(s,e){let i=await Zy(s.appConfig);for(;i.authToken.requestStatus===1;)await A0(100),i=await Zy(s.appConfig);const a=i.authToken;return a.requestStatus===0?zd(s,e):a}function Zy(s){return Nc(s,e=>{if(!D0(e))throw ds.create("not-registered");const i=e.authToken;return eO(i)?{...e,authToken:{requestStatus:0}}:e})}async function WN(s,e){try{const i=await KN(s,e),a={...e,authToken:i};return await cc(s.appConfig,a),i}catch(i){if(E0(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await O0(s.appConfig);else{const a={...e,authToken:{requestStatus:0}};await cc(s.appConfig,a)}throw i}}function D0(s){return s!==void 0&&s.registrationStatus===2}function ZN(s){return s.requestStatus===2&&!$N(s)}function $N(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+wN}function JN(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function eO(s){return s.requestStatus===1&&s.requestTime+_0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(s){const e=s,{installationEntry:i,registrationPromise:a}=await Ud(e);return a?a.catch(console.error):zd(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(s,e=!1){const i=s;return await iO(i),(await zd(i,e)).token}async function iO(s){const{registrationPromise:e}=await Ud(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(s){if(!s||!s.options)throw dh("App Configuration");if(!s.name)throw dh("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!s.options[i])throw dh(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function dh(s){return ds.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="installations",rO="installations-internal",aO=s=>{const e=s.getProvider("app").getImmediate(),i=sO(e),a=gs(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},lO=s=>{const e=s.getProvider("app").getImmediate(),i=gs(e,x0).getImmediate();return{getId:()=>tO(i),getToken:o=>nO(i,o)}};function oO(){An(new pn(x0,aO,"PUBLIC")),An(new pn(rO,lO,"PRIVATE"))}oO();sn(g0,kd);sn(g0,kd,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="analytics",cO="firebase_id",uO="origin",fO=60*1e3,hO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new dc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Yt=new ms("analytics","Analytics",dO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(s){if(!s.startsWith(Pd)){const e=Yt.create("invalid-gtag-resource",{gtagURL:s});return kt.warn(e.message),""}return s}function k0(s){return Promise.all(s.map(e=>e.catch(i=>i)))}function mO(s,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,e)),i}function gO(s,e){const i=mO("firebase-js-sdk-policy",{createScriptURL:pO}),a=document.createElement("script"),o=`${Pd}?l=${s}&id=${e}`;a.src=i?i?.createScriptURL(o):o,a.async=!0,document.head.appendChild(a)}function _O(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function yO(s,e,i,a,o,u){const h=a[o];try{if(h)await e[h];else{const g=(await k0(i)).find(m=>m.measurementId===o);g&&await e[g.appId]}}catch(d){kt.error(d)}s("config",o,u)}async function vO(s,e,i,a,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await k0(i);for(const g of h){const m=d.find(T=>T.measurementId===g),E=m&&e[m.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),s("event",a,o||{})}catch(u){kt.error(u)}}function EO(s,e,i,a){async function o(u,...h){try{if(u==="event"){const[d,g]=h;await vO(s,e,i,d,g)}else if(u==="config"){const[d,g]=h;await yO(s,e,i,a,d,g)}else if(u==="consent"){const[d,g]=h;s("consent",d,g)}else if(u==="get"){const[d,g,m]=h;s("get",d,g,m)}else if(u==="set"){const[d]=h;s("set",d)}else s(u,...h)}catch(d){kt.error(d)}}return o}function SO(s,e,i,a,o){let u=function(...h){window[a].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=EO(u,s,e,i),{gtagCore:u,wrappedGtag:window[o]}}function bO(s){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(Pd)&&i.src.includes(s))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=30,CO=1e3;class wO{constructor(e={},i=CO){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const L0=new wO;function AO(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function RO(s){const{appId:e,apiKey:i}=s,a={method:"GET",headers:AO(i)},o=hO.replace("{app-id}",e),u=await fetch(o,a);if(u.status!==200&&u.status!==304){let h="";try{const d=await u.json();d.error?.message&&(h=d.error.message)}catch{}throw Yt.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function IO(s,e=L0,i){const{appId:a,apiKey:o,measurementId:u}=s.options;if(!a)throw Yt.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:a};throw Yt.create("no-api-key")}const h=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new MO;return setTimeout(async()=>{d.abort()},fO),U0({appId:a,apiKey:o,measurementId:u},h,d,e)}async function U0(s,{throttleEndTimeMillis:e,backoffCount:i},a,o=L0){const{appId:u,measurementId:h}=s;try{await NO(a,e)}catch(d){if(h)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:u,measurementId:h};throw d}try{const d=await RO(s);return o.deleteThrottleMetadata(u),d}catch(d){const g=d;if(!OO(g)){if(o.deleteThrottleMetadata(u),h)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:u,measurementId:h};throw d}const m=Number(g?.customData?.httpStatus)===503?V_(i,o.intervalMillis,TO):V_(i,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+m,backoffCount:i+1};return o.setThrottleMetadata(u,E),kt.debug(`Calling attemptFetch again in ${m} millis`),U0(s,E,a,o)}}function NO(s,e){return new Promise((i,a)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(i,o);s.addEventListener(()=>{clearTimeout(u),a(Yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OO(s){if(!(s instanceof Rn)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class MO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DO(s,e,i,a,o){if(o&&o.global){s("event",i,a);return}else{const u=await e,h={...a,send_to:u};s("event",i,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(){if(mv())try{await gv()}catch(s){return kt.warn(Yt.create("indexeddb-unavailable",{errorInfo:s?.toString()}).message),!1}else return kt.warn(Yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kO(s,e,i,a,o,u,h){const d=IO(s);d.then(b=>{i[b.measurementId]=b.appId,s.options.measurementId&&b.measurementId!==s.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>kt.error(b)),e.push(d);const g=xO().then(b=>{if(b)return a.getId()}),[m,E]=await Promise.all([d,g]);bO(u)||gO(u,m.measurementId),o("js",new Date);const T=h?.config??{};return T[uO]="firebase",T.update=!0,E!=null&&(T[cO]=E),o("config",m.measurementId,T),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.app=e}_delete(){return delete Ya[this.app.options.appId],Promise.resolve()}}let Ya={},$y=[];const Jy={};let ph="dataLayer",UO="gtag",ev,z0,tv=!1;function zO(){const s=[];if(dv()&&s.push("This is a browser extension environment."),CT()||s.push("Cookies are not available."),s.length>0){const e=s.map((a,o)=>`(${o+1}) ${a}`).join(" "),i=Yt.create("invalid-analytics-context",{errorInfo:e});kt.warn(i.message)}}function PO(s,e,i){zO();const a=s.options.appId;if(!a)throw Yt.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Yt.create("no-api-key");if(Ya[a]!=null)throw Yt.create("already-exists",{id:a});if(!tv){_O(ph);const{wrappedGtag:u,gtagCore:h}=SO(Ya,$y,Jy,ph,UO);z0=u,ev=h,tv=!0}return Ya[a]=kO(s,$y,Jy,e,ev,ph,i),new LO(s)}function HO(s=Fh()){s=_t(s);const e=gs(s,uc);return e.isInitialized()?e.getImmediate():BO(s)}function BO(s,e={}){const i=gs(s,uc);if(i.isInitialized()){const o=i.getImmediate();if(ki(e,i.getOptions()))return o;throw Yt.create("already-initialized")}return i.initialize({options:e})}function qO(s,e,i,a){s=_t(s),DO(z0,Ya[s.app.options.appId],e,i,a).catch(o=>kt.error(o))}const nv="@firebase/analytics",iv="0.10.18";function VO(){An(new pn(uc,(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return PO(a,o,i)},"PUBLIC")),An(new pn("analytics-internal",s,"PRIVATE")),sn(nv,iv),sn(nv,iv,"esm2020");function s(e){try{const i=e.getProvider(uc).getImmediate();return{logEvent:(a,o,u)=>qO(i,a,o,u)}}catch(i){throw Yt.create("interop-component-reg-failed",{reason:i})}}}VO();const jO={apiKey:"AIzaSyDJDBihV5rs9YeX7RlyjLFeLrKdsPbza2w",authDomain:"infinity-button-3f299.firebaseapp.com",databaseURL:"https://infinity-button-3f299-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"infinity-button-3f299",storageBucket:"infinity-button-3f299.firebasestorage.app",messagingSenderId:"261516546949",appId:"1:261516546949:web:d975df1a44a68c60246aec"},Hd=Sv(jO),_r=lA(Hd),cr=SN(Hd);HO(Hd);const GO="/The-Infinity-Button/assets/button3-CKyku2_y.png";function YO(){const[s,e]=Xe.useState(!0),[i,a]=Xe.useState(""),[o,u]=Xe.useState(""),[h,d]=Xe.useState(""),g=async m=>{m.preventDefault();try{if(s)await FC(_r,o,h);else{const E=await YC(_r,o,h);await m0(or(cr,"users/"+E.user.uid),{username:i,clicks:0})}}catch(E){alert(E.message)}};return Q.jsxs("div",{style:{display:"flex",alignItems:"stretch",justifyContent:"center",minHeight:"100vh",background:"none"},children:[Q.jsxs("div",{className:"loginform",style:{flex:"1 1 380px",maxWidth:420,zIndex:2},children:[Q.jsx("h1",{children:s?"Login":"Register"}),Q.jsxs("form",{onSubmit:g,children:[!s&&Q.jsx("input",{placeholder:"Username",value:i,onChange:m=>a(m.target.value),required:!0}),Q.jsx("br",{}),Q.jsx("input",{type:"email",placeholder:"Email",value:o,onChange:m=>u(m.target.value),required:!0}),Q.jsx("br",{}),Q.jsx("input",{type:"password",placeholder:"Password",value:h,onChange:m=>d(m.target.value),required:!0}),Q.jsx("br",{}),Q.jsx("button",{type:"submit",children:s?"Login":"Register"})]}),Q.jsx("button",{onClick:()=>e(!s),children:s?"Need an account? Register":"Have an account? Login"})]}),Q.jsxs("div",{class:"logoblock",children:[Q.jsx("img",{src:GO,alt:"Infinity Button Logo",style:{maxWidth:320,width:"80%",height:"auto",borderRadius:24,boxShadow:"0 4px 24px 0 rgba(80,120,180,0.10)"}}),Q.jsx("h1",{children:"THE INFINITY BUTTON"}),Q.jsx("h2",{children:"A Useless Project Initiative"})]})]})}function La({text:s="Click the button to start counting!",fontSize:e="1.3rem"}){const[i,a]=Xe.useState(""),[o,u]=Xe.useState(0);return Xe.useEffect(()=>{let h;return o<s.length?h=setTimeout(()=>{a(s.slice(0,o+1)),u(o+1)},45):h=setTimeout(()=>{a(""),u(0)},1200),()=>clearTimeout(h)},[o,s]),Q.jsxs("div",{className:"clickprompt",style:{fontSize:e,minHeight:e,lineHeight:1.1},children:[i,Q.jsx("span",{style:{display:"inline-block",width:"1ch",animation:"blink-caret 1.5s step-end infinite",height:"1em",verticalAlign:"bottom"}})]})}var ml={};(function s(e,i,a,o){var u=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),h=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=function(){if(!e.OffscreenCanvas)return!1;var y=new OffscreenCanvas(1,1),v=y.getContext("2d");v.fillRect(0,0,1,1);var D=y.transferToImageBitmap();try{v.createPattern(D,"no-repeat")}catch{return!1}return!0}();function g(){}function m(y){var v=i.exports.Promise,D=v!==void 0?v:e.Promise;return typeof D=="function"?new D(y):(y(g,g),null)}var E=function(y,v){return{transform:function(D){if(y)return D;if(v.has(D))return v.get(D);var x=new OffscreenCanvas(D.width,D.height),z=x.getContext("2d");return z.drawImage(D,0,0),v.set(D,x),x},clear:function(){v.clear()}}}(d,new Map),T=function(){var y=Math.floor(16.666666666666668),v,D,x={},z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(v=function(V){var B=Math.random();return x[B]=requestAnimationFrame(function G(Y){z===Y||z+y-1<Y?(z=Y,delete x[B],V()):x[B]=requestAnimationFrame(G)}),B},D=function(V){x[V]&&cancelAnimationFrame(x[V])}):(v=function(V){return setTimeout(V,y)},D=function(V){return clearTimeout(V)}),{frame:v,cancel:D}}(),b=function(){var y,v,D={};function x(z){function V(B,G){z.postMessage({options:B||{},callback:G})}z.init=function(G){var Y=G.transferControlToOffscreen();z.postMessage({canvas:Y},[Y])},z.fire=function(G,Y,he){if(v)return V(G,null),v;var De=Math.random().toString(36).slice(2);return v=m(function(ye){function xe(Fe){Fe.data.callback===De&&(delete D[De],z.removeEventListener("message",xe),v=null,E.clear(),he(),ye())}z.addEventListener("message",xe),V(G,De),D[De]=xe.bind(null,{data:{callback:De}})}),v},z.reset=function(){z.postMessage({reset:!0});for(var G in D)D[G](),delete D[G]}}return function(){if(y)return y;if(!a&&u){var z=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{y=new Worker(URL.createObjectURL(new Blob([z])))}catch(V){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",V),null}x(y)}return y}}(),U={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function H(y,v){return v?v(y):y}function $(y){return y!=null}function F(y,v,D){return H(y&&$(y[v])?y[v]:U[v],D)}function Oe(y){return y<0?0:Math.floor(y)}function ze(y,v){return Math.floor(Math.random()*(v-y))+y}function _e(y){return parseInt(y,16)}function Re(y){return y.map(ne)}function ne(y){var v=String(y).replace(/[^0-9a-f]/gi,"");return v.length<6&&(v=v[0]+v[0]+v[1]+v[1]+v[2]+v[2]),{r:_e(v.substring(0,2)),g:_e(v.substring(2,4)),b:_e(v.substring(4,6))}}function We(y){var v=F(y,"origin",Object);return v.x=F(v,"x",Number),v.y=F(v,"y",Number),v}function Pe(y){y.width=document.documentElement.clientWidth,y.height=document.documentElement.clientHeight}function Ie(y){var v=y.getBoundingClientRect();y.width=v.width,y.height=v.height}function Me(y){var v=document.createElement("canvas");return v.style.position="fixed",v.style.top="0px",v.style.left="0px",v.style.pointerEvents="none",v.style.zIndex=y,v}function st(y,v,D,x,z,V,B,G,Y){y.save(),y.translate(v,D),y.rotate(V),y.scale(x,z),y.arc(0,0,1,B,G,Y),y.restore()}function Lt(y){var v=y.angle*(Math.PI/180),D=y.spread*(Math.PI/180);return{x:y.x,y:y.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:y.startVelocity*.5+Math.random()*y.startVelocity,angle2D:-v+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:y.color,shape:y.shape,tick:0,totalTicks:y.ticks,decay:y.decay,drift:y.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:y.gravity*3,ovalScalar:.6,scalar:y.scalar,flat:y.flat}}function rt(y,v){v.x+=Math.cos(v.angle2D)*v.velocity+v.drift,v.y+=Math.sin(v.angle2D)*v.velocity+v.gravity,v.velocity*=v.decay,v.flat?(v.wobble=0,v.wobbleX=v.x+10*v.scalar,v.wobbleY=v.y+10*v.scalar,v.tiltSin=0,v.tiltCos=0,v.random=1):(v.wobble+=v.wobbleSpeed,v.wobbleX=v.x+10*v.scalar*Math.cos(v.wobble),v.wobbleY=v.y+10*v.scalar*Math.sin(v.wobble),v.tiltAngle+=.1,v.tiltSin=Math.sin(v.tiltAngle),v.tiltCos=Math.cos(v.tiltAngle),v.random=Math.random()+2);var D=v.tick++/v.totalTicks,x=v.x+v.random*v.tiltCos,z=v.y+v.random*v.tiltSin,V=v.wobbleX+v.random*v.tiltCos,B=v.wobbleY+v.random*v.tiltSin;if(y.fillStyle="rgba("+v.color.r+", "+v.color.g+", "+v.color.b+", "+(1-D)+")",y.beginPath(),h&&v.shape.type==="path"&&typeof v.shape.path=="string"&&Array.isArray(v.shape.matrix))y.fill(q(v.shape.path,v.shape.matrix,v.x,v.y,Math.abs(V-x)*.1,Math.abs(B-z)*.1,Math.PI/10*v.wobble));else if(v.shape.type==="bitmap"){var G=Math.PI/10*v.wobble,Y=Math.abs(V-x)*.1,he=Math.abs(B-z)*.1,De=v.shape.bitmap.width*v.scalar,ye=v.shape.bitmap.height*v.scalar,xe=new DOMMatrix([Math.cos(G)*Y,Math.sin(G)*Y,-Math.sin(G)*he,Math.cos(G)*he,v.x,v.y]);xe.multiplySelf(new DOMMatrix(v.shape.matrix));var Fe=y.createPattern(E.transform(v.shape.bitmap),"no-repeat");Fe.setTransform(xe),y.globalAlpha=1-D,y.fillStyle=Fe,y.fillRect(v.x-De/2,v.y-ye/2,De,ye),y.globalAlpha=1}else if(v.shape==="circle")y.ellipse?y.ellipse(v.x,v.y,Math.abs(V-x)*v.ovalScalar,Math.abs(B-z)*v.ovalScalar,Math.PI/10*v.wobble,0,2*Math.PI):st(y,v.x,v.y,Math.abs(V-x)*v.ovalScalar,Math.abs(B-z)*v.ovalScalar,Math.PI/10*v.wobble,0,2*Math.PI);else if(v.shape==="star")for(var oe=Math.PI/2*3,yt=4*v.scalar,Ut=8*v.scalar,qe=v.x,an=v.y,_n=5,zt=Math.PI/_n;_n--;)qe=v.x+Math.cos(oe)*Ut,an=v.y+Math.sin(oe)*Ut,y.lineTo(qe,an),oe+=zt,qe=v.x+Math.cos(oe)*yt,an=v.y+Math.sin(oe)*yt,y.lineTo(qe,an),oe+=zt;else y.moveTo(Math.floor(v.x),Math.floor(v.y)),y.lineTo(Math.floor(v.wobbleX),Math.floor(z)),y.lineTo(Math.floor(V),Math.floor(B)),y.lineTo(Math.floor(x),Math.floor(v.wobbleY));return y.closePath(),y.fill(),v.tick<v.totalTicks}function Nn(y,v,D,x,z){var V=v.slice(),B=y.getContext("2d"),G,Y,he=m(function(De){function ye(){G=Y=null,B.clearRect(0,0,x.width,x.height),E.clear(),z(),De()}function xe(){a&&!(x.width===o.width&&x.height===o.height)&&(x.width=y.width=o.width,x.height=y.height=o.height),!x.width&&!x.height&&(D(y),x.width=y.width,x.height=y.height),B.clearRect(0,0,x.width,x.height),V=V.filter(function(Fe){return rt(B,Fe)}),V.length?G=T.frame(xe):ye()}G=T.frame(xe),Y=ye});return{addFettis:function(De){return V=V.concat(De),he},canvas:y,promise:he,reset:function(){G&&T.cancel(G),Y&&Y()}}}function gn(y,v){var D=!y,x=!!F(v||{},"resize"),z=!1,V=F(v,"disableForReducedMotion",Boolean),B=u&&!!F(v||{},"useWorker"),G=B?b():null,Y=D?Pe:Ie,he=y&&G?!!y.__confetti_initialized:!1,De=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ye;function xe(oe,yt,Ut){for(var qe=F(oe,"particleCount",Oe),an=F(oe,"angle",Number),_n=F(oe,"spread",Number),zt=F(oe,"startVelocity",Number),Es=F(oe,"decay",Number),Oc=F(oe,"gravity",Number),gl=F(oe,"drift",Number),_l=F(oe,"colors",Re),Mc=F(oe,"ticks",Number),ei=F(oe,"shapes"),Tt=F(oe,"scalar"),yn=!!F(oe,"flat"),vt=We(oe),yl=qe,Dr=[],Dc=y.width*vt.x,Ss=y.height*vt.y;yl--;)Dr.push(Lt({x:Dc,y:Ss,angle:an,spread:_n,startVelocity:zt,color:_l[yl%_l.length],shape:ei[ze(0,ei.length)],ticks:Mc,decay:Es,gravity:Oc,drift:gl,scalar:Tt,flat:yn}));return ye?ye.addFettis(Dr):(ye=Nn(y,Dr,Y,yt,Ut),ye.promise)}function Fe(oe){var yt=V||F(oe,"disableForReducedMotion",Boolean),Ut=F(oe,"zIndex",Number);if(yt&&De)return m(function(zt){zt()});D&&ye?y=ye.canvas:D&&!y&&(y=Me(Ut),document.body.appendChild(y)),x&&!he&&Y(y);var qe={width:y.width,height:y.height};G&&!he&&G.init(y),he=!0,G&&(y.__confetti_initialized=!0);function an(){if(G){var zt={getBoundingClientRect:function(){if(!D)return y.getBoundingClientRect()}};Y(zt),G.postMessage({resize:{width:zt.width,height:zt.height}});return}qe.width=qe.height=null}function _n(){ye=null,x&&(z=!1,e.removeEventListener("resize",an)),D&&y&&(document.body.contains(y)&&document.body.removeChild(y),y=null,he=!1)}return x&&!z&&(z=!0,e.addEventListener("resize",an,!1)),G?G.fire(oe,qe,_n):xe(oe,qe,_n)}return Fe.reset=function(){G&&G.reset(),ye&&ye.reset()},Fe}var Ze;function O(){return Ze||(Ze=gn(null,{useWorker:!0,resize:!0})),Ze}function q(y,v,D,x,z,V,B){var G=new Path2D(y),Y=new Path2D;Y.addPath(G,new DOMMatrix(v));var he=new Path2D;return he.addPath(Y,new DOMMatrix([Math.cos(B)*z,Math.sin(B)*z,-Math.sin(B)*V,Math.cos(B)*V,D,x])),he}function X(y){if(!h)throw new Error("path confetti are not supported in this browser");var v,D;typeof y=="string"?v=y:(v=y.path,D=y.matrix);var x=new Path2D(v),z=document.createElement("canvas"),V=z.getContext("2d");if(!D){for(var B=1e3,G=B,Y=B,he=0,De=0,ye,xe,Fe=0;Fe<B;Fe+=2)for(var oe=0;oe<B;oe+=2)V.isPointInPath(x,Fe,oe,"nonzero")&&(G=Math.min(G,Fe),Y=Math.min(Y,oe),he=Math.max(he,Fe),De=Math.max(De,oe));ye=he-G,xe=De-Y;var yt=10,Ut=Math.min(yt/ye,yt/xe);D=[Ut,0,0,Ut,-Math.round(ye/2+G)*Ut,-Math.round(xe/2+Y)*Ut]}return{type:"path",path:v,matrix:D}}function ve(y){var v,D=1,x="#000000",z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof y=="string"?v=y:(v=y.text,D="scalar"in y?y.scalar:D,z="fontFamily"in y?y.fontFamily:z,x="color"in y?y.color:x);var V=10*D,B=""+V+"px "+z,G=new OffscreenCanvas(V,V),Y=G.getContext("2d");Y.font=B;var he=Y.measureText(v),De=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),ye=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),xe=2,Fe=he.actualBoundingBoxLeft+xe,oe=he.actualBoundingBoxAscent+xe;De+=xe+xe,ye+=xe+xe,G=new OffscreenCanvas(De,ye),Y=G.getContext("2d"),Y.font=B,Y.fillStyle=x,Y.fillText(v,Fe,oe);var yt=1/D;return{type:"bitmap",bitmap:G.transferToImageBitmap(),matrix:[yt,0,0,yt,-De*yt/2,-ye*yt/2]}}i.exports=function(){return O().apply(this,arguments)},i.exports.reset=function(){O().reset()},i.exports.create=gn,i.exports.shapeFromPath=X,i.exports.shapeFromText=ve})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ml,!1);const mh=ml.exports;ml.exports.create;const FO="/The-Infinity-Button/assets/button2-BeRzQmuk.png";function KO(){const[s,e]=Xe.useState(0),[i,a]=Xe.useState([]),[o,u]=Xe.useState([]),[h,d]=Xe.useState(!1),[g,m]=Xe.useState(0),[E,T]=Xe.useState(""),[b,U]=Xe.useState(!1),[H,$]=Xe.useState(""),F=Xe.useRef(0),Oe=Xe.useRef(0);Xe.useEffect(()=>{const Re=or(cr,"counter");fh(Re,Pe=>{const Ie=Pe.val()??0;if(e(Ie),Ie>0){const Me=Math.floor(Ie/100);Me>0&&Me!==F.current&&(ze(),F.current=Me)}});const ne=or(cr,"users");fh(ne,Pe=>{const Ie=Pe.val()||{},Me=Object.values(Ie).sort((st,Lt)=>Lt.clicks-st.clicks).slice(0,10);a(Me)});const We=or(cr,`users/${_r.currentUser.uid}`);fh(We,Pe=>{if(Pe.exists()){const Ie=Pe.val(),Me=Ie.clicks||0;if(m(Me),T(Ie.username||""),Me>0){const st=Math.floor(Me/100);st>0&&st!==Oe.current&&($(`Yayyy!! You have wasted ${st} minute${st>1?"s":""} here!!!!`),U(!0),Oe.current=st,setTimeout(()=>U(!1),3500))}}})},[]);const ze=()=>{mh({particleCount:200,spread:70,origin:{y:.6}}),setTimeout(()=>{mh({particleCount:100,spread:50,origin:{x:0}}),mh({particleCount:100,spread:50,origin:{x:1}})},500)},_e=async()=>{d(!0),setTimeout(()=>d(!1),150);const Re=or(cr,"counter"),ne=await Xy(Re);m0(Re,(ne.val()??0)+1);const We=or(cr,`users/${_r.currentUser.uid}`),Pe=await Xy(We);hN(We,{clicks:(Pe.val().clicks??0)+1});const Ie=Date.now();u(Me=>[...Me,Ie]),setTimeout(()=>u(Me=>Me.filter(st=>st!==Ie)),800)};return Q.jsxs("div",{style:{display:"flex",height:"100vh",position:"relative"},children:[b&&Q.jsx("div",{style:{position:"fixed",top:32,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(90deg, #b6c6e6 0%, #7ba7e0 100%)",color:"#213547",fontWeight:700,fontSize:"1.25rem",padding:"16px 36px",borderRadius:16,boxShadow:"0 4px 24px 0 rgba(120,160,200,0.13)",zIndex:9999,letterSpacing:1,fontFamily:"'Comic Sans MS', 'Comic Sans', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif",border:"2.5px solid #dbeafe",animation:"bounceIn 0.7s cubic-bezier(.68,-0.55,.27,1.55)"},children:H}),Q.jsxs("div",{class:"leaderboard",children:[Q.jsx("h2",{children:"🏆 Top 10"}),Q.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[Q.jsx("thead",{children:Q.jsxs("tr",{children:[Q.jsx("th",{style:{padding:"5px"},children:"#"}),Q.jsx("th",{style:{padding:"5px"},children:"User"}),Q.jsx("th",{style:{padding:"5px"},children:"Clicks"})]})}),Q.jsx("tbody",{children:i.map((Re,ne)=>Q.jsxs("tr",{children:[Q.jsx("td",{style:{padding:"5px"},children:ne+1}),Q.jsx("td",{style:{padding:"5px"},children:Re.username}),Q.jsx("td",{style:{padding:"5px"},children:Re.clicks})]},ne))})]})]}),Q.jsxs("div",{class:"centreblock",children:[Q.jsx("h1",{children:"The Global Count"}),Q.jsx("h1",{style:{fontSize:"3rem",marginBottom:"10px"},children:s}),Q.jsx("div",{style:{fontSize:"1.1rem",color:"white",marginBottom:"18px"},children:s>0&&s%100!==0?`${100-s%100} clicks to next milestone!`:"You're at a milestone!"}),Q.jsx("div",{className:"button-container",children:Q.jsx("img",{src:FO,alt:"Infinity Button",className:`infinity-button ${h?"clicked":""}`,onClick:_e})}),o.map(Re=>Q.jsx("div",{className:"plus-one-anim",style:{position:"absolute",left:"50%",transform:"translateX(-50%)",pointerEvents:"none",zIndex:10},children:"+1"},Re)),Q.jsxs("div",{style:{position:"absolute",bottom:"20px",textAlign:"center",width:"100%",fontSize:"1.2rem",fontWeight:"bold"},children:["👤 ",E,": ",g," clicks"]}),Q.jsx("button",{class:"logout-button",onClick:()=>WC(_r),children:"Logout"})]}),Q.jsxs("div",{style:{position:"fixed",left:50,top:"15vh",zIndex:20,display:"flex",flexDirection:"column",gap:"18px"},children:[Q.jsx(La,{text:"CLICK!",fontSize:"5rem"}),Q.jsx(La,{text:"CLICK!",fontSize:"5rem"}),Q.jsx(La,{text:"CLICK!",fontSize:"5rem"}),Q.jsx(La,{text:"CLICK!",fontSize:"5rem"}),Q.jsx(La,{text:"CLICK!",fontSize:"5rem"})]})]})}function QO(){const[s,e]=Xe.useState(null);return Xe.useEffect(()=>{XC(_r,e)},[]),Q.jsx("div",{children:s?Q.jsx(KO,{}):Q.jsx(YO,{})})}lT.createRoot(document.getElementById("root")).render(Q.jsx(Xe.StrictMode,{children:Q.jsx(QO,{})}))});export default XO();
