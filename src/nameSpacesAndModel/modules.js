System.register(["./math/circle", "./math/rectangle"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Circle, rectangle_1;
    return {
        setters:[
            function (Circle_1) {
                Circle = Circle_1;
            },
            function (rectangle_1_1) {
                rectangle_1 = rectangle_1_1;
            }],
        execute: function() {
            //如果用angular2 写import
            // import {Component} from "@angular/core";
            console.log(Circle.PI);
            console.log(Circle.circle(10));
            console.log(rectangle_1.default(2, 3));
        }
    }
});
//# sourceMappingURL=modules.js.map