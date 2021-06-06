'use strict';

function toggleMenu() {
    var elNavList = document.querySelector('.nav-list');
    var elScreen = document.querySelector('.main-screen');
    var elMenuBtn = document.querySelector('.menu-btn');
    var elHeader = document.querySelector('.main-header');
    elHeader.classList.toggle('on')
    if (elMenuBtn.innerText === 'x') {
        elMenuBtn.innerText = '☰'
    } else elMenuBtn.innerText = 'x';
    elScreen.classList.toggle('on');
    elNavList.classList.toggle('open-list');
}


function openModal() {
    var elScreen = document.querySelector('.main-screen');
    var elModal = document.querySelector('.modal');
    elScreen.classList.add('on');
    elModal.style.display = 'block';
}

function closeModal(ev) {
    if (ev) {
        ev.preventDefault();
        ev.onClick = alert('your email successfully saved');
    }
    var elScreen = document.querySelector('.main-screen');
    var elModal = document.querySelector('.modal');
    elScreen.classList.remove('on');
    elModal.style.display = 'none';
}