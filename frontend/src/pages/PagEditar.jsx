import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addUsuario, updateUsuario, deleteUsuario, getUsuarios } from "../services/api";

const PagEditar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    usuario: "",
    cidade: "",
    cargo: ""
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id && id !== "novo") {
      getUsuarios()
        .then(data => {
          const encontrado = data.find((u) => u.id.toString() === id);
          if (encontrado) {
            setUsuario(encontrado);
            setModoEdicao(true);
          } else {
            setError("Usuário não encontrado.");
          }
        })
        .catch(() => setError("Erro ao carregar usuário."));
    } else {
      setUsuario({
        nome: "",
        sobrenome: "",
        email: "",
        usuario: "",
        cidade: "",
        cargo: ""
      });
      setModoEdicao(false);
    }
  }, [id]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoEdicao) {
      updateUsuario(usuario.id, usuario)
        .then(() => navigate(`/usuarios/${usuario.id}`))
        .catch(() => setError("Erro ao atualizar usuário."));
    } else {
      const novoUsuario = {
        ...usuario,
        id: Date.now() 
      };
      addUsuario(novoUsuario)
        .then(() => navigate("/"))
        .catch(() => setError("Erro ao adicionar usuário."));
    }
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      deleteUsuario(usuario.id)
        .then(() => navigate("/"))
        .catch(() => setError("Erro ao deletar usuário."));
    }
  };

  return (
    <div className="container mt-5">
      <h2>{modoEdicao ? "Editar Usuário" : "Cadastrar Novo Usuário"}</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nome</label>
          <input type="text" className="form-control" name="nome" value={usuario.nome} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Sobrenome</label>
          <input type="text" className="form-control" name="sobrenome" value={usuario.sobrenome} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={usuario.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Usuário</label>
          <input type="text" className="form-control" name="usuario" value={usuario.usuario} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Cidade</label>
          <input type="text" className="form-control" name="cidade" value={usuario.cidade} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Cargo</label>
          <input type="text" className="form-control" name="cargo" value={usuario.cargo} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success me-2">
          {modoEdicao ? "Salvar Alterações" : "Cadastrar"}
        </button>
        {modoEdicao && (
          <>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Remover Usuário
            </button>

            <button
              type="button"
              className="btn btn-primary ms-2 me-2"
              onClick={() => navigate("/usuarios/novo")}
            >
              Novo Usuário
            </button>
          </>
      
        )}
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default PagEditar;
