export const isPalindromes = (str) => {
    var reg ="" 
    for (var i = 1 ; i <= str.length ; i++){
        reg = reg + str[str.length - i]
    }
    return (str == reg)?true:false
}