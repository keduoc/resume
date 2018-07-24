!function(){
    let view = document.querySelector('#siteWelcome');
    let controller ={
        view: null,
        init: function(view){
            this.view = view;
            this.deactive();
        },
        deactive: function (view) {
            setTimeout(() => {this.view.classList.remove('active')},1000)
        }
    };
    controller.init(view)
}.call()
