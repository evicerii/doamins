
const carouselItem = {
    data(){
        return{
            value:[
            ]
        }
    },
    template:`
    <div class="carousel-item"
    v-for:='n in 4'>
        <img src="img/1slide.jpg" class="d-block" alt="...">
    </div>
    `
}
const indicator = {
    template:`
    <button v-for:='n in 4'
    type="button" data-bs-target="#waxom-prev" :data-bs-slide-to="[n]" class='ind-button'
    ></button>
    `
}

const carousel = Vue.createApp({
    components: {
        'carousel-item':carouselItem,
        'indicator':indicator
    }
})


carousel.mount('#home')