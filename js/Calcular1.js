function calculos(){
  var sueldo = parseFloat(document.formula.sueldo.value);
  //dinero por ventas
  var c1 = parseFloat(document.formula.v1.value);
  var c2 = parseFloat(document.formula.v2.value);
  var c3 = parseFloat(document.formula.v3.value);
  var c4 = parseFloat(document.formula.v4.value);
  var c5 = parseFloat(document.formula.v5.value);
  var ventas = c1+c2+c3+c4+c5;
  var comision = (10*ventas)/100;

  //sueldo total
  var total=sueldo+comision;
  alert(total+ " : "+ comision);
  //impresiones
  document.formula.porcentaje.value=comision;
  document.formula.total.value=total;
}
