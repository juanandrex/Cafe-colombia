function calcularprecio(cantidad, precioUnitario) {
  const total=cantidad*precioUnitario;
  return total;

}
 // const TazasMaximas=50;
//Funcion para calcular el precio total de un pedido de cafe
function Hayreservas(cantidadTazas, cantidadReservada) {


return cantidadReservada > 0 && cantidadTazas > 0; 
}

const btn_reservar=document.querySelector("#btn-reservar");
const contadorTazas=document.querySelector("#contador-tazas");
const contadorReservas=document.querySelector("#contador-reservas");

btn_reservar.addEventListener("click", function (){
const tazasAct= Number(contadorTazas.textContent);
const reservMax= Number(contadorReservas.textContent);

if (Hayreservas(tazasAct,reservMax)){
contadorTazas.textContent=tazasAct-1;
contadorReservas.textContent=reservMax-1;
console.log("Reserva registrada")
}
else {
console.log("Sin reservas ")
btn_reservar.textContent="No hay reservas";
btn_reservar.disabled=true;


}

});