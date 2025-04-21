## Versões Utilizadas

- **Node.js:** `22.14.0`
- **NPM:** `10.9.2`

---

## Configuração do Banco de Dados (MySQL)

1. Abra o **MySQL Workbench**.
2. No menu, vá em:  
   `Server` → `Data Import`.
3. Selecione a opção **Import from Self-Contained File** e escolha o arquivo `.sql` desejado.
4. Escolha o **schema** onde deseja importar o banco de dados.
5. Marque a opção **Dump Structure and Data**.
6. Clique em **Start Import**.

### Configuração de Conexão

No arquivo `backend/db.js`, edite os seguintes campos conforme a configuração da sua máquina:

```javascript
host: 'SEU_HOST',
user: 'SEU_USUARIO',
password: 'SUA_SENHA',
database: 'SEU_BANCO',
port: 'SUA_PORTA'
```

## Como Rodar o Projeto

### Backend
```bash
cd ./backend/
npm install
npm start
```
deixe esse terminal aberto rodando

### Frontend

em outro terminal repita o processo para o frontend
```bash
cd ./frontend/
npm install
npm start
```

## Acesso ao projeto

http://localhost:5173


