const gameField = {
    data(){
        return{
            classes:[
                'apple', 'banana', 'potato', 'tomato', 'melon'
            ]
        }
    },
    template:`
    <section class='game-field'>
        <div v-for:='(n,index) in 20'>
            <p>apple</p>
        </div>
    </section>
    `,
    methods:{
        randomClassValue(){
            const arrLength = this.classes.length;
            //random index of classes
            let indexIcon = Math.floor(Math.random()*arrLength);
            return indexIcon;
        }
    },
    mounted(){
        const allSlot = document.querySelector('.game-field').querySelectorAll('div');
        
        allSlot.forEach(element => {
            let classIndex = this.randomClassValue();
            element.classList.add(this.classes[classIndex])
        });
        
        let rewrite = [];
        console.log(this.classes.length)
        for(let a = 0; a < this.classes.length; a++){
            if (document.querySelectorAll('.'+this.classes[a]).length % 2 !== 0){
                rewrite.push(document.querySelectorAll('.'+this.classes[a]))
            }
        }
        while(rewrite.length > 0){
            document.querySelector('.' + rewrite[0]).classList = document.querySelector('.' + rewrite[1]).classList
            rewrite.splice(0,2)

        }
    }
}

const findTwo = Vue.createApp({
    components:{
        'game-field':gameField
    }
}).mount('.screen-game')