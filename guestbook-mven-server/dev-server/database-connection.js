//Task-1
import mysql from 'mysql';
const dbConnection = mysql.createConnection(
    {host: 'localhost', user: 'root',
        password: 'Hello1234!',
        database: 'guestbookdb',
        insecureAuth : true
    });


dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

export default dbConnection;
//End of Task
