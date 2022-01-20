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
            el.classList.add('blocked');
        })
        eArr = []
    }else if(eArr.length == 2){
        returnHide(eArr);
        eArr = []
    }
}

function returnHide(a){
    a.forEach(elem=>{
        setTimeout(()=>{
            elem.querySelector('div').classList.remove('checkElem')
            elem.querySelector('div').classList.add('hideElem')
        },500)
    })
}