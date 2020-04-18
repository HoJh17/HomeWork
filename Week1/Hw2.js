export const capitalize = (str) => {
  var reg =[]
  for(var i =0 ; i< str.length ; i++){
    reg.push(str[i])
  }
  return (reg[0].toUpperCase()+str.slice(1))
}
