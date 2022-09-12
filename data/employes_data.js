const employes = [
    {
        id: 123,
        name: 'Ricardo',
        depto: 'develop',
        salary: 8000000
    },
    {
        id: 1234,
        name: 'Fulano',
        depto: 'qa',
        salary: 23423
    },
    {
        id: 1235,
        name: 'Sultano',
        depto: 'devops',
        salary: 12000
    },
    {
        id: 1236,
        name: 'Isabel II',
        depto: 'queen',
        salary: 10000
    }
];

const getEmployeById = (id) => {
    let employe = employes.find( e => e.id === id);
    return employe;
}

const setEmploye = ( employe ) => {
    employes.push(employe);
    console.log(employes);
} 

module.exports = {
    getEmployeById,
    setEmploye
}