import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getUsers, createUser, deleteUser } from "../service/userService";

function UsersPage() {
  const [users, setUsers] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CIDADAO");

  async function loadUsers() {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createUser({
        nome,
        email,
        password,
        role,
      });

      setNome("");
      setEmail("");
      setPassword("");
      setRole("CIDADAO");

      loadUsers();
    } catch (error) {
      alert("Erro ao cadastrar usuário.");
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      alert("Erro ao excluir usuário.");
      console.log(error);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Layout>
      <section className="title-bar">
        <h1>GERENCIAMENTO DE USUÁRIOS</h1>
      </section>

      <div className="card mb-4">
        <div className="card-header">
          <strong>Cadastro de Usuário</strong>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input
                className="form-control"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Senha</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Perfil</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="CIDADAO">Cidadão</option>
                <option value="SERVIDOR_PUBLICO">Servidor Público</option>
                <option value="GESTOR">Gestor</option>
              </select>
            </div>

            <button className="btn btn-primary" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <strong>Usuários Cadastrados</strong>
        </div>

        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    Nenhum usuário cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default UsersPage;