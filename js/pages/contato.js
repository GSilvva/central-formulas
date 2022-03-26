// MODAL SEND FORM
const form = document.querySelector(".banner__form");
const modalForm = document.querySelector(".modal-form");
const closeModalForm = modalForm.querySelector("button");
form.addEventListener("submit", e => {
  e.preventDefault();
  window.location.href = window.location.href += "#mensagemEnviada";
  modalForm.classList.add("open");
});
closeModalForm.addEventListener("click", () => modalForm.classList.remove("open"));