/*! (c) Philipp König under GPL-3.0 */
(()=>{"use strict";if(window.jsu)return!1;let e=[],t="isDefined",n="forEach",s={["delay"]:(e=0)=>new Promise(t=>{setTimeout(t,e)}),["xhr"]:(t,n={})=>new Promise((s,r)=>{let i=new XMLHttpRequest,l=e.push({url:t,xhr:i})-1;i.open(n.method||"GET",t,!0),["load","error","timeout","abort"].forEach(t=>{i.addEventListener(t,()=>{e[l]=null,"load"===t&&i.status<400?s(i):r(i)})});let o=null;n.data&&(o=new FormData,Object.entries(n.data).forEach(([e,t])=>{"object"==typeof t&&(t=JSON.stringify(t)),o.append(e,t)})),Object.entries(n).forEach(([e,t])=>{"method"!==e&&"data"!==e&&(i[e]=t)}),i.send(o)}),["cancelXhr"]:(t=null)=>{e.forEach(e=>{e&&e.xhr&&e.xhr.readyState&&e.xhr.abort&&(null===t||e.url===t)&&(e.xhr.abort(),e=null)})}},r=(e=>{let s=document,i=new WeakMap,l=new WeakMap,o=Symbol();return class{constructor(e,t=!0){let n=e;if("string"==typeof e&&(!1===t||e.search("<")>-1)){let t=s.createElement("div");t.innerHTML=e,n=t.childNodes}this._fillNodeList(n)}["_fillNodeList"](i){if(e[t](i))if(i instanceof r)this[o]=i.get();else if("string"==typeof i)this[o]=s.querySelectorAll(i);else if(i instanceof Node||i instanceof HTMLDocument||i instanceof Window)this[o]=[i];else if(i instanceof NodeList||i instanceof HTMLCollection)this[o]=i;else{if("object"!=typeof i)throw new DOMException("invalid parameter for jsu");this[o]=[],e[t](i[n])||(i=[i]),i[n](t=>{let s=e=>{-1===this[o].indexOf(e)&&this[o].push(e)};t instanceof r?t[n](s):Array.isArray(t)||t instanceof NodeList||t instanceof HTMLCollection||/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t.toString())?e[n](t,s):this[o].push(t)})}else this[o]=[];this[n]((e,t)=>{this[t]=e})}[n](t,s=!1){return e[n](this[o],t,s),this}["css"](s,r){let i=!1,l=e[t](s),a=e[t](r),h=[];return this[n](e=>{l&&a&&"string"==typeof s?(e.style[s]=r,i=!0):l&&("string"==typeof s?h.push(window.getComputedStyle(e)[s]):"object"==typeof s&&(i=!0,Object.keys(s)[n](t=>{"string"==typeof t&&(e.style[t]=s[t])})))}),i?this:this[o].length>1?h:h[0]}["attr"](s,r){let i=!1,l=e[t](s),a=e[t](r),h=[];return this[n](o=>{let p=(n,s)=>{i=!0,e[t](o[n])?o[n]=s:o.setAttribute(n,s)};l&&a&&"string"==typeof s?p(s,r):l&&("string"==typeof s?h.push((n=>e[t](o[n])?o[n]:o.getAttribute(n))(s)):"object"==typeof s&&Object.keys(s)[n](e=>{"string"==typeof e&&p(e,s[e])}))}),i?this:this[o].length>1?h:h[0]}["removeAttr"](e){return this[n](t=>{t.removeAttribute(e)}),this}static["_addEventListener"](n,s){let r=i.get(n);e[t](r)||(r={},i.set(n,r)),r[s.event]||(r[s.event]=[]),r[s.event].push({fn:s.fn,name:s.name||s.event+"_"+ +new Date+Math.random().toString(36).substr(2,12),opts:s.opts,wantsUntrusted:s.wantsUntrusted}),n.addEventListener(s.event,s.fn,s.opts,s.wantsUntrusted)}static["_cloneEventListener"](s,l){let o=i.get(s);e[t](o)&&Object.keys(o)[n](e=>{o[e][n](t=>{r._addEventListener(l,{event:e,fn:t.fn,opts:t.opts,wantsUntrusted:t.wantsUntrusted})})}),l.children&&e[n](l.children,(e,t)=>{r._cloneEventListener(s.children[t],e)})}static["_addData"](n,s,r){let i=l.get(n);e[t](i)||(i={},l.set(n,i)),i[s]=r}static["_cloneData"](s,i){let o=l.get(s);e[t](o)&&Object.keys(o)[n](e=>{r._addData(i,e,o[e])}),i.children&&e[n](i.children,(e,t)=>{r._cloneData(s.children[t],e)})}static["_cloneElement"](e){let t=[];return e[n](e=>{let n=e.cloneNode(!0);r._cloneEventListener(e,n),r._cloneData(e,n),t.push(n)}),new r(t)}["clone"](){return r._cloneElement(this)}["data"](s,i){let a=!1,h=e[t](s),p=e[t](i),c=[];return this[n](o=>{let u=l.get(o),d=e[t](u);h&&p?(a=!0,r._addData(o,s,i)):h?"string"==typeof s?c.push(d?u[s]:void 0):"object"==typeof s&&(a=!0,Object.keys(s)[n](e=>{"string"==typeof e&&r._addData(o,e,s[e])})):c.push(d?u:{})}),a?this:this[o].length>1?c:c[0]}["removeData"](s){let r=!e[t](s);return this[n](n=>{let i=l.get(n);e[t](i)&&(r?l.delete(n):e[t](i[s])&&delete i[s])}),this}["on"](t,s,i,l,o){let a=(e,t)=>{Object.keys(t)[n](n=>{try{Object.defineProperty(e,n,{value:t[n]})}catch(e){}})},h=i;"function"==typeof i?h=l:o=l,void 0===h&&(h=null),void 0===o&&(o=null);let p="string"==typeof s;return this[n](l=>{t.split(/\s+/g)[n](t=>{let c=t.split(/\./);r._addEventListener(l,{event:c[0],name:c[1],fn:t=>{a(t,{type:c[0]}),p?e[n](l.querySelectorAll(":scope "+s),e=>{let n=t.target;for(;n&&n!==l;){if(n===e){let e=new MouseEvent(c[0],t);a(e,{preventDefault:()=>{t.preventDefault()},stopPropagation:()=>{t.stopPropagation()},target:t.target,currentTarget:n}),i(e)}n=n.parentNode}}):"function"==typeof s&&s(t)},opts:h,wantsUntrusted:o})})},!0),this}["off"](s){return this[n](r=>{let l=i.get(r);e[t](l)&&s.split(/\s+/g)[n](t=>{let s=t.split(/\./);"*"===s[0]?Object.entries(l)[n](([t,i])=>{e[n](i,(e,n)=>{void 0!==s[1]&&s[1]!==e.name||(r.removeEventListener(t,e.fn),l[t].splice(n,1))},!0)}):l[s[0]]&&e[n](l[s[0]],(e,t)=>{void 0!==s[1]&&s[1]!==e.name||(r.removeEventListener(s[0],e.fn),l[s[0]].splice(t,1))},!0)})}),this}["trigger"](e,t){return e.split(/\s+/g)[n](e=>{let s=e.split(/\./),r=new CustomEvent(s[0],t);this[n](e=>{e.dispatchEvent(r)})}),this}["addClass"](e){return"object"!=typeof e&&(e=[e]),this[n](t=>{e.forEach(e=>{t.classList.add(e)})}),this}["removeClass"](e){return"object"!=typeof e&&(e=[e]),this[n](t=>{e.forEach(e=>{t.classList.remove(e)})}),this}["toggleClass"](e){return this[n](t=>{t.classList.toggle(e)}),this}["hasClass"](e){let t=[];return this[n](n=>{t.push(n.classList.contains(e))}),this[o].length>1?t:t[0]}["_realDimension"](e,t=!1){let s=[],r="width",i=["left","right"];return"h"===e&&(r="height",i=["top","bottom"]),this[n](e=>{let n=e.getBoundingClientRect(),l=window.getComputedStyle(e),o=n[r];t&&(o+=parseInt(l.getPropertyValue("margin-"+i[0])),o+=parseInt(l.getPropertyValue("margin-"+i[1]))),s.push(o)}),this[o].length>1?s:s[0]}["realWidth"](e=!1){return this._realDimension("w",e)}["realHeight"](e=!1){return this._realDimension("h",e)}["find"](e){let t=[];return this[n](n=>{n instanceof HTMLIFrameElement?t.push(n.contentDocument.querySelectorAll(":scope "+e)):t.push(n.querySelectorAll(":scope "+e))}),new r(t)}["children"](e){let t=[];return e||(e="*"),this[n](n=>{t.push(n.querySelectorAll(":scope > "+e))}),new r(t)}["_htmlText"](s,r){let i=e[t](s),l=i?this:"";return this[n](e=>{i?e[r]=s:l+=e[r]}),l}["html"](e){return this._htmlText(e,"innerHTML")}["text"](e){return this._htmlText(e,"innerText")}["remove"](){this[n](e=>{e&&e.parentElement&&(i.delete(e),l.delete(e),e.parentElement.removeChild(e))})}["_moveElement"](e,t=!0,s){if(Array.isArray(e))e.forEach(e=>{this._moveElement(e,t,s)});else{"string"==typeof e&&e.search("<")>-1&&(t=!1);let i=new r(e,t);this[n](e=>{r._cloneElement(i)[n](t=>{switch(s){case"append":e.appendChild(t);break;case"prepend":e.insertBefore(t,e.firstChild);break;case"before":e.parentNode.insertBefore(t,e);break;case"after":e.parentNode.insertBefore(t,e.nextSibling)}})}),i.remove()}return this}["_moveElementTo"](e,t){let s=[];return new r(e)[n](e=>{r._cloneElement(this)[n](n=>{switch(t){case"append":e.appendChild(n);break;case"prepend":e.insertBefore(n,e.firstChild);break;case"before":e.parentNode.insertBefore(n,e);break;case"after":e.parentNode.insertBefore(n,e.nextSibling)}s.push(n)})}),this.remove(),new r(s)}["append"](e,t){return this._moveElement(e,t,"append")}["appendTo"](e){return this._moveElementTo(e,"append")}["prepend"](e,t=!0){return this._moveElement(e,t,"prepend")}["prependTo"](e){return this._moveElementTo(e,"prepend")}["before"](e,t=!0){return this._moveElement(e,t,"before")}["insertBefore"](e){return this._moveElementTo(e,"before")}["after"](e,t=!0){return this._moveElement(e,t,"after")}["insertAfter"](e){return this._moveElementTo(e,"after")}["_nextPrev"](s,i){let l=e[t](s),o=[];return this[n](n=>{let r="prev"===i?n.previousElementSibling:n.nextElementSibling;e[t](r)&&(!l||e[t](r.matches)&&r.matches(s))&&o.push(r)}),new r(o)}["next"](e){return this._nextPrev(e,"next")}["prev"](e){return this._nextPrev(e,"prev")}["_siblings"](s,i="siblings"){let l=e[t](s),a=[];return this[n](e=>{let t=null,n=[];for("siblings"===i&&e.parentNode.firstElementChild?(t=e.parentNode.firstElementChild,i="next"):"previous"!==i&&"next"!==i||(t=e[i+"ElementSibling"]);t&&t.matches;)t===e||l&&!t.matches(s)||n.push(t),t=t[i+"ElementSibling"];a.push(new r(n))}),this[o].length>1?a:a[0]}["siblings"](e){return this._siblings(e)}["nextAll"](e){return this._siblings(e,"next")}["prevAll"](e){return this._siblings(e,"previous")}["parent"](s){let i=e[t](s),l=[];return this[n](n=>{let o=n.parentNode;!i||e[t](o.matches)&&o.matches(s)||(o=null),l.push(new r(o))}),this[o].length>1?l:l[0]}["parents"](s){let i=e[t](s),l=[];return this[n](e=>{let t=[],n=e.parentNode;for(;n&&n.matches&&n!==this;)i&&!n.matches(s)||t.push(n),n=n.parentNode;l.push(new r(t))}),this[o].length>1?l:l[0]}["document"](){let e=[];return this[n](t=>{e.push(new r(t.ownerDocument))}),this[o].length>1?e:e[0]}["eq"](e){return e<0&&(e=this[o].length+e),new r(this[o][e])}["get"](n){return e[t](n)?(n<0&&(n=this[o].length+n),this[o][n]):this[o]}["length"](){return this[o].length}}})(class{static[t](e){return void 0!==e&&null!==e}static[n](e,s,r=!1){let i=e.length;if(r){for(let l=i-1;l>=0;l--)if(this[t](e[l][n]))this[n](e[l],s,r);else if(!1===s(e[l],l))break}else for(let l=0;l<i;l++)if(this[t](e[l][n]))this[n](e[l],s,r);else if(!1===s(e[l],l))break}});(()=>{let e=e=>new r(e);Object.entries(s).forEach(([t,n])=>{e[t]=n}),window.jsu=e})()})();