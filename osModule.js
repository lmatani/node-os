/*
En el archivo `osModule.js` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer
 */

function getInfoOS(os) {
    

    const pc = {
        nombre: '',
        tipo: '',
        version: '',
        arquitectura: '',
        cpus: '',
        memoriaTotal: '',
        memoriaLibre: '',
    };

    //console.log(os);
    const totalMemMB = (os.totalmem() / 1024).toFixed(2);
    const freeMemMB = (os.freemem() / 1024).toFixed(2);

    pc.nombre = os.platform();
    pc.tipo = os.type();
    pc.version = os.version();
    pc.arquitectura = os.arch();
    pc.cpus = os.cpus().length;
    pc.memoriaTotal = totalMemMB + ' MB';
    pc.memoriaLibre = freeMemMB + ' MB';

    //console.log(pc);
    return pc;
}

module.exports = getInfoOS; 

