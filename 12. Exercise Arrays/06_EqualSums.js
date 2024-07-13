function equalSums(arr) {
    let sumLeft = 0;
    let len = arr.length;
    let result = "no";
    
    for (let i = 0; i < len; i++) {
        let sumRight = 0;
        
        for (let j = i + 1; j < len; j++) {
            sumRight += arr[j];
        }

        if (sumLeft == sumRight) {
            result = i;
            break;
        }

        sumLeft += arr[i];
    }

    console.log(result);
}