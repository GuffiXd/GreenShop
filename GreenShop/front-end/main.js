const modalLog = document.querySelector('.modal');
const openModalLog = document.querySelector('.openModal');
const openModalReg = document.querySelectorAll('.register');
const modalReg = document.querySelector('.modalReg');
const closeModal = document.querySelectorAll('.closeModal');
const login = document.querySelectorAll('.login');


openModalLog.addEventListener('click', () => {
    modalLog.classList.remove('hidden');
});


closeModal.forEach(button => {
    button.addEventListener('click', () => {
        modalLog.classList.add('hidden');
        modalReg.classList.add('hidden');
    });
});


openModalReg.forEach(button => {
    button.addEventListener('click', () => {
        modalReg.classList.remove('hidden');
        modalLog.classList.add('hidden');
    });
});


login.forEach(button => {
    button.addEventListener('click', () => {
        modalReg.classList.add('hidden');
        modalLog.classList.remove('hidden');
    });
});

window.addEventListener('click', (e) => {
    if (e.target === modalLog) {
        modalLog.classList.add('hidden');
    }
    if (e.target === modalReg) {
        modalReg.classList.add('hidden');
    }
});


