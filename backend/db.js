import mysql2 from "mysql2";

export const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "pedro@1234",
    database: "crud",
    port: "3306"
});