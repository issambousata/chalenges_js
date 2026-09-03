// __________________level 1__________________________

//---------- 1 ------------------

function Hello(name){
    return `Hello ${name}` ;
}
console.log( Hello("sam"));


//---------- 2 ------------------
const somme =(a , b)=>{
    return `${a} + ${b} = ${a + b}`;
}
console.log(somme(7 , 9));


//---------- 3 ------------------
function square(num){
    return num ** 2 ;
}
console.log( square(9));


// __________________level 2__________________________

//---------- 1 ------------------
function celsiusToFahrenheit(c){
    return (c * 9/5) + 32 ;
}
console.log( celsiusToFahrenheit(5) );



//---------- 2 ------------------

const isEmpty =(str)=>{

    let count = -1 ;

    for(let i=0 ; i<=str.length ; i++){

        if(str[i] != " " ){

            count ++ ;
        } 
    }
    return count == 0 ;
}
console.log( isEmpty("    "));


//---------- 3 ------------------

const factorial=function(N){
    
    let facto = 1 ;
    let NF = 1 ;

    for(let j=1 ; j<=N ; j++){

        facto *= j

        if(j>1) NF += " * "+j
    }
    return ` ${NF} = ${facto}` ;
}
console.log(factorial(4));


// __________________level 3__________________________

//---------- 1 ------------------
function calculate(a, b, operation){
    switch(operation){
        case "+":
            return a + b ;
            break ;
        case "-":
            return a - b ;
            break ;
        case "*":
            return a * b ;
            break ;
        case "/":
            return a / b ;
            break ;
        default :
            return `${operation} est pas un operator mathematique ` ;

    }
}
let sum = calculate(5 , 9 ,"+") ;
console.log(sum);


//---------- 2 ------------------

function createMultiplier(original_multiplier){

    return (multiplier)=>{

        return  original_multiplier * multiplier ;

    }
}
const double = createMultiplier(8) ;

console.log( double(6));


//---------- 3 ------------------

function filterOddNumbers(arr, callback){

    let filterArray = [] ;

    for(let x=0 ; x<=arr ; x++){

        if(callback){

            filterArray.push(arr[x])
        }
    }
    return filterArray ;
}

let array = [4,2,8,1] ;

const cal = ()=>{
    for(let y=0 ; y<=array.length ; y++){
        return array[y]%2 == 0
    }
}
console.log(cal());



