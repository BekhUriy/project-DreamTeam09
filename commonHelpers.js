var f=(s,e,o)=>{if(!e.has(s))throw TypeError("Cannot "+o)};var i=(s,e,o)=>(f(s,e,"read from private field"),o?o.call(s):e.get(s)),u=(s,e,o)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,o)};import{a as c}from"./assets/vendor-26fe51b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();var l;class b{constructor(e,o){u(this,l,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return c.get(`${i(this,l)}books/category-list`)}fetchBestSellersBooks(){return c.get(`${i(this,l)}books/top-books`)}fetchBooksByCategory(e){return c.get(`${i(this,l)}books/category?category=${e}`)}fetchBookById(e){return c.get(`${i(this,l)}books/${e}`)}}l=new WeakMap;const d=document.querySelector(".best-sellers-books"),g=new b;m();async function m(){return await g.fetchBestSellersBooks().then(e=>e.data.map(o=>{const n=o.books.map(t=>`<li class="best-sellers-book" data-book-id="${t._id}">
             <img class="best-sellers-book-img" src="${t.book_image}" alt="${t.title}" />
             <p class="best-sellers-book-title">${t.title}</p>
             <p class="best-sellers-book-author">${t.author}</p>
</li>`).join("");d.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${o.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${n} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${o.list_name}">See more</button>
                    </li>`)}).join("")).catch(e=>{console.log(e.message),d.innerHTML="No information"})}
//# sourceMappingURL=commonHelpers.js.map
