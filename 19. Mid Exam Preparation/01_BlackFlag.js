function blackFlag(input) {
    let days = Number(input[0]);
    let plunderPerDay = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let allPlunder = 0;

    for (let i = 1; i <= days; i++) {
        allPlunder += plunderPerDay;

        if (i % 3 == 0) {
            allPlunder += (0.5 * plunderPerDay);
        }

        if (i % 5 == 0) {
            allPlunder = 0.7 * allPlunder;
        }
    }

    if (allPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((allPlunder/expectedPlunder)*100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(5, 40, 100);