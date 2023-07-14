const express:require ('express');
const mysql:require('mysql2');
const cors:require ('cors');

const app:express ();

app.use(cors()); //middleware 

app.use(express.json()); //Habilito la lectura del JSON que venga en el body

