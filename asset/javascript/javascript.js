const search = document.querySelector("#search-btn");
const searchForm = document.querySelector(".search-form")

search.addEventListener("click", () => {
  searchForm.classList.toggle("active")
})

document.addEventListener('click', (event) => {
  if (!search.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove("active")
  }
})

// daftar belanja
