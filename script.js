window.onload = function () {
    
    function adiciona () {
    const div =document.createElement('div');

        div.style.boxSizing = 'border-box';
        div.style.margin = '0.9%';
        div.style.background= 'white';
        div.style.width= '267px';
        div.style.height= '45%';
        div.style.border = '1px solid black';

const caixas = document.querySelector('#caixas');
caixas.appendChild(div);
    }

document.querySelector('.botao-m').addEventListener('click', adiciona);
}