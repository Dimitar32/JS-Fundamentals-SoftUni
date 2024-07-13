function maxSeq(arr) {
    let lenSeq = 1;
    let lenSeqMax = 1;
    let elementSeq = arr[0];
    let result = [];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) {
            lenSeq += 1;
            if (lenSeq > lenSeqMax) {
                lenSeqMax = lenSeq;
                elementSeq = arr[i];
            }
        } else {
            lenSeq = 1;
        }
    }

    for(let i = 0; i < lenSeqMax; i++) {
        result[i] = elementSeq
    }

    console.log(result.join(' '));
}