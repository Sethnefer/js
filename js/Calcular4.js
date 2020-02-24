var comp=true;
var calificacion=0;
function parciales(){
  var p1= parseFloat(document.formula.p1.value);
  var p2 = parseFloat(document.formula.p2.value);
  var p3 = parseFloat(document.formula.p3.value);

  if(p1>10 || p1<0 || p2>10 || p2<0 ||p3>10 ||p3<0){
    alert("las calificaciones que metío no estan en el sistema correcto");
    comp=false;
  }else{
  var div = (p1+p2+p3)/3;
  calificacion = (div*55)/10}
}

function exm(){
  var examen=parseFloat(document.formula.examen.value);
  if(examen>10 || examen<0){
    alert("las calificaciones que metío no estan en el sistema correcto");
    comp=false;
  }else{
  calificacion += (30*examen)/10;
  }
}

function trabj(){
  var trabajo=parseFloat(document.formula.trabajo.value);
  if(trabajo>10 || trabajo<0){
    alert("las calificaciones que metío no estan en el sistema correcto");
    comp=false;
  }else{
  calificacion += (15*trabajo)/10;
  }
}

function llamar(){
  parciales();
  exm();
  trabj();
  if(comp==true){
    alert("tu calificacion es: "+ calificacion);
  }
}
