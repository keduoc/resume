!function () {
    //给特殊元素加上类offset
    let specialTags = document.querySelectorAll('[data-x]')
    for(let i = 0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }

    //先找到最近的去除offset
    setTimeout(function(){findClosestAndRemoveOffset()},1100)

    //鼠标滚动得时候，再找最近得去除
    window.addEventListener('scroll',function(){
        findClosestAndRemoveOffset()
    })


    // helper
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for(let i = 1;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#'+id+'"]')  //('a[ href = "#siteskill" ]')
        let li = a.parentNode
        let children = li.parentNode.children
        for(let i = 0;i<children.length;i++){
            children[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()
