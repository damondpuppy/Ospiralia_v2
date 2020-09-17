/*--------------------------------------------------------------------*/

var hoy = new Date();
var meses=['Enero', 'Febrero', 'Marzo',
           'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
           'Setiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
var dias=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado','Domingo'];

var fecha = dias[hoy.getDay()] + ' ' + hoy.getDate() + ' ' + (meses[hoy.getMonth()]) + ' ' +hoy.getFullYear();

var hora =  hoy.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
