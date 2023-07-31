// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
//
// getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1
//
// Task #2

function  getFactorial (gfn){
    if (gfn === 1 || gfn === 0){
        return 1}
    else{return gfn * getFactorial(gfn-1)}
}

console.log(getFactorial(4))