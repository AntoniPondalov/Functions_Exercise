function nxnMatrix(num){
    
    function lines(num) {
 
        let thelineOne = (num + ' ').repeat(num);
 
        return thelineOne + '\n';
    }

    function rows(a) {

        for(let i = 0; i <= a; i++) {
            if(i === a);
            return lines(a).repeat(a-1); 
          
        }
    }
let result = (lines(num) + rows(num));
console.log(result)

}
nxnMatrix(10)