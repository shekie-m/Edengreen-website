// include.js

// Function to load HTML into a target element
function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Load header and footer after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("#header", "header.html");
  loadHTML("#footer", "footer.html");
});
