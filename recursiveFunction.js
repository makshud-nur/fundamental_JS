//find factorial of n using recursive function
function fact(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * fact(n-1); /*each time this factorial function is called with a parameter, it'll go look for the function and that's how it goes until n==0 */
    }
}
var sum=fact(4);
console.log(sum);

function kilometerToMeter(kmeter){
    const mtr = kmeter * 1000;
    return mtr;
}
var kmtometer = kilometerToMeter(13);
console.log(kmtometer);