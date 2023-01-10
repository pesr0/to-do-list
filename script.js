const main = document.querySelector('#caixas');    //main
 

function adiciona () {
       var div =document.createElement('div');
       var inp = document.createElement('input');
       var ol = document.createElement('ol');
        
        div.className = 'caixa';
        div.style.overflow = 'auto';
            
        inp.className = 'input_texto'
        inp.placeholder = 'Digite um novo item aqui'
        ol.className= 'lista';

        ol.appendChild(inp);
        div.appendChild(ol);
        main.appendChild(div);
        inp.focus();

        function adiciona_input (event) {
            if (event.keyCode != 13) {console.log('enter nao pressionado'); return;}    
            for(let i = 0; i < ol.childElementCount; i++){
                    if (ol.children[i].value==='') {console.log('string vazia encontrada'); return;}
                }
               
                let novo_inp = document.createElement('input');
                novo_inp.placeholder='Digite um novo item aqui';
                novo_inp.className='input_texto';
                ol.appendChild(novo_inp);
                novo_inp.focus();
                novo_inp.addEventListener('keydown', adiciona_input);
            }

            inp.addEventListener('keydown', adiciona_input);
        
    }

document.querySelector('.botao-m').addEventListener('click', adiciona);
