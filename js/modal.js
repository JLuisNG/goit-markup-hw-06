(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector(".close"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

  const inputs = document.querySelectorAll('.modal-for-input');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.length < 2) {
        input.style.borderColor = 'red';
        input.previousElementSibling.style.fill = 'red';
      } else {
        input.style.borderColor = 'green';
        input.previousElementSibling.style.fill = 'green';
      }
    });
});






