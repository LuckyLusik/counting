function countLetters (someString) {
  var noSpaces = someString.split(" ").join("").toLowerCase();
  var letterArr = noSpaces.split("");
  var letterCount = {};
  for (var i = 0; i < letterArr.length; i++){
    if(letterCount[letterArr[i]]){
      letterCount[letterArr[i]]++;
    }
    else {
      letterCount[letterArr[i]] = 1;
    }
  }
  console.log(letterCount);
  return letterCount;
}