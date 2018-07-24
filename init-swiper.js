!function(){
    let view = document.querySelector('#mySwiper');
    let controller = {
        view: null,
        swiper: null,
        swiperOption: {
            // Optional parameters
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function(view){
            this.view = view;
            this.initSwiper()
        },
        initSwiper: function(){
            this.swiper = new Swiper (
                this.view.querySelector('.swiper-container'),
                this.swiperOption
            )
        }
    }
    controller.init(view)
}.call()
