export const stars = (n) => {
    var reg = []
    for(var i=0 ; i<n ; i++){    //第幾層
      reg.push("")               //產生空間
      for(var j=0 ; j<i+1 ;j++){  //迭代幾次
          reg[i] = reg[i] + "*"
      }
    }
    return reg;
  }

  console.log(stars(8))
