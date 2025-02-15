const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    },
    {
        id: 4,
        nombre: 'InMentals',
        habilidades: ['JavaScript', 'Java', 'SQL'],
        proyectos: [
            { id: 2, nombre: 'Proyecto 2' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    }
];

/* desarrolladoresJavascript */
[
    {
        "id": 1,
        "nombre": "Juan",
        "habilidades": ["JavaScript", "HTML", "CSS"],
        "proyectos": [
            { "id": 1, "nombre": "Proyecto 1" },
            { "id": 2, "nombre": "Proyecto 2" }
        ]
    }
]
/* nombresProyectos */
['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6']



// create your function here
const desarrolladoresJavascript = (developers) =>
    developers.filter((developer) => developer.habilidades.includes('JavaScript'));



const nombresProyectos = (developers) => {
    const nombresProyectos = [];
    developers = developers.map(developer => developer.proyectos.map(proyecto => {
        if (!nombresProyectos.includes(proyecto.nombre)) nombresProyectos.push(proyecto.nombre);
    }));
    return nombresProyectos;
};


//test
console.log(desarrolladoresJavascript(datos));
console.log(nombresProyectos(datos));
console.log(datos);


