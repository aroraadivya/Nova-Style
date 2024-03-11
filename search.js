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

