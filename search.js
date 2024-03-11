document.getElementById("searchForm").addEventListener("submit", function (event) {
     event.preventDefault(); // Prevent default form submission

     // Get the value of the search input
     var searchQuery = document.getElementById("searchInput").value;

     // Perform search functionality
     fetchSearchResults(searchQuery);
});

function fetchSearchResults(query) {
     // You would typically make an AJAX request to your backend to fetch search results
     // Replace this with your actual backend URL
     var backendUrl = "https://example.com/search?query=" + encodeURIComponent(query);

     // Fetch search results from backend
     fetch(backendUrl)
          .then(response => response.json())
          .then(data => {
               // Display search results on the page
               displaySearchResults(data);
          })
          .catch(error => console.error("Error fetching search results:", error));
}

function displaySearchResults(results) {
     var searchResultsContainer = document.getElementById("searchResults");

     // Clear previous search results
     searchResultsContainer.innerHTML = "";

     // Display each search result
     results.forEach(result => {
          var resultElement = document.createElement("div");
          resultElement.textContent = result.name; // Assuming the search result has a 'name' property
          searchResultsContainer.appendChild(resultElement);
     });
}
