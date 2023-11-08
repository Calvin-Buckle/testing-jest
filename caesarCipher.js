function Encryption(string, key){
    let alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]

    let encrypted = ''

    let splitString = string.split;
    for(let i = 0; i < string.length; i++){
        let char = string[i].toUpperCase();
        if(alpha.includes(char)){
            let index = alpha.indexOf(char);
            let newIndex = (index + key) % 26;
       
      if (string[i] === string[i].toUpperCase()){
       encrypted += alpha[newIndex];
      }else{
         encrypted += alpha[newIndex].toLowerCase();
      }
    }else{
        encrypted += string[i]
    }
    }
    return encrypted





    
    


}





module.exports = Encryption;