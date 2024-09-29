function Sorteador(){

    const min = Math.ceil(document.querySelector(".input-sotear1").value)
    const max = Math.floor(document.querySelector(".input-sotear2").value)

 if( min >= max){
    alert("O valor Minimo tem que ser menor que o maxino")
 } 

else{
  
    const sort = Math.floor(Math.random() * (max - min) + min);

    document.getElementById("resultado").innerHTML=sort;
}
}
