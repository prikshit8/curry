const curry = function () {
    let res = 0;
    return function (b) {
        if (b === undefined) {
            return res;
        }
        else {
            res = res + b;
            return res;
        }
    }
};