import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { getUsuarios } from "../services/api";


const PagDetalhe = () => {
  const { id } = useParams(); 
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUsuarios()
      .then((data) => {
        const encontrado = data.find((u) => u.id.toString() === id);
        if (encontrado) {
          setUsuario(encontrado);
        } else {
          setError("Usuário não encontrado.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao buscar dados do usuário.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando dados do usuário...</p>;
  if (error) return <p>{error}</p>;
  if (!usuario) return null;

  return (
    <div className="min-vh-100 w-100 bg-secondary text-white p-4">
        <div className="d-flex flex-column align-items-center mb-4">
            <h1 className="mb-1">Detalhes do Usuário</h1>
        <a onClick={() => navigate(`/`)} className="text-white">Voltar </a>
            
        </div>

        <div className="container">
            <div className="card">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong>Nome:</strong> {usuario.nome} {usuario.sobrenome}
                </li>
                <li className="list-group-item">
                    <strong>Cargo:</strong> {usuario.cargo}
                </li>
                <li className="list-group-item">
                    <strong>Email:</strong> {usuario.email}
                </li>
                <li className="list-group-item">
                    <strong>Usuário:</strong> {usuario.usuario}
                </li>
                <li className="list-group-item">
                    <strong>Cidade:</strong> {usuario.cidade}
                </li>
                <button
                    onClick={() => navigate(`/usuarios/${usuario.id}/editar`)}
                    className="btn btn-primary mt-2"
                >
                    Editar Dados
                </button>
                </ul>
            </div>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <h5 className="text-light">Pedro Cerger Bueno</h5>
        </div>
    </div>

   
  );
};

export default PagDetalhe;
