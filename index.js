const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'saibaba-123'
  });

  try{
    connection.query("show databases;",(err,results)=>{
        if (err) throw err;
        console.log(results);
    });
   }
    catch(err){
        console.log(err);
    }
connection.end();


let getRandomUser = ()=> {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password()
    };
}

