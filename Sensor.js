/* 우리가 개발한 collisionCheck() 함수는 매개변수로 인스턴스를
원한다...이유? 인스턴스는 x,y, width, height 를 가질수 있는 단위
이기 때문에.. 센서조차 인스턴스화 시켜 x,y,width,height를 보유하
게 하자..*/

//모든 센서들의 최상위 클래스정의
class Sensor{
    constructor(container, width, height, x, y){
        this.container=container;
        this.divLeft = document.createElement("div");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.divLeft.style.background="red";
        this.divLeft.style.width=this.width+"px";
        this.divLeft.style.height=this.height+"px";
        this.divLeft.style.position="absolute"; //wrapper의 자식
        this.divLeft.style.left=this.x+"px";
        this.divLeft.style.top=this.y+"px";
        this.container.appendChild(this.divLeft);
    }
}