!function(){
    let view = document.querySelector('section.message');

    let model ={
        //初始化数据
        init: function(){
            let APP_ID = 'eOoDV2PdFybS4xJkWhYaNHBb-gzGzoHsz';
            let APP_KEY = 'xslqoxHSpFwihQ0N9dkvp1oI';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        // 获取数据
        fetch: function(){
            let query = new AV.Query('Message');
            return query.find()     // find 返回一个 Promise 对象
        },
        //创建数据
        save: function(name,content){
            let Message = AV.Object.extend('Message');
            let message = new Message();
            return message.save({   // save 返回一个 Promise 对象
                'name': name,
                'content': content
            })
        }
    };
    let controller = {
        view: null,
        model: null,
        messageList: null,
        form: null,
        init: function(view,model){
            this.view = view;
            this.model = model;

            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('#postMessageForm');
            this.model.init();
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages: function(){
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes);
                    array.forEach((item) => {
                        let li = document.createElement('li');
                        li.innerText = `${item.name}: ${item.content}`;
                        this.messageList.appendChild(li)
                    })
                },
                function (error) {
                    console.log('留言失败，请改天再来留言')
                }
            );
        },
        bindEvents: function () {
            this.form.addEventListener('submit',(e) => {
                e.preventDefault();
                this.saveMessage()
            })
        },
        saveMessage: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value;
            let name = myForm.querySelector('input[name=name]').value;
            this.model.save(name,content).then(function(object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view,model)
}.call()







// //创建 Testobject 表
// var TestObject = AV.Object.extend('TestObject');
// //在表中创建一行数据
// var testObject = new TestObject();
// //数据内容是‘hello world’
// //如果保存成功，运行 alert（‘’）
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })