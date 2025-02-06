const usuario = {
    nombre: 'Inmentals',
    apellidos: 'Every Day',
    temas: [
        {nombre: 'Node.js',
        fecha: '2025-03-10'
        },
        {nombre: 'Git',
        fecha: '2025-02-02'
        },
        {nombre: 'React',
        fecha:'2025-05-12'
        }
    ],
    busquedaActiva: true
};

console.log(usuario.temas[2].fecha);