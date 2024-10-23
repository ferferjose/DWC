'use strict'
for(let i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        document.write('FizzBuzz<br/>');
    }else{
        if(i%3==0 || i%5==0){
            document.write('Fizz<br/>');
        }else{
            document.write(i+'<br/>');
        }
    }
}