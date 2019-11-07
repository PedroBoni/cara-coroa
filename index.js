function caraCoroaRandom(){
   const random =Math.floor(Math.random() * 2);
   const img = document.querySelector("img")
   const resultado = document.getElementById("resultado")

   if(random == 1){
      img.src= 'image/cara.png'
      resultado.innerHTML = "Cara"
   }else{
      img.src= 'image/coroa.png'
      resultado.innerHTML = "Coroa"
   }
}



