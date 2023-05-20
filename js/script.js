function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.parentElement.classList.contains("dropbtn")) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//                             МОДАЛЬНОЕ ОКНО
document.getElementById("open-modal").addEventListener("click", function ()
{
    document.getElementById("login-modal").classList.add("open")
})

document.getElementById("close-login-modal").addEventListener("click", function ()
{
    document.getElementById("login-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("login-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
function openModal() {
    document.body.style.overflow = "hidden";
    document.getElementById("login-modal").classList.add("open");
}

function closeModal() {
    document.body.style.overflow = "auto";
    document.getElementById("login-modal").classList.remove("open")
}


document.getElementById("open-modal").addEventListener("click", openModal)

document.getElementById("close-login-modal").addEventListener("click", closeModal)

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#login-modal .modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("login-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    closeModal();
});

// кнопка

const phoneInput = document.getElementById("phone");
const phoneIdButton = document.getElementById("btnId");

phoneIdButton.addEventListener('click', () => {
    phoneInput.value = '';
    phoneIdButton.style.opacity = "0.5";
});


phoneInput.addEventListener("input", () => {
    const phoneValue = phoneInput.value.replace(/\D/g, "");
    if (phoneValue.length > 10) {
        phoneIdButton.style.backgroundColor = "#209cd1";
        phoneIdButton.style.opacity = "1";
        phoneIdButton.style.cursor = "pointer";


    } else {
        phoneIdButton.style.cursor = "default";
    }
});

// const button = document.getElementById('btnId');
// const input = document.getElementById('phone');
//
// button.addEventListener('click', () => {
//     input.value = '';
// });