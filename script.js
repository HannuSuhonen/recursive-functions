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

function allRecursive(array,callback, index = 0){
    if(array.length === index){
        console.log(index);
        return true;
    }
    if(!callback(array[index])){
        return false;
    }
    return allRecursive(array,callback, index + 1);
}

function productOfArrayRecursive(array, index = 0, product = 1){
    if(array.length === index){
        return product
    }
    return productOfArrayRecursive(array,index + 1, product * array[index]);
}

function containsRecursive(object,value){
    for(const property in object){
        if(object[property] === value){
            return true;
        }else{
            return containsRecursive(object[property],value);
        }
    }
    return false;
}