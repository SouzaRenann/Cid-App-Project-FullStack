import { Link, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const nome = localStorage.getItem("nome");

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">
            CID APP
          </span>

          <div className="navbar-nav">

            {role === "GESTOR" && (
              <>
                <Link className="nav-link" to="/gestor">
                  Dashboard
                </Link>

                <Link className="nav-link" to="/usuarios">
                  Usuários
                </Link>

                <Link className="nav-link" to="/solicitacoes">
                  Solicitações
                </Link>

                <Link
                  className="nav-link"
                  to="/busca-protocolo"
                >
                  Protocolos
                </Link>
              </>
            )}

            {role === "SERVIDOR_PUBLICO" && (
              <>
                <Link className="nav-link" to="/servidor">
                  Dashboard
                </Link>

                <Link className="nav-link" to="/solicitacoes">
                  Solicitações
                </Link>

                <Link
                  className="nav-link"
                  to="/busca-protocolo"
                >
                  Protocolos
                </Link>
              </>
            )}

            {role === "CIDADAO" && (
              <>
                <Link className="nav-link" to="/cidadao">
                  Início
                </Link>

                <Link
                  className="nav-link"
                  to="/nova-solicitacao"
                >
                  Nova Solicitação
                </Link>

                <Link
                  className="nav-link"
                  to="/acompanhar"
                >
                  Acompanhar
                </Link>
              </>
            )}
          </div>

          <span className="user-info text-white">
            {nome}
          </span>

          <button
            className="btn btn-light btn-sm"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </nav>

      <div className="container mt-4">
        {children}
      </div>
    </>
  );
}

export default Layout;