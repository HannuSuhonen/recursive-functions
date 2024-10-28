console.log("hello world!");

function sumRangeRecursive(n){
    if(n === 0){
        return 0;
    }else{
        return n + sumRangeRecursive(n - 1);
    }
}

function sumRange(n = 3){
    let total = 0;
    for(let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

function powRecursive(base, exponent){
    if(exponent === 1){
        return base;
    }
    else{
        return base * powRecursive(base,exponent - 1);
    }
}