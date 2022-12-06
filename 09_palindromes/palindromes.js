const palindromes = function (string) {
    const regex = /[a-z]/g
    string = string.toLowerCase();
    let arr = string.match(regex);
    //let arr = string.split('');

    for (let i = string.length - 1; i > 0; i--){
       if(arr[0] === arr[i]){
        arr.shift();
        arr.pop();
       }
    }

    if(arr.length === 1 || arr.length === 0){return true;}
    else {return false;}
};



// Do not edit below this line
module.exports = palindromes;
