// Unión de literales: el compilador rechaza cualquier otro texto
type EstadoPedido = "pendiente" | "pagado" | "enviado" | "entregado" | "cancelado";

interface Pedido {
    numero: number;
    cliente: string;
    importe: number;
    estado: EstadoPedido;
}

function error(mensaje: string): never {
    throw new Error(mensaje);
}

function mensajeCliente(estado: EstadoPedido): string {
    switch (estado) {
        case "pendiente":
            return "Tu pedido está pendiente de pago";
        case "pagado":
            return "Hemos recibido tu pago";
        case "enviado":
            return "Tu pedido está en camino";
        case "entregado":
            return "Tu pedido ha sido entregado";
        case "cancelado":
            return "Tu pedido ha sido cancelado";
        default: {
            // Si falta algún estado por tratar, esta línea no compila
            return error(`Estado no contemplado:`);
        }
    }
}

function cancelarPedido(pedido: Pedido): void {
    if (pedido.estado === "entregado") {
        error("No se puede cancelar: el pedido ya ha sido entregado");
    }
    pedido.estado = "cancelado";
}