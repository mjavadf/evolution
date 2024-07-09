const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// for modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn_ok");
const closeModalBtn2 = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
closeModalBtn2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);


// ids
document.addEventListener("DOMContentLoaded", function() {
  // Get the div element with the class "titleIdsDiv"
  const titleIdsDiv = document.querySelector(".titleIdsDiv");

  // Get all the h1 and h2 elements that are not inside the header or footer
  const titles = document.querySelectorAll("h1:not(.navbar h1), h2:not(.footer__container h2), h1:not(.navbar h1), h2:not(.footer__container h2)");

  // Loop through each title
  titles.forEach(function(title) {
    // Generate a unique ID for the title
    const id = "title-" + title.textContent.trim().replace(/\s+/g, "-").toLowerCase();

    // Set the ID attribute of the title element
    title.setAttribute("id", id);

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute of the link to "#" + the ID
    link.setAttribute("href", "#" + id);

    // Set the text content of the link to the title text
    link.textContent = title.textContent;

    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Smoothly scroll to the corresponding title
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
    
    // Append the link to the titleIdsDiv
    titleIdsDiv.appendChild(link);
    // Add a line break after each link
    titleIdsDiv.appendChild(document.createElement("br"));
  });
});


