System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PI;
    function circle(diameter) {
        return PI * diameter;
    }
    exports_1("circle", circle);
    return {
        setters:[],
        execute: function() {
            /**
             * Created by lixu on 16/12/29.
             */
            exports_1("PI", PI = 3.14);
        }
    }
});
//# sourceMappingURL=circle.js.map