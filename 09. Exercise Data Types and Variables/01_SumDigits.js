function sumDigits(num) {
    let sum = 0;
    let textNum = String(num);

    for (let i = 0; i < textNum.length; i++) {
        sum += Number(textNum[i]);
    }

    console.log(sum);
}