const test = {
    data(){
        return{
            omega:['a','b','b','c']
        }
    },
    template:`
        <div id='ce'>
            {{omega}}
        </div>
        <div id='de'></div>
    `
    ,
    methods:{
        startSome(test){
            let start = document.getElementById('de');
            let end = document.getElementById('ce')
            test(start,end)
        },
        initSame(elem,res){
            elem.innerHTML = res.innerHTML
            let a = new Promise(()=>console.log('host pidor'))
            a;
        },
    },
    mounted(){
        document.getElementById('ce').addEventListener('click',this.startSome(this.initSame))
    }
}
const reactComponentsCont = Vue.createApp({
    components:{
        'test':test,
    }
}).mount('.wrap')