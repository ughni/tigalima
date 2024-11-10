// nav menu
const search = document.querySelector("#search-btn");
const searchForm = document.querySelector(".search-form")

// navbar menu
search.addEventListener("click", (event) => {
  searchForm.classList.toggle("active")
  event.preventDefault()
})


// keranjang
const keranjangBtn = document.querySelector("#keranjangBtn");
const keranjangItems = document.querySelector('.keranjang'); 
const hapusBelanja = document.querySelector("#hapus-btn")
const belanja = document.querySelector(".keranjang-item")

// keranjang items 
keranjangBtn.addEventListener('click', (event) => {
  keranjangItems.classList.toggle("keranjangMuncul");
  event.preventDefault();
})

// remove belanja
hapusBelanja.addEventListener("click", (event) => {
  if (belanja.contains(event.target)) {
    belanja.remove()
  }
  event.preventDefault()
})



document.addEventListener('click', (event) => {
  // navbar menu
  if (!search.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove("active")
  }

  // keranjang
  if (!keranjangBtn.contains(event.target) && !keranjangItems.contains(event.target)) {
    keranjangItems.classList.remove("keranjangMuncul")
  }
  
})
