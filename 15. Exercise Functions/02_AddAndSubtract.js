function addAndSubtract(num1, num2, num3) {
    let res = sum(num1, num2);
    
    return subtract(res, num3);

    function sum(sum1, sum2) {
        return sum1 + sum2;
    }

    function subtract(sub1, sub2) {
        return sub1 - sub2;
    }
}
