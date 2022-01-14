const todoLine = {
    data(){
        return{
            nameLines:[
                {string: 'learn HTML'},
                {string: 'learn CSS'},
                {string:'learn JS'},
            ]
            ,
            buttonType:[
                {string:'All'},
                {string:'Complited'},
                {string:'Active'}
            ]
            
        }
    },
    template:`
        <div class='todo-search'>
            <input type='text' id='todo-search-row' @click='searchItem'>
            <div class="todoList">
                <div class='line-block All Active visibleRow' v-for:='(n,index) in 3'>
                    <input type='checkbox' :id=nameLines[index].string @click='classForm'>
                    <label :for=nameLines[index].string>{{nameLines[index].string}}</label>
                </div>
            </div>
            <div class="search-type">
                <div class='button-block' v-for:='(n,index) in 3'>
                    <input type="radio" name='checklist' class='todo-radio-search-type' :id=buttonType[index].string @click='sortByRadioId'>
                    <label :for=buttonType[index].string>{{buttonType[index].string}}</label>
                </div>
            </div>
        </div>
    `,
    methods:{
        classForm(event){ 
            event.target.parentNode.classList.toggle('Complited') ;
            event.target.parentNode.classList.toggle('Active') 
        },
        sortByRadioId(event){
            const all = document.getElementsByClassName('All');
            const id = event.target.id;
            const idList = document.getElementsByClassName(id);

            if(document.querySelector('activeRadioId')){
                document.querySelector('activeRadioId').classList.remove('activeRadioId');
            }
            document.getElementById(id).classList.add('activeRadioId');

            for(let i = 0; i< all.length; i++){
                all[i].classList.remove('visibleRow');
            }
            for(let i = 0; i< idList.length; i++){
                idList[i].classList.add('visibleRow');
            } 
        },
        searchItem(event){
            event.target.addEventListener('keyup',function(){
                const activeClass = document.getElementsByClassName('visibleRow');
                const inputValue = document.getElementById('todo-search-row').value;

                /*
                const id = document.getElementsByClassName('activeRadioId')[0].id;
                const idList = document.getElementsByClassName(id);

                console.log(idList);
                for(let i = 0; i< idList.length; i++){
                    idList[i].classList.add('visibleRow');
                } 
*/
                this.sortByRadioId;
                for(let i = 0; i < activeClass.length; i++){
                    if (activeClass[i].querySelector('label').innerHTML.includes(inputValue)){
                        activeClass[i].classList.add('visibleRow');
                    }
                    else{
                        activeClass[i].classList.remove('visibleRow');
                    }
                }
            });
            ;
        }
    }
}

const todoapp = Vue.createApp({
    components:{
        'todo-line':todoLine,
    }
}).mount('#main')
