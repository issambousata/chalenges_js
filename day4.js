
// __________________level 1__________________________

// ----------  1  ----------
//Add a new color to the end, remove the first color, 

// method 1 
let colors =["red" , "green" , "orange"] ;

colors[colors.length] = "white" ;

let newColors = [] ;

for(let i=1 ; i<colors.length ;i++){

    newColors += colors[i] + " " ;
}

console.log(newColors);

// method 2

colors.push("blue") ;

colors.splice(0,1) ;

console.log(colors);


// ----------  2  ----------
// calculating the total sum.

let numbers = [8 , 7 , 3 , 9 , 97] ;
let sum = 0 ;
for(let j=0 ; j<numbers.length ; j++){
    sum += numbers[j] ;
}
console.log(sum);


// ----------  3  ----------
// cheking the value if exest in array .

function checkIfExest(arr , value){
    let count = 0 ;
    for(let i=0 ; i<arr.length ; i++){
        if(value == arr[i]) count ++ ;
    }

    return count > 0 ;
}

console.log( checkIfExest([8 , 7 , 56 , 98 , 2] , 56));



// __________________level 2__________________________

// ----------  1  ----------
//  returns the largest number

function maxNumber(numbers){

    let max = 0 ;
    for(let i=1 ; i<=numbers.length ; i++){
        if(numbers[i-1] < numbers[i]) max = numbers[i] ;

    }

    return max ;
}

console.log(maxNumber([6 , 8 , 46 , 9 , 3]));



// ----------  2  ----------

// filter duplicate values and returns only unique values.

function filter(array){
    let count = 0 ;
    for(let i=0 ; 0<array.length ; i++){
        for(let j=0 ; j<array.length ; j++){

        }

    }
}