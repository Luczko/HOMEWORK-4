// 2)	Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.

Number.prototype.reverse = function() {
    let numberToString = this.toString();
    return(
      parseInt(
        numberToString
          .split("")
          .reverse()
          .join("")
      )
    );
  };

console.log((123).reverse())
