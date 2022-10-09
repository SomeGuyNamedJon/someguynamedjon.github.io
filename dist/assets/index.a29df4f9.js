(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();function E6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const Gi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ji=E6(Gi);function P5(c){return!!c||c===""}function _6(c){if(I(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=H2(s)?Yi(s):_6(s);if(r)for(const n in r)a[n]=r[n]}return a}else{if(H2(c))return c;if(f2(c))return c}}const $i=/;(?![^(]*\))/g,Ki=/:(.+)/;function Yi(c){const a={};return c.split($i).forEach(e=>{if(e){const s=e.split(Ki);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function p3(c){let a="";if(H2(c))a=c;else if(I(c))for(let e=0;e<c.length;e++){const s=p3(c[e]);s&&(a+=s+" ")}else if(f2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Xi=c=>H2(c)?c:c==null?"":I(c)||f2(c)&&(c.toString===F5||!q(c.toString))?JSON.stringify(c,T5,2):String(c),T5=(c,a)=>a&&a.__v_isRef?T5(c,a.value):D1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:R5(a)?{[`Set(${a.size})`]:[...a.values()]}:f2(a)&&!I(a)&&!E5(a)?String(a):a,e2={},_1=[],R2=()=>{},Qi=()=>!1,Ji=/^on[^a-z]/,M3=c=>Ji.test(c),D6=c=>c.startsWith("onUpdate:"),d2=Object.assign,O6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Zi=Object.prototype.hasOwnProperty,j=(c,a)=>Zi.call(c,a),I=Array.isArray,D1=c=>d3(c)==="[object Map]",R5=c=>d3(c)==="[object Set]",q=c=>typeof c=="function",H2=c=>typeof c=="string",U6=c=>typeof c=="symbol",f2=c=>c!==null&&typeof c=="object",B5=c=>f2(c)&&q(c.then)&&q(c.catch),F5=Object.prototype.toString,d3=c=>F5.call(c),cl=c=>d3(c).slice(8,-1),E5=c=>d3(c)==="[object Object]",I6=c=>H2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,J4=E6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),C3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},al=/-(\w)/g,K2=C3(c=>c.replace(al,(a,e)=>e?e.toUpperCase():"")),el=/\B([A-Z])/g,Q1=C3(c=>c.replace(el,"-$1").toLowerCase()),L3=C3(c=>c.charAt(0).toUpperCase()+c.slice(1)),X3=C3(c=>c?`on${L3(c)}`:""),h4=(c,a)=>!Object.is(c,a),Q3=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},n3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},sl=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let H0;const rl=()=>H0||(H0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let I2;class nl{constructor(a=!1){this.active=!0,this.effects=[],this.cleanups=[],!a&&I2&&(this.parent=I2,this.index=(I2.scopes||(I2.scopes=[])).push(this)-1)}run(a){if(this.active){const e=I2;try{return I2=this,a()}finally{I2=e}}}on(){I2=this}off(){I2=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function il(c,a=I2){a&&a.active&&a.effects.push(c)}const q6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},_5=c=>(c.w&v1)>0,D5=c=>(c.n&v1)>0,ll=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=v1},fl=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];_5(r)&&!D5(r)?r.delete(c):a[e++]=r,r.w&=~v1,r.n&=~v1}a.length=e}},l6=new WeakMap;let i4=0,v1=1;const f6=30;let k2;const x1=Symbol(""),t6=Symbol("");class W6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,il(this,s)}run(){if(!this.active)return this.fn();let a=k2,e=m1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=k2,k2=this,m1=!0,v1=1<<++i4,i4<=f6?ll(this):z0(this),this.fn()}finally{i4<=f6&&fl(this),v1=1<<--i4,k2=this.parent,m1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){k2===this?this.deferStop=!0:this.active&&(z0(this),this.onStop&&this.onStop(),this.active=!1)}}function z0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let m1=!0;const O5=[];function J1(){O5.push(m1),m1=!1}function Z1(){const c=O5.pop();m1=c===void 0?!0:c}function b2(c,a,e){if(m1&&k2){let s=l6.get(c);s||l6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=q6()),U5(r)}}function U5(c,a){let e=!1;i4<=f6?D5(c)||(c.n|=v1,e=!_5(c)):e=!c.has(k2),e&&(c.add(k2),k2.deps.push(c))}function c1(c,a,e,s,r,n){const i=l6.get(c);if(!i)return;let l=[];if(a==="clear")l=[...i.values()];else if(e==="length"&&I(c))i.forEach((f,o)=>{(o==="length"||o>=s)&&l.push(f)});else switch(e!==void 0&&l.push(i.get(e)),a){case"add":I(c)?I6(e)&&l.push(i.get("length")):(l.push(i.get(x1)),D1(c)&&l.push(i.get(t6)));break;case"delete":I(c)||(l.push(i.get(x1)),D1(c)&&l.push(i.get(t6)));break;case"set":D1(c)&&l.push(i.get(x1));break}if(l.length===1)l[0]&&o6(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);o6(q6(f))}}function o6(c,a){const e=I(c)?c:[...c];for(const s of e)s.computed&&h0(s);for(const s of e)s.computed||h0(s)}function h0(c,a){(c!==k2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const tl=E6("__proto__,__v_isRef,__isVue"),I5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(U6)),ol=G6(),ml=G6(!1,!0),ul=G6(!0),V0=vl();function vl(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=K(this);for(let n=0,i=this.length;n<i;n++)b2(s,"get",n+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){J1();const s=K(this)[a].apply(this,e);return Z1(),s}}),c}function G6(c=!1,a=!1){return function(s,r,n){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&n===(c?a?yl:$5:a?j5:G5).get(s))return s;const i=I(s);if(!c&&i&&j(V0,r))return Reflect.get(V0,r,n);const l=Reflect.get(s,r,n);return(U6(r)?I5.has(r):tl(r))||(c||b2(s,"get",r),a)?l:V2(l)?i&&I6(r)?l:l.value:f2(l)?c?K5(l):w4(l):l}}const Hl=q5(),zl=q5(!0);function q5(c=!1){return function(e,s,r,n){let i=e[s];if(W1(i)&&V2(i)&&!V2(r))return!1;if(!c&&(!i3(r)&&!W1(r)&&(i=K(i),r=K(r)),!I(e)&&V2(i)&&!V2(r)))return i.value=r,!0;const l=I(e)&&I6(s)?Number(s)<e.length:j(e,s),f=Reflect.set(e,s,r,n);return e===K(n)&&(l?h4(r,i)&&c1(e,"set",s,r):c1(e,"add",s,r)),f}}function hl(c,a){const e=j(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&c1(c,"delete",a,void 0),s}function Vl(c,a){const e=Reflect.has(c,a);return(!U6(a)||!I5.has(a))&&b2(c,"has",a),e}function pl(c){return b2(c,"iterate",I(c)?"length":x1),Reflect.ownKeys(c)}const W5={get:ol,set:Hl,deleteProperty:hl,has:Vl,ownKeys:pl},Ml={get:ul,set(c,a){return!0},deleteProperty(c,a){return!0}},dl=d2({},W5,{get:ml,set:zl}),j6=c=>c,g3=c=>Reflect.getPrototypeOf(c);function _4(c,a,e=!1,s=!1){c=c.__v_raw;const r=K(c),n=K(a);e||(a!==n&&b2(r,"get",a),b2(r,"get",n));const{has:i}=g3(r),l=s?j6:e?Y6:V4;if(i.call(r,a))return l(c.get(a));if(i.call(r,n))return l(c.get(n));c!==r&&c.get(a)}function D4(c,a=!1){const e=this.__v_raw,s=K(e),r=K(c);return a||(c!==r&&b2(s,"has",c),b2(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function O4(c,a=!1){return c=c.__v_raw,!a&&b2(K(c),"iterate",x1),Reflect.get(c,"size",c)}function p0(c){c=K(c);const a=K(this);return g3(a).has.call(a,c)||(a.add(c),c1(a,"add",c,c)),this}function M0(c,a){a=K(a);const e=K(this),{has:s,get:r}=g3(e);let n=s.call(e,c);n||(c=K(c),n=s.call(e,c));const i=r.call(e,c);return e.set(c,a),n?h4(a,i)&&c1(e,"set",c,a):c1(e,"add",c,a),this}function d0(c){const a=K(this),{has:e,get:s}=g3(a);let r=e.call(a,c);r||(c=K(c),r=e.call(a,c)),s&&s.call(a,c);const n=a.delete(c);return r&&c1(a,"delete",c,void 0),n}function C0(){const c=K(this),a=c.size!==0,e=c.clear();return a&&c1(c,"clear",void 0,void 0),e}function U4(c,a){return function(s,r){const n=this,i=n.__v_raw,l=K(i),f=a?j6:c?Y6:V4;return!c&&b2(l,"iterate",x1),i.forEach((o,t)=>s.call(r,f(o),f(t),n))}}function I4(c,a,e){return function(...s){const r=this.__v_raw,n=K(r),i=D1(n),l=c==="entries"||c===Symbol.iterator&&i,f=c==="keys"&&i,o=r[c](...s),t=e?j6:a?Y6:V4;return!a&&b2(n,"iterate",f?t6:x1),{next(){const{value:u,done:H}=o.next();return H?{value:u,done:H}:{value:l?[t(u[0]),t(u[1])]:t(u),done:H}},[Symbol.iterator](){return this}}}}function i1(c){return function(...a){return c==="delete"?!1:this}}function Cl(){const c={get(n){return _4(this,n)},get size(){return O4(this)},has:D4,add:p0,set:M0,delete:d0,clear:C0,forEach:U4(!1,!1)},a={get(n){return _4(this,n,!1,!0)},get size(){return O4(this)},has:D4,add:p0,set:M0,delete:d0,clear:C0,forEach:U4(!1,!0)},e={get(n){return _4(this,n,!0)},get size(){return O4(this,!0)},has(n){return D4.call(this,n,!0)},add:i1("add"),set:i1("set"),delete:i1("delete"),clear:i1("clear"),forEach:U4(!0,!1)},s={get(n){return _4(this,n,!0,!0)},get size(){return O4(this,!0)},has(n){return D4.call(this,n,!0)},add:i1("add"),set:i1("set"),delete:i1("delete"),clear:i1("clear"),forEach:U4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=I4(n,!1,!1),e[n]=I4(n,!0,!1),a[n]=I4(n,!1,!0),s[n]=I4(n,!0,!0)}),[c,e,a,s]}const[Ll,gl,xl,bl]=Cl();function $6(c,a){const e=a?c?bl:xl:c?gl:Ll;return(s,r,n)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(j(e,r)&&r in s?e:s,r,n)}const Sl={get:$6(!1,!1)},Nl={get:$6(!1,!0)},wl={get:$6(!0,!1)},G5=new WeakMap,j5=new WeakMap,$5=new WeakMap,yl=new WeakMap;function kl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(c){return c.__v_skip||!Object.isExtensible(c)?0:kl(cl(c))}function w4(c){return W1(c)?c:K6(c,!1,W5,Sl,G5)}function Pl(c){return K6(c,!1,dl,Nl,j5)}function K5(c){return K6(c,!0,Ml,wl,$5)}function K6(c,a,e,s,r){if(!f2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=r.get(c);if(n)return n;const i=Al(c);if(i===0)return c;const l=new Proxy(c,i===2?s:e);return r.set(c,l),l}function O1(c){return W1(c)?O1(c.__v_raw):!!(c&&c.__v_isReactive)}function W1(c){return!!(c&&c.__v_isReadonly)}function i3(c){return!!(c&&c.__v_isShallow)}function Y5(c){return O1(c)||W1(c)}function K(c){const a=c&&c.__v_raw;return a?K(a):c}function X5(c){return n3(c,"__v_skip",!0),c}const V4=c=>f2(c)?w4(c):c,Y6=c=>f2(c)?K5(c):c;function Q5(c){m1&&k2&&(c=K(c),U5(c.dep||(c.dep=q6())))}function J5(c,a){c=K(c),c.dep&&o6(c.dep)}function V2(c){return!!(c&&c.__v_isRef===!0)}function Tl(c){return Z5(c,!1)}function Rl(c){return Z5(c,!0)}function Z5(c,a){return V2(c)?c:new Bl(c,a)}class Bl{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:K(a),this._value=e?a:V4(a)}get value(){return Q5(this),this._value}set value(a){const e=this.__v_isShallow||i3(a)||W1(a);a=e?a:K(a),h4(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:V4(a),J5(this))}}function U1(c){return V2(c)?c.value:c}const Fl={get:(c,a,e)=>U1(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return V2(r)&&!V2(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function c7(c){return O1(c)?c:new Proxy(c,Fl)}var a7;class El{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[a7]=!1,this._dirty=!0,this.effect=new W6(a,()=>{this._dirty||(this._dirty=!0,J5(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=K(this);return Q5(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}a7="__v_isReadonly";function _l(c,a,e=!1){let s,r;const n=q(c);return n?(s=c,r=R2):(s=c.get,r=c.set),new El(s,r,n||!r,e)}function u1(c,a,e,s){let r;try{r=s?c(...s):c()}catch(n){x3(n,a,e)}return r}function B2(c,a,e,s){if(q(c)){const n=u1(c,a,e,s);return n&&B5(n)&&n.catch(i=>{x3(i,a,e)}),n}const r=[];for(let n=0;n<c.length;n++)r.push(B2(c[n],a,e,s));return r}function x3(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,l=e;for(;n;){const o=n.ec;if(o){for(let t=0;t<o.length;t++)if(o[t](c,i,l)===!1)return}n=n.parent}const f=a.appContext.config.errorHandler;if(f){u1(f,null,10,[c,i,l]);return}}Dl(c,e,r,s)}function Dl(c,a,e,s=!0){console.error(c)}let l3=!1,m6=!1;const h2=[];let G2=0;const I1=[];let J2=null,d1=0;const e7=Promise.resolve();let X6=null;function s7(c){const a=X6||e7;return c?a.then(this?c.bind(this):c):a}function Ol(c){let a=G2+1,e=h2.length;for(;a<e;){const s=a+e>>>1;p4(h2[s])<c?a=s+1:e=s}return a}function Q6(c){(!h2.length||!h2.includes(c,l3&&c.allowRecurse?G2+1:G2))&&(c.id==null?h2.push(c):h2.splice(Ol(c.id),0,c),r7())}function r7(){!l3&&!m6&&(m6=!0,X6=e7.then(i7))}function Ul(c){const a=h2.indexOf(c);a>G2&&h2.splice(a,1)}function Il(c){I(c)?I1.push(...c):(!J2||!J2.includes(c,c.allowRecurse?d1+1:d1))&&I1.push(c),r7()}function L0(c,a=G2){for(;a<h2.length;a++){const e=h2[a];e&&e.pre&&(h2.splice(a,1),a--,e())}}function n7(c){if(I1.length){const a=[...new Set(I1)];if(I1.length=0,J2){J2.push(...a);return}for(J2=a,J2.sort((e,s)=>p4(e)-p4(s)),d1=0;d1<J2.length;d1++)J2[d1]();J2=null,d1=0}}const p4=c=>c.id==null?1/0:c.id,ql=(c,a)=>{const e=p4(c)-p4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function i7(c){m6=!1,l3=!0,h2.sort(ql);const a=R2;try{for(G2=0;G2<h2.length;G2++){const e=h2[G2];e&&e.active!==!1&&u1(e,null,14)}}finally{G2=0,h2.length=0,n7(),l3=!1,X6=null,(h2.length||I1.length)&&i7()}}function Wl(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||e2;let r=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in s){const t=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:H}=s[t]||e2;H&&(r=e.map(h=>h.trim())),u&&(r=e.map(sl))}let l,f=s[l=X3(a)]||s[l=X3(K2(a))];!f&&n&&(f=s[l=X3(Q1(a))]),f&&B2(f,c,6,r);const o=s[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,B2(o,c,6,r)}}function l7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const n=c.emits;let i={},l=!1;if(!q(c)){const f=o=>{const t=l7(o,a,!0);t&&(l=!0,d2(i,t))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!n&&!l?(f2(c)&&s.set(c,null),null):(I(n)?n.forEach(f=>i[f]=null):d2(i,n),f2(c)&&s.set(c,i),i)}function b3(c,a){return!c||!M3(a)?!1:(a=a.slice(2).replace(/Once$/,""),j(c,a[0].toLowerCase()+a.slice(1))||j(c,Q1(a))||j(c,a))}let j2=null,f7=null;function f3(c){const a=j2;return j2=c,f7=c&&c.type.__scopeId||null,a}function t7(c,a=j2,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&P0(-1);const n=f3(a),i=c(...r);return f3(n),s._d&&P0(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function J3(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:n,propsOptions:[i],slots:l,attrs:f,emit:o,render:t,renderCache:u,data:H,setupState:h,ctx:b,inheritAttrs:B}=c;let w,V;const C=f3(c);try{if(e.shapeFlag&4){const D=r||s;w=W2(t.call(D,D,u,n,h,H,b)),V=f}else{const D=a;w=W2(D.length>1?D(n,{attrs:f,slots:l,emit:o}):D(n,null)),V=a.props?f:Gl(f)}}catch(D){t4.length=0,x3(D,c,1),w=p2(M4)}let R=w;if(V&&B!==!1){const D=Object.keys(V),{shapeFlag:G}=R;D.length&&G&7&&(i&&D.some(D6)&&(V=jl(V,i)),R=j1(R,V))}return e.dirs&&(R=j1(R),R.dirs=R.dirs?R.dirs.concat(e.dirs):e.dirs),e.transition&&(R.transition=e.transition),w=R,f3(C),w}const Gl=c=>{let a;for(const e in c)(e==="class"||e==="style"||M3(e))&&((a||(a={}))[e]=c[e]);return a},jl=(c,a)=>{const e={};for(const s in c)(!D6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function $l(c,a,e){const{props:s,children:r,component:n}=c,{props:i,children:l,patchFlag:f}=a,o=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return s?g0(s,i,o):!!i;if(f&8){const t=a.dynamicProps;for(let u=0;u<t.length;u++){const H=t[u];if(i[H]!==s[H]&&!b3(o,H))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?g0(s,i,o):!0:!!i;return!1}function g0(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const n=s[r];if(a[n]!==c[n]&&!b3(e,n))return!0}return!1}function Kl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Yl=c=>c.__isSuspense;function Xl(c,a){a&&a.pendingBranch?I(c)?a.effects.push(...c):a.effects.push(c):Il(c)}function Z4(c,a){if(z2){let e=z2.provides;const s=z2.parent&&z2.parent.provides;s===e&&(e=z2.provides=Object.create(s)),e[c]=a}}function Z2(c,a,e=!1){const s=z2||j2;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&q(a)?a.call(s.proxy):a}}const x0={};function f4(c,a,e){return o7(c,a,e)}function o7(c,a,{immediate:e,deep:s,flush:r,onTrack:n,onTrigger:i}=e2){const l=z2;let f,o=!1,t=!1;if(V2(c)?(f=()=>c.value,o=i3(c)):O1(c)?(f=()=>c,s=!0):I(c)?(t=!0,o=c.some(V=>O1(V)||i3(V)),f=()=>c.map(V=>{if(V2(V))return V.value;if(O1(V))return B1(V);if(q(V))return u1(V,l,2)})):q(c)?a?f=()=>u1(c,l,2):f=()=>{if(!(l&&l.isUnmounted))return u&&u(),B2(c,l,3,[H])}:f=R2,a&&s){const V=f;f=()=>B1(V())}let u,H=V=>{u=w.onStop=()=>{u1(V,l,4)}};if(C4)return H=R2,a?e&&B2(a,l,3,[f(),t?[]:void 0,H]):f(),R2;let h=t?[]:x0;const b=()=>{if(!!w.active)if(a){const V=w.run();(s||o||(t?V.some((C,R)=>h4(C,h[R])):h4(V,h)))&&(u&&u(),B2(a,l,3,[V,h===x0?void 0:h,H]),h=V)}else w.run()};b.allowRecurse=!!a;let B;r==="sync"?B=b:r==="post"?B=()=>L2(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),B=()=>Q6(b));const w=new W6(f,B);return a?e?b():h=w.run():r==="post"?L2(w.run.bind(w),l&&l.suspense):w.run(),()=>{w.stop(),l&&l.scope&&O6(l.scope.effects,w)}}function Ql(c,a,e){const s=this.proxy,r=H2(c)?c.includes(".")?m7(s,c):()=>s[c]:c.bind(s,s);let n;q(a)?n=a:(n=a.handler,e=a);const i=z2;$1(this);const l=o7(r,n.bind(s),e);return i?$1(i):b1(),l}function m7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function B1(c,a){if(!f2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),V2(c))B1(c.value,a);else if(I(c))for(let e=0;e<c.length;e++)B1(c[e],a);else if(R5(c)||D1(c))c.forEach(e=>{B1(e,a)});else if(E5(c))for(const e in c)B1(c[e],a);return c}function y4(c){return q(c)?{setup:c,name:c.name}:c}const c3=c=>!!c.type.__asyncLoader,u7=c=>c.type.__isKeepAlive;function Jl(c,a){v7(c,"a",a)}function Zl(c,a){v7(c,"da",a)}function v7(c,a,e=z2){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(S3(a,s,e),e){let r=e.parent;for(;r&&r.parent;)u7(r.parent.vnode)&&cf(s,a,e,r),r=r.parent}}function cf(c,a,e,s){const r=S3(a,c,s,!0);H7(()=>{O6(s[a],r)},e)}function S3(c,a,e=z2,s=!1){if(e){const r=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;J1(),$1(e);const l=B2(a,e,c,i);return b1(),Z1(),l});return s?r.unshift(n):r.push(n),n}}const r1=c=>(a,e=z2)=>(!C4||c==="sp")&&S3(c,a,e),af=r1("bm"),ef=r1("m"),sf=r1("bu"),rf=r1("u"),nf=r1("bum"),H7=r1("um"),lf=r1("sp"),ff=r1("rtg"),tf=r1("rtc");function of(c,a=z2){S3("ec",c,a)}function V1(c,a,e,s){const r=c.dirs,n=a&&a.dirs;for(let i=0;i<r.length;i++){const l=r[i];n&&(l.oldValue=n[i].value);let f=l.dir[s];f&&(J1(),B2(f,e,8,[c.el,l,c,a]),Z1())}}const z7="components";function t3(c,a){return uf(z7,c,!0,a)||c}const mf=Symbol();function uf(c,a,e=!0,s=!1){const r=j2||z2;if(r){const n=r.type;if(c===z7){const l=If(n,!1);if(l&&(l===a||l===K2(a)||l===L3(K2(a))))return n}const i=b0(r[c]||n[c],a)||b0(r.appContext[c],a);return!i&&s?n:i}}function b0(c,a){return c&&(c[a]||c[K2(a)]||c[L3(K2(a))])}function vf(c,a,e,s){let r;const n=e&&e[s];if(I(c)||H2(c)){r=new Array(c.length);for(let i=0,l=c.length;i<l;i++)r[i]=a(c[i],i,void 0,n&&n[i])}else if(typeof c=="number"){r=new Array(c);for(let i=0;i<c;i++)r[i]=a(i+1,i,void 0,n&&n[i])}else if(f2(c))if(c[Symbol.iterator])r=Array.from(c,(i,l)=>a(i,l,void 0,n&&n[l]));else{const i=Object.keys(c);r=new Array(i.length);for(let l=0,f=i.length;l<f;l++){const o=i[l];r[l]=a(c[o],o,l,n&&n[l])}}else r=[];return e&&(e[s]=r),r}const u6=c=>c?y7(c)?a8(c)||c.proxy:u6(c.parent):null,o3=d2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>u6(c.parent),$root:c=>u6(c.root),$emit:c=>c.emit,$options:c=>V7(c),$forceUpdate:c=>c.f||(c.f=()=>Q6(c.update)),$nextTick:c=>c.n||(c.n=s7.bind(c.proxy)),$watch:c=>Ql.bind(c)}),Hf={get({_:c},a){const{ctx:e,setupState:s,data:r,props:n,accessCache:i,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const h=i[a];if(h!==void 0)switch(h){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return n[a]}else{if(s!==e2&&j(s,a))return i[a]=1,s[a];if(r!==e2&&j(r,a))return i[a]=2,r[a];if((o=c.propsOptions[0])&&j(o,a))return i[a]=3,n[a];if(e!==e2&&j(e,a))return i[a]=4,e[a];v6&&(i[a]=0)}}const t=o3[a];let u,H;if(t)return a==="$attrs"&&b2(c,"get",a),t(c);if((u=l.__cssModules)&&(u=u[a]))return u;if(e!==e2&&j(e,a))return i[a]=4,e[a];if(H=f.config.globalProperties,j(H,a))return H[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:n}=c;return r!==e2&&j(r,a)?(r[a]=e,!0):s!==e2&&j(s,a)?(s[a]=e,!0):j(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:n}},i){let l;return!!e[i]||c!==e2&&j(c,i)||a!==e2&&j(a,i)||(l=n[0])&&j(l,i)||j(s,i)||j(o3,i)||j(r.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:j(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let v6=!0;function zf(c){const a=V7(c),e=c.proxy,s=c.ctx;v6=!1,a.beforeCreate&&S0(a.beforeCreate,c,"bc");const{data:r,computed:n,methods:i,watch:l,provide:f,inject:o,created:t,beforeMount:u,mounted:H,beforeUpdate:h,updated:b,activated:B,deactivated:w,beforeDestroy:V,beforeUnmount:C,destroyed:R,unmounted:D,render:G,renderTracked:i2,renderTriggered:o2,errorCaptured:E2,serverPrefetch:m2,expose:_2,inheritAttrs:Y2,components:w2,directives:w1,filters:y1}=a;if(o&&hf(o,s,null,c.appContext.config.unwrapInjectedRef),i)for(const c2 in i){const Q=i[c2];q(Q)&&(s[c2]=Q.bind(e))}if(r){const c2=r.call(e,e);f2(c2)&&(c.data=w4(c2))}if(v6=!0,n)for(const c2 in n){const Q=n[c2],g2=q(Q)?Q.bind(e,e):q(Q.get)?Q.get.bind(e,e):R2,A1=!q(Q)&&q(Q.set)?Q.set.bind(e):R2,X2=l2({get:g2,set:A1});Object.defineProperty(s,c2,{enumerable:!0,configurable:!0,get:()=>X2.value,set:D2=>X2.value=D2})}if(l)for(const c2 in l)h7(l[c2],s,e,c2);if(f){const c2=q(f)?f.call(e):f;Reflect.ownKeys(c2).forEach(Q=>{Z4(Q,c2[Q])})}t&&S0(t,c,"c");function u2(c2,Q){I(Q)?Q.forEach(g2=>c2(g2.bind(e))):Q&&c2(Q.bind(e))}if(u2(af,u),u2(ef,H),u2(sf,h),u2(rf,b),u2(Jl,B),u2(Zl,w),u2(of,E2),u2(tf,i2),u2(ff,o2),u2(nf,C),u2(H7,D),u2(lf,m2),I(_2))if(_2.length){const c2=c.exposed||(c.exposed={});_2.forEach(Q=>{Object.defineProperty(c2,Q,{get:()=>e[Q],set:g2=>e[Q]=g2})})}else c.exposed||(c.exposed={});G&&c.render===R2&&(c.render=G),Y2!=null&&(c.inheritAttrs=Y2),w2&&(c.components=w2),w1&&(c.directives=w1)}function hf(c,a,e=R2,s=!1){I(c)&&(c=H6(c));for(const r in c){const n=c[r];let i;f2(n)?"default"in n?i=Z2(n.from||r,n.default,!0):i=Z2(n.from||r):i=Z2(n),V2(i)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):a[r]=i}}function S0(c,a,e){B2(I(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function h7(c,a,e,s){const r=s.includes(".")?m7(e,s):()=>e[s];if(H2(c)){const n=a[c];q(n)&&f4(r,n)}else if(q(c))f4(r,c.bind(e));else if(f2(c))if(I(c))c.forEach(n=>h7(n,a,e,s));else{const n=q(c.handler)?c.handler.bind(e):a[c.handler];q(n)&&f4(r,n,c)}}function V7(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,l=n.get(a);let f;return l?f=l:!r.length&&!e&&!s?f=a:(f={},r.length&&r.forEach(o=>m3(f,o,i,!0)),m3(f,a,i)),f2(a)&&n.set(a,f),f}function m3(c,a,e,s=!1){const{mixins:r,extends:n}=a;n&&m3(c,n,e,!0),r&&r.forEach(i=>m3(c,i,e,!0));for(const i in a)if(!(s&&i==="expose")){const l=Vf[i]||e&&e[i];c[i]=l?l(c[i],a[i]):a[i]}return c}const Vf={data:N0,props:M1,emits:M1,methods:M1,computed:M1,beforeCreate:M2,created:M2,beforeMount:M2,mounted:M2,beforeUpdate:M2,updated:M2,beforeDestroy:M2,beforeUnmount:M2,destroyed:M2,unmounted:M2,activated:M2,deactivated:M2,errorCaptured:M2,serverPrefetch:M2,components:M1,directives:M1,watch:Mf,provide:N0,inject:pf};function N0(c,a){return a?c?function(){return d2(q(c)?c.call(this,this):c,q(a)?a.call(this,this):a)}:a:c}function pf(c,a){return M1(H6(c),H6(a))}function H6(c){if(I(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function M2(c,a){return c?[...new Set([].concat(c,a))]:a}function M1(c,a){return c?d2(d2(Object.create(null),c),a):a}function Mf(c,a){if(!c)return a;if(!a)return c;const e=d2(Object.create(null),c);for(const s in a)e[s]=M2(c[s],a[s]);return e}function df(c,a,e,s=!1){const r={},n={};n3(n,N3,1),c.propsDefaults=Object.create(null),p7(c,a,r,n);for(const i in c.propsOptions[0])i in r||(r[i]=void 0);e?c.props=s?r:Pl(r):c.type.props?c.props=r:c.props=n,c.attrs=n}function Cf(c,a,e,s){const{props:r,attrs:n,vnode:{patchFlag:i}}=c,l=K(r),[f]=c.propsOptions;let o=!1;if((s||i>0)&&!(i&16)){if(i&8){const t=c.vnode.dynamicProps;for(let u=0;u<t.length;u++){let H=t[u];if(b3(c.emitsOptions,H))continue;const h=a[H];if(f)if(j(n,H))h!==n[H]&&(n[H]=h,o=!0);else{const b=K2(H);r[b]=z6(f,l,b,h,c,!1)}else h!==n[H]&&(n[H]=h,o=!0)}}}else{p7(c,a,r,n)&&(o=!0);let t;for(const u in l)(!a||!j(a,u)&&((t=Q1(u))===u||!j(a,t)))&&(f?e&&(e[u]!==void 0||e[t]!==void 0)&&(r[u]=z6(f,l,u,void 0,c,!0)):delete r[u]);if(n!==l)for(const u in n)(!a||!j(a,u)&&!0)&&(delete n[u],o=!0)}o&&c1(c,"set","$attrs")}function p7(c,a,e,s){const[r,n]=c.propsOptions;let i=!1,l;if(a)for(let f in a){if(J4(f))continue;const o=a[f];let t;r&&j(r,t=K2(f))?!n||!n.includes(t)?e[t]=o:(l||(l={}))[t]=o:b3(c.emitsOptions,f)||(!(f in s)||o!==s[f])&&(s[f]=o,i=!0)}if(n){const f=K(e),o=l||e2;for(let t=0;t<n.length;t++){const u=n[t];e[u]=z6(r,f,u,o[u],c,!j(o,u))}}return i}function z6(c,a,e,s,r,n){const i=c[e];if(i!=null){const l=j(i,"default");if(l&&s===void 0){const f=i.default;if(i.type!==Function&&q(f)){const{propsDefaults:o}=r;e in o?s=o[e]:($1(r),s=o[e]=f.call(null,a),b1())}else s=f}i[0]&&(n&&!l?s=!1:i[1]&&(s===""||s===Q1(e))&&(s=!0))}return s}function M7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const n=c.props,i={},l=[];let f=!1;if(!q(c)){const t=u=>{f=!0;const[H,h]=M7(u,a,!0);d2(i,H),h&&l.push(...h)};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}if(!n&&!f)return f2(c)&&s.set(c,_1),_1;if(I(n))for(let t=0;t<n.length;t++){const u=K2(n[t]);w0(u)&&(i[u]=e2)}else if(n)for(const t in n){const u=K2(t);if(w0(u)){const H=n[t],h=i[u]=I(H)||q(H)?{type:H}:H;if(h){const b=A0(Boolean,h.type),B=A0(String,h.type);h[0]=b>-1,h[1]=B<0||b<B,(b>-1||j(h,"default"))&&l.push(u)}}}const o=[i,l];return f2(c)&&s.set(c,o),o}function w0(c){return c[0]!=="$"}function y0(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function k0(c,a){return y0(c)===y0(a)}function A0(c,a){return I(a)?a.findIndex(e=>k0(e,c)):q(a)&&k0(a,c)?0:-1}const d7=c=>c[0]==="_"||c==="$stable",J6=c=>I(c)?c.map(W2):[W2(c)],Lf=(c,a,e)=>{if(a._n)return a;const s=t7((...r)=>J6(a(...r)),e);return s._c=!1,s},C7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(d7(r))continue;const n=c[r];if(q(n))a[r]=Lf(r,n,s);else if(n!=null){const i=J6(n);a[r]=()=>i}}},L7=(c,a)=>{const e=J6(a);c.slots.default=()=>e},gf=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=K(a),n3(a,"_",e)):C7(a,c.slots={})}else c.slots={},a&&L7(c,a);n3(c.slots,N3,1)},xf=(c,a,e)=>{const{vnode:s,slots:r}=c;let n=!0,i=e2;if(s.shapeFlag&32){const l=a._;l?e&&l===1?n=!1:(d2(r,a),!e&&l===1&&delete r._):(n=!a.$stable,C7(a,r)),i=a}else a&&(L7(c,a),i={default:1});if(n)for(const l in r)!d7(l)&&!(l in i)&&delete r[l]};function g7(){return{app:null,config:{isNativeTag:Qi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function Sf(c,a){return function(s,r=null){q(s)||(s=Object.assign({},s)),r!=null&&!f2(r)&&(r=null);const n=g7(),i=new Set;let l=!1;const f=n.app={_uid:bf++,_component:s,_props:r,_container:null,_context:n,_instance:null,version:Wf,get config(){return n.config},set config(o){},use(o,...t){return i.has(o)||(o&&q(o.install)?(i.add(o),o.install(f,...t)):q(o)&&(i.add(o),o(f,...t))),f},mixin(o){return n.mixins.includes(o)||n.mixins.push(o),f},component(o,t){return t?(n.components[o]=t,f):n.components[o]},directive(o,t){return t?(n.directives[o]=t,f):n.directives[o]},mount(o,t,u){if(!l){const H=p2(s,r);return H.appContext=n,t&&a?a(H,o):c(H,o,u),l=!0,f._container=o,o.__vue_app__=f,a8(H.component)||H.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,t){return n.provides[o]=t,f}};return f}}function h6(c,a,e,s,r=!1){if(I(c)){c.forEach((H,h)=>h6(H,a&&(I(a)?a[h]:a),e,s,r));return}if(c3(s)&&!r)return;const n=s.shapeFlag&4?a8(s.component)||s.component.proxy:s.el,i=r?null:n,{i:l,r:f}=c,o=a&&a.r,t=l.refs===e2?l.refs={}:l.refs,u=l.setupState;if(o!=null&&o!==f&&(H2(o)?(t[o]=null,j(u,o)&&(u[o]=null)):V2(o)&&(o.value=null)),q(f))u1(f,l,12,[i,t]);else{const H=H2(f),h=V2(f);if(H||h){const b=()=>{if(c.f){const B=H?t[f]:f.value;r?I(B)&&O6(B,n):I(B)?B.includes(n)||B.push(n):H?(t[f]=[n],j(u,f)&&(u[f]=t[f])):(f.value=[n],c.k&&(t[c.k]=f.value))}else H?(t[f]=i,j(u,f)&&(u[f]=i)):h&&(f.value=i,c.k&&(t[c.k]=i))};i?(b.id=-1,L2(b,e)):b()}}}const L2=Xl;function Nf(c){return wf(c)}function wf(c,a){const e=rl();e.__VUE__=!0;const{insert:s,remove:r,patchProp:n,createElement:i,createText:l,createComment:f,setText:o,setElementText:t,parentNode:u,nextSibling:H,setScopeId:h=R2,cloneNode:b,insertStaticContent:B}=c,w=(m,v,z,d=null,M=null,x=null,y=!1,g=null,S=!!v.dynamicChildren)=>{if(m===v)return;m&&!s4(m,v)&&(d=F(m),N2(m,M,x,!0),m=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:L,ref:E,shapeFlag:A}=v;switch(L){case Z6:V(m,v,z,d);break;case M4:C(m,v,z,d);break;case a3:m==null&&R(v,z,d,y);break;case q2:w1(m,v,z,d,M,x,y,g,S);break;default:A&1?i2(m,v,z,d,M,x,y,g,S):A&6?y1(m,v,z,d,M,x,y,g,S):(A&64||A&128)&&L.process(m,v,z,d,M,x,y,g,S,a2)}E!=null&&M&&h6(E,m&&m.ref,x,v||m,!v)},V=(m,v,z,d)=>{if(m==null)s(v.el=l(v.children),z,d);else{const M=v.el=m.el;v.children!==m.children&&o(M,v.children)}},C=(m,v,z,d)=>{m==null?s(v.el=f(v.children||""),z,d):v.el=m.el},R=(m,v,z,d)=>{[m.el,m.anchor]=B(m.children,v,z,d,m.el,m.anchor)},D=({el:m,anchor:v},z,d)=>{let M;for(;m&&m!==v;)M=H(m),s(m,z,d),m=M;s(v,z,d)},G=({el:m,anchor:v})=>{let z;for(;m&&m!==v;)z=H(m),r(m),m=z;r(v)},i2=(m,v,z,d,M,x,y,g,S)=>{y=y||v.type==="svg",m==null?o2(v,z,d,M,x,y,g,S):_2(m,v,M,x,y,g,S)},o2=(m,v,z,d,M,x,y,g)=>{let S,L;const{type:E,props:A,shapeFlag:_,transition:O,patchFlag:$,dirs:J}=m;if(m.el&&b!==void 0&&$===-1)S=m.el=b(m.el);else{if(S=m.el=i(m.type,x,A&&A.is,A),_&8?t(S,m.children):_&16&&m2(m.children,S,null,d,M,x&&E!=="foreignObject",y,g),J&&V1(m,null,d,"created"),A){for(const s2 in A)s2!=="value"&&!J4(s2)&&n(S,s2,null,A[s2],x,m.children,d,M,N);"value"in A&&n(S,"value",null,A.value),(L=A.onVnodeBeforeMount)&&U2(L,d,m)}E2(S,m,m.scopeId,y,d)}J&&V1(m,null,d,"beforeMount");const Z=(!M||M&&!M.pendingBranch)&&O&&!O.persisted;Z&&O.beforeEnter(S),s(S,v,z),((L=A&&A.onVnodeMounted)||Z||J)&&L2(()=>{L&&U2(L,d,m),Z&&O.enter(S),J&&V1(m,null,d,"mounted")},M)},E2=(m,v,z,d,M)=>{if(z&&h(m,z),d)for(let x=0;x<d.length;x++)h(m,d[x]);if(M){let x=M.subTree;if(v===x){const y=M.vnode;E2(m,y,y.scopeId,y.slotScopeIds,M.parent)}}},m2=(m,v,z,d,M,x,y,g,S=0)=>{for(let L=S;L<m.length;L++){const E=m[L]=g?t1(m[L]):W2(m[L]);w(null,E,v,z,d,M,x,y,g)}},_2=(m,v,z,d,M,x,y)=>{const g=v.el=m.el;let{patchFlag:S,dynamicChildren:L,dirs:E}=v;S|=m.patchFlag&16;const A=m.props||e2,_=v.props||e2;let O;z&&p1(z,!1),(O=_.onVnodeBeforeUpdate)&&U2(O,z,v,m),E&&V1(v,m,z,"beforeUpdate"),z&&p1(z,!0);const $=M&&v.type!=="foreignObject";if(L?Y2(m.dynamicChildren,L,g,z,d,$,x):y||g2(m,v,g,null,z,d,$,x,!1),S>0){if(S&16)w2(g,v,A,_,z,d,M);else if(S&2&&A.class!==_.class&&n(g,"class",null,_.class,M),S&4&&n(g,"style",A.style,_.style,M),S&8){const J=v.dynamicProps;for(let Z=0;Z<J.length;Z++){const s2=J[Z],y2=A[s2],P1=_[s2];(P1!==y2||s2==="value")&&n(g,s2,y2,P1,M,m.children,z,d,N)}}S&1&&m.children!==v.children&&t(g,v.children)}else!y&&L==null&&w2(g,v,A,_,z,d,M);((O=_.onVnodeUpdated)||E)&&L2(()=>{O&&U2(O,z,v,m),E&&V1(v,m,z,"updated")},d)},Y2=(m,v,z,d,M,x,y)=>{for(let g=0;g<v.length;g++){const S=m[g],L=v[g],E=S.el&&(S.type===q2||!s4(S,L)||S.shapeFlag&70)?u(S.el):z;w(S,L,E,null,d,M,x,y,!0)}},w2=(m,v,z,d,M,x,y)=>{if(z!==d){for(const g in d){if(J4(g))continue;const S=d[g],L=z[g];S!==L&&g!=="value"&&n(m,g,L,S,y,v.children,M,x,N)}if(z!==e2)for(const g in z)!J4(g)&&!(g in d)&&n(m,g,z[g],null,y,v.children,M,x,N);"value"in d&&n(m,"value",z.value,d.value)}},w1=(m,v,z,d,M,x,y,g,S)=>{const L=v.el=m?m.el:l(""),E=v.anchor=m?m.anchor:l("");let{patchFlag:A,dynamicChildren:_,slotScopeIds:O}=v;O&&(g=g?g.concat(O):O),m==null?(s(L,z,d),s(E,z,d),m2(v.children,z,E,M,x,y,g,S)):A>0&&A&64&&_&&m.dynamicChildren?(Y2(m.dynamicChildren,_,z,M,x,y,g),(v.key!=null||M&&v===M.subTree)&&x7(m,v,!0)):g2(m,v,z,E,M,x,y,g,S)},y1=(m,v,z,d,M,x,y,g,S)=>{v.slotScopeIds=g,m==null?v.shapeFlag&512?M.ctx.activate(v,z,d,y,S):k1(v,z,d,M,x,y,S):u2(m,v,S)},k1=(m,v,z,d,M,x,y)=>{const g=m.component=Ef(m,d,M);if(u7(m)&&(g.ctx.renderer=a2),_f(g),g.asyncDep){if(M&&M.registerDep(g,c2),!m.el){const S=g.subTree=p2(M4);C(null,S,v,z)}return}c2(g,m,v,z,M,x,y)},u2=(m,v,z)=>{const d=v.component=m.component;if($l(m,v,z))if(d.asyncDep&&!d.asyncResolved){Q(d,v,z);return}else d.next=v,Ul(d.update),d.update();else v.el=m.el,d.vnode=v},c2=(m,v,z,d,M,x,y)=>{const g=()=>{if(m.isMounted){let{next:E,bu:A,u:_,parent:O,vnode:$}=m,J=E,Z;p1(m,!1),E?(E.el=$.el,Q(m,E,y)):E=$,A&&Q3(A),(Z=E.props&&E.props.onVnodeBeforeUpdate)&&U2(Z,O,E,$),p1(m,!0);const s2=J3(m),y2=m.subTree;m.subTree=s2,w(y2,s2,u(y2.el),F(y2),m,M,x),E.el=s2.el,J===null&&Kl(m,s2.el),_&&L2(_,M),(Z=E.props&&E.props.onVnodeUpdated)&&L2(()=>U2(Z,O,E,$),M)}else{let E;const{el:A,props:_}=v,{bm:O,m:$,parent:J}=m,Z=c3(v);if(p1(m,!1),O&&Q3(O),!Z&&(E=_&&_.onVnodeBeforeMount)&&U2(E,J,v),p1(m,!0),A&&U){const s2=()=>{m.subTree=J3(m),U(A,m.subTree,m,M,null)};Z?v.type.__asyncLoader().then(()=>!m.isUnmounted&&s2()):s2()}else{const s2=m.subTree=J3(m);w(null,s2,z,d,m,M,x),v.el=s2.el}if($&&L2($,M),!Z&&(E=_&&_.onVnodeMounted)){const s2=v;L2(()=>U2(E,J,s2),M)}(v.shapeFlag&256||J&&c3(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&L2(m.a,M),m.isMounted=!0,v=z=d=null}},S=m.effect=new W6(g,()=>Q6(L),m.scope),L=m.update=()=>S.run();L.id=m.uid,p1(m,!0),L()},Q=(m,v,z)=>{v.component=m;const d=m.vnode.props;m.vnode=v,m.next=null,Cf(m,v.props,d,z),xf(m,v.children,z),J1(),L0(),Z1()},g2=(m,v,z,d,M,x,y,g,S=!1)=>{const L=m&&m.children,E=m?m.shapeFlag:0,A=v.children,{patchFlag:_,shapeFlag:O}=v;if(_>0){if(_&128){X2(L,A,z,d,M,x,y,g,S);return}else if(_&256){A1(L,A,z,d,M,x,y,g,S);return}}O&8?(E&16&&N(L,M,x),A!==L&&t(z,A)):E&16?O&16?X2(L,A,z,d,M,x,y,g,S):N(L,M,x,!0):(E&8&&t(z,""),O&16&&m2(A,z,d,M,x,y,g,S))},A1=(m,v,z,d,M,x,y,g,S)=>{m=m||_1,v=v||_1;const L=m.length,E=v.length,A=Math.min(L,E);let _;for(_=0;_<A;_++){const O=v[_]=S?t1(v[_]):W2(v[_]);w(m[_],O,z,null,M,x,y,g,S)}L>E?N(m,M,x,!0,!1,A):m2(v,z,d,M,x,y,g,S,A)},X2=(m,v,z,d,M,x,y,g,S)=>{let L=0;const E=v.length;let A=m.length-1,_=E-1;for(;L<=A&&L<=_;){const O=m[L],$=v[L]=S?t1(v[L]):W2(v[L]);if(s4(O,$))w(O,$,z,null,M,x,y,g,S);else break;L++}for(;L<=A&&L<=_;){const O=m[A],$=v[_]=S?t1(v[_]):W2(v[_]);if(s4(O,$))w(O,$,z,null,M,x,y,g,S);else break;A--,_--}if(L>A){if(L<=_){const O=_+1,$=O<E?v[O].el:d;for(;L<=_;)w(null,v[L]=S?t1(v[L]):W2(v[L]),z,$,M,x,y,g,S),L++}}else if(L>_)for(;L<=A;)N2(m[L],M,x,!0),L++;else{const O=L,$=L,J=new Map;for(L=$;L<=_;L++){const x2=v[L]=S?t1(v[L]):W2(v[L]);x2.key!=null&&J.set(x2.key,L)}let Z,s2=0;const y2=_-$+1;let P1=!1,m0=0;const e4=new Array(y2);for(L=0;L<y2;L++)e4[L]=0;for(L=O;L<=A;L++){const x2=m[L];if(s2>=y2){N2(x2,M,x,!0);continue}let O2;if(x2.key!=null)O2=J.get(x2.key);else for(Z=$;Z<=_;Z++)if(e4[Z-$]===0&&s4(x2,v[Z])){O2=Z;break}O2===void 0?N2(x2,M,x,!0):(e4[O2-$]=L+1,O2>=m0?m0=O2:P1=!0,w(x2,v[O2],z,null,M,x,y,g,S),s2++)}const u0=P1?yf(e4):_1;for(Z=u0.length-1,L=y2-1;L>=0;L--){const x2=$+L,O2=v[x2],v0=x2+1<E?v[x2+1].el:d;e4[L]===0?w(null,O2,z,v0,M,x,y,g,S):P1&&(Z<0||L!==u0[Z]?D2(O2,z,v0,2):Z--)}}},D2=(m,v,z,d,M=null)=>{const{el:x,type:y,transition:g,children:S,shapeFlag:L}=m;if(L&6){D2(m.component.subTree,v,z,d);return}if(L&128){m.suspense.move(v,z,d);return}if(L&64){y.move(m,v,z,a2);return}if(y===q2){s(x,v,z);for(let A=0;A<S.length;A++)D2(S[A],v,z,d);s(m.anchor,v,z);return}if(y===a3){D(m,v,z);return}if(d!==2&&L&1&&g)if(d===0)g.beforeEnter(x),s(x,v,z),L2(()=>g.enter(x),M);else{const{leave:A,delayLeave:_,afterLeave:O}=g,$=()=>s(x,v,z),J=()=>{A(x,()=>{$(),O&&O()})};_?_(x,$,J):J()}else s(x,v,z)},N2=(m,v,z,d=!1,M=!1)=>{const{type:x,props:y,ref:g,children:S,dynamicChildren:L,shapeFlag:E,patchFlag:A,dirs:_}=m;if(g!=null&&h6(g,null,z,m,!0),E&256){v.ctx.deactivate(m);return}const O=E&1&&_,$=!c3(m);let J;if($&&(J=y&&y.onVnodeBeforeUnmount)&&U2(J,v,m),E&6)T(m.component,z,d);else{if(E&128){m.suspense.unmount(z,d);return}O&&V1(m,null,v,"beforeUnmount"),E&64?m.type.remove(m,v,z,M,a2,d):L&&(x!==q2||A>0&&A&64)?N(L,v,z,!1,!0):(x===q2&&A&384||!M&&E&16)&&N(S,v,z),d&&a4(m)}($&&(J=y&&y.onVnodeUnmounted)||O)&&L2(()=>{J&&U2(J,v,m),O&&V1(m,null,v,"unmounted")},z)},a4=m=>{const{type:v,el:z,anchor:d,transition:M}=m;if(v===q2){p(z,d);return}if(v===a3){G(m);return}const x=()=>{r(z),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:y,delayLeave:g}=M,S=()=>y(z,x);g?g(m.el,x,S):S()}else x()},p=(m,v)=>{let z;for(;m!==v;)z=H(m),r(m),m=z;r(v)},T=(m,v,z)=>{const{bum:d,scope:M,update:x,subTree:y,um:g}=m;d&&Q3(d),M.stop(),x&&(x.active=!1,N2(y,m,v,z)),g&&L2(g,v),L2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},N=(m,v,z,d=!1,M=!1,x=0)=>{for(let y=x;y<m.length;y++)N2(m[y],v,z,d,M)},F=m=>m.shapeFlag&6?F(m.component.subTree):m.shapeFlag&128?m.suspense.next():H(m.anchor||m.el),Y=(m,v,z)=>{m==null?v._vnode&&N2(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,z),L0(),n7(),v._vnode=m},a2={p:w,um:N2,m:D2,r:a4,mt:k1,mc:m2,pc:g2,pbc:Y2,n:F,o:c};let W,U;return a&&([W,U]=a(a2)),{render:Y,hydrate:W,createApp:Sf(Y,W)}}function p1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function x7(c,a,e=!1){const s=c.children,r=a.children;if(I(s)&&I(r))for(let n=0;n<s.length;n++){const i=s[n];let l=r[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[n]=t1(r[n]),l.el=i.el),e||x7(i,l))}}function yf(c){const a=c.slice(),e=[0];let s,r,n,i,l;const f=c.length;for(s=0;s<f;s++){const o=c[s];if(o!==0){if(r=e[e.length-1],c[r]<o){a[s]=r,e.push(s);continue}for(n=0,i=e.length-1;n<i;)l=n+i>>1,c[e[l]]<o?n=l+1:i=l;o<c[e[n]]&&(n>0&&(a[s]=e[n-1]),e[n]=s)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const kf=c=>c.__isTeleport,q2=Symbol(void 0),Z6=Symbol(void 0),M4=Symbol(void 0),a3=Symbol(void 0),t4=[];let P2=null;function o4(c=!1){t4.push(P2=c?null:[])}function Af(){t4.pop(),P2=t4[t4.length-1]||null}let d4=1;function P0(c){d4+=c}function b7(c){return c.dynamicChildren=d4>0?P2||_1:null,Af(),d4>0&&P2&&P2.push(c),c}function V6(c,a,e,s,r,n){return b7(G1(c,a,e,s,r,n,!0))}function S7(c,a,e,s,r){return b7(p2(c,a,e,s,r,!0))}function p6(c){return c?c.__v_isVNode===!0:!1}function s4(c,a){return c.type===a.type&&c.key===a.key}const N3="__vInternal",N7=({key:c})=>c!=null?c:null,e3=({ref:c,ref_key:a,ref_for:e})=>c!=null?H2(c)||V2(c)||q(c)?{i:j2,r:c,k:a,f:!!e}:c:null;function G1(c,a=null,e=null,s=0,r=null,n=c===q2?0:1,i=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&N7(a),ref:a&&e3(a),scopeId:f7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(c8(f,e),n&128&&c.normalize(f)):e&&(f.shapeFlag|=H2(e)?8:16),d4>0&&!i&&P2&&(f.patchFlag>0||n&6)&&f.patchFlag!==32&&P2.push(f),f}const p2=Pf;function Pf(c,a=null,e=null,s=0,r=null,n=!1){if((!c||c===mf)&&(c=M4),p6(c)){const l=j1(c,a,!0);return e&&c8(l,e),d4>0&&!n&&P2&&(l.shapeFlag&6?P2[P2.indexOf(c)]=l:P2.push(l)),l.patchFlag|=-2,l}if(qf(c)&&(c=c.__vccOpts),a){a=Tf(a);let{class:l,style:f}=a;l&&!H2(l)&&(a.class=p3(l)),f2(f)&&(Y5(f)&&!I(f)&&(f=d2({},f)),a.style=_6(f))}const i=H2(c)?1:Yl(c)?128:kf(c)?64:f2(c)?4:q(c)?2:0;return G1(c,a,e,s,r,i,n,!0)}function Tf(c){return c?Y5(c)||N3 in c?d2({},c):c:null}function j1(c,a,e=!1){const{props:s,ref:r,patchFlag:n,children:i}=c,l=a?Rf(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&N7(l),ref:a&&a.ref?e&&r?I(r)?r.concat(e3(a)):[r,e3(a)]:e3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==q2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&j1(c.ssContent),ssFallback:c.ssFallback&&j1(c.ssFallback),el:c.el,anchor:c.anchor}}function w7(c=" ",a=0){return p2(Z6,null,c,a)}function aO(c,a){const e=p2(a3,null,c);return e.staticCount=a,e}function W2(c){return c==null||typeof c=="boolean"?p2(M4):I(c)?p2(q2,null,c.slice()):typeof c=="object"?t1(c):p2(Z6,null,String(c))}function t1(c){return c.el===null||c.memo?c:j1(c)}function c8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(I(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),c8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(N3 in a)?a._ctx=j2:r===3&&j2&&(j2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else q(a)?(a={default:a,_ctx:j2},e=32):(a=String(a),s&64?(e=16,a=[w7(a)]):e=8);c.children=a,c.shapeFlag|=e}function Rf(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=p3([a.class,s.class]));else if(r==="style")a.style=_6([a.style,s.style]);else if(M3(r)){const n=a[r],i=s[r];i&&n!==i&&!(I(n)&&n.includes(i))&&(a[r]=n?[].concat(n,i):i)}else r!==""&&(a[r]=s[r])}return a}function U2(c,a,e,s=null){B2(c,a,7,[e,s])}const Bf=g7();let Ff=0;function Ef(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||Bf,n={uid:Ff++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:M7(s,r),emitsOptions:l7(s,r),emit:null,emitted:null,propsDefaults:e2,inheritAttrs:s.inheritAttrs,ctx:e2,data:e2,props:e2,attrs:e2,slots:e2,refs:e2,setupState:e2,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=Wl.bind(null,n),c.ce&&c.ce(n),n}let z2=null;const $1=c=>{z2=c,c.scope.on()},b1=()=>{z2&&z2.scope.off(),z2=null};function y7(c){return c.vnode.shapeFlag&4}let C4=!1;function _f(c,a=!1){C4=a;const{props:e,children:s}=c.vnode,r=y7(c);df(c,e,r,a),gf(c,s);const n=r?Df(c,a):void 0;return C4=!1,n}function Df(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=X5(new Proxy(c.ctx,Hf));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Uf(c):null;$1(c),J1();const n=u1(s,c,0,[c.props,r]);if(Z1(),b1(),B5(n)){if(n.then(b1,b1),a)return n.then(i=>{T0(c,i,a)}).catch(i=>{x3(i,c,0)});c.asyncDep=n}else T0(c,n,a)}else k7(c,a)}function T0(c,a,e){q(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:f2(a)&&(c.setupState=c7(a)),k7(c,e)}let R0;function k7(c,a,e){const s=c.type;if(!c.render){if(!a&&R0&&!s.render){const r=s.template;if(r){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:l,compilerOptions:f}=s,o=d2(d2({isCustomElement:n,delimiters:l},i),f);s.render=R0(r,o)}}c.render=s.render||R2}$1(c),J1(),zf(c),Z1(),b1()}function Of(c){return new Proxy(c.attrs,{get(a,e){return b2(c,"get","$attrs"),a[e]}})}function Uf(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Of(c))},slots:c.slots,emit:c.emit,expose:a}}function a8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(c7(X5(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in o3)return o3[e](c)}}))}function If(c,a=!0){return q(c)?c.displayName||c.name:c.name||a&&c.__name}function qf(c){return q(c)&&"__vccOpts"in c}const l2=(c,a)=>_l(c,a,C4);function w3(c,a,e){const s=arguments.length;return s===2?f2(a)&&!I(a)?p6(a)?p2(c,null,[a]):p2(c,a):p2(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&p6(e)&&(e=[e]),p2(c,a,e))}const Wf="3.2.38",Gf="http://www.w3.org/2000/svg",C1=typeof document<"u"?document:null,B0=C1&&C1.createElement("template"),jf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?C1.createElementNS(Gf,c):C1.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>C1.createTextNode(c),createComment:c=>C1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>C1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},cloneNode(c){const a=c.cloneNode(!0);return"_value"in c&&(a._value=c._value),a},insertStaticContent(c,a,e,s,r,n){const i=e?e.previousSibling:a.lastChild;if(r&&(r===n||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===n||!(r=r.nextSibling)););else{B0.innerHTML=s?`<svg>${c}</svg>`:c;const l=B0.content;if(s){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function $f(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function Kf(c,a,e){const s=c.style,r=H2(e);if(e&&!r){for(const n in e)M6(s,n,e[n]);if(a&&!H2(a))for(const n in a)e[n]==null&&M6(s,n,"")}else{const n=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=n)}}const F0=/\s*!important$/;function M6(c,a,e){if(I(e))e.forEach(s=>M6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=Yf(c,a);F0.test(e)?c.setProperty(Q1(s),e.replace(F0,""),"important"):c[s]=e}}const E0=["Webkit","Moz","ms"],Z3={};function Yf(c,a){const e=Z3[a];if(e)return e;let s=K2(a);if(s!=="filter"&&s in c)return Z3[a]=s;s=L3(s);for(let r=0;r<E0.length;r++){const n=E0[r]+s;if(n in c)return Z3[a]=n}return a}const _0="http://www.w3.org/1999/xlink";function Xf(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(_0,a.slice(6,a.length)):c.setAttributeNS(_0,a,e);else{const n=ji(a);e==null||n&&!P5(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function Qf(c,a,e,s,r,n,i){if(a==="innerHTML"||a==="textContent"){s&&i(s,r,n),c[a]=e==null?"":e;return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const f=e==null?"":e;(c.value!==f||c.tagName==="OPTION")&&(c.value=f),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const f=typeof c[a];f==="boolean"?e=P5(e):e==null&&f==="string"?(e="",l=!0):f==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}const[A7,Jf]=(()=>{let c=Date.now,a=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(c=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);a=!!(e&&Number(e[1])<=53)}return[c,a]})();let d6=0;const Zf=Promise.resolve(),ct=()=>{d6=0},at=()=>d6||(Zf.then(ct),d6=A7());function et(c,a,e,s){c.addEventListener(a,e,s)}function st(c,a,e,s){c.removeEventListener(a,e,s)}function rt(c,a,e,s,r=null){const n=c._vei||(c._vei={}),i=n[a];if(s&&i)i.value=s;else{const[l,f]=nt(a);if(s){const o=n[a]=it(s,r);et(c,l,o,f)}else i&&(st(c,l,i,f),n[a]=void 0)}}const D0=/(?:Once|Passive|Capture)$/;function nt(c){let a;if(D0.test(c)){a={};let s;for(;s=c.match(D0);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Q1(c.slice(2)),a]}function it(c,a){const e=s=>{const r=s.timeStamp||A7();(Jf||r>=e.attached-1)&&B2(lt(s,e.value),a,5,[s])};return e.value=c,e.attached=at(),e}function lt(c,a){if(I(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const O0=/^on[a-z]/,ft=(c,a,e,s,r=!1,n,i,l,f)=>{a==="class"?$f(c,s,r):a==="style"?Kf(c,e,s):M3(a)?D6(a)||rt(c,a,e,s,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):tt(c,a,s,r))?Qf(c,a,s,n,i,l,f):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),Xf(c,a,s,r))};function tt(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&O0.test(a)&&q(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||O0.test(a)&&H2(e)?!1:a in c}const ot=d2({patchProp:ft},jf);let U0;function mt(){return U0||(U0=Nf(ot))}const ut=(...c)=>{const a=mt().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=vt(s);if(!r)return;const n=a._component;!q(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.innerHTML="";const i=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},a};function vt(c){return H2(c)?document.querySelector(c):c}const Ht=[{name:"About",icon:"user-graduate",page:"home"},{name:"School",icon:"graduation-cap",page:"school"},{name:"Work",icon:"briefcase",page:"work"},{name:"Contact",icon:"address-book",page:"contact"},{name:"Comments",icon:"comments",page:"comments"}];/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const R1=typeof window<"u";function zt(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const X=Object.assign;function c6(c,a){const e={};for(const s in a){const r=a[s];e[s]=F2(r)?r.map(c):c(r)}return e}const m4=()=>{},F2=Array.isArray,ht=/\/$/,Vt=c=>c.replace(ht,"");function a6(c,a,e="/"){let s,r={},n="",i="";const l=a.indexOf("#");let f=a.indexOf("?");return l<f&&l>=0&&(f=-1),f>-1&&(s=a.slice(0,f),n=a.slice(f+1,l>-1?l:a.length),r=c(n)),l>-1&&(s=s||a.slice(0,l),i=a.slice(l,a.length)),s=Ct(s!=null?s:a,e),{fullPath:s+(n&&"?")+n+i,path:s,query:r,hash:i}}function pt(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function I0(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Mt(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&K1(a.matched[s],e.matched[r])&&P7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function K1(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function P7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!dt(c[e],a[e]))return!1;return!0}function dt(c,a){return F2(c)?q0(c,a):F2(a)?q0(a,c):c===a}function q0(c,a){return F2(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function Ct(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,n,i;for(n=0;n<s.length;n++)if(i=s[n],i!==".")if(i==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(n-(n===s.length?1:0)).join("/")}var L4;(function(c){c.pop="pop",c.push="push"})(L4||(L4={}));var u4;(function(c){c.back="back",c.forward="forward",c.unknown=""})(u4||(u4={}));function Lt(c){if(!c)if(R1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Vt(c)}const gt=/^[^#]+#/;function xt(c,a){return c.replace(gt,"#")+a}function bt(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const y3=()=>({left:window.pageXOffset,top:window.pageYOffset});function St(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=bt(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function W0(c,a){return(history.state?history.state.position-a:-1)+c}const C6=new Map;function Nt(c,a){C6.set(c,a)}function wt(c){const a=C6.get(c);return C6.delete(c),a}let yt=()=>location.protocol+"//"+location.host;function T7(c,a){const{pathname:e,search:s,hash:r}=a,n=c.indexOf("#");if(n>-1){let l=r.includes(c.slice(n))?c.slice(n).length:1,f=r.slice(l);return f[0]!=="/"&&(f="/"+f),I0(f,"")}return I0(e,c)+s+r}function kt(c,a,e,s){let r=[],n=[],i=null;const l=({state:H})=>{const h=T7(c,location),b=e.value,B=a.value;let w=0;if(H){if(e.value=h,a.value=H,i&&i===b){i=null;return}w=B?H.position-B.position:0}else s(h);r.forEach(V=>{V(e.value,b,{delta:w,type:L4.pop,direction:w?w>0?u4.forward:u4.back:u4.unknown})})};function f(){i=e.value}function o(H){r.push(H);const h=()=>{const b=r.indexOf(H);b>-1&&r.splice(b,1)};return n.push(h),h}function t(){const{history:H}=window;!H.state||H.replaceState(X({},H.state,{scroll:y3()}),"")}function u(){for(const H of n)H();n=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",t)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",t),{pauseListeners:f,listen:o,destroy:u}}function G0(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?y3():null}}function At(c){const{history:a,location:e}=window,s={value:T7(c,e)},r={value:a.state};r.value||n(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(f,o,t){const u=c.indexOf("#"),H=u>-1?(e.host&&document.querySelector("base")?c:c.slice(u))+f:yt()+c+f;try{a[t?"replaceState":"pushState"](o,"",H),r.value=o}catch(h){console.error(h),e[t?"replace":"assign"](H)}}function i(f,o){const t=X({},a.state,G0(r.value.back,f,r.value.forward,!0),o,{position:r.value.position});n(f,t,!0),s.value=f}function l(f,o){const t=X({},r.value,a.state,{forward:f,scroll:y3()});n(t.current,t,!0);const u=X({},G0(s.value,f,null),{position:t.position+1},o);n(f,u,!1),s.value=f}return{location:s,state:r,push:l,replace:i}}function Pt(c){c=Lt(c);const a=At(c),e=kt(c,a.state,a.location,a.replace);function s(n,i=!0){i||e.pauseListeners(),history.go(n)}const r=X({location:"",base:c,go:s,createHref:xt.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Tt(c){return typeof c=="string"||c&&typeof c=="object"}function R7(c){return typeof c=="string"||typeof c=="symbol"}const l1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B7=Symbol("");var j0;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(j0||(j0={}));function Y1(c,a){return X(new Error,{type:c,[B7]:!0},a)}function Q2(c,a){return c instanceof Error&&B7 in c&&(a==null||!!(c.type&a))}const $0="[^/]+?",Rt={sensitive:!1,strict:!1,start:!0,end:!0},Bt=/[.+*?^${}()[\]/\\]/g;function Ft(c,a){const e=X({},Rt,a),s=[];let r=e.start?"^":"";const n=[];for(const o of c){const t=o.length?[]:[90];e.strict&&!o.length&&(r+="/");for(let u=0;u<o.length;u++){const H=o[u];let h=40+(e.sensitive?.25:0);if(H.type===0)u||(r+="/"),r+=H.value.replace(Bt,"\\$&"),h+=40;else if(H.type===1){const{value:b,repeatable:B,optional:w,regexp:V}=H;n.push({name:b,repeatable:B,optional:w});const C=V||$0;if(C!==$0){h+=10;try{new RegExp(`(${C})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+D.message)}}let R=B?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(R=w&&o.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),r+=R,h+=20,w&&(h+=-8),B&&(h+=-20),C===".*"&&(h+=-50)}t.push(h)}s.push(t)}if(e.strict&&e.end){const o=s.length-1;s[o][s[o].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const i=new RegExp(r,e.sensitive?"":"i");function l(o){const t=o.match(i),u={};if(!t)return null;for(let H=1;H<t.length;H++){const h=t[H]||"",b=n[H-1];u[b.name]=h&&b.repeatable?h.split("/"):h}return u}function f(o){let t="",u=!1;for(const H of c){(!u||!t.endsWith("/"))&&(t+="/"),u=!1;for(const h of H)if(h.type===0)t+=h.value;else if(h.type===1){const{value:b,repeatable:B,optional:w}=h,V=b in o?o[b]:"";if(F2(V)&&!B)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=F2(V)?V.join("/"):V;if(!C)if(w)H.length<2&&(t.endsWith("/")?t=t.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);t+=C}}return t||"/"}return{re:i,score:s,keys:n,parse:l,stringify:f}}function Et(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function _t(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const n=Et(s[e],r[e]);if(n)return n;e++}if(Math.abs(r.length-s.length)===1){if(K0(s))return 1;if(K0(r))return-1}return r.length-s.length}function K0(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Dt={type:0,value:""},Ot=/[a-zA-Z0-9_]/;function Ut(c){if(!c)return[[]];if(c==="/")return[[Dt]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(h){throw new Error(`ERR (${e})/"${o}": ${h}`)}let e=0,s=e;const r=[];let n;function i(){n&&r.push(n),n=[]}let l=0,f,o="",t="";function u(){!o||(e===0?n.push({type:0,value:o}):e===1||e===2||e===3?(n.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:o,regexp:t,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),o="")}function H(){o+=f}for(;l<c.length;){if(f=c[l++],f==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:f==="/"?(o&&u(),i()):f===":"?(u(),e=1):H();break;case 4:H(),e=s;break;case 1:f==="("?e=2:Ot.test(f)?H():(u(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--);break;case 2:f===")"?t[t.length-1]=="\\"?t=t.slice(0,-1)+f:e=3:t+=f;break;case 3:u(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--,t="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${o}"`),u(),i(),r}function It(c,a,e){const s=Ft(Ut(c.path),e),r=X(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function qt(c,a){const e=[],s=new Map;a=Q0({strict:!1,end:!0,sensitive:!1},a);function r(t){return s.get(t)}function n(t,u,H){const h=!H,b=Wt(t);b.aliasOf=H&&H.record;const B=Q0(a,t),w=[b];if("alias"in t){const R=typeof t.alias=="string"?[t.alias]:t.alias;for(const D of R)w.push(X({},b,{components:H?H.record.components:b.components,path:D,aliasOf:H?H.record:b}))}let V,C;for(const R of w){const{path:D}=R;if(u&&D[0]!=="/"){const G=u.record.path,i2=G[G.length-1]==="/"?"":"/";R.path=u.record.path+(D&&i2+D)}if(V=It(R,u,B),H?H.alias.push(V):(C=C||V,C!==V&&C.alias.push(V),h&&t.name&&!X0(V)&&i(t.name)),b.children){const G=b.children;for(let i2=0;i2<G.length;i2++)n(G[i2],V,H&&H.children[i2])}H=H||V,f(V)}return C?()=>{i(C)}:m4}function i(t){if(R7(t)){const u=s.get(t);u&&(s.delete(t),e.splice(e.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=e.indexOf(t);u>-1&&(e.splice(u,1),t.record.name&&s.delete(t.record.name),t.children.forEach(i),t.alias.forEach(i))}}function l(){return e}function f(t){let u=0;for(;u<e.length&&_t(t,e[u])>=0&&(t.record.path!==e[u].record.path||!F7(t,e[u]));)u++;e.splice(u,0,t),t.record.name&&!X0(t)&&s.set(t.record.name,t)}function o(t,u){let H,h={},b,B;if("name"in t&&t.name){if(H=s.get(t.name),!H)throw Y1(1,{location:t});B=H.record.name,h=X(Y0(u.params,H.keys.filter(C=>!C.optional).map(C=>C.name)),t.params&&Y0(t.params,H.keys.map(C=>C.name))),b=H.stringify(h)}else if("path"in t)b=t.path,H=e.find(C=>C.re.test(b)),H&&(h=H.parse(b),B=H.record.name);else{if(H=u.name?s.get(u.name):e.find(C=>C.re.test(u.path)),!H)throw Y1(1,{location:t,currentLocation:u});B=H.record.name,h=X({},u.params,t.params),b=H.stringify(h)}const w=[];let V=H;for(;V;)w.unshift(V.record),V=V.parent;return{name:B,path:b,params:h,matched:w,meta:jt(w)}}return c.forEach(t=>n(t)),{addRoute:n,resolve:o,removeRoute:i,getRoutes:l,getRecordMatcher:r}}function Y0(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function Wt(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Gt(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Gt(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function X0(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function jt(c){return c.reduce((a,e)=>X(a,e.meta),{})}function Q0(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function F7(c,a){return a.children.some(e=>e===c||F7(c,e))}const E7=/#/g,$t=/&/g,Kt=/\//g,Yt=/=/g,Xt=/\?/g,_7=/\+/g,Qt=/%5B/g,Jt=/%5D/g,D7=/%5E/g,Zt=/%60/g,O7=/%7B/g,co=/%7C/g,U7=/%7D/g,ao=/%20/g;function e8(c){return encodeURI(""+c).replace(co,"|").replace(Qt,"[").replace(Jt,"]")}function eo(c){return e8(c).replace(O7,"{").replace(U7,"}").replace(D7,"^")}function L6(c){return e8(c).replace(_7,"%2B").replace(ao,"+").replace(E7,"%23").replace($t,"%26").replace(Zt,"`").replace(O7,"{").replace(U7,"}").replace(D7,"^")}function so(c){return L6(c).replace(Yt,"%3D")}function ro(c){return e8(c).replace(E7,"%23").replace(Xt,"%3F")}function no(c){return c==null?"":ro(c).replace(Kt,"%2F")}function u3(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function io(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const n=s[r].replace(_7," "),i=n.indexOf("="),l=u3(i<0?n:n.slice(0,i)),f=i<0?null:u3(n.slice(i+1));if(l in a){let o=a[l];F2(o)||(o=a[l]=[o]),o.push(f)}else a[l]=f}return a}function J0(c){let a="";for(let e in c){const s=c[e];if(e=so(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}(F2(s)?s.map(n=>n&&L6(n)):[s&&L6(s)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function lo(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=F2(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const fo=Symbol(""),Z0=Symbol(""),s8=Symbol(""),r8=Symbol(""),g6=Symbol("");function r4(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function o1(c,a,e,s,r){const n=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const f=u=>{u===!1?l(Y1(4,{from:e,to:a})):u instanceof Error?l(u):Tt(u)?l(Y1(2,{from:a,to:u})):(n&&s.enterCallbacks[r]===n&&typeof u=="function"&&n.push(u),i())},o=c.call(s&&s.instances[r],a,e,f);let t=Promise.resolve(o);c.length<3&&(t=t.then(f)),t.catch(u=>l(u))})}function e6(c,a,e,s){const r=[];for(const n of c)for(const i in n.components){let l=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(to(l)){const o=(l.__vccOpts||l)[a];o&&r.push(o1(o,e,s,n,i))}else{let f=l();r.push(()=>f.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const t=zt(o)?o.default:o;n.components[i]=t;const H=(t.__vccOpts||t)[a];return H&&o1(H,e,s,n,i)()}))}}return r}function to(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function c5(c){const a=Z2(s8),e=Z2(r8),s=l2(()=>a.resolve(U1(c.to))),r=l2(()=>{const{matched:f}=s.value,{length:o}=f,t=f[o-1],u=e.matched;if(!t||!u.length)return-1;const H=u.findIndex(K1.bind(null,t));if(H>-1)return H;const h=a5(f[o-2]);return o>1&&a5(t)===h&&u[u.length-1].path!==h?u.findIndex(K1.bind(null,f[o-2])):H}),n=l2(()=>r.value>-1&&vo(e.params,s.value.params)),i=l2(()=>r.value>-1&&r.value===e.matched.length-1&&P7(e.params,s.value.params));function l(f={}){return uo(f)?a[U1(c.replace)?"replace":"push"](U1(c.to)).catch(m4):Promise.resolve()}return{route:s,href:l2(()=>s.value.href),isActive:n,isExactActive:i,navigate:l}}const oo=y4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:c5,setup(c,{slots:a}){const e=w4(c5(c)),{options:s}=Z2(s8),r=l2(()=>({[e5(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[e5(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:w3("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},n)}}}),mo=oo;function uo(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function vo(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!F2(r)||r.length!==s.length||s.some((n,i)=>n!==r[i]))return!1}return!0}function a5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const e5=(c,a,e)=>c!=null?c:a!=null?a:e,Ho=y4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=Z2(g6),r=l2(()=>c.route||s.value),n=Z2(Z0,0),i=l2(()=>{let o=U1(n);const{matched:t}=r.value;let u;for(;(u=t[o])&&!u.components;)o++;return o}),l=l2(()=>r.value.matched[i.value]);Z4(Z0,l2(()=>i.value+1)),Z4(fo,l),Z4(g6,r);const f=Tl();return f4(()=>[f.value,l.value,c.name],([o,t,u],[H,h,b])=>{t&&(t.instances[u]=o,h&&h!==t&&o&&o===H&&(t.leaveGuards.size||(t.leaveGuards=h.leaveGuards),t.updateGuards.size||(t.updateGuards=h.updateGuards))),o&&t&&(!h||!K1(t,h)||!H)&&(t.enterCallbacks[u]||[]).forEach(B=>B(o))},{flush:"post"}),()=>{const o=r.value,t=c.name,u=l.value,H=u&&u.components[t];if(!H)return s5(e.default,{Component:H,route:o});const h=u.props[t],b=h?h===!0?o.params:typeof h=="function"?h(o):h:null,w=w3(H,X({},b,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(u.instances[t]=null)},ref:f}));return s5(e.default,{Component:w,route:o})||w}}});function s5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const zo=Ho;function ho(c){const a=qt(c.routes,c),e=c.parseQuery||io,s=c.stringifyQuery||J0,r=c.history,n=r4(),i=r4(),l=r4(),f=Rl(l1);let o=l1;R1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const t=c6.bind(null,p=>""+p),u=c6.bind(null,no),H=c6.bind(null,u3);function h(p,T){let N,F;return R7(p)?(N=a.getRecordMatcher(p),F=T):F=p,a.addRoute(F,N)}function b(p){const T=a.getRecordMatcher(p);T&&a.removeRoute(T)}function B(){return a.getRoutes().map(p=>p.record)}function w(p){return!!a.getRecordMatcher(p)}function V(p,T){if(T=X({},T||f.value),typeof p=="string"){const U=a6(e,p,T.path),m=a.resolve({path:U.path},T),v=r.createHref(U.fullPath);return X(U,m,{params:H(m.params),hash:u3(U.hash),redirectedFrom:void 0,href:v})}let N;if("path"in p)N=X({},p,{path:a6(e,p.path,T.path).path});else{const U=X({},p.params);for(const m in U)U[m]==null&&delete U[m];N=X({},p,{params:u(p.params)}),T.params=u(T.params)}const F=a.resolve(N,T),Y=p.hash||"";F.params=t(H(F.params));const a2=pt(s,X({},p,{hash:eo(Y),path:F.path})),W=r.createHref(a2);return X({fullPath:a2,hash:Y,query:s===J0?lo(p.query):p.query||{}},F,{redirectedFrom:void 0,href:W})}function C(p){return typeof p=="string"?a6(e,p,f.value.path):X({},p)}function R(p,T){if(o!==p)return Y1(8,{from:T,to:p})}function D(p){return o2(p)}function G(p){return D(X(C(p),{replace:!0}))}function i2(p){const T=p.matched[p.matched.length-1];if(T&&T.redirect){const{redirect:N}=T;let F=typeof N=="function"?N(p):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=C(F):{path:F},F.params={}),X({query:p.query,hash:p.hash,params:"path"in F?{}:p.params},F)}}function o2(p,T){const N=o=V(p),F=f.value,Y=p.state,a2=p.force,W=p.replace===!0,U=i2(N);if(U)return o2(X(C(U),{state:typeof U=="object"?X({},Y,U.state):Y,force:a2,replace:W}),T||N);const m=N;m.redirectedFrom=T;let v;return!a2&&Mt(s,F,N)&&(v=Y1(16,{to:m,from:F}),A1(F,F,!0,!1)),(v?Promise.resolve(v):m2(m,F)).catch(z=>Q2(z)?Q2(z,2)?z:g2(z):c2(z,m,F)).then(z=>{if(z){if(Q2(z,2))return o2(X({replace:W},C(z.to),{state:typeof z.to=="object"?X({},Y,z.to.state):Y,force:a2}),T||m)}else z=Y2(m,F,!0,W,Y);return _2(m,F,z),z})}function E2(p,T){const N=R(p,T);return N?Promise.reject(N):Promise.resolve()}function m2(p,T){let N;const[F,Y,a2]=Vo(p,T);N=e6(F.reverse(),"beforeRouteLeave",p,T);for(const U of F)U.leaveGuards.forEach(m=>{N.push(o1(m,p,T))});const W=E2.bind(null,p,T);return N.push(W),T1(N).then(()=>{N=[];for(const U of n.list())N.push(o1(U,p,T));return N.push(W),T1(N)}).then(()=>{N=e6(Y,"beforeRouteUpdate",p,T);for(const U of Y)U.updateGuards.forEach(m=>{N.push(o1(m,p,T))});return N.push(W),T1(N)}).then(()=>{N=[];for(const U of p.matched)if(U.beforeEnter&&!T.matched.includes(U))if(F2(U.beforeEnter))for(const m of U.beforeEnter)N.push(o1(m,p,T));else N.push(o1(U.beforeEnter,p,T));return N.push(W),T1(N)}).then(()=>(p.matched.forEach(U=>U.enterCallbacks={}),N=e6(a2,"beforeRouteEnter",p,T),N.push(W),T1(N))).then(()=>{N=[];for(const U of i.list())N.push(o1(U,p,T));return N.push(W),T1(N)}).catch(U=>Q2(U,8)?U:Promise.reject(U))}function _2(p,T,N){for(const F of l.list())F(p,T,N)}function Y2(p,T,N,F,Y){const a2=R(p,T);if(a2)return a2;const W=T===l1,U=R1?history.state:{};N&&(F||W?r.replace(p.fullPath,X({scroll:W&&U&&U.scroll},Y)):r.push(p.fullPath,Y)),f.value=p,A1(p,T,N,W),g2()}let w2;function w1(){w2||(w2=r.listen((p,T,N)=>{if(!a4.listening)return;const F=V(p),Y=i2(F);if(Y){o2(X(Y,{replace:!0}),F).catch(m4);return}o=F;const a2=f.value;R1&&Nt(W0(a2.fullPath,N.delta),y3()),m2(F,a2).catch(W=>Q2(W,12)?W:Q2(W,2)?(o2(W.to,F).then(U=>{Q2(U,20)&&!N.delta&&N.type===L4.pop&&r.go(-1,!1)}).catch(m4),Promise.reject()):(N.delta&&r.go(-N.delta,!1),c2(W,F,a2))).then(W=>{W=W||Y2(F,a2,!1),W&&(N.delta&&!Q2(W,8)?r.go(-N.delta,!1):N.type===L4.pop&&Q2(W,20)&&r.go(-1,!1)),_2(F,a2,W)}).catch(m4)}))}let y1=r4(),k1=r4(),u2;function c2(p,T,N){g2(p);const F=k1.list();return F.length?F.forEach(Y=>Y(p,T,N)):console.error(p),Promise.reject(p)}function Q(){return u2&&f.value!==l1?Promise.resolve():new Promise((p,T)=>{y1.add([p,T])})}function g2(p){return u2||(u2=!p,w1(),y1.list().forEach(([T,N])=>p?N(p):T()),y1.reset()),p}function A1(p,T,N,F){const{scrollBehavior:Y}=c;if(!R1||!Y)return Promise.resolve();const a2=!N&&wt(W0(p.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return s7().then(()=>Y(p,T,a2)).then(W=>W&&St(W)).catch(W=>c2(W,p,T))}const X2=p=>r.go(p);let D2;const N2=new Set,a4={currentRoute:f,listening:!0,addRoute:h,removeRoute:b,hasRoute:w,getRoutes:B,resolve:V,options:c,push:D,replace:G,go:X2,back:()=>X2(-1),forward:()=>X2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:l.add,onError:k1.add,isReady:Q,install(p){const T=this;p.component("RouterLink",mo),p.component("RouterView",zo),p.config.globalProperties.$router=T,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>U1(f)}),R1&&!D2&&f.value===l1&&(D2=!0,D(r.location).catch(Y=>{}));const N={};for(const Y in l1)N[Y]=l2(()=>f.value[Y]);p.provide(s8,T),p.provide(r8,w4(N)),p.provide(g6,f);const F=p.unmount;N2.add(p),p.unmount=function(){N2.delete(p),N2.size<1&&(o=l1,w2&&w2(),w2=null,f.value=l1,D2=!1,u2=!1),F()}}};return a4}function T1(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function Vo(c,a){const e=[],s=[],r=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const l=a.matched[i];l&&(c.matched.find(o=>K1(o,l))?s.push(l):e.push(l));const f=c.matched[i];f&&(a.matched.find(o=>K1(o,f))||r.push(f))}return[e,s,r]}function po(){return Z2(r8)}const I7=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},Mo={props:{page:{type:String,required:!0},icon:{type:String,required:!0},name:{type:String,required:!0}},setup(c){const a=po();return{isActive:l2(()=>a.name===c.page)}}},Co=G1("br",null,null,-1);function Lo(c,a,e,s,r,n){const i=t3("font-awesome-icon"),l=t3("RouterLink");return o4(),S7(l,{class:p3(["NavLink",{active:s.isActive}]),to:{name:e.page}},{default:t7(()=>[p2(i,{icon:e.icon},null,8,["icon"]),Co,w7(Xi(e.name),1)]),_:1},8,["to","class"])}const go=I7(Mo,[["render",Lo]]),xo={data(){return{navJSON:Ht}},components:{NavLink:go}},bo={class:"NavBar"};function So(c,a,e,s,r,n){const i=t3("NavLink");return o4(),V6("div",bo,[(o4(!0),V6(q2,null,vf(r.navJSON,l=>(o4(),S7(i,{page:l.page,icon:l.icon,name:l.name},null,8,["page","icon","name"]))),256))])}const No=I7(xo,[["render",So]]);const wo={class:"PageView"},yo=G1("div",{class:"PageTitle"},[G1("h1",null,"Jonathan Villarreal")],-1),ko={class:"RouterView"},Ao={__name:"App",setup(c){return(a,e)=>{const s=t3("RouterView");return o4(),V6("div",wo,[yo,p2(No),G1("div",ko,[p2(s)])])}}},Po="modulepreload",To=function(c){return"/"+c},r5={},n4=function(a,e,s){return!e||e.length===0?a():Promise.all(e.map(r=>{if(r=To(r),r in r5)return;r5[r]=!0;const n=r.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":Po,n||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),n)return new Promise((f,o)=>{l.addEventListener("load",f),l.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>a())},Ro=[{path:"",name:"home",component:()=>n4(()=>import("./Home.9ea56e31.js"),["assets/Home.9ea56e31.js","assets/Home.cd1827fc.css"])},{path:"/school",name:"school",component:()=>n4(()=>import("./School.28ee4d08.js"),["assets/School.28ee4d08.js","assets/School.a130a7d1.css"])},{path:"/work",name:"work",component:()=>n4(()=>import("./Work.2c8719d2.js"),["assets/Work.2c8719d2.js","assets/Work.e259a974.css"])},{path:"/contact",name:"contact",component:()=>n4(()=>import("./Contact.2f4e9ca7.js"),["assets/Contact.2f4e9ca7.js","assets/Contact.842a94b5.css"])},{path:"/comments",name:"comments",component:()=>n4(()=>import("./Comments.250d02e2.js"),["assets/Comments.250d02e2.js","assets/Comments.50697f04.css"])}],Bo=ho({routes:Ro,history:Pt()});function n5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?n5(Object(e),!0).forEach(function(s){v2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):n5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function v3(c){return v3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v3(c)}function Fo(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function i5(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Eo(c,a,e){return a&&i5(c.prototype,a),e&&i5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function n8(c,a){return Do(c)||Uo(c,a)||q7(c,a)||qo()}function k4(c){return _o(c)||Oo(c)||q7(c)||Io()}function _o(c){if(Array.isArray(c))return x6(c)}function Do(c){if(Array.isArray(c))return c}function Oo(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Uo(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,n=!1,i,l;try{for(e=e.call(c);!(r=(i=e.next()).done)&&(s.push(i.value),!(a&&s.length===a));r=!0);}catch(f){n=!0,l=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(n)throw l}}return s}}function q7(c,a){if(!!c){if(typeof c=="string")return x6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return x6(c,a)}}function x6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Io(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l5=function(){},i8={},W7={},G7=null,j7={mark:l5,measure:l5};try{typeof window<"u"&&(i8=window),typeof document<"u"&&(W7=document),typeof MutationObserver<"u"&&(G7=MutationObserver),typeof performance<"u"&&(j7=performance)}catch{}var Wo=i8.navigator||{},f5=Wo.userAgent,t5=f5===void 0?"":f5,H1=i8,n2=W7,o5=G7,q4=j7;H1.document;var n1=!!n2.documentElement&&!!n2.head&&typeof n2.addEventListener=="function"&&typeof n2.createElement=="function",$7=~t5.indexOf("MSIE")||~t5.indexOf("Trident/"),W4,G4,j4,$4,K4,a1="___FONT_AWESOME___",b6=16,K7="fa",Y7="svg-inline--fa",S1="data-fa-i2svg",S6="data-fa-pseudo-element",Go="data-fa-pseudo-element-pending",l8="data-prefix",f8="data-icon",m5="fontawesome-i2svg",jo="async",$o=["HTML","HEAD","STYLE","SCRIPT"],X7=function(){try{return!0}catch{return!1}}(),r2="classic",t2="sharp",t8=[r2,t2];function A4(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[r2]}})}var g4=A4((W4={},v2(W4,r2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),v2(W4,t2,{fa:"solid",fass:"solid","fa-solid":"solid"}),W4)),x4=A4((G4={},v2(G4,r2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v2(G4,t2,{solid:"fass"}),G4)),b4=A4((j4={},v2(j4,r2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v2(j4,t2,{fass:"fa-solid"}),j4)),Ko=A4(($4={},v2($4,r2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v2($4,t2,{"fa-solid":"fass"}),$4)),Yo=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Q7="fa-layers-text",Xo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qo=A4((K4={},v2(K4,r2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v2(K4,t2,{900:"fass"}),K4)),J7=[1,2,3,4,5,6,7,8,9,10],Jo=J7.concat([11,12,13,14,15,16,17,18,19,20]),Zo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S4=new Set;Object.keys(x4[r2]).map(S4.add.bind(S4));Object.keys(x4[t2]).map(S4.add.bind(S4));var cm=[].concat(t8,k4(S4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L1.GROUP,L1.SWAP_OPACITY,L1.PRIMARY,L1.SECONDARY]).concat(J7.map(function(c){return"".concat(c,"x")})).concat(Jo.map(function(c){return"w-".concat(c)})),v4=H1.FontAwesomeConfig||{};function am(c){var a=n2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function em(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(n2&&typeof n2.querySelector=="function"){var sm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sm.forEach(function(c){var a=n8(c,2),e=a[0],s=a[1],r=em(am(e));r!=null&&(v4[s]=r)})}var Z7={styleDefault:"solid",familyDefault:"classic",cssPrefix:K7,replacementClass:Y7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};v4.familyPrefix&&(v4.cssPrefix=v4.familyPrefix);var X1=k(k({},Z7),v4);X1.autoReplaceSvg||(X1.observeMutations=!1);var P={};Object.keys(Z7).forEach(function(c){Object.defineProperty(P,c,{enumerable:!0,set:function(e){X1[c]=e,H4.forEach(function(s){return s(P)})},get:function(){return X1[c]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(a){X1.cssPrefix=a,H4.forEach(function(e){return e(P)})},get:function(){return X1.cssPrefix}});H1.FontAwesomeConfig=P;var H4=[];function rm(c){return H4.push(c),function(){H4.splice(H4.indexOf(c),1)}}var f1=b6,$2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nm(c){if(!(!c||!n1)){var a=n2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=n2.head.childNodes,s=null,r=e.length-1;r>-1;r--){var n=e[r],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=n)}return n2.head.insertBefore(a,s),c}}var im="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N4(){for(var c=12,a="";c-- >0;)a+=im[Math.random()*62|0];return a}function c4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function o8(c){return c.classList?c4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function cc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lm(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(cc(c[e]),'" ')},"").trim()}function k3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function m8(c){return c.size!==$2.size||c.x!==$2.x||c.y!==$2.y||c.rotate!==$2.rotate||c.flipX||c.flipY}function fm(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(n," ").concat(i," ").concat(l)},o={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:f,path:o}}function tm(c){var a=c.transform,e=c.width,s=e===void 0?b6:e,r=c.height,n=r===void 0?b6:r,i=c.startCentered,l=i===void 0?!1:i,f="";return l&&$7?f+="translate(".concat(a.x/f1-s/2,"em, ").concat(a.y/f1-n/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/f1,"em), calc(-50% + ").concat(a.y/f1,"em)) "):f+="translate(".concat(a.x/f1,"em, ").concat(a.y/f1,"em) "),f+="scale(".concat(a.size/f1*(a.flipX?-1:1),", ").concat(a.size/f1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var om=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ac(){var c=K7,a=Y7,e=P.cssPrefix,s=P.replacementClass,r=om;if(e!==c||s!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");r=r.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(l,".".concat(s))}return r}var u5=!1;function s6(){P.autoAddCss&&!u5&&(nm(ac()),u5=!0)}var mm={mixout:function(){return{dom:{css:ac,insertCss:s6}}},hooks:function(){return{beforeDOMElementCreation:function(){s6()},beforeI2svg:function(){s6()}}}},e1=H1||{};e1[a1]||(e1[a1]={});e1[a1].styles||(e1[a1].styles={});e1[a1].hooks||(e1[a1].hooks={});e1[a1].shims||(e1[a1].shims=[]);var T2=e1[a1],ec=[],um=function c(){n2.removeEventListener("DOMContentLoaded",c),H3=1,ec.map(function(a){return a()})},H3=!1;n1&&(H3=(n2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n2.readyState),H3||n2.addEventListener("DOMContentLoaded",um));function vm(c){!n1||(H3?setTimeout(c,0):ec.push(c))}function P4(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,n=r===void 0?[]:r;return typeof c=="string"?cc(c):"<".concat(a," ").concat(lm(s),">").concat(n.map(P4).join(""),"</").concat(a,">")}function v5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Hm=function(a,e){return function(s,r,n,i){return a.call(e,s,r,n,i)}},r6=function(a,e,s,r){var n=Object.keys(a),i=n.length,l=r!==void 0?Hm(e,r):e,f,o,t;for(s===void 0?(f=1,t=a[n[0]]):(f=0,t=s);f<i;f++)o=n[f],t=l(t,a[o],o,a);return t};function zm(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((r&1023)<<10)+(n&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function N6(c){var a=zm(c);return a.length===1?a[0].toString(16):null}function hm(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function H5(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function w6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,n=H5(a);typeof T2.hooks.addPack=="function"&&!r?T2.hooks.addPack(c,H5(a)):T2.styles[c]=k(k({},T2.styles[c]||{}),n),c==="fas"&&w6("fa",a)}var Y4,X4,Q4,F1=T2.styles,Vm=T2.shims,pm=(Y4={},v2(Y4,r2,Object.values(b4[r2])),v2(Y4,t2,Object.values(b4[t2])),Y4),u8=null,sc={},rc={},nc={},ic={},lc={},Mm=(X4={},v2(X4,r2,Object.keys(g4[r2])),v2(X4,t2,Object.keys(g4[t2])),X4);function dm(c){return~cm.indexOf(c)}function Cm(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!dm(r)?r:null}var fc=function(){var a=function(n){return r6(F1,function(i,l,f){return i[f]=r6(l,n,{}),i},{})};sc=a(function(r,n,i){if(n[3]&&(r[n[3]]=i),n[2]){var l=n[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=i})}return r}),rc=a(function(r,n,i){if(r[i]=i,n[2]){var l=n[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=i})}return r}),lc=a(function(r,n,i){var l=n[2];return r[i]=i,l.forEach(function(f){r[f]=i}),r});var e="far"in F1||P.autoFetchSvg,s=r6(Vm,function(r,n){var i=n[0],l=n[1],f=n[2];return l==="far"&&!e&&(l="fas"),typeof i=="string"&&(r.names[i]={prefix:l,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});nc=s.names,ic=s.unicodes,u8=A3(P.styleDefault,{family:P.familyDefault})};rm(function(c){u8=A3(c.styleDefault,{family:P.familyDefault})});fc();function v8(c,a){return(sc[c]||{})[a]}function Lm(c,a){return(rc[c]||{})[a]}function g1(c,a){return(lc[c]||{})[a]}function tc(c){return nc[c]||{prefix:null,iconName:null}}function gm(c){var a=ic[c],e=v8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function z1(){return u8}var H8=function(){return{prefix:null,iconName:null,rest:[]}};function A3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?r2:e,r=g4[s][c],n=x4[s][c]||x4[s][r],i=c in T2.styles?c:null;return n||i||null}var z5=(Q4={},v2(Q4,r2,Object.keys(b4[r2])),v2(Q4,t2,Object.keys(b4[t2])),Q4);function P3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,n=(a={},v2(a,r2,"".concat(P.cssPrefix,"-").concat(r2)),v2(a,t2,"".concat(P.cssPrefix,"-").concat(t2)),a),i=null,l=r2;(c.includes(n[r2])||c.some(function(o){return z5[r2].includes(o)}))&&(l=r2),(c.includes(n[t2])||c.some(function(o){return z5[t2].includes(o)}))&&(l=t2);var f=c.reduce(function(o,t){var u=Cm(P.cssPrefix,t);if(F1[t]?(t=pm[l].includes(t)?Ko[l][t]:t,i=t,o.prefix=t):Mm[l].indexOf(t)>-1?(i=t,o.prefix=A3(t,{family:l})):u?o.iconName=u:t!==P.replacementClass&&t!==n[r2]&&t!==n[t2]&&o.rest.push(t),!r&&o.prefix&&o.iconName){var H=i==="fa"?tc(o.iconName):{},h=g1(o.prefix,o.iconName);H.prefix&&(i=null),o.iconName=H.iconName||h||o.iconName,o.prefix=H.prefix||o.prefix,o.prefix==="far"&&!F1.far&&F1.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},H8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===t2&&(F1.fass||P.autoFetchSvg)&&(f.prefix="fass",f.iconName=g1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=z1()||"fas"),f}var xm=function(){function c(){Fo(this,c),this.definitions={}}return Eo(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(l){e.definitions[l]=k(k({},e.definitions[l]||{}),i[l]),w6(l,i[l]);var f=b4[r2][l];f&&w6(f,i[l]),fc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(n){var i=r[n],l=i.prefix,f=i.iconName,o=i.icon,t=o[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(u){typeof u=="string"&&(e[l][u]=o)}),e[l][f]=o}),e}}]),c}(),h5=[],E1={},q1={},bm=Object.keys(q1);function Sm(c,a){var e=a.mixoutsTo;return h5=c,E1={},Object.keys(q1).forEach(function(s){bm.indexOf(s)===-1&&delete q1[s]}),h5.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),v3(r[i])==="object"&&Object.keys(r[i]).forEach(function(l){e[i]||(e[i]={}),e[i][l]=r[i][l]})}),s.hooks){var n=s.hooks();Object.keys(n).forEach(function(i){E1[i]||(E1[i]=[]),E1[i].push(n[i])})}s.provides&&s.provides(q1)}),e}function y6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var n=E1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(s))}),a}function N1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=E1[c]||[];r.forEach(function(n){n.apply(null,e)})}function s1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return q1[c]?q1[c].apply(null,a):void 0}function k6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||z1();if(!!a)return a=g1(e,a)||a,v5(oc.definitions,e,a)||v5(T2.styles,e,a)}var oc=new xm,Nm=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,N1("noAuto")},wm={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n1?(N1("beforeI2svg",a),s1("pseudoElements2svg",a),s1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,vm(function(){km({autoReplaceSvgRoot:e}),N1("watch",a)})}},ym={icon:function(a){if(a===null)return null;if(v3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:g1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=A3(a[0]);return{prefix:s,iconName:g1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(P.cssPrefix,"-"))>-1||a.match(Yo))){var r=P3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||z1(),iconName:g1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var n=z1();return{prefix:n,iconName:g1(n,a)||a}}}},S2={noAuto:Nm,config:P,dom:wm,parse:ym,library:oc,findIconDefinition:k6,toHtml:P4},km=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?n2:e;(Object.keys(T2.styles).length>0||P.autoFetchSvg)&&n1&&P.autoReplaceSvg&&S2.dom.i2svg({node:s})};function T3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return P4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!n1){var s=n2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Am(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,n=c.styles,i=c.transform;if(m8(i)&&e.found&&!s.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};r.style=k3(k(k({},n),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Pm(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(P.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:i}),children:s}]}]}function z8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,n=c.iconName,i=c.transform,l=c.symbol,f=c.title,o=c.maskId,t=c.titleId,u=c.extra,H=c.watchable,h=H===void 0?!1:H,b=s.found?s:e,B=b.width,w=b.height,V=r==="fak",C=[P.replacementClass,n?"".concat(P.cssPrefix,"-").concat(n):""].filter(function(m2){return u.classes.indexOf(m2)===-1}).filter(function(m2){return m2!==""||!!m2}).concat(u.classes).join(" "),R={children:[],attributes:k(k({},u.attributes),{},{"data-prefix":r,"data-icon":n,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(B," ").concat(w)})},D=V&&!~u.classes.indexOf("fa-fw")?{width:"".concat(B/w*16*.0625,"em")}:{};h&&(R.attributes[S1]=""),f&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(t||N4())},children:[f]}),delete R.attributes.title);var G=k(k({},R),{},{prefix:r,iconName:n,main:e,mask:s,maskId:o,transform:i,symbol:l,styles:k(k({},D),u.styles)}),i2=s.found&&e.found?s1("generateAbstractMask",G)||{children:[],attributes:{}}:s1("generateAbstractIcon",G)||{children:[],attributes:{}},o2=i2.children,E2=i2.attributes;return G.children=o2,G.attributes=E2,l?Pm(G):Am(G)}function V5(c){var a=c.content,e=c.width,s=c.height,r=c.transform,n=c.title,i=c.extra,l=c.watchable,f=l===void 0?!1:l,o=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});f&&(o[S1]="");var t=k({},i.styles);m8(r)&&(t.transform=tm({transform:r,startCentered:!0,width:e,height:s}),t["-webkit-transform"]=t.transform);var u=k3(t);u.length>0&&(o.style=u);var H=[];return H.push({tag:"span",attributes:o,children:[a]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function Tm(c){var a=c.content,e=c.title,s=c.extra,r=k(k(k({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),n=k3(s.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var n6=T2.styles;function A6(c){var a=c[0],e=c[1],s=c.slice(4),r=n8(s,1),n=r[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(L1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(L1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(L1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Rm={found:!1,width:512,height:512};function Bm(c,a){!X7&&!P.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function P6(c,a){var e=a;return a==="fa"&&P.styleDefault!==null&&(a=z1()),new Promise(function(s,r){if(s1("missingIconAbstract"),e==="fa"){var n=tc(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&n6[a]&&n6[a][c]){var i=n6[a][c];return s(A6(i))}Bm(c,a),s(k(k({},Rm),{},{icon:P.showMissingIcons&&c?s1("missingIconAbstract")||{}:{}}))})}var p5=function(){},T6=P.measurePerformance&&q4&&q4.mark&&q4.measure?q4:{mark:p5,measure:p5},l4='FA "6.2.0"',Fm=function(a){return T6.mark("".concat(l4," ").concat(a," begins")),function(){return mc(a)}},mc=function(a){T6.mark("".concat(l4," ").concat(a," ends")),T6.measure("".concat(l4," ").concat(a),"".concat(l4," ").concat(a," begins"),"".concat(l4," ").concat(a," ends"))},h8={begin:Fm,end:mc},s3=function(){};function M5(c){var a=c.getAttribute?c.getAttribute(S1):null;return typeof a=="string"}function Em(c){var a=c.getAttribute?c.getAttribute(l8):null,e=c.getAttribute?c.getAttribute(f8):null;return a&&e}function _m(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(P.replacementClass)}function Dm(){if(P.autoReplaceSvg===!0)return r3.replace;var c=r3[P.autoReplaceSvg];return c||r3.replace}function Om(c){return n2.createElementNS("http://www.w3.org/2000/svg",c)}function Um(c){return n2.createElement(c)}function uc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Om:Um:e;if(typeof c=="string")return n2.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){r.appendChild(uc(i,{ceFn:s}))}),r}function Im(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var r3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(uc(r),e)}),e.getAttribute(S1)===null&&P.keepOriginalSource){var s=n2.createComment(Im(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~o8(e).indexOf(P.replacementClass))return r3.replace(a);var r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var n=s[0].attributes.class.split(" ").reduce(function(l,f){return f===P.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=s.map(function(l){return P4(l)}).join(`
`);e.setAttribute(S1,""),e.innerHTML=i}};function d5(c){c()}function vc(c,a){var e=typeof a=="function"?a:s3;if(c.length===0)e();else{var s=d5;P.mutateApproach===jo&&(s=H1.requestAnimationFrame||d5),s(function(){var r=Dm(),n=h8.begin("mutate");c.map(r),n(),e()})}}var V8=!1;function Hc(){V8=!0}function R6(){V8=!1}var z3=null;function C5(c){if(!!o5&&!!P.observeMutations){var a=c.treeCallback,e=a===void 0?s3:a,s=c.nodeCallback,r=s===void 0?s3:s,n=c.pseudoElementsCallback,i=n===void 0?s3:n,l=c.observeMutationsRoot,f=l===void 0?n2:l;z3=new o5(function(o){if(!V8){var t=z1();c4(o).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!M5(u.addedNodes[0])&&(P.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&P.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&M5(u.target)&&~Zo.indexOf(u.attributeName))if(u.attributeName==="class"&&Em(u.target)){var H=P3(o8(u.target)),h=H.prefix,b=H.iconName;u.target.setAttribute(l8,h||t),b&&u.target.setAttribute(f8,b)}else _m(u.target)&&r(u.target)})}}),n1&&z3.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qm(){!z3||z3.disconnect()}function Wm(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var n=r.split(":"),i=n[0],l=n.slice(1);return i&&l.length>0&&(s[i]=l.join(":").trim()),s},{})),e}function Gm(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=P3(o8(c));return r.prefix||(r.prefix=z1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Lm(r.prefix,c.innerText)||v8(r.prefix,N6(c.innerText))),!r.iconName&&P.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function jm(c){var a=c4(c.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return P.autoA11y&&(e?a["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(s||N4()):(a["aria-hidden"]="true",a.focusable="false")),a}function $m(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Gm(c),s=e.iconName,r=e.prefix,n=e.rest,i=jm(c),l=y6("parseNodeAttributes",{},c),f=a.styleParser?Wm(c):[];return k({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:$2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:f,attributes:i}},l)}var Km=T2.styles;function zc(c){var a=P.autoReplaceSvg==="nest"?L5(c,{styleParser:!1}):L5(c);return~a.extra.classes.indexOf(Q7)?s1("generateLayersText",c,a):s1("generateSvgReplacementMutation",c,a)}var h1=new Set;t8.map(function(c){h1.add("fa-".concat(c))});Object.keys(g4[r2]).map(h1.add.bind(h1));Object.keys(g4[t2]).map(h1.add.bind(h1));h1=k4(h1);function g5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n1)return Promise.resolve();var e=n2.documentElement.classList,s=function(u){return e.add("".concat(m5,"-").concat(u))},r=function(u){return e.remove("".concat(m5,"-").concat(u))},n=P.autoFetchSvg?h1:t8.map(function(t){return"fa-".concat(t)}).concat(Object.keys(Km));n.includes("fa")||n.push("fa");var i=[".".concat(Q7,":not([").concat(S1,"])")].concat(n.map(function(t){return".".concat(t,":not([").concat(S1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var l=[];try{l=c4(c.querySelectorAll(i))}catch{}if(l.length>0)s("pending"),r("complete");else return Promise.resolve();var f=h8.begin("onTree"),o=l.reduce(function(t,u){try{var H=zc(u);H&&t.push(H)}catch(h){X7||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,u){Promise.all(o).then(function(H){vc(H,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(H){f(),u(H)})})}function Ym(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zc(c).then(function(e){e&&vc([e],a)})}function Xm(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:k6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:k6(r||{})),c(s,k(k({},e),{},{mask:r}))}}var Qm=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?$2:s,n=e.symbol,i=n===void 0?!1:n,l=e.mask,f=l===void 0?null:l,o=e.maskId,t=o===void 0?null:o,u=e.title,H=u===void 0?null:u,h=e.titleId,b=h===void 0?null:h,B=e.classes,w=B===void 0?[]:B,V=e.attributes,C=V===void 0?{}:V,R=e.styles,D=R===void 0?{}:R;if(!!a){var G=a.prefix,i2=a.iconName,o2=a.icon;return T3(k({type:"icon"},a),function(){return N1("beforeDOMElementCreation",{iconDefinition:a,params:e}),P.autoA11y&&(H?C["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(b||N4()):(C["aria-hidden"]="true",C.focusable="false")),z8({icons:{main:A6(o2),mask:f?A6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:i2,transform:k(k({},$2),r),symbol:i,title:H,maskId:t,titleId:b,extra:{attributes:C,styles:D,classes:w}})})}},Jm={mixout:function(){return{icon:Xm(Qm)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=g5,e.nodeCallback=Ym,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?n2:s,n=e.callback,i=n===void 0?function(){}:n;return g5(r,i)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,n=s.title,i=s.titleId,l=s.prefix,f=s.transform,o=s.symbol,t=s.mask,u=s.maskId,H=s.extra;return new Promise(function(h,b){Promise.all([P6(r,l),t.iconName?P6(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var w=n8(B,2),V=w[0],C=w[1];h([e,z8({icons:{main:V,mask:C},prefix:l,iconName:r,transform:f,symbol:o,maskId:u,title:n,titleId:i,extra:H,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,n=e.main,i=e.transform,l=e.styles,f=k3(l);f.length>0&&(r.style=f);var o;return m8(i)&&(o=s1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),s.push(o||n.icon),{children:s,attributes:r}}}},Zm={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,n=r===void 0?[]:r;return T3({type:"layer"},function(){N1("beforeDOMElementCreation",{assembler:e,params:s});var i=[];return e(function(l){Array.isArray(l)?l.map(function(f){i=i.concat(f.abstract)}):i=i.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(k4(n)).join(" ")},children:i}]})}}}},cu={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,n=r===void 0?null:r,i=s.classes,l=i===void 0?[]:i,f=s.attributes,o=f===void 0?{}:f,t=s.styles,u=t===void 0?{}:t;return T3({type:"counter",content:e},function(){return N1("beforeDOMElementCreation",{content:e,params:s}),Tm({content:e.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(k4(l))}})})}}}},au={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,n=r===void 0?$2:r,i=s.title,l=i===void 0?null:i,f=s.classes,o=f===void 0?[]:f,t=s.attributes,u=t===void 0?{}:t,H=s.styles,h=H===void 0?{}:H;return T3({type:"text",content:e},function(){return N1("beforeDOMElementCreation",{content:e,params:s}),V5({content:e,transform:k(k({},$2),n),title:l,extra:{attributes:u,styles:h,classes:["".concat(P.cssPrefix,"-layers-text")].concat(k4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,n=s.transform,i=s.extra,l=null,f=null;if($7){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/o,f=t.height/o}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,V5({content:e.innerHTML,width:l,height:f,transform:n,title:r,extra:i,watchable:!0})])}}},eu=new RegExp('"',"ug"),x5=[1105920,1112319];function su(c){var a=c.replace(eu,""),e=hm(a,0),s=e>=x5[0]&&e<=x5[1],r=a.length===2?a[0]===a[1]:!1;return{value:N6(r?a[0]:a),isSecondary:s||r}}function b5(c,a){var e="".concat(Go).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var n=c4(c.children),i=n.filter(function(o2){return o2.getAttribute(S6)===a})[0],l=H1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(Xo),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(i&&!f)return c.removeChild(i),s();if(f&&t!=="none"&&t!==""){var u=l.getPropertyValue("content"),H=~["Sharp"].indexOf(f[2])?t2:r2,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?x4[H][f[2].toLowerCase()]:Qo[H][o],b=su(u),B=b.value,w=b.isSecondary,V=f[0].startsWith("FontAwesome"),C=v8(h,B),R=C;if(V){var D=gm(B);D.iconName&&D.prefix&&(C=D.iconName,h=D.prefix)}if(C&&!w&&(!i||i.getAttribute(l8)!==h||i.getAttribute(f8)!==R)){c.setAttribute(e,R),i&&c.removeChild(i);var G=$m(),i2=G.extra;i2.attributes[S6]=a,P6(C,h).then(function(o2){var E2=z8(k(k({},G),{},{icons:{main:o2,mask:H8()},prefix:h,iconName:R,extra:i2,watchable:!0})),m2=n2.createElement("svg");a==="::before"?c.insertBefore(m2,c.firstChild):c.appendChild(m2),m2.outerHTML=E2.map(function(_2){return P4(_2)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function ru(c){return Promise.all([b5(c,"::before"),b5(c,"::after")])}function nu(c){return c.parentNode!==document.head&&!~$o.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(S6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function S5(c){if(!!n1)return new Promise(function(a,e){var s=c4(c.querySelectorAll("*")).filter(nu).map(ru),r=h8.begin("searchPseudoElements");Hc(),Promise.all(s).then(function(){r(),R6(),a()}).catch(function(){r(),R6(),e()})})}var iu={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=S5,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?n2:s;P.searchPseudoElements&&S5(r)}}},N5=!1,lu={mixout:function(){return{dom:{unwatch:function(){Hc(),N5=!0}}}},hooks:function(){return{bootstrap:function(){C5(y6("mutationObserverCallbacks",{}))},noAuto:function(){qm()},watch:function(e){var s=e.observeMutationsRoot;N5?R6():C5(y6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},w5=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var n=r.toLowerCase().split("-"),i=n[0],l=n.slice(1).join("-");if(i&&l==="h")return s.flipX=!0,s;if(i&&l==="v")return s.flipY=!0,s;if(l=parseFloat(l),isNaN(l))return s;switch(i){case"grow":s.size=s.size+l;break;case"shrink":s.size=s.size-l;break;case"left":s.x=s.x-l;break;case"right":s.x=s.x+l;break;case"up":s.y=s.y-l;break;case"down":s.y=s.y+l;break;case"rotate":s.rotate=s.rotate+l;break}return s},e)},fu={mixout:function(){return{parse:{transform:function(e){return w5(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=w5(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,n=e.containerWidth,i=e.iconWidth,l={transform:"translate(".concat(n/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),t="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(o," ").concat(t)},H={transform:"translate(".concat(i/2*-1," -256)")},h={outer:l,inner:u,path:H};return{tag:"g",attributes:k({},h.outer),children:[{tag:"g",attributes:k({},h.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:k(k({},s.icon.attributes),h.path)}]}]}}}},i6={x:0,y:0,width:"100%",height:"100%"};function y5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function tu(c){return c.tag==="g"?c.children:[c]}var ou={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),n=r?P3(r.split(" ").map(function(i){return i.trim()})):H8();return n.prefix||(n.prefix=z1()),e.mask=n,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,n=e.main,i=e.mask,l=e.maskId,f=e.transform,o=n.width,t=n.icon,u=i.width,H=i.icon,h=fm({transform:f,containerWidth:u,iconWidth:o}),b={tag:"rect",attributes:k(k({},i6),{},{fill:"white"})},B=t.children?{children:t.children.map(y5)}:{},w={tag:"g",attributes:k({},h.inner),children:[y5(k({tag:t.tag,attributes:k(k({},t.attributes),h.path)},B))]},V={tag:"g",attributes:k({},h.outer),children:[w]},C="mask-".concat(l||N4()),R="clip-".concat(l||N4()),D={tag:"mask",attributes:k(k({},i6),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,V]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:tu(H)},D]};return s.push(G,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(C,")")},i6)}),{children:s,attributes:r}}}},mu={provides:function(a){var e=!1;H1.matchMedia&&(e=H1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=k(k({},n),{},{attributeName:"opacity"}),l={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:k(k({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},i),{},{values:"1;0;1;1;0;1;"})}),s.push(l),s.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:k(k({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},uu={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return e.symbol=n,e}}}},vu=[mm,Jm,Zm,cu,au,iu,lu,fu,ou,mu,uu];Sm(vu,{mixoutsTo:S2});S2.noAuto;var hc=S2.config,Hu=S2.library;S2.dom;var h3=S2.parse;S2.findIconDefinition;S2.toHtml;var zu=S2.icon;S2.layer;var hu=S2.text;S2.counter;function k5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function A2(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?k5(Object(e),!0).forEach(function(s){C2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):k5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function V3(c){return V3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},V3(c)}function C2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function Vu(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,n;for(n=0;n<s.length;n++)r=s[n],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function pu(c,a){if(c==null)return{};var e=Vu(c,a),s,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);for(r=0;r<n.length;r++)s=n[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function B6(c){return Mu(c)||du(c)||Cu(c)||Lu()}function Mu(c){if(Array.isArray(c))return F6(c)}function du(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Cu(c,a){if(!!c){if(typeof c=="string")return F6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return F6(c,a)}}function F6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Lu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.