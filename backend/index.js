const express = require ('express');
const mysql = require('mysql2');
const cors = require ('cors');

const app = express ();

app.use(cors()); //middleware 

app.use(express.json()); //Habilito la lectura del JSON que venga en el body

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gmdsport',
    //port: 3306,
  });

  connection.connect((error) => {
    if (error) {
      console.log('Error al conectarse a la base de datos');
    } else {
      console.log('Conectado a la base de datos');
    }
  });

  app.post('/clientes', (req, res) => {
    const { nombre, apellido, calle, altura, provincia } = req.body;
  
    const sql = `INSERT INTO clientes(nombre, apellido, calle, altura, id_provincia)
                 VALUES ('${nombre}', '${apellido}', '${calle}', ${altura}, ${provincia})`;
  
    connection.query(sql, (error, result) => {
      if (error) {
        console.log('Error al agregar el cliente');
      } else {
        res.json({ message: 'El cliente se ha agregado correctamente' });
      }
    });
  });
  app.listen(8000);
