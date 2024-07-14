function shoppingList(input) {
    let items = String(input[0]).split('!');

    for (let i = 1; i < input.length; i++) {
        if (String(input[i]) == "Go Shopping!") {
            break;
        }

        let commands = String(input[i]).split(" ");
        switch(commands[0]) {
            case "Urgent": 
                if (!items.includes(commands[1])) {
                    items.unshift(commands[1]);
                }
                break;
            case "Unnecessary":  
                if (items.includes(commands[1])) {
                    let index = items.indexOf(commands[1]);
                    items.slice(index);
                }
                break;
            case "Correct": 
                if (items.includes(commands[1])) {
                    let index = items.indexOf(commands[1]);
                    items[index] = commands[2];
                }
                break;
            case "Rearrange": 
                if (items.includes(commands[1])) {
                    let index = items.indexOf(commands[1]);
                    items.slice(index);
                    items.push(commands[1]);
                }
                break;
        }
    }

    console.log(items.join(", "));
}


shoppingList(["Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])