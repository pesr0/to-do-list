const inp_search = document.querySelector('.input_search');

//function responsible to identifie which letter was inserted in inp_search
function search(){

    //Orignal NodeList transformed in array (.mainlist = original ol)
    let list = Array.from(document.querySelectorAll('.mainlist'));

    list.forEach(function(ol){

        for(let i=0; i<ol.childElementCount; i++){

            const text = ol.children[i].children[1].value;
            if(text==='') break;
            if(text.includes(inp_search.value) || text.includes(inp_search.value.toLowerCase()) || text.includes(inp_search.value.toUpperCase())){
                ol.parentNode.style.display ='block';
            }
            else ol.parentNode.style.display = 'none';
        }

    });

}

inp_search.addEventListener('input', search);