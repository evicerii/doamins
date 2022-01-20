const allElem = document.querySelectorAll('.img-cont')

allElem.forEach(element=>{
    element.addEventListener('click',()=>{checkTwo(element)})
})

//limits the number of checked elems
function checkTwo(e){
    e.querySelector('div').classList.remove('hideElem');
    e.querySelector('div').classList.add('checkElem');
    let checkElem =  e.parentNode.querySelectorAll(`.checkElem`)
    if (checkElem.length == 2){
        checkElem.forEach(elem=>{
            setTimeout(()=>{
                elem.classList.remove('checkElem')
                elem.classList.add('hideElem')
            },500)
        })
    }
}

function rightTwo(e){
    
}