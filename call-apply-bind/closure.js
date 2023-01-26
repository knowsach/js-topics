// sumc(1)(2)(3)...(n)

var sum =  function(x){
  
    return  function (y){
        // x will be available in this function as well.
        if(y) {
            return sum(x+y); 
        } else {
            return x;
        }
    }
}
console.log(sum(2)(3)(5)(7)());