import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("testejwt@email.com");
  const [password, setPassword] = useState("123456");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("nome", response.data.nome);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("role", response.data.role);

      if (response.data.role === "GESTOR") {
        navigate("/gestor");
      } else if (response.data.role === "SERVIDOR_PUBLICO") {
        navigate("/servidor");
      } else {
        navigate("/cidadao");
      }
    } catch (error) {
      alert("Email ou senha inválidos");
      console.log(error);
    }
  }

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand fw-bold">CID APP</span>
          <span className="text-white">Portal do Cidadão</span>
        </div>
      </nav>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card shadow-sm" style={{ width: "420px" }}>
          <div className="card-header bg-white text-center">
            <h4 className="mb-0">Acesso ao Sistema</h4>
          </div>

          <div className="card-body">
            <p className="text-muted text-center">
              Informe seus dados para acessar o portal.
            </p>

            <form onSubmit={handleLogin}>
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

              <button className="btn btn-primary w-100" type="submit">
                Entrar
              </button>
            </form>
          </div>

          <div className="card-footer text-center text-muted">
            Sistema de solicitações públicas
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;