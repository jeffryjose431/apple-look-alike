const selectElement = element => document.querySelector(element);

selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});

// selectElement(".main-title").addEventListener("click", () => {
//   selectElement(".main-title").classList.toggle("active");
// });

