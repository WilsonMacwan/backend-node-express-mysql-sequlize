import { Sequelize } from "sequelize";
import db from "../config/database.js";

// Init DataTypes
const { DataTypes } = Sequelize;

// Define Schema
const Product = db.define(
  "products",
  {
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

// Create Tables in database Automatically
// Also add & delete new columns
// Product.sync({ alter: true });

export default Product;
