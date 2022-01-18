const redactArea = {
    data(){
        return{
            const:{
                parent:`event.target.parentNode.parentNode`,
                input : `eval(this.const.parent).querySelector('.redact-area')`,
            }
        }
    },
    template:`
        <div class='redact-icon-cont'>
            <button class='redact-icon' @click='inputValue'>редактировать</button>
            <div class='redact-confirm-block'>
                <button class='redact-confirm' @click='fixChanges'>подтвердить</button>
                <button class='redact-undo' @click='undoChanges'>отмена</button>
            </div>
            <input class='redact-area'>
        </div>
    `,
    methods:{
        //give input tag value
        async inputValue(event, newText){
            const parent = event.target.parentNode;
            const text = eval(this.const.parent).querySelector('.node-redact-element').innerHTML;
            parent.querySelector('.redact-area').value = text;
            console.log(parent);
            let a = await this.loadTextValue();
            
            let b = parent.parentNode.querySelector('.node-redact-element').innerHTML = a
            console.log(b)
        },
        fixChanges(event){
            const input = eval(this.const.input).value;
            let redactElement = eval(this.const.parent).parentNode.querySelector('.node-redact-element');
            redactElement.innerHTML = input;
        },
        undoChanges(event){
            eval(this.const.input).value = '';
        },
        async loadTextValue(){
            let response = await fetch('node.json');
            let commits = await response.json();
            return(commits.heading)
        }
    }
}
const reactComponentsCont = Vue.createApp({
    components:{
        'redact-area':redactArea,
    }
}).mount('.node-wrap')