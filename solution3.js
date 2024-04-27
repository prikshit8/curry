const curry = function (fn) {
    return function curriedFn(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        else {
            return function (...next) {
                return curriedFn(...args, ...next);
            }
        }
    }
}