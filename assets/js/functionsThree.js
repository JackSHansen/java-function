

console.group();
// her skal du skrive din anonyme funktion
let myAnonFunc= function(){ 
    console.log("Hello World");
  };

  myAnonFunc();

// her kaldes, eller invokes din anonyme funktion gennem en variabel
console.log(myAnonFunc());


// her skal du skrive din arrow funktion
let myArrowFunc= () => {
    console.log("Hello World");
  };
  
  myArrowFunc();

// her kaldes, eller invokes din arrow funktion gennem en variabel
console.log(myArrowFunc());
console.groupEnd();