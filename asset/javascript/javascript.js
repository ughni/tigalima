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
const hapusBelanja = document.querySelectorAll("#hapus-btn")

// keranjang items 
keranjangBtn.addEventListener('click', (event) => {
  keranjangItems.classList.toggle("keranjangMuncul");
  event.preventDefault();
})

// remove belanja
hapusBelanja.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const keranjangItem = tombol.closest('.keranjang-item');
    if (keranjangItem) {
        keranjangItem.remove();
    }
  })
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

const Coba = document.querySelector(".cobas");

function warna() {  
  Coba.style.background ='blue'
}


// belanja 
const blj = document.querySelector(".belanja-banyak");
const bljTambah = document.querySelector(".container-tambah")

blj.addEventListener("click", (event) => {
  bljTambah.classList.toggle("banyak")
  blj.remove()
  event.preventDefault()  
})

//hialngkan tombol lebih banyak

// tombol beli buat angka
const beli = document.querySelectorAll("#beli");

beli.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const pesanBrapa = document.querySelector("#pesanan");
    const text = parseInt(pesanBrapa.textContent);
    const reslut = text + 1;
    pesanBrapa.textContent =  reslut;
  })
})

beli.forEach((tombol) => {
  tombol.addEventListener("mousedown", () => {
    tombol.style.background = 'black'
  })
})

beli.forEach((tombol) => {
  tombol.addEventListener("mouseup", () => {
    tombol.style.background = '#025E73'
  })
})





let user = { name: 'Alice', age: 30 };

let uniqueID = Symbol('id');
user[uniqueID] = 12345;

console.log(user[uniqueID]); // Output: 12345
