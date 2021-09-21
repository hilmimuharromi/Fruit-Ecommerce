const { Product, Category } = require("../models");

const getAllProducts = async (req, res, next) => {
  console.log(req.query);
  const { category } = req.query;
  let whereCategory = {};
  if (category) {
    whereCategory = {
      slug: category,
    };
  }
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          where: whereCategory,
        },
      ],
    });
    console.log("get products ===>", products);
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err,
    });
  }
};

const createProduct = async (req, res, next) => {
  const {
    name,
    slug,
    image_url,
    price,
    stock,
    discount,
    description,
    categoryId,
  } = req.body;
  try {
    const products = await Product.create({
      name,
      slug,
      image_url,
      price,
      stock,
      discount,
      description,
      categoryId,
    });
    res.status(201).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    slug,
    image_url,
    price,
    stock,
    discount,
    description,
    categoryId,
  } = req.body;
  try {
    const result = await Product.update(
      {
        name,
        slug,
        image_url,
        price,
        stock,
        discount,
        description,
        categoryId,
      },
      {
        where: {
          id: id,
        },
        returning: true,
        plain: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
