!function(){
    let view = document.querySelector('nav');
    let controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function(){
            let liTags = this.view.querySelectorAll('ul > li');  //注意写法
            let len = liTags.length;
            for(let i = 0; i < len; i++){
                liTags[i].onmouseenter = (x) => {
                    let li = x.currentTarget;
                    li.classList.add('active')
                }
                liTags[i].onmouseleave = (x) => {
                    let li = x.currentTarget;
                    li.classList.remove('active')
                }
            }
        }
    };
    controller.init(view)
}.call()
