function printAndSum(start, end) {
    var sum = 0;
    let print = "";

    for (var i = start; i <= end; i++) {
        sum = sum + i;
        print = print + i + " ";
    }

    console.log(print);
    console.log("Sum: " + sum)
}

printAndSum(5, 10);