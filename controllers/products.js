const getAllProductsStatic = async (req, res) => {
  res.json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  res.json({ msg: "products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
