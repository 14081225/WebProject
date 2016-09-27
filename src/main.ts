class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        var i:number = 0;
var j:number = 0;
var n:number = Math.floor(Math.random()*10+1);
var line:number = 0;

var a = "";
var b = "";
var c = " ";
var d = "*";

line = getLine(n);
Build(line);

function Build(n:number):void {
    for(i = 0;i < n; i++) {
       for(j = 0;j < n-i;j++) {
           a = a + c;
       }
       for(j = 0;j < 2*i+1;j++) {
           b = b + d;
       }
       console.log(a + b);
       a = ""
       b = ""
    }

}


function getLine(line:number):number {
    return line;
}
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};