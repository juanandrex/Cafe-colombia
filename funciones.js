function calcularprecio(cantidad, precioUnitario) {
  const total=cantidad*precioUnitario;
  return total;

}
  const TazasMaximas=50;
//Funcion para calcular el precio total de un pedido de cafe
function Hayreservas(cantidadReservada, cantidadTazas) {


return cantidadReservada<=2  && cantidadTazas<=TazasMaximas; 
}





//MAIN

if (Hayreservas(1, 20)) {
    console.log("Se puede reservar ");   


} else {
    console.log("No se puede reservar");
}
