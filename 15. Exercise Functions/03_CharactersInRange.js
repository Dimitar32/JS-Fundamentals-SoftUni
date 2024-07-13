function charInRange(chrStart, chrEnd) {
    let start = Math.min(chrStart.charCodeAt(0), chrEnd.charCodeAt(0));
    let end = Math.max(chrStart.charCodeAt(0), chrEnd.charCodeAt(0));
    let res = [];
    let index = 0;

    for (let i = start + 1; i < end; i++) {
        res[index] = String.fromCharCode(i);
        
        index++;
    }

    console.log(res.join(" "));
}

charInRange('a', 'z');