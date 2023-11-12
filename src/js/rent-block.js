import { API_SERVICE } from "./api-requests";


const listCreate = document.querySelector('.shopping-cards');
const listItemCreate = document.querySelector('.shopping-card');
const shoppingStorage = document.querySelector('.shopping-storage');

function getShoppingItems() {

}
function shoppingListMarcup(arr) {
  return map.arr(({}) => `
  <li class="shopping-card">
        <div class="shopping-card-img">
          <img src="./img/Rectangle-13.png" alt="book" />
        </div>
        <div class="shopping-blok">
          <h2 class="shopping-book-title">I will find you</h2>
          <p class="shopping-book-category">category</p>
          <p class="shopping-book-description">description</p>
          <p class="shopping-book-autor">autor</p>
        </div>
        <ul class="shopping-shops">
          <li class="shopping-shop">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon-book site"
            >
              <img src="" alt="" />
            </a>
          </li>
          <li class="shopping-shop">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book-shop site"
            >
              <img src="" alt="" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="shopping-btn-delete"
          aria-label="Delete the book from shopping list"
        >
          <svg class="shopping-btn-delete-icon" width="18" height="18">
            <use href=""></use>
          </svg>
        </button>
      </li>`).join('')
}
