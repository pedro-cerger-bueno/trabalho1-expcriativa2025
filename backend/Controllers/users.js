import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const { nome, sobrenome, email, usuario, cidade, cargo } = req.body;

  const q = `
    INSERT INTO usuarios (nome, sobrenome, email, usuario, cidade, cargo)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [nome, sobrenome, email, usuario, cidade, cargo];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json({ message: "Usuário adicionado com sucesso!", insertId: result.insertId });
  });
};


export const updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, email, usuario, cidade, cargo } = req.body;
  const q = `
    UPDATE usuarios 
    SET nome = ?, sobrenome = ?, email = ?, usuario = ?, cidade = ?, cargo = ?
    WHERE id = ?
  `;

  db.query(q, [nome, sobrenome, email, usuario, cidade, cargo, id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM usuarios WHERE id = ?";

  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Usuário removido com sucesso!" });
  });
};
