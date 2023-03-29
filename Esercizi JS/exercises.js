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

// esercizio 3:
function staircase(n) {
    for (let i=0; i<n; i++) {
        let line = '';
        for(let k=1; k<(n-i); k++){
            line += " ";
        }
        for(let j=0; j<=i; j++){
            line += '#';
        }
        console.log(line);
    }
}

// esercizio 4:
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for(let i=0; i<n; i++){
        for(let j = i+1; j<n; j++){
            if((ar[i]+ar[j])%k === 0){
                count+=1;
            }
        }
    }
    return count;
}