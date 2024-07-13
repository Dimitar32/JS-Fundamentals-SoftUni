function loadingBar(num) {
    let load = num / 10;
    let print = "";

    for (let i = 0; i < 10; i++) {
        if (i < load){
            print += "%";
        } else {
            print += ".";
        }
    }

    if (num < 100) {
        console.log(num + "% [" + print + "]");
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log("[" + print + "]")
    }
}