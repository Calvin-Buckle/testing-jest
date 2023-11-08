function reverseString(string){
let splitString = string.split('');
let reverse = splitString.reverse('');
let join = reverse.join('');
return join
}

module.exports = reverseString;