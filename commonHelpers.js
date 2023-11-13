var q=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var c=(o,e,t)=>(q(o,e,"read from private field"),t?t.call(o):e.get(o)),f=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};/* empty css                      */import{a as A}from"./assets/vendor-26fe51b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();var i;class M{constructor(e,t){f(this,i,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=t}fetchBooksCategoryList(){return A.get(`${c(this,i)}books/category-list`)}fetchBestSellersBooks(){return A.get(`${c(this,i)}books/top-books`)}fetchBooksByCategory(e){return A.get(`${c(this,i)}books/category?category=${e}`)}fetchBookById(e){return A.get(`${c(this,i)}books/${e}`)}}i=new WeakMap;const B=document.querySelector(".best-sellers-books"),Z=new M;J();async function J(){return await Z.fetchBestSellersBooks().then(e=>e.data.map(t=>{const r=t.books.map(s=>`<li class="best-sellers-book" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
</li>`).join("");B.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${t.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${r} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${t.list_name}">See more</button>
                    </li>`)}).join("")).catch(e=>{console.log(e.message),B.innerHTML="No information"})}const v={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};v.addEventListener();const V=document.querySelector(".category");function N(o){o.sort((t,r)=>t.list_name.localeCompare(r.list_name));const e=o.map(t=>{const{list_name:r}=t;return`<li><a class='genre' href="#" target="_self">${r}</a></li>`}).join("");V.insertAdjacentHTML("beforeend",e)}function X(){new M().fetchBooksCategoryList().then(e=>{const t=e.data;console.log(t),N(t)}).catch(e=>{console.error(e)})}X();const h=document.querySelector(".header-modal"),Y=document.querySelector(".modal-open-btn"),y=document.querySelector("body"),p=document.querySelector(".open-icon");console.dir(p.innerHTML);Y.addEventListener("click",j);function j(o){if(h.classList.contains("hidden-modal")){h.classList.remove("hidden-modal"),y.classList.add("stop-scrolling"),p.innerHTML='<use href="./img/sprit.svg#x-close"/>';return}else h.classList.add("hidden-modal"),y.classList.remove("stop-scrolling"),p.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const H=document.querySelector(".js-home-link"),R=document.querySelector(".js-home-link"),D=location.pathname;D==="/project-DreamTeam09/home.html"?H.classList.add("active"):R.classList.add("current");const O=document.querySelector(":root"),w=document.querySelector("#themeSwitch");w.addEventListener("change",F);function F(){event.preventDefault(),O.classList.toggle("dark-theme",w.checked)}const S=document.querySelector(".about-book-modal"),P=document.querySelector("#modal-close");document.querySelector(".fire-base-backdrop");const m=document.querySelector(".js-backdrop-modal");function x(){S.classList.remove("is-hidden"),m.classList.remove("is-hidden")}function b(){S.classList.add("is-hidden"),m.classList.add("is-hidden")}P.addEventListener("click",b);document.addEventListener("keydown",function(o){o.key==="Escape"&&b()});m.addEventListener("click",function(o){o.target===m&&b()});const L="data:image/png;base64,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",W="/project-DreamTeam09/assets/amazon-icon2x-8bceb58e.png",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",G="data:image/png;base64,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",C="data:image/png;base64,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",z="/project-DreamTeam09/assets/bookshop-icon2x-d9991f63.png",Q=document.querySelector("#allModal"),$=document.querySelector(".categorie-list"),_=document.querySelector(".category__books"),u=document.querySelector(".add-storage-button"),g=document.querySelector(".remove-modal-btn"),T=document.querySelector(".storage-description"),a="storage-data";let I=[],d={};u.addEventListener("click",se);g.addEventListener("click",re);_.addEventListener("click",K);$.addEventListener("click",K);function K(o){if(o.target.nodeName==="BUTTON"||o.target.nodeName==="UL"||o.target.nodeName==="DIV"||o.target.nodeName==="H3")return;const e=o.target.closest("li").id;x(),ee(e)}async function ee(o){Q.innerHTML="";try{const e=await oe(o);return k(),te(e),e}catch(e){throw console.error("Error",e),e}}async function oe(o){try{d={};const t=await(await fetch(`https://books-backend.p.goit.global/books/${o}`)).json();return d={book_image:t.book_image,title:t.title,author:t.author,marketAmazon:t.buy_links[0].url,marketAppleBooks:t.buy_links[1].url,marketBookshop:t.buy_links[4].url,list_name:t.list_name,id:t._id},t}catch(e){throw console.error("Error",e),e}}function k(){const o=JSON.parse(localStorage.getItem(a)),e=d.id;if(!o||o.length===0){u.style.display="block",g.style.display="none";return}else o.find(r=>r.id===e)?(u.style.display="none",g.style.display="block"):(u.style.display="block",g.style.display="none")}function te(o){const e=o.book_image,t=o.title,r=o.author,s=o.buy_links[0].url,n=o.buy_links[1].url,l=o.buy_links[4].url,U=`  

  <img src="${e}" alt="Book Image" class="image-about-book-modal">

  <div class="info-modal">

  <h2 class="title-about-book-modal">${t}</h2>

  <p class="author-about-book-modal"> ${r}</p>

  <p class="text-about-book-modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>

  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${s}" target="_blank"

    > <img

     width="62"

    height="19"

    srcset="

    ${L} 1x,

    ${W} 2x

  "

   src="${L}"

    alt="Amazon"

  /></a></li>

  <li class="shop-modal-item"><a href="${n}" target="_blank"

    > <img

    width="33"

    height="32"

    srcset="

    ${E} 1x,

    ${G} 2x

  "

   src="${E}"

    alt="AppleBooks"

  /></a></li>

  <li class="shop-modal-item"><a href="${l}" target="_blank"

    > <img

    width="38"

    height="36"

    srcset="

    ${C} 1x,

    ${z} 2x

  "

   src="${C}"

    alt="Book-Shop"

  /></a></li>

</ul>

</div>

  `;Q.innerHTML=U}function se(){const o=JSON.parse(localStorage.getItem(a)),e=d;!o||o.length===0?(I.push(e),localStorage.setItem(a,JSON.stringify(I))):(o.push(e),localStorage.setItem(a,JSON.stringify(o))),T.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",k()}function re(){T.textContent="";const o=d.id,e=JSON.parse(localStorage.getItem(a)),t=e.findIndex(r=>r.id===o);e.splice(t,1),localStorage.setItem(a,JSON.stringify(e)),k()}
//# sourceMappingURL=commonHelpers.js.map
