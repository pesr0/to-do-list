const main = document.querySelector('#boxes');
 
//add + new box of inputs and a new title input
function adiciona () {
       const div =document.createElement('div');
       div.className = 'box'; 
       main.appendChild(div);

       const ol = document.createElement('ol');
       ol.className= 'mainlist';
       div.appendChild(ol);

       const li = document.createElement('li');
       ol.appendChild(li);

       const inp = document.createElement('input');
        inp.className = 'input_text input_title';
        inp.placeholder = 'Please insert this section title';
        li.appendChild(inp);
        inp.focus();

        //add + new inputs inside te box os inputs
        function add_input (event) {
           // console.log(ol.children[ol.childElementCount])
            let j = 0;
            for(let i = 0; i < ol.childElementCount; i++){
                if (ol.children[i].value==='')j++;
            }

            if(event.keyCode==8){
            if (j>1){
                for (let i=0; i<ol.childElementCount; i++){
                    if(ol.children[i].value===''&& ol.children[i]!=ol.children[ol.childElementCount-1]) ol.removeChild(ol.children[i]);
                }
            }
            for (let i=0; i<ol.childElementCount; i++){
                if(j==1 && ol.children[i].value===''&& ol.children[ol.childElementCount-1]!='') {
                ol.removeChild(ol.children[i]);
                const new_inp = document.createElement('input');
                const li_1 = document.createElement('li');
                new_inp.placeholder='Digite um novo item aqui';
                new_inp.className='input_text';
                ol.appendChild(li_1);
                li_1.appendChild(new_inp);
            }
            }
        }

            if (event.keyCode != 13) {console.log('enter nao pressionado'); return;}    
            for(let i = 0; i < ol.childElementCount; i++){
                    if (ol.children[i].value==='') {console.log('string vazia encontrada'); return;}
                }
               
                const new_inp = document.createElement('input');
                const li_2 = document.createElement('l1');
                new_inp.placeholder='Insert a ney item';
                new_inp.className='input_text';
                ol.appendChild(li_2);
                li_2.appendChild(new_inp);
                new_inp.focus();
                new_inp.addEventListener('keydown', add_input);
            }

            inp.addEventListener('keydown', add_input);
    
        }
        
    
document.querySelector('.button-m').addEventListener('click', adiciona);
