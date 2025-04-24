import React, { useState } from "react";

const DataList = (props) => {
    const data = props.data;
    const [currentPage, setCurrentPage] = useState(1); // Estado para armazenar a página atual
    const itemsPerPage = 5; // Quantidade de itens por página
    const indexOfLastItem = currentPage * itemsPerPage; // Indice do ultimo item
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Indice do primeiro item
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); // Itens da página atual

    return (
        <div>
            <div>
                <ul className="list">
                    {currentItems.map((item) => (
                        <li key={`user-${item.id}`} className="li-list">
                            <span>Nome: </span>{item.nome}<br />
                            <span>Idade: </span>{item.idade}<br />
                            <span>CPF: </span>{item.cpf}<br />
                            <button className="btn-list info" onClick={() => props.clicked(item)}>
                                Mais detalhes
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage}</span>
                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                        prev < Math.ceil(data.length / itemsPerPage) ? prev + 1 : prev
                    )}
                    disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
                >
                    Próxima
                </button>
            </div>
            <div>
                <p className="authorInfo">
                    Desenvolvido por Pedro Bastos Leite
                </p>
            </div>
        </div>   
    );
};

export default DataList;
