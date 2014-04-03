(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.quantile = function(values, p) {
            var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
            return e ? v + e * (values[h] - v) : v;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();