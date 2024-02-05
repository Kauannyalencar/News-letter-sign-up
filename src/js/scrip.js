const inputEmail = document.querySelector("#email");
const btn = document.querySelector(".submit-button");
const error = document.querySelector(".error-email");
const container = document.querySelector(".conteiner");

const userEmail = document.getElementById("email-modal");
const modalBtn = document.querySelector(".modal-button");
const modal = document.querySelector(".success-massage")


btn.addEventListener("click", () => {
    validateEmail(inputEmail.value) == true ? toggleClass() : "Email invalido!"
        ? inputEmail.classList.add('error') : inputEmail.classList.remove('error');


    inputEmail.addEventListener("keyup", () => {
        if (validateEmail(inputEmail.value) !== true) {
            error.textContent = "Valid email required"

        } else {
            error.textContent = '';
            userEmail.textContent = `${inputEmail.value}`;
            inputEmail.classList.remove("error")
        }
    })
})

modalBtn.addEventListener("click", () => {
    validateEmail(inputEmail.value) == true ? toggleClass() : "Email invalido!";
    inputEmail.value = ''
})

function validateEmail(inputEmail) {
    var re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
}

function toggleClass() {
    modal.classList.toggle("complete");
    container.classList.toggle("hidden")
    if (validateEmail(inputEmail.value) == '') {

    }



}
