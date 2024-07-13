function addAndSubtract(arr) {
    let sumOrginal = 0;
    let sumNew = 0;

    for (let i = 0; i < arr.length; i++) {
        sumOrginal += arr[i];

        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }

        sumNew += arr[i];
    }

    console.log(arr);
    console.log(sumOrginal);
    console.log(sumNew);
}

addAndSubtract([1,2,3,4]);