/*
En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.
*/

const infoInterfaces = {
    nameInterfaz: '', 
    listInterfaces: '',
};

function newInfoInterfaces(name, list) {
    this.nameInterfaz = name;
    this.listInterfaces = list;
}

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
    const infoAllInterfaces = [];
    const arrayKeys = Object.keys(allInterfaz);
    //console.log(Object.keys(allInterfaz));

    arrayKeys.forEach((interfaz) => {
        const listInterfaces = [];
        allInterfaz[interfaz].forEach((red) => {
            listInterfaces.push(new newInterfaz(red.family, red.address,  red.internal));
        });
        const infoInterfaz = new newInfoInterfaces(interfaz, listInterfaces);
        infoAllInterfaces.push(infoInterfaz);

      });
      //console.log(infoAllInterfaces);
      return infoAllInterfaces;
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

//getInfoInterfaces(require('node:os'));

module.exports = {getInfoInterfaces, muestraInterfaz}; 
