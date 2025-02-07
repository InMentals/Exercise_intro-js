// Este programa simula una llamada asincrónica para obtener un usuario

// function obtenerUsuario(id) {
//     let usuario;


//     setTimeout(() => {
//         if (id === 1) {
//             usuario = { id: 1, nombre: 'John Doe' };
//         }
//     }, 2000);
//     return usuario;
// };
    
// const usuario = obtenerUsuario(1);
// console.log(usuario);



function obtenerUsuario(id) {

    return new Promise((resolve) => {

        let usuario;
        setTimeout(() => {
            if (id === 1) {
                 usuario = { id: 1, nombre: 'John Doe' };
            };
            resolve(usuario);
        }, 2000);


    });

};

// promise

obtenerUsuario(1).then((usuario) => {
    console.log(usuario);
});
    

// async/await

const main = async () => {
    try {
        const user = await obtenerUsuario(1);
        console.log(user);
    } catch (error) {
        console.log(error);
    };
};
main();