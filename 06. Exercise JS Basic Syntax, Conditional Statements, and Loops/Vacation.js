function vacation(numPeople, peopleType, weekDay) {
    var price;

    if (peopleType == "Students") {
        switch (weekDay) {
            case "Friday": price = numPeople * 8.45; break;
            case "Saturday": price = numPeople * 9.80; break;
            case "Sunday": price = numPeople * 10.46; break;
        }

        if (numPeople >= 30) {
            price = price* 0.85;
        }

    } else if (peopleType == "Business") {
        if (numPeople >= 100) {
            numPeople = numPeople - 10;
        }

        switch (weekDay) {
            case "Friday": price = numPeople * 10.90; break;
            case "Saturday": price = numPeople * 15.60; break;
            case "Sunday": price = numPeople * 16; break;
        }
    } else if (peopleType == "Regular") {
        switch (weekDay) {
            case "Friday": price = numPeople * 15; break;
            case "Saturday": price = numPeople * 20; break;
            case "Sunday": price = numPeople * 22.50; break;
        }

        if (numPeople >= 10 && numPeople <= 20) {
            price = price * 0.95;
        }
    }
    
    console.log("Total price: " + price.toFixed(2));
}

vacation(30, "Students", "Saturday");