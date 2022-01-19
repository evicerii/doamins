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
            <div class='hideElem'></div>
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
        const allSlot = document.querySelector('.game-field').querySelectorAll('.img-cont');
        
        //give elem random class
        allSlot.forEach(element => {
            let classIndex = this.randomClassValue();
            element.classList.add(this.classes[classIndex])
        });
        
        let rewrite = [];

        //if elem class number not %2==0, than add elem name to rewrite arr
        for(let a = 0; a < this.classes.length; a++){
            if (document.querySelectorAll('.'+this.classes[a]).length % 2 !== 0){
                rewrite.push(document.querySelectorAll('.'+this.classes[a]));
            }
        }

        
        //swap class uneven elem
        while(rewrite.length > 0){
            /* console.log(rewrite[0][0].classList[1]) */
            rewrite[0][0].classList = rewrite[1][0].classList
            /* console.log(rewrite[0][0].classList[1]) */
            rewrite.splice(0,2);
        }

        //place image
        for(let i=0; i < 20; i++){
            let imgCont = document.querySelectorAll('.img-cont')[i];
            imgCont.querySelector('img').src ='img/' + imgCont.classList[1] + '.jpg';
        }
    }
}

const findTwo = Vue.createApp({
    components:{
        'game-field':gameField
    }
}).mount('.screen-game')