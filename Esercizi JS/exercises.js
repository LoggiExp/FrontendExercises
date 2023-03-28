// esercizio 1:
function reverseArray(a) {
    let reverseA = [];
    for (const element of a) {
        reverseA.unshift(element);
    }
    return reverseA;
}


