// esercizio 1:
function reverseArray(a) {
    let reverseA = [];
    for (const element of a) {
        reverseA.unshift(element);
    }
    return reverseA;
}

// esercizio 2:
function simpleArraySum(ar) {
    let sum = 0;
    for (const element of ar) {
        sum += element;
    }
    return sum;
}

function simpleArraySum(ar) {
    return ar.reduce((total, element) => total + element);
}
