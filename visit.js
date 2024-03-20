document.addEventListener("DOMContentLoaded", function () {
    // Check if the visit count is stored in localStorage
    if (localStorage.getItem("visitCount") === null) {
        // If not, initialize the visit count to 1
        localStorage.setItem("visitCount", 1);
    } else {
        // If it is, increment the visit count
        let visitCount = parseInt(localStorage.getItem("visitCount"));
        visitCount++;
        localStorage.setItem("visitCount", visitCount);
    }
  
    // Display the visit count on the webpage
    updateVisitCount();
  });
  
  function updateVisitCount() {
    const visitCountElement = document.getElementById("visit-count");
    const visitCount = localStorage.getItem("visitCount");
    visitCountElement.textContent = `You have visited this page ${visitCount} time`;
  }