let idade = 14;
if (5 <= idade && idade<= 7){
    console.log('Infantil A');
}
else if (8<= idade && idade <=11){
    console.log('Infantil B');
}
else if (12<= idade && idade <=13){
    console.log('Juvenil A');
}  
else if (14<= idade && idade<=17){
    console.log('Juvenil B');
}
else if (idade>18){
    console.log('Adulto');
} 
else{
    console.log('Você ainda não pode competir!')
}