!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);const r={inputForm:document.querySelector(".form__text"),addBtn:document.querySelector(".form__btn"),todoList:document.querySelector(".list__todo"),completedList:document.querySelector(".list__completed"),listContainer:document.querySelector(".list"),headerMonth:document.querySelector(".header__h3")},o=new Date,a=o.getMonth(),i=o.getFullYear();r.headerMonth.textContent=`On ${["January","February","March","April","May","June","July","August","September","October","November","December"][a]} ${i}`;const c=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):{todo:[],completed:[]},l=()=>{localStorage.setItem("todoList",JSON.stringify(c))},d=e=>{const t=`\n    <li class="list__li">\n      ${e}\n      <i class="far fa-trash-alt list__del" data-type="delete"></i>\n      <i class="far fa-check-circle list__check" data-type="check"></i>\n    </li> \n    `;r.todoList.insertAdjacentHTML("afterbegin",t)};n(0);(()=>{const{todo:e,completed:t}=c;(e.length||t.length)&&(e.forEach(e=>{d(e)}),t.forEach(e=>{(e=>{const t=`\n    <li class="list__li">\n      ${e}\n      <i class="far fa-trash-alt list__del" data-type="delete"></i>\n      <i class="far fa-check-circle list__check" data-type="check"></i>\n    </li> \n    `;r.completedList.insertAdjacentHTML("afterbegin",t)})(e)}))})(),r.inputForm.addEventListener("keydown",e=>{const t=(()=>r.inputForm.value)();(13===e.key||13===e.which&&t)&&(e.preventDefault(),d(t),r.inputForm.value="",(e=>{c.todo.push(e),l()})(t))}),r.listContainer.addEventListener("click",e=>{"delete"===e.target.dataset.type&&((e=>{const{todo:t,completed:n}=c,r=e.target.parentNode.innerText;"todo"===e.target.parentNode.parentNode.id?t.splice(t.indexOf(r),1):n.splice(n.indexOf(r),1),l()})(e),(e=>{const t=e.target.parentNode;t.parentNode.removeChild(t)})(e)),"check"===e.target.dataset.type&&((e=>{const{todo:t,completed:n}=c,r=e.target.parentNode.innerText;"todo"===e.target.parentNode.parentNode.id?(t.splice(t.indexOf(r),1),n.push(r)):(n.splice(n.indexOf(r),1),t.push(r)),l()})(e),(e=>{const t=e.target.parentNode.innerText,n=e.target.parentNode,o=`\n    <li class="list__li">\n      ${t}\n      <i class="far fa-trash-alt list__del" data-type="delete"></i>\n      <i class="far fa-check-circle list__check" data-type="check"></i>\n    </li> \n    `;"todo"===e.target.parentNode.parentNode.id?r.completedList.insertAdjacentHTML("afterbegin",o):r.todoList.insertAdjacentHTML("afterbegin",o),n.parentNode.removeChild(n)})(e))})}]);