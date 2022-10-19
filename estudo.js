let tabuada = 2;
let nome = "maria julia";

function escreva(){
    document.write("tabuada do" + tabuada + "<br>")
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 2 ="+(tabuada*2)+"<br>");
    document.write(tabuada +" x 3 ="+(tabuada*3)+"<br>");
    document.write(tabuada +" x 4 ="+(tabuada*4)+"<br>");
    document.write(tabuada +" x 5 ="+(tabuada*5)+"<br>");
    document.write(tabuada +" x 6 ="+(tabuada*6)+"<br>"); 
    document.write(tabuada +" x 7 ="+(tabuada*7)+"<br>");
    document.write(tabuada +" x 8 ="+(tabuada*8)+"<br>");
    document.write(tabuada +" x 9 ="+(tabuada*9)+"<br>");
    document.write(tabuada +" x 10 ="+(tabuada*10)+"<br>");
 document.write("feito por " + nome) 
}
  //for(inicio,validacao,incremento)
 function minhatabuada(){
     for (let i = 0; i< 10; i++){
        document.write("tabuada do " + i + "<br>");
      }
}
























let op = "";
function operacao(ope){
   op = ope;
}
function calcule(){
  let v1 = document.getElementById("v1").Value;
  let v2 = document.getElementById("v2").Value;
  let r = 0;

  if(op == ("+"){
    r = Number(v1) + Number(v2);
  }

document.getElementById("resultado").innerHTML = r;

}