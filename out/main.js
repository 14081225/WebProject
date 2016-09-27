var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        var i = 0;
        var j = 0;
        var n = Math.floor(Math.random() * 10 + 1);
        var line = 0;
        var a = "";
        var b = "";
        var c = " ";
        var d = "*";
        line = getLine(n);
        Build(line);
        function Build(n) {
            for (i = 0; i < n; i++) {
                for (j = 0; j < n - i; j++) {
                    a = a + c;
                }
                for (j = 0; j < 2 * i + 1; j++) {
                    b = b + d;
                }
                console.log(a + b);
                a = "";
                b = "";
            }
        }
        function getLine(line) {
            return line;
        }
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=main.js.map