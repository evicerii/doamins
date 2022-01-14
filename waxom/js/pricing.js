const postArticle = {
    data(){
        return{
            imgLink:[
                {link:'img/posts/foot.png'},
                {link:'img/posts/notebook.png'},
                {link:'img/posts/ship.png'},
            ]
        }
    },
    template:`
    <article v-for:='(n,index) in 3' class="postArticle">
        <div class="img-cont">
            <img :src=imgLink[index].link alt="">
        </div>
        <div class="date-cont">
            <span>30</span>
            <p>Sep.</p>
        </div>
        <div class='text-block'>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
            <button>Read More</button>
        </div>
    </article>
    `
}

const pricing = Vue.createApp({
    components:{
        'post-article':postArticle
    }
}).mount('#pricing')