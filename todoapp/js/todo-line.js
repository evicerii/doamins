const todoLine = {
    data(){
        return{
            nameLines:[
                {string: 'learn HTML'},
                {string: 'learn CSS'},
                {string:'learn JS'},
                {string:'learn JS'},
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
            <input type='text'>
            <div class="todoList">
                <div class='line-block All Active' v-for:='(n,index) in 5'>
                    <input type='checkbox' :id=nameLines[index].string @click='classForm'>
                    <label :for=nameLines[index].string>{{nameLines[index].string}}</label>
                </div>
            </div>
            <div class="search-type">
                <div class='button-block' v-for:='(n,index) in 3'>
                    <input type="radio" name='checklist' class='todo-radio-search-type' :id=buttonType[index].string @click='sortBy'>
                    <label :for=buttonType[index].string>{{buttonType[index].string}}</label>
                </div>
            </div>
        </div>
    `,
    methods:{
        classForm: function(event){ 
            event.target.parentNode.classList.toggle('Complited') ;
            event.target.parentNode.classList.toggle('Active') 
        },
        sortBy: function(event){
            const all = document.getElementsByClassName('All');
            const id = event.target.id;
            const idList = document.getElementsByClassName(id);
            for(let i = 0; i< all.length; i++){
                console.log(all[i]);
                all[i].classList.remove('visibleRow');
            }
            for(let i = 0; i< idList.length; i++){
                console.log(idList[i]);
                idList[i].classList.add('visibleRow');
            }
               
        },
    }
}

const todoapp = Vue.createApp({
    components:{
        'todo-line':todoLine,
    }
}).mount('#main')
