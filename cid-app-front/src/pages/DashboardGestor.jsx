import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getUsers } from "../service/userService";
import { getRequests } from "../service/requestService";

function DashboardGestor() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [openRequests, setOpenRequests] = useState(0);
  const [resolvedRequests, setResolvedRequests] = useState(0);
  const nome = localStorage.getItem("nome");

  async function loadDashboard() {
    const usersResponse = await getUsers();
    const requestsResponse = await getRequests();

    const requests = requestsResponse.data;

    setTotalUsers(usersResponse.data.length);
    setTotalRequests(requests.length);
    setOpenRequests(requests.filter((r) => r.status === "ABERTO").length);
    setResolvedRequests(requests.filter((r) => r.status === "RESOLVIDO").length);
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <Layout>
      <section className="title-bar">
        <h1>PAINEL DO GESTOR</h1>
      </section>
      <span className="user-info">
        Bem-vindo, {nome}
      </span>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h2>{totalUsers}</h2>
          <p>Usuários cadastrados</p>
        </div>
        

        <div className="dashboard-card">
          <h2>{totalRequests}</h2>
          <p>Solicitações registradas</p>
        </div>

        <div className="dashboard-card">
          <h2>{openRequests}</h2>
          <p>Solicitações abertas</p>
        </div>

        <div className="dashboard-card">
          <h2>{resolvedRequests}</h2>
          <p>Solicitações resolvidas</p>
        </div>
      </section>

      <section className="content-card">
        <h2>Resumo Administrativo</h2>
        <p>Utilize o menu superior para gerenciar usuários, solicitações e consultar protocolos.</p>
      </section>
    </Layout>
  );
}

export default DashboardGestor;