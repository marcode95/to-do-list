(()=>{"use strict";var t={774:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(645),o=n.n(r),i=n(667),a=n.n(i),d=n(971),c=o()((function(t){return t[1]})),s=a()(d);c.push([t.id,"@font-face {\n  font-family: 'MyFont';\n  src: url("+s+");\n  font-weight: 600;\n  font-style: normal;\n}\n\n.display-none {\n  display: none;\n}\n\n.display-inline {\n  display: inline;\n}\n\n/* startpage */\n\n/* project */\n\n\n",""]);const l=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},379:(t,e,n)=>{var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function d(t,e){for(var n={},r=[],o=0;o<t.length;o++){var d=t[o],c=e.base?d[0]+e.base:d[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var u=a(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function u(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(t,e){var n,r,o;if(e.singleton){var i=f++;n=m||(m=c(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=d(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=d(t,e),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}},971:(t,e,n)=>{t.exports=n.p+"9ade142e81dd8d55cd32.ttf"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(379),e=n.n(t),r=n(774);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelectorAll("section"),i=document.getElementById("navigation-button"),a=document.getElementById("startpage-button"),d=document.getElementById("startpage"),c=document.getElementById("navigation"),s=document.getElementById("todos"),l=document.getElementById("future"),u=document.getElementById("project");var p=new Date,m=p.getDate(),f=p.getMonth()+1,g=p.getFullYear();m<10&&(m="0"+m),f<10&&(f="0"+f),p=g+"-"+f+"-"+m;const v=t=>{Array.from(o).filter((e=>e!==t)).forEach((e=>{e.classList.remove("display-inline"),e.classList.add("display-none"),t.classList.remove("display-none"),t.classList.add("display-inline")}))},y=(t,e)=>{t.classList.remove("display-inline"),t.classList.add("display-none"),e.classList.remove("display-none"),e.classList.add("display-inline")};i.addEventListener("click",(()=>{v(c),y(i,a)})),a.addEventListener("click",(()=>{v(d),y(a,i)}));const h=[];document.getElementById("submitInput").addEventListener("click",(()=>{const t=document.getElementById("titleInput").value,e=document.getElementById("descriptionInput").value,n=document.getElementById("dateInput").value,r=document.getElementById("priorityInput").value,o=((t,e,n,r,o)=>({title:t,description:e,date:n,priority:r,project:document.getElementById("projectInput").value}))(t,e,n,r);return!!(t&&e&&n&&r)&&!1!==b(o)&&(h.push(o),void console.log(h))}));const b=t=>{for(let e=0;e<h.length;e++)if(h[e].title===t.title&&h[e].description===t.description&&h[e].date===t.date)return!1},E=document.getElementById("projectSubmitInput"),I=document.getElementById("projectInput");E.addEventListener("click",(()=>{const t=document.getElementById("projectTitleInput").value,e=document.createElement("option");e.setAttribute("value",t),e.textContent=t,I.append(e),B(t)}));const L=document.getElementById("project-list"),B=t=>{const e=document.createElement("button");e.setAttribute("data-project",t),e.setAttribute("id",t+"Link"),e.textContent=t,L.append(e)},A=document.getElementById("project-page");L.addEventListener("click",(t=>{let e=h.filter((e=>e.project===t.target.dataset.project));v(u),y(i,a),A.innerHTML="",A.removeAttribute("data-project"),A.setAttribute("data-project",t.target.dataset.project),w(e,A)}));const j=(t,e,n)=>{const r=document.createElement("div");r.setAttribute("data-id",n),r.setAttribute("id","single-todo-item");const o=document.createElement("p"),i=t[n].title;o.textContent=i,r.append(o);const a=document.createElement("p"),d=t[n].date;a.textContent=d,r.append(a);const c=document.createElement("div");c.classList.add("display-none"),c.classList.add("itemDescription"),c.setAttribute("data-id",n);const s=document.createElement("p");s.classList.add("itemDescription"),s.setAttribute("data-id",n);const l=t[n].description;s.textContent=l,c.append(s);const u=document.createElement("button");u.setAttribute("id","edit-button"),u.setAttribute("data-id",n),u.textContent="Edit",c.append(u),r.append(c);const p=document.createElement("button");p.setAttribute("data-id",n),p.setAttribute("id","remove-button"),p.textContent="Remove",r.append(p);const m=document.createElement("button");m.setAttribute("data-id",n),m.setAttribute("id","show-details-button"),m.textContent="Show Details",r.append(m),e.append(r)},w=(t,e)=>{for(var n=0;n<t.length;n++)j(t,e,n);(t=>{t.addEventListener("click",(t=>{if("show-details-button"===t.target.id){let e=document.querySelectorAll("div.itemDescription"),n=Array.from(e);for(let e=0;e<n.length;e++)n[e].dataset.id===t.target.dataset.id&&(n[e].classList.remove("display-none"),n[e].classList.add("display-inline"))}}))})(e),((t,e)=>{e.addEventListener("click",(n=>{if("remove-button"===n.target.id){const r=document.querySelectorAll("div#single-todo-item"),o=Array.from(r);for(let t=0;t<o.length;t++)o[t].dataset.id===n.target.dataset.id&&e.removeChild(o[t]);for(let e=0;e<h.length;e++)h[e]===t[n.target.dataset.id]&&h.splice(e,1)}}))})(t,e),((t,e)=>{e.addEventListener("click",(e=>{if("edit-button"===e.target.id){const n=prompt("How would you describe this to-do again?",""),r=document.querySelectorAll("p.itemDescription"),o=Array.from(r);for(let t=0;t<o.length;t++)o[t].dataset.id===e.target.dataset.id&&(o[t].innerHTML=n);for(let r=0;r<h.length;r++)h[r]===t[e.target.dataset.id]&&(h[r].description=n);console.log(h)}}))})(t,e)},C=document.getElementById("show-all-todos"),x=document.getElementById("todos-page");C.addEventListener("click",(t=>{x.innerHTML="",v(s),w(h,x)}));const S=document.getElementById("future-todos"),T=document.getElementById("future-page");S.addEventListener("click",(t=>{console.log("navbuttonworks"),T.innerHTML="",v(l);const e=h.filter((t=>t.date>p));console.log(e),w(e,T)})),document.getElementById("sort-submit-input").addEventListener("click",(t=>{x.innerHTML="";const e=document.getElementById("sortCategoryInput").value,n=document.getElementById("sortOrderInput").value,r=M(h,e+n);w(r,x)})),document.getElementById("project-sort-submit-input").addEventListener("click",(t=>{A.innerHTML="";const e=document.getElementById("projectSortCategoryInput").value+document.getElementById("projectSortOrderInput").value;let n=h.filter((t=>t.project===A.dataset.project));const r=M(n,e);w(r,A)}));const M=(t,e)=>{switch(e){case"PriorityAscending":return t.sort((function(t,e){return parseInt(t.priority)-parseInt(e.priority)}));case"PriorityDescending":return t.sort((function(t,e){return parseInt(e.priority)-parseInt(t.priority)}));case"TitleAscending":return t.sort((function(t,e){return t.title<e.title?-1:t.title>e.title?1:0}));case"TitleDescending":return t.sort((function(t,e){return t.title<e.title?1:t.title>e.title?-1:0}));case"DateAscending":return t.sort((function(t,e){return t.date<e.date?-1:t.date>e.date?1:0}));case"DateDescending":return t.sort((function(t,e){return t.date<e.date?1:t.date>e.date?-1:0}))}}})()})();