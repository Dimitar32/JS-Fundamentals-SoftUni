function arrayModifier(input) {
    let nums = input[0].split(" ");

    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(" ");
        let index1 = 0, index2 = 0;

        switch (command[0]) {
            case "swap":
                index1 = Number(command[1]);
                index2 = Number(command[2]);
                let buff = nums[index1];
                nums[index1] = nums[index2];
                nums[index2] = buff;

                break;
            case "multiply":
                index1 = Number(command[1]);
                index2 = Number(command[2]);
                nums[index1] = nums[index1] * nums[index2];

                break;
            case "decrease":
                for(let j = 0; j < nums.length; j++) {
                    nums[j]--;
                }

                break;
        }
    }

    console.log(nums.join(", "));
}