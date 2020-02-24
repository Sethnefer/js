var anon=0;
var mesn=0;
var dian=0;
/////////
var diaa=0;
var mesa=0;
var anoa=0;

function validar(){
  anon=parseInt(document.formula.anon.value);
  mesn=parseInt(document.formula.mesn.value);
  dian=parseInt(document.formula.dian.value);
  if(anon>0 && anon<99999 && mesn>0 && mesn<99999 && dian>0 && dian<99999){
    anoa=parseInt(document.formula.anoa.value);
    mesa=parseInt(document.formula.mesa.value);
    diaa=parseInt(document.formula.diaa.value);
    if(anoa>0 && anoa<99999 && mesa>0 && mesa<99999 && diaa>0 && diaa<99999){
      calcular();
    }
  }
}

function calcular(){
  edadAprox=parseInt(anoa-anon);
  alert(edadAprox);
  if(mesa>mesn){
    alert("tienes: "+edadAprox+" años");
  }else if(mesa<mesn){
    alert("Tienes: "+parseInt(edadAprox-1)+" años")
  }else if(mesa==mesn){
    if (diaa<dian) {
      alert("Tienes: "+parseInt(edadAprox-1)+" años")
    }else if(diaa>dian){
      alert("tienes: "+parseInt(edadAprox)+" años");
    }else if(diaa==dian){
      alert("Feliz cumpleaños¡¡¡");
    }
  }else{
    alert("Ha ocurrido un error");
  }
}
