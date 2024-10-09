function palindromeIntegers(arr){

    function checkIsPalindrome(num) {
        let numAsStr = num + ``;
        let reversedNum = numAsStr.split(``).reverse().join(``);

        return numAsStr === reversedNum;
    }

    for (let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }

}
palindromeIntegers([123,323,421,121])