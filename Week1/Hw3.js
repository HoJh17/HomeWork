export const isPrime = (n) => {
    var check 
    for(var i = 3 ; i <= n/2 ; i++){
       if(n % i == 0){
            return false
        }
    }
    return true
}
