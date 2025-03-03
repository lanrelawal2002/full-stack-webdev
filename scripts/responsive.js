const drawerButtonElement = document.getElementById("drawer-btn");

const mobileDrawerAsideElement = document.getElementById("mobile-drawer");

drawerButtonElement.addEventListener("click", function () {
  mobileDrawerAsideElement.classList.toggle("open");
});

// function toggleAsideElement() {
//   mobileDrawerAsideElement.classList.toggle("open");
// }

// drawerButtonElement.addEventListener("click", toggleAsideElement);
