function oddAndEvenSum(num) {
    let textNum = String(num);
    let len = textNum.length;
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < len; i++) {
        let num1 = Number(textNum[i]);

        if (num1 % 2 == 0) {
            sumEven += num1;
        } else {
            sumOdd += num1;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}