(()=>{"use strict";var t={774:(t,n,e)=>{e.d(n,{Z:()=>l});var o=e(645),r=e.n(o),i=e(667),a=e.n(i),d=e(616),s=r()((function(t){return t[1]})),c=a()(d);s.push([t.id,"@font-face {\n  font-family: 'MyFont';\n  src: url("+c+");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  position: relative;\n  font-family: 'Myfont', Arial, Helvetica, sans-serif;\n  max-width: 600px;\n  min-height: 100vh;\n}\n\nsection {\n  max-width: 600px;\n  margin: auto;\n}\n\n*,\n*:focus,\n*:hover {\n  outline: none;\n}\n\n.display-none {\n  display: none !important;\n}\n\n.display-inline {\n  display: inline;\n}\n\n.display-block {\n  display: block;\n}\n\n.low-prio {\n  background-color: #8a90e2;\n}\n\n.mid-prio {\n  background-color: #4a53d2;\n}\n\n.high-prio {\n  background-color: #2c34af;\n}\n\n/* navbar */\n\nnav {\n  background-color: rgb(240, 240, 240);\n}\n\n.nav-container {\n  max-width: 600px;\n  margin: auto;\n}\n\n#navigation-button {\n  font-size: 20px;\n  background-color: transparent;\n  border: none;\n}\n\n.header {\n  font-size: 30px;\n  color: #2c34af;\n  cursor: pointer;\n}\n\n.header-o {\n  color: #8a90e2;\n}\n\n.nav-fake-element {\n  width: 29.5px;\n}\n\n.navigation-button {\n  font-size: 20px;\n  color: black;\n  background-color: transparent;\n  border: none;\n}\n\n.navigation-button:hover {\n  text-decoration: none;\n  color: #4a53d2;\n  transition: 0.45s;\n}\n\n.navigation-button:focus,\n.navigation-button:hover {\n  outline: none;\n}\n\n.project-option-links {\n  width: 180px;\n  height: 40px;\n  border: none;\n  background: rgb(240, 240, 240);\n  text-align: center;\n  color: black;\n  font-size: 20px;\n}\n\n.project-option-links:hover {\n  text-decoration: none;\n  background-color: white;\n}\n\n.dropdown {\n  position: relative;\n}\n\n#project-list-items {\n  position: absolute;\n  overflow: auto;\n  z-index: 1;\n  border: 1px solid grey;\n  border-top: none;\n}\n\n/* startpage */\n\n#startpage {\n  color: black;\n  padding-top: 30px;\n  padding-bottom: 40px;\n}\n\nh2 {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 0;\n}\n\n.form-container {\n  width: 280px;\n}\n\n.form-container > * {\n  margin-bottom: 7px;\n}\n\n.form-input {\n  width: 280px;\n  height: 40px;\n  font-size: 22px;\n  text-align: center;\n  background: none;\n  color: white;\n  background-color: #4a53d2;\n  border: 2px white;\n  border-radius: 20px;\n}\n\n.form-input::placeholder {\n  color: rgba(255, 255, 255, 0.493);\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n  margin-right: 10px;\n}\n\n#priorityInput,\n#projectInput {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n/* todos-page */\n\n.todos-form-container > * {\n  color: black;\n  background-color: white;\n  font-size: 14px;\n  border: none;\n  border: 2px solid black;\n  width: 106px;\n}\n\n#sortOrderInput {\n  border-left: none;\n  border-right: none;\n}\n\n.prio-explanation-circles > div {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.single-todo-item p {\n  margin-bottom: 0;\n}\n\n.prio-explanation-circles > div > p {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n#todos-page {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 12px;\n  color: white;\n}\n\n.single-todo-item {\n  border-radius: 25px;\n  padding: 10px 15px 18px 15px;\n}\n\n.single-todo-item > button {\n  position: relative;\n  color: white;\n  width: 30px;\n  height: 30px;\n  background-color: transparent;\n  border: 2px solid white;\n  border-radius: 8px;\n  transition: all 0.2s ease-in-out;\n  margin-top: 15px;\n}\n\n.single-todo-item > button:focus,\n.single-todo-item > button:hover {\n  outline: none;\n  transform: scale(1.1);\n}\n\n.single-todo-item > button > i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.single-todo-item-title {\n  font-size: 24px;\n}\n\n#show-details-button {\n  margin-right: 8px;\n}\n\n.itemDescriptionContainer {\n  word-wrap: break-word;\n}\n\n#edit-button {\n  position: relative;\n  color: white;\n  width: 30px;\n  height: 30px;\n  background-color: transparent;\n  border: 2px solid white;\n  border-radius: 8px;\n  margin-right: 8px;\n  transition: all 0.2s ease-in-out;\n}\n\n#edit-button:focus,\n#edit-button:hover {\n  outline: none;\n  transform: scale(1.1);\n}\n\n#edit-button > i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n#editInput {\n  width: 140px;\n  color: white;\n  border: 2px solid white;\n  border-radius: 9px;\n  background-color: transparent;\n  margin-top: 7px;\n  padding-left: 4px;\n}\n\n#editInput::placeholder {\n  color: lightgray;\n}\n\n#editSubmit {\n  width: 70px;\n  text-align: center;\n  color: white;\n  border: 2px solid white;\n  border-radius: 9px;\n  background-color: transparent;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n#submitInput:focus,\n#projectSubmitInput:focus {\n  outline: 1px solid black;\n}\n\n/* project */\n\n#project-page {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 12px;\n  color: white;\n}\n\n#projectSortOrderInput {\n  border-left: none;\n  border-right: none;\n}\n\n/* future */\n\n#future-page {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 12px;\n  color: white;\n}\n\n/* project */\n\n@media only screen and (min-width: 1200px) {\n  body {\n    max-width: 1000px;\n  }\n\n  section {\n    max-width: 1000px;\n  }\n\n  /* navbar */\n\n  nav {\n    background-color: rgb(240, 240, 240);\n  }\n\n  .nav-container {\n    max-width: 1000px;\n    margin: auto;\n  }\n\n  #navigation-button {\n    font-size: 30px;\n  }\n\n  .header {\n    font-size: 55px;\n  }\n\n  .navigation-button {\n    font-size: 28px;\n  }\n\n  .project-option-links {\n    font-size: 25px;\n    width: 250px;\n  }\n\n  /* startpage */\n\n  #startpage {\n    color: black;\n    padding-top: 40px;\n    padding-bottom: 53px;\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 45px;\n    margin-bottom: 10px;\n  }\n\n  .form-container {\n    width: 495px;\n  }\n\n  .form-container > * {\n    margin-bottom: 14px;\n  }\n\n  .form-input {\n    width: 400px;\n    height: 60px;\n    font-size: 30px;\n    text-align: center;\n    background: none;\n    color: white;\n    background-color: #4a53d2;\n    border: 2px white;\n    border-radius: 30px;\n  }\n\n  .form-input::placeholder {\n    color: rgba(255, 255, 255, 0.493);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n    margin-right: 10px;\n  }\n\n  #priorityInput,\n  #projectInput {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  /* todos-page */\n\n  .todos-form-container > * {\n    font-size: 20px;\n    width: 150px;\n    margin-top: 20px;\n  }\n\n  .prio-explanation-circles > div {\n    width: 80px;\n    height: 80px;\n    margin: 10px 15px 10px 0;\n  }\n\n  .prio-explanation-circles > div > p {\n    font-size: 27.5px;\n  }\n\n  #todos-page {\n    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n    grid-gap: 22px;\n  }\n\n  .single-todo-item {\n    border-radius: 34px;\n    padding: 15px 20px 23px 20px;\n  }\n\n  .single-todo-item > button {\n    width: 45px;\n    height: 45px;\n    border-radius: 12px;\n    margin-top: 20px;\n  }\n\n  .single-todo-item > button > i {\n    font-size: 25px;\n  }\n\n  .single-todo-item-title {\n    font-size: 30px;\n  }\n\n  #show-details-button {\n    margin-right: 13px;\n  }\n\n  #edit-button {\n    width: 45px;\n    height: 45px;\n    border-radius: 12px;\n    margin-top: 20px;\n  }\n\n  #edit-button > i {\n    font-size: 25px;\n  }\n\n  /* project */\n\n  #project-page {\n    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n    grid-gap: 22px;\n  }\n\n  /* future */\n\n  #future-page {\n    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n    grid-gap: 22px;\n  }\n}\n",""]);const l=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<t.length;d++){var s=[].concat(t[d]);o&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},667:t=>{t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},379:(t,n,e)=>{var o,r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),i=[];function a(t){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===t){n=e;break}return n}function d(t,n){for(var e={},o=[],r=0;r<t.length;r++){var d=t[r],s=n.base?d[0]+n.base:d[0],c=e[s]||0,l="".concat(s," ").concat(c);e[s]=c+1;var p=a(l),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:f(u,n),references:1}),o.push(l)}return o}function s(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,l=(c=[],function(t,n){return c[t]=n,c.filter(Boolean).join("\n")});function p(t,n,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function u(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var g=null,m=0;function f(t,n){var e,o,r;if(n.singleton){var i=m++;e=g||(g=s(n)),o=p.bind(null,e,i,!1),r=p.bind(null,e,i,!0)}else e=s(n),o=u.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=d(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var r=a(e[o]);i[r].references--}for(var s=d(t,n),c=0;c<e.length;c++){var l=a(e[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}},616:(t,n,e)=>{t.exports=e.p+"1af9f1e9f3fd4766df83.ttf"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{var t=e(379),n=e.n(t),o=e(774);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=[],i=[],a=()=>{localStorage.setItem("todos",JSON.stringify(r))},d=()=>{JSON.parse(localStorage.getItem("todos"))&&(r.length=0,JSON.parse(localStorage.getItem("todos")).forEach((t=>{r.push(t)})))},s=()=>{JSON.parse(localStorage.getItem("projects"))&&(i.length=0,JSON.parse(localStorage.getItem("projects")).forEach((t=>{i.push(t)})))},c=(t,n,e)=>{const o=document.createElement("div");o.setAttribute("data-id",e),o.setAttribute("data-aos","fade-up"),o.setAttribute("data-aos-duration","700"),o.setAttribute("data-aos-delay",200*e),o.classList.add("single-todo-item");const r=document.createElement("p"),{title:i}=t[e];r.textContent=i,r.classList.add("single-todo-item-title"),o.append(r);const a=document.createElement("p"),{date:d}=t[e];a.textContent=d,a.classList.add("single-todo-item-date"),o.append(a);const s=document.createElement("form");s.setAttribute("data-id",e),s.setAttribute("id","editForm"),s.classList.add("display-none"),s.classList.add("d-flex"),s.classList.add("flex-column");const c=document.createElement("input");c.setAttribute("placeholder","New Description"),c.setAttribute("id","editInput"),c.classList.add("editInputClass"),c.setAttribute("data-id",e),c.setAttribute("type","text");const l=document.createElement("input");l.setAttribute("id","editSubmit"),l.setAttribute("data-id",e),l.setAttribute("value","Submit"),s.append(c),s.append(l),o.append(s);const p=document.createElement("div");p.classList.add("display-none"),p.classList.add("itemDescriptionContainer"),p.setAttribute("data-id",e);const u=document.createElement("p");u.classList.add("itemDescription"),u.setAttribute("data-id",e);const{description:g}=t[e];u.textContent=g,p.append(u);const m=document.createElement("button");m.setAttribute("id","edit-button"),m.setAttribute("data-id",e),m.innerHTML='<i class="far fa-edit"></i>',p.append(m),o.append(p);const f=document.createElement("button");f.setAttribute("data-id",e),f.setAttribute("id","show-details-button"),f.innerHTML='<i class="fas fa-info"></i>',o.append(f);const b=document.createElement("button");b.setAttribute("data-id",e),b.setAttribute("id","remove-button"),b.innerHTML='<i class="far fa-trash-alt"></i>',o.append(b),((t,n)=>{switch(n){case"1":t.classList.add("low-prio");break;case"2":t.classList.add("mid-prio");break;case"3":t.classList.add("high-prio")}})(o,t[e].priority),n.append(o)},l=document.getElementById("todos-page"),p=document.getElementById("future-page"),u=document.getElementById("project-page");let g=0,m=0,f=0;const b=(t,n)=>{(t=>{t.addEventListener("click",(t=>{if("show-details-button"===t.target.id){const n=document.querySelectorAll("div.itemDescriptionContainer"),e=Array.from(n);for(let n=0;n<e.length;n+=1)e[n].dataset.id===t.target.dataset.id&&e[n].classList.toggle("display-none")}}))})(t),((t,n)=>{n.addEventListener("click",(n=>{if("remove-button"===n.target.id){d();for(let e=0;e<r.length;e+=1)r[e].title===t[n.target.dataset.id].title&&r[e].date===t[n.target.dataset.id].date&&(r.splice(e,1),location.reload());a()}}))})(n,t),(t=>{t.addEventListener("click",(t=>{if("edit-button"===t.target.id){const n=document.querySelectorAll("form#editForm"),e=Array.from(n);for(let n=0;n<e.length;n+=1)e[n].dataset.id===t.target.dataset.id&&e[n].classList.toggle("display-none")}}))})(t),((t,n)=>{n.addEventListener("click",(e=>{if("editSubmit"===e.target.id){const o=((t,n)=>{const e=n.querySelectorAll("input.editInputClass"),o=Array.from(e);for(let n=0;n<o.length;n+=1)if(o[n].dataset.id===t)return o[n].value;return!0})(e.target.dataset.id,n),i=document.querySelectorAll("p.itemDescription"),s=Array.from(i);for(let t=0;t<s.length;t+=1)s[t].dataset.id===e.target.dataset.id&&(s[t].innerHTML=o);d();for(let n=0;n<r.length;n+=1)r[n].title===t[e.target.dataset.id].title&&r[n].date===t[e.target.dataset.id].date&&(r[n].description=o);a();const c=e.target.parentNode;c.classList.remove("display-inline"),c.classList.add("display-none")}}))})(n,t)},h=(t,n)=>{for(let e=0;e<t.length;e+=1)c(t,n,e);switch(n){case l:g+=1,1===g&&b(n,t);break;case u:m+=1,1===m&&b(n,t);break;case p:f+=1,1===f&&b(n,t)}},x=document.getElementById("submitInput"),v=document.getElementById("project-list-items"),y=document.getElementById("projectSubmitInput"),w=document.getElementById("projectInput"),I=new Date;let E=I.getDate(),k=I.getMonth()+1;E<10&&(E=`0${E}`),k<10&&(k=`0${k}`);const j=`${I.getFullYear()}-${k}-${E}`,L=t=>{const n=document.createElement("button");n.setAttribute("data-project",t),n.setAttribute("id",`${t}Link`),n.classList.add("project-option-links"),n.textContent=t,v.append(n)},A=()=>{s(),w.innerHTML='<option value="">Project</option>',v.innerHTML="";for(let t=0;t<i.length;t+=1){const n=document.createElement("option");n.setAttribute("value",i[t]),n.textContent=i[t],w.append(n),L(i[t])}},S=document.querySelectorAll("section"),B=document.getElementById("startpage-button"),T=document.getElementById("startpage"),M=document.getElementById("todos"),C=document.getElementById("future"),z=document.getElementById("project"),O=document.getElementById("show-all-todos"),N=document.getElementById("todos-page"),D=document.getElementById("future-todos"),H=document.getElementById("future-page"),$=document.getElementById("project-page"),J=document.getElementById("project-list-items");d();const F=document.getElementById("todos-page");h(r,F),s(),A(),x.addEventListener("click",(()=>{const t=document.getElementById("titleInput").value,n=document.getElementById("descriptionInput").value,e=document.getElementById("dateInput").value,o=document.getElementById("priorityInput").value,i=((t,n,e,o,r)=>({title:t,description:n,date:e,priority:o,project:document.getElementById("projectInput").value}))(t,n,e,o);return!!(t&&n&&e&&o)&&!1!==(t=>{for(let n=0;n<r.length;n+=1)if(r[n].title===t.title&&r[n].description===t.description&&r[n].date===t.date)return!1;return!0})(i)&&(d(),r.push(i),localStorage.setItem("todos",JSON.stringify(r)),location.reload(),!0)})),y.addEventListener("click",(()=>{const t=document.getElementById("projectTitleInput").value;return!(!t||t.length>15||(i.push(t),localStorage.setItem("projects",JSON.stringify(i)),A(),0))})),(()=>{const t=t=>{Array.from(S).filter((n=>n!==t)).forEach((n=>{n.classList.remove("display-block"),n.classList.add("display-none"),t.classList.remove("display-none"),t.classList.add("display-block")}))};B.addEventListener("click",(()=>{t(T)})),document.getElementById("project-list").addEventListener("click",(()=>{J.classList.toggle("display-none")})),document.addEventListener("click",(n=>{if(n.target.classList.contains("project-option-links")){d();const e=r.filter((t=>t.project===n.target.dataset.project));t(z),$.innerHTML="",$.removeAttribute("data-project"),$.setAttribute("data-project",n.target.dataset.project),h(e,$)}})),O.addEventListener("click",(()=>{N.innerHTML="",t(M),d(),h(r,N)})),D.addEventListener("click",(()=>{H.innerHTML="",t(C),d();const n=r.filter((t=>t.date>j)).sort(((t,n)=>t.date<n.date?-1:t.date>n.date?1:0));h(n,H)}))})(),(()=>{const t=document.getElementById("project-page"),n=document.getElementById("todos-page"),e=(t,n)=>{switch(n){case"PriorityAscending":return t.sort(((t,n)=>parseInt(t.priority,10)-parseInt(n.priority,10)));case"PriorityDescending":return t.sort(((t,n)=>parseInt(n.priority,10)-parseInt(t.priority,10)));case"TitleAscending":return t.sort(((t,n)=>t.title<n.title?-1:t.title>n.title?1:0));case"TitleDescending":return t.sort(((t,n)=>t.title<n.title?1:t.title>n.title?-1:0));case"DateAscending":return t.sort(((t,n)=>t.date<n.date?-1:t.date>n.date?1:0));case"DateDescending":return t.sort(((t,n)=>t.date<n.date?1:t.date>n.date?-1:0))}return 0};document.getElementById("sort-submit-input").addEventListener("click",(()=>{n.innerHTML="";const t=document.getElementById("sortCategoryInput").value,o=document.getElementById("sortOrderInput").value,i=e(r,t+o);h(i,n)})),document.getElementById("project-sort-submit-input").addEventListener("click",(()=>{t.innerHTML="";const n=document.getElementById("projectSortCategoryInput").value+document.getElementById("projectSortOrderInput").value,o=r.filter((n=>n.project===t.dataset.project)),i=e(o,n);h(i,t)}))})()})()})();