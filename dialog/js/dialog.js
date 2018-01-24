class Dialog {
    constructor( title='今天过得怎么样？', content='今天是美好的一天') {
        this.title=title;
        this.content=content;
        this.init()
    }

    init() {
        this.creatWrap();
        this.addEvent();
    }

    //创建标题
    createTitle() {
        let ol=document.createElement("ol");
        let span = document.createElement('span');
        ol.innerHTML=this.title;
        ol.className='title';
        span.innerHTML='X';
        span.className='span';
        ol.append(span)
        return ol;
    }

    //创建盒子内部内容
    createContent() {
        let h2=document.createElement('h2');
        let yesBtn=document.createElement('button');
        let noBtn=document.createElement('button');
        h2.innerHTML=this.content;
        h2.className='h2';
        yesBtn.innerHTML='YES';
        noBtn.innerHTML='NO';
        h2.append(yesBtn);
        h2.append(noBtn);
        yesBtn.className='btn';
        noBtn.className='btn'
        return h2;
    }
    //控制显示隐藏
    hide(){
        let Div=document.querySelectorAll('.box')[0];
        console.log(Div)
        Div.style.display='none'
    }
    //添加点击事件
    addEvent() {
        let span=document.querySelectorAll('.span');
        let btn=document.querySelectorAll('.btn');
        console.log(span)
        let _this = this;
        span[0].onclick=function(event) {
            _this.hide()
        }
        btn[0].onclick=function(event) {
            _this.hide()
        }
        btn[1].onclick=function(event) {
            _this.hide()
        }
    }

    //创建大盒子
    creatWrap() {
        let oDiv=document.createElement('div'); 
        let Tit=this.createTitle();
        let Content=this.createContent();

        oDiv.className='box';
        oDiv.append(Tit)
        oDiv.append(Content)
        document.body.append(oDiv);
    }
}
let dialog= new Dialog();