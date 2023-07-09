/*
6. Create a custom modal window using HTML, CSS, and JavaScript. On clicking a button the modal window should appear and the user can click outside the modal window to close the modal along with a close button which is inside the modal. Also when the modal is open the window should not be scrollable.
*/

var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
