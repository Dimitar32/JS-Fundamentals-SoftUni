function isPerfectNumber(num) {
    let sumDivisors = 0;

    for (let i = num - 1; i >= 1; i--) {
        if (num % i == 0) {
            sumDivisors += i;
        }
    }

    if (sumDivisors == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}