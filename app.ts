const express = require('express');
const mysql = require('mysql2/promise');
import { Request, Response } from 'express';
const cors = require('cors');
require('dotenv').config();
const fs = require('fs')
const sslCert = fs.readFileSync('./DigiCertGlobalRootCA.crt.pem');


const app = express();
// testing

// move to another file and export here 
interface Film {
  id: number;
  title: string;
  description: string;
}

app.use(cors());
// database
app.use(express.json())


const host = process.env.host;
const user = process.env.user;
const password = process.env.password;
const database = process.env.database;





async function dbConnect () {

const connection = await mysql.createConnection({
  host:'letsgo.mysql.database.azure.com',
  user: 'root55',
  password: 'mysql12345!',
  database: 'sakila',
    port: 3306,
    ssl:{ca: sslCert}
  });

  console.log("connected to db")
  try {
    const [results] = await connection.execute(
      'SELECT title , description , film_id FROM `film` limit 20'
    );
    console.log("query okay")
    return results as Film[]
    
  } catch (error) {
    console.error("Error executing query:", error);
  }

  connection.end()
}


app.delete('/films/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id)

  try {
    const connection = await mysql.createConnection({
      host:'letsgo.mysql.database.azure.com',
      user: 'root55',
      password: 'mysql12345!',
      database: 'sakila',
      port: 3306,
      ssl:{ca: sslCert}
    });

    await connection.execute('SET FOREIGN_KEY_CHECKS=0')
    await connection.execute( 'DELETE FROM `film` WHERE film_id = ?', [id])

    connection.end();

    res.sendStatus(204); 
  } catch (error) {
    console.error('Error deleting film:', error);
    res.sendStatus(500); 
  }
});


app.post('/films',async (req:Request, res:Response) => {
  try {
    const connection = await mysql.createConnection({
      host:'letsgo.mysql.database.azure.com',
      user: 'root55',
      password: 'mysql12345!',
      database: 'sakila',
      port: 3306,
      ssl:{ca: sslCert}
    });

    const { title, description } = req.body

    const q = 'INSERT INTO film (title, description, language_id) VALUES (?, ?, ?)'
    
  const values = [title, description, 1]

  await connection.execute(q, values)

  connection.end();

  res.sendStatus(201)
  }

  catch (error) {
    console.error('Error adding film:', error);
    res.sendStatus(500);
  }
} )

app.put('/films',async (req:Request, res:Response) => {
  try {
    const connection = await mysql.createConnection({
      host:'letsgo.mysql.database.azure.com',
    user: 'root55',
    password: 'mysql12345!',
    database: 'sakila',
    port: 3306,
    ssl:{ca: sslCert}
    });

    const { film_id, title, description } = req.body
    const q = 'UPDATE film SET title = ?, description = ? WHERE film_id = ?'
    const values = [title, description, film_id]

    await connection.execute(q, values)

    connection.end();
  
    res.sendStatus(201) }
    catch (error) {
      console.error('Error adding film:', error);
      res.sendStatus(500);
    }
  } )

app.get('/films', async (req:Request, res:Response) => {
      try {
      const results = await dbConnect();
      res.json({results})
      }
      catch (error) {
        
      }

    })

    app.listen ('8080', () => {
      console.log("connected")
  }
      )






