import './style.css';

const firstProjectBtn = document.querySelector('#one');

firstProjectBtn.addEventListener('mouseover', () => {
    document.querySelector('#one-card').classList.add('peak');
});

firstProjectBtn.addEventListener('mouseleave', () => {
    document.querySelector('#one-card').classList.remove('peak');
});

firstProjectBtn.addEventListener('click', () => {
    document.querySelector('#one-card').classList.remove('peak');
    document.querySelector('#one-card').classList.add('move');
});
