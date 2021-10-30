function sumIndexValuesOfTwoArays(arr1, arr2){
    let sumArr = [];
    let currentIndex = 0;

    if(arr1.length && arr2.length){
        for(let i = 0; (i < arr1.length) && (i < arr2.length); i++ ){
            sumArr.push(arr1[i] + arr2[i]);
            currentIndex = i;
        }
    } 

    if(arr1.length > currentIndex + 1){
        for(currentIndex++; currentIndex < arr1.length; currentIndex++){
            sumArr.push(arr1[currentIndex])
        }
    } 

    if(arr2.length > currentIndex + 1){
        for(currentIndex++; currentIndex < arr2.length; currentIndex++){
            sumArr.push(arr2[currentIndex])
        }
    }

    return sumArr;
}

console.log(sumIndexValuesOfTwoArays([3, 5, 9], [2, 1, 9, 7]));
console.log(sumIndexValuesOfTwoArays([8], [3, 1, 9, 7]));
console.log(sumIndexValuesOfTwoArays([7, 2, 1], [2, 0]));
console.log(sumIndexValuesOfTwoArays([9], [2, 1, 9, 7]));
console.log(sumIndexValuesOfTwoArays([3, 5, 9, 34, 7, 2, 1], [2, 1, 9, 7]));
console.log(sumIndexValuesOfTwoArays([], []));