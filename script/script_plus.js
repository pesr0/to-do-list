const main = document.querySelector('#boxes');

//add + new box of inputs and a new title input
function add_main (){

        const input_box =document.createElement('div');
        input_box.className = 'box'; 
        main.appendChild(input_box);

        const ol = document.createElement('ol');
        ol.className= 'mainlist';
        input_box.appendChild(ol);

        const li = document.createElement('li');
        li.className= 'list_fItem';
        ol.appendChild(li);

        const inp = document.createElement('input');
        inp.className = 'input_text input_title';
        inp.placeholder = 'Please insert this section title';
        li.appendChild(inp);
        inp.focus();

        //add + new inputs inside te box os inputs
        function add_input (event){
            
            //count how many empty inputs exists in the list
            let j = 0;
            for(let i = 0; i < ol.childElementCount; i++){

                if (ol.children[i].children[0].value==='')j++;
            }

            //when backspace is clicked, remove empty inputs when the last input isn't empty, and add a new bottom empty input
           if(event.keyCode === 8){

                for (let i=0; i<ol.childElementCount; i++){

                    //avaliate is there are some empty input, if the empty input isn't the last one, its removed
                    if(ol.children[i].children[0].value===''&& ol.children[ol.childElementCount-1].children[0]!=''&&ol.children[i].children[0].className!='input_text input_title'){

                        ol.removeChild(ol.children[i]);
    
                        // j>1 means that there were more than 1 empty inputs, than, with all removed (unless the bottom) the function is done
                        if(j>1) return;

                        //j===1 means that it was only one input which was empty, and by that it means that the bottom input is filled 
                        //so this section add an empty input in the bottom
                        if(j===1){

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

                            chk.addEventListener('change', chk_detect);
                            new_inp.addEventListener('keydown', add_input);
                            
                            //detect if the checkbox is marked, if it is the text in the input get a "line-through" decoration, if its not, none decoration
                            function chk_detect(){
                                if (chk.checked && new_inp.value!='') new_inp.style.textDecoration='line-through';
                                else new_inp.style.textDecoration='none';
                            }
                            return;
                        }
                    }
                }
            }

            //if keydown is "Enter" a new input is added if there are no empty inputs
            if (event.keyCode === 13){

                for(let i = 0; i < ol.childElementCount; i++){

                    //Verifies if there is another empty input
                    if (ol.children[i].children[0].value===''){

                        console.log('empty string found'); return;
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

                chk.addEventListener('change', chk_detect);
                new_inp.focus();
                new_inp.addEventListener('keydown', add_input);

                //the same checkbox check detect function as above
                function chk_detect(){
                    if (chk.checked && new_inp.value!='') new_inp.style.textDecoration='line-through';
                    else new_inp.style.textDecoration='none';
                }
            }
        }

        inp.addEventListener('keydown', add_input);
    }


document.querySelector('.button-m').addEventListener('click', add_main);