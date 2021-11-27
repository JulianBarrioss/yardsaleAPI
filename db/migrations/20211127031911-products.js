'use strict';

const { CategorySchema, CATEGORY_TABLE } = require("../models/category.model");
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(CATEGORY_TABLE, CategorySchema);
    await queryInterface.addColumn(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(CATEGORY_TABLE);
    await queryInterface.removeColumn(PRODUCT_TABLE);
  }
};
