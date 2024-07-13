function nxn(num) {
    for (let i = 0; i < num; i++) {
        let print = "";
        for (let j = 0; j < num; j++) {
            print += num + " ";
        }

        console.log(print);
    }
}

nxn(3);