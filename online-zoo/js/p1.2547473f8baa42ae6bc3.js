(()=>{"use strict";const e=document.querySelector(".testimonials__slider"),t=document.querySelectorAll(".testimonials__slider .slider__item"),n=document.querySelector(".testimonials__input"),i=document.querySelector(".pop-up"),s=document.querySelector(".cross"),r=document.querySelector(".header");function o(e){const t=e.target.closest(".slider__item");if(t){const e=i.querySelector(".slider__item"),n=document.createElement("div");n.classList.add("slider__item"),n.innerHTML=t.innerHTML,e.replaceWith(n),i.classList.add("show"),l(),r.classList.add("hide")}}n&&s&&(n.addEventListener("input",(function(){const i=n.value,s=t[0].clientWidth,r=Math.round((e.scrollWidth-t.length*s)/(t.length-1));e.style.transform=`translateX(-${i*s+i*r}px)`})),s.addEventListener("click",(function(){r.classList.remove("hide"),i.classList.remove("show"),l()})));const c=document.querySelector(".backdrop"),a=document.querySelector("body");function l(){c.classList.toggle("show"),a.classList.toggle("block")}function d(){c.classList.remove("show"),a.classList.remove("block"),i.classList.remove("show"),r.classList.remove("hide")}c.addEventListener("click",v);const m=document.querySelector(".burger-menu"),p=document.querySelector("header .nav"),u=p.querySelectorAll("header .nav__link");function v(){p.classList.remove("open"),m.classList.remove("open"),d()}m.addEventListener("click",(function(){p.classList.toggle("open"),m.classList.toggle("open"),l()})),u.forEach((e=>{e.addEventListener("click",v)}));const L=[{petImg:"pandas",petName:"Giant pandas",petPlace:"Native to Southwest China",petDiet:"herbivore"},{petImg:"eagles",petName:"Eagles",petPlace:"Native to South America",petDiet:"predator"},{petImg:"gorillas",petName:"Gorillas",petPlace:"Native to Congo",petDiet:"herbivore"},{petImg:"twoToed",petName:"Two-toed Sloth",petPlace:"Mesoamerica, South America",petDiet:"herbivore"},{petImg:"cheetah",petName:"Cheetahs",petPlace:"Native to Africa",petDiet:"predator"},{petImg:"penguins",petName:"Penguins",petPlace:"Native to Antarctica",petDiet:"predator"},{petImg:"alligator",petName:"Alligators",petPlace:"Native to Southeastern U. S.",petDiet:"predator"}],h=document.querySelector(".slider-container_left"),g=document.querySelector(".slider-container_right");function f(){let e="";const t=function(e){for(let t=0;t<e.length;t++){let n=Math.floor(Math.random()*(t+1)),i=e[n];e[n]=e[t],e[t]=i}return e}(L);for(let n=0;n<6;n++)e+=`<div class="slider__item">\n      <div class="item__img ${t[n].petImg}">\n          <div class="item__discription"><span class="petName">${t[n].petName}</span><span\n                  class="petPlace">${t[n].petPlace}</span>\n          </div>\n      </div>\n      <div class="item__discription"><span class="petName">${t[n].petName}</span><span\n              class="petPlace">${t[n].petPlace}</span>\n          <div class="petDiet ${t[n].petDiet}"></div>\n      </div>\n    </div>`;return e}h.innerHTML=f(),g.innerHTML=f();const[_,S]=document.querySelectorAll(".arrow-btn"),w=document.querySelector(".pets .slider");let y="";const E=function(e){q(),w.classList.add("moveLeft"),y="left"},k=function(e){q(),w.classList.add("moveRight"),y="right"};function q(){_.removeEventListener("click",E),S.removeEventListener("click",k)}_.addEventListener("click",E),S.addEventListener("click",k),w.addEventListener("transitionend",(function(e){e.target===w&&(function(e){const[t,n,i]=document.querySelectorAll(".pets .slider-container");"left"===e&&(n.innerHTML=t.innerHTML,i.innerHTML=f(),t.innerHTML=f()),"right"===e&&(n.innerHTML=i.innerHTML,t.innerHTML=f(),i.innerHTML=f())}(y),w.classList.remove("moveLeft"),w.classList.remove("moveRight"),_.addEventListener("click",E),S.addEventListener("click",k))})),window.innerWidth<998&&e.addEventListener("click",o),window.innerWidth<1201?n.max=8:n.max=7,window.addEventListener("resize",(()=>{window.innerWidth>640&&(v(),d()),e.style.transform="translateX(0px)",n.value=0,window.innerWidth<1201?n.max=8:n.max=7,window.innerWidth<998?e.addEventListener("click",o):e.removeEventListener("click",o)}))})();