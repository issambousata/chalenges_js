// __________________level 1__________________________

// ----------1--------

let age = 23 ;
console.log("I am " + age + " years old " );

// ----------2----------

let temperature = 22 ;
if (30 < temperature) console.log("It's hot outside!");
else console.log("The weather is nice.");

// ----------3----------

let number = 6780 ;
if (number % 2 == 0) console.log(" even ");
else console.log(" odd ");

// ________________level 2__________________________

// ----------1----------

let score = 86 ;
if (90 <= score && score <= 100) console.log("A");
else if (79 <= score && score <= 89) console.log("B");
else if (70 <= score && score <= 79) console.log("A");
else if (score < 70) console.log("F");


// ----------2----------

let N1 = 45 ;
let N2 = 34;
let N3 = 56 ;

if (N1 < N2){
    if (N2 < N3){
        console.log(N3 + " est max");
    }else{
        console.log(N2 + " est max");
        
    }
}else{
    if(N1 < N3){
        console.log(N3 + " est max");        
    }else{
        console.log(N1 + " est max");
        
    }
}


// ----------3----------

let year = 2014 ;

if (year % 4 == 0 && year % 100 !== 0){
    console.log("True");
    
}else if (year % 400 == 0){
    console.log("True");
    
}else{
    console.log("False");
    
}


//_______________level 3 _______________________

// ---------- 1 ----------

let num1 = 4 ;
let num2 = 3 ;
let operator = "$"

switch (operator) {

    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);      
        break;
        
    case "/":
        console.log(num1 / num2);
        break;

    default  :
        console.log(`this ` + operator + ` is not a string like "+", "-", "*", "/"`);
        

}

// ---------- 2 ----------

let angele1 = 45 ;
let angele2 = 30 ;
let angele3 = 105 ;

let somme = angele1 + angele2 + angele3  ;
if (somme == 180  &&  0 < angele1  &&  0 < angele2  &&  0 < angele3 ){
    console.log("is a triangle");
    
}else{
    console.log("is not a triangle");
    
}

//---------- 3 ---------------

let weight = 76;
let height = 1.70 ;

let BMI = weight / (height * height) ;
console.log(BMI);
if(BMI < 18.5){
    console.log("Underweight");
    
}else if(18.5 <= BMI && BMI <= 24.9){
    console.log("Normal");
    
}else if (25 <= BMI){
    console.log("Overweight");
    
}
