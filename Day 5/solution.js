function cons(a, b) {
    return new Array(a, b);
}

function car(pair) {
    const flattened = pair.flat(Infinity);
    return flattened[0];
}

function cdr(pair) {
    const flattened = pair.flat(Infinity);
    return flattened[flattened.length - 1];
}

console.log(car(cons(cons(6, 3), 4)))
console.log(cdr(cons(3, cons(1, 5))))