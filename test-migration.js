const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
    const db= await sqlite.open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    await db.migrate({force: true});
    const microphones =await db.all(`SELECT * FROM Microphone`);
    console.log(JSON.stringify(microphones, null, 4));
    
})();