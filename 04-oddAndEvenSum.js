function oddAndEvenSum(num){
    let evenDigitSum = 0;
    let oddDigitSum = 0;

    let numAsStr = num + ``;
    for (let i = 0; i < numAsStr.length; i++) {
        let curDigit = Number(numAsStr[i]);

        if (curDigit % 2 === 0) {
            evenDigitSum += curDigit;
        } else {
            oddDigitSum += curDigit
        }
    }
    console.log(`Odd sum = ${oddDigitSum}, Even sum = ${evenDigitSum}`)

}
oddAndEvenSum(3495892137259234)