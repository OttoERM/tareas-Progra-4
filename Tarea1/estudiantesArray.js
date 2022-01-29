let estudiante1 = {
    nombre:'Joseph Cruz',
    nota:'92',
    clase:'Telecomunicacion'
}

let estudiante2 = {
    nombre:'Josue Fernando',
    nota:'89',
    clase:'Estadistica'
}

let estudiante3 = {
    nombre:'Sofia Guierrez',
    nota:'59',
    clase:'Mercadotecnia'
}

let estudiante4 = {
    nombre:'Laura Vasquez',
    nota:'95',
    clase:'Arquitectura'
}

let arrayEstudiantes = [
    {
        nombre:'Carlos Daniel',
        nota:'45',
        clase:'Administracion'
    }
]

arrayEstudiantes.push(estudiante1)
arrayEstudiantes.push(estudiante2)
arrayEstudiantes.push(estudiante3)
arrayEstudiantes.push(estudiante4)

let busqueda = arrayEstudiantes.filter(estudiantes => estudiantes.nota <='60')
console.log(busqueda)