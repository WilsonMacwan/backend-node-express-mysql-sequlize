import Product from "../models/Product.js";

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const result = await Product.findAll();
    // console.log("Products====>", result);
    if (result.length) {
      res.status(200).json({ products: result, total: result.length });
    } else {
      res.status(204).send("Data not found.");
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Product by id
export const getProductById = async (req, res) => {
  try {
    const result = await Product.findAll({
      where: { id: req.params.id },
    });

    // console.log("Product=====>", result);

    if (result.length) {
      res.status(200).send(result[0]);
    } else {
      res.status(204).send("Data not found.");
    }
  } catch (error) {
    console.log(error);
  }
};

// Create a New Product
export const createProduct = async (req, res) => {
  // console.log("Request=====>", req.body);
  try {
    const result = await Product.create(req.body);
    // console.log("Created====>", result);
    res
      .status(201)
      .json({ message: "Product created Successfully.", product: result });
  } catch (error) {
    console.log(error);
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const result = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // console.log("Update result====>", result);
    if (result[0] === 1) {
      res.status(201).json({ message: "Product updated" });
    } else {
      res.status(201).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const result = await Product.destroy({
      where: { id: req.params.id },
    });
    // console.log("Result====>", result);
    if (result === 1) {
      res.status(202).json({ message: "Product deleted" });
    } else {
      res.status(202).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};
