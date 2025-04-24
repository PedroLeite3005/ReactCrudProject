import "./App.css";
import "./Modal.css";
import DataList from "./components/DataList";
import Admin from "./admin";
import { useState, useEffect } from "react";

function App() {
	const [showAdmin, setShowAdmin] = useState(false); // Estado para controlar a visibilidade do admin
	const [data, setData] = useState([]); // Estado para armazenar os dados
	const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar a visibilidade do modal de detalhes
	const [itemClicked, setItemClicked] = useState(null); // Estado para armazenar o item clicado

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = () => {
		fetch("http://localhost:8800")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error("Erro ao carregar dados:", error);
				alert("Erro ao carregar usuários.");
			});
	};

	const handleAdmin = () => {
		setShowAdmin(!showAdmin); // Alterna a visibilidade
		getUsers(); // Atualiza os dados
	};

  	const clicked = (item) => {
		setModalIsOpen(true); // Abre o modal
    	setItemClicked(item); // Armazena o item clicado
  	};

  	const closeModal = () => {
    	setModalIsOpen(false); // Fecha o modal
    	setItemClicked(null); // Limpa o item clicado
  	};

	// HTML
  	return (
    	<div>
			<h1 className="title">
                Listando Usuários - Feito por Pedro Bastos Leite 
                <button onClick={() => handleAdmin()}>
		            {showAdmin ? "Ocultar Admin" : "Mostrar Admin"}
	            </button>
            </h1>
			{!showAdmin ? (
				<DataList clicked={clicked} data={data} setData={setData} setShowAdmin={setShowAdmin} showAdmin={showAdmin}/>
			) : (
				<Admin users={data} setUsers={setData} />
			)}
			{modalIsOpen && itemClicked && (
				<div className="modal">
					<div className="modal-content">
						<h1>Detalhes do Usuário</h1>
						<p><strong>Nome:</strong> {itemClicked.nome}</p>
						<p><strong>Idade:</strong> {itemClicked.idade}</p>
						<p><strong>Cpf:</strong> {itemClicked.cpf}</p>
						<p><strong>Genero:</strong> {itemClicked.genero}</p>
						<p><strong>Data de Nascimento:</strong> {itemClicked.dataNascimento}</p>
						<button onClick={closeModal}>Fechar</button>
					</div>
				</div>
			)}
    	</div>
  	);
}

export default App;
