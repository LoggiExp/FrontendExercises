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
// esercizio 5:
function compareTriplets(a, b) {
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i<a.length; i++) {
        if(a[i] > b[i]){
            aCount+=1;
        }
        else if(a[i] < b[i]){
            bCount+=1;
        }
    }
    return [aCount, bCount]
}
// esercizio 6: 
function hourglassSum(arr) {
    let max = [];
    for (let i = 0; i < arr.length - 2; i++){
        for (let j = 0; j < arr[i].length - 2; i++){
            max.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]); 
        }
    }
    return Math.max(...max)
}
// esercizio intermediate: https://www.hackerrank.com/challenges/non-divisible-subset/problem?isFullScreen=false
// 7 su 17 test passati, da rendere più efficiente
function nonDivisibleSubset(k, s) {
    let maxDivisibleArr = [];
    
    for (let i = 0; i < s.length; i++){
        let possibleMaxDivisibleArr = [];
        possibleMaxDivisibleArr.push(s[i]);
        
        for (let j = i + 1; j<s.length; j++){
           if (possibleMaxDivisibleArr.every(element => (element + s[j])%k)){
                possibleMaxDivisibleArr.push(s[j]);
           }
        }
        maxDivisibleArr.push(possibleMaxDivisibleArr.length);
    }
    return Math.max(...maxDivisibleArr);
}