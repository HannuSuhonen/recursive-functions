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
        }else if(typeof object[property] === 'object' && object[property] !== null){
            return containsRecursive(object[property],value);
        }
    }
    return false;
}

function totalIntegersRecursive(array,total = 0){
    for(const property in array){
        if(typeof array[property] === "number"){
            total += 1;
        }else if(typeof array[property] === "object"){
            total += totalIntegersRecursive(array[property]);
        }
    }
    return total
}

function sumSquaresRecursive(list,total = 0){
    if(list.length === 0){
        return 0;
    }
    for(const property in list){
        if(typeof list[property] === "number"){
            total += list[property] * list[property];
        }
        if(typeof list[property] === "object"){
            total += sumSquaresRecursive(list[property]);
        }
    }
    return total;
}

function replicateRecursive(iterator,value,returnArr = []){
    if(iterator <= 0){
        return returnArr;
    }else{
        returnArr.push(value);
        return replicate(iterator - 1,value,returnArr);
    }
}

function fib(length){
    let array = [0,1];
    for(let i = 2; i < length; i++){
        array.push(array[array.length - 1] + array[array.length - 2])
    }
    if(length === 1) {
        return 0;
    }else if(length !== undefined){ 
        return array;
    }
}

function fibRecursive(length,array = [0,1]){
    if(length === 1 || length === 0){
        return 0;
    }
    if(length <= 2){
        return array;
    }else{
        array.push(array[array.length - 1] + array[array.length - 2])
        return fibRecursive(length - 1,array);
    }
}