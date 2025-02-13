import pg from "pg";

const db = new pg.Client() ({
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "helloWorld",
    port: ""
});

db.connect();  // open database connection

db.query('SELECT * FROM capitals', (err, res) => {
    if (err) {
        console.error("Error executing user query", err.stack);
    } else {
        quiz = res.rows;
    }

    // Close database connection
    db.end();
});