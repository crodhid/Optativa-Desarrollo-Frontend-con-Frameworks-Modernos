"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(mensaje) {
    throw new Error(mensaje);
}
function mensajeCliente(estado) {
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
function cancelarPedido(pedido) {
    if (pedido.estado === "entregado") {
        error("No se puede cancelar: el pedido ya ha sido entregado");
    }
    pedido.estado = "cancelado";
}
//# sourceMappingURL=ej04.js.map