import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.getConnection((error, connection) => {
  if (error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (error.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (error.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) {
    connection.release();
  }
});

export function query<Data>(sql: string | mysql.Query): Promise<Data> {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, data) => {
      if (error) {
        return reject(error.code);
      }

      resolve(data);
    });
  });
}
