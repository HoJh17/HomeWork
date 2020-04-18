export const add = (a,b) => {
    var reg_a ="" ,reg_b ="" , reg_c ="" ,answer =""
    for (var i = 1 ; i <= a.length ; i++)
        reg_a = reg_a + a[a.length - i]
    for (var j = 1 ; j <= b.length ; j++)
        reg_b = reg_b + b[b.length - j]
    for(var k = 0 ; k < ((a.length >= b.length)?a.length-b.length:b.length-a.length) ; k++){
        if(a.length >= b.length)
            reg_b = reg_b + "0"
        else
            reg_a = reg_a + "0"
    }//
    var reg =[]
    reg.push(0)
    for(var k = 0 ; k < ((a.length >= b.length)?a.length:b.length) ; k++){
        reg.push(Math.floor((parseInt(reg_a[k],10)+parseInt(reg_b[k],10)+reg[k])/10))
        reg_c = reg_c + ((parseInt(reg_a[k],10)+parseInt(reg_b[k],10)+reg[k])%10).toString()
    }
    for (var x = 1 ; x <= reg_c.length ; x++)
        answer = answer + reg_c[reg_c.length - x]
    return answer //((parseInt(reg_a[k],10)+parseInt(reg_b[k],10)+0)%10).toString()//answer//Math.floor((parseInt(reg_a[0],10)+parseInt(reg_b[0],10)+9)/10)
}