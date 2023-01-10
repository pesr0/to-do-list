const main = document.querySelector('#boxes');

//add + new box of inputs and a new title input
function adiciona ()
    {
        const div =document.createElement('div');
        div.className = 'box'; 
        main.appendChild(div);

        const ol = document.createElement('ol');
        ol.className= 'mainlist';
        div.appendChild(ol);

        const li = document.createElement('li');
        li.className= 'list_fItem';
        ol.appendChild(li);

        const inp = document.createElement('input');
        inp.className = 'input_text input_title';
        inp.placeholder = 'Please insert this section title';
        li.appendChild(inp);
        inp.focus();

        //add + new inputs inside te box os inputs
        function add_input (event)
        {
            //count how many empty inputs exists in the list
            let j = 0;
            for(let i = 0; i < ol.childElementCount; i++)
            {
                if (ol.children[i].children[0].value==='')j++;
            }

            //when backspace is clicked, remove empty inputs when the last input isn't empty, and add a new bottom empty input
            if(event.keyCode === 8)
            {
                for (let i=0; i<ol.childElementCount; i++)
                {
                    if(ol.children[i].children[0].value===''&& ol.children[ol.childElementCount-1].children[0]!='')
                    {
                        ol.removeChild(ol.children[i]);
    
                        if(j>1) return;

                        if(j===1)
                        {
                            const new_li = document.createElement('li');
                            new_li.className = 'list_item';
                            ol.appendChild(new_li);

                            const new_inp = document.createElement('input');
                            new_inp.placeholder='Insert a new item here';
                            new_inp.className='input_text';
                            new_li.appendChild(new_inp);
                            
                            const chk = document.createElement('input');
                            chk.type = 'checkbox';
                            chk.className = 'check';
                            new_li.appendChild(chk);

                            new_inp.addEventListener('keydown', add_input);
                            return;
                        }
                    }
                }
            }

            //if keydown is "Enter" a new input is added if there are no empty inputs
            if (event.keyCode === 13) 
            {
                for(let i = 0; i < ol.childElementCount; i++)
                {
                    //Verifies if there is another empty input
                    if (ol.children[i].children[0].value==='') 
                    {
                        console.log('string vazia encontrada'); return;
                    }
                }

                //If there are no empty inputs anymore, one new is created
                const new_li = document.createElement('li');
                new_li.className= 'list_item';
                ol.appendChild(new_li);

                const new_inp = document.createElement('input');
                new_inp.placeholder='Insert a new item here';
                new_inp.className='input_text';
                new_li.appendChild(new_inp);

                const chk = document.createElement('input');
                chk.type = 'checkbox';
                chk.className = 'check';
                new_li.appendChild(chk);

                new_inp.focus();
                new_inp.addEventListener('keydown', add_input);
            }
        }

        inp.addEventListener('keydown', add_input);
    
    }


document.querySelector('.button-m').addEventListener('click', adiciona);
