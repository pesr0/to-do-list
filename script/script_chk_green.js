function chk_green(){
    let ol = Array.from(document.querySelectorAll('.mainlist'));
    let checkbox = Array.from(document.querySelectorAll('.check'));

    let i=0;

    ol.forEach(function(li_i, index){

        for(let j = 0; j<li_i.childElementCount; j++){
            console.log(li_i.children[j], index);
            if(li_i.children[j].children[1].value!='' && li_i.children[j].children[0].checked) i++;
        }

        if(li_i.children[li_i.childElementCount-1].children[1].value=='' && i===(li_i.childElementCount-2)&& i>0){
            console.log('ultimo vazio e todos ok');
            li_i.parentNode.id = 'chk_green';

        } 
        else if(li_i.children[li_i.childElementCount-1].children[1].value!='' && i===(li_i.childElementCount-1) && i>0){
            console.log('ultimo nao vazio e todos ok');
            li_i.parentNode.id = 'chk_green';

        }
        else li_i.parentNode.id = '';

    
    });
    console.log('i = '+ i);



    checkbox.forEach(function(check){
        check.addEventListener('change', chk_green);
    });
}
document.addEventListener('keyup', chk_green);