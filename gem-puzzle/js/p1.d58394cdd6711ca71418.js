(()=>{"use strict";function e(e){return null!==e&&`${Math.floor(e/60).toString().padStart(2,"0")}:${(e%60).toString().padStart(2,"0")}`}class t{constructor(){this.currentGameState={solvedState:null,currentState:null,moves:0,seconds:0,frameSize:4,isChanged:!1},this.savedGameState=null,this.isGameStarted=!1,this.timer=null,this.isSound=!0,this.results=[{name:"Vladimir",moves:15,seconds:123},{name:"Semen",moves:19,seconds:131},{name:"Arkadiy",moves:21,seconds:142},{name:"Vika",moves:23,seconds:145},{name:"Vitaliy",moves:29,seconds:232},{name:null,moves:null,seconds:null},{name:null,moves:null,seconds:null},{name:null,moves:null,seconds:null},{name:null,moves:null,seconds:null},{name:null,moves:null,seconds:null}]}setFrameSize(){const e=document.querySelector('.settings__input[name="frame-size"]:checked').value;this.currentGameState.frameSize=e}shuffle=e=>{e&&e.preventDefault(),this.stopGame(),this.setFrameSize();const t=document.querySelector(".backdrop"),s=document.querySelector(".settings"),n=document.querySelector(".settings__btn");n.classList.contains("active")&&(n.classList.remove("active"),s.classList.remove("show"),t.classList.remove("show"));const a=[],r=this.currentGameState.frameSize**2;for(let e=1;e<=r;e++)e===r?a.push(null):a.push(e);const c=function(e){const t=[].concat(e);for(let e=t.length-1;e>0;e--){let s=Math.floor(Math.random()*(e+1)),n=t[s];t[s]=t[e],t[e]=n}const s=function(e){const t=[].concat(e);let s=0,n=t.indexOf(null),a=Math.sqrt(t.length)-Math.floor(n/Math.sqrt(t.length));if(t.forEach(((e,t,n)=>{if(null!==e){let a=0;for(let r=t+1;r<n.length;r++)e>n[r]&&null!==n[r]&&(s++,a++)}})),t.length%2!=0&&s%2==0||t.length%2==0&&(a%2!=0&&s%2==0||a%2==0&&s%2!=0))return t;{let e=null;return null!==t[0]&&null!==t[1]?(e=t[1],t[1]=t[0],t[0]=e):(e=t[t.length-1],t[t.length-1]=t[t.length-2],t[t.length-2]=e),t}}(t);return s}(a);this.currentGameState.solvedState=a,this.currentGameState.currentState=c;const i=document.querySelector(".start__btn");this.renderGameBoard(),i.disabled&&i.removeAttribute("disabled")};renderGameBoard=()=>{const e=document.querySelector(".gameboard__gamefield");!1===this.isGameStarted&&e.classList.contains("show")&&e.classList.remove("show"),e.innerHTML="",this.currentGameState.currentState.forEach((t=>{const s=document.createElement("div"),n=100/this.currentGameState.frameSize+"%";s.classList.add("gamefield__tile"),null===t?(s.classList.add("empty"),s.textContent=""):s.textContent=t,s.style.width=n,s.style.height=n,e.append(s)})),!1===this.isGameStarted&&setTimeout((()=>{e.classList.add("show")}),0)};startGame=()=>{if(!1===this.isGameStarted){const e=document.querySelector(".start__btn"),t=document.querySelector(".save__btn");this.isGameStarted=!0,e.disabled=!0,t.disabled=!1,this.timer=setInterval(this.updateTime,1e3)}};stopGame=()=>{if(!0===this.isGameStarted){const t=document.querySelector(".stats__moves"),s=document.querySelector(".stats__time");this.isGameStarted=!1,this.currentGameState.moves=0,t.innerHTML="00",clearInterval(this.timer),this.currentGameState.seconds=0,s.textContent=e(this.currentGameState.seconds)}};saveGame=()=>{const e=document.querySelector(".load__btn"),t=JSON.stringify(this.currentGameState);this.savedGameState=JSON.parse(t),e.disabled=!1,localStorage.setItem("savedGameState",t)};saveGameData=()=>{localStorage.setItem("isSound",JSON.stringify(this.isSound)),localStorage.setItem("results",JSON.stringify(this.results))};addResults=e=>{e.preventDefault();const t=document.querySelector(".win__input").value,s=this.currentGameState.moves,n=this.currentGameState.seconds,a={position:null,name:t,moves:s,seconds:n},r=this.results.length;for(let e=0;e<r;e++){if(null===this.results[e].moves){a.position=e,this.results[e]=a;break}if(s<this.results[e].moves||s===this.results[e].moves&&n<this.results[e].seconds){a.position=e-1,this.results.splice(e,0,a),this.results.pop();break}}l.backdropHide(),this.shuffle()};loadGame=async()=>{const t=document.querySelector(".start__btn"),s=document.querySelector(".stats__moves"),n=document.querySelector(".stats__time"),a=JSON.parse(localStorage.getItem("savedGameState"));t.disabled=!1,this.isGameStarted=!1,this.currentGameState=a,this.renderGameBoard(),clearInterval(this.timer),s.innerHTML=String(this.currentGameState.moves).padStart(2,0),n.innerHTML=e(this.currentGameState.seconds)};updateTime=()=>{const t=document.querySelector(".stats__time");this.currentGameState.seconds++,t.innerHTML=e(this.currentGameState.seconds)};updateMoves=()=>{const e=document.querySelector(".stats__moves");this.currentGameState.moves++,e.innerHTML=String(this.currentGameState.moves).padStart(2,0)};boardClickHandler=e=>{const t=e.currentTarget;if(t.classList.contains("show")){const s=e.target,n=this.currentGameState.currentState.indexOf(null),a=n%this.currentGameState.frameSize!=this.currentGameState.frameSize-1,r=n%this.currentGameState.frameSize!=0,c=t.children[n].nextSibling===s,i=t.children[n].previousSibling===s,o=t.children[n-this.currentGameState.frameSize]===s,d=t.children[n+Number(this.currentGameState.frameSize)]===s,l=document.querySelector(".moveSound");this.startGame(),a&&c?(s.classList.add("moveLeft"),this.isSound&&l.play(),this.removeEventListeners(),t.addEventListener("animationend",this.changeGameState)):r&&i?(s.classList.add("moveRight"),this.isSound&&l.play(),this.removeEventListeners(),t.addEventListener("animationend",this.changeGameState)):o?(s.classList.add("moveDown"),this.isSound&&l.play(),this.removeEventListeners(),t.addEventListener("animationend",this.changeGameState)):d&&(s.classList.add("moveTop"),this.isSound&&l.play(),this.removeEventListeners(),t.addEventListener("animationend",this.changeGameState))}};changeGameState=e=>{const t=e.target,s=e.currentTarget,n=this.currentGameState.currentState.indexOf(+t.innerText),a=this.currentGameState.currentState.indexOf(null),r=this.currentGameState.currentState[n];this.currentGameState.currentState[n]=this.currentGameState.currentState[a],this.currentGameState.currentState[a]=r,this.renderGameBoard(),this.updateMoves(),t.className="gamefield__tile",this.addEventListeners(),this.isSolved()&&(s.classList.remove("show"),d.renderWin())};soundHandler=e=>{const t=e.target;this.isSound=t.checked};isSolved=()=>{const e=this.currentGameState.solvedState.join(" ")===this.currentGameState.currentState.join(" ");return e&&this.isSound&&document.querySelector(".victorySound").play(),e};removeEventListeners=()=>{const e=document.querySelector(".gameboard__gamefield"),t=document.querySelector(".shuffle__btn"),s=document.querySelector(".load__btn");e.removeEventListener("click",this.boardClickHandler),t.removeEventListener("click",this.shuffle),s.removeEventListener("click",this.loadGame)};addEventListeners=()=>{const e=document.querySelector(".gameboard__gamefield"),t=document.querySelector(".shuffle__btn"),s=document.querySelector(".load__btn");e.addEventListener("click",this.boardClickHandler),t.addEventListener("click",this.shuffle),s.addEventListener("click",this.loadGame)}}class s{constructor(){this.wrapper=null}createPopUpWrapper=async()=>{const e=document.createElement("div");return e.classList.add("popUp"),this.wrapper=e,e};renderResults=async()=>{const t=document.createElement("div"),s=document.createElement("h3");this.wrapper.innerHTML="",t.classList.add("results"),s.classList.add("results__title"),s.textContent="Top 10",t.append(s),o.results.forEach(((s,n)=>{const a=document.createElement("div");a.classList.add("row");const r=document.createElement("span");r.classList.add("position"),r.textContent=`${n+1}.`;const c=document.createElement("span");c.classList.add("name"),c.textContent=`${s.name||"..."}`;const i=document.createElement("span");i.classList.add("moves"),i.textContent=`M: ${s.moves||"00"}`;const o=document.createElement("span");o.classList.add("time"),o.textContent=`T: ${e(s.seconds)||"00:00"}`,a.append(r),a.append(c),a.append(i),a.append(o),t.append(a)})),this.wrapper.append(t),l.backdropShow(),setTimeout((()=>{this.wrapper.classList.add("show")}),0)};renderWin=async()=>{const t=document.createElement("div"),s=document.createElement("h3"),n=document.createElement("p"),a=document.createElement("form"),r=document.createElement("input"),c=document.createElement("button");t.classList.add("win"),s.classList.add("win__title"),s.textContent="Hooray!",n.classList.add("win__text"),n.textContent=`You solved the puzzle in ${e(o.currentGameState.seconds)} and ${o.currentGameState.moves} moves!`,a.classList.add("win__form"),a.action="/",r.classList.add("win__input"),r.placeholder="Your name",r.required=!0,r.maxLength=10,c.classList.add("btn"),c.classList.add("win__btn"),c.textContent="Save results",c.type="submit",clearInterval(o.timer),this.wrapper.innerHTML="",t.append(s),t.append(n),a.append(r),a.append(c),t.append(a),this.wrapper.append(t),l.backdropShow(),this.wrapper.classList.add("show"),a.addEventListener("submit",o.addResults)};popUpHide=()=>{this.wrapper.classList.remove("show")}}class n{constructor(){this.backdrop=null}createBackdrop=async()=>{const e=document.createElement("div");return e.classList.add("backdrop"),e.addEventListener("click",this.backdropHide),this.backdrop=e,e};backdropToggle=()=>{this.backdrop.classList.toggle("show")};backdropShow=()=>{this.backdrop.classList.add("show")};backdropHide=()=>{const e=document.querySelector(".win__input");(!e||e&&""!==e.value)&&(this.backdrop.classList.remove("show"),m.settingsMenuHide(),d.popUpHide())}}async function a(e="",t="",s=!1){const n=document.createElement("button");return n.classList.add("btn"),n.classList.add(e),n.textContent=t,n.disabled=s,n}const r=[{size:"3x3",value:3},{size:"4x4",value:4},{size:"5x5",value:5},{size:"6x6",value:6},{size:"7x7",value:7},{size:"8x8",value:8}];class c{constructor(){this.settings=null,this.settingsBtn=null}renderSettings=async()=>{const e=document.createElement("div"),t=document.querySelector(".settings__btn");e.classList.add("settings");const s=document.createElement("form"),n=document.createElement("span"),c=await a("shuffle__btn","Shuffle");s.classList.add("settings__form"),s.action="/",n.classList.add("settings__title"),n.textContent="Frame size:",s.append(n),r.forEach((e=>{const t=document.createElement("input"),n=document.createElement("label");t.classList.add("settings__input"),t.id=e.size,t.type="radio",t.name="frame-size",t.value=e.value,e.value===o.currentGameState.frameSize&&(t.checked=!0),n.classList.add("settings__label"),n.htmlFor=e.size,n.textContent=e.size,s.append(t),s.append(n)})),s.append(c);const i=document.createElement("input"),d=document.createElement("label");return i.classList.add("sound__input"),i.id="switch",i.type="checkbox",i.name="sound",i.checked=o.isSound,d.classList.add("sound__label"),d.htmlFor="switch",d.textContent="Sound",e.append(s),e.append(i),e.append(d),t.addEventListener("click",this.settingsMenuToggle),c.addEventListener("click",o.shuffle),i.addEventListener("change",o.soundHandler),this.settings=e,this.settingsBtn=t,e};settingsMenuToggle=()=>{this.settingsBtn.classList.toggle("active"),this.settings.classList.toggle("show"),d.wrapper.classList.contains("show")?d.wrapper.classList.remove("show"):l.backdropToggle()};settingsMenuHide=()=>{this.settingsBtn.classList.remove("active"),this.settings.classList.remove("show")}}function i(){const e=document.createElement("div");return e.classList.add("wrapper"),e}let o=null,d=null,l=null,m=null;const u=document.querySelector(".app");document.addEventListener("DOMContentLoaded",(async function(){o=await async function(){const e=new t,s=JSON.parse(localStorage.getItem("savedGameState")),n=localStorage.getItem("isSound"),a=JSON.parse(localStorage.getItem("results"));return s&&(e.savedGameState=s),n&&(e.isSound=JSON.parse(n)),a&&(e.results=a),e}(),d=new s,l=new n,m=new c;const e=await async function(){const e=document.createElement("header");e.classList.add("header");const t=i(),s=document.createElement("div");s.classList.add("header__inner");const n=document.createElement("div"),a=document.createElement("img"),r=document.createElement("h1");n.classList.add("header__logo"),a.src="./assets/logo.png",a.alt="app logo",r.textContent="Gem-puzzle";const c=document.createElement("i");return c.classList.add("fa-solid"),c.classList.add("fa-gear"),c.classList.add("settings__btn"),n.append(a),n.append(r),s.append(n),s.append(c),t.append(s),e.append(t),e}();u.append(e);const r=await async function(){const e=document.createElement("main");e.classList.add("main");const t=i();t.classList.add("gameboard");const s=document.createElement("div"),n=await a("shuffle__btn","Shuffle"),r=await a("start__btn","Start",!o.currentGameState.currentState),c=await a("results__btn","Results"),l=await a("save__btn","Save",!o.currentGameState.currentState),u=await a("load__btn","Load",!o.savedGameState);s.classList.add("gameboard__controls"),s.append(n),s.append(r),s.append(c),s.append(l),s.append(u);const p=await async function(){const e=document.createElement("span");return e.classList.add("gameboard__stats"),e.innerHTML='\n  <span>\n      <span class="stats__name">Moves:</span>\n      <span class="stats__moves">00</span>\n  </span>\n  <span>\n      <span class="span stats__name">Time:</span>\n      <span class="stats__time">\n        00: 00\n      </span>\n  </span>\n  ',e}(),h=document.createElement("div");h.classList.add("gameboard__gamefield");const S=await m.renderSettings(),v=document.createElement("audio"),L=document.createElement("source");v.classList.add("moveSound"),L.src="./assets/moveTile.mp3",L.type="audio/mpeg",v.append(L);const _=document.createElement("audio"),g=document.createElement("source");return _.classList.add("victorySound"),g.src="./assets/victory.mp3",g.type="audio/mpeg",_.append(g),t.append(s),t.append(p),t.append(h),e.append(t),e.append(S),e.append(v),e.append(_),n.addEventListener("click",o.shuffle),r.addEventListener("click",o.startGame),c.addEventListener("click",d.renderResults),l.addEventListener("click",o.saveGame),u.addEventListener("click",o.loadGame),h.addEventListener("click",o.boardClickHandler),h.addEventListener("mousemove",(e=>{const t=1===e.buttons;t&&console.log(t)})),e}();u.append(r);const p=await async function(){const e=document.createElement("footer");e.classList.add("footer");const t=i(),s=document.createElement("div");s.classList.add("author-info");const n=document.createElement("div"),a=document.createElement("a"),r=document.createElement("img");n.classList.add("author-info__item"),a.href="https://rs.school/js/",r.src="https://rs.school/images/rs_school_js.svg",r.alt="RS School",a.append(r),n.append(a);const c=document.createElement("div"),o=document.createElement("span");c.classList.add("author-info__item"),o.textContent="2022",c.append(o);const d=document.createElement("div"),l=document.createElement("div"),m=document.createElement("a"),u=document.createElement("i");return d.classList.add("author-info__item"),l.classList.add("github-link"),m.href="https://github.com/RussianBoy64",m.textContent="RussianBoy64",u.classList.add("fa-brands"),u.classList.add("fa-github"),u.classList.add("github-icon"),m.prepend(u),l.append(m),d.append(l),s.append(n),s.append(c),s.append(d),t.append(s),e.append(t),e}();u.append(p);const h=await l.createBackdrop();u.append(h);const S=await d.createPopUpWrapper();u.append(S),window.addEventListener("beforeunload",o.saveGameData)}))})();