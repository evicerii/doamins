const allElem = document.querySelectorAll('.img-cont')


allElem.forEach(e=>{
    e.addEventListener('click', ()=>{
        e.querySelector('div').classList.remove('hideElem');
        e.querySelector('div').classList.add('checkElem');
        let checkElem =  e.parentNode.querySelectorAll(`.checkElem`)
        if (checkElem.length == 2){
            checkElem.forEach(elem=>{
                elem.classList.remove('checkElem')
                elem.classList.add('hideElem')
            })
        }
        
    })
})