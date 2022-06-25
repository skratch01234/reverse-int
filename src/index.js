module.exports = function reverse (n) {
    
    if(n<0){
     let minus=String(n).split('')
     let plus=minus.slice(1)
     plus=plus.reverse().join('')
     return +plus
    }else{
        let rev=String(n).split('').reverse().join('') 
        return +rev
    }

    

}
