// pages/PagPrincipal.jsx
import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/api";
import { useNavigate } from "react-router-dom";

const PagPrincipal = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUsuarios()
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="bg-secondary text-white min-vh-100 w-100 p-4">
        <h1 className="mb-4 tittle">Lista de Usuários - Pedro Cerger Bueno</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">
            {usuarios.map((usuario) => (
            <div
                key={usuario.id}
                className="card text-dark bg-light"
                style={{ width: "18rem", minHeight: "10rem" }}
            >
                <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">
                    {usuario.nome} {usuario.sobrenome}
                    </h5>
                    <p className="card-text">
                    <strong>Cargo:</strong> {usuario.cargo}
                    </p>
                </div>
                <button
                    onClick={() => navigate(`/usuarios/${usuario.id}`)}
                    className="btn btn-primary mt-2"
                >
                    Ver dados
                </button>
                </div>
            </div>
            ))}
        </div>
    </div>

  );
};

export default PagPrincipal;
