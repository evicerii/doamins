
const linkNav = {
    data(){
        return{
            value:[
                {string: '#home'},
                {string: '#aboutUs'},
                {string: '#portfolio'},
                {string: '#features'},
                {string: '#blog'},
                {string: '#pricing'},
                {string: '#shortcodes'},
                {string: '#contact'}
            ],
            links:[
                {string: 'Home'},
                {string: 'About Us'},
                {string: 'Portfolio'},
                {string: 'Features'},
                {string: 'Blog'},
                {string: 'Pricing'},
                {string: 'Shortcodes'},
                {string: 'Contact'},
            ]
        }
    },
    template:`
    <li class="nav-item" 
    v-for:="(link,index) in links">
    <a class="nav-link" aria-current="page" :href=value[index].string>{{link.string}}</a>
    </li>
    `
}

const links = Vue.createApp({
    components: {
        'link-nav':linkNav
    }
})

links.mount('#main-nav')