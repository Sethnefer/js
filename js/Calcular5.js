function validar(){
  var total=parseInt(document.formula.total.value);
  var wom= parseInt(document.formula.woman.value);
  var men= parseInt(document.formula.mens.value);
  if(total>0 && wom>=0 && men>=0 && total<999999 && wom<999999 && men<999999){
    var pm=(100*wom)/total;
    var ph=(100*men)/total;
    document.formula.pm.value=pm;
    document.formula.ph.value=ph;
  }else{
    alert("Ha ocurrido un error");
  }
}
