function perfectNumber(num) {

    function divisersum(atr) {
        let sum = 0;

        for (let i = 1; i < num; i++) {

            if (num % i === 0) {
                sum += i;

            }

        }
        return sum;
    }
    let result = divisersum(num);
    if (result === num) {
        console.log("We have a perfect number!")

    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(1236498)