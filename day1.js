// __________________level 1__________________________

//---------- 1 ------------------

let a = 1 ;

while( a<=20 ){

    // console.log(a);
    
    a++
}

//---------- 2 ------------------
 let c=0 

for(let b=1; b<=100 ; b++){

    c += b ;
    
}
// console.log(c);

//---------- 3 ------------------

let d = 8 ;

for( i=0 ; i<=10 ; i++){

    // console.log(`${d} * ${i} = ${d*i}`);
    
}


// __________________level 2__________________________

//---------- 1 ------------------


// for(e=1 ; e<=50 ; e++){

//     if(e % 3 == 0 && e % 5 == 0) console.log(e + " : FizzBuzz");

//     else if(e % 3 == 0) console.log(e + " : Fizz");

//     else if(e % 5 == 0) console.log(e + " : Buzz");

//     else console.log(e);
    

// }

//---------- 2 ------------------

let name = "Declare a string variable" ;
let NV = 0 ;

for(let j=0 ; j<name.length ; j++){

    if(name[j] == "a"|| name[j] == "e"  || name[j] == "i"  || name[j] == "o" || name[j] == "u" || name[j] == "y" ){

        NV ++ ;
    }
    
    
}
console.log(NV);


//---------- 3 ------------------


for(let x=1 ; x<=5 ; x++){
    let f = "" ;
    
    for(let y=1 ; y<=5 ; y++){

        f +="*" 
    }
    
    // console.log(x,"           ",f);
}


// __________________level 3__________________________

//---------- 1 ------------------

let N_multipl = 0 ;

for(let g=1 ; g<=50 ; g++){

    for(let h=1 ; h<=50 ; h++){

        if(g % h == 0){
            N_multipl ++
        }
    }

    if(N_multipl<= 2 ){
        
        console.log(g , "is a prime number ");
    }
    N_multipl = 0
    
    
}


//---------- 2 ------------------

// let m = "";

// for(let k=1 ; k<=5 ; k++){

//     for(let l=10 ; l=>10 ; l--){

//         m = 
//     }
// }