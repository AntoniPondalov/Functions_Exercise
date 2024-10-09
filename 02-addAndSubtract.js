function addAndSubtract(num1, num2, num3) {
    function sum(x, y) {
        return x + y;
    }
    function substract(x, y) {
        return x - y
    }
    let tempResult = sum(num1, num2);
    let finalResult = substract(tempResult, num3);

    console.log(finalResult)

}
addAndSubtract(23, 6, 10)