function k(){}function F(t){return t()}function E(){return Object.create(null)}function m(t){t.forEach(F)}function T(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function q(t){return Object.keys(t).length===0}function ct(t,n){t.appendChild(n)}function ft(t,n,e){t.insertBefore(n,e||null)}function L(t){t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function dt(){return z(" ")}function gt(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function B(t){return Array.from(t.childNodes)}let g;function d(t){g=t}function D(){if(!g)throw new Error("Function called outside component initialization");return g}function _t(t){D().$$.on_mount.push(t)}const l=[],S=[],_=[],j=[],G=Promise.resolve();let v=!1;function I(){v||(v=!0,G.then(O))}function x(t){_.push(t)}const p=new Set;let h=0;function O(){const t=g;do{for(;h<l.length;){const n=l[h];h++,d(n),J(n.$$)}for(d(null),l.length=0,h=0;S.length;)S.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];p.has(e)||(p.add(e),e())}_.length=0}while(l.length);for(;j.length;)j.pop()();v=!1,p.clear(),d(t)}function J(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const b=new Set;let K;function Q(t,n){t&&t.i&&(b.delete(t),t.i(n))}function bt(t,n,e,r){if(t&&t.o){if(b.has(t))return;b.add(t),K.c.push(()=>{b.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const mt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function pt(t){t&&t.c()}function U(t,n,e,r){const{fragment:i,on_mount:o,on_destroy:s,after_update:c}=t.$$;i&&i.m(n,e),r||x(()=>{const u=o.map(F).filter(T);s?s.push(...u):m(u),t.$$.on_mount=[]}),c.forEach(x)}function V(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){t.$$.dirty[0]===-1&&(l.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function vt(t,n,e,r,i,o,s,c=[-1]){const u=g;d(t);const a=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:i,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:E(),dirty:c,skip_bound:!1,root:n.target||u.$$.root};s&&s(a.root);let y=!1;if(a.ctx=e?e(t,n.props||{},(f,w,...C)=>{const M=C.length?C[0]:w;return a.ctx&&i(a.ctx[f],a.ctx[f]=M)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](M),y&&W(t,f)),w}):[],a.update(),y=!0,m(a.before_update),a.fragment=r?r(a.ctx):!1,n.target){if(n.hydrate){const f=B(n.target);a.fragment&&a.fragment.l(f),f.forEach(L)}else a.fragment&&a.fragment.c();n.intro&&Q(t.$$.fragment),U(t,n.target,n.anchor,n.customElement),O()}d(u)}class xt{$destroy(){V(this,1),this.$destroy=k}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}$set(n){this.$$set&&!q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var X={},A={},H={},$={};function Y(t,n,e,r){var i=[],o=t.slice(),s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];r&&(o.push(r[0]),s.push(r[1]-r[0]));for(var c=0;c<e;c++){var u=1/Math.max(e-1,1),a=[Math.round(o[0]+c*s[0]*u),Math.round(o[1]+c*s[1]*u),Math.round(o[2]+c*s[2]*u),r?o[3]+c*s[3]*u:1];i.push(a)}return i}$.createColors=Y;var R={},Z=$;function tt(t,n,e){if(n<t.length)throw new Error("Requires at least "+t.length+" shades.");for(var r=[],i=[],o=0;o<t.length;o++)i.push(Math.round(t[o].index*n));for(var o=0;o<t.length-1;o++){var s=i[o+1]-i[o],c=t[o].rgb,u=t[o+1].rgb;r.push.apply(r,Z.createColors(c,u,s,e))}return r}R.createColorsFromMap=tt;var N={};function nt(t){for(var n="#",e=0;e<3;e++)n+=et(t[e]);return n}N.rgbHex=nt;function et(t){var n=(+t).toString(16);return n.length<2?"0"+n:n}var P={};function rt(t){return"rgba("+t.join(",")+")"}P.rgbaString=rt;(function(t){function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}n($),n(R),n(N),n(P)})(H);var ot=H,at=[{index:0,rgb:[150,0,90]},{index:.125,rgb:[0,0,200]},{index:.25,rgb:[0,25,255]},{index:.375,rgb:[0,152,255]},{index:.5,rgb:[44,255,150]},{index:.625,rgb:[151,255,0]},{index:.75,rgb:[255,234,0]},{index:.875,rgb:[255,111,0]},{index:1,rgb:[255,0,0]}];function it(t,n){return ot.createColorsFromMap(at,t,n)}A.createRainbow=it;(function(t){function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}n(A)})(X);function $t(t){let n="#";for(let e=0;e<3;e++)n+=ut(t[e]);return n}function ut(t){const n=(+t).toString(16);return n.length<2?"0"+n:n}export{xt as S,ht as a,ft as b,ct as c,L as d,lt as e,S as f,mt as g,X as h,vt as i,pt as j,dt as k,gt as l,U as m,k as n,_t as o,bt as p,V as q,$t as r,st as s,Q as t};