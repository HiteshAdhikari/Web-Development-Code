// here, we will use function 
function peoplegreet (name,greet){
    //  let  name2 = " Potter";
    // This will not overide as name2 is globaly declared(here we are re-declaring it) and also under a function it can't be changed .
     console.log(name + greet);
  
}
let name0  = "Hitesh ";
let name1  = "Pankaj ";
let name2  = "Rohan ";
let name3  = "Ravi ";
let greet = "Yup what's up!!";
peoplegreet(name0,greet);
peoplegreet(name1,greet);
peoplegreet(name2,greet);
peoplegreet(name3,greet);

// let value = peoplegreet(name3,greet);
// console.log(value);
// This will print undefined as it's not returning back anything.

                                    // returning some value
    //the parameter of the function can have different name but it's not a good practise therfore use the same name as the variable decalred .
    function sum(a, b, c=12 ){
        let d = a+b+c;
        return d;
    }
    let a= 2;
    let b= 4;
    let c= 8;
    let returnvalue= sum(a,b,c);
    let returnvalue2= sum(a,b);
    // In this we used default argument if nothing sended than it will take the default value , you can see it took c= 12 and printed 18.
    console.group(returnvalue);
    console.group(returnvalue2);

                     // Creating function for finding minimum nad maximum number

function maximum(a , b ){
    if(a>b) console.log("a is greater"  +" " + a);
    else console.log("b is greater"  + " " + b);
    
}
function minimum(a , b ){
    if(a>b) console.log("b is greater"  +" " +b);
    else console.log("a is greater"  +" " +a);
}
let num1 =23;
let num2 = 67;
maximum(num1, num2);
minimum(num1, num2);


