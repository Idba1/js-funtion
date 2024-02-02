function result(mark, mark) {
    const total = mark + mark;
    return total;
}
const getResult = result(55, 80);


function result2(mark1, mark2) {
    return mark1 + mark2;
}
const getResult2 = result2(15, 80);


console.log(getResult, getResult2);






function doMath(num1, num2) {
    const sum = num1 + num2;
    console.log('sum is',sum);
    const diff = num1 - num2;
    console.log('diff is',diff);
    const multiply = sum * diff;
    console.log('multiply is',multiply);
    const result3 = multiply / 2;
    console.log('result3 is',result3);
    return result3;
}

const result3 = doMath(100, 50);
console.log(result3);