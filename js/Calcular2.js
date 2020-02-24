var total=0;
function ryc(){
    var aux = prompt("Ingrese el precio que pagó");
    if(isNaN(aux)){
      alert("usted debe ingresar un numero");
    }else if(aux==undefined){
    }else {
      total+=parseFloat(aux);
      document.formula.precio.value=total;
      descuento();
    }
}

//document.nombreform.nombreboton.disabled=true;
function descuento(){
  var desc=parseFloat((total*10)/100);
  var dos=parseFloat(total-desc);
  document.formula.total.value= dos;
}

function clean(){
  total=0;
}
