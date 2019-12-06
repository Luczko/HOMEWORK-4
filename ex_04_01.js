// 1)	Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.

String.prototype.reverse = function() {
    return (
      this.split("")
        .reverse()
        .join("")
    );
  };

console.log("luczko".reverse())
