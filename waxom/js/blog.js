const mobileAccordeon = {
    data(){
        return{
            buttonText:[
                {string:'Nam liber tempor cum soluta nobis eleifend option;'},
                {string:'Option congue nihil imperdiet doming id quod mazim placerat facer;'},
                {string:'Eodem modo typi, qui nunc nobis videntur parum futurum;'},
                {string:'Investigationes demonstraverunt lectores'}
            ],
            textId:[
                {string:'firstRowMobile'},
                {string:'secondRowMobile'},
                {string:'thirdRowMobile'},
                {string:'fourthRowMobile'}
            ],
            mainMobileText:[
                {string:'firstMobileText'},
                {string:'secondMobileText'},
                {string:'thirdMobileText'},
                {string:'fourthMobileText'}
            ],
            hiddenText:[
                {string:'asdfg'},
                {string:'qwerty'},
                {string:'zxcvbnm'},
                {string:'lkjhgfd'},
            ]
        }
    },
    template:`
        <div class="accordion accordion-flush" id="mobileAccordeon">
            <div class="accordion-item" v-for:='(n,index) in 4'>
                <h2 class="accordion-header" :id=textId[index].string>
                    <button class="mob-accordeon-button collapsed" data-bs-toggle="collapse" :data-bs-target="'#'+mainMobileText[index].string" aria-expanded="false">
                        {{buttonText[index].string}}
                    </button>
                </h2>
                <div :id=mainMobileText[index].string class="accordion-collapse collapse" data-bs-parent="#mobileAccordeon" :aria-labelledby=textId[index].string>
                    <div class="accordion-body">
                        <p class='paragraphMobile'>{{hiddenText[index].string}}</p>
                    </div>
                </div>
            </div>
        </div>
        `
}

const someInfo = {
    data(){
        return{
            imgLink:[
                {link:'img/someInfo/clients.png'},
                {link:'img/someInfo/cups.png'},
                {link:'img/someInfo/blog.png'},
                {link:'img/someInfo/likes.png'},
                {link:'img/someInfo/launched.png'},
            ],
            h2:[
                {number:3587},
                {number:207},
                {number:2500},
                {number:873},
                {number:900},
            ],
            p:[
                {string:'satisfied clients'},
                {string:'cups of coffee'},
                {string:'blog posts'},
                {string:'likes'},
                {string:'we launched'},
            ]
        }
    },
    template:`
        <article v-for:='(n, index) in 5'>
            <div class='img-cont'>
                <img :src=imgLink[index].link>
            </div>
            <h2>{{h2[index].number}}</h2>
            <p>{{p[index].string}}</p>
        </article>
    `
}
const blog = Vue.createApp({
    components: {
        'mobile-accordeon': mobileAccordeon,
        'some-info':someInfo
    }
}).mount('#blog')


