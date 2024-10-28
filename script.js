function sumRangeRecursive(n){
    if(n === 0){
        return 0;
    }else{
        return n + sumRangeRecursive(n - 1);
    }
}

function powRecursive(base, exponent){
    if(exponent === 1){
        return base;
    }
    else{
        return base * powRecursive(base,exponent - 1);
    }
}

function factorialRecursive(n){
    if(n === 1){
        return 1;
    }else{
        return n * factorialRecursive(n - 1);
    }
}