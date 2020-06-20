//jawaban no 1
function format_input(...input){
  var arg1 = input[0];
  var indexArr = [];
  var outputArr =`${arg1.slice(0, arg1.indexOf('{'))}`;
  if (arg1.includes('{')){
      arg1 = arg1.split('{');
      var length = arg1.length;
      if(length>1){
        for ( var i = 1; i<length; i++){
          index = arg1[i];
          index = parseInt(index.charAt(0));
          indexArr.push(index+1);
        }
      }
  }
  for(var j = 0; j < indexArr.length; j++){
      outputArr+=' '+input[indexArr[j]];
      
    }
  return console.log(outputArr);
}


//contoh jawaban no 1
format_input('This is an {2}', 'Halangan', 'Rintangan', 'Exercise');
format_input ('Cecep itu {0}{2}{3}', 'ganteng', 'cakep', 'tinggi', 'putih', 'jelek')

