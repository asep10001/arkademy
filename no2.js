

function pembersih_angka(num){
  var clearedWhiteSpace = num.split(' ').join('');
  var newString = clearedWhiteSpace.split('-').join('');
  var length = newString.length;
  var newStringSliced= '';

  for(var i= 1; i<=length; i++){
    if(length % 3 ===0){
        if(i%3===0 && i !== length){
      //membagi string menjadi 3
        newStringSliced+=newString.slice((i-3), i).concat('-');}
        else if(i%3===0 && length%3===0){
         newStringSliced+=newString.slice((i-3), i);
      } 
    } else{
      if(i%3===0 && i !== length && i !== length-1){
      //membagi string menjadi 3
        newStringSliced+=newString.slice((i-3), i).concat('-');}
      else if (i === length && i % 3 !==0) {
        newStringSliced+=newString.concat('-').slice((i-4), (i-2));
        newStringSliced+='-' + newString.slice((i-2), i);
      } 
    }
    
  }
  console.log(newStringSliced); 
}


//contoh penggunaan
pembersih_angka('993141 -1323 14-232234335- 0 -9 ---9 -9 80 788-');
