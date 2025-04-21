const url = 'http://localhost:8800';

export const getUsuarios = () => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar os usuários');
      }
      return response.json();
    });
};

export const addUsuario = (usuario) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao adicionar usuário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Usuário adicionado com sucesso:', data);
      return data;
    })
    .catch(error => {
      console.error('Erro na requisição de adicionar usuário:', error);
      throw error;
    });
};

  
export const updateUsuario = (id, usuarioAtualizado) => {
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuarioAtualizado)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar usuário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Usuário atualizado com sucesso:', data);
      return data;
    })
    .catch(error => {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    });
};

  
  export const deleteUsuario = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao deletar usuário');
        }
        return response.json();
      })
      .then(data => {
        console.log('Usuário deletado com sucesso:', data);
        return data;
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
        throw error;
      });
  };