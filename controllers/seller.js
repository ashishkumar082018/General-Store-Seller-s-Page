const Seller = require("../models/seller");
const Sequelize = require('sequelize');

exports.additem = (req, res) => {
  const { item, description, price, quantity } = req.body;

  Seller.create({
    item,
    description,
    price,
    quantity,
  })
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("Error adding item:", err);
      res.status(500).json({ error: "Error adding item" });
    });
};

exports.getitems = (req, res) => {
  Seller.findAll()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.error("Error fetching items:", err);
      res.status(500).json({ error: "Error fetching items" });
    });
};

exports.buyitem = async (req, res) => {
  try {
    const id = req.params.id;
    const type = req.query.type;
    let subtract = 0;
    if (type == "one") subtract = 1;
    if (type == "two") subtract = 2;
    if (type == "three") subtract = 3;
    const updateQuantity = await Seller.update(
      { quantity: Sequelize.literal(`quantity - ${subtract}`) },
      { where: { id } }
    );
    res.status(200).json({ message: "Item updated successfully" });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error deleting item" });
  }
};
