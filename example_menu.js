const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menu_btn.addEventListener('click', () => {
    event.stopPropagation();
    menu.classList.toggle('active');
});

window.onclick = function (e) {
    menu.classList.remove('active');
};

/* document.querySelector('.menu-btn').addEventListener('click', ()=>{
    event.stopPropagation();
    document.querySelector('.menu').classList.toggle('active')
})
window.onclick = function (e) {
    document.querySelector('.menu').classList.remove('active')
} */
