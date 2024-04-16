/*
En el archivo `osModule.js` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

**Ejemplo de output:**
Nombre: darwin
Tipo: Darwin
Versión: Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64
Arquitectura: x64
CPUs: 12
MemoriaTotal: 16384.00 MB
MemoriaLibre: 370.71 MB */

//console.log(globalThis);

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

