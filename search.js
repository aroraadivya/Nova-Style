
// document.addEventListener("DOMContentLoaded", function () {
//      var searchForm = document.getElementById("search Form");
//      var searchInput = document.getElementById("search Input");
//      var searchResults = document.getElementById("search Results");


//      var products = [
//           {
//                category: "shorts",
//                name: "The Way Home Shorts",
//                image: "https://images.urbndata.com/is/image/Anthropologie/68438852_034_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
//                // link: "sproduct9.html",
//           },

//      ];

//      searchForm.addEventListener("submit", function (event) {
//           event.preventDefault();
//           var searchTerm = searchInput.value.trim().toLowerCase();
//           if (searchTerm !== "") {
//                var filteredProducts = products.filter(function (product) {
//                     return (
//                          product.category.toLowerCase() === searchTerm ||
//                          product.name.toLowerCase().includes(searchTerm)
//                     );
//                });

//                displaySearchResults(filteredProducts)
//           } else {
//                hideSearchResults();
//           }
//      });

//      function displaySearchResults(products) {
//           searchResults.innerHTML = "";
//           products.forEach(function (product) {
//                var item = document.createElement("div");
//                item.classList.add("searchItem");

//                var image = document.createElement("img");
//                image.src = product.image;
//                image.alt = product.name;
//                image.width = 70;

//                var name = document.createElement("span");
//                name.textContent = product.name;

//                item.appendChild(image);
//                item.appendChild(name);

//                item.addEventListener("click", function () {
//                     window.location.href = product.link;
//                });

//                searchResults.appendChild(item);
//           });

//           searchResults.classList.remove("hidden");
//      }

//      function hideSearchResults() {
//           searchResults.innerHTML = "";
//           searchResults.classList.add("hidden");
//      }

//      document.addEventListener("click", function (event) {
//           if (!searchForm.contains(event.target)) {
//                hideSearchResults();
//           }
//      });

//      searchForm.addEventListener("click", function (event) {
//           event.stopPropagation();
//      });
// });


document.addEventListener("DOMContentLoaded", function () {
     const searchBar = document.querySelector(".search input");
     const cards = document.querySelectorAll(".card");

     searchBar.addEventListener("keyup", function (event) {
          const searchText = event.target.value.toLowerCase();

          cards.forEach(function (card) {
               const title = card.querySelector(".title").textContent.toLowerCase();
               const desc = card.querySelector(".desc").textContent.toLowerCase();

               if (title.includes(searchText) || desc.includes(searchText)) {
                    card.style.display = "block";
               } else {
                    card.style.display = "none";
               }
          });
     });
});