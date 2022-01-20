const allElem = document.querySelectorAll('.img-cont');
let eArr = [];

allElem.forEach(element=>{
    element.addEventListener('click',()=>{checkTwo(element)})
})

//limits the number of checked elems
function checkTwo(e){
    e.querySelector('div').classList.remove('hideElem');
    e.querySelector('div').classList.add('checkElem');
    let checkElem =  e.parentNode.querySelectorAll(`.checkElem`)
    eArr.push(e);
    
    if (eArr.length == 2 && eArr[0].classList[1] == eArr[1].classList[1]){
        eArr.forEach(el=>{
            el.addEventListener('click', (event) => { return false; });
        })
        eArr = []
    }else if(eArr.length == 2){
        returnHide(checkElem);
        eArr = []
    }
}

function returnHide(a){
    a.forEach(elem=>{
        setTimeout(()=>{
            elem.classList.remove('checkElem')
            elem.classList.add('hideElem')
        },500)
    })
}