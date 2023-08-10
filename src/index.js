import './style.css';

function closeAllModals() {
    document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('move');
    });
}

document.querySelectorAll('.project').forEach((p) => {
    let { id } = p;
    p.addEventListener('click', () => {
        closeAllModals();
        document.querySelector(`#${id}-card`).classList.add('move');
    });
});

document.querySelectorAll('.cancel-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        closeAllModals();
    });
});
