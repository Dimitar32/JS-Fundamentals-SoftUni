function movingTarget(input) {
    let targets = input[0].split(" ");

    for (let i = 1; i < input.length; i++) {
        if (input[i] == "End") {
            break;
        }

        let commands = input[i].split(" ");

        switch(commands[0]) {
            case "Shoot":
                let power = Number(commands[2]);
                let index = Number(commands[1]);
                if (index >= 0 && index < targets.length) {
                    targets[index] -= power;

                    if (targets[index] <= 0) {
                        targets.splice(index, 1)
                    }
                }
                
                break;
            case "Add":
                let value = Number(commands[2]);
                let elementIndex = Number(commands[1]);

                if (elementIndex >= 0 && elementIndex < targets.length) {
                    targets.splice(elementIndex, 0, value);
                } else {
                    console.log("Invalid placement!");
                }

                break;
            case "Strike":
                let radius = Number(commands[2]);
                let elementIndex2 = Number(commands[1]);

                if(elementIndex2 - radius >= 0 && radius + elementIndex2 < targets.length){
                    targets.splice(elementIndex2 - radius, radius * 2 + 1)
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
    }

    console.log(targets.join("|"));
}