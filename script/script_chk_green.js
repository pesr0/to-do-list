function chk_green(){
    let ol = Array.from(document.querySelectorAll('.mainlist'));
    let checkbox = Array.from(document.querySelectorAll('.check'));

    //checkbox checked counter
    let i=0;

    //passes on the array ol, aonde verify if the bx are checked, if they are, the id=chk_green is applied to the box, if not, no id is applied.
    ol.forEach(function(li_i, index){

        for(let j = 0; j<li_i.childElementCount; j++){
            if(li_i.children[j].children[1].value!='' && li_i.children[j].children[0].checked) i++;
        }

        if(li_i.children[li_i.childElementCount-1].children[1].value=='' && i===(li_i.childElementCount-2)&& i>0){
            li_i.parentNode.style.background ='rgb(173, 244, 173)';
            li_i.parentNode.style.border = '3px solid limegreen';
            li_i.parentNode.children[1].style.background ='rgb(173, 244, 173)';

        } 
        else if(li_i.children[li_i.childElementCount-1].children[1].value!='' && i===(li_i.childElementCount-1) && i>0){
            li_i.parentNode.style.background ='rgb(173, 244, 173)';
            li_i.parentNode.style.border = '3px solid limegreen';
            li_i.parentNode.children[1].style.background ='rgb(173, 244, 173)';

        }
        else{
            li_i.parentNode.style.background ='rgb(255, 203, 255)';
            li_i.parentNode.style.border = '1px solid black';
            li_i.parentNode.children[1].style.background ='rgb(255, 203, 255)';
        }

        i=0;
    
    });

    checkbox.forEach(function(check){
        check.addEventListener('change', chk_green);
    });
}
document.addEventListener('keyup', chk_green);