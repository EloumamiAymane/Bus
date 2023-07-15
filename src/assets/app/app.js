function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
}
function toggleDropdown1() {
  var dropdown = document.getElementById("myDropdown1");
  dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
}
function handle() {
  var dropdown = document.getElementById("dropdown");
  dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
}
function handle1() {
  var dropdown = document.getElementById("drop");
  dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
}
function openTab(event, tabId) {
  // Get all tab buttons
  var tabButtons = document.getElementsByClassName("tab-button");

  // Remove the 'active' class from all tab buttons
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Add the 'active' class to the clicked tab button
  event.currentTarget.className += " active";

  // Get all tab contents
  var tabContents = document.getElementsByClassName("tab-content");

  // Hide all tab contents
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Show the selected tab content
  document.getElementById(tabId).style.display = "block";
}

