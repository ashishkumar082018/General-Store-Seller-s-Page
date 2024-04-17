const Seller = require("../models/seller");

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

exports.deleteitem = (req, res) => {
  const id = req.params.id;
  Seller.destroy({ where: { id } })
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.json({ message: "Item deleted successfully" });
    })
    .catch((err) => {
      console.error("Error deleting item:", err);
      res.status(500).json({ error: "Error deleting item" });
    });
};
