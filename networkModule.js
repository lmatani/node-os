/*
En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

**Ejemplo de output:**
Interfaz lo0:
  Familia: IPv4
  Dirección: 127.0.0.1
  Interno: true
  Familia: IPv6
  Dirección: ::1
  Interno: true
  Familia: IPv6
  Dirección: fe80::1
  Interno: true

Interfaz en5:
  Familia: IPv6s
  Dirección: fe80::aede:48ff:fe00:1122
  Interno: false
*/


const interfaz = {
    familia: '',
    direccion: '',
    interno: '',
  };

function newInterfaz(pFamilia, pDireccion, pInterno) {
    this.familia = pFamilia;
    this.direccion = pDireccion;
    this.interno = pInterno;
}



function getInfoInterfaces(os) {
    const allInterfaz = os.networkInterfaces();
    //console.log(allInterfaz);
    const arrayKeys = Object.keys(allInterfaz);
    //console.log(Object.keys(allInterfaz));
    arrayKeys.forEach((interfaz) => {
        const listInterfaces = [];
        allInterfaz[interfaz].forEach((red) => {
            //console.log(red);
            listInterfaces.push(new newInterfaz(red.family, red.address,  red.internal));
        });
        muestraInterfaz(interfaz, listInterfaces);
      });
}



function muestraInterfaz(nombre, list){
    console.log(`Interfaz ${nombre}:`);
    list.forEach((red) => {
        console.log(`Familia ${red.familia}`);
        console.log(`Dirección ${red.direccion}`);
        console.log(`Interno ${red.interno}`);
    });
    console.log('');
}
//getInfoInterfaces();
module.exports = getInfoInterfaces; 
