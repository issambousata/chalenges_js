
// __________________level 1__________________________

// ----------  1  ----------

let name = "yassine" ;
console.log(name.length);
console.log(name.toUpperCase());


// ----------  2  ----------

function FandLcaracter(string){

    let String = string.trim() ;

    let stringLength = String.length ;

    return `first characters is (${String[0]}) and last characters is (${String[stringLength-1]}) ` ;
}

let string = "      good morning everyone   "

console.log(FandLcaracter(string));


// ----------  3  ----------

let sentence = "I love apples" ;

let newSentence = sentence.replace("apples" , "banans") ;

console.log(newSentence);



// __________________level 2__________________________

// ------------------   1   --------------------------

function isPalindrome(string){

    string = string.trim() ;
    let newString = "" ;

    for(let i=string.length - 1  ; 0<=i ; i--){

        newString += string[i] ;
    }

    if(newString === string){
        return `${string} is a palindrome ` ;
    }

    return `${string} is a not palindrome ` ;
}

console.log( isPalindrome("apple apple"));



// ------------------   2   --------------------------

function reverse(string){
    let reverseString = "" ;
    for(let i=string.length - 1 ; 0<=i ; i--){
        reverseString += string[i] ;
    }
    return reverseString
}

console.log( reverse("hello"));

// ------------------  3  ------------------------

function countChar(str, char){

    let count = 0 ;

    for(let i=0 ; i<str.length ; i++){

        if(str[i] == char){
            count ++ ;
        }
    }

    return `( ${char} ) is appears ${count} time in this string` ;
}

console.log( countChar("hello world" , "l"));


// __________________level 3__________________________

// ----------  1  ----------

function capitalizes(sentence){

    let arrSentence = sentence.trim().split(" ") ;
    let newSentence = "" ;

    for(let i=0 ; i<arrSentence.length ; i++){

        let upperChar = "" ;

        let mot = arrSentence[i] ;

        let newMot = "" ;

        for(let j=0 ; j<mot.length ; j++){

            if(j==0) newMot = mot[j].toUpperCase() ;

            else newMot+= mot[j] ;
            
        }
        newSentence += newMot + " ";
    }
    return newSentence ;

}

console.log(capitalizes("hello every body"));


// ------------  2  ------------------

function compresses(str){
    let newStr = "" ;
    let count = 1 ;
    for(let i=1 ; i<=str.length ; i++){

        if(str[i] != str[i-1]){
            newStr += str[i-1] + count ;
            count = 1 ;

        }else{

           count ++ ; 
        }
    }
    return newStr ;
}

console.log(compresses("aaabcdd"));



// ------------  3  ------------------

function anagrams(str1 , str2){

    let isExist = true ;

    if(str1 == str2) return "not anagrams" ;

    else {

        for(let i=0 ; i<str1.length ; i++){

            if(str2.indexOf(str1[i]) < 0) isExist = false ;
        }

        return isExist ;
    }
}
console.log(anagrams("hello" , "helol"));

