const main = document.querySelector('#caixas');    //main

    var i=0;

    function adiciona () {
        var div =document.createElement('div');            //container caixa de texto  
        var inp = document.createElement('input');        //botao dentro do container
        var ol = document.createElement('ol');             //lista do container

        div.className = 'caixa';
            
        inp.className = 'input_texto'
        inp.placeholder = 'Digite um novo item aqui'
        ol.className= 'lista';

        ol.appendChild(inp);
        div.appendChild(ol);
        main.appendChild(div);

        
    }
document.querySelector('.botao-m').addEventListener('click', adiciona);


 var input_texto = document.querySelector('.input_texto');
 var caixa = document.querySelector('.caixa');
 var lista = document.querySelector('.lista');


if (input_texto==''){
input_texto.style.margin ='auto';
}
