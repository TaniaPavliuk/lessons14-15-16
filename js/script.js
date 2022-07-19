"use strict"

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const close = document.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
	nav.classList.add('_active');
})
close.addEventListener('click', () => {
	nav.classList.remove('_active');
})