class Town{
    constructor(input) {
        let inputArr = input.split(" | ");
        this.townName = inputArr[0];
        this.latitude = Number(inputArr[1]).toFixed(2);
        this.longitude = Number(inputArr[2]).toFixed(2);
    }

    output() {
        console.log(` town: '${this.townName}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`)
    }
}

function result(input) {
    for(let i = 0; i < input.length; i++) {
        let t = new Town(input[i]);
        t.output();
    }
}

result(["test | 23 | 23.54", "test2 | 324.34 | 43.1"]);

