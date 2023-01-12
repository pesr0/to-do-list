const background = document.querySelector(".background_blur");
const help_button = document.querySelector('.button-q');
const close_button = document.querySelector('button');
const help_guide = document.querySelector('.help_guide');

function show_help(){
        background.style.display= 'block';
        help_guide.style.display= 'block';

}

function close_help(){
    background.style.display='none';
    help_guide.style.display= 'none';
}

help_button.addEventListener('click', show_help);
close_button.addEventListener('click', close_help);
background.addEventListener('click', close_help);