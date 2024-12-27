function convertirCantidadANumero(obj) {
    // Verifica que el objeto tenga la propiedad 'cantidad'
    if (obj.hasOwnProperty('cantidad') && typeof obj.cantidad === 'string') {
      obj.cantidad = Number(obj.cantidad); // Convierte a número
    }
    if (obj.hasOwnProperty('precioUnitario') && typeof obj.precioUnitario === 'string') {
        obj.precioUnitario = Number(obj.precioUnitario); // Convierte a número
    }
    obj.nombre = obj.nombre.charAt(0).toUpperCase() + obj.nombre.slice(1).toLowerCase();
    obj.comercio = obj.comercio.charAt(0).toUpperCase() + obj.comercio.slice(1).toLowerCase();
    return obj; // Retorna el objeto modificado
}

module.exports =  convertirCantidadANumero;