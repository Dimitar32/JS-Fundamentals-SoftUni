function heartDelivery(input) {
    let houses = input[0].split("@");
    let curPosition = 0;

    for(let i = 1; i < input.length; i++) {
        if (input[i] == "Love!") {
            break;
        }

        let command = input[i].split(" ");
        curPosition += Number(command[1]);

        if (curPosition >= houses.length) {
            curPosition = 0;
        }

        if(houses[curPosition] > 0) {
            houses[curPosition] -= 2;
            if (houses[curPosition] === 0) {
                console.log(`Place ${curPosition} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${curPosition} already had Valentine's day.`);
        }
        
    }

    console.log(`Cupid's last position was ${curPosition}.`);

    let failedPlaces = houses.filter(house => house > 0).length;
    if (failedPlaces === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }

}