const sum = (...args) => {
    let res = 0;
    if (args.length === 0) {
        return res;
    }
    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }
    return function currySum(...next) {
        if (next.length === 0) {
            return res;
        }
        else return sum(...args, ...next);
    }
}