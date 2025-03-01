function converter(){
  var number_sys_1, number_sys_2, number, result, value, length, number_list;
  number_sys_1 = document.getElementById("convert_from").value;
  number_sys_2 = document.getElementById("convert_to").value;
  number = document.getElementById("number").value;
  result = document.getElementById("result").value;

  number_sys_1 = Number(number_sys_1);
  number_sys_2 = Number(number_sys_2);
  let list_values = Array.from('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  length = number.length;
  number_list = Array.from(number);
  result = 0;
  var result_another = "";

  if (number_sys_1 < 2 || number_sys_1 > 36 || number_sys_2 < 2 || number_sys_2 > 36){
    if(number_sys_1 < 2 || number_sys_1 > 36){
      window.alert("Несущестующая система счисления первая(First number system error)");
    }else{
      window.alert("Несущестующая система счисления вторая(Second number system error)");
    }
  }
  else if(number_sys_1 != 10){
    for(var i = 0; i < number.length; i++){
      value = list_values.indexOf(number_list[i]);
      if (value > 9){
        length -= 1;
        result += value * Math.pow(number_sys_1, length);
      }else{
        length -= 1;
        result += value * Math.pow(number_sys_1, length); 
      }
    }
    while(result > 0){
      value = result % number_sys_2;
      if(value < 10){
        result_another = String(value) + result_another;
      }else{
        result_another = String(list_values[value]) + result_another;
      }
      result = Math.floor(result / number_sys_2);
    }
    document.getElementById("result").value = result_another;
  }
  else if(number_sys_1 == 10){
    number = Number(number);
    result = "";
    while(number > 0){
      value = number % number_sys_2;
      if(value < 10){
        result = String(value) + result;
      }else{
        result = String(list_values[value]) + result;
      }
      number = Math.floor(number / number_sys_2);
    }
    document.getElementById("result").value = result;
  }
}



function copy(){

  var number_input = document.getElementById("result");
  
  number_input.select();
  document.execCommand("copy");
  window.alert("Скопировано");
}


