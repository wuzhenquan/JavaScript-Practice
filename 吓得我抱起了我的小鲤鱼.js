let str
const yaoBaoBao = (n) => {
    if ( n===0 ) {
        str = '我的小鲤鱼'
    }else{
        yaoBaoBao( --n )
        str = '抱着'+str+'的我'
    }
  }

const hugMyLittleCarp = (n) => {
  yaoBaoBao(n)
  return ('吓得我抱起了'+str)
}

hugMyLittleCarp(3)