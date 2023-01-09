//function shifting an upper character by 15
function upperShiftedBy15(char) {                         
    let charToAscii = char.charCodeAt(0); //changes input to ascii

    //90 = Z ->therefore, if the input + 15 > 90, we need to recycle back to the beginning of the alphabet (also remember, 65 = A for ascii)
    if(charToAscii + 15 > 90) { 
    /*the calculation for the line below works as:
    1. input + 15 -> gives us the "overflowing" +15 ascii number (the number beyond the capital alphabet)
    2. - 25 - to reset back to the beginning of the alphabet (which can be looked as (-90 + 65) = -25 )
    3. Since we are dealing with the inclusiveness of the number at either end of the alphabet, we need to have both -25 (instead of -26) and +14 (instead of+15)
    */
        return String.fromCharCode((charToAscii + 14) - 25)  
    //if input + 15 !>= 90 - we can just add 15, as it won't "overflow" to ascii chars beyond the (capital) alphabet
    }else { 
        return String.fromCharCode(charToAscii + 15)    
    }
}
  
//function shifting a lower character by 15
function lowerShiftedBy15(char) {
    let charToAscii = char.charCodeAt(0); //changes input to ascii

    //122 = z ->therefore, if the input + 15 > 90, we need to recycle back to the beginning of the alphabet (also remember, 97 = a for ascii)
    if(charToAscii + 15 > 122) {
        /*the calculation for the line below works as:
    1. input + 15 -> gives us the "overflowing" +15 ascii number (the number beyond the capital alphabet)
    2. - 25 - to reset back to the beginning of the alphabet (which can be looked as (-122 + 97) = -25 )
    3. Since we are dealing with the inclusiveness of the number at either end of the alphabet, we need to have both -25 (instead of -26) and +14 (instead of+15)
    */
        return String.fromCharCode((charToAscii + 14) - 25)
    }else {
        //if input + 15 !>= 122 - we can just add 15, as it won't "overflow" to ascii chars beyond the (lowerCase) alphabet
        return String.fromCharCode(charToAscii + 15)
    }
}


//function to return the encoded/decoded string
function shiftBy15Cypher(str) {   
  
    let result = [];    //create an empty array
    
    for (let i = 0; i < str.length; i++){ //iterate through the given string input

        if (/[A-Z]/.test(str[i])) {  
          result.push(upperShiftedBy15(str[i]))  // the upperShiftedBy15 function is only executed if the str[i] = A-Z and only then pushed
        }else if (/[a-z]/.test(str[i])){         // the lowerShiftedBy15 function is only executed if the str[i] = a-z and only then pushed
          result.push(lowerShiftedBy15(str[i]));
        }else if (/[^A-Za-z]/.test(str[i])){ 
            result.push(str[i]);                 // otherwise, str[i] is just pushed - leaving any other characters unchanged
        }

    }
    return result.join(''); //array is joined and modified string is returned 
 
}

/* Here is the code without the comments:

function upperShiftedBy15(char) {                         
    let charToAscii = char.charCodeAt(0); 

    if(charToAscii + 15 > 90) { 
    return String.fromCharCode((charToAscii + 14) - 25)  
    
    }else { 
        return String.fromCharCode(charToAscii + 15)    
    }
}
  
  
function lowerShiftedBy15(char) {
    let charToAscii = char.charCodeAt(0); 

    if(charToAscii + 15 > 122) {
        return String.fromCharCode((charToAscii + 14) - 25)
    }else {
        return String.fromCharCode(charToAscii + 15)
    }
}

function shiftBy15Cypher(str) {   
  
    let result = [];   
    
    for (let i = 0; i < str.length; i++){ 

        if (/[A-Z]/.test(str[i])) {  
          result.push(upperShiftedBy15(str[i]))  
        }else if (/[a-z]/.test(str[i])){        
          result.push(lowerShiftedBy15(str[i]));
        }else if (/[^A-Za-z]/.test(str[i])){ 
            result.push(str[i]);               
        }

    }
    return result.join(''); 

}
*/

    console.log(shiftBy15Cypher("szap T nzfyepo nzccpnewj :/"))