import {db} from "../db.js";

export const getUsers = (_, res) => {
  	const q = "SELECT * FROM usuarios";

  	db.query(q, (err, data) => {
    	if (err) return res.json(err);

    	return res.status(200).json(data);
  });
};

export const deleteUser = (req, res) => {
  	const q = "DELETE FROM usuarios WHERE id = ?";

  	db.query(q, [req.params.id], (err, data) => {
    	if (err) return res.json(err);

    	return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  	const q = "UPDATE usuarios SET `nome` = ?, `idade` = ?, `cpf` = ?, `genero` = ?, `dataNascimento` = ? WHERE id = ?";

	if (!req.body.nome || !req.body.idade || !req.body.cpf || !req.body.genero || !req.body.dataNascimento) {
		return res.status(400).json({ error: "Preencha todos os campos." });
	}

	if (typeof req.body.nome !== "string" || typeof req.body.cpf !== "string" || isNaN(req.body.idade) || typeof req.body.genero !== "string" 
		|| typeof req.body.dataNascimento !== "string") 
	{
		return res.status(400).json({ error: "Dados inválidos." });
	}

  	const values = [ req.body.nome, req.body.idade, req.body.cpf, req.body.genero, req.body.dataNascimento, req.body.id ];

  	db.query(q, values, (err, data) => {
		if (err) return res.json(err);

		const updatedUser = {
			id: req.params.id,
			nome: req.body.nome,
			idade: req.body.idade,
			cpf: req.body.cpf,
			genero: req.body.genero,
			dataNascimento: req.body.dataNascimento
		};

		if (data.affectedRows > 0) {
			return res.status(200).json(updatedUser);
		} else {
			return res.status(404).json("Usuário não encontrado");
		}
	});
}

export const createUser = (req, res) => {
  	const q = "INSERT INTO usuarios (`nome`, `idade`, `cpf`, `genero`, `dataNascimento`) VALUES (?)";
	
	if (!req.body.nome || !req.body.idade || !req.body.cpf || !req.body.genero || !req.body.dataNascimento) {
			return res.status(400).json({ error: "Preencha todos os campos." });
	} 

	if (typeof  req.body.nome !== "string" || typeof req.body.cpf !== "string" || isNaN(req.body.idade) || typeof req.body.genero !== "string" 
		|| typeof req.body.dataNascimento !== "string") 
	{
		return res.status(400).json({ error: "Dados inválidos." });
	}

  	const values = [ req.body.nome, req.body.idade, req.body.cpf, req.body.genero, req.body.dataNascimento ];

  	db.query(q, [values], (err, result) => {
		if (err) return res.json(err);

		const newUser = {
			id: result.insertId, 
			nome: req.body.nome,
			idade: req.body.idade,
			cpf: req.body.cpf,
			genero: req.body.genero,
			dataNascimento: req.body.dataNascimento
		};

		return res.status(201).json(newUser); 
	});
}