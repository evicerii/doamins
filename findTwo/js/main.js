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
        <div v-for:='(n,index) in 20' class='img-cont'>
            <img>
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
        for(let a = 0; a < this.classes.length; a++){
            /* console.log(document.querySelectorAll('.'+this.classes[a]).length) */
            if (document.querySelectorAll('.'+this.classes[a]).length % 2 !== 0){
                rewrite.push(document.querySelectorAll('.'+this.classes[a]))
            }
        }
        console.log(rewrite)
        for(let i=0; i < 20; i++){
            let imgCont = document.querySelectorAll('.img-cont')[i]
            imgCont.querySelector('img').src ='img/' + imgCont.classList[1] + '.jpg'
        }
        console.log(rewrite[0][1].classList)
        while(rewrite.length > 0){
            /* console.log(rewrite[0][0].classList[1]) */
            rewrite[0][0].classList = rewrite[0][1].classList
            /* console.log(rewrite[0][0].classList[1]) */
            rewrite.splice(0,2);
        }
    }
}

const findTwo = Vue.createApp({
    components:{
        'game-field':gameField
    }
}).mount('.screen-game')