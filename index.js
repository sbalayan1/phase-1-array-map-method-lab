const titleCased = function titleCased(someArray) {
  let mapArray = someArray.map(function (element) {
    let adjustElement = element.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")
    
    return adjustElement;
  })
    return mapArray
}

titleCased(tutorials)



//split only works on a single string at a time. you have to .split each element of the tutorials array one by one. 
//.join -> lets you join an array. only works on arrays. Without the "spaces", it would just create an array with - dashes. 
// .map is good when you need the same number of outputs 
//what does substr create? -> essentially the number you give it is an index starting point of the string and returns the rest of the string from that starting point

//const tutorials = 'what does the this keyword mean?',
//console.log(tutorials.split(" "))
//const words = words.split(" ")

//the below works for splitting, iterating through, uppercasing, and rejoining a string. 
//tutorials.split('').map(word => word[0].toUpperCase + word.substr(1)).join(" ")

//tips.map()

//broken down version of running the .split and .map function 
//function titleCase(someString) {
  //let sentence = someString.toLowerCase().split(" ")
  //for (i = 0; i < sentence.length; i++) {
    //sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  //}
  //return sentence
//}

