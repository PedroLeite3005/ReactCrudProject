import React, { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
    const [data, setData] = useState([]);
    const [newUser, setNewUser] = useState({nome: "", idade: "", cpf: "", genero: "", dataNascimento: "" }); // Estado para armazenar os dados do novo usuário
    const [editUser, setEditUser] = useState(null); // Estado para armazenar o usuário sendo editado
	const [editModalIsOpen, setEditModalIsOpen] = useState(false); // Estado para controlar a visibilidade do modal de edição

    useEffect(() => {
        fetch("http://localhost:8800")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                console.error("Erro ao carregar usuários:", err);
                alert("Erro ao carregar usuários.");
            });
    }, []);

    const edit = (item) => {
		setEditUser(item); // Armazena o usuário sendo editado
        setEditModalIsOpen(true); // Abre o modal de edição
	};

	// Atualiza campos do formulário
	const handleEditChange = (e) => {
		setEditUser({ ...editUser, [e.target.name]: e.target.value });
	};

	// Salva alterações
	const handleSaveEdit = async () => {
		if (!editUser.nome || !editUser.idade || !editUser.cpf || !editUser.genero || !editUser.dataNascimento) {
			alert("Preencha todos os campos!");
			return;
		}

		try {
			const response = await fetch(`http://localhost:8800/${editUser.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(editUser),
			});
	
			if (!response.ok) {
				throw new Error("Erro ao salvar");
			}
			console.log(response.text());
            setData(data.map(user => user.id === editUser.id ? editUser : user));
			setEditModalIsOpen(false);
			setEditUser(null);
		} catch (err) {
			console.error(err);
			alert("Erro ao salvar edição.");
		}
	};

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8800/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Falha ao deletar usuário");
            }

            setData(data.filter(user => user.id !== id));
        } catch (error) {
            console.error("Erro ao deletar:", error);
            alert("Erro ao deletar o usuário.");
        }
    };

    const handleAddUser = async () => {
        if (!newUser.nome || !newUser.idade || !newUser.cpf || !newUser.genero || !newUser.dataNascimento) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8800/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error("Falha ao adicionar usuário");
            }

            const addedUser = await response.json();

            setData((prevData) => [...prevData, addedUser]); // Atualiza o estado local
            setNewUser({ nome: "", idade: "", cpf: "" , genero: "", dataNascimento: ""}); 
        } catch (error) {
            console.error("Erro ao adicionar usuário:", error);
            alert("Erro ao adicionar usuário.");
        }
    };

    return (
        <div className="admin-container">
            <h2>Administração de Usuários</h2>

            <div className="add-user-form">
                <input
                    type="text"
                    placeholder="Nome"
                    value={newUser.nome}
                    onChange={(e) => setNewUser({ ...newUser, nome: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={newUser.idade}
                    onChange={(e) => setNewUser({ ...newUser, idade: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="CPF"
                    value={newUser.cpf}
                    onChange={(e) => setNewUser({ ...newUser, cpf: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Genero"
                    value={newUser.genero}
                    onChange={(e) => setNewUser({ ...newUser, genero: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Data de Nascimento"
                    value={newUser.dataNascimento}
                    onChange={(e) => setNewUser({ ...newUser, dataNascimento: e.target.value })}
                />
                <button className="btn-add" onClick={handleAddUser}>Adicionar Usuário</button>
            </div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>CPF</th>
                        <th>Genero</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.idade}</td>
                            <td>{user.cpf}</td>
                            <td>{user.genero}</td>
                            <td>{user.dataNascimento}</td>
                            <td>
                                <button className="btn-edit" onClick={() => edit(user)}>Editar</button>
                                <button className="btn-delete" onClick={() => handleDelete(user.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editModalIsOpen && editUser && (
				<div className="modal">
					<div className="modal-content">
						<h1>Editar Usuário</h1>
						<div className="input-container">
							<input
								type="text"
								name="nome"
								value={editUser.nome}
								onChange={handleEditChange}
							/> 
						</div>
						<div className="input-container">
							<input
								type="number"
								name="idade"
								value={editUser.idade}
								onChange={handleEditChange}
							/> 
						</div>
						<div className="input-container">
							<input
								type="text"
								name="cpf"
								value={editUser.cpf}
								onChange={handleEditChange}
							/> 
						</div>
                        <div className="input-container">
                            <input
                                type="text"
                                name="genero"
                                value={editUser.genero}
                                onChange={handleEditChange}
                            /> 
                        </div>
                        <div className="input-container">
                            <input
                                type="date"
                                name="dataNascimento"
                                value={editUser.dataNascimento}
                                onChange={handleEditChange}
                            /> 
                        </div>
						<button className="save" onClick={handleSaveEdit}>Salvar</button>
						<button className="cancel" onClick={() => setEditModalIsOpen(false)}>Cancelar</button>
					</div>
				</div>
			)}
        </div>
    );
};  

export default Admin;