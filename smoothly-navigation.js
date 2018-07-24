!function(){
    let view = document.querySelector('nav')
    let controller = {
        view: null,
        aTags: null,
        init: function(view){
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function(){
            // 求帧率  告诉tween，根据浏览器的性能来决定多少毫秒一帧，初始化，让动画更流畅
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },

        bindEvents: function(){
            let aTags = this.view.querySelectorAll('ul > li > a')  // querySelectorAll 之后可跟标签名，可跟id或类
            for(let i = 0; i < aTags.length; i++){
                aTags[i].onclick = (x) => {
                    x.preventDefault();  // 阻止默认动作  如果本身是a标签，阻止之后会不再跳转
                    let a = x.currentTarget;
                    let href = a.getAttribute('href'); // '#siteskill'
                    let element = document.querySelector(href);
                    this.scrollToElement(element);
                }
            }
        },
        scrollToElement: function(element){
            let top = element.offsetTop  //这个高度是指div初始状态距离窗口的高度，不变
            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop

            let coords = {y:currentTop}
            let t = Math.abs((s/100)*200)  //求绝对值
            if(t>500){t = 500}
            // tween的文档给的API
            new TWEEN.Tween(coords)  //放入初始位置
                .to({y:targetTop},t)  //放入目标位置和时间
                .easing(TWEEN.Easing.Quadratic.InOut)  //选择函数类型，使用什么方式变化
                .onUpdate(function() {
                    window.scrollTo(0,coords.y)   //每次变化时执行的操作
                }).start();  //开始执行操作，每次执行时，y值不断发生变化
        },
    }
    controller.init(view)
}.call()
