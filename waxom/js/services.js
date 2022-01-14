Vue.createApp([])
.component('services',{
    data(){
        return{
            value:[
                {string:'Web & App Design'},
                {string:'Development'},
                {string:'Customization'},
                {string:'Marketing'}
            ],
            paragraph:[
                {string:'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.'},
                {string:'Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
                {string:'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.'},
                {string:'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.'}
            ],
            imgLinks:[
                {link:'img/services/web.png'},
                {link:'img/services/development.png'},
                {link:'img/services/marketing.png'},
                {link:'img/services/customization.png'}
            ]

        }
    },
    template:`
    <article v-for:='(n, index) in 4' class='parent'
    >
        <div class='img-cont'>
            <img :src=imgLinks[index].link>
        </div>
        <h2>
            {{value[index].string}}
        </h2>
        <p>
            {{paragraph[index].string}}
        </p>
    </article>
    `
}).mount('#aboutUs')