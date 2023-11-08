let analyzeArray = {
    min: function min(array){

        let minimum = array[0];

     for(let i = 0; i < array.length; i++){
    if(array[i] < minimum){
        minimum = array[i]}
    }
    return minimum
},

   max: function max (array){
    let maximum = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > maximum){
            maximum = array[i];
        }
    }
    return maximum
   },

   
   average: function average(array){
   let counter = 0
    for(let i = 0; i < array.length; i++){
        counter =counter + array[i]; 
    }
     return counter / array.length
   },
  
    
   length: function(array){
    return array.length
   }



};

module.exports = analyzeArray;