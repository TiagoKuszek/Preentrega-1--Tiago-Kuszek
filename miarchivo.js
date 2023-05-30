let comando;

	while (comando != 'Salir') {
		comando = prompt('Ingrese el comando:\n\n- Reparar vehiculo\n- Enviar mensaje\n- Pagar\n- Salir');

				switch (comando) {

                    case "Reparar vehiculo":
                        let reparo = alert("¿Su vehiculo fue reparado?")
                        let reparo1 = prompt("Si o No")
                        if (reparo1 == "Si"){
                            alert("Vehiculo reparado correctamente")
                        }
                        else if (reparo1 == "No") {
                            alert("Volviendo a reparar vehiculo...")
                            for (let i = 0; i < 4; i++) {
                                alert(i);
                            }
                        }
                        break;

					case 'Enviar mensaje':
						let destinatario = prompt('Ingrese el nombre de destinatario');
						let mensaje = prompt('Ingrese el mensaje que sea enviar');
						alert("Mensaje '" + mensaje + "' enviado a " + destinatario);
						break;

                    case "Pagar":
                        let pago = parseInt(prompt ("Ingresar monto a pagar"))
                        if (pago >= 1 ){
                            alert("Se realizo el pago correctamente")
                        }
                        else if (pago < 1){
                            alert("El pago fue rechazado")
				}
                break;
			}
            

}