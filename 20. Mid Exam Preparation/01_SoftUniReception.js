function softUniReception(input) {
    let allStudentsPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let allStudents = Number(input[3]);

    if (allStudents <= allStudentsPerHour) {
        console.log("Time needed: 1h.");
    } else {
        let time = Math.ceil(allStudents / allStudentsPerHour);
        let res = time + Math.floor(time / 4);
        console.log(`Time needed: ${res}h.`)
    }
}