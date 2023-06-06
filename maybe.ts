/*app.post("/products", (req, res) => {
    const q = `insert into product(productId, productTitle, productDescription, productPrice, availableQuantity, productThumbnail)
      values(?)`;
    const values = [...Object.values(req.body)];
    console.log("insert", values);
    db.query(q, [values], (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.sqlMessage });
      else return res.json({ data });
    });
  });
  
  app.get("/products/:productId", (req, res) => {
    const id = req.params.productId;
    const q = "SELECT * FROM product where productId=?";
    db.query(q, [id], (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.sqlMessage });
      else return res.json({ data });
    });
  });
  
  app.put("/products/:productId", (req, res) => {
    const id = req.params.productId;
    console.log("updated " + req.body);
    const data = req.body;
    const q =
      "update product set " +
      Object.keys(data)
        .map((k) => `${k} = ?`)
        .join(",") +
      " where productId='" +
      id +
      "'";
    console.log(q);
    db.query(q, [...Object.values(data)], (err, out) => {
      console.log(err, out);
      if (err) return res.json({ error: err.message });
      else {
        return res.json({ data: out });
      }
    });
  });
  
  app.delete("/products/:productId", (req, res) => {
    const id = req.params.productId;
    console.log("deleting " + id, req.body);
    const { productThumbnail } = req.body;
    console.log(req.body);
    const q = `DELETE FROM product WHERE productId= ?`;
    db.query(q, [id], (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.sqlMessage });
      else res.json({data})
    })
});
...   */
/* app.get("/deleteemployee/:id", (req, res) => {

  let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;

  let query = db.query(sql, (err) => {

    if (err) {

      throw err;

    } */

    /*app.get("/updateemployee/:id", (req, res) => {

  let newName = "Updated name";

  let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;

  let query = db.query(sql, (err) => {

    if (err) {

      throw err;

    }  */