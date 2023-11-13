import { API_SERVICE} from "./api-requests";
import { openModalId } from "./modals";
// import Notiflix from "notiflix";

const topBooksByCategories = document.querySelector('.best-sellers-books')
const apiCategories = new API_SERVICE();

 bestSellersMarkup();
 
async function bestSellersMarkup () {
    let result = await apiCategories
    .fetchBestSellersBooks()
    // console.log(result)
    .then(topCategories => {
        return topCategories.data
        .map((topCategory) => {
            // const {book} = bookAttributes;

            // console.log(topCategory);
            const booksArr = topCategory.books.map((book)=>
             `<li class="best-sellers-book js-open-modal" data-book-id="${book._id}">
             <img class="best-sellers-book-img" src="${book.book_image}" alt="${book.title}" />
             <p class="best-sellers-book-title">${book.title}</p>
             <p class="best-sellers-book-author">${book.author}</p>
            //  <p class="overlay">Quick view</p>
</li>`
            ).join('');
            // console.log(booksArr);
            
            topBooksByCategories.insertAdjacentHTML('beforeend', 
            `<li class="best-seller-category"> 
                <p class="category-title"> ${topCategory.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${booksArr} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${topCategory.list_name}">See more</button>
                    </li>`)
        }).join('')
    })
    .then(()=>{
       const openBookEl = document.querySelectorAll('.js-open-modal');
        openBookEl.forEach(function(item){
                //  console.log(item);
                 item.addEventListener('click', openModalId);
    })
    })
    .catch(error => {
        console.log(error.message);
        topBooksByCategories.innerHTML = 'No information';
      });

    return result;
    }
    