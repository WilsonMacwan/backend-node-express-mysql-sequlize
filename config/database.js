import { Sequelize } from "sequelize";

// Create connection to the database
const db = new Sequelize("sequelize_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Test Database Connection
export const checkConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connection established to Database Successfully..");
  } catch (error) {
    console.log("Unable to Connect the Databse", error);
  }
};

// Create Tables in Database Automatically
// Also Add & Delete new columns in Database
// You can also Use for Each model individually
db.sync({ alter: true });

export default db;
