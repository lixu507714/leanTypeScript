/**
 * Created by lixu on 16/12/28.
 */
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcuateCircumference(diameter) {
            return PI * diameter;
        }
        Circle.calcuateCircumference = calcuateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
