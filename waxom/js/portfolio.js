const porfolioNav = {
    data(){
        return{
            value:[
                {string: 'All'},
                {string: 'Web Design'},
                {string: 'Mobile App'},
                {string: 'Illustration'},
                {string: 'Photography'},
            ],
            personalId:[
                {id: 'portfolioNav1'},
                {id: 'portfolioNav2'},
                {id: 'portfolioNav3'},
                {id: 'portfolioNav4'},
                {id: 'portfolioNav5'},
            ],
            checked:[
                {check:true},
                {check:false},
                {check:false},
                {check:false},
                {check:false}
            ]
        }
    },
    template:`
        <div v-for:= '(n,index) in 5'>
            <input type="radio" class="btn-check asd" name="btnradio" :id=personalId[index].id autocomplete="off" :checked=checked[index].check>
            <label class="btn asdf" :for=personalId[index].id>{{value[index].string}}</label>
        </div>
    `
}

const portfolioCard = {
    data(){
        return{
            imgLinks:[
                {img:'img/lastProject/phone.png'},
                {img:'img/lastProject/stone.png'},
                {img:'img/lastProject/book.png'},
                {img:'img/lastProject/bird.png'},
                {img:'img/lastProject/journal.png'},
                {img:'img/lastProject/ocean.png'},
            ],
            h2:[
                {string:'Claritas Etiam Processus'},
                {string:'Quam Nutamus Farum'},
                {string:'Usus Legentis Videntur'},
                {string:'Claritas Etiam Processus'},
                {string:'Quam Nutamus Farum'},
                {string:'Usus Legentis Videntur'},
            ],
            p:[
                {string:'Photography, Nature'},
                {string:'Graphic Design, Mock-Up'},
                {string:'Photography, Holiday'},
                {string:'Photography, Nature'},
                {string:'Graphic Design, Mock-Up'},
                {string:'Photography, Holiday'},
            ],
        }
    },
    template:`
    <article v-for:='(n,index) in 6'>
        <div class="img-cont">
            <img :src=imgLinks[index].img alt="">
            <div class='shadow-hover'>
                <div class="hover-cont">
                    <img src='img/lastProject/link.png'>
                    <img src='img/lastProject/lupa.png'>
                </div>
            </div>
        </div>
        <div class="text-cont">
            <h2>{{h2[index].string}}</h2>
            <p>{{p[index].string}}</p>
        </div>
    </article>
    `
}
const portfolio = Vue.createApp({
    components: {
        'portfolio-nav':porfolioNav,
        'portfolio-card':portfolioCard
    }
})

portfolio.mount('#portfolio')