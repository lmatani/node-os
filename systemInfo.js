
const os = require('node:os');
const getInfoOS = require('./osModule.js');
const {getInfoInterfaces, muestraInterfaz} = require('./networkModule.js');

console.log('--------------------------------------------------------');
console.log('INFO DEL EQUIPO');
console.log();
const infoPC = getInfoOS(os);
const { nombre, tipo, version, arquitectura, cpus, memoriaTotal, memoriaLibre} = infoPC;

console.log(`Nombre: ${nombre}`);
console.log(`Tipo: ${tipo}`);
console.log(`Version: ${version}`);
console.log(`Arquitectura: ${arquitectura}`);
console.log(`Cpus: ${cpus}`);
console.log(`MemoriaTotal: ${memoriaTotal}`);
console.log(`MemoriaLibre: ${memoriaLibre}`);
console.log();


console.log('--------------------------------------------------------');
console.log('INFO NETWORK');
console.log();
const infoAllInterfaces = getInfoInterfaces(os);
if (infoAllInterfaces !== null && infoAllInterfaces.length > 0) {
    infoAllInterfaces.forEach((interfaz) => {
        muestraInterfaz(interfaz.nameInterfaz, interfaz.listInterfaces);
    });
}
else {
    console.log('No hay info que mostrar.');
}
console.log('--------------------------------------------------------');
