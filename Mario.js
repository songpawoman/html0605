class Mario extends GameObject {
    //주인공은 이미지를 둘러싼 wrapper
    //와 4개의 센서 막대도 잇어야 한다..
    //js에서 개발자가 생성자를 정의하지 않을 경우 
    //js 자체적으로 부모를 먼저 생성해준다..하지만 
    //개발자가 현재 클래스의 생성자를 정의할 경우 
    //개발자가 주도하는 것이기에, js에서 부모를 자동
    //생성해주지 않으므로,  개발자가 부모생성처리 까지
    //맡아야 한다..
    
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        //나에 대한 초기화 
        this.wrapper; //센서들을 감쌀 div
        this.sensorArray=new Array(4);
        
        this.wrapper=document.createElement("div");
        this.wrapper.style.width=this.width+"px";
        this.wrapper.style.height=this.height+"px";

        //바깥쪽 레퍼는 이미지를 포함하고 있어야 한다 
        //부모인 GameObject에서 img를 stage에 부착
        //했으나, 아래의 appendChild에 의해 부착대상이
        //wrapper로 변경됨(별도의 removeChild() 필요X )
        this.wrapper.appendChild(this.img);
        this.container.appendChild(this.wrapper);

        //실제적으로 움직이는 대상은 wrapper이므로, 
        //wrapper에 포지션이 적용되어야 함 
        this.wrapper.style.position="absolute";
        this.wrapper.style.left=this.x+"px";
        this.wrapper.style.top=this.y+"px";

        //좌측 센서 
        this.sensorArray[0] = new Sensor(this.wrapper, 1, 22, -1, ((this.height - 22)/2));
        
        //우측센서 
        this.sensorArray[1]= new Sensor(this.wrapper,1, 22, this.width, ((this.height - 22)/2) );


        //위쪽 센서
        this.divTop = document.createElement("div");
        this.divTop.style.background="red";
        this.divTop.style.width=22+"px";
        this.divTop.style.height=1+"px";
        this.divTop.style.position="absolute"; //wrapper의 자식
        this.divTop.style.left=((this.width - parseInt(this.divTop.style.width))/2)+"px";
        this.divTop.style.top=-(parseInt(this.divTop.style.height))+"px";
        this.wrapper.appendChild(this.divTop);

        //아래쪽 센서
        this.divDown = document.createElement("div");
        this.divDown.style.background="red";
        this.divDown.style.width=22+"px";
        this.divDown.style.height=1+"px";
        this.divDown.style.position="absolute"; //wrapper의 자식
        this.divDown.style.left=((this.width - parseInt(this.divDown.style.width))/2)+"px";
        this.divDown.style.top=(this.y+this.height)+"px";
        this.wrapper.appendChild(this.divDown);

        //생성된 4개의 센서를 
        this.sensorArray[0]=this.divLeft; //좌
        this.sensorArray[1]=this.divUp; //위
        this.sensorArray[2]=this.divRight; //우
        this.sensorArray[3]=this.divDown; //아래
    }
    

    //부모인 GameObject의 메서드가 마리오에 적용하기
    //엔 무리가 있으므로, 부모의 메서드를 업그레이드하여
    //마리오의 상황에 맞게 코드를 변경한다.. 오버라이딩..
    render(){
        this.wrapper.style.left=this.x+"px";
        this.wrapper.style.top=this.y+"px";
    }    
}