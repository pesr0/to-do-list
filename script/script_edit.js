//brings edit checkbox reference and it's label
const check_edit = document.querySelector('#checkbox_edit');
const label = document.querySelector('.checkbox_edit_label');


//start edit mode, which consists in inserting some options in the screen
function edit_mode(){
    let box_foot = Array.from(document.querySelectorAll('.box_foot'));
    let button_delete = Array.from(document.querySelectorAll('.button_delete'));

    //check if edit mode button is clicked (which is a hidden checkbox)
    if (check_edit.checked){
        label.innerHTML = 'exit edit';
        label.id='chk_label';

        //add delete button to every input
        button_delete.forEach(function(button){
            button.style.display = 'block';
        });

        //add delete button to the box (bottom of the box)
        box_foot.forEach(function(foot){
            foot.style.display='flex';
        });
        
        //delete the segment by clicking on the delete button
        function del (event){
            const button = event.target;
            if(button.parentNode!=null && button.parentNode.parentNode!=null){
                if(button.parentNode.className=='box_foot'){
                    button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
                }
                
                else{
                    button.parentNode.parentNode.removeChild(button.parentNode);
                }
                //console.log(event);
            }
        }

        //calls del function when delete button ic clicked  
        button_delete.forEach(function(button){
            button.addEventListener('click', del);
        });

        //recalls edit_mode function on every keydown (to keep x buttons updated)
        document.addEventListener('keydown', edit_mode);
        return;
    }

    //this section identifies when the checkbox gets unchecked and undo all the changes done before
    else{
        label.innerHTML = 'edit';
        label.id='';

        //remote delete button from every input
        button_delete.forEach(function(button){
            button.style.display = 'none';
        });

        //add delete button to the box (bottom of the box)
        box_foot.forEach(function(foot){
            foot.style.display='none';
        });

        return;
    }

}
    
check_edit.addEventListener('change', edit_mode);